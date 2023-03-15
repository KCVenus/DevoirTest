MesTestsUnitaires = TestCase('JavaScritTP');

MesTestsUnitaires.prototype.test = function () {   
    assertEquals('test de fonctionnement', 1, premierTest());
};

MesTestsUnitaires.prototype.test = function (){
    assertEquals('test pour 250g',250, GetTarrif(250));
};

