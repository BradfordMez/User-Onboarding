import React, {useState, useEffect} from 'react'
import FadeIn from 'react-fade-in';
import * as yup from 'yup'

export default function UserForm({addToTeam}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    })

    const [submitButton, setSubmitButton] = useState(true)

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    })

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Name must be filled out"),
        email: yup.string().email("Must be a valid email"),
        password: yup.string().required("Password must be 8 characters or more").min(8),
        terms: yup
            .boolean()
            .oneOf([true], "Accept the terms")

    })

    const validateChange= evt => {
        yup.reach(formSchema, evt.target.name).validate(evt.target.value).then(valid=>{
            setErrors({...errors, [evt.target.name]:""})
        })
        .catch(err=>{setErrors({...errors, [evt.target.name]:err.errors[0] })})
    }

    useEffect(()=>{
        formSchema.isValid(formData).then(valid=>{
            setSubmitButton(!valid)
        })
    }, [formData])


    // const handleInput = (event=>{
    //     const target = event.target;
    //     const value= target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     setFormData({...formData, [name]:value });
    // })
    const onChange=evt=>{
        console.log('changed!', evt.target.value)
        evt.persist()
        const newFormData = {...formData, [evt.target.name]: evt.target.type==='checkbox'? evt.target.checked: evt.target.value 
        }
        validateChange(evt)
        setFormData(newFormData)

    }

    const onSubmit = evt => {
        evt.preventDefault()
        const {name, email, password} = formData
        let newUser = {name, email, password}
        addToTeam(newUser)
        // onSubmit()
      }
    
    return (
        <FadeIn>
            <form onSubmit={onSubmit}>
                <>
                        <label>Name:
                            <input type='text' name='name' value={formData.name} onChange={onChange} />
                        </label>
                        <label>Email:
                            <input type='email' name='email' value={formData.email} onChange={onChange} />
                        </label>
                        <label>Password:
                            <input type='password' name='password' value={formData.password} onChange={onChange} />
                        </label>
                        <label>Terms of Service
                            <input type='checkbox' name='terms' checked={formData.terms}/>
                        </label>
                        <button disabled={submitButton} type='submit'>Submit</button>
                </>
            </form>
        </FadeIn>
    )
}
