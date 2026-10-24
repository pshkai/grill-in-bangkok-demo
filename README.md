# Grill In Bangkok — independent website concept

An unsolicited restaurant website demonstration, without affiliation, endorsement or authorization from Grill In Bangkok. No real reservations are submitted.

**Demo:** https://pshkai.github.io/grill-in-bangkok-demo/ (see GitHub Actions and the final verification record for deployment status).

## Stack and local development

Buildless semantic HTML, responsive CSS and vanilla JavaScript. Node.js 18+ is used only for the local server, checks and static packaging. No npm dependencies or paid services.

```sh
npm run dev
# http://127.0.0.1:4174
npm run check
npm run build
```

## Experience

- One-page Home, Menu, Gathering, Visit Planner and Location sections, plus a sources page.
- English/Thai language switch; six source-backed menu highlights with category filters.
- Date, party size, preferred time and occasion planner, required-field/past-date validation, visit summary and explicit demo disclosure.
- Phone, Google Maps, social accounts and actual Chope/Hungry Hub booking links.
- Mobile navigation and fixed contact actions, keyboard focus states, reduced-motion support, optimized WebP illustration and SVG concept favicon.
- Relative assets for GitHub Pages subdirectory hosting; no SPA routing or server needed.
- No analytics, storage, sensitive fields, payment processing or outbound form submission. Google Fonts makes normal third-party font requests.
- `noindex,nofollow` discourages search engines from confusing the demo with an official website.

## Deployment

Dedicated repository: https://github.com/pshkai/grill-in-bangkok-demo

GitHub Pages uses `.github/workflows/pages.yml`: check, build `dist/`, upload the Pages artifact, deploy. Pushes to `main` redeploy. Set Pages source to GitHub Actions. No secrets are required in project files. Actions receive only read-contents and Pages/OIDC deployment permissions.

## Research and limitations

Research date: 24 October 2026. See [RESEARCH.md](RESEARCH.md) and the public [sources page](sources.html) for source URLs and conflicts.

Address: DONKI Mall Thonglor, Unit 402, fourth floor, 107 Sukhumvit 63, Khlong Tan Nuea, Watthana, Bangkok 10110. Landline +66 2 126 0975 is corroborated by Wongnai and Tripadvisor. Social accounts were supplied by the user but direct page content was restricted. The Maps-listed domain grillinbangkok.com failed DNS resolution. Language preference is uncertain, so the concept supports English and Thai.

Opening hours conflict, and the site asks visitors to confirm directly. No prices, ratings, invented reviews, credentials or live availability are displayed. LINE is pending destination and owner verification. The provided Google Maps short link was verified in the browser and matches the restaurant and address. External platforms may require login or change availability.

Before production: owner approval, brand assets and photo permissions, verified hours/menu/pricing/allergens, contact and LINE confirmation, accessibility review with actual customers, and an approved real reservation service. Remove unsolicited-demo disclosures and indexing restriction only after authorization and production readiness.

## Asset credits

`assets/grill-concept.webp`: AI-generated illustrative food scene, OpenAI ImageGen built-in tool. Not actual food or premises. Full prompt: [ASSETS.md](ASSETS.md).

Typography: free Google Fonts DM Sans and Noto Sans Thai, with system fallbacks. Wordmark, poster, favicon and layout are original concept work; none is presented as an official logo.
