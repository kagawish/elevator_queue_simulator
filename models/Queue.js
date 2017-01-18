class Queue {
	constructor(name) {
		this._name = name;
		this._queue = [];
	}

	enqueue (element) {
		this._queue.push(element);
	}

	dequeue () {
		if (this.is_empty()) return false;
		return this._queue.shift();
	}
	
	prepend (elements) {
		elements.forEach((element) => {
			this._queue.unshift(element);
		});
	}

	is_empty() {
		return this._queue.length === 0;
	}

	capture_state() {
		return this;
	}
}

export default Queue;
