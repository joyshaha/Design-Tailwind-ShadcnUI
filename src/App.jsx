import { BrowserRouter, Routes, Route } from "react-router";
import TranzoLandingPage from "@/pages/tranzo/TranzoLandingPage";
import Index from "@/pages/home/Index";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tranzo" element={<TranzoLandingPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
