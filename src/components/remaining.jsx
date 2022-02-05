import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Remaining = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
	<div class="card">
    <div class="card-body">
      <span>Rimanente: ${budget - totalExpenses}</span>
    </div>
  </div>
    
	);
};

export default Remaining;
