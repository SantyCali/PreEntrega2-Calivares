import{useState, useEffect, } from "react";
import {useParams} from 'react-router-dom'
import { consultarBDD } from "../../assets/funcionesProductos";
import DetalleProducto from "../DetalleProducto/DetalleProducto";


const ItemDetailContainer = () => {

    const [producto, setsProducto] = useState([]); 
    const {id} = useParams()


    useEffect(() => {
        consultarBDD("../json/productos.json").then(productos =>{ const prod = productos.find(productoArray => productoArray.id === parseInt(id))
        setsProducto(prod); 
    })
 })

    return (
        <div>
            <div className="card mb-3 container detalleProducto">
              <DetalleProducto producto={producto}/>
            </div>
        </div>
    )
}


export default ItemDetailContainer;