import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../Helpers/helpers';
import ThemeButton from './ThemeButton';
import { Theme } from './ThemeProvider';

function NavBar(props) {

  const currentTheme = useContext(Theme)[0];

  const [loggedIn, setLoggedIn] = useState(user.loggedIn);

  function handleLogout(e) {
    e.preventDefault();
    user.logout();
    setLoggedIn(user.loggedIn);
  }

  return(
    <nav className={`navbar navbar-expand-lg navbar-${currentTheme} bg-${currentTheme} fixed-top`}>
      <div className="container align-items-center">
        <Link to="/" className="navbar-brand">Frankies</Link>
        
        <div className="flex-1 d-flex justify-content-end">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              { loggedIn &&
                 <li className="nav-item">
                  <Link className="nav-link" to="/new-post">New Post</Link>
               </li>
              }
              <li className="nav-item">
                { !loggedIn && <Link className="nav-link" to="/login">Sign In</Link> }
                { loggedIn  && <span className="nav-link" onClick={handleLogout}>Sign Out</span> }
              </li>
              <li className="nav-item">
                <ThemeButton />
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;