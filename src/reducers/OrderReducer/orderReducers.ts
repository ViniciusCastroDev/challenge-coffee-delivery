import { produce } from "immer";
import { ActionTypesOrder } from "./actions";

export interface CartItem {
  id: string | null;
  name: string;
  price: string;
  quantity: number;
}

export interface Order {
  address: {
    cep: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
  };
  payment: "Crédito" | "Débito" | "Pix";
  items: CartItem[];
}

export interface OrderState {
  orders: Order[];
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypesOrder.COMPLETE_ORDER: {
      console.log("Recebido no reducer:", action.payload);

      return produce(state, (draft) => {
        draft.orders.push(action.payload);
      });
    }

    default:
      return state;
  }
}
