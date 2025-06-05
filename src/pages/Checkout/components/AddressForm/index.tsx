import { useEffect } from "react";
import {
  AddressInputs,
  ErrorMessage,
  InputComponent,
  SelectComponent,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { typeCompletedOrderSchema } from "../..";

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<typeCompletedOrderSchema>();

  // useEffect(() => {
  //   console.log("FormErrors", errors);
  // }, [errors]);

  const addressErrors = errors.address;

  return (
    <AddressInputs>
      <InputComponent
        {...register("address.cep")}
        type="number"
        id="CEP"
        min={0}
        width={12.5}
        placeholder="CEP"
      />
      {addressErrors?.cep && (
        <ErrorMessage>{addressErrors.cep.message}</ErrorMessage>
      )}
      <InputComponent
        id="street"
        width={35}
        placeholder="Rua"
        {...register("address.rua")}
      />
      {addressErrors?.rua && (
        <ErrorMessage>{addressErrors.rua.message}</ErrorMessage>
      )}
      <div className="address-complement">
        <InputComponent
          {...register("address.numero")}
          type="number"
          id="number"
          min={0}
          width={12.5}
          placeholder="Número"
        />
        {addressErrors?.numero && (
          <ErrorMessage>{addressErrors.numero.message}</ErrorMessage>
        )}
        <InputComponent
          {...register("address.complemento")}
          id="complement"
          width={21.75}
          placeholder="Complemento (opcional)"
        />
        {addressErrors?.complemento && (
          <ErrorMessage>{addressErrors.complemento.message}</ErrorMessage>
        )}
      </div>
      <div className="address-city-state">
        <InputComponent
          id="neigh"
          width={12.5}
          placeholder="Bairro"
          {...register("address.bairro")}
        />
        {addressErrors?.bairro && (
          <ErrorMessage>{addressErrors.bairro.message}</ErrorMessage>
        )}
        <InputComponent
          id="city"
          width={17.2}
          placeholder="Cidade"
          {...register("address.cidade")}
        />
        {addressErrors?.cidade && (
          <ErrorMessage>{addressErrors.cidade.message}</ErrorMessage>
        )}
        <SelectComponent width={3.75} {...register("address.uf")}>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </SelectComponent>
        {addressErrors?.uf && (
          <ErrorMessage>{addressErrors.uf.message}</ErrorMessage>
        )}
        {/* <select id="state" width={3.75} placeholder="UF" {...register("uf")}>
          1 2 3
        </select> */}
      </div>
    </AddressInputs>
  );
}
