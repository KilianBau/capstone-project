import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --primary-color: #A9BEBE;

}

  body {
    margin: 0;
    background-image: url("/world.png");
background-color: lightgray;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin-inline: auto;
   position: relative;

  }

  body::before {
  content: "";
  background-image: url("/world.png");
filter: contrast(60%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh;
  z-index: -1;
  opacity: 1.2;

}
`;
