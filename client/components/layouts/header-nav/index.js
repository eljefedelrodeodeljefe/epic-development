
module.exports = {
  data: function () {
    return
      msg: 'Hello from Component Home!'
  },
  template: require('./template.html'),
  methods: {
  jump: function (h) {
    var pos = document.getElementById(h).offsetTop;
    window.scrollTo(0, pos - 50);
  }
}
};
