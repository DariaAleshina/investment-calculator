import { useState } from 'react';
import InputContainer from './components/InputContainer';
import OutputTable from './components/OutputTable';

import { calculateInvestmentResults, formatter } from './util/investment';

const INITIAL_STATE = {
  input: {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  },
  table: [],
};
function App() {
  const [state, setStateUpdate] = useState(INITIAL_STATE);

  const handleInputChange = function (field, value) {
    console.log(field, value);
    if (value < 0) return;
    setStateUpdate(prevState => {
      const newInput = { ...prevState.input, [field]: value };
      console.log(newInput);
      const newTable = calculateInvestmentResults(newInput);
      console.log(newTable);

      return {
        ...prevState,
        input: newInput,
        table: newTable,
      };
    });
  };

  return (
    <>
      <InputContainer
        initialInput={state.input}
        onInputChange={handleInputChange}
      />
      <OutputTable tableData={state.table} initialInput={state.input} />
    </>
  );
}

export default App;
