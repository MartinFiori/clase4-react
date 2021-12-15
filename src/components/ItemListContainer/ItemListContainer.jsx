import React, { useEffect, useState  } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx'
import Img1 from '../../assets/cards/gatitos.jpg'
import Img2 from '../../assets/cards/neko.jpg'
import Img3 from '../../assets/cards/auris.jpg'
import Img4 from '../../assets/cards/celu.jpg'
import Img5 from '../../assets/cards/compu.jpg'
import Img6 from '../../assets/cards/kurama.jpg'
import Pacman from '../Pacman/Pacman.jsx'


const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true)
    const [dataItems, setDataItems] = useState([])
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

    const requesData = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })

    useEffect(() => {
        requesData.then((data)=>{
                console.log(`los productos son estos:`, data)
                setDataItems(data)
                setLoading(false)
        })
    }, []);


    return(
        <>
    {        
    loading ?
            <Pacman/>
        :
        <div className="cards__container">
            {
            dataItems.map((prod, index)=> <ItemList key={index} name={prod.name} price={prod.price} img={prod.img} description={prod.description}/>)
            }
            
        </div>
        }
        </>
    )
}

export default ItemListContainer