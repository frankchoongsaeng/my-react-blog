import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { user } from '../Helpers/helpers';
import ThemeButton from './ThemeButton';
import { Theme } from './ThemeProvider';

function NavBar(props) {

  const currentTheme = useContext(Theme)[0];

  const [loggedIn, setLoggedIn] = useState(user.loggedIn);
  const mNavOverlay = useRef(null);

  function handleLogout(e) {
    e.preventDefault();
    user.logout();
    setLoggedIn(user.loggedIn);
  }

  function openMNav() {
    mNavOverlay.current.classList.add("opened");
    mNavOverlay.current.classList.remove("invisible");
  }

  function closeMNav() {
    mNavOverlay.current.classList.remove("opened");
    mNavOverlay.current.classList.add("invisible");
  }


  return (
    <nav className={`navbar navbar-expand-lg navbar-${currentTheme} bg-${currentTheme} fixed-top`}>
      <div className="container align-items-center">
        <Link to="/" className="navbar-brand">Frankies</Link>

        <div className="flex-1 d-flex justify-content-end">
          <button onClick={openMNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              {loggedIn &&
                <li className="nav-item">
                  <Link className="nav-link" to="/new-post">New Post</Link>
                </li>
              }
              <li className="nav-item">
                {!loggedIn && <Link className="nav-link" to="/login">Sign In</Link>}
                {loggedIn && <span className="nav-link" onClick={handleLogout}>Sign Out</span>}
              </li>
              <li className="nav-item">
                <ThemeButton />
              </li>
            </ul>
          </div>

          {/* mobile navbar */}
          <div ref={mNavOverlay} className="mobile-nav invisible" id="mobileNav">
            <ul className="navbar-nav position-fixed" style={{
              height: "auto",
              top: 0,
              right: 0,
              background: "white",
              width: "100vw"
            }}>

              <li className="nav-item active px-2">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              {loggedIn &&
                <li className="nav-item px-2">
                  <Link className="nav-link" to="/new-post">New Post</Link>
                </li>
              }
              <li className="nav-item px-2">
                {!loggedIn && <Link className="nav-link" to="/login">Sign In</Link>}
                {loggedIn && <span className="nav-link" onClick={handleLogout}>Sign Out</span>}
              </li>
              <li className="nav-item">
                <ThemeButton />
              </li>
              <li className="minimize-mobile-nav bg-secondary mt-4">
                <button className="close" onClick={closeMNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="100%" width="100%" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;