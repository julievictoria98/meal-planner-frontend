import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Når man bruger path med /about til sidst, kommer man ind på Recipe (den komponent), der indeholder html til recipe-siden */}
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
