import React from 'react';
import './ImageGallery.scss';

function ImageGallery() {
    return (
        <div className="image-gallery">
            <div className="gallery-item">
                <img src="/images/image4.jpg" alt="Toners" />
                <p>TONERS</p>
            </div>
            <div className="gallery-item">
                <img src="/images/image3.jpg" alt="Kits" />
                <p>KITS</p>
            </div>
            <div className="gallery-item">
                <img src="/images/image2.jpg" alt="Masks" />
                <p>MASKS</p>
            </div>
            <div className="gallery-item">
                <img src="/images/image1.jpg" alt="Oil Cleansers" />
                <p>OIL CLEANSERS</p>
            </div>
            <div className="gallery-item">
                <img src="/images/image4.jpg" alt="Moisturizers" />
                <p>MOISTURIZERS</p>
            </div>
            <div className="gallery-item">
                <img src="/images/image2.jpg" alt="Serum" />
                <p>SERUM</p>
            </div>
        </div>
    );
}

export default ImageGallery;
