import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MyHeader from './MyHeader';
import MyStatesTable from './MyStatesTable';
import MyTimeline from './MyTimeline';
import MyComponentsGrid from './MyComponentsGrid';
import MyAdvanceButton from './MyAdvanceButton';

import QueuingSystem from '../../models/QueuingSystem';

injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MuiThemeProvider>
			  	<div>
				    <MyHeader 
				    	title={this.props.system._name}
				    />
				    <MyElevator 
				    	elevator={this.props.system._elevator} 
				    />
				    <MyQueue 
				    	queue={this.props.system._queue} 
				    />
				    <MyMaterials
				    	materials={this.props.system._materials}
				    />
				    <MyStatesTable 
				    	states={this.props.system._states}
				    />
				    <MyTimeline 
				    	current_time={this.props.system._current_time}
				    	end_time={this.props.system._end_time}
				    />
				    <MyAdvanceButton 
				    	advance_method={this.props.system.advance_timeline}
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