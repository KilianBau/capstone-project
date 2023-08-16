import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --primary-color: turquoise;
}

  body {
    margin: 0;
    font-family: system-ui;
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin-inline: auto;
  }
`;
