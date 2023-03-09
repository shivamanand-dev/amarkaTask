import styled from "styled-components";

export const StyledTabNavigation = styled.section`
  max-width: 928px;
  width: 100%;
  margin-top: 1rem;
  .tab-links {
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    background: #202636;
  }

  .tab-links {
    display: flex;
    justify-content: space-between;

    li {
      max-width: 309px;
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      p {
        margin: 0;
        cursor: pointer;
      }
    }

    .active {
      background: #383e4c;
      border-radius: 5px;
    }
  }
`;
