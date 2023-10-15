import { Route, Routes } from "react-router-dom"
import AddProduct from "../pages/addProduct/AddProduct"
import ShowProduct from "../pages/showProduct/ShowProduct"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ShowProduct/>} />
        <Route path="/create" element={<AddProduct />} />
    </Routes>
  )
}

export default AppRoutes