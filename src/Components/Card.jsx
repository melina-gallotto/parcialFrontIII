import React from "react";

const Card = ({props}) => {
  return <div className= 'card'>
    <h3>Hola {props.nombre}</h3>
    <h3>Sabemos que tu película favorita es {props.peliculaFavorita}</h3>
  </div>;
};

export default Card;