// Runs in front of the static assets (assets.run_worker_first) for two
// jobs the asset server cannot do on its own here: redirect plain HTTP to
// HTTPS, and apply public/_headers, which is skipped once a Worker runs first.
import headersFile from '../public/_headers';

// Cloudflare `_headers` format: a path pattern line, then indented
// `Name: value` lines. `*` matches any run of characters.
const rules = [];
for (const line of headersFile.split('\n')) {
  const text = line.trim();
  if (!text || text.startsWith('#')) continue;
  if (/^\s/.test(line)) {
    const colon = text.indexOf(':');
    rules
      .at(-1)
      ?.headers.push([
        text.slice(0, colon).trim(),
        text.slice(colon + 1).trim(),
      ]);
  } else {
    const source = text
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\*/g, '.*');
    rules.push({ pattern: new RegExp(`^${source}$`), headers: [] });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    const asset = await env.ASSETS.fetch(request);
    const response = new Response(asset.body, asset);
    for (const rule of rules) {
      if (!rule.pattern.test(url.pathname)) continue;
      for (const [name, value] of rule.headers) {
        response.headers.set(name, value);
      }
    }
    return response;
  },
};
