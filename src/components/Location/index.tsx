import { MapPin } from "@phosphor-icons/react";
import { LocationContainer } from "./styles";

export function Location() {
  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      <span>Barueri, SP</span>
    </LocationContainer>
  );
}
