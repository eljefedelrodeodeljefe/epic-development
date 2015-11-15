import Counter from '../../counter/index.js'
import Splash from './elements/1_splash/index.js'
import Leistungen from './elements/2_leistungen/index.js'
import Subhead2 from './elements/3_subhead_2/index.js'
import Kontakt from './elements/4_kontakt/index.js'
import Box1 from './elements/5_box_1/index.js'

import FooterNav from '../../layouts/footer-nav/index.js'

module.exports = {
  template: require('./template.html'),
  components: {
    Splash,
    Leistungen,
    Subhead2,
    Kontakt,
    Box1,
    FooterNav
    // Counter
  }
}
