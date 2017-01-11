class Material {
	constructor(name, weight, randomness='constant', ...randomnessvars) {
		this._name = name;
		this._weight = weight;
		this._randomness = randomness;
		if (this._randomness === 'uniform') {
			this._a = randomnessvars[0];
			this._b = randomnessvars[1];
			this._distribution_sample() = () => {
				jStat.uniform(this._a-this._b, this._a+this._b).sample
			};
		}
		else if (this._randomness === 'constant') {
			this._a = randomnessvars[0];
			this._distribution_sample() = () => {
				return this._a
			};
		}
		else if (this._radomness === 'probabilistic') {
			this._a = randomnessvars[0];
			this._probs = randomnessvars[1];
			this._cumulative = _.each(this._probs, (index, element) => {
				var total = 0;
				for(let i = 0; i <= index; i++) {
					total+=this._probs[i];
				}
				return total;
			});
			this._distribution_sample = () => {
				let rand = Math.random();
				for(let i = 0; i < this._a.length; i++) {
					if (i === 0 && rand < this._cumulative[i])
						return this._a[i];
					if (rand < this._cumulative[i] && rand >= this._cumulative[i-1]) return this._a[i];
				}
			}
		}
	}

	generate_material(queue) {
		queue.enqueue(this._distribution_sample());
	}
}
