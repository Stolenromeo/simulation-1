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
      inventory: [],
      selectedid: null
    }
  }

  componentDidMount=()=> {
    axios.get('/api/products').then(res=>{
        this.setState({inventory:res.data})
    })
}

  setID=(id)=>{
    this.setState({
      selectedid: id
    })
  }

  add=(newProduct)=>{
    let inventory=this.state.inventory
    if(!!newProduct)
    inventory.push(newProduct)
    this.setState({inventory})
    axios.post('/api/products', newProduct)
  }



  render() {
    return (
      <div className="App">
       <Header />
       <Dashboard className="Dashboard" inventory={this.state.inventory} get={this.componentDidMount} setID={this.setID}/>
       <Form add={this.add} inventory={this.state.inventory} className="form" selected={this.state.selectedid} update={this.state.update} get={this.componentDidMount}/>
      </div>
    );
  }
}

export default App;
