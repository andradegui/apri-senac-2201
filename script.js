function getLocation(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(locationSucess, locationError)
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
}

function locationError(data){
    console.log(data);
}