import { useState } from 'react';

import Grid from '../components/Grid';
import Menu from '../components/Menu';
import { UnsplashTopic } from '../types';

interface HomeProps {
	topics: UnsplashTopic[];
};

export default function Home({ topics }: HomeProps) {
	const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

	const selectedTopicData = topics.find((topic) => topic.title === selectedTopic) || topics[0];

	return (
		<div className="flex h-screen">
			<Menu topics={topics} setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic}/>
			<Grid topic={selectedTopicData}/>
		</div>
	);
}
