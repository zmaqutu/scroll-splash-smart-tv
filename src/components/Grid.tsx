import { useEffect, useState } from 'react';

import TopicImage from './TopicImage';
import { UnsplashImage } from '../types';
import { UnsplashTopic } from '../types';
import { fetchUnsplashTopicImages } from '../api';



interface GridProps {
	topic: UnsplashTopic;
}

export default function Grid({ topic }: GridProps) {
	const [topicImages, setTopicImages] = useState<UnsplashImage[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedImage, setSelectedImage] = useState<number[] | null>(null); // Track selected image


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
				}, 1000);

			} else {
				setError('Failed to fetch topics.');
			}
		};

		if (topic?.id) {
			getTopicImages(topic?.id);
		}

	}, [topic]);

	const handleImageSelect = (selectedImageIndex: number[]) => {
		console.log('Image selected:', selectedImageIndex);
		setSelectedImage(selectedImageIndex);
	};

	console.log(loading, error);
	return (
		<div className="flex-1 mx-auto bg-gray-900 flex items-center justify-center p-4 overflow-y-auto">
			<div className="space-y-4 w-full h-full flex flex-col">
				<div className="flex flex-row overflow-x-scroll no-scrollbar gap-4 h-1/2">
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
				<div className="flex overflow-x-scroll no-scrollbar gap-4 h-1/2">
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
