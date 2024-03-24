import { generateRSS } from "../libs/rss"
import { NextApiResponse } from "next" 

export async function getServerSideProps ({ res }: { res: NextApiResponse }) {
  res.setHeader('Content-Type', 'text/xml')
  const xmlFeed = await generateRSS()
  res.write(xmlFeed)
  res.end()
  return {
    props: {}
  }
}
export default (() => null)