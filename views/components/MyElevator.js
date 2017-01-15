import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Elevator from '../../models/Elevator';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyElevator extends React.Component {
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

MyElevator.proptypes = {
  elevator: React.PropTypes.instanceOf(Elevator).isRequired,
}

export default MyElevator;