import Section1 from "./Section1/Section1";
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from "./Section4/Section4";
import './Main.css'

function Main() {
  return (
    <div className="Main">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default Main;
