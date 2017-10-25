// Nicholas C. Zakas, Understanding ECMAScript 6
// Chap 1. Block Bindings

// var Declarations and Hoisting
function getValue(condition) {
	if (condition) {
		var value = "blue";
		// other code
		return value;
	} else {
		// value exists here with a value of undefined
		return null;
	}
	// value exists here with a value of undefined
}

function getValue(condition) {
	var value;
	if (condition) {
		value = "blue";
		// other code
		return value;
	} else {
		return null;
	}
}

// Block-Level Declarations
function getValue(condition) {
	if (condition) {
		let value = "blue";
		// other code
		return value;
	} else {
		// value doesn't exist here
		return null;
	}
	// value doesn't exist here
}
