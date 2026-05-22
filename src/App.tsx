/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "@/components/hero";
import { ScenarioPortfolio } from "@/components/scenario-portfolio";
import { ScenarioSelector } from "@/components/scenario-selector";
import { Pricing } from "@/components/pricing";
import { AgentNews } from "@/components/agent-news";
import { CTA } from "@/components/cta";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyCTABar } from "@/components/sticky-cta-bar";
import { VitaClawAssistant } from "@/components/vitaclaw-assistant";
import { TrialSelectPage } from "@/components/trial-select-page";

export default function App() {
  if (typeof window !== "undefined" && window.location.pathname === "/trial/select") {
    return <TrialSelectPage />;
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ScenarioPortfolio />
        <ScenarioSelector />
        <Pricing />
        <CTA />
        <AgentNews />
      </main>
      <Footer />
      <StickyCTABar />
      <VitaClawAssistant />
    </div>
  );
}
