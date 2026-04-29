import { Hero } from "@/components/hero";
import { TrustCases } from "@/components/trust-cases";
import { PainPoints } from "@/components/pain-points";
import { PersonaSplit } from "@/components/persona-split";
import { IntegrationInterface } from "@/components/integration-interface";
import { Workflow } from "@/components/workflow";
import { Architecture } from "@/components/architecture";
import { LobsterBox } from "@/components/lobster-box";
import { Trust } from "@/components/trust";
import { DevExperience } from "@/components/dev-experience";
import { Business } from "@/components/business";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustCases />
      <PainPoints />
      <PersonaSplit />
      <IntegrationInterface />
      <Workflow />
      <Architecture />
      <LobsterBox />
      <Trust />
      <DevExperience />
      <Business />
      <CTA />
    </>
  );
}
