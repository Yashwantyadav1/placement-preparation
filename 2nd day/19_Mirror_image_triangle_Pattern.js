function MirrorImagePattern(n){
    let Triangle ="";
    for(let i=0;i<n;i++){
       let count=i+1;
        for(let j=0;j<i;j++){
            Triangle +=" ";
        }
        for(let k=0;k<n-i;k++){
            Triangle += count + " ";
            count++;
        }
        Triangle +="\n";
    }
    for(let i=1;i<n;i++){
        let x=n-(i);
        for(let j=0;j<n-i-1;j++){
            Triangle +=" ";
        }
        for(let k=1;k<i+2;k++){
            Triangle += x + " ";
            x++;
        }
        Triangle +="\n";
    }
    console.log(Triangle);
}
MirrorImagePattern(5);