import Grid from '../components/Grid';
import Menu from '../components/Menu';
import { UnsplashTopic } from '../types';

interface HomeProps {
	topics: UnsplashTopic[];
};

export default function Home({ topics }: HomeProps) {
	// console.log('home topics', topics);

	return (
		<>
			<Menu topics={topics}/>
			{/* <Grid topic={topics[0]}/> */}
		</>
	);
}
