const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123; // keys are string + obj stringified = "object Object"
a[c] = 456; // obj b and obj c both are eqaul to "object Object"
console.log(a[b]); // since a[c] actually changes a["object Object"]