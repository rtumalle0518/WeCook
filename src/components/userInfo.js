import React,{useState,useEffect} from 'react';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../firebase';
import NavigationBar from './NavigationBar'
import { Form, Button, Card, Alert, Container} from "react-bootstrap"
import {firestore} from "../firebase";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import useFirestore from '../hooks/useFirestore';
var database = firebase.database();
var name, email, photoUrl, uid, emailVerified, diet, dietGoal, age, height, weight, weightGoal, gender, test;
var pathReference;
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
            /*Code below no longer needed 
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
            */
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

export const UserInfo = () => {
    const { docs } = useFirestore('images');
    const [user, setUser] = useState([]);
    const [userImage, setImage] = useState([]);
    const ref = firestore.collection("userSurvey").doc(uid);
    function getData (){
        ref.get().then((doc) => {
            if (doc.exists) {
                const items = doc.data().answers;
                setUser(items)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        var storage = firebase.storage();
        var pathReference = storage.ref('users/' + uid + '/profile.jpg');
        setImage(pathReference)
    }
    useEffect(()=> {
        getData();
    }, []);
    const metabolism = user.gender == "Male" ? Math.round(66.47 + (6.24 * user.weight) + (12.7 * user.height) - (6.755 * user.age)) : Math.round(655.1  + (4.35 * user.weight) + (4.7 * user.height) - (4.7 * user.age));
    const height = Math.round((user.height/12) * 10) / 10;
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
                <Card>
                    <Box alignItems="center" p={2} display = "flex" justifyContent="center" fontSize={26} textAlign="center" boxShadow={3} bgcolor = "white" width = "100%" height = "95vh" borderColor="primary.main" borderRadius={16}>
                        <div>
                            <Box display="flex" justifyContent="center" alignItems="center" p={1}>
                                <Avatar alt="Remy Sharp" src = {docs.url}/>
                            </Box>
                            <Box color="primary.main" pt={7} fontSize={57} fontWeight="fontWeightBold"> User information</Box>
                            <Box color="primary.main" pt={3}> Name: {name}</Box>
                            <Box color="primary.main" pt={1}> Age: {user.age} years</Box>
                            <Box color="primary.main" pt={1}> Gender: {user.gender}</Box>
                            <Box color="primary.main" pt={1}> Diet: {user.diet}</Box>
                            <Box color="primary.main" pt={1}> Diet goal: {user.dietGoal}</Box>
                            <Box color="primary.main" pt={1}> Height: {height} feet</Box>
                            <Box color="primary.main" pt={1}> Weight: {user.weight} pounds</Box>
                            <Box color="primary.main" pt={1}> Weight goal: {user.weightGoal}</Box> 
                            <Box color="primary.main" pt={1}> Estimated metabalism: {metabolism} calories</Box> 
                        </div>
                    </Box>
                </Card>
            </Container>
        </div>
    )
}

export default UserInfo;
