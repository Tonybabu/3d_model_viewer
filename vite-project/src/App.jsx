import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FileConverter from "./components/FileConverter";
import Viewer from "./components/Viewer";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center space-y-8 p-10 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<FileConverter />} />
          <Route path="/viewer" element={<Viewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
