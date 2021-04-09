import { render } from '@testing-library/react';
import React, {Component} from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from "@material-ui/core/TextField";
var uuid = require('uuid');

class Survey extends Component {

    surveySubmit(event){

    };

    answerSelected(event){
        var answers = this.state.answers;

        if(event.target.name == 'ans1'){
            answers.ans1 = event.target.value;
        }
        else if(event.target.name == 'ans2'){
            answers.ans2 = event.target.value;
        }
        else if(event.target.name == 'ans3'){
            answers.ans3 = event.target.value;
        }
        this.setState({answers:answers},function(){
            console.log(this.state);
        })
    };


    constructor(props){
        super(props);

        this.state={
            uid: uuid.v1(),
            answers:{
                ans1:'',
                ans2:'',
                ans3:'',
                ans4:'',
                ans5:'',
            },
            isSubmitted: false
        };
        this.surveySubmit = this.surveySubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this)
    }
    render(){
        var intro = '';
        var questions = '';
        
            intro = <div>
                <h1 style={{textAlign: 'center'}}>Welcome to our survey</h1>
            </div>;

            questions = <div>
                <h2 style={{textAlign: 'center'}}>Here are some questions</h2>
                <form onSubmit={this.surveySubmit} style={{textAlign: 'center'}}>
                    <div className="card" >
                        <label>What is your age range in years?</label>
                        <TextField required InputProps={{ inputProps: { min: 10, max: 100 } }} type = "number" placeholder = "21" name = "ans1" variant = "outlined" onChange={this.answerSelected}></TextField>
                    </div>

                    <div className="card">
                        <label>What is your weight range in pounds?</label>
                        <TextField required InputProps={{ inputProps: { min: 50, max: 500 } }} type = "number" placeholder = "150" name = "ans2" variant = "outlined" onChange={this.answerSelected}></TextField>
                    </div>

                    <div className="card">
                        <label>What is your goal?</label>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                            <Button name = "ans3" value="Lose weight" onClick={this.answerSelected}>Lose weight</Button>
                            <Button name = "ans3" value="Gain weight" onClick={this.answerSelected}>Gain weight</Button>
                            <Button name = "ans3" value="Maintain weight" onClick={this.answerSelected}>Main weight</Button>
                            <Button name = "ans3" value="Build muscle" onClick={this.answerSelected}>Build muscle</Button>
                        </ButtonGroup>
                    </div>

                    <div className="card">
                        <label>What is diet like?</label>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                            <Button name = "ans4" value="Vegeterian" onClick={this.answerSelected}>Vegeterian</Button>
                            <Button name = "ans4" value="Keto" onClick={this.answerSelected}>Keto</Button>
                            <Button name = "ans4" value="Pescatarian" onClick={this.answerSelected}>Pescatarian</Button>
                            <Button name = "ans4" value="Other" onClick={this.answerSelected}>Other</Button>
                        </ButtonGroup>
                    </div>

                    <div className="card">
                        <label>What is your diet goal?</label>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                            <Button name = "ans5" value="Vegeterian" onClick={this.answerSelected}>Vegeterian</Button>
                            <Button name = "ans5" value="Keto" onClick={this.answerSelected}>Keto</Button>
                            <Button name = "ans5" value="Pescatarian" onClick={this.answerSelected}>Pescatarian</Button>
                            <Button name = "ans5" value="Other" onClick={this.answerSelected}>Other</Button>
                        </ButtonGroup>
                    </div>
                    <input className = "feedback-button" type="submit" value="submit" />
                </form>
            </div>
    return (
        <div>
            {intro}
            {questions}
        </div>
    );
    }
}

export default Survey;