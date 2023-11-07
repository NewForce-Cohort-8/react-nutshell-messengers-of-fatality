import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("justin@email.com")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:8088/users?email=${email}`);
        const foundUsers = await res.json();
        if (foundUsers.length === 1) {
            const user = foundUsers[0];
            localStorage.setItem("nutshell_user", JSON.stringify({
                id: user.id
                // staff: user.isStaff
            }));

            navigate("/");
        }
        else {
            window.alert("Invalid login");
        }
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Nutshell</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                {<Link to="/register">Not a member yet?</Link>}
            </section>
        </main>
    )
}
