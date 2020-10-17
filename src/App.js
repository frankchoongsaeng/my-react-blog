import React from 'react';
import ThemeProvider from './Components/ThemeProvider';
import Router from './Components/Router';

function App() {
  return (
    <ThemeProvider >
      <Router />
    </ThemeProvider>
  );
}

export default App;
