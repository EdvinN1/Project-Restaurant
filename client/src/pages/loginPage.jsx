import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import '../styling/account.css'
import { useStates } from 'react-easier';
import { GlobalContext } from '../GlobalContext';


export default function () {

    const { updateLoggedIn } = useContext(GlobalContext);
    const navigate = useNavigate();
    const access = useStates("access");

    const submit = async (e) => {
        e.preventDefault();
        let rawResponse = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
          });
          let response = await rawResponse.json();
            updateLoggedIn(true);
            access.admin = response.admin;
            access.loggedIn = response.loggedIn;
            console.log(response)
            sessionStorage.setItem("loggedIn", response.loggedIn)
            sessionStorage.setItem("admin", response.admin)
    };

    if (access.loggedIn) {
        if (access.admin) {
             navigate('/admin-section');
             return null;
        }
        navigate('/');
        return null;
      }

    const login = useStates('login', {
        'name':'', 
        'password':''
    });

    return (
        <section className='account-page'>
            <div className="container">
                <form className="form" onSubmit={submit}>
                    <h1 className='account-title'>Login</h1>
                    <div className='center-inputs'>
                        <div className="input-control">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" type="text" {...login.bind('name')}></input>
                            <div className="error"></div>
                        </div>
                        <div className="input-control">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" {...login.bind('password')}></input>
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