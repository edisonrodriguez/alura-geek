// js/mostrarCards.js
import { listaCards } from "./apiConnection.js";
import { deleteProduct } from "./apiConnection.js";

export async function listarCards() { // Exporta la función listarCards
    const lista = document.querySelector("[data-lista]");
    try {
        const productos = await listaCards();
        lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
        productos.forEach(producto => {
            const card = crearCard(producto.imagen, producto.nombre, producto.precio, producto.id);
            lista.appendChild(card);
        });
    } catch (error) {
        console.error("Error al listar las tarjetas: ", error);
    }
}

function crearCard(imagen, nombre, precio, id) {
    const productos = document.createElement("li");
    productos.className = "card border";
    productos.dataset.id = id;

    productos.innerHTML = `
    <div class="cards">
        <div class="card-container--info">
            <img src="${imagen}" alt="${nombre}"/>
            <p class="nombreProducto">${nombre}</p>
            <p class="precioProducto">${precio}$</p>
            <button class="comprar">Borrar</button>
            <ul data-lista></ul>
        </div>
    </div>`;

    productos.querySelector(".comprar").addEventListener("click", async () => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                await deleteProduct(id);
                productos.remove();
            } catch (error) {
                console.error("Error al borrar el producto: ", error);
            }
        }
    });

    return productos;
}

document.addEventListener("DOMContentLoaded", listarCards);
