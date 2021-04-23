import React, { useContext, useState } from "react";
import { Form, Button} from 'react-bootstrap';
import firebase from 'firebase/app';
import { firestore, auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { Formik, Field} from 'formik';
import NavigationBar from './NavigationBar';
import {StyledContainer} from './Styles.js';
import { StyledTitle, StyledSubTitle } from "./Styles.js";
import "./Cookbook.css";
import  './App.css';
import * as yup from 'yup'
var uuid = require("uuid");

export default function NewRecipe() {
  const user = auth.currentUser
  const history = useHistory();
  // const SUPPORTED_FORMATS = [ 
  //   "image/jpg",
  //   "image/jpeg",
  //   "image/png"
  // ];

  if(!user){
    history.push("/login");
  }


  const schema = yup.object().shape({
    title: yup.string().min(1, 'Must be 1 character or more').required('Please enter a title'),
    dishType: yup.string().required('Please select a dish type'),
    servings: yup.number().required('Please enter a number'),
    cookingTime: yup.string().required('Please enter the cooking time'),
    description: yup.string().required('Please enter a description'),
    ingredients: yup.string().required('Please enter the ingredients'),
    directions: yup.string().required('Please enter the directions'),
    // file: yup
    //       .mixed()
    //       .required("A file is required")
    //       .test("FILE_SIZE", "Uploaded file is too big.", 
    //         value => !value || (value && value.size <= FILE_SIZE))
    //       .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
    //         value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))

  });

  return (
    <>
    <NavigationBar></NavigationBar>
    <StyledContainer>
      <Formik
        initialValues={{
          title: '',
          dishType: '',
          description: '',
          ingredients: '',
          directions: '',
          servings: '',
          cookingTime: '',
        }}
        onSubmit={(values, onSubmitProps) => {
          onSubmitProps.setSubmitting(true);
          const ingredientsArray = values.ingredients.split("\n");
          const directionsArray = values.directions.split(", ")

          firestore
            .collection("recipes").doc(user.uid).collection("personal").doc(uuid.v1())
            .set ({
              name: values.title,
              dishType: values.dishType,
              description: values.description,
              servings: values.servings,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              cookingTime: values.cookingTime,
              ingredients: ingredientsArray,
              directions: directionsArray,
              user:user.email,
              userid:user.uid,

            });

          console.log(values)
          onSubmitProps.setSubmitting(false);
          onSubmitProps.resetForm();
        }}
        validationSchema={schema}
      >
        {({
          values,
          touched,
          errors,
          isValid,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
        <Form style = {{ marginLeft: '0px' }} onSubmit={handleSubmit}>
          <div className="cookbooktext" style = {{textAlign: 'center'}}>Create Your Recipe!</div>
          <Form.Group controlId="validationTitle">
            <Form.Label>Recipe Title</Form.Label>
            <Field placeholder="ex: Cheesecake" name="title"
              type="input" as={Form.Control} isValid={touched.title && !errors.title} isInvalid={!!errors.title}/>
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Dish Type</Form.Label>
            <Form.Control
              name="dishType" 
              value={values.dishType}
              placeholder="Please Select"
              as="select"
              onChange={handleChange}
              onBlur={handleBlur}
              custom
              isValid={touched.dishType && !errors.dishType} 
              isInvalid={!!errors.dishType}
              >
              <option value="">Please Select</option>
              <option>Main Dish</option>
              <option>Side Dish</option>
              <option>Appetizer</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drink</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.dishType}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationServings">
            <Form.Label>Serving Size</Form.Label>
            <Form.Control 
              type="text"
              name="servings" 
              value={values.servings}
              placeholder="ex: 4"
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.servings && !errors.servings}
              isInvalid={!!errors.servings}
            />
            <Form.Control.Feedback type="invalid">
              {errors.servings}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCookingTime">
            <Form.Label>Cooking Time</Form.Label>
            <Form.Control 
              type="text"
              name="cookingTime" 
              value={values.cookingTime}
              placeholder="ex: 1 hr 45 mins"
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.cookingTime && !errors.cookingTime}
              isInvalid={!!errors.cookingTime}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cookingTime}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
              className="descrip"
              name="description"
              rows={5} 
              value={values.description}
              placeholder="Enter Description of Recipe"
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.description && !errors.description}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
             {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationIngredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control as="textarea"
              name="ingredients"
              rows={5} 
              value={values.ingredients}
              placeholder="Enter Ingredients of Recipe (Seperated by Lines)"
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.ingredients && !errors.ingredients}
              isInvalid={!!errors.ingredients}
            />
            <Form.Control.Feedback type="invalid">
             {errors.ingredients}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationDirections">
            <Form.Label>Directions</Form.Label>
            <Form.Control as="textarea"
              name="directions"
              rows={5} 
              value={values.directions}
              placeholder="Enter Directions of Recipe (Seperated by Commas)"
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.directions && !errors.directions}
              isInvalid={!!errors.directions}
            />
            <Form.Control.Feedback type="invalid">
             {errors.directions}
            </Form.Control.Feedback>
          </Form.Group>
          
          {/* <Form.Group controlId= "validationFile">
            <Field
              name="file" 
              type="file" 
              as={Form.File}
              isValid={touched.file && !errors.file}
              isInvalid={!!errors.file} 
            />
            <Form.Control.Feedback type="invalid">
             {errors.file}
            </Form.Control.Feedback>
          </Form.Group> */}


          <div className="d-flex justify-content-center align-items-center" style={{ marginBottom: "30px"}}>
            <Button disabled={isSubmitting} type="submit">Submit Recipe!</Button>
          </div>
          {/* for testing purposes <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
        )}
      </Formik>
      </StyledContainer> 
    </>
  );
};
