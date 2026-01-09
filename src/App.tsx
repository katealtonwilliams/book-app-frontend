import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const FirstPage = lazy(() => import("./pages/Library"));

function App() {
  const routes: React.ReactElement = (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Library" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  return routes;
}

export default App;
