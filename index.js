const app = require('./config');
const Mustache = require('mustache');
const announcement_generator = require('./core/announcement_generator');
const html_generator = require('./core/html_generator');

let ss_04 = require('./template/list');

for (let i = app.start; i <= (app.end - 9); i++) {
  announcement_generator.gen_list(i, i + 9);
  let input = {
    css_cdn: app.css_cdn,
    js_cdn: app.js_cdn,
    announcements: announcement_generator.to_s()
  }
  let result = Mustache.render(ss_04, input);
  html_generator.gen_html(result);
} 
