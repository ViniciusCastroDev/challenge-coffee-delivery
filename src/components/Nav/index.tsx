import { NavContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Location } from "../Location";
import { Cart } from "../Cart";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  const { cart } = useContext(CartContext);
  return (
    <NavContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>
      <div className="buyer-info">
        <Location />
        <Cart
          backgroundColor="yellow-light"
          iconColor="yellow-dark"
          iconSize={22}
          productsAmount={cart.length}
        />
      </div>
    </NavContainer>
  );
}
