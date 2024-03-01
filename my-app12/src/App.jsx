import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}>
        </Route>
        <Route path="/posts" element={<Homepage />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post/:id" element={<Single />}>
        </Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/settings" element={<Settings />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
