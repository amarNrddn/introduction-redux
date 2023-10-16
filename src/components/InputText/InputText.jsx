const InputText = ({
    className,
    name,
    value,
    placeholder,
    onChange,
    type
}) => {
    return (
        <input
            className={className}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default InputText