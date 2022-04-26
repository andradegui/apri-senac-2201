let campo = document.querySelectorAll(".campo");

function drag(event) {
  let sinal = event.dataTransfer.setData("sinal", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  let elementID = event.dataTransfer.getData("sinal");

  console.log(event);

  let element = document.getElementById(elementID);
  let clone = element.cloneNode();
          // add elemento dentro de outro elemento
  event.target.appendChild(clone);

  if()
}
