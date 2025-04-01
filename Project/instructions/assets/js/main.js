//appelle au DOM
let headerList = document.querySelectorAll("header div");
let mainList =document.querySelectorAll("main div div");
console.log(mainList)



function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;
    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(colors)
{
    // le code de l'étape 1 se passe ici
    for (let i=0; i < headerList.length; i++){
        headerList[i].style.backgroundColor=colors[i];
    }


}


window.addEventListener("DOMContentLoaded", function(){

    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);
// le code de l'étape 2 se passe ici
    for (let i=0; i < headerList.length; i++){
        headerList[i].addEventListener("click", function(event){
            selectColor(event);
            console.log(getSelectedColor());
        });
    }  

    // le code de l'étape 3 se passe ici
    for (let i=0; i < mainList.length; i++){
        let interrupteur =0;//interrupteur pour check présence de couleurs.
        mainList[i].addEventListener("click", function(event){
            interrupteur++
            console.log(interrupteur)
            if (interrupteur ===1){
            let color = getSelectedColor();
            mainList[i].style.backgroundColor=color;
            console.log(interrupteur)
            }else if (interrupteur===2){
                mainList[i].style.backgroundColor="#333333";
                interrupteur=0;
            }
        });
    }  
});


