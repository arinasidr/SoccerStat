import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competitions from "./pages/Competitions";
import CompetitionMatches from "./pages/CompetitionMatches";
import Teams from "./pages/Teams";
import TeamMatches from "./pages/TeamMatches";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Competitions />} />
                <Route path="/competitions/:id" element={<CompetitionMatches />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/:id" element={<TeamMatches />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;