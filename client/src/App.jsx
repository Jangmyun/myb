import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
