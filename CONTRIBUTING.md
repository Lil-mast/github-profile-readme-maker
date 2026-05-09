# Contributing to Salamander GitHub Profile ReadMe Maker

<div align="center">
  <img src="./public/salamanderlogo.jpeg" width="120" alt="Salamander Tech Hub logo" />
  <p><strong>Maintained by <a href="https://github.com/Salamander-Tech-Hub">Salamander Tech Hub</a></strong></p>
</div>

Thank you for helping improve this project. Every contribution—code, docs, design, or feedback—makes a difference for open-source developers building representable GitHub profiles.

**Quick links:** [How to set up](#how-to-set-up-locally) · [Before you open a PR](#before-you-open-a-pull-request) · [Branching](#branch-organization) · [Report bugs](#how-to-report-bugs) · [Non-coding](#non-coding-contribution) · [Roadmap ideas](OPEN_SOURCE_ISSUES_ROADMAP.md)

---

## How to set up locally

1. **Prerequisites**
   - [Node.js](https://nodejs.org/) **LTS** (v18 or newer recommended; Next.js 12 needs a current Node).
   - [Git](https://git-scm.com/).
   - A package manager: `npm` (comes with Node) or `yarn` / `pnpm`.

2. **Clone and install**

   ```bash
   git clone https://github.com/Salamander-Tech-Hub/github-profile-readme-maker.git
   cd github-profile-readme-maker
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

4. **Quality checks before you push**

   ```bash
   npm run lint
   npm run build
   ```

   Fix any lint errors. Ensure the production build completes if your change touches build-sensitive code.

---

## Before you open a pull request

- **Check existing issues and PRs** so you do not duplicate work.
- **Open an issue first** for large or risky changes (new features, refactors) so maintainers can align on direction.
- **Scope:** Keep PRs focused—one feature or fix per PR is easier to review.
- **Match the codebase:** Follow existing patterns (React components, MobX store usage, Tailwind classes).
- **No unrelated changes:** Avoid drive-by refactors or formatting-only sweeps unless agreed in the issue.

For idea lists by difficulty, see [OPEN_SOURCE_ISSUES_ROADMAP.md](OPEN_SOURCE_ISSUES_ROADMAP.md).

---

## Branch organization

- **Default branch:** `main` is the integration branch; it should stay in a shippable state.
- **Workflow:** Create a **feature branch** from `main`, work on your change, then open a **pull request** into `main`.
- **Avoid breaking changes** without discussion. Backward compatibility matters for users generating READMEs.

---

## How to report bugs

1. [Open an issue](https://github.com/Salamander-Tech-Hub/github-profile-readme-maker/issues) on this repository.
2. Describe **what you expected** vs **what happened**.
3. Add **steps to reproduce**, your **browser and OS**, and a **screenshot** or error text if useful.
4. If you already have a fix, you can link it in the issue and open a PR referencing that issue.

---

## Non-coding contribution

You can contribute without writing application code:

- Improve **documentation** (README, this file, inline comments where needed).
- Suggest or refine **UI/UX** and **accessibility** feedback.
- Help **triage issues**, reproduce bugs, or write clearer issue titles and descriptions.
- Propose **content** for the roadmap or contributor onboarding.

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (**GPL-3.0**). See the repository `LICENSE` file for full terms.

---

**Thanks again** for helping Salamander Tech Hub and the open-source community build better GitHub profiles.
