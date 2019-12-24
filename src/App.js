import React from 'react';
import BudgetInput from './components/BudgetInput';
import BudgetList from './components/BudgetList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container py-5'>
    <BudgetInput />
    <BudgetList />
    </div>
  );
}

export default App;
