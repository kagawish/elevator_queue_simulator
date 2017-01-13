import {jStat} from 'jStat';
import _ from 'lodash';

class Material {
    constructor(name, weight, randomness = 'constant', ...randomnessvars) {
        this._name = name;
        this._weight = weight;
        this._randomness = randomness;
        if (this._randomness === 'uniform') {
            this._distribution_sample = function() {
                return jStat.uniform(randomnessvars[0] - randomnessvars[1],
                    randomnessvars[0] + randomnessvars[1]).sample();
            }();
        } else if (this._randomness === 'constant') {
            this._distribution_sample = function() {
                return randomnessvars[0];
            }();
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
                        return randomnessvars[0][i];
                    if (rand < cumulative[i] && rand >= cumulative[i - 1]) return randomnessvars[0][i];
                }
            }();
        }
    }

    generate_material(queue) {
        queue.enqueue(this);
    }
}

export default Material;