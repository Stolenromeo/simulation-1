import React from 'react'

export default function Product (props){
    let {name, price, img, id}= props.elem;
    return(
        <div>
        <img src={img} alt={name}/>
        <div>
            {name}
        </div>
        <div>
            {price}
        </div>
        <button onClick={()=>props.delete(id)}>Delete</button>
        <button onClick={()=>props.setID(id)}>Update</button>
    </div>
        )
}