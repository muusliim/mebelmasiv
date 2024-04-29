"use client";

import { ImageGallery } from "react-image-grid-gallery";

export default function Gallery({images}: any) {
   
    const imagesArray = images.map((image: any) => (
        {
            alt: image.alt,
            caption: image.alt,
            src: image.url,
        }
    ))

    console.log(images);

	return (
		<div className="flex justify-center">
			<ImageGallery
				imagesInfoArray={imagesArray}
				columnWidth={230}
				gapSize={15}
			/>
		</div>
	);
}
