// console.log('ARRAYS')
let str = 'JavaScript'
// console.log(str.length);
// console.log(str[0]);

const array = [[],'Sandra', str, true, false, null, {}]
// console.log(array);
// console.log(array.length);
// console.log(array[1]);

array[1] = 111
// console.log(array);
// console.log(array[1]);

// console.log(array[array.length-1]);

for(let i = 1; i < array.length; i+=2 ){
    // console.log(`element-${i+1}`, array[i]);
}
for(let element of array){
    // console.log('element', element);
}
array.forEach((element)=>{
    // console.log('forEach', element);
})

let firstName = 'Sandra'
let userName = firstName;
// console.log('firstName:', firstName);
// console.log('userName:', userName);
// console.log('firstName === userName:', firstName === userName);

firstName = 'Zahara'
// console.log('firstName:', firstName);
// console.log('userName:', userName);
// console.log('firstName === userName:', firstName === userName);

// МАССИВЫ КОПИРУЮТСЯ ПО ССЫЛКЕ
const firstArray = [1,2,3]
// console.log('firstArray:', firstArray);
const secondArray = firstArray;
// console.log('secondArray:', secondArray);
// console.log('firstArray === secondArray:', firstArray === secondArray);

firstArray[0] = 100
// console.log('firstArray:', firstArray);
// console.log('secondArray:', secondArray);
// console.log('firstArray === secondArray:', firstArray === secondArray);

const thirdArray = [100,2,3]
// console.log('firstArray === thirdArray:', firstArray === thirdArray);
// console.log('secondArray === thirdArray:', secondArray === thirdArray);

// Array Methods
const numbers = [14, 18, 32]
// console.log(numbers);

numbers[3] = 1011;
numbers[33] = 3011;
numbers[numbers.length+1] = 5;

// 
const fruits = ['mango', 'banana', 'orange'];
// console.log(fruits);
fruits.unshift(1, 2); // to add element on the bigin
fruits.push(22, 33); // to add elem to the end
fruits.shift();
fruits.shift();
fruits.pop();
fruits.pop();

// unshift      +       push
// shift        -        pop

// Полноценное копирование массива

// slice()
const myFruits = fruits.slice()
// console.log(myFruits);
// console.log('myFruits === fruits:', myFruits === fruits);

const myNewFruits = [...myFruits];
// console.log(myNewFruits);
// console.log('myFruits === myNewFruits:', myFruits === myNewFruits);

// splice - швейцарский нож среди методов массива

const nums = [4, 8, 12, 2, 10]
let idx = nums.indexOf(12)
// console.log('idx', idx);
nums.splice(idx, 1);
// console.log(nums);

idx = nums.length / 2 - 1
// console.log(idx);
nums.splice(idx, 0, '1', '5');
// console.log(nums);

nums.splice(idx, 1, '4');
// console.log(nums);

// 
const score1 = [0, 1, 1, 1, 0, 1, 1, 1, 0, 1]
const score2 = [0, 1, 1, 1, 0, 1, 1, 1, 0, 1];
const score3 = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1];
const score4 = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1];

// const scores = score1.concat(score2, score3, score4);
const scores = [...score1, ...score2, ...score3, ...score4];
// console.log(scores);

const inners = [score1, score2, score3, score4];
// console.log(inners.flat());

// split '' => []
let sentence = 'I love JavaScript'
const newArr = sentence.split(' ')
// console.log('newArr', newArr);

// join [] => ''
const newString = newArr.join(' ')
// console.log('newString', newString);

// Callback - функция обратного вызова - такая ф-я, что передается при вызове другой как аргумент.

// Функциаонльные методы массива в качестве аргуента принимают Callback
const values = [1, 2, 3, 4, 5]
// forEach
const valuesForEach = values.forEach((element)=>{
    // console.log(element);
    return element;
})
// console.log('valuesForEach', valuesForEach);

// map
const valuesMap = values.map((element)=>element*2)
// console.log('valuesMap', valuesMap);
// console.log('values === valuesMap', values === valuesMap);

// filter
// const filteredVAlues = values.filter((element)=>{
//     console.log(element);
//     if(element%2 === 0){
//         return element;
//     }
// })
const filteredVAlues = values.filter(element =>element % 2 === 0);
// console.log('filteredVAlues', filteredVAlues);


// reduce
// console.log(values);
const reducedValues1 = values.reduce((memo, element)=>{
    memo += element;
    return memo;
}, 0)
// console.log('reducedValues1', reducedValues1);

const reducedValues2 = values.reduce((memo, element)=>{
    // memo.push(element+1);
    memo.unshift(element);
    return memo;
}, [])
// console.log('reducedValues2', reducedValues2);

const newValues = [10, 0, 1]
// console.log(newValues,values.includes(1));
// console.log(newValues, values.indexOf(1));

// some
const someValue = newValues.some((element)=>element >= 10)
// console.log('someValue', someValue);

// every
const everyValue = newValues.every(element => element >= 10);
// console.log('everyValue', everyValue);


// sort
const words = ['sale', 'coin', 'cash', 'arrival']
const prices = [100, 39, 48, 12, 204]

const sortedWords = words.sort()
console.log('sortedWords', sortedWords);
const reverseSortWords = sortedWords.reverse()
console.log('reverseSortWords', reverseSortWords);

const lowerPrices = prices.sort((min, max)=>max - min)
console.log('lowerPrices', lowerPrices);
