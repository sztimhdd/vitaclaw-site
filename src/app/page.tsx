import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { AudienceBar } from "@/components/audience-bar";
import { PainPoints } from "@/components/pain-points";
import { IntegrationInterface } from "@/components/integration-interface";
import { Workflow } from "@/components/workflow";
import { LobsterBox } from "@/components/lobster-box";
import { Architecture } from "@/components/architecture";
import { Trust } from "@/components/trust";
import { DevExperience } from "@/components/dev-experience";
import { Business } from "@/components/business";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AudienceBar />
      <PainPoints />
      <IntegrationInterface />
      <Workflow />
      <LobsterBox />
      <Architecture />
      <Trust />
      <DevExperience />
      <Business />
      <CTA />
    </>
  );
}
