import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProduct } from "../../redux/features/addProduct"
import { useNavigate } from "react-router-dom"
import Form from './Form'
import RButton from "../../components/Button/RButton"

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
        <div className="w-full flex flex-col justify-center items-center pt-5">
            <div className="">
                <Form 
                    form={form}
                    hendleOnchange={hendleOnchange}
                />
            </div>
            <RButton
                action={hendleSubmit}
                color={"blue"}
                >
                Save
            </RButton>
        </div>
    )
}

export default AddProduct