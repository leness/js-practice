// 1.
// function helloWorld () {
//   const str = "Hello World!"
//   console.log(str)
// }


// 1.2 сумма двох массивов
function arrayPlusArray(arr1, arr2) {
     sumOfArr1 = arr1.reduce((acc, value) => acc + value, 0);
  sumOfArr2 = arr2.reduce((acc, value) => acc + value, 0);
  
  return sumOfArr1 + sumOfArr2;
}

// 1.5 Object
function animal({name, legs, color}){
  return `This ${color} ${name} has ${legs} legs.`
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val){
  if (val)    return "true";             
  else     return "false";
}


// Training JS #7: if..else and ternary operator
// 1.
function saleHotdogs(n){
  if (n < 5) return n*100;
  else if (n>=5 && n<10) return n*95;
  else if (n>=10) return n*90;
}
// 2.
function saleHotdogs(n){
  return (n<5 ? 100 : n>=5 && n<10 ? 95 : 90)*n;
}
// 3.
const saleHotdogs=n=>n*(n<5 ? 100 : n>=5 && n<10 ? 95 : 90);



// Training JS #8: Conditional statement--switch
// 1.
function howManydays(month){
  var days;
  switch (month){
  case 2:
      return 28;
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      return 30;
      break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
      return 31;
  }
  return days;
}
// 2.
function howManydays(month){
  switch (month){
     case 2: return 28
     case 4:
     case 6:
     case 9:
     case 11: return 30
  }
  return 31
}
// 3.
function howManydays(month){
  switch ( month ){
    case 2 : return 28
    case 4: case 6: case 9: case 11: return 30
    default: return 31
  }
}



// //refer to the example and write your first JS function
// function helloWorld(){
// var regex = new RegExp(',', 'g');
// var str = null;
// var poop = ["H","e","l","l","o"," ","W","o","r","l","d","!"];
// poop = poop.toString();
// poop = poop.replace(regex, '');
// console.log(poop);
// }

// 2.
const getLength = array => array.length;

const getFirst = array => array[0];

const getLast = array => array[array.length - 1];

const pushElement = array => array.concat(0);

const popElement = array => array.splice(0, array.length - 1);





