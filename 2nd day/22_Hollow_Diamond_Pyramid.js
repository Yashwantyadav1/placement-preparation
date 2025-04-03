function HollowDiamondPyramid(n){
    let Diamond ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            Diamond +=" ";
        }
        for(let k=0;k<i+1;k++){
            if(k===0||k===i){
                Diamond +="* ";
            }
            else{
                Diamond +="  ";
            }
        }
        Diamond +="\n";
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            Diamond +=" ";
        }
        for(let k=0;k<n-i;k++){
            if(k===0||k===n-i-1){
                Diamond +="* ";
            }
            else{
                Diamond +="  ";
            }
        }
        Diamond +="\n";
    }
    console.log(Diamond);
}
HollowDiamondPyramid(5);