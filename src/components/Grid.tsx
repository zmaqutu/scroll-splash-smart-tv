import { useEffect, useState } from 'react';

import { UnsplashImage, UnsplashTopic } from '../types';
import { fetchUnsplashTopicImages } from '../api';

interface GridProps {
	topic: UnsplashTopic;
}

export default function Grid({ topic }: GridProps) {
	const [topicImages, setTopicImages] = useState<UnsplashImage[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// console.log('GRID', topic?.id);
	console.log('GRID Images', topicImages);

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
			{topicImages.map((image) => (
				<div key={image.id}>
					<img src={image.imageURL} alt={image.altDescription} />
				</div>
			))}
		</>
	);
}
