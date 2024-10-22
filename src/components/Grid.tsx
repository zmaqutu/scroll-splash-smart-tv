import { useEffect, useState } from 'react';

import TopicImage from './TopicImage';
import { UnsplashImage } from '../types';
import { UnsplashTopic } from '../types';
import { fetchUnsplashTopicImages } from '../api';



interface GridProps {
	topic: UnsplashTopic;
	isGridActive: boolean;
}

export default function Grid({ topic, isGridActive }: GridProps) {
	const [topicImages, setTopicImages] = useState<UnsplashImage[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedImage, setSelectedImage] = useState<number[] | null>([0, 0]); // Track selected image


	const halfIndex = Math.ceil(topicImages.length / 2);
	const rowOneImages = topicImages.slice(0, halfIndex);
	const rowTwoImages = topicImages.slice(halfIndex, topicImages.length);


	useEffect(() => {
		setLoading(true);
		const getTopicImages = async (topicID: string) => {
			if (!topicID) return;
			const data = await fetchUnsplashTopicImages(topicID);
			if (data) {
				setTopicImages(data);
				setTimeout(() => {
					setLoading(false);
					setSelectedImage([0, 0]);
				}, 1000);

			} else {
				setError('Failed to fetch topics.');
			}
		};

		if (topic?.id) {
			getTopicImages(topic?.id);
		}

	}, [topic]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isGridActive) return;
			const currentRow = selectedImage?.[0] ?? 0;
			const currentColumn = selectedImage?.[1] ?? 0;
			if (event.key === 'ArrowRight') {
				const nextRow = currentRow;
				const nextColumn = Math.min(currentColumn + 1, rowOneImages.length - 1);
				setSelectedImage([nextRow, nextColumn]);
			} else if (event.key === 'ArrowLeft') {
				const nextRow = currentRow;
				const nextColumn = Math.max(currentColumn - 1, 0);
				setSelectedImage([nextRow, nextColumn]);
			} else if (event.key === 'ArrowDown') {
				const nextRow = Math.min(currentRow + 1, 1);
				const nextColumn = currentColumn;
				setSelectedImage([nextRow, nextColumn]);
			} else if (event.key === 'ArrowUp') {
				const nextRow = Math.max(currentRow - 1, 0);
				const nextColumn = currentColumn;
				setSelectedImage([nextRow, nextColumn]);
			}
		};

		// Add the event listener for keydown
		window.addEventListener('keydown', handleKeyDown);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [selectedImage, rowOneImages]);

	const handleImageSelect = (selectedImageIndex: number[]) => {
		if (!isGridActive) return;
		setSelectedImage(selectedImageIndex);
	};

	console.log(error);
	return (
		<div className="flex-1 mx-auto bg-gray-900 flex items-center justify-center p-4 overflow-y-auto">
			<div className="space-y-4 w-full h-full flex flex-col">
				{/* <div className="flex flex-row overflow-x-scroll no-scrollbar gap-4 h-1/2"> */}
				<div className={`flex flex-row ${isGridActive ? 'overflow-x-scroll' : 'overflow-x-hidden'} no-scrollbar gap-4 h-1/2`}>
					{rowOneImages.map((image, imageIndex) => (
						<TopicImage imageKey={image.id}
							imageURL={image.imageURL}
							altDescription={image.altDescription}
							isLoading={loading}
							imageIndex={[0, imageIndex]}
							onSelect={() => handleImageSelect([0, imageIndex])}
							selectedImage={selectedImage}
						/>
					))}
				</div>
				{/* <div className="flex overflow-x-scroll no-scrollbar gap-4 h-1/2"> */}
				<div className={`flex flex-row ${isGridActive ? 'overflow-x-scroll' : 'overflow-x-hidden'} no-scrollbar gap-4 h-1/2`}>
					{rowTwoImages.map((image, imageIndex) => (
						<TopicImage imageKey={image.id}
							imageURL={image.imageURL}
							altDescription={image.altDescription}
							isLoading={loading}
							imageIndex={[1, imageIndex]}
							onSelect={() => handleImageSelect([1, imageIndex])}
							selectedImage={selectedImage}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
