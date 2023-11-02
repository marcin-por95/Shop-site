import React from 'react';
import Navbar from '../../../components/common/NavBar/NavBar';

function HomePage() {
    return (
        <div>
            <Navbar />
            <main>
                <section className="collection">
                    <h2>NEW COLLECTION</h2>
                    <h3>JOZY AND MARCO</h3>
                    <p>This collection is all about making a statement with vibrant colors and bold finishes.</p>
                </section>
                {/* Można dodać więcej sekcji i treści zgodnie z potrzebami */}
            </main>
        </div>
    );
}

export default HomePage;
