import React from "react";
import '../styling/account.css'
import { validateInputs } from "../components/validateInputs";
import { Link, useNavigate } from "react-router-dom";
import { useStates } from 'react-easier';

export default function () {

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();
        console.log(account);
        if (validateInputs() === true) {
          let rawResponse = await fetch('/api/accounts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(account)
          });
          let response = await rawResponse.json();
          console.log(response)
        }

        navigate("/login")
      };

      const access = useStates("access")

      if (access.loggedIn) {
          navigate('/');
          return null;
        } 

      const account = useStates('account', {
        'name':'', 
        'email':'', 
        'password':''
    });

    return (
        <section className="account-page">
            <div className="container-account">
                <form className="form" method="POST" onSubmit={submit}>
                    <h1 className="account-title">Registration</h1>
                    <div className="input-control">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" {...account.bind('name')}/>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="text" {...account.bind('email')}/>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" {...account.bind('password')}/>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password2">Confirm paassword</label>
                        <input id="password2" name="password2" type="password"/>
                        <div className="error"></div>
                    </div>
                        <button className="button-account" type="submit">Sign up</button>
                        <Link to="/login"><button id="button-text">Already have an account? Login here.</button></Link>
                </form>
            </div>
        </section>
    )
}