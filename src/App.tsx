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
import BeautyGalleryTemplate from "./pages/templates/beauty/BeautyGalleryTemplate";
import BeautyTemplatePage from "./pages/templates/beauty/BeautyTemplatePage";
import NoteableTemplate from "./pages/templates/services/NoteableTemplate";
import TattooTemplate from "./pages/templates/services/TattooTemplate";
import GeniusTemplate from "./pages/templates/services/GeniusTemplate";
import WorkflowTemplate from "./pages/templates/services/WorkflowTemplate";
import GrainTemplate from "./pages/templates/services/GrainTemplate";
import SmileTemplate from "./pages/templates/services/SmileTemplate";
import PanoramaTemplate from "./pages/templates/services/PanoramaTemplate";
import PrintingTemplate from "./pages/templates/services/PrintingTemplate";
import SonikTemplate from "./pages/templates/services/SonikTemplate";
import LeapTemplate from "./pages/templates/services/LeapTemplate";
import AirconTemplate from "./pages/templates/services/AirconTemplate";
import EnthusiastTemplate from "./pages/templates/services/EnthusiastTemplate";
import AfrifyTemplatesStore from "./pages/AfrifyTemplatesStore";
import ArtTemplatePage from "./pages/templates/art/ArtTemplatePage";
import EtchTemplate from "./pages/templates/art/EtchTemplate";
import BrutalistTemplate from "./pages/templates/art/BrutalistTemplate";
import SunsetTemplate from "./pages/templates/art/SunsetTemplate";
import MonochromeTemplate from "./pages/templates/art/MonochromeTemplate";
import MioTemplate from "./pages/templates/art/MioTemplate";
import ExhibitTemplate from "./pages/templates/art/ExhibitTemplate";
import PortfolioTemplate from "./pages/templates/art/PortfolioTemplate";
import WrongTemplate from "./pages/templates/art/WrongTemplate";
import OceanTemplate from "./pages/templates/art/OceanTemplate";
import AnthologistTemplate from "./pages/templates/art/AnthologistTemplate";
import TotemTemplate from "./pages/templates/art/TotemTemplate";
import DarkroomTemplate from "./pages/templates/art/DarkroomTemplate";
import ClayTemplate from "./pages/templates/art/ClayTemplate";
import OkinawaTemplate from "./pages/templates/art/OkinawaTemplate";
import AutoTemplate from "./pages/templates/auto/AutoTemplate";
import MaranelloTemplate from "./pages/templates/auto/MaranelloTemplate";
import GarageAutoTemplate from "./pages/templates/auto/GarageTemplate";
import TorqueTemplate from "./pages/templates/auto/TorqueTemplate";
import FleetTemplate from "./pages/templates/auto/FleetTemplate";
import NitroTemplate from "./pages/templates/auto/NitroTemplate";
import DriveTemplate from "./pages/templates/auto/DriveTemplate";
import BagsTemplate from "./pages/templates/bags/BagsTemplate";
import CourierTemplate from "./pages/templates/bags/CourierTemplate";
import PrestigeTemplate from "./pages/templates/bags/PrestigeTemplate";
import VoyageTemplate from "./pages/templates/bags/VoyageTemplate";
import ToteTemplate from "./pages/templates/bags/ToteTemplate";
import LeatherTemplate from "./pages/templates/bags/LeatherTemplate";
import GalleriaTemplate from "./pages/templates/bags/GalleriaTemplate";
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
          <Route path="/afrify/templates-store" element={<AfrifyTemplatesStore />} />
          <Route path="/afrify/templates/fashion" element={<FashionTemplate />} />
          <Route path="/afrify/templates/food" element={<FoodTemplate />} />
          <Route path="/afrify/templates/electronics" element={<ElectronicsTemplate />} />
          <Route path="/afrify/templates/handmade" element={<HandmadeTemplate />} />
          <Route path="/afrify/templates/services" element={<ServicesTemplate />} />
          <Route path="/afrify/templates/beauty" element={<BeautyGalleryTemplate />} />
          <Route path="/afrify/templates/beauty/:slug" element={<BeautyTemplatePage />} />
          <Route path="/afrify/templates/services/noteable" element={<NoteableTemplate />} />
          <Route path="/afrify/templates/services/tattoo" element={<TattooTemplate />} />
          <Route path="/afrify/templates/services/genius" element={<GeniusTemplate />} />
          <Route path="/afrify/templates/services/workflow" element={<WorkflowTemplate />} />
          <Route path="/afrify/templates/services/grain" element={<GrainTemplate />} />
          <Route path="/afrify/templates/services/smile" element={<SmileTemplate />} />
          <Route path="/afrify/templates/services/panorama" element={<PanoramaTemplate />} />
          <Route path="/afrify/templates/services/printing" element={<PrintingTemplate />} />
          <Route path="/afrify/templates/services/sonik" element={<SonikTemplate />} />
          <Route path="/afrify/templates/services/leap" element={<LeapTemplate />} />
          <Route path="/afrify/templates/services/aircon" element={<AirconTemplate />} />
          <Route path="/afrify/templates/services/enthusiast" element={<EnthusiastTemplate />} />
          <Route path="/afrify/templates/art/sunset" element={<SunsetTemplate />} />
          <Route path="/afrify/templates/art/brutalist" element={<BrutalistTemplate />} />
          <Route path="/afrify/templates/art/etch" element={<EtchTemplate />} />
          <Route path="/afrify/templates/art/monochrome" element={<MonochromeTemplate />} />
          <Route path="/afrify/templates/art/mio" element={<MioTemplate />} />
          <Route path="/afrify/templates/art/exhibit" element={<ExhibitTemplate />} />
          <Route path="/afrify/templates/art/portfolio" element={<PortfolioTemplate />} />
          <Route path="/afrify/templates/art/wrong" element={<WrongTemplate />} />
          <Route path="/afrify/templates/art/ocean" element={<OceanTemplate />} />
          <Route path="/afrify/templates/art/anthologist" element={<AnthologistTemplate />} />
          <Route path="/afrify/templates/art/totem" element={<TotemTemplate />} />
          <Route path="/afrify/templates/art/darkroom" element={<DarkroomTemplate />} />
          <Route path="/afrify/templates/art/clay" element={<ClayTemplate />} />
          <Route path="/afrify/templates/art/okinawa" element={<OkinawaTemplate />} />
          <Route path="/afrify/templates/art/:slug" element={<ArtTemplatePage />} />
          <Route path="/afrify/templates/auto" element={<AutoTemplate />} />
          <Route path="/afrify/templates/auto/maranello" element={<MaranelloTemplate />} />
          <Route path="/afrify/templates/auto/garage" element={<GarageAutoTemplate />} />
          <Route path="/afrify/templates/auto/torque" element={<TorqueTemplate />} />
          <Route path="/afrify/templates/auto/fleet" element={<FleetTemplate />} />
          <Route path="/afrify/templates/auto/nitro" element={<NitroTemplate />} />
          <Route path="/afrify/templates/auto/drive" element={<DriveTemplate />} />
          <Route path="/afrify/templates/bags" element={<BagsTemplate />} />
          <Route path="/afrify/templates/bags/courier" element={<CourierTemplate />} />
          <Route path="/afrify/templates/bags/prestige" element={<PrestigeTemplate />} />
          <Route path="/afrify/templates/bags/voyage" element={<VoyageTemplate />} />
          <Route path="/afrify/templates/bags/tote" element={<ToteTemplate />} />
          <Route path="/afrify/templates/bags/leather" element={<LeatherTemplate />} />
          <Route path="/afrify/templates/bags/galleria" element={<GalleriaTemplate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
