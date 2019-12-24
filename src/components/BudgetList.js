import React, { useContext } from 'react';
import BudgetItem from './BudgetItem';
import { BudgetContext } from '../context';

export default function BudgetList() {
  const myContext = useContext(BudgetContext);
  const { list, clearList } = myContext;
  return (
    <div className='py-3'>
      {list.length > 0 ? (
        <>
          <h3 className='text-primary text-center text-capitalize my-2'>
            budget list
          </h3>
          <ul className='list-group'>
            {list.map(item => (
              <BudgetItem key={item.id} item={item} />
            ))}
          </ul>
          <h3 className='text-success text-center text-capitalize my-3'>
            grand total : $
            {list.reduce(
              (accumulator, currentValue) =>
                (accumulator += parseInt(currentValue.cost)),
              0
            )}
          </h3>
          <button
            className='btn btn-danger btn-block text-capitalize'
            onClick={clearList}
          >
            clear list
          </button>
        </>
      ) : (
        <h3 className='text-danger text-center text-capitalize my-2'>
          no item available currently
        </h3>
      )}
    </div>
  );
}
