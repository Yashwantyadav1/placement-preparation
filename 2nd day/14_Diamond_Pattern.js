function DiamondPattern(n){
    let Diamond ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            Diamond +=" ";
        }
        for(let k=0;k<i+1;k++){
            Diamond +="* ";
        }

        Diamond += "\n";
    }
    for(let i=n-1;i>=1;i--){
        for(let j=1;j<=n-i;j++){
            Diamond +=" ";
        }
        for(let k=1;k<=i;k++){
            Diamond +="* ";
        }
        Diamond += "\n";
    }
    console.log(Diamond);
}
DiamondPattern(5);