import styled from "styled-components";

const colors = {
  default: {
    background: "#e2e3e5",
    color: "#41464b",
  },
  success: {
    background: "#d1e7dd",
    color: "#0f5132",
  },
  danger: {
    background: "#f8d7da",
    color: "#842029",
  },
  warning: {
    background: "#fff3cd",
    color: "#664d03",
  },
  info: {
    background: "#cfe2ff",
    color: "#084298",
  },
};

export const Container = styled.div`
  background: ${({ type }) => colors[type].background};

  padding: 16px;
  border-radius: 0.25rem;

  color: ${({ type }) => colors[type].color};

  font-family: sans-serif;
`;

export const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const Message = styled.span`
  font-size: 0.9rem;
`;
