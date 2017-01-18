/**
 * The component that was supposed to reperesent 
 * the materials list on the interface.
 * It is based on Material UI and ReactJS.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyMaterials extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Subheader>Material Types</Subheader>
        <ul>
          {this.props.materials.map((material) => {
              <li> {material._name} </li>
          })}
        </ul>
      </div>
    );
  }
}

MyMaterials.proptypes = {
  materials: React.PropTypes.array.isRequired
}

export default MyMaterials;