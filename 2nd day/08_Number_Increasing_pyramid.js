function NumberOfIncreasingPyramid(n){
    let Triangle ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i+1;j++){
            Triangle += j+1;
        }
        Triangle +="\n";
    }
    console.log(Triangle);
}
NumberOfIncreasingPyramid(9);