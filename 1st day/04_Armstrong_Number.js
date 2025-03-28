isArmstrong = (number) => {
    let numberofDigits = number.toString().length
    let temp = number
    let sum =0
    while(temp>0){
        let remainder = temp%10
        temp = Math.floor(temp/10)
        sum = sum+Math.pow(remainder , numberofDigits)
    }
    console.log(`value of sum is ${sum}`);
    
    if(number === sum)
        return true
    return false
}
console.log(`Is Armstrong nummber is ${isArmstrong(154)}`)