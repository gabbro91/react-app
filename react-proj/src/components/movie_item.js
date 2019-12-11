import React from 'react';

export default function movieItem({movie}){
    return(
    
    <div classname= "card col-md-3">
            <img classname="card-img-top" src ={movie.Poster} alt="Card image cap"/>
            <div classname="card-body">
    <h5 classname="card-title">{movie.Title}</h5>
    <button classname="btn btn-primary">SCHEDA FILM</button>
  </div>
  </div>
    )
}