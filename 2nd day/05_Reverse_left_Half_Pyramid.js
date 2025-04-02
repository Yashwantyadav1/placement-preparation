function PrintPyramid(n){
    let Triangle = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            Triangle +="  ";
        }
        for(let k=0;k<n-i;k++){
            Triangle +="* "
        }
        Triangle += "\n";
    }
    console.log(Triangle);
}
PrintPyramid(9);