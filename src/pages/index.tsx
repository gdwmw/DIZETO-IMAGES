import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://www.dizeto.com");
  }, [router]);
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      <meta httpEquiv="Cache-Control" content="max-age=2629440, public" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <title>Redirecting...</title>
    </Head>
  );
}
