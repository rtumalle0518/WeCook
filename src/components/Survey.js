import { render } from '@testing-library/react';
import React, {Component} from 'react'
import './App.css';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import firebase from '../firebase';
import NavigationBar from "./NavigationBar";
import { Link, useHistory } from 'react-router-dom'
var uuid = require('uuid');

class Survey extends Component {

    surveySubmit(event){
        firebase.database().ref('Survey/' + this.state.uid).set({
            answers:this.state.answers
        });
        this.setState({isSubmitted:true})
    }

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
        else if(event.target.name == 'ans4'){
            answers.ans4 = event.target.value;
        }
        else if(event.target.name == 'ans5'){
            answers.ans5 = event.target.value;
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

        if(this.state.isSubmitted == false){
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
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "ans3" value="Lose weight" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Lose weight" />
                                <FormControlLabel name = "ans3" value="Gain weight" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Gain weight" />
                                <FormControlLabel name = "ans3" value="Maintain weight" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required/>} label="Maintain weight" />
                                <FormControlLabel name = "ans3" value="Build muscle" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Build muscle" />
                            </RadioGroup>
                    </FormControl>
                </div>

                <div className="card">
                    <label>What is diet like?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "ans4" value="Vegeterian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Vegeterian" />
                                <FormControlLabel name = "ans4" value="Keto" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Keto" />
                                <FormControlLabel name = "ans4" value="Pescatarian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Pescatarian" />
                                <FormControlLabel name = "ans4" value="Other" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Other" />
                            </RadioGroup>
                    </FormControl>
                </div>

                <div className="card">
                    <label>What is your diet goal?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "ans5" value="Vegeterian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Vegeterian" />
                                <FormControlLabel name = "ans5" value="Keto" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Keto" />
                                <FormControlLabel name = "ans5" value="Pescatarian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Pescatarian" />
                                <FormControlLabel name = "ans5" value="Other" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Other" />
                            </RadioGroup>
                    </FormControl>
                </div>
                <input className = "feedback-button" type="submit" value="submit" />
            </form>
        </div>
        }
        else if (this.state.isSubmitted == true){
            intro = <div>
                <div class="page-wrap d-flex flex-row align-items-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center">
                                <span class="display-1 d-block">Thank you for doing the survey</span>
                                <div class="mb-4 lead">Look around the app and explore!</div>
                                <Link to ='/WeCook'>Homepage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    return (
        <div>
            <NavigationBar></NavigationBar>
            {intro}
            {questions}
        </div>
    );
    }
}

export default Survey;