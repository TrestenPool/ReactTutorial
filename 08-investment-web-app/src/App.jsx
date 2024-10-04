import ResultsTable from "./ResultsTable";
import UserInput from "./UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import logoImage from "./assets/investment-calculator-logo.png";

function App() {
  // our state
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 10_000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  /*******************************************/
  /************* Helper functions ************/
  /*******************************************/
  function handleUserInputChange(event, userInputType) {
    setInvestmentInput((prevState) => {
      return { ...prevState, [userInputType]: Number(event.target.value) };
    });
  }

  function generateTableOutput() {
    const tableData = calculateInvestmentResults(investmentInput);
    tableData.forEach((el, idx) => {
      if (idx != 0) {
        el.interestAccumulation =
          el.interest + tableData[idx - 1].interestAccumulation;
        el.annualInvestmentAccumulation =
          el.annualInvestment + tableData[idx - 1].annualInvestmentAccumulation;
      } else {
        el.interestAccumulation = el.interest;
        el.annualInvestmentAccumulation =
          investmentInput.initialInvestment + investmentInput.annualInvestment;
      }
    });

    return tableData;
  }

  const tableData = generateTableOutput();

  /*******************************************/
  /*************** JSX CODE ******************/
  /*******************************************/
  return (
    <>
      <div id="header">
        <img src={logoImage} />
        <h1 id="header">React Investment Calculator</h1>
      </div>

      {/* User input */}
      <UserInput
        onChangeFunction={handleUserInputChange}
        investmentObject={investmentInput}
      />

      {/* Table of results */}
      <ResultsTable tableData={tableData} />
    </>
  );
}

export default App;
