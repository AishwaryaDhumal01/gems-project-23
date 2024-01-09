import React from 'react'
import HeadPage from "../layout/headPage";
import TITLES from "@/utils/constants/title";
import styles from "./styles.module.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { Field, Formik } from "formik";
import * as yup from "yup";
import InputField from "../fields/inputFeild";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const defaultValues = {
  email: "",
  password: "",
  confirmPassword:"",
  termsAndConditions:false
};


function SignupPage() {

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  termsAndConditions: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),

  
    //terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  
 

  
  return (
    <HeadPage title={TITLES.sigin}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                {/* <Alert key="danger" variant="danger">
                  This is a alert—check it out!
                </Alert> */}
                <Formik
                  validationSchema={validationSchema}
                  //onSubmit={handleFormSubmit}
                  initialValues={defaultValues}
                >
                  {({ handleSubmit, isSubmitting }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit}>
                        <div
                          className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                        >
                          <div className="row my-2">
                            <div className="col-12">
                              <h2
                                className={`${styles.contactFormHeading} text-center`}
                              >
                                Signup
                              </h2>
                              <p
                                className={`${styles.contactFormParagh} text-center text-dark`}
                              >
                                Welcome to signup
                              </p>
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                name="email"
                                placeholder="Email Address"
                                label="Email"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="confirmPassword"
                                label="confirmPassword"
                                placeholder=" confirm password"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                          <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              name="terms"
                              label="I accept the terms and conditions"
                            />
                          </Form.Group>
                        </div>

                            <div className="col-12 mx-auto my-2 mt-4">
                              <Button
                                disabled={isSubmitting}
                                type="submit"
                                // variant={isSubmitting ? "secondary" : "primary"}
                                className={`btn w-100 ${
                                  isSubmitting ? "bg-secondary" : "bg-primary"
                                } bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}
                              >
                                {/* {isSubmitting ? "Submitting..." : "Login >>"} */}
                                {isSubmitting ? (
                                  <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </Spinner>
                                ) : (
                                  "Signup"
                                )}
                              </Button>
                            </div>

                            <div className="col-12 mt-4 d-flex justify-content-between">
                              <a href="./index.html">
                             <FaArrowLeft/> back
                              </a>
                              <a href="signup.html">
                                {" "}
                                login <FaArrowRight></FaArrowRight>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>
     
  )
}

export default SignupPage
