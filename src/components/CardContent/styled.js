import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: start;
  font-weight: bold;

  .percentage {
    color: #23aa55;
    font-size: 3.2rem;
  }

  .description {
    color: #9d9998;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;
