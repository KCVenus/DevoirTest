MesTestsUnitaires = TestCase('JavaScritTP');

MesTestsUnitaires.prototype.test = function () {   
    assertEquals('test de fonctionnement', 1, premierTest());
};

MesTestsUnitaires.prototype.testPoids250 = function (){
    assertEquals('test pour 250g',250, GetTarrif(250));
};

MesTestsUnitaires.prototype.testPoids500 = function (){
    assertEquals('test pour 500g',500, GetTarrif(500));
};
 
 MesTestsUnitaires.prototype.testPoids750 = function (){
    assertEquals('test pour 750g',750, GetTarrif(750));
 };

 MesTestsUnitaires.prototype.testPoids1000 = function (){
    assertEquals('test pour 1kg',1000, GetTarrif(1000));
};

 MesTestsUnitaires.prototype.testPoids2000 = function (){
    assertEquals('test pour 2kg',2000, GetTarrif(2000));
 };
 
 MesTestsUnitaires.prototype.testPoids5000 = function (){
     assertEquals('test pour 5kg',5000, GetTarrif(5000));
 };
 
// MesTestsUnitaires.prototype.test = function (){
//     assertEquals('test pour 10kg',10000, GetTarrif(10000));
// };
// 
// MesTestsUnitaires.prototype.test = function (){
//     assertEquals('test pour 15kg',15000, GetTarrif(15000));
// };

// MesTestsUnitaires.prototype.test = function (){
// assertEquals('test pour 30kg',30000, GetTarrif(30000));
// };
