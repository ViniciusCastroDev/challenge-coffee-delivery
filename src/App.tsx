import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { CartContextProvider } from "./contexts/CartContext";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
