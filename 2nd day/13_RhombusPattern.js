function Rhombuspattern(n){
    let Rhombus="";
    let row ="";
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            Rhombus += " ";
        }
        for(let k=0;k<n;k++){
            Rhombus +="* ";
        }
        Rhombus +=row.trim() +"\n";
    }
    console.log(Rhombus);
}
Rhombuspattern(5);