# Child Session Prompt: Foundation/docs

You are a child Codex session working in `/home/sztimhdd/vitaclaw-site`.

## Required Reading

1. `AGENTS.md`
2. `CLAUDE.md`
3. `.planning/PROJECT.md`
4. `.planning/REQUIREMENTS.md`
5. `.planning/ROADMAP.md`
6. `.planning/STATE.md`
7. `docs/orchestrator/omnigraph-integration-handoff.md`
8. `docs/orchestrator/new-codex-session-kickstarter.md`

## Goal

Finish Foundation/docs for the VitaClaw website OmniGraph integration.

## Scope

- Verify `.planning` artifacts are coherent and consistent with the source documents.
- Update planning docs only if you find concrete inconsistencies.
- Keep Product Phase 1 limited to Foundation/docs, `Agent 技术动态`, `VitaClaw 助手`, and verification/deploy.

## Do Not Do

- Do not implement UI.
- Do not modify `src`.
- Do not deploy.
- Do not build Phase 2 `VitaClaw 知识库`.
- Do not introduce new architecture beyond planning docs.

## Success Criteria

1. Foundation requirements FOUND-01 through FOUND-04 are satisfied.
2. Phase boundaries and out-of-scope items are explicit.
3. Child prompts are decision-complete enough for separate sessions.
4. No business-code changes are made.

## Verification

Run:

```bash
git diff -- .planning
git status --short
```

Do not run deployment commands.

## Report Back

Return:

- Changed files
- Verification commands and results
- Any inconsistencies found
- Any blockers or product decisions needed
- Residual risks
