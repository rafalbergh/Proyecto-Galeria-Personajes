import React from "react";
import './Card.css'

function Card({titulo, descripcion, url}) {

    return (
        <>
            <div className="card">
                <img src={url} alt="" />
                <div className="card-info">
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                    <button className="btn">Ver más</button>
                </div>
            </div>
        </>
    )
}

export default Card