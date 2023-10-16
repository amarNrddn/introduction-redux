/* eslint-disable react/prop-types */
import React from "react"

const InputText = ({
    className,
    // eslint-disable-next-line react/prop-types
    name,
    // eslint-disable-next-line react/prop-types
    value,
    // eslint-disable-next-line react/prop-types
    placeholder,
    // eslint-disable-next-line react/prop-types
    onChange,

    // eslint-disable-next-line react/prop-types
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
// InputText.propTypes = {
//     className: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     type: PropTypes.string.isRequired
// };

export default InputText