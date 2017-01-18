import React from 'react';
import {Line} from 'react-chartjs-v2';

class MyCharts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const data = {
		//   labels: this.props.cost_states.x,
		//   datasets: [
		//     {
		//       label: 'Reliability System Cost',
		//       fill: false,
		//       lineTension: 0.1,
		//       backgroundColor: 'rgba(75,192,192,0.4)',
		//       borderColor: 'rgba(75,192,192,1)',
		//       borderCapStyle: 'butt',
		//       borderDash: [],
		//       borderDashOffset: 0.0,
		//       borderJoinStyle: 'miter',
		//       pointBorderColor: 'rgba(75,192,192,1)',
		//       pointBackgroundColor: '#fff',
		//       pointBorderWidth: 1,
		//       pointHoverRadius: 5,
		//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		//       pointHoverBorderColor: 'rgba(220,220,220,1)',
		//       pointHoverBorderWidth: 2,
		//       pointRadius: 1,
		//       pointHitRadius: 10,
		//       data: this.props.cost_states.y
		//     }
		//   ]
		// };

		return (
			<Line />
		);
	}
}

export default MyCharts;