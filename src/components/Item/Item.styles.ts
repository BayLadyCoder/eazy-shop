import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 20px;
  height: 100%;
  color: #383838;

  img {
    margin-top: 1.5rem;
    max-height: 200px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1.5rem;
    height: 100%;
  }

  .item-title {
    font-weight: bold;
  }

  .item-description {
    color: #7d7d7d;
  }

  .item-price {
    font-size: 1.3rem;
    font-weight: ;
  }
`;
