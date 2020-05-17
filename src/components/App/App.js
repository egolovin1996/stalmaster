import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ResponsiveContainer from '../Container/ResponsiveContainer';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery'
import Contacts from '../Contacts/Contacts';
import Doors from '../Doors/Doors';
import Hatches from '../Hatches/Hatches';
import { YMaps } from "react-yandex-maps";

function App() {
  return (
    <HashRouter>
      <ResponsiveContainer>
        <YMaps>
          <Switch>
            <Route path='/contacts'>
              <Contacts />
            </Route>
            <Route path='/gallery'>
              <Gallery />
            </Route>
            <Route path='/doors'>
              <Doors />
            </Route>
            <Route path='/hatches'>
              <Hatches />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </YMaps>
      </ResponsiveContainer>
    </HashRouter>
  );
}

export default App;
