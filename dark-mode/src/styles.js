import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
`;

export const User = styled.a`
  font-size: 1.1rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const SwitchButton = styled.button`
  width: 70px;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;

  img {
    width: 100%;
    height: auto;
  }
`;
