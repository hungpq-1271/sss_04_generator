module.exports = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Notification List</title>
    <meta charset="utf-8" />
    <meta name="description" content="Notification List" />
    <meta name="keywords" content="Notification List" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" type="text/css" href="{{{ css_cdn }}}" />
  </head>
  <body>
    <div id="main-wrapper">
      <div class="notification-modal">
        <div class="notification-item-list">
          {{{ announcements }}}
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript" src="{{{ js_cdn }}}"></script>
</html>`
