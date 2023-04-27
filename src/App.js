import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
