import "./app.css";
import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app") as Element
});

document.getElementById("no-js")?.remove();

export default app;
