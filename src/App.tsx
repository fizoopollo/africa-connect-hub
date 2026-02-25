import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TradehubDirectory from "./pages/TradehubDirectory";
import AfrifyLanding from "./pages/AfrifyLanding";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import PricingPage from "./pages/Pricing";
import StoreAnalytics from "./pages/StoreAnalytics";
import FashionTemplate from "./pages/templates/FashionTemplate";
import FoodTemplate from "./pages/templates/FoodTemplate";
import ElectronicsTemplate from "./pages/templates/ElectronicsTemplate";
import HandmadeTemplate from "./pages/templates/HandmadeTemplate";
import ServicesTemplate from "./pages/templates/ServicesTemplate";
import BeautyTemplate from "./pages/templates/BeautyTemplate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tradehub" element={<TradehubDirectory />} />
          <Route path="/afrify" element={<AfrifyLanding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/store/analytics" element={<StoreAnalytics />} />
          <Route path="/afrify/templates/fashion" element={<FashionTemplate />} />
          <Route path="/afrify/templates/food" element={<FoodTemplate />} />
          <Route path="/afrify/templates/electronics" element={<ElectronicsTemplate />} />
          <Route path="/afrify/templates/handmade" element={<HandmadeTemplate />} />
          <Route path="/afrify/templates/services" element={<ServicesTemplate />} />
          <Route path="/afrify/templates/beauty" element={<BeautyTemplate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
