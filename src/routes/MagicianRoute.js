import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Calculator from '../Components/Calculator';
import Home from '../Components/Home';
import Quotes from '../Components/Quotes';

const MagicianMathRoute = () => (
  <>
    <NavBar />

    <div className="sectionsContainer">
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quotes" element={<Quotes />} />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
    </div>
  </>
);

export default MagicianMathRoute;
