import { CORE_CONCEPTS as coreConceptsData } from "./data";
import { CoreConcept } from "./CoreConcept";
import { Header } from "./Header";
import { TabButton } from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
import { TabContent } from "./TabContent";

function App() {
  const [selectedTopic, setSlectedTopic] = useState();

  function onClick(selectedComp) {
    setSlectedTopic(selectedComp);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {coreConceptsData.map((concept) => {
              return <CoreConcept key={concept.title} {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => onClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => onClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => onClick("props")}>Props</TabButton>
            <TabButton onClick={() => onClick("state")}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Select a Topic !</p>}
          {selectedTopic ? <TabContent {...EXAMPLES[selectedTopic]} /> : null}
        </section>
      </main>
    </div>
  );
}

export default App;
