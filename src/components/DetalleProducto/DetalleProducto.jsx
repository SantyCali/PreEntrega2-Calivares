import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const onAdd = (contador) => {
  console.log(contador)
}


const DetalleProducto = ({producto}) => {
    return (
        <div>
              <div className="row g-0">
                <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="" />
              </div>
              <div className="container">
                <div className="card-body"></div>
                 <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">Marca: {producto.marca}</p>
                 <p className="card-text">Precio: ${producto.precio}</p>
                 <p className="card-text">Stock: {producto.stock}</p>
                 <ItemCount stock = {producto.stock} onAdd={onAdd}/> <br />
                 <button className="botonProducto2">Agregar al carrito</button>
              </div>
        </div>
    );

    }

export default DetalleProducto;