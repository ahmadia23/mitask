import CardsSection from "@/ui/sections/CardsSection";
import HomeHeader from "@/ui/sections/HomeHeader";
import Navbar from "@/ui/Navbar";
import ProductPlusValue from "@/ui/sections/ProductPlusValue";
import AvantagesMitask from "@/ui/sections/AvantagesMitask";
import CallToActionSection from "@/ui/sections/CallToActionSection";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <AvantagesMitask />
      <CardsSection />
      <ProductPlusValue />
      <CallToActionSection />
    </>
  );
}
