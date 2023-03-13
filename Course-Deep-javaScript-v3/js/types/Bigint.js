// bigint is used to store big intizer.

const a = 20;
console.log(BigInt(a)) // 20n

const b = 20n
console.log(typeof b) // bigint

const c = BigInt(20);
console.log(c) // 20n

var l = 84637246782645786243756742356746275264n
var k = 786476765736272674674637657436n
console.log(l + k ) // javascript not handle big integeer but bigint haldle big intiger