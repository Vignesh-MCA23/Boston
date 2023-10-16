import { boston } from "./boston.js";
var bostondata=boston.data;
var ele="";
 
for(let i=0;i<bostondata.length;i++){
    for(let j=i+1;j<bostondata.length;j++){
        if(bostondata[i][11]<bostondata[j][11]){
            let temp=bostondata[i][11];
            bostondata[i][11]=bostondata[j][11];
            bostondata[j][11]=temp;
        }
        
    }
   

}
 var i=0;
while(i<5)
{
    ele+="<h2>" +
bostondata[i][8] +
"</h2>" +
"<h3>" +
bostondata[i][11] +
"</h3>";
i++;

}

document.getElementById("app").innerHTML="<ul>"+ele+"</ul>";



