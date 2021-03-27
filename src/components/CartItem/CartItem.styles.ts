import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  color: #383838;

  h3 {
    font-size: 18px;
  }

  div {
    flex: 1;
  }

  p {
    margin: 0;
  }

  .information {
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-button {
    background-color: #f50057;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .icon-button:hover {
    background-color: #c90248;
  }

  .button {
    border-radius: 50%;
  }

  img {
    max-width: 100px;
    object-fit: contain;
    margin-left: 40px;
  }

  .icon {
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
  }
  .amount {
    margin: 0 14px;
  }

  .price-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .total-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .price,
  .total {
    margin-bottom: 10px;
    color: #7a7a7a;
    font-size: 14px;
  }
`;
