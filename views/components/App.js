import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MyHeader from './MyHeader';
import MyStatesTable from './MyStatesTable';
import MyTimeline from './MyTimeline';
import MyElevator from './MyElevator';
import MyQueue from './MyQueue';
import MyMaterials from './MyMaterials';
import MyAdvanceButton from './MyAdvanceButton';

import QueuingSystem from '../../models/QueuingSystem';

injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			system: this.props.system
		}
		this.advance_timeline_state = this.advance_timeline_state.bind(this);
	}

	advance_timeline_state(n) {
		var newSystem = this.state.system.advance_timeline(n);
		this.setState({
			system: newSystem
		});
	}

	render() {
		return (
			<MuiThemeProvider>
			  	<div>
				    <MyHeader 
				    	title={this.state.system._name}
				    />
				    <MyElevator 
				    	elevator={this.state.system._elevator} 
				    />
				    <MyQueue 
				    	queue={this.state.system._queue} 
				    />
				    <MyMaterials
				    	materials={this.state.system._materials}
				    />
				    <MyStatesTable 
				    	states={this.state.system._states}
				    />
				    <MyTimeline 
				    	current_time={this.state.system._current_time}
				    	end_time={this.state.system._end_time}
				    />
				    <MyAdvanceButton 
				    	advance_method={this.advance_timeline_state}
				    />
			    </div>
			</MuiThemeProvider>
		);
	}
}

App.proptypes = {
	system: React.PropTypes.instanceOf(QueuingSystem)
}

export default App;