# MP-Website

This is the code for the MP's Official Website, feel free to inspect it and submit changes if you find anything wrong with the code or know how to do something more efficiently.

This website is designed to be hosted on any static deployment platform.

## Deployment

To deploy this website for yourself, simple clone the Github repository and customize the `content.json` file located in:  
`/src/lib/assets/content.json`

Before deploying you will need to install the project dependancies by running the following in your terminal at the project location:

```shh
npm install
```

After you can run the following command to start a local server where your changes are reflected in real time:

```shh
npm run dev
```

Once you are happy with the changes you can run the following to build the project:

```shh
npm run build
```

This will create a folder called build and the files inside this folder can be uploaded to your hosting provider.

> **Make sure to upload the files, not the folder!**

If you are using Github, you can use Github pages to deploy the project. First configure Github pages in your repository settings on Github. You can find a guide on how to do that [here](https://docs.github.com/en/pages).

After that you will need to create a `.env` file in the root of your project. It should look something like this:

```.env
DEPLOY_REPO="LINK TO YOUR REPOSITORY HERE(MAKE SURE TO ADD .git AT THE END)"
DEPLOY_USERNAME="YOUR GITHUB USERNAME HERE"
DEPLOY_EMAIL="YOUR GITHUB EMAIL ADDRESS HERE"
```

Before you deploy the website you'll have to change the paths object in `svelte.congi.js` like so:

```js
paths: {
	base: process.env.NODE_ENV === "production" ? "/NAME OF YOUR GITHUB REPOSIRTORY HERE" : "",
}
```

After that you can run the following to deploy the site to Github pages:

```sh
npm run deploy
```

If you're adding a custom domain you can create a file called `CNAME` in the static folder and on one line add the domain you wish to use. This file will not be commited to Github.

### Changing Images

## Copyright

This website is copyrighted under the GNU General Public License V3 and was made by MentoskaPraha using VSCode, Github and Firebase. Image sources and credits can be found below.

### Image Source List

-   icons/\*
    -   Custom made by Gljue and MentoskaPraha, with help from realfavicongenerator.net
-   logos/\*
    -   All logos not made by external parties.
-   siteLogo.svg
    -   Custom made by Gljue
-   banner.webp
    -   Screenshot from Elite Dangerous by MentoskaPraha
-   externalLink.svg
    -   Custom made by Gljue
-   arrow-left.svg
    -   Custom made by MentoskaPraha
-   arrow-right.svg
    -   Custom made by MentoskaPraha

> **Note**  
> All images in the projects folder are project dependant on what the site owner posts and won't be listed here. This also sort of applies to all the images in the logos folder.

## Credits

Your name will be added here if you make a meaningful contributions to the project.

-   MentoskaPraha
-   Gljue
