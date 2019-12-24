import React, { useContext } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { BudgetContext } from '../context';

export default function BudgetItem({ item }) {
  const myContext = useContext(BudgetContext);
  const { handelDelete, handelEdit } = myContext;
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <div className='text-capitalize'>
        {item.task}
        <span className='badge badge-primary badge-pill mx-3'>
          $ {item.cost}
        </span>
      </div>
      <div>
        <button className='btn' onClick={() => handelEdit(item.id)}>
          <MdEdit className='text-success' />
        </button>
        <button className='btn' onClick={() => handelDelete(item.id)}>
          <MdDelete className='text-danger' />
        </button>
      </div>
    </li>
  );
}
