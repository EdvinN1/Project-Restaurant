import React from 'react';
import { Link } from "react-router-dom"
import '../styling/account.css'


const submit = (e) => {
    e.preventDefault()

}

export default function () {

    return (
        <section className='account-page'>
            <div className="container">
                <form className="form" onSubmit={submit}>
                    <h1 className='account-title'>Login</h1>
                    <div className='center-inputs'>
                        <div className="input-control">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" type="text"></input>
                            <div className="error"></div>
                        </div>
                        <div className="input-control">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password"></input>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className='button-group'>
                        <button className='button-account' type="submit">Login</button>
                        <Link to="/create-account"><button id="button-text">Don't have an account? Register here.</button></Link>
                    </div>
                </form>
            </div>
        </section>
    )
}