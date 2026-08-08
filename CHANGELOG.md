# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-08-08

### Added
- Next.js portfolio website built with TypeScript.
- Responsive homepage with navigation, hero, certifications, projects, and footer.
- About page with skills, certifications, video section, and CV section.
- Contact page.
- Admin dashboard for portfolio management.
- Project creation form with React state.
- Shared TypeScript project type.
- DynamoDB `portfolio-projects` table.
- TypeScript Lambda for creating projects.
- TypeScript Lambda for retrieving projects.
- `POST /projects` API Gateway route.
- `GET /projects` API Gateway route.
- Browser-to-API integration for creating projects.
- CORS configuration for local development.
- Backend folder structure for functions, shared code, and infrastructure.

### Changed
- Portfolio project, skills, and certification data moved out of UI components.
- Backend reorganized into feature-specific Lambda folders.
- Project cards and certification cards received initial UI polish.
- Contact section moved from the homepage to its own `/contact` page.

### Fixed
- React list key warnings.
- Internal navigation and hash-link behavior.
- Hero content spacing under the fixed navbar.
- API Gateway region mismatch.
- Browser CORS preflight configuration.
- Double-slash API URL issue.
- `get-projects` Lambda date sorting typo.