# Open Work Foundation Site

Static institutional site for the Open Work Foundation: open, neutral, auditable labor-market infrastructure for the AI transition.

## Rules

- Bilingual EN/ES, always first-class: every new page ships `manifesto/` and `es/manifesto/` style twins.
- No em-dashes anywhere. Commas, periods, or colons instead.
- Tone: institutional, evidence-first, direct. No hype, no buzzwords.
- Narrative order is fixed: Problem → Evidence → Purpose.
- Anthropic (or any vendor) only appears as a labeled source, never as authority.
- The founder is "initiator", never "owner". Nothing public in his name without approval.
- Signing the manifesto works via pull request to `SIGNATURES.md` only.

## Stack

- Static HTML+CSS, Vite+ (`vp`) toolchain. See PRODUCT.md for audience context and CONTRIBUTING.md for workflow.
- Pipeline: `vp check` → `vp build` → GitHub Pages deploy.
- Do not introduce eslint/prettier/vite directly; Vite+ owns the toolchain.

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Tool Versions

Run `vp toolchain` to show versions and relationships in the active Vite+
release. Add a tool name to select part of the graph. For example, run
`vp toolchain vite`. Use `--global` to ignore the local `vite-plus` package. Use
`vp why <package>` to show the package-manager dependency graph.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
