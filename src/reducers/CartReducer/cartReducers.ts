import { produce } from "immer";
import { ActionTypesCart } from "./actions";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypesCart.ADD_TO_CART: {
      return produce(state, (draft) => {
        if (!draft.items) {
          draft.items = []; // Garante que nunca será 'undefined'
        }
        const existingProductIndex = draft.items.findIndex(
          (item) => item.id === action.payload.newProduct.id
        );
        if (existingProductIndex >= 0) {
          draft.items[existingProductIndex].quantity =
            action.payload.newProduct.quantity;
        } else {
          draft.items.push(action.payload.newProduct);
        }
      });
    }

    case ActionTypesCart.UPDATE_QUANTITY: {
      return produce(state, (draft) => {
        const existingProductIndex = draft.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingProductIndex < 0) return state;
        draft.items[existingProductIndex].quantity = action.payload.quantity;

        console.log("Item recebido no reducer:", action.payload);
      });
    }

    case ActionTypesCart.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
    }

    case ActionTypesCart.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.items = [];
      });
    }

    default:
      return state;
  }
}
