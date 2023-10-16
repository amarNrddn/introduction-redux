import InputText from "../../components/InputText/InputText"

const form = ({ form }) => {
    return (
        <div>
            <InputText
                value={form.title}
            />
        </div>
    )
}

export default form