const Template = ({ title, body }) => (
  `<!DOCTYPE html>
        <html>

        <head>
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>

        <body>
          <div class="container">
            <div id="app">${body}</div>
          </div>
        </body>

        </html>`
);

module.exports = Template;
