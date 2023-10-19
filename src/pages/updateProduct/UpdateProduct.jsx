import React, { useState } from 'react'
import Form from './Form'

const UpdateProduct = () => {
    const [form, setFaorm] = useState({
        title: "",
        price: ""
    })

    const hendleOnchange = (e) => {
        setFaorm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form
                form={form}
                hendleOnchange={hendleOnchange}
            />
             <button
                
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Update
            </button>
        </div>
    )
}

export default UpdateProduct