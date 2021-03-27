import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box
}
:root{
    --navBarHeight:10vh;
}
body{
    font-family: 'Poppins', sans-serif;
    user-select: none;
}
* a{
    text-decoration:none;
    color:inherit;
}
*  button{
        border:0;
        cursor:pointer;
        &:focus{
            outline:0;
        }
    }
`;

export default GlobalStyle;
