# KFUPM SSO Authentication with Clerk + Next.js

This project demonstrates how to integrate **KFUPM's official sign-in page** (via Microsoft Azure AD) into a **Next.js** application using **Clerk** as the authentication layer.

When a user attempts to sign in, they are redirected directly to KFUPM's Microsoft login page. Only emails with the `@kfupm.edu.sa` domain are allowed to authenticate.

---

## 🚀 Features

- **Official KFUPM Login** — Uses the same Microsoft SSO page students and staff use.
- **Secure OAuth 2.0 / OIDC Integration** via Clerk.
- **Domain Restriction** — Only `@kfupm.edu.sa` accounts can sign in.
- **Next.js 14 App Router** + **Clerk** for session management.
- **Automatic Redirect** — Skips Clerk’s default login screen and sends users straight to KFUPM login.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) — React framework with App Router.
- [Clerk](https://clerk.com/) — Authentication and user management.
- [Azure AD / Microsoft OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/) — KFUPM’s identity provider.

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/kfupm-sso-nextjs.git
cd kfupm-sso-nextjs
