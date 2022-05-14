import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <nav>
      <Link to="/">Full Cards</Link>
      <br></br>
      <Link to="/onecard">One Card</Link>
      <br></br>
      <Link to="/image">One image</Link>
    </nav>
  );
}
