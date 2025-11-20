import { BrowserRouter, Routes, Route } from "react-router";
import TranzoLandingPage from "@/pages/tranzo/TranzoLandingPage";
import Index from "@/pages/home/Index";
import NotFound from "@/pages/NotFound";
import { Basic } from "@/pages/home/Basic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/basic" element={<Index />} />
        <Route path="/tranzo" element={<TranzoLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
