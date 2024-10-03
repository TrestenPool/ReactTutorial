import ResultsTable from "./ResultsTable"
import UserInput from "./UserInput"
import { useState } from "react"

function App() {
  const [investmentInput, setInvestmentInput] = useState({
    year
  });

  /*******************************************/
  /*************** JSX CODE ******************/
  /*******************************************/
  return (
    <>
      {/* header */}
      <h1 id="header">React Investment Calculator</h1>

      {/* User input */}
      <UserInput />

      {/* Table of results */}
      <ResultsTable />
    </>
  )
}

export default App
