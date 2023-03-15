 window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");

    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {

        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("keyup",Tarrif);
    }
}); 

 
 function premierTest(){
    return 1;
}

function GetTarrif(poids){
    
    
    const Poids250g = 250;
    const Poids500g = 500;
    const Poids750g = 750;
    const Poids1kg = 1000;
    const Poids2kg = 2000;
    const Poids5kg = 5000;
    const Poids10kg = 10000;
    const Poids15kg = 15000;
    const Poids30kg = 30000;
    somme =0;


 if (poids > 0 & poids <= Poids250g){
     return somme = 4.95; // prix pour 250g
     }
 if (poids >Poids250g & poids <=Poids500g){
    return somme = 6.70;   // prix pour 500g
}
if (poids > Poids500g & poids <= Poids750g){
   return somme = 7.60;   // prix pour 750g
}
if (poids > Poids750g & poids <=Poids1kg ) {
    return somme = 8.25;   // prix pour 1kg
 }
 if (poids >Poids1kg & poids <=Poids2kg ) {
   return somme =9.55;    // prix pour 2kg
} 
if ( poids > Poids2kg & poids <= Poids5kg){
   return somme = 14.65;  // prix pour 5kg
}
if (poids >Poids5kg & poids <=Poids10kg ){
    return somme = 21.30;  // prix pour 10kg
} 
if (poids >Poids10kg & poids <= Poids15kg){
    return somme = 26.95;  // prix pour 15kg
} 
if (poids > Poids15kg & poids <=Poids30kg){
    return somme = 33.40;  // prix pour 30kg
 }
 if (poids > Poids30kg & poids <0){
     return "impossible";
 }
 }
 function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
    return 0;
    } else {
        return valeur;
    }
}
 function getString(id) {
    return window.document.querySelector(id).value;
}
 
 function Tarrif(){
    let poids = window.document.querySelector("#num_poids").value;
    let Tarrif = GetTarrif(poids);
    afficheGetTarrif(Tarrif);
 }
 
 function afficheGetTarrif (Tarrif){
    if(!window.document.querySelector('#TarrifH3')){
     const TarrifH3 = window.document.createElement('h3');
     TarrifH3.id = 'TarrifH3';
     TarrifH3.appendChild(window.document.createTextNode('Tarrif en g : '+ Tarrif));
     window.document.querySelector('#divH3').appendChild(TarrifH3);
    }else if(Tarrif === 0)
    {
        TarrifH3.innerHTML = "impossible";
    }else {
        TarrifH3.innerHTML = "Tarrif : " + Tarrif + "€";
        }
}