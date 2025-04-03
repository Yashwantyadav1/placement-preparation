function ReverseTriangle(n){
    let Triangle="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            Triangle +=" ";
        }
        for(let k=0;k<n-i;k++){
            if(i===0||k===0||k===n-i-1){
                Triangle +="* ";
            }
            else{
                Triangle +="  ";
            }
        }
        Triangle +="\n";
    }
    console.log(Triangle);
}
ReverseTriangle(8);