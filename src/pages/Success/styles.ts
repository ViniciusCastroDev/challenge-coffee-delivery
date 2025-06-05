import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-left: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};

  div {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
export const SuccessContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9.25rem;

  #ad {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme["purple-normal"]};
    border-radius: 50%;
  }
  #en {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme["yellow-normal"]};
    border-radius: 50%;
  }

  #pg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 50%;
  }

  .success-info-icons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 28rem;
    height: 16.875rem;
    padding: 2.5rem;
    border: 1px solid transparent;
    margin-left: 2rem;
    /* border-image: linear-gradient(to right, #ff0000, #00ff00) 1; */
    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    background: linear-gradient(#fafafa, #fafafa) padding-box,
      linear-gradient(45deg, #dbac2c, #8047f8) border-box;
  }

  img {
    width: 31.2rem;
    height: 18.3rem;
    margin-top: -0.7rem;
  }
`;
export const SuccessInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
  p {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    line-height: 130%;
    font-weight: 400;
  }
`;
