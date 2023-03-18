import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Admin/Home';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
