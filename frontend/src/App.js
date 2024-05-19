// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import ViewBugs from './components/ViewBugs';



function App() {
  return (
    <div className="app-container">

      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/view-bugs" element={<ViewBugs />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
