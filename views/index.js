// import React from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// injectTapEventPlugin();

// const App = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
//   <h1>
//   	Hello World!
//   </h1>
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );


var myElevatorQueuingSystem = new QueuingSystem('MyElevatorQueueSystem');

var myElevator = new Elevator('MyElevator', 400);

var myMaterialA = new Material('MyMaterialA', 200, 'uniform', 5, 2);
var myMaterialB = new Material('MyMaterialB', 100, 'constant', 6);
var myMaterialC = new Material('MyMaterialC', 50, 'probabilistic', [2, 3], [0.33, 0.67]);

var myQueue = new Queue('MyQueue');

myElevatorQueuingSystem._total_time = 200;

myElevatorQueuingSystem.assign_elevator(myElevator);

myElevatorQueuingSystem.assign_material(myMaterialA);
myElevatorQueuingSystem.assign_material(myMaterialB);
myElevatorQueuingSystem.assign_material(myMaterialC);

myElevatorQueuingSystem.link_queue(myQueue);

myElevator.link_system(myElevatorQueuingSystem);

console.log(myElevatorQueuingSystem);

myElevatorQueuingSystem.advance_timeline(1);


