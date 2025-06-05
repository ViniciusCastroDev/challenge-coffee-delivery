import {
  Address,
  AddressContent,
  AddressHeader,
  ButtonPayment,
  CheckoutContainer,
  CompleteOrderContainer,
  ErrorMessage,
  Payment,
  ProdutcsSelectedCard,
  ProdutcsSelectedContainer,
  ProdutcsSelectedFooter,
} from "./styles";
import { DynamicIcon } from "../../components/DynamicIcon";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { CardSelected } from "../../components/CardSelected";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AddressForm } from "./components/AddressForm";
import { OrderContext } from "../../contexts/OrderContext";

const completedOrderSchema = zod.object({
  address: zod.object({
    cep: zod.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
    rua: zod.string().min(3, "Informe a rua"),
    numero: zod.string().min(1, "Informe o número"),
    complemento: zod.string().optional(),
    bairro: zod.string().min(2, "Informe o bairro"),
    cidade: zod.string().min(2, "Informe a cidade"),
    uf: zod.enum(
      [
        "Selecione o estado",
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
      { errorMap: () => ({ message: "UF inválido" }) }
    ),
  }),
  payment: zod.enum(["Crédito", "Débito", "Pix"], {
    errorMap: () => ({ message: "Selecione a forma de pagamento" }),
  }),
});

export type typeCompletedOrderSchema = zod.infer<typeof completedOrderSchema>;

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState<
    "Crédito" | "Débito" | "Pix" | null
  >(null);

  const completedOrderForm = useForm<typeCompletedOrderSchema>({
    resolver: zodResolver(completedOrderSchema),
    defaultValues: {
      address: {
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "AC",
      },
      payment: undefined,
    },
  });

  useEffect(() => {
    if (selectedPayment) {
      completedOrderForm.setValue("payment", selectedPayment);
    }
  }, [selectedPayment, completedOrderForm]);

  const { cart, clearCart } = useContext(CartContext);
  const { completeOrder } = useContext(OrderContext);

  const totalPriceItens = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const deliveryFee = 5;
  const totalPricePurchase = totalPriceItens + deliveryFee;

  const navigate = useNavigate();
  function handleCompleteOrder(data: typeCompletedOrderSchema) {
    completeOrder({
      address: data.address,
      payment: data.payment,
      items: cart,
    });
    clearCart();
    reset();
    navigate("/success");
  }

  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = completedOrderForm;

  const completedCep = watch("address.cep");
  const isSubmitDisabled = !completedCep;

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCompleteOrder)} action="">
      <FormProvider {...completedOrderForm}>
        <CompleteOrderContainer>
          <p>Complete seu pedido</p>
          <Address>
            <AddressHeader>
              <DynamicIcon
                icon={<MapPinLine />}
                iconColor="yellow-dark"
                iconHeight={10}
                iconWidth={10}
              />
              <div className="address-header-text">
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeader>
            <AddressForm />
          </Address>
          <Payment>
            <AddressHeader>
              <DynamicIcon
                icon={<CurrencyDollar size={40} />}
                iconColor="purple-normal"
              />
              <div className="address-header-text">
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </AddressHeader>
            <AddressContent>
              <ButtonPayment
                className={selectedPayment === "Crédito" ? "active" : ""}
                onClick={() => setSelectedPayment("Crédito")}
                type="button"
              >
                <DynamicIcon
                  iconHeight={1}
                  iconWidth={1}
                  iconColor={"purple-normal"}
                  icon={<CreditCard />}
                />
                <p>CARTÃO DE CRÉDITO</p>
              </ButtonPayment>
              <ButtonPayment
                type="button"
                className={selectedPayment === "Débito" ? "active" : ""}
                onClick={() => setSelectedPayment("Débito")}
              >
                <DynamicIcon
                  icon={<Bank />}
                  iconHeight={1}
                  iconWidth={1}
                  iconColor={"purple-normal"}
                />
                <p>CARTÃO DE DÉBITO</p>
              </ButtonPayment>
              <ButtonPayment
                type="button"
                className={selectedPayment === "Pix" ? "active" : ""}
                onClick={() => setSelectedPayment("Pix")}
              >
                <DynamicIcon
                  icon={<Money />}
                  iconHeight={1}
                  iconWidth={1}
                  iconColor={"purple-normal"}
                />
                <p>DINHEIRO/PIX</p>
              </ButtonPayment>
              {errors.payment && (
                <ErrorMessage style={{ color: "red", fontSize: "12px" }}>
                  {errors.payment.message}
                </ErrorMessage>
              )}
            </AddressContent>
          </Payment>
        </CompleteOrderContainer>
        <ProdutcsSelectedContainer>
          <p className="title-product-selected">Cafés selecionados</p>
          <ProdutcsSelectedCard>
            <CardSelected />
            <NavLink to="/">Adicionar mais itens</NavLink>
            <ProdutcsSelectedFooter>
              <div className="total-itens">
                <p>Total de itens</p>
                <span>R$ {totalPriceItens.toFixed(2)}</span>
              </div>
              <div className="delivery-fee">
                <p>Entrega</p>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="total-amount">
                <p>Total</p>
                <span>R$ {totalPricePurchase.toFixed(2)}</span>
              </div>
              <button disabled={isSubmitDisabled} type="submit">
                {" "}
                CONFIRMAR PEDIDO
              </button>
            </ProdutcsSelectedFooter>
          </ProdutcsSelectedCard>
        </ProdutcsSelectedContainer>
      </FormProvider>
    </CheckoutContainer>
  );
}
