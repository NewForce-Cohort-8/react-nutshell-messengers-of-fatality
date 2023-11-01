import { Outlet, Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Nutshell</h1>
                    <div>Random text</div>

                    <Outlet />
                </>
            }>

                
            </Route>
        </Routes>
    )
}
