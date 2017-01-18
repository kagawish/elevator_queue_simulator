/**
 *
 * The following Class describes the elevator model.
 *
 */
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

	/** 
	 * Function used to have a reference to the system object within our elevator 
	 */
	link_system(system) {
		this._system = system;
	}

	/**
	 * Checks if the elevator is 'down', if it is not full and if the queue is not empty, 
	 * in which case, it tries to push maximum elements that exist on the queue, 
	 * on the elevator and puts back to the queue, those that didn't fit.
	 */
	load_max_possible_weight(queue) {
		if (this._current_position === 'down') {
			var not_suitable_elements = [];
			while(!queue.is_empty() && !this.is_full()) {
				let current_material = queue.dequeue();
				if (!this.load_material(current_material)){
					not_suitable_elements.push(current_material);
				}
			}
			if (not_suitable_elements.length > 0) {
				queue.prepend(not_suitable_elements);
			}
			else {
				this._system._stats._total_time_elevator_ideal++;
			}
		}
	}

	/**
	 * Helper function to the function above, it helps check if there's room for a certain
	 * material in the elevator.
	 */
	load_material(material) {
		if (this._current_weight + material._weight <= this._max_weight) {
			this._current_weight += material._weight;
			this._current_materials.push(material);
			return true;
		}
		this._system.postpone_material(material);
		return false;
	}

	/**
	 * Depending on current position and elevator fullness status, we may decide to move the elevator
	 * We have 3 positions: 
	 * 'down': the elevator is down waiting for materials.
	 * 'up': the elevator is going up.
	 * 'up1': the elevator arrived up.
	 */
	move() {
		if(this._current_position === 'down' && this.is_full()) {
			this._current_position = 'up';
		}
		else if(this._current_position === 'up' && this.is_full()) {
			this._current_position = 'up1';
		}
		else if (this._current_position === 'up1' && !this.is_full()){
			this._current_position = 'down';
		}
	}

	/**
	 * If the elevator is already up and full, we unload all the materials.
	 */
	unload() {
		if (this._current_position === 'up1' && this.is_full()) {
			do{
				let current_material_delivered = this._current_materials.pop();
				if (current_material_delivered !== undefined) {
					this._system.deliver_material(current_material_delivered);
				}
			} while(this._current_materials.length > 0);
		}
	}

	/**
	 * Helper method that checks if the elevator is full, that is its current weight is maximum.
	 */
	is_full() {
		return this._current_weight === this._max_weight;
	}

	/**
	 * Not a very important method, but used in the states table.
	 */
	capture_state() {
		return this;
	}
}

export default Elevator;
