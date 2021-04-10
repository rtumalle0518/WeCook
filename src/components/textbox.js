/*import React, { Component } from 'react';
import './App.css';
import NavigationBar from "./NavigationBar";
import app from '../firebase';


class textbox extends Component{

    constructor(props){
        super(props)
        this.state = {
            fullName: ''
        }
    }

    handleSubmit = (event) =>{
        let messageRef = app.database().ref('messages').orderByKey().limitToLast(100);
        app.database().ref('messages').push(this.state.fullName)
        event.preventDefault();
        //const data = this.state //this is the variable that will be sent to the database
       // console.log("Final data is", data)
    }
    
    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {fullName} = this.state

    return (
        
        <div style={{textAlign: 'center'}}>
            <NavigationBar></NavigationBar>
            <p><h1>Forms and inputs</h1></p>
            <p>Full name is:{fullName}</p>
            <form>
                <p><input type='text' placeholder='Your name' value={fullName}
                 name='fullName' onChange={this.handleInputChange} /></p>
                <p><button onclick={this.handleSubmit}>Send message</button></p>
            </form>

        </div>
        
);        

        
    }


}

export default textbox; */

import React , { Component } from 'react';
import './App.css';
import app from '../firebase';
class App extends Component{

  state={
    text : ""
  }

  handleText=e=>{
    this.setState({
      text : e.target.value
    })
  }
  handleSubmit=e=>{
    let messageRef = app.database().ref('messages').orderByKey().limitToLast(100);
    app.database().ref('messages').push(this.state.text);
    this.setState({
      text : ""
    })
  }

  render(){
    return (
      <div className="App-header">
       <input type ="text" onChange={this.handleText} id="inputText"/>
       <br/>
       <button onClick={this.handleSubmit}> Save </button>
      </div>
    );
  }
}


export default App;