import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { user } from '../Helpers/helpers';
import { Theme } from '../Components/ThemeProvider';

function Login({setUserLoggedIn}) {

  const currentTheme = useContext(Theme)[0];
  const history = useHistory()
  const [ [email, setEmail], [password, setPassword] ] = [useState(""), useState("")];

  function goBack(e) {
    e.preventDefault();
    history.goBack();
  }

  function handleLogin(e) {
    e.preventDefault();
    if(user.login(email, password)){
      history.goBack();
    } else {
      alert("incorrect username or password");
    }
  }

  return (
    <div className={`login d-flex justify-content-center align-items-center app-${currentTheme}`}>
      <div className={`card shadow-lg bg-${currentTheme}`}>
        <div className="card-body">
          <form className="form-signin">
            <p onClick={goBack} style={{cursor: "pointer"}}><i className="ri-arrow-left-fill"></i></p>
            <h1 className="h3 mb-5 font-weight-normal">Sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control mt-2" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="checkbox mt-5"></div>
            <button onClick={handleLogin} className="btn btn-lg btn-primary btn-block" type="submit"><i className="ri-user-shared-2-line"></i> Get me in</button>
            {/* <p className="mt-5 mb-3 text-muted">create an account</p> */}
            <div className="checkbox my-5"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;