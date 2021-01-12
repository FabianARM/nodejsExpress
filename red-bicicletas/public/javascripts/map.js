var mymap = L.map('main_map').setView([-34.6012424, -58.861497], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log("Esta pasando por aca.");
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(mymap)
        });
    },
    error: function(){
        console.log("errorrrr");
    }
})

