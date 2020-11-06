// const myArrow = () => {
//     console.log('myArrow');
// }

// console.dir(myArrow);

// console.log(Object.create(null));

const object = {num : 2}
//function getNum (obj) { return obj.num; }
function getNum ({num}) { return num; }
console.log(getNum(object)) // 2