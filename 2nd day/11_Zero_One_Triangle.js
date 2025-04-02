function ZeroOneTriangle(n){
    let Triangle ="";
    count=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(count%2 == 0){
                Triangle +="1";
            }
            else{
                Triangle +="0";
            }
            count++;
        }
       Triangle +="\n";
    }
    console.log(Triangle);
}
ZeroOneTriangle(5);