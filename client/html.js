const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="description" content="Maccaroni shop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name='HandheldFriendly' content='true' />
      <meta name='MobileOptimized' content='width' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name="theme-color" content="#bef264" />
      <link rel="manifest" type="application/manifest+json" href="manifest.json">
      <link rel="icon" href="images/icon.svg" sizes="any" type="image/svg+xml">
      <link rel="stylesheet" type="text/css" href="/css/main.css">
      <link rel="preload" href="https://api.exchangerate.host/latest?base=USD&symbols=AUD,BRL,CAD,CNY,CZK,EUR,GBP,JPY,KZT,RUB,USD" as="fetch" crossorigin="anonymous">
      <link rel="preconnect" href="https://images.unsplash.com" crossorigin="anonymous">
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/main.bundle.js?v=COMMITHASH"></script>
    </body>
  </html>
`
}

export default Html
