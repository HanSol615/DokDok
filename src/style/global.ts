import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'MaruBuri';
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.eot);
        src: url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.woff2) format("woff2"), url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/MaruBuri/MaruBuri-Regular.ttf) format("truetype");
    }

    html {
        box-sizing: border-box;
    }

    * {
        font-family: 'Pretendard-Regular', sans-serif;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        height: 100%;
        margin: 0;
        line-height: 1.5;
        color: #121212;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    textarea,
    input,
    button {
        font-size: 1rem;
        border: none;
        border-radius: 8px;
        padding: 0.5rem 0.75rem;
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
        background-color: white;
        line-height: 1.5;
        margin: 0;
    }

    button {
        color: #3992ff;
        font-weight: 500;
    }

    textarea:hover,
    input:hover,
    button:hover {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    }

    button:active {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
        transform: translateY(1px);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`