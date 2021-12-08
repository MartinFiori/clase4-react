import React from 'react'
import './Item.css'

const Item =({id, name, price, img, description})=>{

    
    return(
        <div className="card">
            <section className="card__header">
                <h3 className="card__header--title">{name}</h3>
                <p className="card__header--price">${price}</p>
            </section>
            <img className="card__img" src={img} alt={name} />
            <p className="card__description">
                {description}
                <i className="fas fa-info-circle description--circle"></i>
            </p>
            <section className="card__buttons">
                <button id={id} className="card__buttons--buy"> Comprar</button>
                <div className="card__buttons--container">
                    <i className="far fa-heart card__buttons--icon"></i>
                    <i className="fas fa-share-alt card__buttons--icon"></i>
                </div>
            </section>
        </div>
    )
}

export default Item