// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const array = [2, 5, 9];
array[1] = 10;
console.log(array);

// Створити масив із трьох рядків. Додати до масиву ще один рядок.
const strArray = ['cat', 'dog', 'mouse'];
strArray[3] = 'frog';
console.log(strArray);

// Створити скрипт який поверне суму всіх чисел в масиві.
const numArr = [3, 6, 4, 7, 8, 3];
let sum = 0;
for (const number of numArr) {
    sum += number
};
console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const numArray = [3, 6, 4, 7, 8];
for (let i = 0; i < numArray.length; i += 1) {
    const element = numArray[i];
    console.log(element);
};

// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
const clients = ["Mango", "Polyna", "Ajaxis", 'Kiwi', 'Apple'];
for (let a = 0; a < clients.length; a+=1) {
    const element = clients[a];
    if (element.length > 5) {
        console.log(element);
    }
};

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const numbers = [3, 6, 4, 7, 8, 36, 27, 9, 12, 15];
let maxNum = numbers[0]
for (let b = 0; b < numbers.length; b+=1) {
    if (maxNum < numbers[b]) {
        maxNum = numbers[b]
    }
};
console.log(maxNum);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numbers1 = [3, 6, 4, 7, 8, 36, 27, 9, 12, 15];
for (const num of numbers1) {
    if (num % 2 === 0) {
        console.log(num)
    }
};