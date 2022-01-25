import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;
  width: 80%;
  padding: 2% 2%;

  .name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .info {
    margin: 0 14px;
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 832px) {
    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .info {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 778px) {
    .icon {
      display: none;
    }
  }

  @media only screen and (max-width: 688px) {
    .info {
      margin: 0;
    }

    .section {
        display: flex;
        flex-direction: column;
    }
  }
`;
