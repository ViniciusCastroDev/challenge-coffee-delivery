import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  width: 70rem;
  height: 30rem;
  margin: 4.875rem 10rem;
`;
export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  p {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.1rem;
    line-height: 130%;
    font-weight: bold;
  }
`;
export const Address = styled.div`
  width: 40rem;
  height: 23.25rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const AddressHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2.5rem;

  svg {
    margin-top: -0.7rem;
    /* width: 1.375rem;
    height: 1.375rem; */
  }
  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
  p {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    line-height: 130%;
    font-weight: 400;
  }
`;

export const Payment = styled.div`
  background-color: ${(props) => props.theme["base-card"]};

  width: 40rem;
  height: 12.94rem;
  border-radius: 6px;
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  width: 100%;
  margin: 2.5rem;

  p {
    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;
    line-height: 160%;
    font-weight: 400;
    white-space: nowrap;
  }
`;

export const ButtonPayment = styled.button`
  display: flex;
  flex-direction: row;
  /* gap: 0.75rem; */
  align-items: center;

  width: 11.1rem;
  height: 3.19rem;
  padding: 1rem;
  border-radius: 6px;
  border: 0;

  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;

  &.active {
    border: 1px solid ${({ theme }) => theme["purple-dark"]};
    background: ${({ theme }) => theme["purple-light"]};
  }
`;

export const ProdutcsSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  .title-product-selected {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.1rem;
    line-height: 130%;
    font-weight: bold;
  }
`;

export const ProdutcsSelectedCard = styled.div`
  width: 28rem;
  height: 31.25rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProdutcsSelectedFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }

  .total-itens {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .delivery-fee {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .total-amount {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p,
    span {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  button {
    width: 100%;
    height: 2.875rem;

    color: ${(props) => props.theme["base-white"]};
    background-color: ${(props) => props.theme["yellow-normal"]};

    border-radius: 6px;
    border: 0;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: 4px;
  display: block;
`;
