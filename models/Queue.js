class Queue {
	constructor(name) {
		this._name = name;
		this._queue = [];
		this._size = 0;
	}

	enqueue (element) {
		this._queue.push(element);
		this._size++;
	}

	dequeue () {
		if (this._size === 0) return false;
		this._size--;
		return this._queue.shift();
	}
	
	prepend (elements) {
		this._queue.unshift(elements);
	}

	is_empty() {
		return this._size === 0;
	}

	capture_state() {
		return this;
	}
}

export default Queue;
