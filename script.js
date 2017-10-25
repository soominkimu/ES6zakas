
console.group("UTF-16 Code Points");
let text = "𠮷";

console.log(text.length);         // 2
console.log(/^.$/.test(text));    // false
console.log(text.charAt(0));      // ""
console.log(text.charAt(1));      // ""
console.log(text.charCodeAt(0));  // 55362
console.log(text.charCodeAt(1));  // 57271
console.groupEnd();

console.group("The codePointAt() Method");
let text2 = "𠮷a";

console.log(text2.charCodeAt(0));	// 55362
console.log(text2.charCodeAt(1));	// 57271
console.log(text2.charCodeAt(2));	// 97

console.log(text2.codePointAt(0));	// 134071
console.log(text2.codePointAt(1));	// 57271
console.log(text2.codePointAt(2));	// 97
console.groupEnd();

console.group("is32Bit");
function is32Bit(c) {
	return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit("𠮷"));			// true
console.log(is32Bit("a"));			// false

console.log(String.fromCodePoint(134071));	// "𠮷"
console.groupEnd();

