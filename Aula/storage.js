let listArray = [];

if(window.localStorage.getItem("list")){
    listArray = JSON.parse(window.localStorage.getItem("list"));

    updateList();
}


console.log(listArray);

function addItem(item) {
    listArray.push(item);
    window.localStorage.setItem("list", JSON.stringify(listArray));
    
    updateList();
}

function updateList() {

    let ulElement = document.getElementById("list");

    let listElement = '';

    listArray.forEach(el => {
        listElement += '<li>' + el + '</li>';
    });

    ulElement.innerHTML = listElement;
}