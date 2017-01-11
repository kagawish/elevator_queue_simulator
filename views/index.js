const myElevatorQueuingSystem = new QueuingSystem('MyElevatorQueueSystem');

const myElevator = new Elevator('MyElevator', 400);

const myMaterialA = new Material('MyMaterialA', 200, 'uniform', 5, 2);
const myMaterialB = new Material('MyMaterialB', 100, 'constant', 6);
const myMaterialC = new Material('MyMaterialC', 50, 'probabilistic', {2, 3}, {0.33, 0.67});

const myQueue = new Queue('MyQueue');

myElevatorQueuingSystem.total_time(200);

myElevatorQueuingSystem.assign_elevator(myElevator);

myElevatorQueuingSystem.assign_material(myMaterialA);
myElevatorQueuingSystem.assign_material(myMaterialB);
myElevatorQueuingSystem.assign_material(myMaterialC);

myElevatorQueuingSystem.assign_queue(myQueue);
