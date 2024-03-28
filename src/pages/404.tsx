import config from "../../site.config"
import { NextPageWithLayout, TPosts, TTags } from "../types"
import CustomError from "../routes/Error"
import MetaConfig from "src/components/MetaConfig"

type Props = {
  tags: TTags
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <CustomError />
}

NotFoundPage.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: config.blog.title,
          description: config.blog.description,
          type: "website",
          url: config.link,
        }}
      />
      {page}
    </>
  )
}

export default NotFoundPage
