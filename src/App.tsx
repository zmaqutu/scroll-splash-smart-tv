import { UNSPLASH_SECRET_KEY, UNSPLASH_TOKEN } from './constants';
import Home from './pages/Home';



function App() {
	console.log(UNSPLASH_TOKEN);
	console.log(UNSPLASH_SECRET_KEY);

	return (
		<>
			<Home />
		</>
	);
}

export default App;
