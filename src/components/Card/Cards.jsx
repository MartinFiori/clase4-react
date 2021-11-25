import React from 'react'
import './Cards.css'

const Cards =({id, name, price, img, description})=>{
    return(
        <div className="card">
            <section className="card__header">
                <h3 className="card__header--title">{name}</h3>
                <p className="card__header--price">${price}</p>
            </section>
            <img className="card__img" src={img} alt={name} />
            <p className="card__description">{description}</p>
            <section className="card__buttons">
                <button id={id}> Comprar</button>
                <div className="card__buttons--container">
                    <i className="far fa-heart card__buttons--icon"></i>
                    <i className="fas fa-share-alt card__buttons--icon"></i>
                </div>
            </section>
        </div>
    )
}

export default Cards