import React from "react";
import '../styling/account.css'
import { validateInputs } from "./validate";
import { Link } from "react-router-dom";

const submit = (e) => {
    e.preventDefault()

    validateInputs()
}


export default function () {
    return (
        <section>
            <div className="container">
                <form className="form" action="/src/components/Login.jsx" onSubmit={submit}>
                    <h1>Registration</h1>
                    <div className="input-control">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text"></input>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="text"></input>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password"></input>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password2">Confirm paassword</label>
                        <input id="password2" name="password2" type="password"></input>
                        <div className="error"></div>
                    </div>
                        <button type="submit">Sign up</button>
                        <Link to="/"><button id="button-text">Already have an account? Login here.</button></Link>
                </form>
            </div>
        </section>
    )
}