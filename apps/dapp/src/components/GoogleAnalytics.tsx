import Script from 'next/script';

export const GoogleAnalytics = ({ gaId }: { gaId: string }) => (
  <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />

    <Script
      id="google-analytics"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `,
      }}
    />
  </>
);
