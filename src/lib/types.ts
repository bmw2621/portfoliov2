export type DevToPost = {
	id: number;
	title: string;
	description: string;
	slug: string;
	path: string;
	url: string;
	published_at: string;
	positive_reactions_count: number;
};

export type DevToArticle = DevToPost & {
	body_html: string;
	body_markdown: string;
	reading_time_minutes: number;
	tags: string[];
	cover_image: string | null;
};

export type Experience = {
	employer: string;
	location: string;
	title: string;
	start: Date;
	end?: Date;
	tags: TagData[];
	description: string;
};

export type OtherExperience = Omit<Experience, 'start' | 'end' | 'employer' | 'location'> & {
	date: Date;
};

export type TagData = {
	img_src?: string;
	icon?: string;
	label: string;
};
