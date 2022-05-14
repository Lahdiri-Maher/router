import React from "react";
import MovieCrad from "./MovieCrad";

export default function renderMe(props) {
  return (
    <MovieCrad
      imgURL={props.postURL}
      title={props.title}
      description={props.description}
    />
  );
}
