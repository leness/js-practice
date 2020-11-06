// 1.
// let admin
// let name = "Djon"
// admin = name
// alert(admin)


// 2.
// const leapYear = "Высокосный год"
// const notLeapYear = "Невысокосный год"
// let userYear = prompt()
// if (userYear === 0 || isNaN(userYear)) {
//     alert ("Отмена")
// } else if (userYear % 4 === 0) {
//     alert (leapYear)
// } else {
//     alert (notLeapYear)
// }


// 3.
// Написати програму де компютер загадає число від 1 до 10
// і запропонує користувачу вгадати його Користувач вводить
// свій варіант і отримує результат(Виграв чи ні)
// Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"


// let userInput = prompt("Введи число, друг!");
// let computerImput = Math.floor(Math.random() * (11 - 1) + 1)
// //проверка на кнопку отмена
// if (userInput === null) {
//     alert ("Отмена")
// } else {
//   //валидация значений если не Отмена
//   //  console.log(typeof userInput, userInput); 
//   //проверка на НЕ ЧИСЛО и на НЕ В ДИАПАЗОНЕ ЧИСЕЛ   
//     if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//         alert("Введи что тебя просили!!!");
// } else if (+userInput === computerImput) {
//         alert(`Совпало: ${userInput} - ${computerImput}`); 
// } else {
//     alert (`Не совпало: ${userInput} - ${computerImput}`);
// }
// }


// 4.
// Написати ф - ю capitalize яка буде приймати строку
// і буде вертати нову строку де кожне слово буде
// починатися з великої літери.

// const capitalize = function (string) {
//     console.log(string);
//     const arrayCap = string.split(" ")
//     console.log(arrayCap);
//     const newArray = []
//     // перебираем массив
//     for (let elem of arrayCap) {
//         console.log(elem);
//         const word = elem[0].toUpperCase() + `${elem.slice(1)}`;
//         console.log(word);
//         newArray.push(word)
//     }
//     console.log(newArray);
//     return string = newArray.join(' ')
// }
// console.log(capitalize('the quick brown fox'))



// const string = 'I love js!';

// for (let word of string) {
//     if (word === " ") {
//         continue;
//     }
//     console.log(word);
// }


// 5.
// Написати ф - ю countVowels яка буде приймати строку
// і буде вертати кількість голосних літер.aeiouAEIOU 
// - рядок з голосними в англ алфавіті

function countVowels(string) {
    // console.log(string);
    const vowels = "aeiouAEIOU";
    let total = 0;
    for (let item of string) {
        // console.log(item);
        if (vowels.includes(item)) {
            total += 1;
        }
    }
    console.log(total);
}

countVowels('the quick brown fox')
// countVowels()