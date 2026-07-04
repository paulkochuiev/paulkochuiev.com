import { Routes, Route, Navigate, type Location } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import AwardsPage from "./pages/AwardsPage";
import EducationPage from "./pages/EducationPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectsPage from "./pages/ProjectsPage";

export const ROUTE_PATHS = [
  "/about",
  "/projects",
  "/experience",
  "/skills",
  "/awards",
  "/education",
  "/contacts",
];

export const AppRoutes = ({ location }: { location?: Location }) => (
  <Routes location={location}>
    <Route path="/" element={<Navigate to="/about" replace />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/experience" element={<ExperiencePage />} />
    <Route path="/skills" element={<SkillsPage />} />
    <Route path="/awards" element={<AwardsPage />} />
    <Route path="/education" element={<EducationPage />} />
    <Route path="/contacts" element={<ContactsPage />} />
    <Route path="*" element={<Navigate to="/about" replace />} />
  </Routes>
);
