import coreConceptsImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from './data.js';
const titles = ["fundementals", "crucial", "core"]
function gotRandomInt(){
  return Math.floor(Math.random()*titles.length);
}

function Header() {
  return (
    <header>
      <img src={coreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[gotRandomInt()]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            <CoreConcept
             image={CORE_CONCEPTS[0].image}
             title={CORE_CONCEPTS[0].title}
             description={CORE_CONCEPTS[0].description} />
            <CoreConcept 
             image={CORE_CONCEPTS[1].image}
             title={CORE_CONCEPTS[1].title}
             description={CORE_CONCEPTS[1].description} /> 
             <CoreConcept 
             image={CORE_CONCEPTS[2].image}
             title={CORE_CONCEPTS[2].title}
             description={CORE_CONCEPTS[2].description} />
            <CoreConcept 
             image={CORE_CONCEPTS[3].image}
             title={CORE_CONCEPTS[3].title}
             description={CORE_CONCEPTS[3].description} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;