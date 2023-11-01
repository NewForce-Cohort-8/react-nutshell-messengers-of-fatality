import { Route, Router, Routes } from 'react-router-dom';
import './Nutshell.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Authorized } from './components/views/Authorized';


//Login and Register forms
//I got this to render to the dom by changing the index.js from "React.StrictMode" to browserRouter and importing Repairs. 
export const Repairs = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					
				</>
			</Authorized>

		} />
	</Routes>
}



function Nutshell() {
  return (
    <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      </header>

     
    </div>
  );
}

export default Nutshell;




