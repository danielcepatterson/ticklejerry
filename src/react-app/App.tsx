// src/App.tsx

import { useState, useEffect } from "react";
import "./App.css";

// Array of Jerry Garcia images - Using high-quality public domain images
const jerryImages = [
	"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop",
	"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
	"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop",
	"https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=800&fit=crop",
	"https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&h=800&fit=crop",
];

// Laughing Jerry images - These show more joyful/expressive versions
// For now using similar images with different crops/effects
// Replace these with actual AI-generated laughing versions
const laughingJerryImages = [
	"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop&sat=20&brightness=10",
	"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop&sat=20&brightness=10",
	"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop&sat=20&brightness=10",
	"https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=800&fit=crop&sat=20&brightness=10",
	"https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&h=800&fit=crop&sat=20&brightness=10",
];

function App() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isPressed, setIsPressed] = useState(false);

	// Select random image on mount
	useEffect(() => {
		setCurrentImageIndex(Math.floor(Math.random() * jerryImages.length));
	}, []);

	const handlePressStart = () => {
		setIsPressed(true);
	};

	const handlePressEnd = () => {
		setIsPressed(false);
	};

	const currentImage = isPressed 
		? laughingJerryImages[currentImageIndex] 
		: jerryImages[currentImageIndex];

	return (
		<div className="ticklejerry-container">
			<h1 className="title">TickleJerry</h1>
			<div className="image-wrapper">
				<img
					src={currentImage}
					alt={isPressed ? "Laughing Jerry Garcia" : "Jerry Garcia"}
					className="jerry-image"
					onMouseDown={handlePressStart}
					onMouseUp={handlePressEnd}
					onMouseLeave={handlePressEnd}
					onTouchStart={handlePressStart}
					onTouchEnd={handlePressEnd}
					draggable={false}
				/>
			</div>
			<p className="instructions">
				{isPressed ? "😄 Hehe!" : "Click or touch Jerry to tickle him!"}
			</p>
		</div>
	);
}

export default App;
