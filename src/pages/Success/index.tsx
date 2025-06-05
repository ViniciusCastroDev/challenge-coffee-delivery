import {
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
  SuccessInfos,
} from "./styles";

import motoboy from "../../assets/motoboy.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Success() {
  const { orders } = useContext(OrderContext);

  console.log(orders);

  return (
    <SuccessContainer>
      <SuccessHeader>
        <div>Uhu! Pedido confirmado</div>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessHeader>
      <SuccessContent>
        <div className="gradient-border">
          <div className="success-info-icons">
            <SuccessInfos>
              <span id="ad" className="background-icon">
                <MapPin weight="fill" color="white" width={16} height={16} />
              </span>
              <div className="address-header-text">
                <span>
                  Entrega em {orders[0].address.rua}, {orders[0].address.numero}
                </span>
                <p>
                  {orders[0].address.bairro} - {orders[0].address.cidade},{" "}
                  {orders[0].address.uf}
                </p>
              </div>
            </SuccessInfos>
            <SuccessInfos>
              <span id="en" className="background-icon">
                <Timer weight="fill" color="white" width={16} height={16} />
              </span>
              <div className="address-header-text">
                <span>Previsão de entrega</span>
                <p>20 a 30 minutos</p>
              </div>
            </SuccessInfos>
            <SuccessInfos>
              <span id="pg" className="background-icon">
                <CurrencyDollar
                  
                  color="white"
                  width={16}
                  height={16}
                />
              </span>
              <div className="address-header-text">
                <span>Pagamento na entrega</span>
                <p>{orders[0].payment}</p>
              </div>
            </SuccessInfos>
          </div>
        </div>
        <img src={motoboy} />
      </SuccessContent>
    </SuccessContainer>
  );
}
