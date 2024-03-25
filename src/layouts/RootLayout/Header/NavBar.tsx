import styled from "@emotion/styled"
import Link from "next/link"
import { CONFIG } from "site.config"

const NavBar: React.FC = () => {
  const links = CONFIG.navLinks
  return (
    <StyledWrapper className="">
      <ul>
        {Object.keys(links).map((link) => (
          <li key={link}>
            <Link href={link}>{links[link]}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
