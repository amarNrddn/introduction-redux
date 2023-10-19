import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, updateProduct, productSelector } from '../../redux/features/addProduct'
import { useNavigate, useParams } from 'react-router-dom'
import RButton from '../../components/Button/RButton'

const UpdateProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const [form, setFaorm] = useState({
        title: "",
        price: ""
    })
    const product = useSelector((state) => productSelector.selectById(state, id))

    const hendleOnchange = (e) => {
        setFaorm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    useEffect(() => {
        if (product) {
            setFaorm({
                title: product.title || "",
                price: product.price || ""
            })
        }
    }, [product])

    const hendeleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(updateProduct({ id, ...form }))
        navigate('/')
    }
    return (
        <div className='w-full flex flex-col justify-center items-center pt-5'>
            <Form
                form={form}
                hendleOnchange={hendleOnchange}
            />
            <RButton
                action={hendeleSubmit}
                color="green"
                className="w-72"
            >
                Update
            </RButton>
        </div>
    )
}

export default UpdateProduct