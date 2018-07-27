import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        this.setState({climbs:res.data})
    })
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
       <Dashboard />
       <Form add={this.add} inventory={this.state.inventory}/>
       <Product />
      </div>
    );
  }
}

export default App;
