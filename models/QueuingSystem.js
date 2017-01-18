/**
 * This represents the main Class, or the Containing class,
 * This class represents the System Component which
 * would contain all the different other
 * components and may help their
 * interaction.
 * It also contains the statistics about the system as a whole.
 */
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

	/**
	 * Decide the experiment is going to end after how many cycles.
	 */
	assign_end_time(time) {
		this._end_time = time;
	}

	/**
	 * Links a certain Elevator Component to this system.
	 */
	assign_elevator(elevator) {
		this._elevator = elevator;
	}

	/**
	 * Links a certain Material Component to this system.
	 */
	assign_material(material) {
		this._materials.push(material);
		this._stats._materials_delivered[material._name] = 0;
		this._stats._materials_postponed[material._name] = 0;
		this._stats._materials_average_wait_time[material._name] = 0;
	}

	/**
	 * Links a certain Queue Component to this system.
	 */
	link_queue(queue) {
		this._queue = queue;
	}

	/**
	 * Defines the behavior in which we unload materials from our 
	 * elevator and gets statistics about the materials
	 * that arrived.
	 */
	deliver_material(material) {
		this._stats._materials_delivered[material._name]++;
		this._elevator._current_weight -= material._weight;
	}

	/**
	 * Defines the behavior in which a material is blocked 
	 * (there's no room on the elevator for its weight)
	 * and gets statistics about that material.
	 */
	postpone_material(material) {
		this._stats._materials_postponed[material._name]++;
		this._total_wait_time++;
	}

	/**
	 * Iteratively, in each cycle, recalculates the different,
	 * stats that we are searching for in our system.
	 */
	calculate_stats() {
		for(let i = 0; i < this._materials.length; i++) {
			if (this._current_time !== 0) {
				this._stats._materials_average_wait_time[this._materials[i]._name] = parseFloat(this._stats._materials_postponed[this._materials[i]._name]) / parseFloat(this._current_time);
				this._stats._materials_delivered_per_hour[this._materials[i]._name] = (parseFloat(this._stats._materials_delivered[this._materials[i]._name]) / parseFloat(this._current_time)) * 60;
				this._stats._percentage_elevator_ideal = (parseFloat(this._stats._total_time_elevator_ideal) / parseFloat(this._current_time)) * 100;
			}
		}
	}

	/**
	 * Produces a State Object, that can be used later on in the states
	 * array and can over all help us identify the different
	 * states the system was in for each cycle
	 * when it was working.
	 */
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

	/**
	 * Main Actions needed to be taken each cycle, namely:
	 * 1- Check if we have to generate a certain material type or
	 *    it is already on its way to being generated (For all material type).
	 * 2- Loads the maximum possible weight on the elevator from the queue.
	 * 3- If the elevator is able to move, we move it.
	 * 4- Finally, if the elevator is in the position to unload the materials
	 *    it contains, we unload them.
	 */
	advance_components_states() {
		this._materials.forEach((item) => {item.generate_material(this._queue)});
		this._elevator.load_max_possible_weight(this._queue);
		this._elevator.move();
		this._elevator.unload();
	}
	
	/**
	 * Simulates advancing the time by n cycles, and for each cycle, if we didn't
	 * bypass the end time, we take needed actions for the components, advance current
	 * time, calculate stats for the system and take a snapshot of the current state.
	 */
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