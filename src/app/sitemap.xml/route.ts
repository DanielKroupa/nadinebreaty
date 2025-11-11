import { type NextRequest } from "next/server";

// Dynamic sitemap route for Next.js App Router
// Serves XML at /sitemap.xml

export async function GET(request: NextRequest) {
  try {
    const host = request.headers.get("host") || "localhost:3000";
    const proto = request.headers.get("x-forwarded-proto") || "https";
    const baseUrl = process.env.SITE_URL ?? `${proto}://${host}`;

    const lastmod = new Date().toISOString().split("T")[0];

    const pages = [
      {
        path: "/",
        priority: "1.00",
        changefreq: "weekly",
      },
      // Add additional static routes here if you create them later, e.g.
      // { path: '/blog', priority: '0.8', changefreq: 'daily' }
    ];

    const urls = pages
      .map((p) => {
        const loc = p.path === "/" ? `${baseUrl}/` : `${baseUrl}${p.path}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`;
      })
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
    return new Response(body, {
      status: 500,
      headers: { "Content-Type": "application/xml" },
    });
  }
}
