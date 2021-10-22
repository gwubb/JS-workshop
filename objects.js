let beaker = {
	material:"glass",
	shape:"cylindrical",
	liquid:"100ml of water",
	break() {
		return this.liquid + " was spilled";
	}

};

console.log (beaker.break())