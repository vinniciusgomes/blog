import { font } from 'common/styles/theme';
import styled, { css } from 'styled-components';

import HeadingProps from './interfaces';

const headingModifier = {
  level: {
    1: () => css`
      font-size: ${font.sizes.heading01};
      line-height: ${font.lineHeight.heading01};
    `,
    2: () => css`
      font-size: ${font.sizes.heading02};
      line-height: ${font.lineHeight.heading02};
    `,
    3: () => css`
      font-size: ${font.sizes.heading03};
      line-height: ${font.lineHeight.heading03};
    `,
    4: () => css`
      font-size: ${font.sizes.heading04};
      line-height: ${font.lineHeight.heading04};
    `,
    5: () => css`
      font-size: ${font.sizes.heading05};
      line-height: ${font.lineHeight.heading05};
    `,
    6: () => css`
      font-size: ${font.sizes.heading06};
      line-height: ${font.lineHeight.heading06};
    `,
  },
  bold: () => css`
    font-weight: ${font.bold};
  `,
  italic: () => css`
    font-style: italic;
  `,
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({ level, italic, bold }) => css`
    font-weight: ${font.normal};
    font-style: normal;
    font-family: ${font.family.Inter};
    ${!!level && headingModifier.level[level]()}
    ${!!bold && headingModifier.bold()}
    ${!!italic && headingModifier.italic()}
  `}
`;
