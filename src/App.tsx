/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { PainPoints } from "@/components/pain-points";
import { Workflow } from "@/components/workflow";
import { ScenarioSelector } from "@/components/scenario-selector";
import { Architecture } from "@/components/architecture";
import { Business } from "@/components/business";
import { ComplianceTrust } from "@/components/compliance-trust";
import { TrustCases } from "@/components/trust-cases";
import { AgentNews } from "@/components/agent-news";
import { CTA } from "@/components/cta";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyCTABar } from "@/components/sticky-cta-bar";
import { VitaClawAssistant } from "@/components/vitaclaw-assistant";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <Workflow />
        <ScenarioSelector />
        <Architecture />
        <Business />
        <ComplianceTrust />
        <TrustCases />
        <AgentNews />
        <CTA />
      </main>
      <Footer />
      <StickyCTABar />
      <VitaClawAssistant />
    </div>
  );
}
