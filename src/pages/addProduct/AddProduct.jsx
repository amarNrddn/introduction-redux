import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProduct } from "../../redux/features/addProduct"
import { useNavigate } from "react-router-dom"
import Form from './Form'

const AddProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form,setForm] = useState({
        title: "",
        price: ""
    })

    const hendleOnchange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const hendleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(createProduct({...form}))
        navigate("/")
    }
    return (
        <div className="">
            <div className="">
                <Form 
                    form={form}
                    hendleOnchange={hendleOnchange}
                />
            </div>
            <button
                onClick={hendleSubmit}
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Save
            </button>
        </div>
    )
}

export default AddProduct