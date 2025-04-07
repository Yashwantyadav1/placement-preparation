function RightPascaltriangle(n){
    let triange ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i+1;j++){
           triange += "* ";
        }
        triange += "\n";
    }
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n-i;j++){
            triange +="* ";
        }
        triange += "\n";
    }
    console.log(triange);
    
}
RightPascaltriangle(4)