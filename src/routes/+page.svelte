<script lang="ts">
	import { siteInfo, aboutMe, projects } from "$lib/assets/content.json";
	import type {
		contentListEntry,
		projectObject,
		specificViewEntry
	} from "$lib/assets/types";
	import ContentBlock from "$lib/components/ContentBlock.svelte";
	import ContentList from "$lib/components/ContentList.svelte";
	import SpecificView from "$lib/components/SpecificView.svelte";
	import Banner from "$lib/components/Banner.svelte";

	//setup about section
	const socialMedia: contentListEntry[] = [];
	const techList: contentListEntry[] = [];

	for (let i = 0; i < aboutMe.tech.length; i++) {
		let entry: contentListEntry;

		const tech = aboutMe.tech[i];

		entry = {
			title: tech.title,
			description: tech.description,
			image: tech.image,
			link: tech.link,
			target: "_blank"
		};

		techList.push(entry);
	}

	for (let i = 0; i < aboutMe.socialMedia.length; i++) {
		let entry: contentListEntry;

		const social = aboutMe.socialMedia[i];

		entry = {
			title: social.title,
			description: social.description,
			image: social.image,
			link: social.link,
			target: "_blank"
		};

		socialMedia.push(entry);
	}

	//setup projects section
	let favProject = projects.list.find(
		(element) => element.id == projects.favProject
	) as projectObject;

	let featProject: projectObject;
	do {
		featProject =
			projects.list[Math.floor(Math.random() * projects.list.length)];

		if (featProject.id != projects.favProject) break;
	} while (featProject);

	let projectsList: contentListEntry[] = [];

	for (let i = 0; i < projects.list.length; i++) {
		let entry: contentListEntry;

		const project = projects.list[i];

		entry = {
			title: project.title,
			description: project.description,
			image: project.image,
			link: "none",
			target: "_blank"
		};

		projectsList.push(entry);
	}

	let specificViewList: specificViewEntry[] = [];

	for (let i = 0; i < projects.list.length; i++) {
		let entry: specificViewEntry;

		const project = projects.list[i];

		entry = {
			title: project.title,
			description: project.description,
			image: project.image,
			links: true,
			git: project.git,
			external: project.external
		};

		specificViewList.push(entry);
	}
</script>

<svelte:head>
	<title>{siteInfo.title}</title>

	<meta name="description" content={siteInfo.metaDescription} />
</svelte:head>

<Banner title={siteInfo.title} description={siteInfo.description} />

<div id="/about">
	<ContentBlock
		title="About Me"
		description={aboutMe.basicInfo.description}
		image={aboutMe.basicInfo.image}
		links={false}
	/>

	<hr />

	<ContentList title={"Technology I use"} entries={techList} />

	<hr />

	<ContentList title="Social Media" entries={socialMedia} />
</div>

<div>
	<hr id="/projects" />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			My Favorite Project
		</h2>
		<ContentBlock
			title={favProject.title}
			description={favProject.description}
			image={favProject.image}
			links={true}
			git={favProject.git}
			external={favProject.external}
		/>
	</div>

	<hr />

	<div>
		<h2 class="text-center underline text-3xl font-bold mb-4">
			Random Project
		</h2>
		<ContentBlock
			title={featProject.title}
			description={featProject.description}
			image={featProject.image}
			links={true}
			git={featProject.git}
			external={featProject.external}
		/>
	</div>

	<hr />

	<ContentList title="Project List" entries={projectsList} />

	<hr />

	<SpecificView title="Specific Project View" entries={specificViewList} />
</div>

<hr />
