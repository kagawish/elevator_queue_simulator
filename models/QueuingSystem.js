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
	}

	assign_end_time(time) {
		this._end_time = time;
	}

	assign_elevator(elevator) {
		this._elevator = elevator;
	}

	assign_material(material) {
		this._materials.push(material);
		this._materials_delivered[material.name] = 0;
		this._materials_postponed[material.name] = 0;
		this._materials_average_wait_time[material.name] = 0;
	}

	link_queue(queue) {
		this._queue = queue;
	}

	deliver_material(material) {
		this._materials_delivered[material.name]++;
	}

	postpone_material(material) {
		this._materials_postponed[material.name]++;
		this._total_wait_time++;
	}

	calculate_stats() {
		for(let i = 0; i < this._materials; i++) {
			this._materials_average_wait_time[this_materials[i].name] = parseFloat(this._materials_postponed[this._materials[i].name]) / parseFloat(this._total_wait_time);
			this._materials_delivered_per_hour[this_materials[i].name] = (parseFloat(this._materials_delivered[this._materials[i].name]) / parseFloat(this.current_time)) * 60;
		}
	}
	
	advance_timeline(n) {
		for(let i = 0; i < n; i++) {
			if (this._current_time === this._end_time) {
				alert('Time ended.');
				console.log(this);
				return;
			}
			this._materials.forEach((item) => {item.generate_material(this._queue)});
			this._elevator.load_max_possible_weight(this._queue);
			this._elevator.move();
			this._elevator.unload();
			this._current_time++;

			this.calculate_stats();
		}
		console.log(this);
	}

	toString() {
		console.log('/----------------/');
		console.log('/----------------/');
		console.log(this._name);
		console.log(this._description);
		console.log('/----------------/');
		console.log(this._current_time);
		console.log(this._end_time);
		console.log('/----------------/');
		console.log('Elevator: ' + this._elevator);
		console.log('Materials: ' + this._materials);
		console.log('Queue: ' + this._queue);
		console.log('/----------------/');
		console.log('Stats: ');
		console.log(this.materials_average_wait_time);
		console.log(this.materials_delivered_per_hour);
		console.log('/----------------/');
		console.log('/----------------/');
		console.log();
	}
}
