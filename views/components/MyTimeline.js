import React from 'react';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';

/**
 * By default, the slider is continuous.
 * The `step` property causes the slider to move in discrete increments.
 */
class MyTimeline extends React.Component {
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

MyTimeline.defaultProps = {
	end_time: '-1'
}

MyTimeline.proptypes = {
	current_time: React.PropTypes.number.isRequired,
	end_time: React.PropTypes.number
}

export default MyTimeline;