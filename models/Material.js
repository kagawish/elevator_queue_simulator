class Material {
	constructor(name, weight, randomness='constant', ...randomnessvars) {
		this._name = name;
		this._weight = weight;
		this._randomness = randomness;
		if (this._randomness === 'uniform') {
			this._a = randomnessvars[0];
			this._b = randomnessvars[1];
		}
		else if (this._randomness === 'constant') {
			this._a = randomnessvars[0];
		}
		else if (this._radomness === 'probabilistic') {
			this._a = randomnessvars[0];
			this._probs = randomnessvars[1];
		}
	}
}
