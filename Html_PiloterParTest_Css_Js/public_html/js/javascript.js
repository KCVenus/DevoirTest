 function premierTest(){
    return 1;
}
//
//function GetTarrif(poids){
//    
//    
//    const Poids250g = 250;
//    const Poids500g = 500;
//    const Poids750g = 750;
//    const Poids1kg = 1000;
//    const Poids2kg = 2000;
//    const Poids5kg = 5000;
//    const Poids10kg = 10000;
//    const Poids15kg = 15000;
//    const Poids30kg = 30000;
//
//    
//    if(poids === Poids250g)
//    {
//        return 250;
//    }
//    
//    if (poids === Poids500g)
//    {
//        return 500;
//    }
//    
//    if (poids === Poids750g)
//    {
//        return 750;
//    }
//    
//    if (poids === Poids1kg)
//    {
//        return 1000;
//    }
//    if (poids === Poids2kg)
//    {
//        return 2000;
//    }
//    if (poids === Poids5kg)
//    {
//        return 5000;
//    }
//    if (poids === Poids10kg)
//    {
//        return 10000;
//    }
//    if (poids === Poids15kg)
//    {
//        return 15000;
//    }
//    if (poids === Poids30kg)
//    {
//        return 30000;
//    }
//}

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
 }