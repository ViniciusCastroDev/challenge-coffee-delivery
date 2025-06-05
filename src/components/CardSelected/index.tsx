import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  AmountController,
  CardSelectedContainer,
  RemoveController,
} from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

const images = import.meta.glob("/src/assets/*.svg", {
  eager: true,
  as: "url",
});

export function CardSelected() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <NavLink to="/">Seu carrinho está vazio. Adicionar itens</NavLink>
      ) : (
        cart.map((item) => {
          const imagePath = images[
            `/src/assets/Type=${item.name}.svg`
          ] as string;

          const itemTotal = item.price * item.quantity;

          return (
            <CardSelectedContainer key={item.id}>
              <img src={imagePath} />
              <div className="title-amount">
                <span>{item.name}</span>
                <div className="main-controller">
                  <AmountController>
                    <Minus
                      size={14}
                      onClick={() => {
                        updateQuantity(item.id, item.quantity - 1);
                      }}
                      display={item.quantity <= 1 ? "none" : ""}
                    />
                    <span>{item.quantity}</span>
                    <Plus
                      size={14}
                      onClick={() => {
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                    />
                  </AmountController>
                  <RemoveController
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  >
                    <Trash size={16} />
                    <p>REMOVER</p>
                  </RemoveController>
                </div>
              </div>
              <span className="total-price">R$ {itemTotal.toFixed(2)}</span>
            </CardSelectedContainer>
          );
        })
        //   <img src={coffeeImg} />
        // <div className="title-amount">
        //   <span>{}</span>
        //   <div className="main-controller">
        //     <AmountController>
        //       <Minus size={14} />
        //       <span>1</span>
        //       <Plus size={14} />
        //     </AmountController>
        //     <RemoveController>
        //       <Trash size={16} />
        //       <p>REMOVER</p>
        //     </RemoveController>
        //   </div>
        // </div>
        // <span className="total-price">R$ 20,00</span>
      )}
    </>
  );
}
