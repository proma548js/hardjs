const num = 266219;
const AddArray = num.toString().split('');
const multiplication = AddArray.reduce((acc, rec) => acc * rec);
const cubed = multiplication ** 3;
console.log(AddArray);
console.log(multiplication);
console.log(cubed);
console.log(typeof (cubed));
console.log(String(cubed).slice(0, 2));
