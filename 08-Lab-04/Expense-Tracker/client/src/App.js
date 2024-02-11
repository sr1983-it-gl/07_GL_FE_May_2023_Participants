import logo from './logo.svg';
import './App.css';
import { ExpenseTrackerApp } from './components/ExpenseTrackerApp';

function App() {
  return (
    <div className="App">

      {
        <ExpenseTrackerApp></ExpenseTrackerApp>
      }
    </div>
  );
}

export default App;
