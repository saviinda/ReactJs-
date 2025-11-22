import React, {useState} from 'react';
function OnChange(){
    const[name,setName] = useState("Enter name here");
    const[quantity,setQuantity] = useState(0);

    function handleName(event){
        setName(event.target.value);
    }

    function qty(event){
        setQuantity(event.target.value);
    }
    
    return(
        <div>
            <input value={name} onChange={handleName} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={qty} />
            <p>Quantity: {quantity}</p>
        </div>
    );
}
export default OnChange