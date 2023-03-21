export interface projectObject {
	title: string;
	shortDesc: string;
	description: string;
	image: string;
	share: string;
	git: string;
	external: string;
}

export interface contentBlockParams {
	title: string;
	description: string;
	image: string;
	links: boolean;
	share: string;
	git: string;
	external: string;
}

export interface contentListEntry {
	title: string;
	description: string;
	image: string;
	link: string;
	target: string;
}

export interface contentListParams {
	title: string;
	displayTitle: boolean;
	displayImages: boolean;
	entries: contentListEntry[];
}