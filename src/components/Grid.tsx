import { useEffect, useState } from 'react';

import { UnsplashImage, UnsplashTopic } from '../types';
import { fetchUnsplashTopicImages } from '../api';

interface GridProps {
	topic: UnsplashTopic;
}

export default function Grid({ topic }: GridProps) {
	const [topicImages, setTopicImages] = useState<UnsplashImage[]>([]);
	// const [rowOneImages, setRowOneImages] = useState<UnsplashImage[]>([]);
	// const [rowTwoImages, setRowTwoImages] = useState<UnsplashImage[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const halfIndex = Math.ceil(topicImages.length / 2);
	const rowOneImages = topicImages.slice(0, halfIndex);
	const rowTwoImages = topicImages.slice(halfIndex, topicImages.length);


	useEffect(() => {
		const getTopicImages = async (topicID: string) => {
			if (!topicID) return;
			const data = await fetchUnsplashTopicImages(topicID);
			if (data) {
				setTopicImages(data);
			} else {
				setError('Failed to fetch topics.');
			}
			setLoading(false);
		};

		if (topic?.id) {
			getTopicImages(topic?.id);
		}

	}, [topic]);
	return (
		<>
		
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<div className="space-y-4 bg-red-500">
				<div className="flex flex-row overflow-x-scroll gap-4">
					{rowOneImages.map((image) => (
						<img key={image.id} src={image.imageURL} alt={image.altDescription} className="w-64 h-64 flex-shrink-0"/>
					))}
				</div>
				<div className="flex overflow-x-scroll gap-4">
					{rowTwoImages.map((image) => (
						<img key={image.id} src={image.imageURL} alt={image.altDescription} className="w-64 h-64 object-cover flex-shrink-0"/>
					))}
				</div>
			</div>
		</>
	);
}
