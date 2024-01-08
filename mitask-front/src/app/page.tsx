import CardsSection from "@/ui/CardsSection";
import HomeHeader from "@/ui/HomeHeader";
import Navbar from "@/ui/Navbar";
import ProductPlusValue from "@/ui/ProductPlusValue";
import AvantagesMitask from "@/ui/AvantagesMitask";
import MitaskForEntrepreneurs from "@/ui/MitaskForEntrepreneurs";
import CallToActionSection from "@/ui/CallToActionSection";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <AvantagesMitask />
      <CardsSection />
      <ProductPlusValue />
      <MitaskForEntrepreneurs />
      <CallToActionSection />
    </>
  );
}
