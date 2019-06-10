
function blinkMe(divToBlink){
  if (document.getElementById("makemeblink").style.color == "blue"){
    document.getElementById("makemeblink").style.color="red";
  }else{
    document.getElementById("makemeblink").style.color="blue";
  }
}

window.setInterval("blinkMe('makemeblink')", 2500);

