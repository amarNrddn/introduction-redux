import { useSelector } from "react-redux/es/hooks/useSelector"

const ShowProduct = () => {
    const { title, price } = useSelector(state => state.product)
    return (
        <div className="" >
            <h1>Show Product</h1>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default ShowProduct