import styled from "styled-components";

export const CardSelectedContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .title-amount {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .main-controller {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .total-price {
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const AmountController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  font-family: "Roboto", sans-serif;

  width: 4.5rem;
  height: 2rem;

  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  /* margin-right: -2rem; */
  color: ${(props) => props.theme["base-text"]};

  svg {
    color: ${(props) => props.theme["purple-normal"]};
    cursor: pointer;
  }
`;

export const RemoveController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.25rem;

  font-family: "Roboto";
  font-size: 12px;

  width: 5%.6;
  height: 2rem;
  padding: 0.4rem 0.5rem;

  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  /* margin-right: -2rem; */
  color: ${(props) => props.theme["base-text"]};

  svg {
    color: ${(props) => props.theme["purple-normal"]};
  }
  cursor: pointer;
`;
