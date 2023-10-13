import { useState } from "react"
import { useDispatch } from "react-redux"
import { update } from "../../redux/features/addProduct"

const AddProduct = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        title: "",
        price: ""
    })

    const hendleOnchange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const hendleSubmit = () => {
        dispatch(update({...form}))

        console.log(form)
    }
    return (
        <div className="">
            <div className="">
                <p>Masukan Title</p>
                <input
                    className=""
                    name="title"
                    value={form.title}
                    onChange={hendleOnchange}
                />
            </div>
            <div className="">
                <p>Masukan Title</p>
                <input
                    className=""
                    name="price"
                    value={form.price}
                    onChange={hendleOnchange}
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