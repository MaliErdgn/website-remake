import React from "react";
import "../index.css";
import sections from "../sections.json";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="gridBox">
          <Grid container spacing={2}>
            {sections.map((section) => (
              <Section
                mdValue={section.mdValue}
                title={section.title}
                description={section.description}
                key={section.id}
                route={section.Component}
              />
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}

export default Home;
