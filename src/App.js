import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Pages/Main";
import OeuvresEmotion from "./Pages/OeuvresEmotion";
import CommuniquerArtiste from "./Pages/CommuniquerArtiste";
import GalerieThematique from "./Pages/GalerieThematique";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/oeuvresemotion" element={<OeuvresEmotion />} />
                <Route path="/communiquerartiste" element={<CommuniquerArtiste />} />
                <Route path="/galeriethematique" element={<GalerieThematique />} />
                <Route path="*" element={<Navigate to="/main" />} />
            </Routes>
        </Router>
    )

}

export default App;