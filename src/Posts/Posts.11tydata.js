export default function () {
  return {
    permalink: "/{{ page.fileSlug | slugify }}/index.html",
    tags: ["Posts", "Type/Post"],
    layout: 'post.njk'
  }
}
