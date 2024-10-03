import ResultsTable from "./ResultsTable";
import UserInput from "./UserInput";
import { useState } from "react";

function App() {
  // our state
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5.5,
    duration: 12,
  });

  /*******************************************/
  /************* Helper functions ************/
  /*******************************************/
  function handleUserInputChange(event, userInputType) {
    console.log(typeof userInputType);
    console.dir(investmentInput);

    setInvestmentInput((prevState) => {
      return { ...prevState, userInputType: event.target.value };
    });
  }

  /*******************************************/
  /*************** JSX CODE ******************/
  /*******************************************/
  return (
    <>
      {/* header */}
      <h1 id="header">React Investment Calculator</h1>

      {/* User input */}
      <UserInput onChangeFunction={handleUserInputChange} />

      {/* Table of results */}
      <ResultsTable />
      {investmentInput.initialInvestment}
    </>
  );
}

export default App;
