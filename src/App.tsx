import { useEffect, useState } from 'react';

import Home from './pages/Home';
import { UnsplashTopic } from './types';
import { fetchUnsplashTopics } from './api';




function App() {

	const [topics, setTopics] = useState<UnsplashTopic[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getTopics = async () => {
		  const data = await fetchUnsplashTopics();
		  if (data) {
				setTopics(data);
		  } else {
				setError('Failed to fetch topics.');
		  }
		  setLoading(false);
		};
	
		getTopics();
	  }, []);

	return (
		<>
			<Home topics={topics}/>
		</>
	);
}

export default App;
