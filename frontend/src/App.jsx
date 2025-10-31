import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
