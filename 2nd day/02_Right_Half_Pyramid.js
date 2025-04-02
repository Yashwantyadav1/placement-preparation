function PrintPyramid(n){

   let Triangle ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i+1;j++){
           Triangle += "* ";
           
        }
        Triangle += "\n";
    }
    console.log(Triangle)
}
PrintPyramid(5)