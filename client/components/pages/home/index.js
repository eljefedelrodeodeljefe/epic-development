import Counter from '../../counter/index.js'
import Splash from './elements/1_splash/index.js'
import Subhead1 from './elements/2_subhead_1/index.js'
import Subhead2 from './elements/3_subhead_2/index.js'
import Box1 from './elements/4_box_1/index.js'

import FooterNav from '../../layouts/footer-nav/index.js'

module.exports = {
  template: require('./template.html'),
  components: {
    Splash,
    Subhead1,
    Subhead2,
    Box1,
    FooterNav
    // Counter
  }
}
