import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from "./components/MainNav.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Container } from '@material-ui/core';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Series from './pages/Series';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
    </>
  );
}

export default App;
