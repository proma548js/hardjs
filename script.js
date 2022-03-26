const a = 266219;
const b = a.toString().split('');
const c = b.reduce((acc, rec) => acc * rec);
const d = c ** 3;
console.log(b);
console.log(c);
console.log(d);
console.log(typeof (d));
console.log(String(d).slice(0, 2));
