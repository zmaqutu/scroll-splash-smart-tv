export interface UnsplashTopic {
	id: string;
	slug: string;
	title: string;
	description: string | null;
}

export interface UnsplashImage {
	id: string;
	imageURL: string;
	altDescription: string;
}