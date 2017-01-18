/**
 * The component that was supposed to reperesent 
 * a slider to be used to advance or rewind the time easily.
 * It is based on Material UI and ReactJS.
 */
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
		    <Slider step={1/this.props.end_time} value={this.props.current_time/this.props.end_time} />
		  </div>
		);
	}
}

MyTimeline.proptypes = {
	current_time: React.PropTypes.number.isRequired,
	end_time: React.PropTypes.number.isRequired
}

export default MyTimeline;