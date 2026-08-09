# ADR-001: Project Structure

## Status

Accepted

## Context

As the portfolio application grew, components began serving different responsibilities.

Some components were reusable UI elements, while others represented complete page sections or application features.

Without structure, locating components would become increasingly difficult.

## Decision

The frontend is organized into the following folders:

components/
├── ui/
├── layout/
├── sections/
├── admin/
└── contact/

- ui: reusable building blocks (Button, TextInput, Notification...)
- layout: application layout components (Navbar, Footer)
- sections: homepage/page sections (Hero, Projects, Certifications...)
- admin: administration-specific components
- contact: contact page components

## Consequences

Benefits

- Easier navigation.
- Better separation of concerns.
- Simpler onboarding for future contributors.
- Consistent structure across future projects.

Trade-offs

- Slightly more folders.
- Requires discipline when adding new components.

## Date

2026-08-09