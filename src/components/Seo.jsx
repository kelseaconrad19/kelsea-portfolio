import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle ? `${pageTitle} - Professional Portfolio` : "Tunis Personal Portfolio React Next js Template"}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={ "A creative portfolio showcasing my work as a full-stack developer, educator, and content creator." } />
      <meta name="keywords" content={ "portfolio, web developer, react, next.js"} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url || "https://kelseaconrad.com"} />
    </Head>
  </>
);

export default SEO;