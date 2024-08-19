import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Write from "./pages/Write";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
            <Route path="/write" Component={Write} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
