// multiplicationtable = (number) => {
//     for(let i=1;i<=10;i++){
//         console.log(`${number}*${i} = ${number*i}`);
//     }
// }
// let number=4;
// console.log(multiplicationtable(number));

const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

r1.question("Enter a number: ",(num) => {
    num = parseInt(num);
    console.log(`\nMultiplication Table of ${num}:\n`);
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
    r1.close();
});

