function ButterflyPattern(n){
    let pattern ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            pattern +="* ";
        }
        for(let j=1;j<=2*(n-i);j++){
            pattern +="  ";
        }
        for(let j=1;j<=i;j++){
            pattern +="* ";
        }
        pattern +="\n";
    }
    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            pattern +="* ";
        }
        for(let j=1;j<=2*(n-i);j++){
            pattern +="  ";
        }
        for(let j=1;j<=i;j++){
            pattern +="* ";
        }
        pattern +="\n";
    }
    console.log(pattern);
}
ButterflyPattern(5);