import { createContext, ReactNode, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer/cartReducers";
import { ActionTypesCart } from "../reducers/CartReducer/actions";

interface Products {
  id: string | null;
  name: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cart: Products[];
  addToCart: (product: Products) => void;
  removeFromCart: (id: string | null) => void;
  updateQuantity: (id: string | null, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-coffee-shop:cart-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@ignite-coffee-shop:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  function addToCart(data: Products) {
    const newProduct: Products = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    };
    dispatch({
      type: ActionTypesCart.ADD_TO_CART,
      payload: {
        newProduct: data,
      },
    });
  }
  function updateQuantity(id: string | null, quantity: number) {
    dispatch({
      type: ActionTypesCart.UPDATE_QUANTITY,
      payload: {
        id,
        quantity,
      },
    });
  }

  function removeFromCart(id: string | null) {
    dispatch({
      type: ActionTypesCart.REMOVE_FROM_CART,
      payload: {
        id,
      },
    });
  }

  function clearCart() {
    dispatch({
      type: ActionTypesCart.CLEAR_CART,
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        // cartState,
        // cycles,
        // activeCycle,
        // activeCycleId,
        // markCurrentCycleAsFinished,
        // amountSecondsPassed,
        // setSecondsPassed,
        // createNewCycle,
        // stopCycle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
