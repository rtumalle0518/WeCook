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
import {firestore} from "../firebase";
import NavigationBar from "./NavigationBar";
import { Link, useHistory } from 'react-router-dom'
import UploadProfileImage from "./UploadProfileImage";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
var uid;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user != null) {
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
          }
    } else {
      // No user is signed in.
    }
  });

class Survey extends Component {

    surveySubmit(event){
        firebase.database().ref('userSurvey/' + uid).set({
            answers:this.state.answers
        });
        firestore
        .collection("userSurvey")
        .doc(uid)
        .set({
            answers: this.state.answers,
        });
        this.setState({isSubmitted:true})
    }

    answerSelected(event){
        var answers = this.state.answers;

        if(event.target.name == 'age'){
            answers.age = event.target.value;
        }
        else if(event.target.name == 'weight'){
            answers.weight = event.target.value;
        }
        else if(event.target.name == 'weightGoal'){
            answers.weightGoal = event.target.value;
        }
        else if(event.target.name == 'diet'){
            answers.diet = event.target.value;
        }
        else if(event.target.name == 'dietGoal'){
            answers.dietGoal = event.target.value;
        }
        else if(event.target.name == 'height'){
            answers.height = event.target.value;
        }
        else if(event.target.name == 'gender'){
            answers.gender = event.target.value;
        }
        this.setState({answers:answers},function(){
            console.log(this.state);
        })
    };
    userSelected(event){
        if(event.target.name == 'userName'){
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    user.updateProfile({
                        displayName: event.target.value
                      }).then(function() {
                        
                      }).catch(function(error) {
                        
                      });
                } else {
                  // No user is signed in.
                }
              });
        }
    };

    constructor(props){
        super(props);

        this.state={
            answers:{
                age:'',
                weight:'',
                weightGoal:'',
                diet:'',
                dietGoal:'',
                height:'',
                gender:'',
            },
            isSubmitted: false
        };
        this.surveySubmit = this.surveySubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this)
        this.userSelected = this.userSelected.bind(this)
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
            <form onSubmit={this.surveySubmit} style={{textAlign: 'center', marginLeft: '770px'}}>
                <div className="card" >
                    <label>What is your name?</label>
                    <TextField required type = "text" placeholder = "John Bean" helperText = "Full name" name = "userName" variant = "outlined" onChange={this.userSelected}></TextField>
                </div>
                <div className="card" >
                    <label>What is your age range in years?</label>
                    <TextField required InputProps={{ inputProps: { min: 10, max: 100 } }} type = "number" placeholder = "21" name = "age" variant = "outlined" onChange={this.answerSelected}></TextField>
                </div>

                <div className="card">
                    <label>What is your weight in pounds?</label>
                    <TextField required InputProps={{ inputProps: { min: 50, max: 500 } }} type = "number" placeholder = "150" name = "weight" variant = "outlined" onChange={this.answerSelected}></TextField>
                </div>
                <div className="card">
                    <label>What is your height in inches?</label>
                    <TextField required InputProps={{ inputProps: { min: 1, max: 96 } }} type = "number" placeholder = "70" name = "height" variant = "outlined" onChange={this.answerSelected}></TextField>
                </div>

                <div className="card">
                    <label>What is your gender?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "gender" value="Male" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Male" />
                                <FormControlLabel name = "gender" value="Female" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Female" />
                                <FormControlLabel name = "gender" value="Other" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required/>} label="Other" />
                            </RadioGroup>
                    </FormControl>
                </div>

                <div className="card">
                    <label>What is your goal?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "weightGoal" value="Lose weight" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Lose weight" />
                                <FormControlLabel name = "weightGoal" value="Gain weight" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Gain weight" />
                                <FormControlLabel name = "weightGoal" value="Maintain weight" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required/>} label="Maintain weight" />
                                <FormControlLabel name = "weightGoal" value="Build muscle" onChange = {this.answerSelected} labelPlacement="top" control={<Radio required />} label="Build muscle" />
                            </RadioGroup>
                    </FormControl>
                </div>

                <div className="card">
                    <label>What is diet like?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "diet" value="Vegeterian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Vegeterian" />
                                <FormControlLabel name = "diet" value="Keto" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Keto" />
                                <FormControlLabel name = "diet" value="Pescatarian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Pescatarian" />
                                <FormControlLabel name = "diet" value="I have no diet" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="I have no diet" />
                                <FormControlLabel name = "diet" value="Other" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Other" />
                            </RadioGroup>
                    </FormControl>
                </div>

                <div className="card">
                    <label>What is your diet goal?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel name = "dietGoal" value="Vegeterian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Vegeterian" />
                                <FormControlLabel name = "dietGoal" value="Keto" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Keto" />
                                <FormControlLabel name = "dietGoal" value="Pescatarian" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Pescatarian" />
                                <FormControlLabel name = "dietGoal" value="Other" onClick={this.answerSelected} labelPlacement="top" control={<Radio required />} label="Other" />
                            </RadioGroup>
                    </FormControl>
                </div>
                <div className="card">
                    Upload profile image
                    <Box color="primary.main" display="flex" justifyContent="center" alignItems="center" p={1}>
                        <UploadProfileImage></UploadProfileImage>
                    </Box>
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
            {intro}
            {questions}
        </div>
    );
    }
}

export default Survey;