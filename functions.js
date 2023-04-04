// Function 1

const dollarsToQuarters = (dollars) => {
    return dollars * 4;
}

console.log(dollarsToQuarters(1000));

// Function 2

const tipCalculator = (bill, tipPercent) => {
    return bill * (tipPercent / 100);
}

console.log(tipCalculator(100, 5));

// Function 3

const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumberGenerator(1, 10));

// Function 4

const generatePincode = () => {
    return randomNumberGenerator(1000, 9999);
}

console.log(generatePincode());

// Function 5

const filterLowNumbers = (numbers) => {
    return numbers.filter(number => number > 99);
}

console.log(filterLowNumbers([1, 2, 3, 664, 5, 676, 7, 8, 9, 10]));