import React from 'react';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';

/**
 * By default, the slider is continuous.
 * The `step` property causes the slider to move in discrete increments.
 */
const MyTimeline = () => (
  <div>
	  <Subheader>Timeline</Subheader>
	  <Slider step={0.10} value={0.5} />
  </div>
);

export default MyTimeline;