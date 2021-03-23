import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    font-family:Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    h3 {
        font-size: 18px;
    }

    div {
        flex: 1;
    }

    .information, .buttons {
        display:flex;
        justify-content:space-between;

    }

    .button {
        font-size:17px;
    }

    img {
        max-width: 100px;
        object-fit: contain;
        margin-left: 40px;
    }
`;
