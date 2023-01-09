// #1

function getRandomArray (length, min, max) {
    let arr = [];

    for (let i = 0; i < length; i++){
        arr.push((Math.random() * (max - min) + min).toFixed());;
    }
    return arr;
}
console.log(getRandomArray(15, 1, 100))

// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let volts = Array.from({length: 24}, () => randomBetween(5, 20));

// console.log(volts);

// #2

const getMode = (...numbers) => {
  const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
};

console.log(getMode(6, 2, 55, 11, 78, 2, 55, 77,
    57, 87, 23, 2, 56, 3, 2,));

// #3

const getAverage = (...numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
};

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77,
    57, 87, 23, 2, 56, 3, 2));

// #4

const getMedian = (...numbers) => {
  const { length } = numbers;
  
  numbers.sort((a, b) => a - b);
  
  if (length % 2 === 0) {
    return (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  }
  
  return numbers[(length - 1) / 2];
};

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77,
  57, 87, 23, 3, 2, 56, 3, 2));
    
// #5

const filterEvenNumbers = (...numbers) => {
  const filteredArr = numbers.filter((el) => el % 2 === 1);
  return filteredArr;
};

console.log(filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77,
  57, 87, 23, 3, 2, 56, 3, 2));

// #7

const getDividedByFive = (...numbers) => {
  const filtered = numbers.filter((num) => num % 5 === 0);
  return filtered;
};

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77,
  57, 87, 23, 3, 2, 56, 3, 2));

// #8

const replaceBadWords = (str, bedWords) => {
  const correctedString = str.split(" ").map((word) => {
    for (i = 0; i < bedWords.length; i++) {
      if (word.toLowerCase().includes(bedWords[i])) {
        word = word
          .toLowerCase()
          .replace(bedWords[i], "*".repeat(bedWords[i].length));
      }
    }
    return word;
  });
  return correctedString.join(" ");
};

console.log(replaceBadWords("Are you fucking kidding me?", ["fuck"]));

// #9

const divideByThree = (word) => {
  let arr=[], str= word.replaceAll(' ','').toLowerCase();
  for (let i=0; i<str.length; i=i+3){        
    arr.push(str.substring(i,i+3));
  }
  return arr;
};

console.log(divideByThree("Commander"));


// const heroes = ['Capitan   America', 'Capitan', 'Capitan  America', 'America', 'Capitan America', 'America Capitan'];

// const result = heroes.find((hero) => {
//     const heroNameArray = hero.split('   ');
//     return heroNameArray.length > 1;
// });
// console.log(result)
