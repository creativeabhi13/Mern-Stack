import { ThemeProvider } from '@mui/material/styles';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import theme from './utils/theme';
import Product from './Pages/Product';
import Cart from './Pages/Cart';



function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
