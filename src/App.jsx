import { createElement, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={}></Route>)
  );

  return <></>;
}

export default App;
