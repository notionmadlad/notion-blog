import Link from "next/link"
import config from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={config.blog.title}>
      {config.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  font-size: 25px;
  font-weight: 800;
`
