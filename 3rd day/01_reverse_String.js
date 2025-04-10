function ReverseString(Str){
    let Reverse ='';
    for(let i=Str.length-1;i>=0;i--){
        Reverse += Str[i];
    }
    return Reverse;
}
console.log(ReverseString("Y A S H R A J "));