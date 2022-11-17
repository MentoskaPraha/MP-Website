//libraries
import express from "express";
import fs from "node:fs";
import log from "./logger";

//create router
const router = express.Router();

//add main route
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/projects.html');
    log.info("Responded to request for the Projects page.");
});

//for each project page create a route
const projects = fs.readdirSync(__dirname + '/public/projects').filter(file => file.endsWith('.html') && !file.startsWith('_'));

projects.forEach(project => {
    const projectName = project.split(".")[0];
    router.get(`/${projectName}`, (req, res) => {
        res.sendFile(__dirname + '/public/pages/specificProject.html');
        log.info(`Responded to request for the project "${projectName}" page.`);
    });
});

//export the router
export = router;