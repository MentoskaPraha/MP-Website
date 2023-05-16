# MP-Website

This is the code for the MP's Official Website, feel free to inspect it and submit changes if you find anything wrong with the code or know how to do something more efficiently.

This website is designed to be hosted on any static deployment platform.

## Deployment

To deploy this website for yourself, simple clone the Github repository and customize the `content.json` file located in:  
`/src/content.json`

Before deploying you will need to install the project dependancies by running the following in your terminal at the project location:

```shh
npm install
```

After you can run the following command to start a local server where your changes are reflected in real time:

```shh
npm run dev
```

Before we can build the project, we must edit the `astro.config.mjs` file. Make sure to change the `site` option to the url of your website.

Once you are happy with the changes you can run the following to build the project:

```shh
npm run build
```

This will create a folder called build and the files inside this folder can be uploaded to your hosting provider.

> **Make sure to upload the files, not the folder!**

If you are using Github, you can use Github pages to deploy the project. First configure Github pages in your repository settings on Github. You can find a guide on how to do that [here](https://docs.github.com/en/pages).

To the deploy to Github pages, simple commit to the main branch and Github Actions will take it from there. If you are using the default URL provided by Github Pages make sure to update the `base` option in the `astro.config.mjs` file to `/your repo name` also update the `site` option to `https://YOUR_GITHUB_USERNAME.github.io`.

### Changing Images

If you wish to change an image, simple replace the image and ensure it has the same name as before. Adding custom images is simple, just add the image and specify the path to it in the `content.json` file.

## Copyright

This website is copyrighted under the MIT License and was made by MentoskaPraha using VSCode, Github and Firebase. Image sources and credits can be found below.

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
