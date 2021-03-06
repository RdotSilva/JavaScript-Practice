class Set {
	constructor(arr) {
		this.arr = arr;
	}

	add(val) {
		if (!this.has(val)) this.arr.push(val);
	}

	delete(val) {
		this.arr = this.arr.filter(x => x !== val);
	}

	has(val) {
		return this.arr.includes(val);
	}

	get size() {
		return this.arr.length;
	}
}

class MySet extends Set {
	constructor(arr) {
		super(arr);
		this.originalArray = arr;
	}

	add(val) {
		super.add(val);
		console.log(`added ${val} to the set!`);
	}

	toArray() {
		return Array.from(this);
	}

	reset() {
		return new MySef(this.originalArray);
	}
}
