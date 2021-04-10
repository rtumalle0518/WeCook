import React, { Component } from 'react';
import './App.css';
import NavigationBar from "./NavigationBar";


class textbox extends Component{

    constructor(props){
        super(props)
        this.state = {
            fullName: ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const data = this.state //this is the variable that will be sent to the database
        console.log("Final data is", data)
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
            <form onSubmit={this.handleSubmit}>
                <p><input type='text' placeholder='Your name' value={fullName}
                 name='fullName' onChange={this.handleInputChange} /></p>
                <p><button>Send message</button></p>
            </form>

        </div>
        
);        

        
    }


}

export default textbox;