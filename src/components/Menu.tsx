import { UnsplashTopic } from '../types';

interface MenuProps {
	topics: UnsplashTopic[];
	setSelectedTopic: (topic: string) => void;
};

export default function Menu({ topics, setSelectedTopic }: MenuProps) {

	const handleButtonClick = (topic: UnsplashTopic) => {
		setSelectedTopic(topic.title);
	};

	return (
		<div className="w-1/4 h-full bg-gray-800 p-4 flex flex-col">
			<div className="flex-1 overflow-y-auto grid grid-cols-1 gap-2 auto-rows-fr">
				{topics.map((topic) => (
					<button
						key={topic.id}
						className={'bg-blue-500 text-white p-4 rounded hover:bg-blue-700 transition '}
						onClick={() => handleButtonClick(topic)}
					>
						{topic.title}
					</button>
				))}
			</div>
		</div>
	);

}

