import React from "react";

function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Year:  {props.year}</h3>
      <h3>IMDB Rating:  {props.imdb}</h3>
      <h3>Rotten Tomatoes:  {props.rotten}</h3>
      <h3>Country:  {props.country}</h3>
      <h3>Language:  {props.language}</h3>
      <h3>Plot: {props.plot}</h3>
      <h3>Actors:  {props.actors}</h3>
    </div>
  );
}

export default MovieDetail;
