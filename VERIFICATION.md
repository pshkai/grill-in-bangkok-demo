# Verification — 24 October 2026

Verified public URL: https://pshkai.github.io/grill-in-bangkok-demo/

## Completed checks

- `npm run check`: JavaScript syntax, unique IDs, local assets, anchor targets, disclosures, required date field and absence of an unverified LINE button passed.
- `npm run build`: dependency-free static output generated in `dist/`.
- GitHub Actions deployment completed successfully: https://github.com/pshkai/grill-in-bangkok-demo/actions/runs/40076214606
- HTTP 200 for index, CSS, JS, WebP, SVG favicon and sources page. Updated browser-verified Maps source notes were present in the public sources page.
- Browser inspected at desktop 1280px, tablet 768px, mobile 390px and DOM overflow checked at 320px. No horizontal document overflow in measured widths. Mobile and tablet layouts visually inspected.
- Hero image loaded successfully on the public page; optimized WebP is 281,090 bytes.
- All three menu category filters displayed the expected two dishes; All restores six.
- English/Thai toggle and mobile navigation open/close verified. Thai planner tested on the live public website.
- Required date/time fields block empty submissions. Past dates fail browser validity and do not show a result.
- Valid date, time and party size produce a visit summary and an explicit no-reservation-submitted warning in both languages.
- No warnings/errors in inspected browser console logs.
- Provided Google Maps short link resolves to GRILL IN BANGKOK at the matching DONKI Mall address. The Maps-listed domain grillinbangkok.com fails DNS resolution.
- Chope and Hungry Hub restaurant pages inspected as real external dining/booking destinations. No booking was made. Phone links use the corroborated landline.
- No credentials, private data, backend submission endpoint, analytics or payment collection in project source. No personal data fields or persistence in the planner.

## Limits

No real booking or telephone call was made. Facebook/Instagram page content remained inaccessible; their URLs are user-supplied. LINE resolved to an account without a business name, so ownership remains unverified and integration is omitted. Hours conflict and the page asks diners to confirm. No complete accessibility audit or performance lab score is claimed. Cross-browser and physical-device tests were not performed.

Local screenshots are retained under ignored `qa/`; no private research or credentials were published. Artwork is illustrative, not actual restaurant imagery.
