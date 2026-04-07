import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Competitions from "./pages/Competitions";
import CompetitionMatches from "./pages/CompetitionMatches";
import Teams from "./pages/Teams";
import TeamMatches from "./pages/TeamMatches";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Competitions />} />
                    <Route path="/competitions/:id" element={<CompetitionMatches />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/teams/:id" element={<TeamMatches />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;