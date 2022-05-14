import "./App.css";
import movieList from "./components/MovieList";
import { Routes, Route, Link } from "react-router-dom";
import renderMe from "./components/render";
import MovieCrad from "./components/MovieCrad";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <Links />

      <Routes>
        <Route path="/" element={movieList.map(renderMe)}></Route>
        <Route path="/onecard" element={<MovieCrad />}></Route>
        <Route path="/image" element={movieList[0].title}></Route>
      </Routes>
    </div>
  );
}

export default App;
