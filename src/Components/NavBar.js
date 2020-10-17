import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { Theme } from './ThemeProvider';

function NavBar(props) {

  const currentTheme = useContext(Theme)[0];

  return(
    <nav className={`navbar navbar-expand-lg navbar-${currentTheme} bg-${currentTheme} fixed-top`}>
      <div className="container">
        <Link to="/"><p className="navbar-brand">Navbar</p></Link>
        
        <div className="flex-1 d-flex justify-content-end">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
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