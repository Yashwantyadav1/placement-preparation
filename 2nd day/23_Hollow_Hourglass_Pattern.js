function  HollowHourglassPattern(n){
    let Pattern ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            Pattern +=" ";
        }
        for(let k=0;k<n-i;k++){
            if(k===0||i===0||k===n-i-1){
                Pattern +="* ";
            }
            else{
                Pattern +="  ";
            }
        }
        Pattern +="\n";
    }
    for(let i=1;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            Pattern +=" ";
        }
        for(let k=1;k<i+2;k++){
            if(k===1||k===i+1||i===n-1){
                Pattern +="* ";
            }
            else{
                Pattern +="  ";
            }

        }
        Pattern +="\n";
    }
    console.log(Pattern);
    
}
HollowHourglassPattern(5);