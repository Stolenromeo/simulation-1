import React, {Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()

        this.state={
            name: "",
            price:0,
            imgurl:""
        }
    }

    handleChange=(value, property)=>{
        let obj = {}
        obj[property] = value;
        this.setState(obj)
    }
    post=(props)=>{
        let {name, price, imgurl}=this.state;
        let inventory= this.props.inventory;
        let newProduct={imgurl, name, price}
        this.props.add(newProduct);
        this.reset();
    }

    reset=()=>{
        this.setState({
            name: "",
            price:0,
            imgurl:""
        })
    }

        render(){
            return(
            <div>
                <img src={this.state.imgurl} />
                <p>Image URL:</p>
                <input type="text" onChange={(e) => this.handleChange(e.target.value, 'imgurl')} value={this.state.imgurl}/>
                <p>Product Name:</p>
                <input type="text" onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name}/>
                <p>Price:</p>
                <input type="number" onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price}/>
                <button onClick={this.reset}>Cancel</button>
                <button onClick={this.post}>Add to Inventory</button>
            </div>
            )
    }
}