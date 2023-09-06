import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --primary-color: rgb(90,195,232);

}

  body {
    margin: 0;
    background-image: url("/world.png");
background-color: lightgray;
    font-family: system-ui;
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin-inline: auto;
   
  }
`;
