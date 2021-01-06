var Bicicleta = function (id, color, modelo, ubicacion){
    this.id = id; 
    this.color = color; 
    this.modelo = modelo;
    this.ubicacion = ubicacion; 
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + 'color: ' + this.color + 'modelo: ' + this.modelo + 'ubicacion: ' + this.ubicacion; 
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6012424, -58.3861497]);
var b = new Bicicleta(2, 'blanca', 'urbana', [-34.596932, -58.3808287]);

Bicicleta.add(a); 
Bicicleta.add(b);


Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if(aBici)
        return aBici;
    else   
        throw new  Error(`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
    //aBici = Bicicleta.findById(aBiciId); 
    for(var i =0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id = aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break; 
        }
    }
}
//Se importa la bicicleta para que se pueda exportar desde express.
module.exports = Bicicleta;