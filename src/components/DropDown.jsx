const Dropdown = ({ name, value, onChange, options,icon, placeholder }) => {
    return (
        <div className="relative w-[100%] mb-4">
            <i className={`fi ${icon} input-icon`}></i>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="input-box"
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
