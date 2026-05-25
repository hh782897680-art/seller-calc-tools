import Script from "next/script";

export default function AdSenseScript() {
  return (
    <Script
      id="adsense-script"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5827463097117050"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
