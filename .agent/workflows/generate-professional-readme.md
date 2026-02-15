---
description: Workflow for generating a professional README.md using the generate-professional-readme skill
---

1. Analyze the project structure and `package.json` to understand the tech stack and key features.
2. Read the existing `README.md` (if any) to preserve context.
3. Use the `generate-professional-readme` skill to generate a new `README.md` content following the structure:
    - Title & Description
    - Badges
    - About (Screenshots, Features)
    - Built With
    - Getting Started (Prerequisites, Installation)
    - Usage
    - Roadmap
    - Contributing
    - License
    - Contact
4. Ask the user for any specific details (e.g., screenshots, social links) if missing.
5. Save the generated content to `README.md`.
