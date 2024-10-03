export default function UserInput({ onChangeFunction, ...props }) {
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
            placeholder="1000"
          />
        </label>

        <label>
          Annual Investment
          <input type="number" id="annualInvestment" name="userForm" />
        </label>

        <label>
          Expected Return
          <input type="number" id="expectedReturn" name="userForm" />
        </label>

        <label>
          Duration
          <input type="number" id="duration" name="userForm" />
        </label>
      </div>
    </div>
  );
}
