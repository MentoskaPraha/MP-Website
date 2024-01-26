import { writable } from "svelte/store";
import type { Command } from "$types";

export const history = writable<Array<Command>>([]);
