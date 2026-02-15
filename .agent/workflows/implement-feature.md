---
description: Workflow for implementing new features following best practices.
---

1. **Analyze Requirements**:
    - Understand the feature goal.
    - Check for existing components or patterns to reuse.
    - **Consult Docs**: If using a new library or API, query `mcp_context7` for latest usage and patterns.

2. **Decompose Task**:
    - Update `task.md` with a breakdown of subtasks for the feature.
    - [Optional] Create `implementation_plan.md` if the feature is complex.

3. **Implementation**:
    - **I18n First**: Add necessary translation keys to `src/i18n/ui.ts` or `src/i18n/utils.ts`.
    - **Component**: Create or update `.astro` components in `src/components/`.
        - Use strict TypeScript interfaces for props.
        - Ensure semantic HTML and accessibility attributes.
    - **Styles**: Apply styles using Vanilla CSS variables from `src/styles/vars.css`.
    - **Integration**: Add the component to the relevant page or layout (`src/pages/`, `src/layouts/`).

4. **Verification**:
    - Run `npm run dev` and visually verify the changes.
    - Run `npx astro check` to ensure type safety.
    - Verify responsiveness on mobile and desktop viewports.
    - Ensure no console errors or warnings are introduced.

5. **Documentation**:
    - Update `docs/CHANGELOG.md` with the new feature.
    - Update `README.md` if the feature adds significant functionality.
    - Mark the task as complete in `task.md`.
