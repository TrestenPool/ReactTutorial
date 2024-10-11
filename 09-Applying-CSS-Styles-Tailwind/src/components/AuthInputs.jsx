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
    <div
      id="auth-inputs"
      className="max-w-xl max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-400 to-stone-800"
    >
      {/* Contains the inputs */}
      <div className="flex flex-col gap-2 mb-6"> 
        <p>
          <Input
            invalid={emailNotValid}
            label="Email"
            type="Email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Input
            invalid={passwordNotValid}
            label="Password"
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>

      {/* The buttons section on the bottom */}
      <div className="actions flex gap-4 justify-end">
        <Button onClick={handleLogin}>Create an account</Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
