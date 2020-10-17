import React, { useContext } from 'react';
import { Theme } from './ThemeProvider';

function Footer() {

  const currentTheme = useContext(Theme)[0];

  return (
    <footer className={`footer mt-5 pt-5 pb-3 bg-${ currentTheme } `}>
      <div className="container">
        <span className="text-muted">designed and curated by Frank Choongsaeng</span>
      </div>
    </footer>
  );
}

export default Footer;