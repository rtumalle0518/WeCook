import React, { useContext, useState } from "react";
import { Form, Button} from 'react-bootstrap'
import { firestore, auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { Formik, Field} from 'formik';
import * as yup from 'yup'

export default function NewRecipe() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [directions, setDirections] = useState("");
  // const [validated, setValidated] = useState(false);
  const user = auth.currentUser
  const history = useHistory();
  if(!user){
    history.push("/login");
  }

  const schema = yup.object().shape({
    title: yup.string().min(1, 'Must be 1 character or more').required(),
    description: yup.string().required(),
    ingredients: yup.string().required(),
    directions: yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          description: '',
          ingredients: '',
          directions: '',
        }}

        onSubmit={(values, onSubmitProps) => {
          onSubmitProps.setSubmitting(true);
          const ingredientsArray = values.ingredients.split("\n");
          const directionsArray = values.directions.split(",")

          firestore
            .collection("recipes")
            .add({
              name: values.title,
              description: values.description,
              ingredients: ingredientsArray,
              directions: directionsArray,
              userid:user.email,
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
        }) => (
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="validationTitle">
            <Form.Label>Recipe Title</Form.Label>
            <Field placeholder="Enter recipe title" name="title" type="input" as={Form.Control} isValid={touched.title && !errors.title} isInvalid={!!errors.title}/>
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
              name="description"
              rows={5} 
              value={values.description}
              placeholder="Enter description of recipe"
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
              placeholder="Enter ingredients of recipe seperated by lines"
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
              placeholder="Enter directions of recipe seperated by commas"
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.directions && !errors.directions}
              isInvalid={!!errors.directions}
            />
            <Form.Control.Feedback type="invalid">
             {errors.directions}
            </Form.Control.Feedback>
          </Form.Group>

          <Button disabled={isSubmitting} type="submit">Submit Recipe!</Button>
          {/*For testing purposes: <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
        )}
      </Formik>
    </>
  );
};