function sendRequest() {
    let xmlHtmlRequest = new XMLHttpRequest();

    xmlHtmlRequest.onreadystatechange = () =>{
        console.log(xmlHtmlRequest.readyState);

        if(xmlHtmlRequest.readyState == 4 && xmlHtmlRequest.status == 200)
            console.log(xmlHtmlRequest.responseText);
    }

    xmlHtmlRequest.open("GET", "http://127.0.0.1:5500/Aula/arquivo.json", true);
    xmlHtmlRequest.send();
}