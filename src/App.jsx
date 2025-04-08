import { useState } from 'react';
import InputContainer from './components/InputContainer';
import OutputTable from './components/OutputTable';

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const ERROR_MESSAGE =
  'Please make sure duration period is at least 1 year and more';

function App() {
  const [state, setStateUpdate] = useState(INITIAL_STATE);

  const isInputValid = state.duration >= 1;

  const handleInputChange = function (field, value) {
    if (value < 0) return;
    setStateUpdate(prevState => {
      return {
        ...prevState,
        [field]: +value,
      };
    });
  };

  return (
    <>
      <InputContainer initialInput={state} onInputChange={handleInputChange} />
      {isInputValid && <OutputTable initialInput={state} />}
      {!isInputValid && <p className="center">{ERROR_MESSAGE}</p>}
    </>
  );
}

export default App;
