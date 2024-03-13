import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./Gallery.css";
import Image1 from "/images/image1.jpg";
import Image2 from "/images/image2.jpg";
import Image3 from "/images/image3.jpg";
import Image4 from "/images/image4.jpg";
import Image5 from "/images/image5.jpg";
import Image6 from "/images/image6.jpg";

function Gallery() {
	const [toggleModal, setToggleModal] = useState(false);
	const [imageSrc, setImageSrc] = useState("");

	function handleImageClick(src) {
		setToggleModal(true);
		setImageSrc(src);
	}

	const data = [
		{
			id: 1,
			src: Image1,
		},
		{
			id: 2,
			src: Image2,
		},
		{
			id: 3,
			src: Image3,
		},
		{
			id: 4,
			src: Image4,
		},
		{
			id: 5,
			src: Image5,
		},
		{
			id: 6,
			src: Image6,
		},
	];

	return (
		<>
			<div className={`modal ${toggleModal ? "open" : "close"}`}>
				<IoMdClose onClick={() => setToggleModal(false)} />
				<img className="modal__image" src={imageSrc} alt="" />
			</div>
			<div className="gallery">
				{data.map((item, index) => (
					<div
						className="gallery__image-list"
						key={index}
						onClick={() => handleImageClick(item.src)}
					>
						<img className="gallery__image-item" src={item.src} alt="" />
					</div>
				))}
			</div>
		</>
	);
}

export default Gallery;
