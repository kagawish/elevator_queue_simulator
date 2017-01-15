import React from "react";
import AppBar from "material-ui/AppBar";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class MyHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <AppBar 
		  	title={this.props.title} 
		  />
		);
	}
}

MyHeader.defaultProps = {
	title: 'Elevator Simulation'
}

MyHeader.proptypes = {
	title: React.PropTypes.string
}

export default MyHeader;