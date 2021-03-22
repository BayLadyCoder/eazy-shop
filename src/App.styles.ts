import styled from 'styled-components'
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
    margin: 0px 30px 30px 30px;

    h1{
        text-align:center;
    }
`;

export const StyledButton = styled(IconButton)`
    position:fixed !important;
    z-index: 100;
    right: 30px;
    top: 20px;


`;