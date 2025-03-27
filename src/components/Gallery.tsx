import React, { useState } from "react";
import "./Gallery.css"; 

// Define categories with images
const categories = [
    { name: "Mandala", images: ["mandala/mandala1.jpg", "mandala/mandala2.jpg", "mandala/mandala3.jpg", "mandala/mandala4.jpg","mandala/mandala5.jpg","mandala/mandala6.jpg"] },
    { name: "Canvas", images: ["canvas/canvas1.jpg", "canvas/canvas2.jpg", "canvas/canvas3.jpg"] },
    { name: "Calligraphy", images: ["calligraphy/call1.jpg", "calligraphy/call2.jpg", "calligraphy/call3.jpg", "calligraphy/call4.jpg", "calligraphy/call5.jpg", "calligraphy/call6.jpg"] },
    { name: "Doodle", images: ["doodle/doo1.jpg"] },
    { name: "Clay Art", images: ["clay/cl1.jpg", "clay/cl2.jpg"] },
    { name: "Cartoon", images: ["cartoon/cartoon1.jpg", "cartoon/cartoon2.jpg", "cartoon/cartoon3.jpg", "cartoon/cartoon4.jpg"] }
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Open gallery with selected category
    const openGallery = (category) => {
        setSelectedCategory(category);
        setCurrentIndex(0); // Start from the first image
    };

    // Close gallery modal
    const closeGallery = () => {
        setSelectedCategory(null);
        setCurrentIndex(0);
    };

    // Next & Previous image navigation
    const nextImage = () => {
        if (selectedCategory) {
            setCurrentIndex((prevIndex) =>
                prevIndex === selectedCategory.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedCategory) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? selectedCategory.images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className="gallery-container">
            <h2 style={{ fontSize: "25px", fontWeight: "bold", textDecoration: "underline" }}>
    MY CREATIONS
</h2>

           
            <p>A collection of my artistic creations across various art forms and styles.</p>
 <br></br>
 
            {/* Category Gallery View */}
            <div className="gallery">
                {categories.map((category) => (
                    <div key={category.name} className="gallery-card" onClick={() => openGallery(category)}>
                        <img 
                            src={`http://localhost:8080/images/${category.images[0]}`} 
                            alt={category.name} 
                            onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>

            {/* Category Modal - Display all images */}
            {selectedCategory && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeGallery}>✖</button>
                        <h2>{selectedCategory.name}</h2>

                        <div className="image-viewer">
                            <button className="prev-btn" onClick={prevImage}>‹</button>
                            <img 
                                src={`/images/${selectedCategory.images[currentIndex]}`} 
                                alt={selectedCategory.name} 
                            />
                            <button className="next-btn" onClick={nextImage}>›</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
