function PlayOption( { option, id, onChange } ) { 
    return (
        <>
        <label className="mt-1">
            <input 
                type="radio" 
                name={id} 
                className="mr-4"
                onChange={onChange}
            />
            <span>{option.text}</span>
        </label>
        </>
    );
}

export default PlayOption;