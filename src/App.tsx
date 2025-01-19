
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModulePage from "./pages/ModulePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
