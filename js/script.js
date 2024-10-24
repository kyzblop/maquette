let isMenuClicked = false;

document.getElementById("btnMenu").addEventListener("click", () =>{

    if(isMenuClicked==false){
        document.getElementById("navSecondaire").style.display = "flex";
        isMenuClicked = true;
    } else {
        document.getElementById("navSecondaire").style.display = "none";
        isMenuClicked = false;
    }
})
