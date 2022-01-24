import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
`;

export const SalesContent = styled.div`
  border-bottom: 1px solid #555;
  padding: 20px;
  text-align: start;
  
  .sales-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sales {
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 12px;
  }
`;
