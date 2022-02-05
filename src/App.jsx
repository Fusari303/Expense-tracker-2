import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/budget';
import Remaining from './components/remaining';
import ExpenseTotal from './components/expenseTotal';
import ExpenseList from './components/expenseList';
import AddExpenseForm from './components/addExpenseForm';
import { AppProvider } from './context/appContext';

const App = () => {
  const [expenses, setExpense] = useState([])

  useEffect(()=>{
    const savedExpenses = localStorage.getItem("expenses")
    console.log(savedExpenses)
    if (savedExpenses) {
      setExpense(JSON.parse(savedExpenses))
    }
  },[])

  useEffect(()=>{
    console.log("expenses cambiato")
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])

	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Il mio Budget</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
				</div>
        <h3 className='mt-3'>Aggiungi Spesa</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
				<h3 className='mt-3'>Lista delle spese</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				
			</div>
		</AppProvider>
	);
};

export default App;