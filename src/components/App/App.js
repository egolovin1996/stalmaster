import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResponsiveContainer from '../Container/ResponsiveContainer';
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import { YMaps } from "react-yandex-maps";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <YMaps>
          <Switch>
            <Route path='/contacts'>
              <Contacts />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </YMaps>
      </ResponsiveContainer>
    </BrowserRouter>
  );
}

export default App;
