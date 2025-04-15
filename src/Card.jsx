import React from "react";
import './Card.css'

function Card() {

    return (
        <>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIDXGcTPIly3GqABxpx0zudJj83gGKjHpVA&s" alt="" />
                <div className="card-info">
                    <h2>Spider-Man</h2>
                    <p>El amigable vecino de Nueva York.</p>
                    <button class="btn">Ver más</button>
                </div>
            </div>
        </>
    )
}

export default Card