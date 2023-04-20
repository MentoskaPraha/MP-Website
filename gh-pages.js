import { publish } from "gh-pages";

publish(
	"build",
	{
		branch: "gh-pages",
		repo: process.env.DEPLOY_REPO,
		user: {
			name: process.env.DEPLOY_USERNAME,
			email: process.env.DEPLOY_EMAIL
		},
		dotfiles: false
	},
	() => {
		console.log("Deploy Complete!");
	}
);
