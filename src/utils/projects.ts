import { stripIndents } from "common-tags";

export const projects: Record<
	string,
	(args: string[]) => Promise<string> | string
> = {
	mp_website: (args: string[]) => {
		const info = stripIndents`
            ░░░░░░░░░░░░░░████████████░░░░░░░░░░░░░░  MP's Website
			░░░░░░░░░░░███░░░░░░░░░░░░███░░░░░░░░░░░
			░░░░░░░░░██░░░░░█░░░░░░░█░░░░██░░░░░░░░░  This is my personal website, which
			░░░░░░░░██░░░░░░█░░░░░░░█░░░░░██░░░░░░░░  I use as a portfolio in order to
			░░░░░░░█░░░░░░░░█░░░░░░░█░░░░░░░█░░░░░░░  have a place to show all of my works
			░░░░░░█░░░░░░░░░█░░░░░░░█░░░░░░░█░░░░░░░  in a unique and interessting way, with
			░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░  a bunch of spelling mistakes.
			░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░  
			░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░  If you wish to see the source code use:
			░░░░░░░██░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░  'projects mp_website repo'
			░░░░░░░░██░░░██░░░░░░░░░░██░░░██░░░░░░░░
			░░░░░░░░░██░░░░█████████░░░░██░░░░░░░░░░  If you wish to see the website use:
			░░░░░░░░░░░░████░░░░░░░░████░░░░░░░░░░░░  'projects mp_website website'
			░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░░░
        `;

		if (args.length == 0) return info;

		switch (args[0]) {
			case "repo": {
				window.open("https://github.com/MentoskaPraha/MP-Website");

				return "Opening MP-Website's Github repository...";
			}
			case "website": {
				window.open("https://www.mentoskapraha.com");

				return "Opening MP-Website's website...";
			}
		}

		return info;
	},
	big_chungus_bot: (args: string[]) => {
		const info = stripIndents`
			░░░░░░░░░░░%%░░░░%%%░░░░░░░░░░  Big Chungus Bot
			░░░░░░░░░░░##%░░░%##░░░░░░░░░░                
			░░░░░░░░░░░#*#░░░#**░░░░░░░░░░  This is a Discord bot designed to perform
			░░░░░░░░░░@#*+%░%#++@░░░░░░░░░  verious miscellaneous stuff, like polls,
			░░░░░░░░░░@#*=#░%*++%░░░░░░░░░  music, etc. He was created in order to
			░░░░░░░░░░@#*-*░#*=+%░░░░░░░░░  for me to learn how APIs, databases and
			░░░░░░░░░░░#*-*░%*++%░░░░░░░░░  other such backend functions work. He's a
			░░░░░░░░░░░##-*@%*=*░░░░░░░░░░  pretty nifty bot cable of many things and
			░░░░░░░░░░░@#**@@#+%░░░░░░░░░░  for small servers with small groups of
			░░░░░░░░░░░░%##%#%#@░░░░░░░░░░  friends it's the perfect bot.
			░░░░░░░░░░░░@##%###%%░░░░░░░░░
			░░░░░░░░░░░░#########%░░░░░░░░  If you wish to see the source code use:
			░░░░░░░░░░░░##*#*+###=*░░░░░░░  'projects big_chungus_bot repo'
			░░░░░░░░░░░░+:::===+===%░░░░░░
			░░░░░░░░░░░#+-::-#*=-:-+░░░░░░  If you wish to see the website use:
			░░░░░░░░░░%##-:::---::-+░░░░░░  'projects big_chungus_bot website'
			░░░░░░░%####*:::::::::=#%░░░░░
			░░░░░%#####*-::::::::::+#%░░░░
			░░░░#######-::::::::::::+##%░░
			░░░######+-:::::::::::::-*##%░
			░░#*=+*#=::::::::::::::::=**#*
			░░+-:.-=:::::::::::::::::-:::+
			░░:. .:-:::::::::::::::::-...-
			░░=..:::::::::::::::::::::::=░
			░░░#**=-:::::::::::::::::--░░░
			░░░###+::::::::::::::::::=░░░░
			░░░░###=::::::::::::::::=#░░░░
			░░░░░%#*+::::::::::::-----=░░░
			#+=-=####*+=--===--:::::-=+░░░
			-::-:-=+***++░░░░░░░@%##░░░░░░
			+-=---=*░░░░░░░░░░░░░░░░░░░░░░
		`;

		if (args.length == 0) return info;

		switch (args[0]) {
			case "repo": {
				window.open("https://github.com/MentoskaPraha/Big-Chungus-Bot");

				return "Opening Big Chungus Bot's Github repository...";
			}
			case "website": {
				window.open("https://youtu.be/dQw4w9WgXcQ");

				return "Opening Big Chungus Bot's website...";
			}
		}

		return info;
	}
};
