// dependencies
import { createGlobalStyle } from "styled-components";
// styles
import { color, media } from "./settings";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${color.white};
    color: ${color.blackLight};
    font-size: ${18 / 16}rem;
    /* ${media.large} {
      font-size: ${20 / 16}rem;
    } */
  }

  /* headings */
  h2 {
    color: ${color.black};
    font-size: 2.369em;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  /* link */
  a {
    color: ${color.primary};
    font-size: 1rem;
    text-decoration: none;

    &:active, &:focus, &:hover {
      color: ${color.primaryHover};
      outline-width: 0;
    }
  }

  /* list */
  ol {
    color: ${color.gray};
    font-size: 14px;
    padding-left: 24px;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
