import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResponsiveContainer from '../Container/ResponsiveContainer';
import Home from '../Home/Home';


function App() {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </ResponsiveContainer>
    </BrowserRouter>
  );
}

export default App;
