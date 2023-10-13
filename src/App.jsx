import AddProduct from "./pages/addProduct/AddProduct"
import ShowProduct from "./pages/showProduct/ShowProduct"

function App() {

  return (
    <div className="flex justify-center">
      <div className="w-[50%] text-center">
        <AddProduct />
      </div>
      <div className="w-[50%] text-center">
        <ShowProduct />
      </div>
    </div>
  )
}

export default App
