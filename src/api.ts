import { UNSPLASH_API_URL, UNSPLASH_TOKEN } from './constants';
import { UnsplashImage, UnsplashTopic } from './types';

export const fetchUnsplashTopics = async (): Promise<UnsplashTopic[] | null> => {

	try {
		const response = await fetch(`${UNSPLASH_API_URL}/topics`, {
			headers: {
				Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
			},
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		const data: UnsplashTopic[] = await response.json();

		const filterdData = data.map((topic) => {
			return {
				id: topic.id,
				slug: topic.slug,
				title: topic.title,
				description: topic.description,
			};
		});
		return filterdData;
	} catch (error) {
		console.error('Error fetching Unsplash topics:', error);
		return null;
	}
};

export const fetchUnsplashTopicImages = async (topicId: string): Promise<UnsplashImage[] | null> => {
	console.log('fetchUnsplashTopicImages', topicId);
	try {
		const response = await fetch(`${UNSPLASH_API_URL}/topics/${topicId}/photos`, {
			headers: {
				Authorization: `Client-ID ${UNSPLASH_TOKEN}`,
			},
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		const data = await response.json();
		console.log('data', data);

		const filteredData = data.map((image: any) => {
			return {
				id: image.id,
				imageURL: image.urls.small,
				altDescription: image.alt_description,
			};
		});
		return filteredData;
	} catch (error) {
		console.error('Error fetching Unsplash topic images:', error);
		return null;
	}
};

