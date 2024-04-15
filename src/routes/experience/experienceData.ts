import type { Experience, OtherExperience, TagData } from '$lib/types';

const js: TagData = { icon: 'devicon:javascript', label: 'JavaScript' };
const python: TagData = { icon: 'devicon:python', label: 'Python' };
const reactjs: TagData = { icon: 'devicon:react', label: 'ReactJS' };
const ts: TagData = { icon: 'devicon:typescript', label: 'TypeScript' };
const nextjs: TagData = { icon: 'devicon:nextjs', label: 'NextJS' };
const storybook: TagData = { icon: 'devicon:storybook', label: 'Storybook' };
const nodejs: TagData = { icon: 'devicon:nodejs', label: 'NodeJS' };
const dotnet: TagData = { icon: 'devicon:dotnetcore', label: '.NET Core' };
const csharp: TagData = { icon: 'devicon:csharp', label: 'C#' };
const redux: TagData = { icon: 'devicon:redux', label: 'Redux' };
const gatling: TagData = { icon: 'devicon:gatling', label: 'GatlingIO' };
const java: TagData = { icon: 'devicon:java', label: 'Java' };
const jira: TagData = { icon: 'devicon:jira', label: 'Jira' };
const figma: TagData = { icon: 'devicon:figma', label: 'Figma' };
const shortcut: TagData = { icon: 'logos:shortcut-icon', label: 'Shortcut' };
const svelte: TagData = { icon: 'devicon:svelte', label: 'Svelte' };
const git: TagData = { icon: 'devicon:git', label: 'git' };
const threejs: TagData = { icon: 'skill-icons:threejs-dark', label: 'threejs' };
const blender: TagData = { icon: 'logos:blender', label: 'Blender' };
const golang: TagData = { icon: 'devicon:go', label: 'Go' };
const heroku: TagData = { icon: 'devicon:heroku', label: 'Heroku' };
const pg: TagData = { icon: 'devicon:postgresql', label: 'PostgreSQL' };
const ol: TagData = { icon: 'logos:openlayers', label: 'OpenLayers' };

export const professional: Experience[] = [
	{
		employer: 'Madwire',
		location: 'Fort Collins, CO (Remote)',
		title: 'Senior Software Engineer 1',
		start: new Date(2021, 10),
		tags: [nextjs, reactjs, ts, storybook, figma, nodejs, git, python, shortcut],
		description:
			'Lead Frontend Engineer over Customer Resource Manager product, supervising 2 contractors.  As a member of the billing team, I implemented Stripe across all frontend applications to automate billing and launched BackOffice tool for account management. Interviewed candidates for hire and provided hiring manager feedback on technical assessments.  Used Python for scripting to include bulk file updates and statistic collection.'
	},
	{
		employer: 'Deloitte',
		location: 'Jacksonville, FL (Remote)',
		title: 'Product Analyst(Developer)',
		start: new Date(2020, 4),
		end: new Date(2021, 10),
		tags: [
			reactjs,
			redux,
			js,
			figma,
			git,
			dotnet,
			csharp,
			{ icon: 'material-symbols:database', label: 'MSSQL Server' }
		],
		description:
			'Migrated team  to a modern technology stack, to include training and team workflow development.  Included migrating version control system to Git, updating applications from VisualBasic to ASP.NET Core, and initial adoption of Atlassian Jira. '
	},
	{
		employer: 'OnPoint Digital',
		location: 'Savannah, GA',
		title: 'Quality Assurance Manager',
		start: new Date(2019, 8),
		end: new Date(2020, 0),
		tags: [python, java, gatling, git, jira],
		description:
			'Advised Executive Team on requirements to improve Quality Assurance processes.  Developed load testing scripts with Gatling and Selenium.  Used iPython notebooks to measure and communicate policy adherence.'
	},
	{
		employer: 'US Army',
		location: 'Multiple',
		title: 'Infantry Officer (General Manager)',
		start: new Date(2008, 4),
		end: new Date(2019, 8),
		tags: [],
		description:
			'General Manager responsible for training and well-being of organizations ranging from 38-174 personnel, operational planning and supervision, and advising senior leaders on planning of complex multi-organization operations.'
	}
];

export const other: OtherExperience[] = [
	{
		title: 'Svelte/SvelteKit Class',
		date: new Date(2022, 2),
		tags: [svelte, ts],
		description:
			"Taught a professional development class to peers on Svelte and SvelteKit.  Class demonstrated basic markup, templates, special components, state management, and element directives.  SvelteKit portion described new directory based routing system and discussed the relavance to the team as it being a model for NextJS's upcoming changes."
	},
	{
		title: 'Svelte/SvelteKit Class',
		date: new Date(2024, 4),
		tags: [threejs, svelte, reactjs, ts, blender],
		description:
			'Taught a professional development class to peers implementations of threejs 3D rendering library.  Demonstration included the same 3D scene being rendered using only the threejs library, a React implementation of the same scene using react-three-fiber, and a Svelete implementation using threlte.  The scene demonstration model creation in Blender 3D modeling software, data serialization to GLTF, model loading, scene building with lighting, and custom shaders using WebGL + glsl custom shaders.'
	},
	{
		title: 'Friendly Neighborhood LPN',
		date: new Date(2021, 10),
		tags: [reactjs, ol, golang, pg, heroku],
		description:
			'Created web application for local nursing practice would be providing popup services.  The ReactJS application used OpenLayers mapping library to display data to site visitors, and provided an admin login using Google Firebase for OAuth authentication for the owner to manage data.  Backend service was developed using Go and PostgreSQL, and was deployed on Heroku. '
	}
];
