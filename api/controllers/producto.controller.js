import Productos from "../models/producto.model.js";

export async function getProducts(req, res) {
    try {
        const productos = await Productos.findAll();
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener los productos", error });
    }
}