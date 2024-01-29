import { history } from "@stores/history";
import { projects } from "@utils/projects";
import { stripIndents } from "common-tags";

export const commands: Record<
	string,
	(args: string[]) => Promise<string> | string
> = {
	help: () => "Available commands: " + Object.keys(commands).join(", "),
	clear: () => {
		history.set([]);
		return "";
	},
	exit: () => {
		return "Please close the tab to exit.";
	},
	email: () => {
		window.open("mailto:contanct+website@mentoskapraha.com");

		return "Opening email...";
	},
	discord: () => {
		window.open("https://discord.gg/QKSDMaYg5R");

		return "Opening Discord Server invite link...";
	},
	github: () => {
		window.open("https://github.com/MentoskaPraha");

		return "Opening Github page...";
	},
	youtube: () => {
		window.open("https://youtube.com/@mentoskapraha")

		return "Opening Youtube channel page..."
	},
	about: () => stripIndents`
		░░░░░░░░░░░░░░████████████░░░░░░░░░░░░░░  Hi!
		░░░░░░░░░░░███░░░░░░░░░░░░███░░░░░░░░░░░
		░░░░░░░░░██░░░░░█░░░░░░░█░░░░██░░░░░░░░░  I'm MentoskaPraha, I'm an amateur developer
		░░░░░░░░██░░░░░░█░░░░░░░█░░░░░██░░░░░░░░  who likes games. Some of my favourites
		░░░░░░░█░░░░░░░░█░░░░░░░█░░░░░░░█░░░░░░░  include Minecraft Deep Rock Galactic and
		░░░░░░█░░░░░░░░░█░░░░░░░█░░░░░░░█░░░░░░░  Sea of Thieves. Not only do I enjoy playing
		░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░  games, but I like creating them too. I'm also
		░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░  an avid Linux and privacy enjoyer.
		░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░  
		░░░░░░░██░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░  Pronouns: Who are Pronouns and why do I own them?
		░░░░░░░░██░░░██░░░░░░░░░░██░░░██░░░░░░░░  Timezone: GMT+2
		░██████░░██░░░░█████████░░░░██░░░██████░  Relationship Status: Wouldn't you like to know!
		█░░░░░░█░░░░████░░░░░░░░████░░░░█░░░░░░█  
		█░░░░░░█░░░░░░░░████████░░░░░░░░█░░░░░░█  
		░██████░░░░░░░░░░░░░░░░░░░░░░░░░░██████░  
		░░░░░░░░░░░░░░░░█░░░░░░█░░░░░░░░░░░░░░░░  
		░░░░░░░░░░░░░░░░█░░░░░░█░░░░░░░░░░░░░░░░  
		░░░░░░░░░░░░░░░░█░░░░░░█░░░░░░░░░░░░░░░░  
		░░░░░░░░░░░░░░███░░░░░░███░░░░░░░░░░░░░░  
	`,
	projects: async (args: string[]) => {
		const info = stripIndents`
			░█▀█░█▀▄░█▀█░▀▀█░█▀▀░█▀▀░▀█▀░█▀▀
			░█▀▀░█▀▄░█░█░░░█░█▀▀░█░░░░█░░▀▀█
			░▀░░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░░▀░░▀▀▀

			${Object.keys(projects).join("\n")}

			To see details, use the command 'projects [args]',
			where '[args]' is one of the items on the list above.
		`;

		console.log(projects);

		if (args.length == 0) return info;

		const projectFunction = projects[args[0]];

		if (projectFunction) {
			args.shift();
			return await projectFunction(args);
		}

		return info;
	},
	source: () => {
		window.open("https://github.com/MentoskaPraha/MP-Website");

		return "Opening website Github repo...";
	},
	banner: () => stripIndents`
		░█▄█░█▀▀░█▀█░▀█▀░█▀█░█▀▀░█░█░█▀█░█▀█░█▀▄░█▀█░█░█░█▀█░▀░█▀▀    
		░█░█░█▀▀░█░█░░█░░█░█░▀▀█░█▀▄░█▀█░█▀▀░█▀▄░█▀█░█▀█░█▀█░░░▀▀█    
		░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀░▀░▀░▀░▀░░░▀░▀░▀░▀░▀░▀░▀░▀░░░▀▀▀    
		░█▀█░█▀▀░█▀▀░▀█▀░█▀▀░▀█▀░█▀█░█░░░░░█░█░█▀▀░█▀▄░█▀▀░▀█▀░▀█▀░█▀▀
		░█░█░█▀▀░█▀▀░░█░░█░░░░█░░█▀█░█░░░░░█▄█░█▀▀░█▀▄░▀▀█░░█░░░█░░█▀▀
		░▀▀▀░▀░░░▀░░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░░▀░░▀▀▀

		Welcome! If you're unfamiliar with a terminal style interface,
		don't worry, it's really quite simple! Simply type the command
		you wish to run and press enter. A command is a predetermined
		word that corresponds to a function. You can use the 'help' 
		command to get a list of all available commands at any time.
		Enjoy!

		A Note about Social Media:
		All social media accounts not linked here should not be trusted 
		as they may be imposters. Do note I also use the alias 
		'Mentoska44' at times. As long as profile is linked here it's 
		official, other wise: DON'T TRUST IT!
	`,
	legal: () => stripIndents`
		░█░░░█▀▀░█▀▀░█▀█░█░░░░░█▀▀░▀█▀░█░█░█▀▀░█▀▀
		░█░░░█▀▀░█░█░█▀█░█░░░░░▀▀█░░█░░█░█░█▀▀░█▀▀
		░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░▀▀▀░░▀░░▀▀▀░▀░░░▀░░

		This website does not set any cookies nor does it save any
		data to the browser in order to track or otherwise identify
		the user.
		This notice does not apply to cookies and other data set by
		third party services, such as the hosting provider or embeded
		content from other website. However there shouldn't be any.
	`
};
