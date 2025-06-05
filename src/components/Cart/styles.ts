import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/default";

interface CartContainerProps {
  backgroundColor: keyof typeof defaultTheme;
}

export const CartContainer = styled.div<CartContainerProps>`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme[props.backgroundColor]};
  cursor: pointer;
`;
export const Badge = styled.span`
  position: absolute;
  top: 1.6rem;
  right: 9.2rem;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["base-white"]};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  min-height: 1.25rem;
`;
