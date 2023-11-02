import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/Home/HomePage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import CartPage from './components/pages/CartPage/CartPage';
import OrderFormPage from './components/pages/OrderFormPage/OrderFormPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order" element={<OrderFormPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
