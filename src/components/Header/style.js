import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .title {
    border: 1px solid red;
    width: 40%;
  }

  .contact-container {
    border: 1px solid green;
    width: 60%;

    h2 {
      font-size: 1.1rem;
    }
  }
`;
