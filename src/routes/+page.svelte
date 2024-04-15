<script>
	import { format } from 'date-fns';

	const ed = [
		{
			name: 'Norwich University',
			degree: 'MS',
			concentration: 'Organizational Leadership',
			gpa: 3.95,
			src: 'https://www.norwich.edu/themes/custom/norwich/assets/img/norwich-logo--header.svg',
			start: new Date(2015, 8),
			end: new Date(2017, 5)
		},
		{
			name: 'University of South Carolina',
			degree: 'BA',
			concentration: 'Media Arts',
			gpa: 3.29,
			src: 'https://www.sc.edu/about/offices_and_divisions/communications/images/toolbox/logos/grid-usc-horiontal-rev-b-on-garnet.svg',
			start: new Date(2004, 9),
			end: new Date(2008, 4)
		}
	];
</script>

<svelte:head><title>Benjamin Winchester</title></svelte:head>

<h1>About Me</h1>
<p>
	I am a developer with a focus on javascript, python and java, utilizing their ecosystems for
	product development, Big Data and and general software engineering practices. I am an 11 year
	veteran of the US Army who learned software development as a hobby, and ultimately turn it into a
	career. I am passionate about teaching others and pursue their dream and learn to code. I love
	hanging out with my family, reading Brandon Sanderson, or working on / riding my motorcyle.
</p>
<h1>Education</h1>
{#each ed as { name, degree, concentration, gpa, src, start, end }}
	<div class="ed">
		<img {src} style:width="100px" alt="" />
		<div>
			<h2>{name}</h2>
			<h3>{degree} in {concentration} - {gpa}</h3>
			<h3 style:font-style="italic">{format(start, 'LLLL yyyy')} - {format(end, 'LLLL yyyy')}</h3>
		</div>
	</div>
{/each}

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
	h2,
	h3 {
		margin: 0;
	}
	h3 {
		font-weight: normal;
	}
	.ed {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 30px;
		width: 100%;
		padding: 20px;
		align-items: center;
		justify-content: start;
		margin-bottom: 30px;
		box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
	}
</style>
