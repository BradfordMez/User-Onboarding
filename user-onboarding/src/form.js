import React, {useState, useEffect} from 'react'
import FadeIn from 'react-fade-in';
import * as yup from 'yup'
import axios from 'axios'
import IndividualUser from './IndividualUser';


export default function UserForm({addToTeam}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    })

    const [user, setUser] = useState()

    // const [submitButton, setSubmitButton] = useState(false)

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
            .oneOf([], "Accept the terms")

    })

    const validateChange= evt => {
        yup.reach(formSchema, evt.target.name).validate(evt.target.value).then(valid=>{
            setErrors({...errors, [evt.target.name]:""})
        })
        .catch(err=>{setErrors({...errors, [evt.target.name]:err.errors[0] })})
    }


    const onChange=evt=>{
        evt.persist()
        const newFormData = {...formData, [evt.target.name]: evt.target.type==='checkbox'? evt.target.checked: evt.target.value 
        }
        validateChange(evt)
        setFormData(newFormData)

    }

    const onSubmit = evt => {
        evt.preventDefault()
        axios.post('https://reqres.in/api/users', formData)
            .then(res=>{
                addToTeam(res.data)
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    terms: '',
                })
            }).catch(err=>console.log(err))
      }
    
    return (
        <FadeIn>
            <form onSubmit={onSubmit}>
                <>
                        <label>Name:
                            <input type='text' name='name' value={formData.name} onChange={onChange} />
                            {errors.name.length>0 ? <p className='error'>{errors.name}</p>: null}
                        </label>
                        <label>Email:
                            <input type='email' name='email' value={formData.email} onChange={onChange} />
                            {errors.email.length > 0 ? <p className='error'>{errors.email}</p>:null}
                        </label>
                        <label>Password:
                            <input type='password' name='password' value={formData.password} onChange={onChange} />
                            {errors.password.length > 0 ? <p className='error'>{errors.password}</p>:null}
                        </label>
                        <label className='terms'>Terms of Service
                            <input type='checkbox' name='terms' checked={formData.terms} onChange={onChange}/>
                            {errors.terms.length > 0 ? <p className='error'>{errors.terms}</p>:null}
                        </label>
                        <button type='submit' name='button' >Submit</button>
                        
                </>
            </form>
        </FadeIn>
    )
}
