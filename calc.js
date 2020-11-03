class Calculator {
  toShowResult(total) {
    alert(`ИтогО: ${total}`);
  }

  getValues() {
    this.firstNumber = +prompt('1');
    this.secondNumber = +prompt('2');
  }
  plus() {
    this.getValues();

    let total = this.firstNumber + this.secondNumber;
    this.toShowResult(total);
  }
  minus() {
    this.getValues();

    let total = this.firstNumber - this.secondNumber;
    this.toShowResult(total);
  }
  devide() {
    this.getValues();
    let total = this.firstNumber / this.secondNumber;
    this.toShowResult(total);
  }
  multiply() {
    this.getValues();
    let total = this.firstNumber * this.secondNumber;
    this.toShowResult(total);
    }
    
    toAddMethod(cb, a, b) {
       return this.newMethod = cb(a, b);
    }
}

const callBack = function (a, b) {
    return a ** b;
};

const myCalc = new Calculator();
console.log(myCalc);

// console.log(myCalc.plus());
// console.log(myCalc.minus());
// console.log(myCalc.devide());
// myCalc.multiply();

// myCalc.toAddMethod(callBack, 6, 8);
console.log(myCalc.toAddMethod(callBack, 6, 8));
