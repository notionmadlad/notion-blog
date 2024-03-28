import { Feed } from "feed"
import React from "react"
import ReactDOMServer from "react-dom/server"
import config from "../../site.config"
import NotionRenderer from "../routes/Detail/components/NotionRenderer"
import { getPosts } from "../apis/notion-client/getPosts"
import { getRecordMap } from "../apis/notion-client/getRecordMap"

async function createFeedContent(post: any) {
  const recordMap = await getRecordMap(post.id)
  const content = ReactDOMServer.renderToString(
    <NotionRenderer recordMap={await recordMap} />
  )

  const regexExp = /<div class="notion-collection-row"><div class="notion-collection-row-body"><div class="notion-collection-row-property"><div class="notion-collection-column-title"><svg.*?class="notion-collection-column-title-icon">.*?<\/svg><div class="notion-collection-column-title-body">.*?<\/div><\/div><div class="notion-collection-row-value">.*?<\/div><\/div><\/div><\/div>/g
  return content.replace(regexExp, '')
}

export async function generateRSS() {
  const posts = await getPosts()
  const year = new Date().getFullYear()
  const feed = new Feed({
    title: config.blog.title,
    description: config.blog.description,
    id: config.link,
    link: config.link,
    language: config.lang,
    favicon: config.profile.image,
    copyright: `© ${config.profile.name} ${config.since === year || !config.since ? year : `${config.since} - ${year}`}`,
    author: {
      name: config.profile.name,
      email: config.profile.email,
      link: config.link
    }
  })
  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${config.link}/${post.slug}`,
      link: `${config.link}/${post.slug}`,
      description: post.summary,
      content: await createFeedContent(post),
      date: new Date(post?.date?.start_date || post.createdTime)
    })
  }
  return feed.atom1()
}