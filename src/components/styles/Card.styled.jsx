import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 13px;
    text-align: center;
    border: none;
    border-radius: 15px;

    img {
        border: none;
        border-radius: 15px;
    }

    div {
        padding: 10px;
    }
`