
var menuitens = document.getElementById("menuitens");

menuitens.style.maxHeight = "0px";

function menucelular(){
    if(menuitens.style.maxHeight == "0px"){
        menuitens.style.maxHeight = "200px";
    } else{
        menuitens.style.maxHeight = "0px";
    }
}

var produtoimg = document.getElementById("produtoimg");

var miniatura = document.getElementsByClassName("miniatura");

miniatura[0].onclick = function(){
    produtoimg.src = miniatura[0].src;
}
miniatura[1].onclick = function(){
    produtoimg.src = miniatura[1].src;
}
miniatura[2].onclick = function(){
    produtoimg.src = miniatura[2].src;
}
miniatura[3].onclick = function(){
    produtoimg.src = miniatura[3].src;
}