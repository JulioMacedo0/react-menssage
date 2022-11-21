
import { Routes, Route } from "react-router-dom";
import { Chat } from "./pages/Chat/Chat";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";



export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />

    </Routes>
  );
}
