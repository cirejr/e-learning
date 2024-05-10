import HeroSection from "@/components/hero-section";
import Services from "@/components/services-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
			<HeroSection />
			<Services />
    </main>
  );
}
