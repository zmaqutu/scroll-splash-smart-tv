import { UnsplashTopic } from '../types';

interface MenuProps {
	topics: UnsplashTopic[];
	// setSelectedTopic: () => void;
	setSelectedTopic: (topic: string) => void;
};

export default function Menu({ topics, setSelectedTopic }: MenuProps) {

	const handleButtonClick = (topic: UnsplashTopic) => {
		setSelectedTopic(topic.title);
	};

	return (
		<div className="w-1/4 h-screen bg-red-200 p-4 flex flex-col">
			<h2 className="text-xl font-bold text-center mb-4 bg-gray-500 p-2 text-white">
				Animation
			</h2>
			<div className="flex-1 overflow-y-auto grid grid-cols-1 gap-2 auto-rows-fr">
				{topics.map((topic) => (
					<button 
						key={topic.id} 
						className="bg-gray-300 text-gray-700 p-4 rounded hover:bg-gray-400 transition"
						onClick={() => handleButtonClick(topic)}
					>
						{topic.title}
					</button>
				))}
			</div>
		</div>
	);
}

