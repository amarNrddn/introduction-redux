import { useSelector, } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { getProduct, productSelector,deleteProduct } from "../../redux/features/addProduct"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ShowProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(productSelector.selectAll)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div className="" >
            <button onClick={() => navigate('/create')}>Add Product</button>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProduct