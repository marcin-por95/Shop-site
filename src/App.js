import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import ProductsPage from './components/pages/ProductPage/ProductsPage';
import CartPage from './components/pages/CartPage/CartPage';
import OrderFormPage from './components/pages/OrderFormPage/OrderFormPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Kontakt from '../src/components/pages/Kontakt/Kontakt';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order" element={<OrderFormPage />} />
                <Route path="/Kontakt" element={<Kontakt />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
