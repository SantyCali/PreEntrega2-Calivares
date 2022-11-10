import React from "react";

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
                 <button className="botonProducto2">Agregar al carrito</button>
              </div>
        </div>
    );

    }

export default DetalleProducto;