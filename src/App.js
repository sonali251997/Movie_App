import { Route, BrowserRouter, Routes } from "react-router-dom";
import MovieDetails from "./containers/MovieDetails";
import PopularMovie from "./containers/PopularMovie";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularMovie />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
