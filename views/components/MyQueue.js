/**
 * The component that was supposed to reperesent 
 * the queue on the interface.
 * It is based on Material UI and ReactJS.
 */
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
        <Subheader>Queue</Subheader>
        <ul>
          {
            this.props.queue._queue.map((item) => {
              <li>item</li>
            })
          }
        </ul>
        <h5>{this.props.queue._size}</h5>
      </div>
    );
  }
}

MyQueue.proptypes = {
  queue: React.PropTypes.instanceOf(Queue).isRequired
}

export default MyQueue;