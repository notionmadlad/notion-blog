import styled from "@emotion/styled"
import Link from "next/link"
import config from "site.config"

const NavBar: React.FC = () => {
  const links = config.navLinks
  return (
    <StyledWrapper>
      <ul>
        {Object.keys(links).map((link) => (
          <li key={link}>
            <Link 
              href={links[link as keyof typeof links]}
            >
              {links[link as keyof typeof links]}
            </Link>
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
