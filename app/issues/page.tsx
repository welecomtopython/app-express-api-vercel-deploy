"use client";
import React from "react";
import { useCounter } from "../components/Context";
import Layout2 from "./infild";

const Layout= ()=> {
  const { state, dispatch } = useCounter();

  return (
    <div className="flex flex-col">
      <h1>Counter App</h1>

      <h1>Count data : {state.data}</h1>
      <h1>Count files : {state.files}</h1>
      <h1>Count new : {state.porjectnew}</h1>

      <button onClick={() => dispatch({ type: "SET", data: "fikes" })}>
        data
      </button>
      <button onClick={() => dispatch({ type: "File", data: "foledr" })}>
        file
      </button>
      <button onClick={() => dispatch({ type: "new", data: "file" })}>
        file
      </button>
      <button onClick={() => dispatch({ type: "new", data: "folder" })}>
        foledr
      </button>
      <Layout2/>
    </div>
  );
};

export default Layout;
