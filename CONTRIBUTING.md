# Contributing Guide

Thank you for contributing to this project!  
This document explains the **branching strategy**, **daily workflow**, and **deployment rules** to keep development safe, consistent, and production-ready.

---

## Branching Strategy

We use a simple and clear branching model:

| Branch | Purpose | Auto Deploy |
|------|--------|------------|
| `main` | Production-ready code | ❌ (deploy via tag only) |
| `develop` | Integration & staging | ✅ (auto deploy to staging) |
| `feature/*` | Feature development | ❌ |
| `fix/*` / `hotfix/*` | Bug fixes | ❌ |

### Key Rules
- **Never commit directly to `main`**
- **All features start from `develop`**
- **Production deploys are triggered only by tags**

---

## Creating a Feature Branch

Always create a feature branch from `develop`:

```bash
git checkout develop
git pull
git checkout -b feature/your-feature-name
