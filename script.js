// Easy 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = arr.filter(number => {
  return number % 2 === 0;
});
let odd = arr.filter(number => {
    return number % 2 !== 0;
  });
console.log(even);
console.log(odd)
// Easy 2
let arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10]

arr1 = arr1.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(arr1);
// Medium 1
let vowel = ["a","e","i","o","u"]
function vowelChecker(x){
    for(let i = 0; i < vowel.length; i++){
      if (x == vowel[i]){
        return ("This is a vowel")
      }
    }
    return ("This is not a vowel")

   }
   console.log(vowelChecker("a"))
   console.log(vowelChecker("b"))
// Medium 2
function checkAnagram (a,b){
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');
  
  if (str1 === str2){
      console.log('true')
  }else {
      console.log('false')
  }
}
checkAnagram("Things are good", "Dogs eat ants")
checkAnagram("fried","fired")
// medium 3
function gdc(x,y){
  if ( y == 0){
    return x
  }
  return gdc(y, x % y)
}
let x = 336;
let y = 360;
console.log(`${gdc(x,y)}`)
// medium 4 
let car = {
  make: 'Dodge',
  model: "srt",
  year: 2021,
  color: "purple",
  mileage: 2000,

driveToWork: function () {
car.mileage +=33
console.log(car.mileage)
},
driveAroundTheWorld: function () {
  car.mileage +=24000
  console.log(car.mileage)
},
runErrands: function () {
  car.mileage +=30
  console.log(car.mileage)
}
}
car.driveToWork()
car.driveAroundTheWorld()
car.runErrands()

// Hard
function isMatching (x) {
  let allCharacters = [];
  // let firstChar = "()";
  // let secondChar = "{}";
  // let thirdChar = "[]";
  let myCharacters = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (i = 0; i < x.length; i++) {
      if (x[i] === '(' || x[i] === '[' || x[i] === '{')
      {
          allCharacters.push(x[i]);
      }else {
          let remove = allCharacters.pop();
          if (x[i] !== myCharacters[remove]) {
              return false;
          }
      }
  }
  if (allCharacters.length !== 0) {
      return false;
  }
  return true;
  }
  console.log(isMatching('{}'));
  console.log(isMatching('(]'));