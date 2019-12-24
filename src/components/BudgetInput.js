import React, { useContext } from 'react';
import { BudgetContext } from '../context';

export default function BudgetInput() {
  const myContext = useContext(BudgetContext);
  const { task, cost, editItem, handelChange, handelSubmit } = myContext;
  return (
    <div className='container card py-3'>
      <h2 className='text-center text-primary text-capitalize'>
        budget calculator
      </h2>
      <form onSubmit={handelSubmit}>
        <div className='container form-row my-3'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              name='task'
              value={task}
              onChange={handelChange}
              placeholder='Task'
              autoComplete='off'
            />
          </div>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              name='cost'
              value={cost}
              onChange={handelChange}
              placeholder='Cost'
              autoComplete='off'
            />
          </div>
          <div className='col-1'>
            {editItem ? (
              <button type='submit' className='btn btn-success'>
                EDIT
              </button>
            ) : (
              <button type='submit' className='btn btn-primary'>
                ADD
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
