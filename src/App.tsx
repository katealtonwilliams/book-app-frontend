import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const FirstPage = lazy(() => import("./pages/FirstPage"));

function App() {
  const routes: React.ReactElement = (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/FirstPage" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  return routes;
}

export default App;
