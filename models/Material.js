/**
 * This is the Material Class, it describes the different material types.
 * This class depends on the library jStat for certain statistical calculations.
 */
import {jStat} from 'jStat';
import _ from 'lodash';

class Material {
    /**
     * Object constructor, what to be noted here is, that depending on radomness type
     * we define a different function for probabilistic sample generation.
     */
    constructor(name, weight, randomness = 'constant', ...randomnessvars) {
        this._name = name;
        this._weight = weight;
        this._randomness = randomness;
        if (this._randomness === 'uniform') {
            this._distribution_sample = function() {
                return parseInt(jStat.uniform(randomnessvars[0] - randomnessvars[1],
                    randomnessvars[0] + randomnessvars[1]).sample());
            };
        } else if (this._randomness === 'constant') {
            this._distribution_sample = function() {
                return parseInt(randomnessvars[0]);
            };
        } else if (this._randomness === 'probabilistic') {
            var cumulative = _.map(randomnessvars[1], (element, index) => {
            var total = 0;
                for (let i = 0; i <= index; i++) {
                    total += randomnessvars[1][i];
                }
                return total;
            });
            this._distribution_sample = function() {
                let rand = Math.random();
                for (let i = 0; i < randomnessvars[0].length; i++) {
                    if (i === 0 && rand < cumulative[i])
                        return parseInt(randomnessvars[0][i]);
                    if (rand < cumulative[i] && rand >= cumulative[i - 1]) 
                        return parseInt(randomnessvars[0][i]);
                }
            };
        }
        this._time_until_arrival = this._distribution_sample();
    }

    /**
     * Whenever we have to generate a new material from a certain material type,
     * we check if a material of that type is already being generated,
     * if that's not the case we define a random variable that
     * decreases with each cycle to emulate the material
     * arriving to the queue in a random fashion.
     */
    generate_material(queue) {
        if (this.has_arrived()) {
            var material_clone = JSON.parse(JSON.stringify(this));
            material_clone._time_until_arrival = -1;
            queue.enqueue(material_clone);
            this._time_until_arrival = this._distribution_sample();
        } else {
            this._time_until_arrival--;
        }
    }

    /**
     * Helper method, helps the function above decide whether a certain
     * package reached 0 on the arrival timer, in which case
     * we may say that it arrived to the queue.
     */
    has_arrived() {
        return this._time_until_arrival === 0;
    }
}

export default Material;