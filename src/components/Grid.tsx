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

	
	return (
		<div className="flex-1 mx-auto bg-red-500 flex items-center justify-center p-4 overflow-y-auto">
			<div className="space-y-4">
				<div className="flex flex-row overflow-x-scroll no-scrollbar gap-4">
					{rowOneImages.map((image) => (
						<TopicImage imageKey={image.id} imageURL={image.imageURL} altDescription={image.altDescription} isLoading={loading} />
					))}
				</div>
				<div className="flex overflow-x-scroll no-scrollbar gap-4">
					{rowTwoImages.map((image) => (
						<TopicImage imageKey={image.id} imageURL={image.imageURL} altDescription={image.altDescription} isLoading={loading} />
					))}
				</div>
			</div>
		</div>
	);
}
