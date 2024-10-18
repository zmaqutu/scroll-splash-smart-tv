// import React from 'react';
import { ImagePlacehoderSkeleton } from './ImagePlaceHolderSkeleton';

interface ImageProps {
	imageKey: string;
	imageURL: string;
	altDescription: string;
	isLoading: boolean;
}

export default function Image({imageKey, imageURL, altDescription, isLoading}: ImageProps) {
	return (
		<>
			{!isLoading ? (
				<img key={imageKey} src={imageURL} alt={altDescription} className="w-64 h-64 object-cover flex-shrink-0 border border-gray-300"/>
			) : (
				<div className="w-64 h-64 object-cover flex-shrink-0">
					<ImagePlacehoderSkeleton />
				</div>
			)}
		</>
	);
}