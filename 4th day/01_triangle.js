function HollowTriangle(n){
    let Triangle ="";
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n-i-1;j++){
            Triangle +=" ";
        }
        for(let j=0;j<=i;j++){
            Triangle +="* ";
        }
        Triangle +="\n"
    }
    console.log(Triangle);
    
}
HollowTriangle(5);