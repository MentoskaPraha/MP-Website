export const ssr = false;
export const csr = true;
export const prerender = true;

export const load = async ({ setHeaders }) => {
	setHeaders({
		"Cache-Control": `max-age=${60 * 60 * 24 * 14} s-maxage=${
			60 * 60 * 24 * 7
		}`
	});
};
