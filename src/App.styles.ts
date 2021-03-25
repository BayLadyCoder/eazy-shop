import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px 30px 30px 30px;
  color: #383838;

  h1 {
    /* text-align: center; */
    font-family: "Lobster", cursive;
    font-family: "Train One", cursive;
    font-size: 2.6rem;
    margin: 0px;
    margin-bottom: 20px;
    color: #303f9f;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed !important;
  z-index: 100;
  right: 30px;
  top: 20px;
`;
