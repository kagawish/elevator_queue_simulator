class QueuingSystem {
	constructor(name) {
		this._name = name;
		this._description = "This is a queuing system."
		this._current_time = 0;
		this._end_time = -1;
		this._elevator = null;
		this._queue = null;
		this._materials = [];
		this._stats = {
			_materials_delivered: [],
			_materials_delivered_per_hour: [],
			_materials_postponed: [],
			_materials_average_wait_time: [],
			_total_wait_time: 0,
			_total_time_elevator_ideal: 0,
			_percentage_elevator_ideal: 0
		}
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
		this._stats._materials_delivered[material._name] = 0;
		this._stats._materials_postponed[material._name] = 0;
		this._stats._materials_average_wait_time[material._name] = 0;
	}

	link_queue(queue) {
		this._queue = queue;
	}

	deliver_material(material) {
		this._stats._materials_delivered[material._name]++;
		this._elevator._current_weight -= material._weight;
	}

	postpone_material(material) {
		this._stats._materials_postponed[material._name]++;
		this._total_wait_time++;
	}

	calculate_stats() {
		for(let i = 0; i < this._materials.length; i++) {
			if (this._current_time !== 0) {
				this._stats._materials_average_wait_time[this._materials[i]._name] = parseFloat(this._stats._materials_postponed[this._materials[i]._name]) / parseFloat(this._current_time);
				this._stats._materials_delivered_per_hour[this._materials[i]._name] = (parseFloat(this._stats._materials_delivered[this._materials[i]._name]) / parseFloat(this._current_time)) * 60;
				this._stats._percentage_elevator_ideal = (parseFloat(this._stats._total_time_elevator_ideal) / parseFloat(this._current_time)) * 100;
			}
		}
	}

	capture_system_state() {
		var current_state = {
            elevator: JSON.stringify({
            	current_weight: this._elevator._current_weight,
            	current_position: this._elevator._current_position
            }),
            queue: JSON.stringify(this._queue),
            materials: JSON.stringify(this._materials)
        };
        this._states.push(current_state);
	}

	advance_components_states() {
		this._materials.forEach((item) => {item.generate_material(this._queue)});
		this._elevator.load_max_possible_weight(this._queue);
		this._elevator.move();
		this._elevator.unload();
	}
	
	advance_timeline(n) {
		for(let i = 0; i < n; i++) {
			if (this._current_time === this._end_time) {
				alert('Time ended.');
				return;
			}

			this.advance_components_states();

			this._current_time++;

			this.calculate_stats();

			this.capture_system_state();
		}
		return this;
	}
}

export default QueuingSystem;