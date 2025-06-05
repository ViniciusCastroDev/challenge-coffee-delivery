import {
  HomeContainer,
  HomeContainerHeader,
  HomeContainerMain,
  IconInfo,
} from "./styles";
import coffeeImg from "../../assets/coffeePng.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { DynamicIcon } from "../../components/DynamicIcon";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <HomeContainer>
      <HomeContainerHeader>
        <div className="header-content">
          <div className="header-title">
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </div>
          <div className="header-infos">
            <IconInfo>
              <DynamicIcon
                iconBackgroundColor="yellow-dark"
                iconColor="base-white"
                icon={<ShoppingCart size={16} weight="fill" />}
              />
              <p>Compra simples e segura</p>
            </IconInfo>
            <IconInfo>
              <DynamicIcon
                iconBackgroundColor="base-text"
                iconColor="base-white"
                icon={<Package size={16} weight="fill" />}
              />
              <p>Embalagem mantém o café intacto</p>
            </IconInfo>
            <IconInfo>
              <DynamicIcon
                iconBackgroundColor="yellow-normal"
                iconColor="base-white"
                icon={<Timer size={16} weight="fill" />}
              />
              <p>Entrega rápida e rastreada</p>
            </IconInfo>
            <IconInfo>
              <DynamicIcon
                iconBackgroundColor="purple-normal"
                iconColor="base-white"
                icon={<Coffee size={16} weight="fill" />}
              />
              <p>O café chega fresquinho até você</p>
            </IconInfo>
          </div>
        </div>
        <img src={coffeeImg} />
      </HomeContainerHeader>
      <h2 className="our-coffees">Nossos cafés</h2>
      <HomeContainerMain>
        <Card
          id={"Expresso-01"}
          imageName="Expresso"
          price={5.9}
          badges={["Tradicional"]}
          description="O tradicional café feito com água quente e grãos moídos"
        />
        <Card
          id={"ExpressoAM-02"}
          imageName="Expresso Americano"
          price={9.9}
          badges={["Tradicional"]}
          description="Expresso diluído, menos intenso que o tradicional"
        />
        <Card
          id={"ExpressoCR-03"}
          imageName="Expresso Cremoso"
          price={12.99}
          badges={["Tradicional"]}
          description="Café expresso tradicional com espuma cremosa"
        />
        <Card
          id={"ExpressoGE-04"}
          imageName="Expresso Gelado"
          price={7.99}
          badges={["Tradicional", "Gelado"]}
          description="Bebida preparada com café expresso e cubos de gelo"
        />
        <Card
          id={"CafeComLeite-05"}
          imageName="Café com Leite"
          price={8.99}
          badges={["Tradicional", "Com leite"]}
          description="Meio a meio de expresso tradicional com leite vaporizado"
        />
        <Card
          id={"Latte-06"}
          imageName="Latte"
          price={9.99}
          badges={["Tradicional", "Com leite"]}
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        />
        <Card
          id={"Capuccino-07"}
          imageName="Capuccino"
          price={11.99}
          badges={["Tradicional", "Com leite"]}
          description="Bebida com canela feita de doses iguais de café, leite e espuma"
        />
        <Card
          id={"Macchiato-08"}
          imageName="Macchiato"
          price={11.99}
          badges={["Tradicional", "Com leite"]}
          description="Café expresso misturado com um pouco de leite quente e espuma"
        />
        <Card
          id={"Mochaccino-09"}
          imageName="Mochaccino"
          price={13.99}
          badges={["Tradicional", "Com leite"]}
          description="Café expresso com calda de chocolate, pouco leite e espuma"
        />
        <Card
          id={"ChocolateQuente-10"}
          imageName="Chocolate Quente"
          price={14.99}
          badges={["Especial", "Com leite"]}
          description="Bebida feita com chocolate dissolvido no leite quente e café"
        />
        <Card
          id={"Cubano-11"}
          imageName="Cubano"
          price={14.99}
          badges={["Especial", "Alcoólico", "Gelado"]}
          description="Drink gelado de café expresso com rum, creme de leite e hortelã"
        />
        <Card
          id={"Havaiano-12"}
          imageName="Havaiano"
          price={14.99}
          badges={["Especial", "Alcoólico", "Gelado", "teste"]}
          description="Bebida adocicada preparada com café e leite de coco"
        />
        <Card
          id={"Árabe-13"}
          imageName="Árabe"
          price={14.99}
          badges={["Especial"]}
          description="Bebida preparada com grãos de café árabe e especiarias"
        />
        <Card
          id={"Irlandês-14"}
          imageName="Irlandês"
          price={14.99}
          badges={["Especial", "Alcoólico"]}
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        />
      </HomeContainerMain>
    </HomeContainer>
  );
}
