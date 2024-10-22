import React, { useState } from 'react';
import { Switch } from '@material-tailwind/react';

import Grid from '../components/Grid';
import Menu from '../components/Menu';
import { UnsplashTopic } from '../types';


interface HomeProps {
	topics: UnsplashTopic[];
};

export default function Home({ topics }: HomeProps) {
	const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
	const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);


	const selectedTopicData = topics.find((topic) => topic.title === selectedTopic) || topics[0];
	const isGridActive = !isSwitchOn;

	const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsSwitchOn(event.target.checked);
		// console.log(event.target.checked);
	};
	return (
		<div className="flex flex-col h-screen">
			<nav className="bg-gray-900 text-white p-4 flex justify-center items-center gap-4"> {/* Center items horizontally */}
				{isSwitchOn ?
					<h1 className="text-lg font-bold">State: Menu is active and grid is inactive</h1> :
					<h1 className="text-lg font-bold">State: Menu is inactive grid is active</h1>
				}
				<Switch
					defaultChecked={isSwitchOn}
					color='blue'
					onChange={handleToggle}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					crossOrigin={undefined}
				/>
			</nav>
			<div className="flex flex-1 overflow-hidden"> {/* This takes the remaining height */}
				{isSwitchOn ?
					<Menu topics={topics} setSelectedTopic={setSelectedTopic} /> :
					null
				}
				<Grid topic={selectedTopicData} isGridActive={isGridActive} />
			</div>
		</div>
	);
}
