import React from 'react';
import Navbar from '../../../components/common/NavBar/NavBar';
import Carousel from "nuka-carousel";
import ImageGallery from '../ImageGallery/ImageGallery';

function HomePage() {
    return (
        <div>
            <Navbar />
            <main>
                <Carousel
                    className="productCarousel"
                    wrapAround={true}
                    autoplay={true}
                    autoplayInterval={3500}
                >
                    <img src="/images/image1.jpg" alt="Opis zdjęcia 1" />
                    <img src="/images/image2.jpg" alt="Opis zdjęcia 2" />
                    <img src="/images/image3.jpg" alt="Opis zdjęcia 3" />
                    <img src="/images/image4.jpg" alt="Opis zdjęcia 4" />
                </Carousel>

                <section className="collection">
                    <h2>NASZE PRODUKTY</h2>
                    <h3>DLA CIAŁA I DUSZ</h3>
                    <p>This collection is all about making a statement with vibrant colors and bold finishes.</p>
                </section>

                {/* Tutaj dodajemy naszą galerię zdjęć */}
                <ImageGallery />

                {/* Można dodać więcej sekcji i treści zgodnie z potrzebami */}
            </main>
        </div>
    );
}

export default HomePage;
