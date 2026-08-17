# Keith Dale Cordova — Portfolio

Private React portfolio with **two separate CV profiles**.  
They do **not** link to each other. Share only the URL meant for that company or conversation.

## Shareable links

| Profile | Path | Use for |
|--------|------|---------|
| Tech Lead · Full Stack (RCG) | `/tech-lead` | Tech Lead / full-stack leadership conversations |
| Full Stack · Angular · Ionic (iScale) | `/mobile` | Full-stack Angular / Ionic / hybrid mobile conversations |

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
  - **Tech Lead · Full Stack** → RCG Information Technology
  - **Mobile** → iScale Ventures Inc. (Full Stack · Angular / Ionic)
- Both URLs share the same **Selected work** projects section (company names omitted; public links only where safe).

## Deploy (Vercel)

1. Import `keithdc/kdc-portfolio`
2. Leave **Root Directory** as the repo root (`.`) — `vercel.json` already points build output to `app/dist`
3. Or set Root Directory to `app` instead — then Vercel uses `app/vercel.json`

Shareable URLs after deploy: `/tech-lead` and `/mobile`

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
