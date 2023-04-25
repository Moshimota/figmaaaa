import './App.css';
import { HeaderPage } from './Components/HeaderPage/HeaderPage';
import { NavbarPage } from './Components/NavbarPage/NavbarPage';
import { Section1 } from './Components/Section1/Section1';
import { Section2 } from './Components/Section2/Section2';
import { Section3 } from './Components/Section3/Section3';

function App() {
  return (
    <>
      <NavbarPage/>
      <HeaderPage/>
      <Section1/>
      <Section2/>
      <Section3/>
    </>
  );
}

export default App;
