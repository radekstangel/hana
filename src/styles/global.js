// dependencies
import { createGlobalStyle } from "styled-components";

// styles settings
import { color, font, media } from "./theme";

const GlobalStyles = createGlobalStyle`
  body {

    ${media.small} {
      font-size: ${18 / 16}rem;
    }

    ${media.medium} {
      font-size: ${20 / 16}rem;
    }

    ${media.large} {
      font-size: ${22 / 16}rem;
    }
  }

  /* Typography _________________________ */

  /* type reset */
  h1, h2, h3, p, ul, ol, li {
  margin: 0;
  padding: 0;
  }
  /* vertical rhythm */
  p, ul, ol {
    margin-bottom: ${font.lineHeight}em;
  }

  /* headings */
  h1, h2, h3 {
    color: ${color.black};
    font-family: ${font.family.light};
    font-weight: ${font.weight.light};
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
  h1 { font-size: 3.157em; }
  h2 { font-size: 2.369em; }
  h3 { font-size: 1.777em; }

  /* link */
  a {
    color: ${color.primary};
    text-decoration: none;

    &:active, &:focus, &:hover {
      color: ${color.primaryHover};
      outline-width: 0;
    }
  }

  /* lists */
  ul, ol {
    list-style-position: inside;
    margin-left: 1.5em;

    & & {
      margin-left: 1em;
      margin-bottom: 0;
    }
  }

  /* text */
  b, strong { font-weight: ${font.weight.bold}; }
`;

export default GlobalStyles;
