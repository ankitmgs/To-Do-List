import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Header from './components/header';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
