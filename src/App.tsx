
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyProjects from "./pages/MyProjects";

import CustomCursor from "./components/CustomCursor";
import CursorEffects from "./components/CursorEffects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>

      {/* Interactive effects */}
      <CursorEffects />
      <CustomCursor />

      {/* Website pages */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
