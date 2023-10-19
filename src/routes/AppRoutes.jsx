import { Route, Routes } from "react-router-dom"
import AddProduct from "../pages/addProduct/AddProduct"
import ShowProduct from "../pages/showProduct/ShowProduct"
import UpdateProduct from "../pages/updateProduct/UpdateProduct"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ShowProduct/>} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
    </Routes>
  )
}

export default AppRoutes