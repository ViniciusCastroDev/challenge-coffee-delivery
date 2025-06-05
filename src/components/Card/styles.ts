import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  .card-container-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    margin-bottom: 1rem;

    img {
      margin-top: calc(0px - 1rem - 5px);
      width: 7.5rem;
      height: 7.5rem;
    }
  }

  .card-container-content {
    width: 13.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    span {
      font-family: "Baloo 2", sans-serif;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      text-align: center;
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-label"]};
      margin-bottom: 2.0625rem;
    }
  }

  .card-container-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* gap: 1rem; */

    width: 13rem;
    height: 2.375rem;
  }
`;
export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.25rem;
`;
export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 1.3125rem;
  padding: 0.5rem;

  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: bold;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 999px;
`;

export const AmountController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 4.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  /* margin-right: -2rem; */
  color: ${(props) => props.theme["base-text"]};

  svg {
    color: ${(props) => props.theme["purple-normal"]};
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  p {
    font-size: 0.875rem;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
