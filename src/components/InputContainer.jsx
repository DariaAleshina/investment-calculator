export default function InputContainer({ initialInput, onInputChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    initialInput;
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            name="initialInvestment"
            type="number"
            required
            value={initialInvestment}
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
            required
            value={annualInvestment}
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
            required
            value={expectedReturn}
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
            required
            value={duration}
            onChange={event =>
              onInputChange(event.target.name, event.target.value)
            }
          ></input>
        </div>
      </div>
    </section>
  );
}
