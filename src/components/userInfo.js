import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../firebase';
import { flexbox } from '@material-ui/system';
import NavigationBar from './NavigationBar'
import { Form, Button, Card, Alert, Container2 } from "react-bootstrap"
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, diet, dietGoal, age, height, weight, weightGoal, gender;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
            var dietThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/diet");
            dietThis.on('value', (snapshot) => {
            diet = snapshot.val();
            });
            var dietGoalThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/dietGoal");
            dietGoalThis.on('value', (snapshot) => {
            dietGoal = snapshot.val();
            });
            var ageThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/age");
            ageThis.on('value', (snapshot) => {
            age = snapshot.val();
            });
            var weightThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/weight");
            weightThis.on('value', (snapshot) => {
            weight = snapshot.val();
            });
            var weightGoalThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/weightGoal");
            weightGoalThis.on('value', (snapshot) => {
            weightGoal = snapshot.val();
            });
            var heightThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/height");
            heightThis.on('value', (snapshot) => {
            height = snapshot.val();
            });
            var genderThis = firebase.database().ref('userSurvey/' + uid + '/answers' + "/gender");
            genderThis.on('value', (snapshot) => {
            gender = snapshot.val();
            });
          }
    } else {
      // No user is signed in.
    }
  });

export const userInfo = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>

            <Container>
                <Box justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "palevioletred" width = "100%" height = "95vh" borderColor="primary.main" borderRadius={16}>
                    <div>
                        <Grid container spacing = {10} justify = "center" alignIterms = "center" style = {{minheight: '100vh'}}>
                            <Grid item xs = {7} >
                                <Paper elevation={3} variant="outlined" style = {{height:'100%', width:"100%",}}>
                                    <Box color="primary.main" pt={7}fontSize={57} fontWeight="fontWeightBold"> User information</Box>
                                    <Box color="primary.main" pt={3}> Name: {name}</Box>
                                    <Box color="primary.main" pt={1}> Age: {age} years</Box>
                                    <Box color="primary.main" pt={1}> Gender: {gender}</Box>
                                    <Box color="primary.main" pt={1}> Diet: {diet}</Box>
                                    <Box color="primary.main" pt={1}> Diet goal: {dietGoal}</Box>
                                    <Box color="primary.main" pt={1}> Height: {height} inches</Box>
                                    <Box color="primary.main" pt={1}> Weight: {weight}</Box>
                                    <Box color="primary.main" pt={1}> Weight goal: {weightGoal}</Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </div>
    )
}

export default userInfo;
