export default function Input(props: any) {
    const {
        classNameLabel,
        labelName,
        type,
        placeholder,
        value,
        classNameInput,
        onChange,
        name,
        errorMessage,
        isError,
    } = props;
    return (
        <>
            {labelName && <label className={classNameLabel}>{labelName}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                className={classNameInput}
                onChange={onChange}
                name={name}
            />
            {isError && <div className="text-danger h7">{errorMessage}</div>}
        </>
    );
}