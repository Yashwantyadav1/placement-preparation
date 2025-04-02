function PrintSquare(n){
    let Triangle ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            Triangle +="* ";
        }
        Triangle +="\n";
    }
    console.log(Triangle)
}
PrintSquare(6);