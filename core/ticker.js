const app = require('../config')

module.exports = Object.create({
  quad: 0,
  hour: app.base_time_int,
  to_s: function() {
    this.add_quad();
    return this.get_full_time();
  },
  add_quad: function() {
    this.quad ++;
  },
  get_hour: function () {
    return this.hour + Math.floor(this.quad/4);
  },
  get_minute: function() {
    if (this.quad % 4 == 0) return "00";
    return this.quad % 4 * 15;
  },
  get_bonus_second: function() {
    return this.quad * 15 * 60;
  },
  get_full_time: function() {
    if (this.get_hour() < 10) return "0" + this.get_hour() + this.get_minute();
    return this.get_hour() + "" + this.get_minute();
  }
})
