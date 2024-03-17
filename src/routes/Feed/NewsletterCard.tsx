import styled from "@emotion/styled"
import React from "react"

type Props = {}

const NewsletterCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        Newsletter
      </div>
      <iframe 
        src="https://martinnotion.substack.com/embed"
        width="100%" 
        height="150" 
        css={{
          border: "none",
          background: "transparent",
          borderRadius: "1rem"
        }} 
      />
    </StyledWrapper>
  )
}

export default NewsletterCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
`
