function getLocation(){
    if("geolocation" in navigator){

                            //watchPosition
        navigator.geolocation.watchPosition(locationSucess, locationError)
    }
    else{
        alert("Não existe API de Geolocalização");
    }    
}

function locationSucess(data){
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;

    document.getElementById("latitude").innerHTML = latitude;
    document.getElementById("longitude").innerHTML = longitude;

    console.log(latitude,longitude);
}

function locationError(data){
    console.log(data);
}
