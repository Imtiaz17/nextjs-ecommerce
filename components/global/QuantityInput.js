import { useEffect, useState } from 'react';
function QuantityInput(props) {
    const [quantity, setQuantity] = useState(props.value.quantity?props.value.quantity:1);
    const {product,name,price}= props.value;
    const incrementCounter=()=>{
        setQuantity(quantity+1)
        props.onQuantityInc(product,quantity+1)
    }
    const decrementCounter=()=>{
        if(quantity<=1) return;
        setQuantity(quantity-1)
        props.onQuantityDec(product,quantity-1)
    }

    

    return (
        <div className="FormInput">
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"  onClick={decrementCounter}>-</div>
                <div className="h-8 w-8 text-base flex items-center justify-center">{quantity}</div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={incrementCounter}>+</div>
            </div>
        </div>
    )
}

export default QuantityInput;