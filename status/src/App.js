import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/:id' element={<Home/>} /> */}
          <Route path='/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
