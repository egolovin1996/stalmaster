import React from 'react';
import Fire from './Fire';
import Splitter from './Splitter';
import Sert from './Sert'

export default class Home extends React.Component {
    render() {
        return(
          <div>
            <Fire />
            <Splitter />
            <Sert />
          </div>
        )
    }
}