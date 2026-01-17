import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Recordings from "./pages/Recordings";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      // App.jsx
      <Route path="recordings" element={<Recordings/>}/>
     </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;