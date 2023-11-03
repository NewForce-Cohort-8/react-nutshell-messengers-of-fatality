import { Route, Routes, Outlet } from 'react-router-dom';
import './Nutshell.css';
import { MessageForm } from './components/Messages/MessageForm';
import { MessageList } from './components/Messages/MessageList';

function Nutshell() {
  return (
  <Routes>
    <Route path="/" element={
      <>
    <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      </header>    
     <MessageList />
    </div>

<Outlet />
</>
  }>
       <Route path="/messages/create" element={ <MessageForm />} />
    </Route>

  </Routes>

  
  );

}

export default Nutshell;

// export const Nutshell = () => {
//   return ( <Routes>
//     <Route path='/nav/NavBar' element={<NavBar />} />
//   </Routes>
    
//   );
// }

// export default Nutshell;

// function Nutshell() {
//   return (
//     <div className="Dashboard">
//       <header className="App-header">
//         <h1>Welcome to Nutshell</h1>
//       </header>
//     </div>
//     <Route path='/nav/NavBar' element={<NavBar />} />
//   );
// }

// export default Nutshell;






