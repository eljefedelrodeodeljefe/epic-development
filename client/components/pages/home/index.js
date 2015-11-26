import Splash from './elements/1_splash/index.js'
import Leistungen from './elements/2_leistungen/index.js'
import Referenzen from './elements/3_referenzen/index.js'
import About from './elements/4_about/index.js'
import Newsletter from './elements/5_newsletter/index.js'

import FooterNav from '../../layouts/footer-nav/index.js'

module.exports = {
  template: require('./template.html'),
  components: {
    Splash,
    Leistungen,
    Referenzen,
    About,
    Newsletter,
    FooterNav
  }
}
