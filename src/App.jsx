import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import RecordingsPage from "./pages/RecordingsPage";
import LiveLocationPage from "./pages/LiveLocationPage";
import PassLocationPage from "./pages/PassLocationPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="recordings" element={<RecordingsPage/>}/>
        <Route path="live-location" element={<LiveLocationPage/>}/>
        <Route path="pass-location" element={<PastLocationPage/>}/>
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
}

export default App;