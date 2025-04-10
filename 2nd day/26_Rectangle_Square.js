function RectangleSquare(n){
    let pattern ="";
    for(let i=0;i<=n;i++){
        for(let j=0;j<n;j++){
            pattern += "* ";
            for(let i=0;i<n;i++){
                for(let j=0;j<i;j++){
                    pattern +="  ";
                }
              
            }
            pattern +="\n";

            for(let i=0;i<n;i++){
                for(let j=0;j<n-i;j++){
                    pattern +="  ";
                }
               
            }
           
        }
        pattern +="\n";
    }
    console.log(pattern);
    
}
RectangleSquare(7);