export default function UserInput({
  onChangeFunction,
  investmentObject,
  ...props
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          Initial Investment
          <input
            onChange={(event) => onChangeFunction(event, "initialInvestment")}
            type="number"
            id="initialInvestment"
            name="userForm"
            value={investmentObject.initialInvestment}
          />
        </label>

        <label>
          Annual Investment
          <input
            onChange={(event) => onChangeFunction(event, "annualInvestment")}
            type="number"
            id="annualInvestment"
            name="userForm"
            value={investmentObject.annualInvestment}
          />
        </label>

        <label>
          Expected Return
          <input
            onChange={(event) => onChangeFunction(event, "expectedReturn")}
            type="number"
            id="expectedReturn"
            name="userForm"
            value={investmentObject.expectedReturn}
          />
        </label>

        <label>
          Duration
          <input
            onChange={(event) => onChangeFunction(event, "duration")}
            type="number"
            id="duration"
            name="userForm"
            value={investmentObject.duration}
          />
        </label>
      </div>
    </div>
  );
}
