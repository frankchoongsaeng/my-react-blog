import React from 'react';

function NavBar(props) {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="google.com">Navbar</a>
        
        <div className="flex-1 d-flex justify-content-end">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="google.com">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="google.com" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;