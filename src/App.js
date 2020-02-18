import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputObject:{
      user: '',
      city: '',
      state: '',
    },
    finalObject: {
      user: '',
      city: '',
      state: ''
    },
    numberArray: [7,8,9],
  }

  // handleUserChange = (event) => {
  //   console.log(event.target.value);
  //   this.setState({
  //     user: event.target.value
  //   });
  // }

  // handleCityChange = (event) => {
  //   this.setState({
  //     city: event.target.value
  //   });
  // }
  
  //   handleStateChange = (event) => {
  //     this.setState({
  //       state: event.target.value
  //   });
  // }

  handleChange = (event, typeOf) => {
    console.log(event.target.value, typeOf);
    this.setState({
      [typeOf]: event.target.value
    })
  }
  updateArray = () => {
    console.log(this.state.numberArray);
    let newNum = 7;
    this.setState({
      numberArray: [...this.state.numberArray, newNum]
    })
  }

  handleSubmit = (event) => {
    this.setState({
      finalObject: {
        user: this.state.user,
        city: this.state.city,
        state: this.state.state
      }
  });
  
}
  render(){
  return (
    <div className="App">

      <h1>This is my App!</h1>
      <input placeholder="name" onChange={(event)=> this.handleChange(event, 'user')}/>
      <input placeholder="city" onChange={(event)=> this.handleChange(event, 'city')}/>
      <input placeholder="state" onChange={(event)=> this.handleChange(event, 'state')}/>
      <button onClick={this.handleSubmit} >Submit</button>
      <h2>hi! my name is {this.state.finalObject.user} </h2>
      <h2>and i live in: {this.state.finalObject.city}, {this.state.finalObject.state} </h2>
      <button onClick={this.updateArray}>update number array</button>
      <h3>{this.state.numberArray}</h3>
            </div>
    );
   }
}

export default App;
