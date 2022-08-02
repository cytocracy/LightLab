import logo from "./logo.svg";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "./App.css";
import Script from "./components/Script";

function App() {
  return (
    <div className="App bg-neutral-400">
      <div className="dash flex justify-center w-full">
        <Script className="shrink"/>
      </div>
    </div>
  );
}

export default App;
