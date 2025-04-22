import React, { useState } from 'react';
import './Content.css'
import Card from "./Card";
import Modal from './Modal'

function Content() {

    const cardsData = [
            {
              name: "Spider-Man",
              image: "https://wallpapers.com/images/high/spider-man-mobile-portrait-d7wdnk4y40siait6.webp",
              universe: "Marvel",
              description: "Joven neoyorquino mordido por una araña radiactiva, adquiriendo habilidades arácnidas.",
              powers: ["Sentido arácnido", "Trepar paredes", "Fuerza sobrehumana", "Lanzar telarañas", "Agilidad aumentada"],
              stats: {
                fuerza: { value: 4, icon: "💪" },
                velocidad: { value: 4, icon: "⚡" },
                inteligencia: { value: 4, icon: "🧠" },
                resistencia: { value: 4, icon: "🛡️" }
              }
            },
            {
              name: "Superman",
              image: "https://i.pinimg.com/736x/6b/9d/be/6b9dbe9135f40c9bd23e61450a9778f5.jpg",
              universe: "DC",
              description: "Kryptóniano criado en la Tierra, defensor de la justicia con habilidades sobrehumanas.",
              powers: ["Vuelo", "Visión calorífica", "Super fuerza", "Invulnerabilidad", "Aliento helado"],
              stats: {
                fuerza: { value: 5, icon: "💪" },
                velocidad: { value: 5, icon: "⚡" },
                inteligencia: { value: 4, icon: "🧠" },
                resistencia: { value: 5, icon: "🛡️" }
              }
            },
            {
              name: "Thor",
              image: "https://i.pinimg.com/736x/24/51/8a/24518adcbea2edbd6786ca20a0295d57.jpg",
              universe: "Marvel",
              description: "Dios del Trueno de Asgard, portador de Mjölnir y defensor de los nueve reinos.",
              powers: ["Control del rayo", "Vuelo con Mjölnir", "Fuerza divina", "Inmortalidad"],
              stats: {
                fuerza: { value: 5, icon: "💪" },
                velocidad: { value: 4, icon: "⚡" },
                inteligencia: { value: 3, icon: "🧠" },
                resistencia: { value: 5, icon: "🛡️" }
              }
            },
            {
              name: "Harry Potter",
              image: "https://i.pinimg.com/736x/ff/85/c8/ff85c8ac1e48a4754ebf9d73cda4e047.jpg",
              universe: "Harry Potter",
              description: "Joven mago conocido como 'El niño que vivió', famoso por derrotar a Voldemort.",
              powers: ["Magia", "Vuelo en escoba", "Defensa contra las artes oscuras"],
              stats: {
                fuerza: { value: 2, icon: "💪" },
                velocidad: { value: 3, icon: "⚡" },
                inteligencia: { value: 4, icon: "🧠" },
                magia: { value: 5, icon: "✨" }
              }
            },
            {
              name: "Goku",
              image: "https://i.pinimg.com/736x/7c/7c/25/7c7c25288aada670cde2a3a498a49d6e.jpg",
              universe: "Dragon Ball",
              description: "Saiyajin criado en la Tierra, conocido por su fuerza y espíritu de lucha.",
              powers: ["Vuelo", "Energía Ki", "Super Saiyajin", "Teletransportación"],
              stats: {
                fuerza: { value: 5, icon: "💪" },
                velocidad: { value: 5, icon: "⚡" },
                inteligencia: { value: 3, icon: "🧠" },
                resistencia: { value: 5, icon: "🛡️" }
              }
            },
            {
              name: "Batman",
              image: "https://i.pinimg.com/736x/d1/12/8a/d1128a49a034bb26c7c7a47c2f82773a.jpg",
              universe: "DC",
              description: "Millonario, detective y estratega, usa su inteligencia y habilidades para combatir el crimen en Gotham.",
              powers: ["Artes marciales", "Tecnología", "Estrategia", "Sigilo", "Investigación"],
              stats: {
                fuerza: { value: 3, icon: "💪" },
                velocidad: { value: 3, icon: "⚡" },
                inteligencia: { value: 5, icon: "🧠" },
                resistencia: { value: 4, icon: "🛡️" }
              }
            },
            {
              name: "Wonder Woman",
              image: "https://i.pinimg.com/736x/56/96/a5/5696a503358f67433a4085b007d4faed.jpg",
              universe: "DC",
              description: "Princesa amazona con habilidades sobrehumanas y armamento divino.",
              powers: ["Fuerza", "Velocidad", "Vuelo", "Lazo de la Verdad", "Brazaletes indestructibles"],
              stats: {
                fuerza: { value: 5, icon: "💪" },
                velocidad: { value: 4, icon: "⚡" },
                inteligencia: { value: 4, icon: "🧠" },
                resistencia: { value: 5, icon: "🛡️" }
              }
            },
            {
              name: "Iron Man",
              image: "https://i.pinimg.com/736x/b9/22/00/b922006964e035f6c43b4d8a6ad993f4.jpg",
              universe: "Marvel",
              description: "Genio millonario que utiliza una armadura avanzada para luchar contra el crimen.",
              powers: ["Tecnología avanzada", "Vuelo", "Fuerza aumentada", "Rayos repulsores"],
              stats: {
                fuerza: { value: 4, icon: "💪" },
                velocidad: { value: 4, icon: "⚡" },
                inteligencia: { value: 5, icon: "🧠" },
                resistencia: { value: 4, icon: "🛡️" }
              }
            },
            {
              name: "Captain America",
              image: "https://i.pinimg.com/736x/db/b7/b9/dbb7b962198220ce5d8ea10dca326a0d.jpg",
              universe: "Marvel",
              description: "Soldado mejorado con suero del súper soldado, símbolo de esperanza y justicia.",
              powers: ["Fuerza mejorada", "Reflejos aumentados", "Habilidad con escudo", "Resistencia"],
              stats: {
                fuerza: { value: 4, icon: "💪" },
                velocidad: { value: 3, icon: "⚡" },
                inteligencia: { value: 4, icon: "🧠" },
                resistencia: { value: 5, icon: "🛡️" }
              }
            }
          ];
          
          const [modalData, setModalData] = useState(null);

          const handleOpenModal = (cardInfo) => {
            setModalData(cardInfo);
          };

          const handleCloseModal = () => {
            setModalData(null);
          };

    return (
        <div className="gallery">
          <Modal data={modalData} onClose={handleCloseModal}/>
            {cardsData.map((card) => (
                <Card
                    name={card.name}
                    description={card.description}
                    image={card.image}
                    powers={card.powers}
                    stats={card.stats}
                    universe={card.universe}
                    onSelect={() => handleOpenModal(card)}
                />
            ))}
        </div>
    )
}

export default Content