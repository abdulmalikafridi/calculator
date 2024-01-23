     var screen = document.getElementById("screen");
     var clear = document.querySelector(".btn-clear");
     var equal = document.getElementById("equal");
     //  var buttons = document.querySelectorAll(".btn");     /*select to all button to get through forEach loop*/


//  this is for btn to show value in input screen

 function BtnValue(num){
   screen.value +=num;
}
function calcValue(){
    var calcValue= eval(screen.value);
   screen.value=calcValue;
}
function clearValue(){
    screen.value="";
}