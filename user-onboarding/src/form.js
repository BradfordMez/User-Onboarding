import React, {useState} from 'react'

export default function Form({addToTeam}) {
    const [formData, setFormData] = useState('')
    const handleInput = (event=>{
        const target = event.target;
        const value= target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
    })
    
    return (
        <form onSubmit={(event=>{
            event.preventDefault()
            const {name, email, password} = formData
            let newUser = {name, email, password}
            addToTeam(newUser)
        })}>
            <div>
                <Form>
                    <label>Name:
                        <input type='text' name='name' value={formData.name} />
                    </label>
                    <label>Email:
                        <input type='text' name='email' value={formData.email} />
                    </label>
                    <label>Password:
                        <input type='password' name='password' value={formData.password} />
                    </label>
                    <label>Terms of Service
                        <input/>
                    </label>
                </Form>
            </div>
        </form>
    )
}
