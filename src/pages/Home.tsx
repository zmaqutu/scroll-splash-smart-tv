import { useState } from 'react';

import Grid from '../components/Grid';
import Menu from '../components/Menu';
import { UnsplashTopic } from '../types';

interface HomeProps {
	topics: UnsplashTopic[];
};

export default function Home({ topics }: HomeProps) {
	// console.log('home topics', topics);
	const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
	// console.log('selectedTopic', selectedTopic);
	// console.log('topics', topics);

	const selectedTopicData = topics.find((topic) => topic.title === selectedTopic) || topics[0];
	console.log('selectedTopicData', selectedTopicData);

	return (
		<>
			<Menu topics={topics} setSelectedTopic={setSelectedTopic}/>
			<Grid topic={selectedTopicData}/>
		</>
	);
}
