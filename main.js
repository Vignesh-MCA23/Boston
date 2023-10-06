import { boston } from "./boston.js";
var bostondata=boston.data;
var ele="";
 
for(let i=0;i<bostondata.length;i++){
    for(let j=i+1;j<bostondata.length;j++){
        if(bostondata[i][11]<bostondata[j][11]){
            let temp=bostondata[i];
            bostondata[i]=bostondata[j];
            bostondata[j]=temp;
        }
        
    }
   

}
let output=bostondata.slice(0,5);
for(let i=0;i<output.length;i++){
ele=ele+"<h1>"+output[i][8]+"</h1>"+"<h1>"+output[i][11]+"</h1>"
console.log(output[i][8],output[i][11])
}
document.getElementById("app").innerHTML=ele



