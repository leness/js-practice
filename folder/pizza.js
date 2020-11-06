// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка 
// показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці 
// інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) 
// (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , 
// а саме(вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше
// false(І виводить строку чого не вистачає(коржа, добавки, чи соусу))(використовувати this)
const SIZES = {
BIG: { price: 25, cal: 100, time: 15 },
SMALL : { price : 15, cal: 50, time: 7 },
MEDIUM: { price : 15, cal: 50, time: 7 }
}
const STUFFING = {
CHEESE: {name: "CHEESE", price : 6.5, cal: 45, time: 2 },
BEACON : {name: "BEACON", price : 10, cal: 70, time: 6 },
TOMATO : {name: "TOMATO", price : 12.1, cal: 4, time: 5 },
CHICKEN : {name: "CHICKEN", price : 9.3, cal: 30, time: 5.1 }
}
const SAUCES = {
MUSTARD: {name: "mustard", price : 3, cal: 5, time: 1 },
KETCHUP: {name: "ketchup", price : 4.2, cal: 20, time: 1.5 },
BOLOGNESE: {name: "bolognese", price : 7.5, cal: 50, time: 3 },
}
// Створити всі методи і перевірити чи вони працюють

const pizza = {
    size: [],
    stuff: [],
    sauses: [],
    isValid: false,

    // toShowSize() {
    //     console.log(this.size);
    // },
    toSetSize(value) {
        if (this.size.includes(value)) return console.log("Такая добавка уже есть");
        this.size.push(value)
        console.log(this.size)
     },
    setStuff(value) { 
        if (this.stuff.includes(value)) return console.log("Такая добавка уже есть");
        this.stuff.push(value)
        console.log(this.stuff)

    },
    setSauses(value) { 
        if (this.stuff.includes(value)) return console.log(`"Такой ${value.name} уже есть"`);
        this.stuff.push(value)
        console.log(this.sauses)
    }, 

    removeStuff(value) { 
        if (!this.stuff.includes(value)) return console.log("Такой добавки нет!");
        for (let i = 0; i < this.stuff.length; i += 1) {
            if (this.stuff[i] === value) {
                this.stuff.splice(i, 1)
                return console.log(this.stuff)
            }
        }
    },
    removeSauses(value) {
         if (!this.sauses.includes(value)) return console.log("Такого соуса нет!");
        for (let i = 0; i < this.sauses.length; i += 1) {
            if (this.sauses[i] === value) {
                this.sauses.splice(i, 1)
                return console.log(this.sauses)
            }
        }
     }, 

    getCost() {
        let total = 0;
        for (let i = 0; i <= num; i += 1) {
            if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauses === undefined) continue
                
            
        // console.log(this.size[i].price);
        // console.log(this.stuff[i].price);
            // console.log(this.sauses[i].price);
            total += this.size[i].price + this.stuff[i].price + this.sauses[i].price;
            
        }
        return console.log(total);
     },
    getCallories() { },
    
    toShowOrder() { },
    
    
    toGetTotalTime() { },
    
    toValidateOrder() { },


    
}
console.log(pizza);
pizza.toSetSize(SIZES.BIG)
pizza.setStuff(STUFFING.CHEESE)
pizza.setStuff(STUFFING.BEACON)
pizza.setStuff(STUFFING.CHEESE)
pizza.setSauses(SAUCES.KETCHUP)
pizza.setSauses(SAUCES.MUSTARD)
pizza.removeStuff(STUFFING.TOMATO)
pizza.removeStuff(STUFFING.CHEESE)
pizza.removeSauses(STUFFING.MUSTARD)
pizza.getCost(4)

const burger = {
    size: [],
    stuff: [],
    sauses: [],
    isValid: false,
}

pizza.toSetSize.call(burger, SIZES.SMALL)
pizza.setStuff.apply(burger, [STUFFING.BEACON])