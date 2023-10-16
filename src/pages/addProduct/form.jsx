/* eslint-disable react/prop-types */
import InputText from '../../components/InputText/InputText'

const Form = ({ form, hendleOnchange }) => {
    return (
        <div className='flex flex-col'>
              <p>Masukan Title</p> 
            <InputText
                value={form.title}
                name={"title"}
                placeholder={"Nama Produk"}
                onChange={hendleOnchange}
            />

            <p>Masukan Price</p>    
            <InputText
                value={form.price}
                name={"price"}
                placeholder={"price"}
                onChange={hendleOnchange}
            />
        </div>
    )
}

export default Form