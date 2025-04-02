function ReversePyramid(n){
    let Triangle ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            Triangle +=j+1;
        }
        Triangle +="\n";
    }
    console.log(Triangle);
}
ReversePyramid(5);