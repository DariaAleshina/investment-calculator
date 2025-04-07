import { useState } from 'react';
import InputContainer from './components/InputContainer';
import OutputTable from './components/OutputTable';

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
function App() {
  const [state, setStateUpdate] = useState(INITIAL_STATE);

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
      <OutputTable initialInput={state} />
    </>
  );
}

export default App;
