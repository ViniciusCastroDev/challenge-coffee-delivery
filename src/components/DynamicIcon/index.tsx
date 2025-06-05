import { ReactElement } from "react";
import { defaultTheme } from "../../styles/theme/default";
import { IconProps } from "@phosphor-icons/react";
import { DynamicIconContainer } from "./styles";

interface DynamicIconProps {
  iconBackgroundColor?: keyof typeof defaultTheme;
  iconColor: keyof typeof defaultTheme;
  icon: ReactElement<IconProps>;
  iconHeight?: number;
  iconWidth?: number;
}

export function DynamicIcon({
  iconColor,
  iconBackgroundColor,
  icon,
  iconHeight,
  iconWidth,
}: DynamicIconProps) {
  return (
    <DynamicIconContainer
      iconColor={iconColor}
      iconBackgroundColor={iconBackgroundColor}
      iconHeight={iconHeight}
      iconWidth={iconWidth}
    >
      {icon}
    </DynamicIconContainer>
  );
}
