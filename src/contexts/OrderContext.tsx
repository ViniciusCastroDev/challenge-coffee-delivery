import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  orderReducer,
  Order,
  OrderState,
} from "../reducers/OrderReducer/orderReducers";
import { ActionTypesOrder } from "../reducers/OrderReducer/actions";

interface OrderContextType {
  orders: Order[];
  completeOrder: (order: Order) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

const initialState: OrderState = {
  orders: [],
};

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    console.log("Orders atualizados:", orderState.orders);
  }, [orderState.orders]);

  function completeOrder(order: Order) {
    dispatch({
      type: ActionTypesOrder.COMPLETE_ORDER,
      payload: order,
    });
  }

  return (
    <OrderContext.Provider
      value={{
        orders: orderState.orders,
        completeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
