class Elevator {
	constructor(name, max_weight) {
		this._name = name;
		this._description = "This is an elevator model.";
		this._max_weight = max_weight;
		this._current_weight = 0;
	}

	add_weight(weight) {
		if (this._current_weight + weight <= this._max_weight) {
			this._current_weight += weight;
			return true;
		}
		return false;
	}

	isNotFull() {
		return this._current_weight === this._max_weight;
	}
}
