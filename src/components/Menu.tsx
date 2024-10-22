import { UnsplashTopic } from '../types';

interface MenuProps {
	topics: UnsplashTopic[];
	selectedTopic: string | null;
	setSelectedTopic: (topic: string) => void;
};

export default function Menu({ topics, selectedTopic, setSelectedTopic }: MenuProps) {

	const handleButtonClick = (topic: UnsplashTopic) => {
		setSelectedTopic(topic.title);
	};

	return (
		<div className="w-1/4 h-full bg-gray-800 p-4 flex flex-col">
			<h2 className="text-xl font-bold text-center mb-4 bg-gray-500 p-2 text-white">
				Animation
			</h2>
			<div className="flex-1 overflow-y-auto grid grid-cols-1 gap-2 auto-rows-fr">
				{topics.map((topic) => (
					<button
						key={topic.id}
						// className="bg-gray-300 text-gray-700 p-4 rounded hover:bg-gray-400 transition"
						className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-400 transition ${selectedTopic === topic.title ? 'bg-blue-400 text-white' : ''}`}
						onClick={() => handleButtonClick(topic)}
					>
						{/* <div className={`absolute left-0 w-2 h-full ${selectedTopic === topic.title ? 'bg-yellow-400' : 'bg-transparent'}`}></div> */}
						{/* Button text */}
						{/* <span className={`${selectedTopic === topic.title ? 'text-white' : 'text-gray-700'}`}> */}
						{topic.title}
					</button>
				))}
			</div>
		</div>
	);

}

