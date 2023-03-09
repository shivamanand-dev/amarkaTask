import styled from "styled-components";

export const StyledChatBox = styled.section`
  max-width: 450px;
  width: 450px;
  height: 720px;
  background: #1b2030;
  margin-top: 1rem;
  padding-top: 3rem;
  position: relative;

  input {
    width: 350px;
    background: rgba(255, 255, 255, 0.08);
    border: none;
    padding: 0.75rem 1.25rem;
    margin: 2rem auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
  }
`;
