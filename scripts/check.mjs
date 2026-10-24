import {readFile,access} from 'node:fs/promises';import assert from 'node:assert/strict';
const html=await readFile('index.html','utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'Unique IDs');
for(const match of html.matchAll(/(?:href|src)="(\.\/[^"#]+|#[^"]+)"/g)){if(match[1].startsWith('#'))assert(ids.includes(match[1].slice(1)),`Missing anchor ${match[1]}`);else await access(match[1]);}
assert(html.includes('noindex, nofollow'));assert(html.includes('Not affiliated'));assert(!html.includes('lin.ee'),'Unverified LINE link must not appear');assert(html.includes('type="date" required'));console.log('Passed: local assets, anchors, IDs, disclosures, date validation and unverified-link check.');
