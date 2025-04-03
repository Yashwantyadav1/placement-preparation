function TrianglePattern(n){
    let Pattern="";
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n-i-1;j++){
            Pattern +=" ";
        }
        for(let k=0;k<=i;k++){
            Pattern +="* ";
        }
        Pattern +="\n";
    }
    console.log(Pattern);
}
TrianglePattern(9);