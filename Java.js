let user = "user";
let credential = "pass";
let input;
let check_c;

document.getElementById("login").onclick = function(){
    input = document.getElementById("Username").value;
    check_c = document.getElementById("password").value;

    if (input == user && check_c == credential) {
        console.log("Access granted");
        window.location.href = "confirmation.html";
        
        
    }

    
    else {
        console.log("Access denied")
        document.getElementById("invalid").textContent = `Wrong password or username, try again!`;
        document.getElementById("invalid").style.color = "red";
        
    }
    

    
}



