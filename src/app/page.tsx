import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Capabilities } from "@/components/capabilities";
import { Architecture } from "@/components/architecture";
import { Team } from "@/components/team";
import { Business } from "@/components/business";
import { Financials } from "@/components/financials";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Capabilities />
      <Architecture />
      <Business />
      <Team />
      <Financials />
      <CTA />
    </>
  );
}
