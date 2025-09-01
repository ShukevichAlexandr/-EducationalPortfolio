import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { font } from "./Common";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;

    font-family: 'Sen', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
}


button{
    cursor: pointer;
    font-family: 'Sen', sans-serif ;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;  
}


//  Inter Regular 400
p{
  font-family: 'Inter', sans-serif ;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 1px;
}




//  Inter Regular 400
span.nameAutor,
#postMetadata {   
  font-family: 'Inter', sans-serif ;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0px;

}



//  Inter Regular 600
span.mainUpperCaseText {   
font-family: 'Inter', sans-serif ;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;
}


//  Inter Black 900
span.mainBoldWord {
  font-family: 'Inter', sans-serif ;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;  
}



h2 {
  ${font({family: "'Sen', sans-serif", weight: 700, Fmax:36, Fmin:24})};
  letter-spacing: -0.055em;  
}

h3 {
  ${font({family: "'Sen', sans-serif", weight: 700, Fmax:28, Fmin:16})};
  letter-spacing: -0.055em; 

}

h4 {
  ${font({family: "'Sen', sans-serif", weight: 700, Fmax:24, Fmin:18})};
  letter-spacing: 0px;  
}

a.rightSideLinkFeatured,
a.linkHeader {
    font-family: 'Inter' sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0px;
}


a{
  text-decoration: none;
}



`

