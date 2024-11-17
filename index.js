const cur = document.querySelector(".cursor");
const main = document.querySelector(".main");
const box = document.querySelector(".box");

main.addEventListener("mouseover" , function(dets){
    cur.style.scale = 1;
    cur.style.left = dets.clientX + 'px';
    cur.style.top = dets.clientY + 'px';
})

box.addEventListener("click" , function(){
    window.location.href = "game.html"
})