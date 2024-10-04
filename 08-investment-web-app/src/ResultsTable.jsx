import { formatter } from "./util/investment.js";

export default function ResultsTable({ tableData, ...props }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, idx) => (
          <tr key={idx}>
            <th>{row.year}</th>
            <th>{formatter.format(row.valueEndOfYear)}</th>
            <th>{formatter.format(row.interest)}</th>
            <th>{formatter.format(row.interestAccumulation)}</th>
            <th>{formatter.format(row.annualInvestmentAccumulation)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
