// ProductsGallery.jsx
import React, { useState } from 'react';
import './ProductsGallery.scss';
import Footer from '../../common/Footer/Footer';

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    image: '/images/image1.jpg',
    info: 'Informacje o produkcie 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    image: '/images/image2.jpg',
    info: 'Informacje o produkcie 2.',
  },
  {
    id: 3,
    name: 'Product 3',
    image: '/images/image3.jpg',
    info: 'Informacje o produkcie 3.',
  },
  {
    id: 4,
    name: 'Product 4',
    image: '/images/image4.jpg',
    info: 'Informacje o produkcie 4.',
  },
  // Dodaj kolejne produkty według potrzeb
];

const ProductsGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowInfo = (productId) => {
    const product = productsData.find((item) => item.id === productId);
    setSelectedProduct(product);
  };

  const handleCloseInfo = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-gallery">
      <h2>OUR PRODUCTS</h2>
      <div className="product-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="info-overlay" onClick={() => handleShowInfo(product.id)}>
              <span>MORE INFO</span>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-info-modal" onClick={handleCloseInfo}>
          <div className="modal-content">
            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>{selectedProduct.info}</p>
          </div>
        </div>
      )}
      {/* Dodaj stopkę na końcu strony */}
      <Footer />
    </div>
  );
};

export default ProductsGallery;
