---
documentId: vitaclaw-kb
title: VitaClaw Product Knowledge Base
sourceType: markdown
sourceFilename: VitaClaw-KB.md
sourceDate: 2026-05-09
reviewStatus: reviewed-with-risk-flags
reviewedBy: codex-child-agent
reviewedAt: 2026-05-10
publicSafe: true
contractVersion: 1
---

# VitaClaw Product Knowledge Base

This reviewed Markdown is derived from the user-provided `VitaClaw-KB.md`.
It is the v1.2 homepage assistant knowledge source. Raw PDFs and local source
paths are not committed.

Public answer policy:

- Use `allowed` chunks for factual, high-level product Q&A.
- Use `cta_only` chunks only to redirect visitors to `预约演示` or `获取方案`.
- Do not send `internal_only` chunks to the model.
- Do not present market sizing, ROI, compliance, legal, pricing, or deployment
  timing as binding guarantees.
- Do not answer customer-specific architecture, production access, credential,
  legal, or regulatory guarantee questions from this document.

## 1. Product Positioning

OneClaw/VitaClaw is positioned as an enterprise AI execution platform for
cross-system office and business automation. Its goal is to move beyond
chat-style advice toward controlled, auditable execution of long-running
business tasks.

The source describes three broad phases of AI capability:

- Prompt Engineering: AI helps with semantic understanding and conversation.
- Context Engineering: retrieval and context improve reasoning and analysis.
- Harness Engineering: agents are connected to tools and business systems so
  workflows can be completed end to end.

The source attributes OneClaw/VitaClaw to Zhejiang Unitech and says the product
is intended to address permission control, data leakage, and logic errors in AI
execution.

## 2. High-Level Comparison

The source contrasts general chatbots with execution-oriented platforms:

| Dimension | General AI / chatbots | OneClaw / VitaClaw positioning |
|---|---|---|
| Core logic | Suggestions without execution closure | Long-running task closure |
| IT integration | Often requires API work | Uses ChatKit for non-invasive integration patterns |
| Security | Permission and audit gaps | Observability, sandboxing, and audit controls |
| Business depth | Can drift without business anchors | CMA and knowledge graph concepts anchor decisions |
| Development model | Custom code-heavy integration | Low-code/no-code skills and reusable assets |

This table is positioning material, not a binding capability guarantee.

## 3. Native Rust Execution Kernel

The source says OneClaw/VitaClaw uses a Native Rust execution kernel rather
than a heavy Python runtime. The stated rationale is Rust's memory safety,
ownership model, and predictable resource behavior.

Public-safe points:

- Rust can help reduce runtime overhead from garbage collection.
- Rust's ownership model can support memory safety in concurrent agent loops.
- A native execution kernel is positioned as useful for responsive enterprise
  automation.

Claims about exact cold-start speed, single-machine concurrency, or resource
ratios require product confirmation and should be handled as CTA-only.

## 4. eBPF Sentinel And Audit Trail

The source describes an eBPF Sentinel mechanism for observing AI execution at
the system-call level without modifying application code.

Public-safe points:

- eBPF can be used for low-level Linux observability.
- The platform positions eBPF monitoring as part of runtime supervision.
- The source links execution traces to tamper-evident audit ideas such as
  Merkle Tree records and Immudb-style immutable storage.

Claims that every instruction is always captured, cannot be modified, or fully
satisfies financial audit requirements should be redirected to solution review.

## 5. Lobster Box Isolation

The source describes `Lobster Box` as the platform's isolation philosophy for
limiting unintended AI operations.

The described layers are:

- Wasm sandboxing for restricted per-agent compute.
- KVM or lightweight virtual-machine isolation for higher-sensitivity tasks.
- Permission boundaries intended to prevent escape from the assigned execution
  environment.

Exact isolation configuration depends on deployment mode and customer
environment, so production security design should be confirmed through a demo
or architecture review.

## 6. CMA And OPAR

CMA stands for Cognitive Memory Architecture. The source presents it as a
component for reducing hallucination and improving execution precision.

The described OPAR loop is:

1. Observe: inspect current task state.
2. Plan: create an execution plan.
3. Act: execute controlled steps.
4. Reflect: inspect outcomes and adjust.

The source describes three memory layers:

- Short-term context for a single task flow.
- Long-term business memory for reusable patterns and enterprise know-how.
- Bi-temporal knowledge graph concepts for business relationships that change
  over time.

For v1.2 homepage Q&A, these are product concepts only. The homepage assistant
must not use persistent memory, LightRAG, Cognee, or knowledge-graph execution.

## 7. Skills, MCP, And ChatKit

The source describes a skills ecosystem around standard tool contracts:

- MCP is described as a standardized tool connection contract.
- OpenSkills compatibility is described as a way to import reusable agent
  skills.
- ChatKit SDK is described as a non-invasive integration layer that can map
  legacy ERP, CRM, or OA front-end interactions into agent-readable flows when
  APIs are unavailable.

The source also describes skill asset management: business expertise can be
packaged into AI skills, versioned, signed, distributed, and audited.

Specific connector coverage and legacy-system feasibility must be confirmed per
customer system.

## 8. Deployment And Implementation Path

The source describes a four-stage implementation path:

1. Research and preparation: threat modeling, non-human identity discovery, and
   permission boundary definition.
2. Pilot deployment: environment setup and one or two core scenario POCs.
3. Scale-out: skill library construction and broader scenario rollout.
4. Continuous optimization: use execution results to improve workflows.

The source includes example durations such as 2-4 weeks for preparation and
4-6 weeks for a pilot. Treat all timing as CTA-only because actual timing
depends on systems, approvals, data access, and customer constraints.

## 9. Scenario Library

The source lists scenario examples across finance, insurance, regulatory
technology, manufacturing, and government service.

### Banking

- KYC / AML automation: gather account-opening materials across systems, compare
  them with watchlists, and produce compliance analysis drafts.
- Credit approval assistance: parse financial statements and invoices, combine
  relationship analysis, and generate initial review suggestions.
- Corporate counter automation: use ChatKit-style interaction automation to
  handle complex data entry across windows.

Effectiveness metrics such as exact time reduction or complete audit coverage
are CTA-only.

### Insurance

- Small-claim automation: coordinate image recognition, pricing checks, and
  claims-flow assistance.
- Underwriting support: read medical or claim-related materials and produce
  risk-level suggestions.

Exact cycle-time and cost-reduction claims are CTA-only.

### Regulatory Technology

- Regulatory report support: help parse changing reporting requirements and
  assemble report data with human review.
- Compliance-risk monitoring: use observability and rules to identify abnormal
  patterns.

These are product scenarios, not legal or regulatory guarantees.

### Manufacturing And Government Service

- Supply-chain procurement: monitor inventory, compare supplier quotes, and
  assist ordering flows.
- Government-service assistant: guide citizens through applications and support
  backend material verification.

Whether a specific process can be automated depends on the target systems,
permissions, UI/API availability, and review requirements.

## 10. Policy Alignment And Security Controls

The source says OneClaw/VitaClaw can support localization-oriented enterprise
technology environments and mentions China information-technology adaptation
contexts.

The source describes five security-control layers:

1. Pre-execution admission: SPIFFE identity, NHI separation, OPA/Rego policy
   checks, and Sigstore verification.
2. Runtime monitoring: eBPF tracing, mTLS, runtime guardrails, and sandboxing.
3. Decision review: OPAR plan review, multi-factor comparison, and human-in-the
   loop for high-risk operations.
4. Data protection: differential privacy concepts, memory-drift monitoring, and
   sensitive-data masking.
5. Post-execution audit: immutable logs and visual playback for review.

Claims about satisfying a specific law, regulation, procurement requirement, or
audit standard must be redirected to consultation.

## 11. Public Q&A Anchors

### Q01. What is A2A security?

A2A security covers identity spoofing and message interception risks when
multiple agents collaborate. The source says OneClaw uses SPIFFE-style
non-human identity and mTLS-secured communication.

### Q02. How does the platform address prompt injection?

The source says runtime guardrails are placed around the OPAR planning stage,
and tool calls should follow MCP-defined schemas.

### Q03. How can legacy ERP systems without APIs be integrated?

The source describes ChatKit SDK as a non-invasive middleware layer that maps UI
interaction flows into agent-readable actions.

### Q04. Why use a Rust execution kernel?

The source says Rust provides memory safety and predictable performance
characteristics that help large-scale agent execution avoid common runtime
resource issues.

### Q05. How does the platform avoid infinite execution loops?

The source describes instruction-depth tracking, loop-pattern detection, and
automatic interruption with human escalation.

### Q06. What is Lobster Box?

Lobster Box is described as a sandboxing and isolation model combining Wasm and
KVM-style isolation patterns to limit agent execution boundaries.

### Q07. What is OPAR?

OPAR means Observe, Plan, Act, Reflect. It structures agent work as observation,
planning, controlled action, and reflection.

### Q08. What is NHI governance?

NHI means Non-Human Identity. It covers lifecycle, permission scope, and
accountability for automated agent identities.

### Q09. Does the platform support private deployment?

The source says private deployment is supported. Specific topology, data
residency, and security responsibilities require architecture review.

### Q10. What can visitors ask the homepage assistant?

Visitors can ask high-level product, scenario, deployment-process, integration,
and security-posture questions covered by reviewed product documentation. The
assistant should redirect to CTA for customer-specific or binding answers.
