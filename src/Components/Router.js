import React, { useContext } from 'react';
import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom';
import { Theme } from './ThemeProvider';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Article from '../Pages/Article';
import NewPost from '../Pages/NewPost';

function Router(props) {

  const currentTheme = useContext(Theme)[0];
  return (
    <div className={`app-${currentTheme}`}>
      {props.children}
      <Routes>
        <Switch>
          <Route path="/new-post" component={NewPost} />
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