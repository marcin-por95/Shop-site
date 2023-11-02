import React from 'react';
import './ImageGallery.scss';
import Button from '@mui/material/Button';


function ImageGallery() {
    return (
        <div className="image-gallery">
            <div className="gallery-item">
                <img src="/images/image4.jpg" alt="Toners" />
                <p>TONERS</p>
                <Button variant="outlined" style={{color: 'gray', borderColor: 'gray'}}>ADD TO CART</Button>
            </div>
            <div className="gallery-item">
                <img src="/images/image3.jpg" alt="Kits" />
                <p>KITS</p>
                <Button variant="outlined" style={{color: 'gray', borderColor: 'gray'}}>ADD TO CART</Button>
            </div>
            <div className="gallery-item">
                <img src="/images/image2.jpg" alt="Masks" />
                <p>MASKS</p>
                <Button variant="outlined" style={{color: 'gray', borderColor: 'gray'}}>ADD TO CART</Button>
            </div>
            <div className="gallery-item">
                <img src="/images/image1.jpg" alt="Oil Cleansers" />
                <p>OIL CLEANSERS</p>
                <Button variant="outlined" style={{color: 'gray', borderColor: 'gray'}}>ADD TO CART</Button>
            </div>
            <div className="gallery-item">
                <img src="/images/image4.jpg" alt="Moisturizers" />
                <p>MOISTURIZERS</p>
                <Button variant="outlined" style={{color: 'gray', borderColor: 'gray'}}>ADD TO CART</Button>
            </div>
            <div className="gallery-item">
                <img src="/images/image2.jpg" alt="Serum" />
                <p>SERUM</p>
                <Button variant="outlined" style={{color: 'gray', borderColor: 'gray'}}>ADD TO CART</Button>
            </div>
        </div>
    );
}

export default ImageGallery;
