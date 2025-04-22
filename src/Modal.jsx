import React from "react";
import './Modal.css';

function Modal({ data, onClose }) {
    if (!data) return null;
    return (
        <div className="modal">

            <div className="modal-content">
                <div className="modal-header">
                    <h4>Tu elección</h4> <span className="cerrar-modal" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <p> Has elegido a <strong>{data.name}</strong> como tu héroe favorito.</p>
                    <div className="content-img"><img className="image-modal" src={data.image} alt="" /></div>

                </div>
            </div>
        </div>
    )
}

export default Modal