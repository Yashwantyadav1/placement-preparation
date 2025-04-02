function ChangingPyramid(n){
    let Triangle="";
    for(let i=0;i<n;i++){
        count=i;
    
        for(let j=0;j<i;j++){
            Triangle += count;
            count++;
        }
        Triangle +="\n";
    }
    console.log(Triangle);
}
ChangingPyramid(6);