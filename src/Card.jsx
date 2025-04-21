import React from "react";
import './Card.css'

function Card({ name, description, image, powers, stats, universe }) {

    return (
        <>
            <div className="card">
                <img src={image} alt="" />
                <div className="card-info">
                    <div className="info-row">
                        <div className="title">
                            <h2>{name}</h2>
                        </div>
                        <div className="universe">
                            <h3>{universe}</h3>
                        </div>
                    </div>

                    <p className="descrip">{description}</p>

                    <div className="info-row">
                        <div className="powers">
                            {powers.map((power, i) => (
                                <p key={i}>- {power}</p>
                            ))}
                        </div>

                        <div className="divider" />

                        <div className="stats">
                            {Object.entries(stats).map(([key, { value, icon }]) => (
                                <p key={key}>
                                    {icon} {key.charAt(0).toUpperCase() + key.slice(1)}: {value}/5
                                </p>
                            ))}
                        </div>
                    </div>

                    <button className="btn">Elegir</button>
                </div>
            </div>
        </>
    )
}

export default Card