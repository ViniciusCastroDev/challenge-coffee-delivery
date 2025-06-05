import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/default";

interface DynamicIconContainerProps {
  iconBackgroundColor?: keyof typeof defaultTheme;
  iconColor: keyof typeof defaultTheme;
  iconWidth?: number;
  iconHeight?: number;
}

export const DynamicIconContainer = styled.div<DynamicIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, iconBackgroundColor }) =>
    iconBackgroundColor ? theme[iconBackgroundColor] : "transparent"};
  color: ${(props) => props.theme[props.iconColor]};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 999px;

  svg {
    width: ${({ iconWidth }) => (iconWidth ? `${iconWidth}rem` : "2rem")};
    height: ${({ iconHeight }) => (iconHeight ? `${iconHeight}rem` : "2rem")};
  }
`;
