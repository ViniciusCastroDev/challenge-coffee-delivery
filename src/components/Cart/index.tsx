import { ShoppingCart } from "@phosphor-icons/react";
import { Badge, CartContainer } from "./styles";
import { defaultTheme } from "../../styles/theme/default";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

interface CartProps {
  backgroundColor: keyof typeof defaultTheme;
  iconColor: keyof typeof defaultTheme;
  iconSize: number;
  productsAmount?: number;
  onClick?: () => void;
}

export function Cart({
  iconSize,
  backgroundColor,
  iconColor,
  productsAmount = 0,
  onClick,
}: CartProps) {
  const theme = useTheme();
  return (
    <CartContainer backgroundColor={backgroundColor}>
      <NavLink to='/checkout'>
        <ShoppingCart
          onClick={onClick}
          size={iconSize}
          color={theme[iconColor]}
          weight="fill"
        />
        {productsAmount > 0 && <Badge>{productsAmount}</Badge>}
      </NavLink>
    </CartContainer>
  );
}
