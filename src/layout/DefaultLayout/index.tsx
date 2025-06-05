import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Nav } from "../../components/Nav";


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Nav />
      <Outlet />
    </LayoutContainer>
  );
}
