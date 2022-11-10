import Item from "../Item/Item.jsx"

const ItemList= ({productsList}) => {
    console.log(productsList);
    return (

     <>
       {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
     </>

);

}

export default ItemList;