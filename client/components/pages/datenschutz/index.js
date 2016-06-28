
module.exports = {
  data: function () {
    return
  },
  template: require('./template.html'),
  ready: function () {
      var pos = document.getElementById('datenschutz').offsetTop
      window.scrollTo(0, pos)
  }
};
