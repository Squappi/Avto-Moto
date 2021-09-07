import React from 'react';
import './app.module.scss';
import Header from '../header/header';
import Main from '../main/main';
import Foother from '../foother/foother';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route>
            <Header/>
            <Main/>
            <Foother/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;