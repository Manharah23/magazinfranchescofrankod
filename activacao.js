
var menuitens = document.getElementById("menuitens");

menuitens.style.maxHeight = "0px";

function menucelular(){
    if(menuitens.style.maxHeight == "0px"){
        menuitens.style.maxHeight = "200px";
    } else{
        menuitens.style.maxHeight = "0px";
    }
}