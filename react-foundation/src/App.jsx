import coreConceptsImg from "./assets/react-core-concepts.png";
import CoreComponents from "./assets/components.png";
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
      <img />
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
             title="Components"
             description="this is description from prob" />
            <CoreConcept
             title="state"
             description="this is description from prob"
              />
            <CoreConcept 
             title="jsx"
             description="this is description from prob"
             />
            <CoreConcept 
             title="random"
             description="this is description from prob"
             />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;