const _ticker = require('./ticker');
const app = require('../config');
const fs = require('fs');

let ticker = Object.create(_ticker);
module.exports = {
  gen_html: function(data) {
    file_name = gen_file_name(ticker.to_s())
    fs.writeFileSync(app.output + file_name, data, 'utf8');
    console.log("Created file: "+ file_name);
  }
}

function gen_file_name(time_string) {
  return app.base_date + "-" + time_string + ".html";
}
