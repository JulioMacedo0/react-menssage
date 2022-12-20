import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Chat } from "./pages/Chat/Chat";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

export function Router() {

  const {  user } = useAuth();
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={ user ? <Chat /> : <Home />} />
    </Routes>
  );
}
