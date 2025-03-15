import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginFrom from "./Lock/Components/LoginFrom";
import Register from "./Lock/Components/Register";
import Forget from "./Lock/Components/Forget";

function App() {
    return (

      //
        <Router>
            <Routes>
                <Route path="/" element={<LoginFrom />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Forget" element={<Forget />} />
            </Routes>
        </Router>
      //
    );
}

export default App;
