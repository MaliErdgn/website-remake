import React from "react";
import './index.css'
import sections from "./sections.json";
import Section from "./components/Section";

function App() {
  return (
    <> 
      <div className="container">
        {sections.map((section) => (
          <Section title={section.title} description={section.description} key={section.id} />
        ))}
      </div>
    </>
  );
}

export default App;
