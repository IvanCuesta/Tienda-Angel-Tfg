import Productos from "../models/producto.model.js";
import Categorias from "../models/categorias.model.js";

export async function getProducts(req, res) {
    try {
        const productos = await Productos.findAll({
            include: [{
                model: Categorias,
                as: 'categoria', // Asegúrate de que 'categoria' coincida con el alias utilizado en la definición de la asociación
                attributes: ['nombre'] // Puedes especificar aquí los atributos de la categoría que quieres incluir. 'nombre' es solo un ejemplo.
            }]
        });
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener los productos", error });
    }
}

export async function getCategorias(req, res) {
    try {
        const categorias = await Categorias.findAll();
        res.status(200).send(categorias);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener los productos", error });
    }
}