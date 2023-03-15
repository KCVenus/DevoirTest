MesTestsUnitaires = TestCase('JavaScritTP');

MesTestsUnitaires.prototype.test = function () {   
    assertEquals('test de fonctionnement', 1, premierTest());
};

MesTestsUnitaires.prototype.testPoids250 = function (){
    assertEquals('test pour 250g',4.95, GetTarrif(250));
};

MesTestsUnitaires.prototype.testPoids500 = function (){
    assertEquals('test pour 500g',6.70, GetTarrif(500));
};
 
 MesTestsUnitaires.prototype.testPoids750 = function (){
    assertEquals('test pour 750g',7.60, GetTarrif(750));
 };

 MesTestsUnitaires.prototype.testPoids1000 = function (){
    assertEquals('test pour 1kg',8.25, GetTarrif(1000));
};

 MesTestsUnitaires.prototype.testPoids2000 = function (){
    assertEquals('test pour 2kg',9.55, GetTarrif(2000));
 };
 
 MesTestsUnitaires.prototype.testPoids5000 = function (){
     assertEquals('test pour 5kg',14.65, GetTarrif(5000));
 };
 
 MesTestsUnitaires.prototype.testPoids10000 = function (){
     assertEquals('test pour 10kg',21.30, GetTarrif(10000));
 };
 
 MesTestsUnitaires.prototype.testPoids15000 = function (){
    assertEquals('test pour 15kg',26.95, GetTarrif(15000));
 };

 MesTestsUnitaires.prototype.testPoids30000 = function (){
 assertEquals('test pour 30kg',33.40, GetTarrif(30000));
 };
