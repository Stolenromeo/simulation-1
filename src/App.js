import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(res=>{
        this.setState({inventory:res.data})
    })
    console.log(this.state.inventory)
}

  display=()=>{
    this.state.inventory.map(elem=>{
      return(
        <div>
          {elem}
        </div>
      )
    })
  }

  add=(newProduct)=>{
    let inventory=this.state.inventory
    if(!!newProduct)
    inventory.push(newProduct)
    this.setState({inventory})
    console.log(this.state.inventory)
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Dashboard className="Dashboard" inventory={this.state.inventory}/>
       <Form add={this.add} inventory={this.state.inventory} className="form"/>
       <Product />
      </div>
    );
  }
}

export default App;
