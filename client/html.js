const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <link rel="preload" href="https://api.exchangerate.host/latest?base=USD&symbols=AUD,BRL,CAD,CNY,CZK,EUR,GBP,JPY,KZT,RUB,USD" as="fetch" crossorigin="anonymous" />
      <link rel="preconnect" href="https://source.unsplash.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/main.bundle.js?v=COMMITHASH"></script>
    </body>
  </html>
`
}

export default Html
