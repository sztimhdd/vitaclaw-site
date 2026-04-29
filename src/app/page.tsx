import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { LobsterBox } from "@/components/lobster-box";
import { IntegrationInterface } from "@/components/integration-interface";
import { Workflow } from "@/components/workflow";
import { Architecture } from "@/components/architecture";
import { DevExperience } from "@/components/dev-experience";
import { Trust } from "@/components/trust";
import { Business } from "@/components/business";
import { Team } from "@/components/team";
import { Financials } from "@/components/financials";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <LobsterBox />
      <IntegrationInterface />
      <Workflow />
      <Architecture />
      <DevExperience />
      <Trust />
      <Business />
      <Team />
      <Financials />
      <CTA />
    </>
  );
}
