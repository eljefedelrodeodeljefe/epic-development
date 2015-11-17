
// REVIEW: hacky since last item of array for it scrolling reverse
let links = [
  'http://res.cloudinary.com/jefe-io/image/upload/c_scale,w_1314/v1447617124/1548168_331138637048654_2974130967997751976_o_abegam.jpg',
  'http://res.cloudinary.com/jefe-io/image/upload/c_scale,w_1322/v1447617129/10273303_295558303940021_3122393801162874264_o-1_kbap6k.jpg',
  'http://res.cloudinary.com/jefe-io/image/upload/c_scale,w_1322/v1447617127/1911020_331141580381693_523657765020535647_o_tc7yxu.jpg',
  'http://res.cloudinary.com/jefe-io/image/upload/v1447757102/splash-home_zhsrro_pdh7ue.jpg'
]
module.exports = {
  template: require('./template.html'),
  data: function() {
    return {
      links: links
    }
  },
  components: {

  },
  ready: function() {
    var checked = 1
    setInterval(function () {
      document.querySelector('input#img-' + checked).checked = true;
      checked = checked === links.length ? checked = 1 : checked + 1
    }, 7500)
  }
}
