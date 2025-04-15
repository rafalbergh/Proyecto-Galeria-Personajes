import React from "react";
import './Content.css'
import Card from "./Card";

function Content() {

    return (
        <>
            <div className="gallery">
                <Card titulo="spider Man" descripcion="Adolescente con poderes arácnidos" url="https://i.pinimg.com/736x/b0/c5/03/b0c503a891a9b6e1346809a3a0b2f8b2.jpg"/>
                <Card titulo="Iron Man" descripcion="Millonario con armadura tecnológica" url="https://cdn.britannica.com/50/182850-050-8B0F87B3/Robert-Downey-Jr-Iron-Man-film-Tony.jpg"/>
                <Card titulo="Captain America" descripcion="Súper soldado patriota con escudo" url="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/04/hipertextual-que-estaria-fabricado-escudo-capitan-america-si-fuese-real-2019887960.jpg?fit=1200%2C799&quality=70&strip=all&ssl=1"/>
            </div>
        </>
    )
}

export default Content