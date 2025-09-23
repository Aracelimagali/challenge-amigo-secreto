// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardaremos los nombres
let listaDeNombres = [];

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
// Función para agregar un amigo
function agregarAmigo() {
    let amigo = document.getElementById("amigo");
    let nombre = amigo.value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar a la lista
    listaDeNombres.push(nombre);

    // Mostrar en el HTML
    let lista = document.getElementById("listaAmigos");
    //agregra la etiqueta li, ya que el html no esta
    let li = document.createElement("li");
    li.textContent = nombre;
    //lo va agregarando
    lista.appendChild(li);

    // Limpiar el input
    amigo.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaDeNombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
    let amigoSecreto = listaDeNombres[indiceAleatorio];

    // Vaciar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar la lista
    listaDeNombres = [];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es:${amigoSecreto}`;
}

