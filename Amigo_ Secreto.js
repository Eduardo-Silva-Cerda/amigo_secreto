// Creación de arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("nombreAmigo").value.trim();

    if (inputNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(inputNombre);
    document.getElementById("nombreAmigo").value = "";
    actualizarListaAmigos();
}

// Función para actualizar la lista en la página
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSecreto}`;
}
