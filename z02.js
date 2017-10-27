// Nicholas C. Zakas, Understanding ECMAScript 6
// Chap 2. Strings and Regular Expressions

function c02001() {
	console.groupCollapsed("Better Unicode Support");
	console.log("UTF-16 Code Points");
	let text = "𠮷";

	console.log(text.length);         // 2
	console.log(/^.$/.test(text));    // false
	console.log(text.charAt(0));      // ""
	console.log(text.charAt(1));      // ""
	console.log(text.charCodeAt(0));  // 55362
	console.log(text.charCodeAt(1));  // 57271

	console.log("The codePointAt() Method");
	let text2 = "𠮷a";

	console.log(text2.charCodeAt(0));	// 55362
	console.log(text2.charCodeAt(1));	// 57271
	console.log(text2.charCodeAt(2));	// 97

	console.log(text2.codePointAt(0));	// 134071
	console.log(text2.codePointAt(1));	// 57271
	console.log(text2.codePointAt(2));	// 97

	console.log("is32Bit - The String.fromCodePoint() Method");
	function is32Bit(c) {
		return c.codePointAt(0) > 0xFFFF;
	}

	console.log(is32Bit("𠮷"));			// true
	console.log(is32Bit("a"));			// false

	console.log(String.fromCodePoint(134071));	// "𠮷"
	console.groupEnd();
	return 0;
}
c02001();

function c02002() {
	console.log("The normalize() Method");
	let normalized = values.map(function(text) {
		return text.normalize();
	});

	normalized.sort(function(first, second) {
		if (first < second) {
			return -1;
		} else if (first === second) {
			return 0;
		} else {
			return 1;
		}
	});

	values.sort(function(first, second) {
		let firstNormalized = first.normalized("NFD"),
			secondNormalized = second.normalized("NFD");

		if (firstNormalized < secondNormalized) {
			return -1;
		} else if (firstNormalized === secondNormalized) {
			return 0;
		} else {
			return -1;
		}
	});

	return 0;
}
//c02002();

function c02003() {
	console.groupCollapsed("Regular Expression u Flag");
	let text4 = "𠮷";

	console.log(text4.length);
	console.log(/^.$/.test(text4));    // false
	console.log(/^.$/u.test(text4));   // true

	function codePointLength(text) {
		let result = text.match(/[\s\S]/gu);
		return result ? result.length : 0;
	}

	console.log(codePointLength("abc"));		// 3
	console.log(codePointLength("𠮷bc"));		// 3

	function hasRegExpU() {
		try {
			var pattern = new RegExp(".", "u");
			return true;
		} catch (ex) {
			return false;
		}
	}

	console.groupEnd();
	return 0;
}
c02003();

function c02009() {
	console.groupCollapsed("Other String Changes");
	let msg = "Hello world!";

	console.log(msg.startsWith("Hello"));		// true
	console.log(msg.endsWith("!"));				// true
	console.log(msg.includes("o"));				// true

	console.log(msg.startsWith("o"));			// false
	console.log(msg.endsWith("world!"));		// true
	console.log(msg.includes("x"));				// false

	console.log(msg.startsWith("o", 4));		// true
	console.log(msg.endsWith("o", 8));			// true
	console.log(msg.includes("o", 8));			// false

	console.log("x".repeat(3));			// "xxx"
	console.log("hello".repeat(2));		// "hellohello"
	console.log("abc".repeat(4));		// "abcabcabcabc"

	// indent using a specified number of spaces
	let indent = " ".repeat(4),
		indentLevel = 0;

	// whenever you increase the indent
	let newIndent = indent.repeat(++indentLevel);

	console.groupEnd();
	return 0;
}
c02009();

function c02010() {
	console.groupCollapsed("Other Regular Expression Changes");
	let text = "hello1 hello2 hello3",
		pattern = /hello\d\s?/,
		result = pattern.exec(text),
		globalPattern = /hello\d\s?/g,
		globalResult = globalPattern.exec(text),
		stickyPattern = /hello\d\s?/y,
		stickyResult = stickyPattern.exec(text);

	console.log(result[0]);			// "hello1 "
	console.log(globalResult[0]);	// "hello1 "
	console.log(stickyResult[0]);	// "hello1 "

	pattern.lastIndex = 1;
	globalPattern.lastIndex = 1;
	stickyPattern.lastIndex = 1;

	result = pattern.exec(text);
	globalResult = globalPattern.exec(text);
	stickyResult = stickyPattern.exec(text);

	console.log(result[0]);			// "hello1 "
	console.log(globalResult[0]);	// "hello2 "
	try {
		console.log(stickyResult[0]);	// throws an error!
	} catch (ex) {
		console.log("error thrown");
	}

	console.groupEnd();
	return 0;
}
c02010();

function hasRegExpY() {
	try {
		var pattern = new RegExp(".", "y");
		return true;
	} catch (ex) {
		return false;
	}
}

function c02011() {
	console.groupCollapsed("The Regular Expression y Flag");
	let text = "hello1 hello2 hello3",
		pattern = /hello\d\s?/,
		result = pattern.exec(text),
		globalPattern = /hello\d\s?/g,
		globalResult = globalPattern.exec(text),
		stickyPattern = /hello\d\s?/y,
		stickyResult = stickyPattern.exec(text);

	console.log(result[0]);			// "hello1 "
	console.log(globalResult[0]);	// "hello1 "
	console.log(stickyResult[0]);	// "hello1 "

	console.log(pattern.lastIndex);			// 0
	console.log(globalPattern.lastIndex);	// 7
	console.log(stickyPattern.lastIndex);	// 7

	result = pattern.exec(text);
	globalResult = globalPattern.exec(text);
	stickyResult = stickyPattern.exec(text);
	
	console.log(result[0]);			// "hello1 "
	console.log(globalResult[0]);	// "hello2 "
	console.log(stickyResult[0]);	// "hello2 "

	console.log(pattern.lastIndex);			// 0
	console.log(globalPattern.lastIndex);	// 14
	console.log(stickyPattern.lastIndex);	// 14

	let pattern2 = /hello\d/y;
	console.log(pattern2.sticky);		// true
	console.log("hasRegExpY()=", hasRegExpY());

	console.groupEnd();
	return 0;
}
c02011();

function c02012() {
	console.groupCollapsed("Duplicating Regular Expressions");
	let re1 = /ab/i,
		// throws an error in ES5, okay in ES6
		re2 = new RegExp(re1, "g");

	console.log(re1.toString());	// "/ab/i"
	console.log(re2.toString());	// "/ab/g"

	console.log(re1.test("ab"));	// true
	console.log(re2.test("ab"));	// true

	console.log(re1.test("AB"));	// true
	console.log(re2.test("AB"));	// false

	console.groupEnd();
	return 0;
}
c02012();


