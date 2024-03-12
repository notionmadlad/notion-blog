import styled from "@emotion/styled"
import Link from "next/link";
import React from "react"

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <Link className="a-link" href="/">← Back</Link>
      <p className="a-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑ Top
      </p>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  .a-link {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
