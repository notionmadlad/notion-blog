import { TPost } from "src/types"
import config from "site.config"
import dynamic from "next/dynamic"

const UtterancesComponent = dynamic(
  () => {
    return import("./Utterances")
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {config.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
    </div>
  )
}

export default CommentBox
