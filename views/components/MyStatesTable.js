import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';

class MyStatesTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var table_rows = this.props.states.map((state, index) => {
        <TableRow>
          <TableRowColumn>index</TableRowColumn>
          <TableRowColumn>state.elevator</TableRowColumn>
          <TableRowColumn>state.queue</TableRowColumn>
          <TableRowColumn>state.materials</TableRowColumn>
        </TableRow>
    });

    console.log(this.props.states);

    return (
      <div>
        <Subheader>States Table</Subheader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Time</TableHeaderColumn>
              <TableHeaderColumn>Elevator</TableHeaderColumn>
              <TableHeaderColumn>Queue</TableHeaderColumn>
              <TableHeaderColumn>Materials</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
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