import Person from "./components/Person";
import Form from "./components/Form";
import List from "./components/List";
import Heading from "./components/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
