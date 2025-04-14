let numbers =[1,5,4,9,8,6,54,6,6,9];
let dublicates =[];
numbers.forEach((item,index) => {
    if(numbers.indexOf(item) !== index && !dublicates.includes(item)) {
        dublicates.push(item);
    }
});

console.log("Duplicate Numbers are : ", dublicates);
