import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import NamePage from "./views/NamePage"
import Addform from "./views/Addform"
import EditForm from "./views/EditForm"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NamePage />} />
        <Route path="/add-name" element={<Addform />} />
        <Route path="/edit-name" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
