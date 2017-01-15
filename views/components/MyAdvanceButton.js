import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MyAdvanceButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RaisedButton 
          onClick={() => this.props.advance_method(1)} 
          label="Advance Timeline" 
          primary={true} 
        />
      </div>
    );
  }
}

MyAdvanceButton.proptypes = {
  advance_method: React.PropTypes.func.isRequired
}

export default MyAdvanceButton;
