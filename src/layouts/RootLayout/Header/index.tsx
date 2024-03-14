import NavBar from "./NavBar"
import Title from "./Title"
import ThemeToggle from "./ThemeToggle"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"
import Image from "next/image"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper>
      <div data-full-width={fullWidth} className="container">
        <div className="logo" css={{ width: "150px" }}>
          <Image 
            src="/images/64.png"
            alt="Logo"
            width={60}
            height={60}
            css={{ borderRadius: "50%", border: "2px solid #000" }}
          />
        </div>
        <Title />
        <div className="nav">
          <NavBar />
          <ThemeToggle />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.gray1};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    height: 100px;
    margin: 0 auto;
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      width: 150px;
    }

    @media (max-width: 768px) {
      .logo {
        display: none;
      }
    }
  }
`
