import React from 'react'
import './ItemList.css'
import Item from '../Card/Item.jsx'
import Img1 from '../../assets/cards/gatitos.jpg'
import Img2 from '../../assets/cards/neko.jpg'
import Img3 from '../../assets/cards/auris.jpg'
import Img4 from '../../assets/cards/celu.jpg'
import Img5 from '../../assets/cards/compu.jpg'
import Img6 from '../../assets/cards/kurama.jpg'

const ItemList = () =>{
    const productos = [
        {
            id: 1,
            name: "LLaveros Macri",
            price: 250,
            img: Img1,
            description: "Un macri que se adapta a vos",
        },
        {
            id: 2,
            name: "Neko",
            price: 250,
            img:Img2,
            description: "Un gato que se adapta a vos",
        },
        {
            id: 3,
            name: "Soporte Auriculares",
            price: 350,
            img:Img3,
            description: "Un soporte de auricular que se adapta a vos",
        },
        {
            id: 4,
            name: "Soporte Celular",
            price: 450,
            img:Img4,
            description: "Un soporte de celular que se adapta a vos",
        },
        {
            id: 5,
            name: "Soporte Laptop",
            price: 650,
            img:Img5,
            description: "Un soporte de laptop que se adapta a vos",
        },
        {
            id: 6,
            name: "Kurama",
            price: 1150,
            img:Img6,
            description: "Un kurama que se adapta a vos",
        }
    ]

        const promise = new Promise((resolve, reject)=>{
            resolve('Respuesta de pronmesa')
        })


        const functionPromise= ()=>{
            promise.then((response)=>{
                console.log(response)
            })
        }
    return(
        <>
        <div className="cards__container">
            {
            productos.map((prod, index)=> <Item key={index} name={prod.name} price={prod.price} img={prod.img} description={prod.description}/>)
            }
        </div>
        <button onClick={functionPromise}>Llamo promesa</button>
        </>
    )
}

export default ItemList