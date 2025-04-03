function Kpattern(n){
    let Pattern ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            Pattern +="* ";
        }
        Pattern +="\n";
    }
    for(let i=0;i<=n;i++){
        for(let j=0;j<=i;j++){
            Pattern +="* ";
        }
        Pattern +="\n";
    }
    console.log(Pattern);
}
Kpattern(5);