import styled from "styled-components";

export const HomeContainer = styled.header`
  .our-coffees {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.3rem;
    margin-left: 10rem;
  }
`;

export const HomeContainerHeader = styled.header`
  height: 34rem;
  width: 100vw;
  padding: 5.75rem 10rem;

  display: flex;
  flex-direction: row;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  .header-content {
    margin-right: 3.5rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: Bolder;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }

  .header-infos {
    margin-top: 4.1rem;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 1.25rem;
    width: 36.25rem;
  }
`;

export const IconInfo = styled.span`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  gap: 0.75rem;
`;

export const HomeContainerMain = styled.main`
  margin: 2rem 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  width: 70rem;
`;
