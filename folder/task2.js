// 1.
//Написати ф-ію, яка приймає в себе два параметра
// (обєкт замовлення і обєкт з цінами товару)
// Ця ф - ія має повернути ціну замовлення

// const toGetPrice = function () { }
// function toGetPrice() { }

// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }
// const orderA = { apple: 5, cheese: 1, bread: 3 }
// const orderB = {orange: 10, pork: 2, bread: 1}

// const toGetPrice = (a, b) => {
//     const keysA = Object.keys(a)
//     // console.log(keysA);
//     const keysB = Object.keys(b)
//     // console.log(keysB);
//     let total = 0;
//     for (let key of keysB) {
//         // console.log(keysA);
//         // console.log(keysB[key]);
//         if (keysA.includes(key)) {

//              (total += a[key] * b[key]);
//             //  console.log(total);
//         }
//     }
//     return total;
// };
// console.log(toGetPrice(productsPrice, orderA)) 
// console.log(toGetPrice(productsPrice, orderB));



// 2.
// Написати ф - ю isObjectEmpty яка перевіряє чи обєкт
// пустий чи ні.Якщо обєкт пустий то повернути true інакше false


// const isObjectEmpty = function (obj) {
//     const keys = Object.keys(obj)
//     console.log(keys);
//     console.log(keys.length);
//     if (keys.length === 0) return true;
//     return false;
// }

// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty({name: 'user', age: 21 }));


// 3.
