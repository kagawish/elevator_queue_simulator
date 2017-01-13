import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyComponentsGrid extends React.Component {
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

export default MyComponentsGrid;