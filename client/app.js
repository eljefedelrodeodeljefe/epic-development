import CompA from './components/layouts/header-nav/index.js'
import CompB from './components/b/index.js'
import Counter from './components/counter/index.js'

module.exports = {
  data: function () {
    return {
      msg: 'Hello Vueify'
    }
  },
  components: {
    CompA,
    CompB,
    Counter
  }
}
