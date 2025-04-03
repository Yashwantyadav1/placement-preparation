function HollowTriangle(n){
    let Triangle="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            Triangle +=" ";
        }
        for(let k=0;k<i+1;k++){
            if(i===0||i===n-1||k===0||k===i){
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
HollowTriangle(8);