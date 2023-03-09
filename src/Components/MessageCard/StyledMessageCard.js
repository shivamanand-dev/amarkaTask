import styled from "styled-components";

export const StyledMessageCard = styled.section`
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  font-family: "Open Sans";
  font-style: normal;
  margin-bottom: 1rem;
  .flex {
    justify-content: space-between;
  }
  p {
    margin: 0;
  }
  .message {
    max-width: 280px;
    width: 100%;
    background: #ffffff;
    border-radius: 10px;
    font-weight: 400;
    font-size: 12px;
    padding: 0.5rem 1rem;
    color: #3d3d3d;

    .name {
      color: #007dd8;
      font-weight: 700;
      font-size: 12px;
    }
    .subtitle {
      font-weight: 400;
      font-size: 10px;
      color: #90a9bb;
    }
    .boldGreen {
      font-weight: 700;
      color: #47911d;
    }
  }
`;
