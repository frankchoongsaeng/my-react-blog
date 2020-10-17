import React, { useContext } from 'react';
import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom';
import { Theme } from './ThemeProvider';
import Home from './Home';
import Login from './Login';
import Article from './Article';

function Router(props) {

  const currentTheme = useContext(Theme)[0];
  return (
    <div className={`app-${currentTheme}`}>
      {props.children}
      <Routes>
        <Switch>
          <Route path="/article" component={Article} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} /> 
        </Switch>
      </Routes>
    </div>
  );
}

export default Router;