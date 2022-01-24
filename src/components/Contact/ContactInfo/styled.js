import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border: 1px solid black;
    box-sizing: border-box;
    width: 80%;
    padding: 1% 2%;

    .name {
        font-size: 1.3rem;
        font-weight: bold;
    }
`;