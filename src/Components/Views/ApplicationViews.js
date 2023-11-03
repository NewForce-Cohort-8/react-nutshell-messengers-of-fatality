import { Route, Routes, Outlet } from 'react-router-dom';
import { MessageForm } from '../Messages/MessageForm';

export const ApplicationViews = () => {
	return <>
		<h1 className="title--main">This is Nutshell</h1>
		<div>Your app</div>
	</>
}
  
<Route path="/messages/create" element={ <MessageForm />} />

