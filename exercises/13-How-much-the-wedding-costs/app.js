let input = prompt('How many people are coming to your wedding?');

// Your code here
if (input <= 50) {
    price = 4000;
} else if (input <= 100) {
    price = 10000;
} else if (input <= 200) {
    price = 15000;
} else {
    price = 20000;
}
console.log('Your wedding will cost '+price+' dollars');