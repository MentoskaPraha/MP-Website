import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  return rss({
    title: "MP's Blog",
    description: "MentoskaPraha's official blog. I write about things.",
    site: context.site ?? "1.1.1.1",
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.created,
      categories: [post.data.category],
      link: `/blog/${post.id}`
    })),
    stylesheet: "/rss_feed_stylesheet.xsl",
    customData: "<language>en-us</language>"
  });
}
