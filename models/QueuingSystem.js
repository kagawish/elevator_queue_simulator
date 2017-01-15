class QueuingSystem {
	constructor(name) {
		this._name = name;
		this._description = "This is a queuing system."
		this._current_time = 0;
		this._end_time = -1;
		this._elevator = null;
		this._queue = null;
		this._materials = [];
		this._materials_delivered = [];
		this._materials_delivered_per_hour = [];
		this._materials_postponed = [];
		this._materials_average_wait_time = [];
		this._total_wait_time = 0;
		this._states = [];
	}

	assign_end_time(time) {
		this._end_time = time;
	}

	assign_elevator(elevator) {
		this._elevator = elevator;
	}

	assign_material(material) {
		this._materials.push(material);
		this._materials_delivered[material._name] = 0;
		this._materials_postponed[material._name] = 0;
		this._materials_average_wait_time[material._name] = 0;
	}

	link_queue(queue) {
		this._queue = queue;
	}

	deliver_material(material) {
		this._materials_delivered[material._name]++;
		this._elevator._current_weight -= material._weight;
	}

	postpone_material(material) {
		this._materials_postponed[material._name]++;
		this._total_wait_time++;
	}

	calculate_stats() {
		for(let i = 0; i < this._materials.length; i++) {
			this._materials_average_wait_time[this._materials[i]._name] = parseFloat(this._materials_postponed[this._materials[i]._name]) / parseFloat(this._total_wait_time);
			this._materials_delivered_per_hour[this._materials[i]._name] = (parseFloat(this._materials_delivered[this._materials[i]._name]) / parseFloat(this.current_time)) * 60;
		}
	}

	capture_system_state() {
		var current_state = {
			elevator: this._elevator.capture_state(),
			queue: this._queue.capture_state(),
			materials: this._materials
		};

		this._states[this._current_time] = current_state;
	}
	
	advance_timeline(n) {
		console.log('Advancing the system by ' + n);
		for(let i = 0; i < n; i++) {
			if (this._current_time === this._end_time) {
				alert('Time ended.');
				return;
			}
			this._materials.forEach((item) => {item.generate_material(this._queue)});
			this._elevator.load_max_possible_weight(this._queue);
			this._elevator.move();
			this._elevator.unload();
			this._current_time++;

			this.calculate_stats();

			this.capture_system_state();
		}
	}
}

export default QueuingSystem;