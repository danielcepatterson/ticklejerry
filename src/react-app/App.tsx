// src/App.tsx

import { useState, useEffect } from "react";
import "./App.css";

// Array of Jerry Garcia images
const jerryImages = [
	"/images/jerry1.jpg",
	"/images/jerry2.jpg",
	"/images/jerry3.jpg",
	"/images/jerry4.jpg",
	"/images/jerry5.jpg",
];

// Laughing Jerry images - AI-altered versions
// Using same images as placeholders until you add the laughing versions
const laughingJerryImages = [
	"/images/jerry1.jpg",
	"/images/jerry2.jpg",
	"/images/jerry3.jpg",
	"/images/jerry4.jpg",
	"/images/jerry5.jpg",
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
