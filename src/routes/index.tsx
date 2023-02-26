import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { WriteNowPage } from "../pages/WriteNow";

export function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/escrever-agora" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
};