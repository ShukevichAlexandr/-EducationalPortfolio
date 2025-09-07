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
  /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:18, Fmin:12})}; */

  font-family:'Sen', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  cursor: pointer; 

  @media (max-width:1200px) {
    font-size: 16px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
}


//  Inter Regular 400
p {
  /* ${font({family: "'Inter', sans-serif", weight: 400, Fmax:16, Fmin:13})}; */
  

  font-family:'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  letter-spacing: 0.062em; 


  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 13px;
  }
}




//  Inter Regular 400
a.nameAutor,
span.postMetadata {   
  /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:16, Fmin:12})};*/
  /* letter-spacing: 0.062em; */

  font-family: 'Sen', sans-serif ;
  font-weight: 700;
  font-size: 16px;
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

  
  @media (max-width:1200px) {
    font-size: 15px;
    }

    @media (max-width:1000px) {
      font-size: 14px;
    }

    @media (max-width:500px) {
      font-size: 12px;
    }
}




label {
    /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:16, Fmin:12})}; */

    font-family: 'Sen', sans-serif ;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.062em;
    line-height: 1.2;

    @media (max-width:1200px) {
    font-size: 15px;
    }

    @media (max-width:1000px) {
      font-size: 14px;
    }

    @media (max-width:500px) {
      font-size: 12px;
    }
}

h2 {
  /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:36, Fmin:24})};*/
  font-family: 'Inter', sans-serif ;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.055em;  

  @media (max-width:1200px) {
    font-size: 32px;
  }

  @media (max-width:1000px) {
    font-size: 28px;
  }

  @media (max-width:500px) {
    font-size: 24px;
  }
}

h3 {
  /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:28, Fmin:16})}; */

  font-family: 'Sen', sans-serif ;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.055em;  

  @media (max-width:1200px) {
    font-size: 24px;
  }

  @media (max-width:1000px) {
    font-size: 20px;
  }

  @media (max-width:500px) {
    font-size: 16px;
  }

}

h4 {
  /* ${font({family: "'Sen', sans-serif", weight: 700, Fmax:24, Fmin:18})}; */

  font-family: 'Sen', sans-serif ;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0px;  

  @media (max-width:1200px) {
    font-size: 22px;
  }

  @media (max-width:1000px) {
    font-size: 20px;
  }

  @media (max-width:500px) {
    font-size: 18px;
  }

}

a.rightSideLinkFeatured,
a.linkHeader {
    /* ${font({family: "'Inter', sans-serif", weight: 400, Fmax:16, Fmin:12})};
    letter-spacing: 0px;   */

    font-family: 'Inter', sans-serif ;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0px;  

  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
}


a{
  text-decoration: none;
}



`

