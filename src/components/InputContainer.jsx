export default function InputContainer({ initialInput, onInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            name="initialInvestment"
            type="number"
            value={initialInput.initialInvestment}
            onChange={event =>
              onInputChange(event.target.name, event.target.value)
            }
          ></input>
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            name="annualInvestment"
            type="number"
            value={initialInput.annualInvestment}
            onChange={event =>
              onInputChange(event.target.name, event.target.value)
            }
          ></input>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            name="expectedReturn"
            type="number"
            value={initialInput.expectedReturn}
            onChange={event =>
              onInputChange(event.target.name, event.target.value)
            }
          ></input>
        </div>
        <div>
          <label>Duration</label>
          <input
            name="duration"
            type="number"
            value={initialInput.duration}
            onChange={event =>
              onInputChange(event.target.name, event.target.value)
            }
          ></input>
        </div>
      </div>
    </div>
  );
}
