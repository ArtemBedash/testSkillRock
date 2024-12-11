function isPalindrome(str) {
    let phrase = str.toUpperCase().split("");
    for (let i = phrase.length - 1; i >= 0; i--) {
        if (phrase[i].charCodeAt(0) < 1040 || phrase[i].charCodeAt(0) > 1071) {
            phrase.splice(i, 1);
        }
    }
    console.log(phrase) //проверяю правильно ли отфильтровался массив


    const phraseReversed = [...phrase].reverse();

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] !== phraseReversed[i]) {
            return false;
        }

    }
    return true;
}

let palindrome = "     А= роза  ... упала на лапу Азора   ";
let word = "Гамбургер"
let res = isPalindrome(palindrome);
console.log(res);
res = isPalindrome(word);
console.log(res);


function fizzBuzz(number) {
    if (number < 1 || number > 100) {
        return "please enter a number in the range from 1 to 100"
    }
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    }
    if (number % 3 === 0) {
        return "Fizz"
    }
    if (number % 5 === 0) {
        return "Buzz"
    }

}

let num = 100;
res = fizzBuzz(num);
console.log(res);

function chunkArray(array, size) {
    let newArr = [];
    for (let i = 0; i < array.length; i = i + size) {
        newArr.push(array.slice(i, i + size));

    }

    return newArr;
}

let arr = [1, 4, 5, 3, 3, 3, 22, 4, 5, 5, 5, 5, 6];
res = chunkArray(arr, 3);
console.log(res);

