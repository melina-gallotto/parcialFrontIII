import React from "react";
import './Card.css'
import Form from "./Form";

const Card = ({nombre, peliculaFavorita}) => {
  return <div className= 'card'>
    <h3>Hola {nombre}</h3>
    <h3>Sabemos que tu película favorita es: {peliculaFavorita}</h3>
  </div>;
};

export default Card;