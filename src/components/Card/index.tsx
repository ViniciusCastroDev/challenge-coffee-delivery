import { useContext, useEffect, useState } from "react";
import { Cart } from "../Cart";
import {
  AmountController,
  Badge,
  BadgeWrapper,
  CardContainer,
  Price,
} from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";

interface CardProps {
  id: string | null;
  imageName: string;
  price: number;
  badges: string[];
  description: string;
}

const images = import.meta.glob("/src/assets/*.svg", {
  eager: true,
  as: "url",
});
export function Card({ id, imageName, price, badges, description }: CardProps) {
  const imagePath = images[`/src/assets/Type=${imageName}.svg`] as string;

  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    // Se o produto estiver no carrinho, atualiza a quantidade ao renderizar
    const productInCart = cart.find((item) => item.id === id);
    if (productInCart) {
      setQuantity(productInCart.quantity);
    }
  }, [cart, id]);

  const [quantityState, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAddToCart() {
    addToCart({
      id,
      name: imageName,
      price: price,
      quantity: quantityState,
    });
  }
  return (
    <CardContainer>
      <div className="card-container-header">
        <img src={imagePath} />
        <BadgeWrapper>
          {badges.slice(0, 3).map((badge) => (
            <Badge>{badge}</Badge>
          ))}
        </BadgeWrapper>
      </div>
      <div className="card-container-content">
        <span>{imageName}</span>
        <p>{description}</p>
      </div>
      <div className="card-container-footer">
        <Price>
          <p>R$</p>
          <span>{price}</span>
        </Price>
        <AmountController>
          <Minus size={14} onClick={decreaseQuantity} />
          <p>{quantityState}</p>
          <Plus size={14} onClick={increaseQuantity} />
        </AmountController>
        <Cart
          iconSize={22}
          backgroundColor="purple-dark"
          iconColor="base-white"
          onClick={handleAddToCart}
        />
      </div>
    </CardContainer>
  );
}
