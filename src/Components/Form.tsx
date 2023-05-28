import React, { useState } from 'react'

type IFormData = {
    email: string,
    password: string,
    mobile: number
}

const Form = () => {
    const [formData, setFormData]= useState<IFormData>({email:'', password: '', mobile: 0})
    const handleChange = (e:any) => {
        let id = e.target.id;
        let value = e.target.value;
        setFormData({...formData, [id]: value });
    }   
  return (
    <div>
        <input type="email" value={formData.email} onChange={handleChange} id="email" />
        <input type="password" value={formData.password} onChange={handleChange} id="password" />
        <input type="number" value={formData.mobile} onChange={handleChange} id="mobile" />
        {JSON.stringify(formData)}
    </div>
  )
}

export default Form