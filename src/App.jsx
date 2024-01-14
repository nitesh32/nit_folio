import "./App.css";
import Bar from "./components/Bar";
import React from "react";
import Particle from "./components/Particle";
import Layout from "./components/Layout";


function App() {
  console.log("hub");
  return (
    <>
      <Bar></Bar>
      <Layout></Layout>
      <Particle></Particle>
    </>
  );
}

export default App;
