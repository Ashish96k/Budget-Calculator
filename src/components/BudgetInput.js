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
        <div className='container form-row mt-3'>
          <div className='col-12 col-md-5 col-lg-5 mb-3'>
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
          <div className='col-12 col-md-5 col-lg-5 mb-3'>
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
          <div className='col-12 col-md-2 col-lg-2 mb-2'>
            {editItem ? (
              <button type='submit' className='btn btn-success btn-block'>
                EDIT
              </button>
            ) : (
              <button type='submit' className='btn btn-primary btn-block'>
                ADD
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
