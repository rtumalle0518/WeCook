import React from 'react'
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../firebase';
import NavigationBar from './NavigationBar'
import { Form, Button, Card, Alert, Container} from "react-bootstrap"
//import {firestore} from "../firebase";
var database = firebase.database();
var name, email, photoUrl, uid, emailVerified, diet, dietGoal, age, height, weight, weightGoal, gender, test;
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
            var dietThis = database.ref('userSurvey/' + uid + '/answers' + "/diet");
            dietThis.on('value', (snapshot) => {
            diet = snapshot.val();
            });
            var dietGoalThis = database.ref('userSurvey/' + uid + '/answers' + "/dietGoal");
            dietGoalThis.on('value', (snapshot) => {
            dietGoal = snapshot.val();
            });
            var ageThis = database.ref('userSurvey/' + uid + '/answers' + "/age");
            ageThis.on('value', (snapshot) => {
            age = snapshot.val();
            });
            var weightThis = database.ref('userSurvey/' + uid + '/answers' + "/weight");
            weightThis.on('value', (snapshot) => {
            weight = snapshot.val();
            });
            var weightGoalThis = database.ref('userSurvey/' + uid + '/answers' + "/weightGoal");
            weightGoalThis.on('value', (snapshot) => {
            weightGoal = snapshot.val();
            });
            var heightThis = database.ref('userSurvey/' + uid + '/answers' + "/height");
            heightThis.on('value', (snapshot) => {
            height = snapshot.val();
            });
            var genderThis = database.ref('userSurvey/' + uid + '/answers' + "/gender");
            genderThis.on('value', (snapshot) => {
            gender = snapshot.val();
            });
            /* Bottom works but same does same thing as above
            var docRef = firestore.collection('userSurvey').doc(uid);
            docRef.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data().answers.diet);
                console.log("success");
                test = doc.data().answers.diet;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                console.log(uid);
            }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            */
          }
    } else {
      // No user is signed in.
    }
  });

export const userInfo = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
                <Card>
                    <Box alignItems="center" p={2} display = "flex" justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "white" width = "100%" height = "95vh" borderColor="primary.main" borderRadius={16}>
                        <div>
                            <Box display="flex" justifyContent="center" alignItems="center" p={1}>
                                <Avatar>
                                    <PersonIcon color="secondary" style={{ fontSize: 40 }}></PersonIcon>
                                </Avatar>
                            </Box>
                            <Box color="primary.main" pt={7}fontSize={57} fontWeight="fontWeightBold"> User information</Box>
                            <Box color="primary.main" pt={3}> Name: {name}</Box>
                            <Box color="primary.main" pt={1}> Age: {age} years</Box>
                            <Box color="primary.main" pt={1}> Gender: {gender}</Box>
                            <Box color="primary.main" pt={1}> Diet: {diet}</Box>
                            <Box color="primary.main" pt={1}> Diet goal: {dietGoal}</Box>
                            <Box color="primary.main" pt={1}> Height: {height} inches</Box>
                            <Box color="primary.main" pt={1}> Weight: {weight}</Box>
                            <Box color="primary.main" pt={1}> Weight goal: {weightGoal}</Box> 
                        </div>
                    </Box>
                </Card>
            </Container>
        </div>
    )
}

export default userInfo;
