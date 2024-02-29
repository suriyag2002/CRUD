
import './App.css';
import Dashboard from './Dashboard';
import { EmployeeProvider } from './EmployeeContext';


function App() {
  return (
   <EmployeeProvider>
    <Dashboard/>
    </EmployeeProvider>
  );
}

export default App;
