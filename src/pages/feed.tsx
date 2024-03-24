import { generateRSS } from "../libs/rss"
import usePostsQuery from "../hooks/usePostsQuery"
import { NextApiResponse } from "next" 

export async function getServerSideProps ({ res }: { res: NextApiResponse }) {
  res.setHeader('Content-Type', 'text/xml')
  const posts = await usePostsQuery()
  const xmlFeed = await generateRSS(posts)
  res.write(xmlFeed)
  res.end()
  return {
    props: {}
  }
}
export default (() => null)