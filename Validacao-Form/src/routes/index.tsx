import { BrowserRouter, Routes, Route} from "react-router-dom";

import { DashboardPage, WriteNowPage } from "pages"; 

export function AppRoutes() {    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />

                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/write-now" element={<WriteNowPage />} />
            </Routes>
        </BrowserRouter>
    );
}