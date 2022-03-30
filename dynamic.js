const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const domHtml = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"/>
    <title>To do List</title>
</head>
<body>
    <div>
        <div>To Do</div>
        <div class="input">
            <input id="input-list"  type="text">
            <input type="submit"  value="Add task">
        </div>
        <div id="task">
        </div>
        <button class="deletebtn" type="button">Clear All Completed </button>
    </div>
</body>
</html>`, { url: 'https://localhost/' });
global.document = domHtml.window.document;
global.window = domHtml.window;
exports.globaldocument = global.document;