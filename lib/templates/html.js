module.exports = ({ displayName }) => `<!DOCTYPE html>
<html>
  <head>
    <title>${displayName}</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>`;
