import { readFileSync } from 'node:fs';
import sharp from 'sharp';

// The owner portrait sits inside the radar panel, as on the home page.
const portrait = await sharp(readFileSync('public/images/portrait.webp'))
  .png()
  .toBuffer();
const portraitUri = `data:image/png;base64,${portrait.toString('base64')}`;
const graphic = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#FCEE0A"/>
<g font-family="monospace" font-weight="bold"><text x="54" y="62" font-size="25">// KEJINCAI.DEV</text><text x="54" y="128" font-size="16">TOKYO / PERSONAL NODE</text></g>
<g font-family="sans-serif" font-weight="900" letter-spacing="-6"><text x="57" y="271" font-size="143" fill="#00F0FF">KE</text><text x="53" y="268" font-size="143">KE</text><text x="57" y="416" font-size="125" fill="#00F0FF">JINCAI</text><text x="53" y="413" font-size="125">JINCAI</text></g>
<path d="M715 110h400l38 38v374l-38 38H715l-30-30V140z" fill="#09090B"/>
<clipPath id="portrait"><rect x="705" y="160" width="428" height="370"/></clipPath>
<image href="${portraitUri}" x="695" y="130" width="449" height="410" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait)"/>
<rect x="705" y="160" width="428" height="370" fill="#09090B" fill-opacity=".25"/>
<g stroke="#00F0FF" fill="none"><circle cx="920" cy="324" r="153" stroke-opacity=".3"/><path d="M920 172l130 76-1 154-129 77-134-77 1-154 133-76 129 230-262-154 133 231 130-231-264 154 134-230v307m-133-231 133 76 130-76m-263 154 133-78 129 78" stroke-opacity=".6"/><circle cx="920" cy="324" r="16"/></g>
<g stroke="#FCEE0A" fill="none"><circle cx="944" cy="294" r="22"/><path d="M944 264v10m0 40v10M914 294h10m40 0h10"/></g><g fill="#00F0FF"><circle cx="920" cy="172" r="4"/><circle cx="1050" cy="248" r="4"/><circle cx="1049" cy="402" r="4"/><circle cx="920" cy="479" r="4"/><circle cx="786" cy="402" r="4"/><circle cx="787" cy="248" r="4"/></g>
<g font-family="monospace" font-size="13" fill="#00F0FF"><text x="724" y="146">PERSONAL AI NODE</text><text x="973" y="550">CONNECTED</text></g>
<path d="M54 464h453l23 23v50H54z" fill="#09090B"/><text x="80" y="511" font-family="monospace" font-size="26" fill="#FCEE0A">PERSONAL AI LAB →</text>
<text x="54" y="587" font-family="monospace" font-size="16">SOFTWARE / AI / WEB / DATA / PHOTOGRAPHY</text>
</svg>`;
await sharp(Buffer.from(graphic)).png().toFile('public/og.png');
await sharp(Buffer.from(graphic))
  .webp({ quality: 90 })
  .toFile('docs/images/banner.webp');
