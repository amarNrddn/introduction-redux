import React from 'react'
import InputText from '../../components/InputText/InputText'

function Form({ form, hendleOnchange }) {
    return (
        <div className='w-full flex justify-center'>

            <div className='w-72 flex flex-col'>
                <div className="mb-2">
                    <p>Nama Product</p>
                    <InputText
                        value={form.title}
                        name={"title"}
                        onChange={hendleOnchange}
                        placeholder={""}
                        className={"w-72"}
                    />
                </div>
                    
                <div className="mb-2">
                    <p>Harga Product</p>
                    <InputText
                        value={form.price}
                        name={"title"}
                        onChange={hendleOnchange}
                        placeholder={""}
                        className={"w-72"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form