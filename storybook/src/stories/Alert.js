// Alert.js
import React from "react";

import * as S from "./styles";

function Alert({ type, title, message }) {
  return (
    <S.Container type={type}>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}

export default Alert;
