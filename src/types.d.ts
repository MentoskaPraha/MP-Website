export interface quote {
	content: string;
	author: string;
}

export interface projectObject {
	id: string;
	title: string;
	description: string;
	image: string;
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

export interface specificViewEntry {
	title: string;
	description: string;
	image: string;
	links: boolean;
	git: string;
	external: string;
}
