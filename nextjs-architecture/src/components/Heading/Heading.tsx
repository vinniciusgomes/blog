import HeadingProps from './interfaces';
import * as S from './styles';

export const Heading = ({
  children,
  level = 1,
  italic = false,
  bold = false,
}: HeadingProps) => (
  <S.Heading level={level} italic={italic} bold={bold}>
    {children}
  </S.Heading>
);
