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
  ${font({family: "'Sen', sans-serif", weight: 700, Fmax:18, Fmin:12})};
  letter-spacing: 0px;
    cursor: pointer;  
}


//  Inter Regular 400
p {
  ${font({family: "'Inter', sans-serif", weight: 400, Fmax:16, Fmin:13})};
  line-height: 175%;
  letter-spacing: 0.062em; 
}




//  Inter Regular 400
a.nameAutor,
span.postMetadata {   
  ${font({family: "'Sen', sans-serif", weight: 700, Fmax:16, Fmin:12})};
  letter-spacing: 0.062em;

}

a.nameAutor{
  color: ${theme.colors.purple}
}



//  Inter Regular 600
span.mainUpperCaseText {   
font-family: 'Inter', sans-serif ;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;
}




label {
    ${font({family: "'Sen', sans-serif", weight: 700, Fmax:16, Fmin:12})};
    letter-spacing: 0.062em;
    line-height: 1.2;
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
    ${font({family: "'Inter', sans-serif", weight: 400, Fmax:16, Fmin:12})};
    letter-spacing: 0px;  
}


a{
  text-decoration: none;
}



`

