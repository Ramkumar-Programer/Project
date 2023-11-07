import './App.css';
import Login from'./Athu/Login'
import Board from './Board/Board'
import ForgotPassword from './Athu/forgorPassword';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Reg from './Athu/Reg.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" Component={Login} />
        <Route path='/Register' Component={Reg} />
        <Route path= '/Board' Component={Board} />
        <Route path= '/ForgotPassword' Component={ForgotPassword} />
        <Route path="/" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
