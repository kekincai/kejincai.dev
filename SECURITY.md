# Security

This project is a static personal website. It has no user accounts, database, or server-side secrets.

Please use GitHub's private vulnerability reporting for security issues. Do not publish credentials or private data in an issue. If private reporting is unavailable, open a minimal issue requesting a private contact channel without disclosing the vulnerability.

Dependencies are pinned by `package-lock.json`. Run `npm audit` when changing dependencies. Cloudflare headers are defined in `public/_headers` for Pages deployments.
