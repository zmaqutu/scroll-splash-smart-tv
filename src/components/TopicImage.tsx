import { ImagePlacehoderSkeleton } from './ImagePlaceHolderSkeleton';

interface ImageProps {
	imageKey: string;
	imageURL: string;
	altDescription: string;
	isLoading: boolean;
}

export default function Image({imageKey, imageURL, altDescription, isLoading}: ImageProps) {
	return (
		<div className="aspect-square flex-shrink-0">
			{!isLoading ? (
				<img key={imageKey} src={imageURL} alt={altDescription} className="object-cover w-full h-full border border-gray-300"/>
			) : (
				<div className="object-cover w-full h-full border border-gray-300">
					<ImagePlacehoderSkeleton />
				</div>
			)}
		</div>
	);
}