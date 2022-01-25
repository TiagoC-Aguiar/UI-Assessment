import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
`;

export const SalesContent = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.2);
  padding: 20px;
  text-align: start;

  .sales-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sales-header .sales-title {
    display: flex;
    align-items: center;
  }

  .sales {
    font-size: 1.7rem;
    font-weight: bold;
    margin-left: 12px;
  }

  span {
    font-size: 1.38rem;
  }
`;

export const UploadsLines = styled.div`
  display: flex;
  justify-content: space-between;
`;
