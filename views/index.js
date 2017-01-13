import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MyHeader from './components/MyHeader';
import MyStatesTable from './components/MyStatesTable';
import MyTimeline from './components/MyTimeline';
import MyComponentsGrid from './components/MyComponentsGrid';

import QueuingSystem from '../models/QueuingSystem';
import Elevator from '../models/Elevator';
import Material from '../models/Material';
import Queue from '../models/Queue';

import $ from 'jquery';

injectTapEventPlugin();

var myElevatorQueuingSystem = new QueuingSystem('MyElevatorQueueSystem');

var myElevator = new Elevator('MyElevator', 400);

var myMaterialA = new Material('MyMaterialA', 200, 'uniform', 5, 2);
var myMaterialB = new Material('MyMaterialB', 100, 'constant', 6);
var myMaterialC = new Material('MyMaterialC', 50, 'probabilistic', [2, 3], [0.33, 0.67]);

var myQueue = new Queue('MyQueue');

myElevatorQueuingSystem._end_time = 10;

myElevatorQueuingSystem.assign_elevator(myElevator);

myElevatorQueuingSystem.assign_material(myMaterialA);
myElevatorQueuingSystem.assign_material(myMaterialB);
myElevatorQueuingSystem.assign_material(myMaterialC);

myElevatorQueuingSystem.link_queue(myQueue);

myElevator.link_system(myElevatorQueuingSystem);

const App = () => (
  <MuiThemeProvider>
  	<div>
	    <MyHeader />
	    <MyComponentsGrid />
	    <MyStatesTable />
	    <MyTimeline />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,document.getElementById('app')
);

myElevatorQueuingSystem.advance_timeline(10);


