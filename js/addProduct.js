// js/crearProducto.js
import { enviarProducto } from "./apiConnection.js";
import { listarCards } from "./displayCards.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombreProducto]").value;
    const precio = document.querySelector("[data-precioProducto]").value;
    const imagen = document.querySelector("[data-imagenProducto]").value;

    if (!nombre || !precio || !imagen) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        await enviarProducto(nombre, precio, imagen);
        alert("Producto creado exitosamente");
        formulario.reset();  // Limpia el formulario después de enviar el producto
        listarCards();  // Actualiza la lista de productos
    } catch (error) {
        console.error("Error al crear el producto: ", error);
        alert("Hubo un error al crear el producto");
    }
}

formulario.addEventListener("submit", crearProducto);
