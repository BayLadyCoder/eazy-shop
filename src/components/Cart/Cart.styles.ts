import styled from "styled-components";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 320px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #383838;

  @media screen and (min-width: 600px) {
    width: 500px;
  }

  .checkout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .checkout-button {
    /* font-weight: bold; */
  }

  .checkout-total {
    /* color: red; */
    font-weight: normal;
  }
`;
