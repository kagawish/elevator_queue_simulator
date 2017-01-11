class Elevator {
	constructor(name, max_weight) {
		this._name = name;
		this._description = "This is an elevator model.";
		this._max_weight = max_weight;
		this._current_weight = 0;
		this._current_position = 'down';
		this._current_materials = [];
		this._system = null;
	}

	link_system(system) {
		this._system = system;
	}

	load_max_possible_weight(queue) {
		if (this._current_position === 'down') {
			var not_suitable_elements = [];
			while(!queue.is_empty() && !this.is_full()) {
				let current_material = queue.dequeue();
				if (!this.load_material(current_material)){
					not_suitable_elements.push(current_material);
				}

			}
			if (not_suitable_elements.length > 0)
				queue.prepend(not_suitable_elements);
		}
	}

	load_weight(material) {
		if (this._current_weight + material.weight() <= this._max_weight) {
			this._current_weight += material.weight();
			this._current_materials.push(material);
			return true;
		}
		this._system.wait_material(material);
		return false;
	}

	move() {
		switch(this._current_position) {
			case 'down' && this.is_full():
				this._current_position = 'up';
			case 'up' && this.is_full():
				this._current_position = 'up1';
			case 'up1':
				this._current_position = 'down';
		}
	}

	unload() {
		if (this._current_position === 'up' && this.is_full()) {
			while(let current_material_delivered = this._current_materials.pop()){
				this._system.deliver_material(current_material_delivered);
			}
		}
	}

	is_full() {
		return this._current_weight === this._max_weight;
	}
}
