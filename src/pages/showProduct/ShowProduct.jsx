import { useSelector, } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { getProduct, productSelector, deleteProduct } from "../../redux/features/addProduct"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Thead } from "../../components/Thead/Thead"
import { Card, Typography } from "@material-tailwind/react"
import RButton from "../../components/Button/RButton"

const ShowProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(productSelector.selectAll)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <div className="px-8 pt-5" >
            <RButton
                className={"mb-2"}
                color={"green"}
                action={() => navigate('/create')}
            >
                Add Product
            </RButton>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {Thead.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <tr key={product.id} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index + 1}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {product.title}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        Rp.{product.price}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Link to={`update/${product.id}`}>
                                        <RButton
                                            className={"mr-2"}
                                            color={"blue"}
                                        >
                                            Edit
                                        </RButton>
                                    </Link>
                                    <RButton
                                        color={"red"}
                                        action={() => dispatch(deleteProduct(product.id))}
                                    >
                                        Delete
                                    </RButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default ShowProduct