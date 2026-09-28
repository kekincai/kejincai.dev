import sharp from 'sharp';

const graphic = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0v60" fill="none" stroke="#1B2733" stroke-width=".7"/></pattern></defs>
<rect width="1200" height="630" fill="#07090D"/><rect width="1200" height="630" fill="url(#grid)"/>
<path d="M64 72h1072M64 550h1072" stroke="#1B2733"/>
<g fill="#9AA6B3" font-family="monospace" font-size="13" letter-spacing="3"><text x="64" y="49">KEJINCAI.DEV</text><text x="64" y="154">// TOKYO / PERSONAL NODE</text><text x="64" y="591">ASTRO / TYPESCRIPT / TAILWIND CSS</text><text x="1013" y="591">EOF _</text></g>
<text x="60" y="285" font-family="sans-serif" font-size="91" font-weight="700" letter-spacing="-5" fill="#E8EDF2">KE JINCAI<tspan fill="#00E5FF">.</tspan></text>
<text x="64" y="353" font-family="monospace" font-size="26" fill="#E8EDF2">PERSONAL AI LAB</text><text x="64" y="399" font-family="monospace" font-size="17" fill="#9AA6B3">Software. Experiments. Digital memories.</text>
<circle cx="67" cy="477" r="4" fill="#00E5FF"/><text x="83" y="482" font-family="monospace" font-size="12" letter-spacing="2" fill="#00E5FF">TOKYO NODE / ONLINE</text>
<g stroke="#344452" fill="none"><circle cx="928" cy="300" r="157"/><circle cx="928" cy="300" r="113" stroke-dasharray="2 6"/><path d="M928 120v360M749 300h359M823 232l105 68 65-135 54 115-119 20 76 102-87 46-95-75 1-141m105 68-106 73m0 0 225-93m-224-48 181 170m-87 46 76-283" stroke-width=".8"/></g>
<g fill="#00E5FF"><circle cx="928" cy="300" r="6"/><circle cx="823" cy="232" r="3"/><circle cx="993" cy="165" r="3"/><circle cx="1004" cy="402" r="3"/></g><g fill="#E8EDF2"><circle cx="1047" cy="280" r="3"/><circle cx="917" cy="448" r="3"/><circle cx="822" cy="373" r="3"/></g>
</svg>`;
await sharp(Buffer.from(graphic)).png().toFile('public/og.png');
await sharp(Buffer.from(graphic))
  .webp({ quality: 90 })
  .toFile('docs/images/banner.webp');
console.log('Generated public/og.png and docs/images/banner.webp');
