import styled from "styled-components";

interface TextInputProps {
  width?: number;
}

const BaseInput = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  width: 35rem;
  height: 2.6rem;
  padding: 0.75rem;
  /* margin-left: 2.5rem; */
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
`;

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 2.5rem;

  .address-complement {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: calc(100% - 2.5rem);
  }
  .address-city-state {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: calc(100% - 2.5rem);
  }
`;

export const InputComponent = styled(BaseInput)<TextInputProps>`
  width: ${({ width }) => (width ? `${width}rem` : "auto")};
`;

export const SelectComponent = styled.select<TextInputProps>`
  width: ${({ width }) => (width ? `${width}rem` : "auto")};
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: 4px;
  display: block;
`;
