import './Nutshell.css';
import { Outlet, Route, Routes } from "react-router-dom"
import { TaskList } from './components/tasks/TaskList';



function Nutshell() {
  return (
    <Routes>
<Route path="/" element={
<>
  <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      </header>

    <TaskList/>
    </div>
    <Outlet/>
    </>
    }> 
    </Route>
    </Routes>
  
  )
  ();
}

export default Nutshell;
