# Keith Dale Cordova — Portfolio

Private React portfolio with **two separate CV profiles**.  
They do **not** link to each other. Share only the URL meant for that company or conversation.

## Shareable links

| Profile | Path | Use for |
|--------|------|---------|
| Tech Lead (RCG) | `/tech-lead` | Tech Lead / leadership + frontend platform conversations |
| Angular · Ionic (iScale) | `/mobile` | Senior Angular / Ionic / hybrid mobile conversations |

### Local (dev)

```text
http://127.0.0.1:5173/tech-lead
http://127.0.0.1:5173/mobile
```

### After you deploy (replace with your domain)

```text
https://YOUR-DOMAIN/tech-lead
https://YOUR-DOMAIN/mobile
```

### Important

- `/` and unknown paths show a blank page on purpose (no profile index).
- Do **not** send both links to the same company.
- Profiles share the same career history below the top role; only the current role differs:
  - **Tech Lead** → RCG Information Technology
  - **Mobile** → iScale Ventures Inc. (Angular / Ionic)

## Run locally

```bash
cd /Users/keithcordova/Developer/kdc-portfolio
npm run dev
```

Then open one of the shareable links above.

```bash
npm run build    # production build
npm run preview  # preview production build
```

## Stack

- React 18 + TypeScript + Vite
- MUI + Tailwind + Framer Motion
- MagicUI-style animations

App source lives in `app/`.

## Content location

| Profile data | File |
|--------------|------|
| Tech Lead | `app/src/features/portfolio/data/tech-lead-profile.ts` |
| Mobile | `app/src/features/portfolio/data/mobile-profile.ts` |
| Shared experience | `app/src/features/portfolio/data/shared-experience.ts` |
| Routes | `app/src/App.tsx` |
