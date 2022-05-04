function QuantityInput(props) {
    const {
        value=1,
        decrementCounter,
        incrementCounter,
    } = props;


    return (
        <div className="FormInput">
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={decrementCounter}>-</div>
                <div className="h-8 w-8 text-base flex items-center justify-center">{value}</div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={incrementCounter}>+</div>
            </div>
        </div>
    )
}

export default QuantityInput;