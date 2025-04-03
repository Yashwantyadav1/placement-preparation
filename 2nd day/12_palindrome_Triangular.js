function palindromeTriangular(n){
    let triangle="";
    for(let i=0;i<n;i++){

        for(let j=0;j<n-(i+1);j++){
            triangle += "  ";
        }
        for(let k=i;k>=1;k--){
            triangle += k + " ";
        }
        for(let l=2;l<=i;l++){
            triangle +=l + " ";
        }
        triangle += "\n";
    }
    
    console.log(triangle);
}
palindromeTriangular(6);