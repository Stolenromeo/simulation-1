import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component{

    delete = (id) => {
        axios.delete(`/api/products/${id}`).then(res => {
         this.props.get();
        })
      }

    render(props){
        return(
        <div>
            {this.props.inventory.map((elem, i)=>{
               
                return(
                   <Product elem={elem} delete={this.delete} setID={this.props.setID}/>
                )
            })}
        </div>
        )
    }
}