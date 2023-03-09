import styled from "styled-components";

export const StyledSideBar = styled.section`
  height: 100vh;
  max-width: 104px;
  width: 100%;
  background: #202636;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  .logo {
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .sideBarItem {
    text-align: center;
    background: rgba(255, 255, 255, 0.11);
    padding: 1rem 0;
  }
`;
