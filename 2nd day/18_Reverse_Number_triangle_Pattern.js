function ReverseTriangle(n){
    let Triangle="";
    
    for(let i=0;i<n;i++){
        count=i+1;
        for(let j=0;j<i;j++){
            Triangle +=" ";
        }
        for(let k=0;k<n-i;k++){
            Triangle += count + " ";
            count++;
        }
        Triangle +="\n";
    }
    console.log(Triangle);
}
ReverseTriangle(5);