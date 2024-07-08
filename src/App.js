// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
       
      </Routes>
      
      
    </div>
  );
}

export default App;
