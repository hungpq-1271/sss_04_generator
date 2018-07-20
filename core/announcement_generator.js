const app = require('../config');
const Mustache = require('mustache');
const _ticker = require('./ticker');
let single_announcement = require('../template/single');

module.exports = {
  list: [],
  gen_list: function (start, end) {
    let ticker = Object.create(_ticker);
    for (let i = start; i <= end; i++) {
      this.list.push({
        title: "SAMPLE " + i,
        time: app.base_time_unix + ticker.get_bonus_second(),
        link: app.link,
        mark_new: app.mark_new_img
      });
      ticker.add_quad();
    }
  },
  get_list: function() {
    return this.list;
  },
  to_s: function(index) {
    let result = "";
    for (let i = (index + 8); i >= index; i--) {
      result += Mustache.render(single_announcement, this.list[i])
    }
    return result;
  }
};
