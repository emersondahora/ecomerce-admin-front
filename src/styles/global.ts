import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root {
      height:100%;
  }

  body {
    background: #d2d6de;
    color:#000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto Slab',sans-serif;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight:500;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration:none;
  }

  .spinner {
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`;
