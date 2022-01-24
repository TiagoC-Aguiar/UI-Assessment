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

  .sales {
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 12px;
  }
`;

export const UploadsLines = styled.div`
  display: flex;
  justify-content: space-between;

  .card-content {
    border-right: 1px solid rgba(0,0,0,.2);
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: start;
    font-weight: bold;
  }

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
