import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "../lib/site";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: `${site.name}, writing`,
    description: "Notes on backend systems, event sourcing, and agent infrastructure.",
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: [...post.data.tags],
      link: `/writing/${post.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
