// import React from 'react'
import { UnsplashTopic } from '../types';

interface MenuProps {
	topics: UnsplashTopic[];
};

export default function Menu({ topics }: MenuProps) {
	return (
		<>
			{topics.map((topic) => (
				<div key={topic.id}>
					<h2>{topic.title}</h2>
					<p>{topic.slug}</p>
				</div>
			))}
		</>
	);
}