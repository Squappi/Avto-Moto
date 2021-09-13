import React from 'react';
import styles from './app.module.scss';
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
            <div className={styles.body_wrapper}>
              <Header/>
              <Main/>
              <Foother/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;