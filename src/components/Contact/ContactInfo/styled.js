import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    box-sizing: border-box;
    width: 80%;
    padding: 1% 2%;

    .name {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .info {
        margin-left: 10px;
    }

    .phone {
        margin-left: 20px;
    }
`;
