let modebtn= document.querySelector("#mode");
let currentMode= "light";

modebtn.addEventListener("click", () => {
    console.log("you are trying to change mode");
    if (currentMode=="light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor ="black";
    }
    else{
        currentMode="light";
         document.querySelector("body").style.backgroundColor ="white ";
    }
    console.log(currentMode);
})





