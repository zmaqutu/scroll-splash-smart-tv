import { useEffect, useRef } from 'react';

import { ImagePlacehoderSkeleton } from './ImagePlaceHolderSkeleton';
interface ImageProps {
	imageKey: string;
	imageURL: string;
	altDescription: string;
	isLoading: boolean;
	imageIndex: number[];
	onSelect?: () => void;
	selectedImage?: number[] | null;
}

export default function Image({ imageKey, imageURL, altDescription, isLoading, imageIndex, onSelect, selectedImage }: ImageProps) {

	const imageRef = useRef<HTMLDivElement>(null);
	const isActive = selectedImage?.join() === imageIndex.join();

	useEffect(() => {
		if (isActive && imageRef.current) {
			imageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		}
	}, [isActive]);

	return (
		<div ref={imageRef} className="aspect-square flex-shrink-0" onClick={() => onSelect && onSelect()}>
			{!isLoading ? (
				<img
					key={imageKey}
					src={imageURL}
					alt={altDescription}
					className={`object-cover w-full h-full ${isActive ? 'border-4 border-blue-500' : 'border border-gray-300'}`}
				/>
			) : (
				<div className="object-cover w-full h-full border border-gray-300">
					<ImagePlacehoderSkeleton />
				</div>
			)}
		</div>
	);
}