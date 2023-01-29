import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { site } from "../utils/site.ts";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{site.title}</title>
        <meta name="title" content={site.title} />
        <meta name="description" content={site.description} />
        {/* Theme */}
        <meta name="theme-color" content="#000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:url" content="https://fitzypop.deno.dev" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={site.description} />
        <meta property="twitter:image" content={site.ogImage} />
      </Head>
      <body class="font-sans leading-normal tracking-normal">
        <div
          class="min-h-screen grid grid-cols-1 bg-default text-white"
          style="grid-template-rows: auto 1fr auto;"
        >
          <Component />
          <Footer />
        </div>
      </body>
    </>
  );
}
