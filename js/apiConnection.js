export async function listaCards() {
    try {
        const response = await fetch("http://localhost:3001/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}

export async function enviarProducto(nombre, precio, imagen) {
    try {
        const response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, precio, imagen })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending data: ", error);
        throw error;
    }
}

export async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el producto: ${response.statusText}`);
        }

        console.log('Producto eliminado exitosamente');
    } catch (error) {
        console.error(`Error al intentar eliminar el producto: ${error}`);
        throw error;
    }
}
