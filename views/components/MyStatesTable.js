import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';

class MyStatesTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var table_rows = this.props.states.map((state, index) => {
        return (
          <TableRow style={{height:'100px', overflow: 'initial'}} key={index}>
            <TableRowColumn style={{whiteSpace: 'initial', overflow: 'initial'}}>{state.elevator}</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'initial', overflow: 'initial'}}>{state.queue}</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'initial', overflow: 'initial'}}>{state.materials}</TableRowColumn>
          </TableRow>
        );
    });

    return (
      <div>
        <Subheader>States Table</Subheader>
        <Table height={'400px'}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Elevator</TableHeaderColumn>
              <TableHeaderColumn>Queue</TableHeaderColumn>
              <TableHeaderColumn>Materials</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
            {table_rows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

MyStatesTable.proptypes = {
  states: React.PropTypes.array.isRequired
}

export default MyStatesTable;