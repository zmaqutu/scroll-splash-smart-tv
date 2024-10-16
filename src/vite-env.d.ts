/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly UNSPLASH_ACCESS_TOKEN: string;
	readonly UNSPLASH_SECRET: string;
};

interface ImportMeta {
	readonly env: ImportMetaEnv;
}