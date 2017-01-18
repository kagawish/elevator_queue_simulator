import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import QueuingSystem from '../models/QueuingSystem';
import Elevator from '../models/Elevator';
import Material from '../models/Material';
import Queue from '../models/Queue';

import $ from 'jquery';

var results = [{
	overall_average_wait_times: [],
	overall_average_delivered_packages_per_hour: [],
	overall_percentage_of_elevator_was_ideal: []
}];

var myElevatorQueuingSystem = null;
var current_results = [];

for (var i = 10; i <= 30; i+=10) {

	current_results = [];
	console.log('Testing for ' + i + ' times.');

	for (var j = 0; j < i; j++) {

		myElevatorQueuingSystem = new QueuingSystem('MyElevatorQueueSystem');

		var myElevator = new Elevator('MyElevator', 400);

		var myMaterialA = new Material('MyMaterialA', 200, 'uniform', 5, 2);
		var myMaterialB = new Material('MyMaterialB', 100, 'constant', 6);
		var myMaterialC = new Material('MyMaterialC', 50, 'probabilistic', [2, 3], [0.33, 0.67]);

		var myQueue = new Queue('MyQueue');

		myElevatorQueuingSystem._end_time = 200 * 60;

		myElevatorQueuingSystem.assign_elevator(myElevator);

		myElevatorQueuingSystem.assign_material(myMaterialA);
		myElevatorQueuingSystem.assign_material(myMaterialB);
		myElevatorQueuingSystem.assign_material(myMaterialC);

		myElevatorQueuingSystem.link_queue(myQueue);

		myElevator.link_system(myElevatorQueuingSystem);

		var current_result = myElevatorQueuingSystem.advance_timeline(200 * 60);

		current_results.push(current_result._stats);
	}
	average_all_results (i, current_results);

	console.log(results);
}

ReactDOM.render(
  <App system={myElevatorQueuingSystem} overall_stats={results}/>,
  document.getElementById('app')
);

function average_all_results(n, current_results) {
	var overall_average_wait_time = {
		MyMaterialA: 0,
		MyMaterialB: 0,
		MyMaterialC: 0
	};
	var overall_average_delivered_packages_per_hour = {
		MyMaterialA: 0,
		MyMaterialB: 0,
		MyMaterialC: 0
	};
	var overall_percentage_of_elevator_was_ideal = 0;
	for (var i = 0; i < current_results.length; i++) {
		overall_average_wait_time.MyMaterialA += current_results[i]._materials_average_wait_time.MyMaterialA;
		overall_average_wait_time.MyMaterialB += current_results[i]._materials_average_wait_time.MyMaterialB;
		overall_average_wait_time.MyMaterialC += current_results[i]._materials_average_wait_time.MyMaterialC;

		overall_average_delivered_packages_per_hour.MyMaterialA += current_results[i]._materials_delivered_per_hour.MyMaterialA;
		overall_average_delivered_packages_per_hour.MyMaterialB += current_results[i]._materials_delivered_per_hour.MyMaterialB;
		overall_average_delivered_packages_per_hour.MyMaterialC += current_results[i]._materials_delivered_per_hour.MyMaterialC;

		overall_percentage_of_elevator_was_ideal += current_results[i]._percentage_elevator_ideal;
	}

	overall_average_wait_time.MyMaterialA /= current_results.length;
	overall_average_wait_time.MyMaterialB /= current_results.length;
	overall_average_wait_time.MyMaterialC /= current_results.length;

	overall_average_delivered_packages_per_hour.MyMaterialA /= current_results.length;
	overall_average_delivered_packages_per_hour.MyMaterialB /= current_results.length;
	overall_average_delivered_packages_per_hour.MyMaterialC /= current_results.length;

	overall_percentage_of_elevator_was_ideal /= current_results.length;

	results[n] = {
		overall_average_wait_times: {
			MyMaterialA: overall_average_wait_time.MyMaterialA,
			MyMaterialB: overall_average_wait_time.MyMaterialB,
			MyMaterialC: overall_average_wait_time.MyMaterialC,
		}, 
		overall_average_delivered_packages_per_hour: {
			MyMaterialA: overall_average_delivered_packages_per_hour.MyMaterialA,
			MyMaterialB: overall_average_delivered_packages_per_hour.MyMaterialB,
			MyMaterialC: overall_average_delivered_packages_per_hour.MyMaterialC,
		},
		overall_percentage_of_elevator_was_ideal: overall_percentage_of_elevator_was_ideal
	}
}
