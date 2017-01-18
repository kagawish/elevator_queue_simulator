/**
 * This Class simulates a queue data structure that we use to 
 * define the priority of serving each package, which
 * is FCFS (first come first serve) as long as
 * there's room in the elevator.
 */
class Queue {
	constructor(name) {
		this._name = name;
		this._queue = [];
	}

	/**
	 * Pushes element to the end of the queue
	 */
	enqueue (element) {
		this._queue.push(element);
	}

	/**
	 * If not empty, gets the first element in the queue.
	 */
	dequeue () {
		if (this.is_empty()) return false;
		return this._queue.shift();
	}
	
	/**
	 * Pushes [elements] to the begining of the queue
	 * This is used when, we have poped a certain material
	 * we tested if the elevator can handle it and found no room
	 * and so we push the element back to the beginning of the queue.
	 */
	prepend (elements) {
		elements.forEach((element) => {
			this._queue.unshift(element);
		});
	}

	/**
	 * Helper function, checks if the queue is empty.
	 */
	is_empty() {
		return this._queue.length === 0;
	}

	/**
	 * Helper function, used for the generation of the states table.
	 */
	capture_state() {
		return this;
	}
}

export default Queue;
