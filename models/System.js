class QueuingSystem {
	constructor(name) {
		this._name = name;
		this._description = "This is a queuing system."
		this._current_time = 0;
		this._total_time = -1;
		this._elevator = null;
		this._queue = null;
		this._materials = [];
	}

	assign_elevator(elevator) {
		this._elevator = elevator;
	}

	assign_material(material) {
		this._materials.push(material);
	}

	assign_queue(queue) {
		this._queue = queue;
	}

	populate_queue() {
		for(let i = 0; i < this._materials.length; i++) {
		}
	}

	add_max_possible_weight_to_elevator() {
		var not_suitable_elements = [];
		while(this._queue.isNotEmpty() && this._elevator.isNotFull()) {
			let current_weight = this._queue.dequeue();
			if (!this._elevator.add_weight(current_weight)){
				not_suitable_elements.push(current_weight);
			}

		}

		if (not_suitable_elements.length > 0)
			this._queue.prepend(not_suitable_elements);
	}
	
	advance_timeline(n) {
		if (this._current_time === this._total_time) {
			this.finish();
			return;
		}
		for(let i = 0; i < n; i++) {
			populate_queue();
			add_max_possible_weight_to_elevator();
			this._current_time++;
			if (this._current_time === this._total_time) {
				this.finish();
				return;
			}
		}
	}

	finish() {
		alert('Timeline is full.');
	}
}
