import React from 'react';
import {
  Button,
  Grid,
  Image,
  Segment,
  Header
} from 'semantic-ui-react';
import Fire from './Fire';
import Splitter from './Splitter';

export default class Home extends React.Component {
    render() {
        return(
          <div>
            <Fire/>
            <Splitter/>
          </div>
        )
    }
}