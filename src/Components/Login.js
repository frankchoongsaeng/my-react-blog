import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Theme } from './ThemeProvider';

function Login() {

  const currentTheme = useContext(Theme)[0];
  const history = useHistory()

  function goBack(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div className={`login d-flex justify-content-center align-items-center app-${currentTheme}`}>
      <div className={`card shadow-lg bg-${currentTheme}`}>
        <div className="card-body">
          <form className="form-signin">
            <p>
              <button onClick={goBack}><i className="ri-arrow-left-fill"></i></button>
            </p>
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required="" autoFocus=""/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
            <div className="checkbox mb-3 mt-2">
              <label className="text-smaller">
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit"><i className="ri-user-shared-2-line"></i></button>
            <p className="mt-5 mb-3 text-muted">create an account</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;