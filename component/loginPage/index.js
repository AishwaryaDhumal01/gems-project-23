import React from "react";
import HeadPage from "../layout/headPage";
import TITLES from "@/utils/constants/title"
import styles from "./styles.module.css";
import { Button, Form } from "react-bootstrap";
import { FaLock,FaArrowLeft,FaArrowRight } from "react-icons/fa"; 

function Login() {
  return (
    <>
      <HeadPage title={TITLES.login}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                <Form noValidate onSubmit={() => console.log("====submit==")}>
                  <div
                    className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                  >
                    <div className="row my-2">
                      <div className="col-12">
                        <h2
                          className={`${styles.contactFormHeading} text-center`}
                        >
                          Get In Touch
                        </h2>
                        <p
                          className={`${styles.contactFormParagh} text-center text-dark`}
                        >
                          faucibus ultrices facilisis odio amet, luctus
                          vehicula, turpis elit. Sed placerat.
                        </p>
                      </div>
                      <div className="col-12 my-2">
                        <Form.Control
                          type="text"
                          name="email"
                          className={`form-control ${styles.inputFormControl} shadow-none`}
                          placeholder="Email"
                          aria-label="Email"
                          // value={values.firstName}
                          // onChange={handleChange}
                          // isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </div>
                      <div className="col-12 my-2">
                        <Form.Control
                          type="password"
                          name="password"
                          className={`form-control ${styles.inputFormControl} shadow-none`}
                          placeholder="Password"
                          aria-label="Password"
                          // value={values.firstName}
                          // onChange={handleChange}
                          // isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </div>

                      <div className="col-12 mx-auto my-2 mt-4">
                        <Button
                          type="submit"
                          className="btn w-100 bg-primary bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0"
                        >
                          <FaLock/>Login 
                        </Button>
                      </div>

                      <div className="col-12 mt-4 d-flex justify-content-between">
                        <a href="./index.html">
                          <FaArrowLeft/> back
                        </a>
                        <a href="signup.html">
                          {" "}
                          Singup <FaArrowRight/>
                        </a>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>
    </>
  );
}

export default Login;