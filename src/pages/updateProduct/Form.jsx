import React from 'react'
import InputText from '../../components/InputText/InputText'

function Form({ form, hendleOnchange }) {
    return (
        <div>
            <p>Nama Product</p>
            <InputText
                value={form.title}
                name={"title"}
                onChange={hendleOnchange}
                placeholder={""}
            />
            <p>Harga Product</p>
            <InputText
                value={form.price}
                name={"title"}
                onChange={hendleOnchange}
                placeholder={""}
            />
        </div>
    )
}

export default Form