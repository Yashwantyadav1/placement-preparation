let str ="hey this is yashraj yadav "
let result =str.split(' ').filter(word => {return word.length > 0 }).length

console.log(result);
