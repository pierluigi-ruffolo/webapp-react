import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:slug" element={<Movie />} />
          <Route path="/movies/create" element={<CreateMovie />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
