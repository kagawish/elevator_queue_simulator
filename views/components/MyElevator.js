/**
 * The component that reperesents 
 * the elevator on the interface.
 * It is based on Material UI and ReactJS.
 */
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
        <Subheader>Elevator {this.props.elevator._name}</Subheader>
        <h5>{this.props.elevator._description}</h5>
        <h5>{this.props.elevator._max_weight}</h5>
        <h5>{this.props.elevator._current_weight}</h5>
        <h5>{this.props.elevator._current_position}</h5>
      </div>
    );
  }
}

MyElevator.proptypes = {
  elevator: React.PropTypes.instanceOf(Elevator).isRequired,
}

export default MyElevator;