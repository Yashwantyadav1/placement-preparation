function NumberOfTriangular(n){
    let Triangle ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<=n-i-1;j++){
            Triangle +=" ";
        }
        for(let k=0;k<=i;k++){
            Triangle +="* ";
        }
        Triangle +="\n";
    }
    console.log(Triangle);

}
NumberOfTriangular(9);