function TriangleRectangle(n){
    let Pattern ="";
    let even="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            Pattern +="  ";
        }
        for(let k=0;k<(2*i)+1;k++){
            if(k===even){
                Pattern +="# ";
            }
            else{
                Pattern +="* "
            }
        }
        Pattern +="\n";
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<((2*n)-1);j++){
            if(j===0||j===((2*n)-2)){
                Pattern +="* ";
            }
            else{
                Pattern +="  ";
            }
        }
        Pattern +="\n"
    }
    console.log(Pattern);
    
}
TriangleRectangle(5);