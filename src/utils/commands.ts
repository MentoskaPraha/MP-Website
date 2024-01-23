import { history } from "@stores/history";
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
	`
};
