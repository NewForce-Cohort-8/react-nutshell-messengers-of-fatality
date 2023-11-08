import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"

export const UserNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/articleEntries">Articles</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tasks">Tasks</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/messages">Messages</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/images">Images</Link>
            </li>
            {
                localStorage.getItem("nutshell_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("nutshell_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
