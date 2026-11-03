import coreConceptsImg from "./assets/react-core-concepts.png";

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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;