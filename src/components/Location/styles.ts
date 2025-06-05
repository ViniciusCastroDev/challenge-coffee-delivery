import styled from "styled-components";

export const LocationContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: row;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 10px;

  width: 9rem;
  height: 2.3rem;
  background-color: ${(props) => props.theme["purple-light"]};

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  span {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }
`;
