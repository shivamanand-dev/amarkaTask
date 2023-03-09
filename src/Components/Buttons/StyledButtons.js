import styled from "styled-components";

export const StyledButtons = styled.section`
  button {
    background: ${(props) =>
      props.type === "primary"
        ? "#3946a0"
        : props.type === "warning"
        ? "#C77802"
        : "transparent"};
    border: ${(props) =>
      props.type === "primary"
        ? "none"
        : props.type === "warning"
        ? "none"
        : "0.75px solid #FFFFFF"};
    border-radius: 3px;
    /* border: none; */
    padding: 0.5rem 1rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
  }
`;
