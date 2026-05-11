# Child Session Prompt: OmniGraph export producer handoff

You are a child Codex session preparing the OmniGraph-side handoff for VitaClaw website Agent news export.

Primary website repo:

```text
/home/sztimhdd/vitaclaw-site
```

Likely OmniGraph repo, if available:

```text
/home/sztimhdd/OmniGraph-Vault
```

## Required Reading

In `/home/sztimhdd/vitaclaw-site`:

1. `AGENTS.md`
2. `docs/orchestrator/omnigraph-agent-news-contract.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `docs/orchestrator/omnigraph-integration-handoff.md`

In `/home/sztimhdd/OmniGraph-Vault`, if present:

1. Relevant README or project instructions.
2. Existing article ingestion/filter/export code.
3. Any Layer 1 / Layer 2 passed article storage or export conventions.

## Goal

Prepare the OmniGraph-side producer handoff so OmniGraph can generate a website-ready `Agent 技术动态` export matching the Phase 5 contract.

## Scope

- Identify where OmniGraph currently stores or can derive Layer 1/2 passed articles.
- Define or implement the smallest export path that produces the website contract JSON.
- If editing OmniGraph is appropriate and safe, keep changes isolated to export generation only.
- If OmniGraph code is not available or too risky to modify, create a precise handoff document instead.
- Define how the generated JSON reaches the website repo or deployment artifact.

## Do Not Do

- Do not write website `.planning` artifacts into `OmniGraph-Vault`.
- Do not import OmniGraph code into the website repo.
- Do not build `VitaClaw 知识库`.
- Do not add website backend services.
- Do not deploy.
- Do not store secrets or production credentials.

## Success Criteria

1. EXPORT-01 through EXPORT-04 are satisfied.
2. The website contract remains the only coupling between OmniGraph and VitaClaw website.
3. There is a clear command, script, or manual handoff path to produce/copy the JSON.
4. Only Layer 1/2 passed articles are eligible.

## Verification

In the website repo, run:

```bash
git diff -- docs .planning
git status --short
```

If OmniGraph code is changed, run the relevant OmniGraph tests or validation commands discovered from that repo and report them.

Do not run production deployment commands.

## Report Back

Return:

- Repos touched
- Changed files
- Export generation/copy command or handoff path
- How Layer 1/2 passed filtering is enforced
- Verification commands and results
- Blockers or decisions needed
- Residual risks

