import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Pages/Main";
import OeuvresEmotion from "./Pages/OeuvresEmotion";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/oeuvresemotion" element={<OeuvresEmotion />} />
                <Route path="*" element={<Navigate to="/main" />} />
            </Routes>
        </Router>
    )

}

export default App;