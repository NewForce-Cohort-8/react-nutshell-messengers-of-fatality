import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./components/views/Authorized";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { UserNav } from "./components/Nav/UserNaveBar";
// import { UserViews } from "./components/views/UserViews";
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register";
import './Nutshell.css';

export const Nutshell = () => {
  return (
    <BrowserRouter>
    <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      
      <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/register" element={<Register />} />
          
          <Route path="*" element={
			      <Authorized>
				      <>
                <UserNav />
                <ApplicationViews />
					      {/* <UserViews /> */}
				      </>
			      </Authorized>

		      } />
      </Routes>

    </header>
    </div>
  </BrowserRouter>
  );
}


