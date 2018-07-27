import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component{
    constructor(){
        super()

        this.state={
            name: "",
            price:0,
            imgurl:"",
            edit:false
        }
    }

    componentDidUpdate(prevProps){

        if(prevProps.selected!== this.props.selected){
            let inventory=this.props.inventory
            for(let i=0; i<inventory.length; i++){
                if(inventory[i].id===this.props.selected){
                    let{name, price, img}= inventory[i]
                    this.setState({
                        name,
                        price,
                        imgurl:img,
                        edit:true
                    })
                }
            }
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
        let newProduct={name, price, imgurl}
        this.props.add(newProduct);
        this.reset();
    }

    edit=()=>{
        let {name, price, imgurl}=this.state;
        let id=this.props.selected
        let newProduct={name, price, imgurl};
        console.log(1111111,this.update(id, newProduct));
        this.reset();
    }

    update=(id, newProduct)=>{
        axios.put(`/api/products/${id}`, newProduct)
      }

    reset=()=>{
        this.setState({
            name: "",
            price:0,
            imgurl:"",
            edit: false
        })
    }

    render(){
        return(
            !this.state.edit
            ?
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
            :
            <div>
            <img src={this.state.imgurl} />
            <p>Image URL:</p>
            <input type="text" onChange={(e) => this.handleChange(e.target.value, 'imgurl')} value={this.state.imgurl}/>
            <p>Product Name:</p>
            <input type="text" onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name}/>
            <p>Price:</p>
            <input type="number" onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price}/>
            <button onClick={this.reset}>Cancel</button>
            <button onClick={this.edit}>Submit Changes</button>
            </div>
        )
    }
}