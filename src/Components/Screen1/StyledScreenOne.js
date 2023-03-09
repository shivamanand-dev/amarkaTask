import styled from "styled-components";

export const StyledScreenOne = styled.section`
  .mainSec {
    align-items: start;
    justify-content: space-between;
    .leftSec {
      max-width: 928px;
      .currentShowingTitle {
        justify-content: space-between;
        margin-top: 1rem;
        p {
          margin: 0;
        }
        select {
          background: #202636;
          border-radius: 5px;
          padding: 0.5rem 1.5rem;
          border: none;
          color: #fff;
        }
      }
    }
    .rightSec {
    }
  }
`;
