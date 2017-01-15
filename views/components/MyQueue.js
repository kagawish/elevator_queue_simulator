import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Queue from '../../models/Queue';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyQueue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Subheader>System Components</Subheader>
      </div>
    );
  }
}

MyQueue.proptypes = {
  queue: React.PropTypes.instanceOf(Queue).isRequired
}

export default MyQueue;