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

    
    if(poids === Poids250g)
    {
        return 250;
    }
    
    if (poids === Poids500g)
    {
        return 500;
    }
    
    if (poids === Poids750g)
    {
        return 750;
    }
    
    if (poids === Poids1kg)
    {
        return 1000;
    }
    if (poids === Poids2kg)
    {
        return 2000;
    }
    if (poids === Poids5kg)
    {
        return 5000;
    }
    if (poids === Poids10kg)
    {
        return 10000;
    }
    
}