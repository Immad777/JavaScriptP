let count = 0;


document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("countbtn").textContent = count;
}

document.getElementById("decrease").onclick = function(){
    count--;
    document.getElementById("countbtn").textContent = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("countbtn").textContent = count;
}

document.getElementById("mainscr").onclick = function(){
    window.location.href = "index.html"
}