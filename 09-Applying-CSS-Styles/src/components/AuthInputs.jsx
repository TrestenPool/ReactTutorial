import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

/*****************************/
/**** STYLED COMPONENTS ******/
/*****************************/
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TextButton = styled.button`
  color: #f0b322;
  border: none;

  &:hover {
    color: #f0920e;
  }
`;

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
      <ControlContainer>
        <p>
          <Input
            type="Email"
            $invalid={emailNotValid}
            label="Email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Input
            type="password"
            label="Password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>

      {/* The buttons section on the bottom */}
      <div className="actions">
        <TextButton onClick={handleLogin}>Create an account</TextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
