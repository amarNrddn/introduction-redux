/* eslint-disable react/prop-types */
import InputText from '../../components/InputText/InputText'

const Form = ({ form, hendleOnchange }) => {
    return (
        <div className='w-full flex flex-col justify-center'>
            <div className='w-72 flex flex-col'>
                <div className="mb-2">
                    <InputText
                        label={"masukan Produk"}
                        value={form.title}
                        name={"title"}
                        onChange={hendleOnchange}
                    />
                </div>
            </div>

            <div className="mb-2">
                <InputText
                    label={"masukan Harga"}
                    value={form.price}
                    name={"price"}
                    onChange={hendleOnchange}
                />
            </div>
        </div>
    )
}

export default Form