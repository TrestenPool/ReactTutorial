// import hook
import { useState } from "react";

// additional Components
import Header from "./components/Header.jsx";

import TabButton from "./components/TabButton.jsx";

// array of images
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

import CoreConcept from "./components/CoreConcept.jsx";

// main component
function App() {
  // hook
  const [selectedTopic, setSelectedTopic] = useState();

  // click handler
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  function outputConditionally() {
    if (!selectedTopic) {
      return <p>Please select a topic</p>;
    } else {
      return (
        <div className="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((el) => (
              <CoreConcept {...el} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              Jsx
            </TabButton>
            <TabButton
              onClick={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TabButton>
          </menu>

          {/* output conditionally */}
          {outputConditionally()}
        </section>
      </main>
    </div>
  );
}

export default App;
