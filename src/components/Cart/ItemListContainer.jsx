import React, {useState, useEffect} from 'react'
// import ItemCount from '../Count/ItemCount'
import ItemList from '../Items/ItemList'

const ItemListContainer = ({greeting}) => {

    const [arrayProductos, setArrayProductos] = useState([]);  
        
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
              {id: 1, nombre: 'Remera', Marca:'Nike' , Precio:1500 , stock: 100},
              {id: 2, nombre: 'Pantalon', Marca:'Puma' , Precio:2800 , stock: 12},
              {id: 3, nombre: 'Canillera', Marca:'Racing' , Precio:1500 , stock: 10},
            ]);
        }, 2000); 
    });
    useEffect(() => {
        promesaProductos.then(res =>{
            setArrayProductos(res);
        });
    },[]);

    return (
        <>
            <p> {greeting} </p>
            {/* <ItemCount stock={0} inicial={1} nombre={'Pantalon'} /> */}
            <ItemList Productos={arrayProductos} />
        </>
    )
}

export default ItemListContainer
