import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

/*****************************/
/******** COMPONENT **********/
/*****************************/
export default function AuthInputs() {
  /*****************/
  /**** STATE ******/
  /*****************/
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /*****************/
  /*** FUNCTIONS ***/
  /*****************/
  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }
  function handleLogin() {
    setSubmitted(true);
  }

  /***********************/
  /*** COMPUTE VALUES ***/
  /***********************/
  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  /***********************/
  /****** JSX VALUES *****/
  /***********************/
  return (
    <div id="auth-inputs">
      {/* Contains the inputs */}
      <div>
        <p>
          <input
            type="Email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>

      {/* The buttons section on the bottom */}
      <div className="actions">
        <button onClick={handleLogin}>Create an account</button>
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
