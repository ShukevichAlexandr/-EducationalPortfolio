
import { Header } from './lauout/header/Header';
import { Posts } from './lauout/sections/posts/Posts';
import { Main } from './lauout/sections/main/Main';
import { GlobalStyles } from './styles/Global.styled'; 
import { AboutUs } from './lauout/sections/aboutUs/AboutUs';
import { Catagoryies } from './lauout/sections/catagoryies/Catagoryies';
import { CpecialPost } from './lauout/sections/cpecialPost/CpecialPost';
import { ListOfAuthors } from './lauout/sections/listOfAuthors/ListOfAuthors';
import { Logos } from './lauout/sections/logos/Logos';
import { Testimony } from './lauout/sections/testimony/Testimony';
import { JoinOurTeam } from './lauout/sections/joinOurTeam/JoinOurTeam';
import { Footer } from './lauout/footer/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles /> 
      <Header/>
      <Main/>
      <Posts/>
      <AboutUs/>
      <Catagoryies/>
      <CpecialPost/>
      <ListOfAuthors/>
      <Logos/>
      <Testimony/>
      <JoinOurTeam/>
      <Footer/>
    </div>
  );
}

export default App;