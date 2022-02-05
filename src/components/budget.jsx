import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Budget = () => {
	const { budget } = useContext(AppContext);

	return (
		<div class="card">
      <div class="card-body d-flex flex-column">
          <span>Budget: ${budget}</span>
      </div>
    </div>
	);
};

export default Budget;