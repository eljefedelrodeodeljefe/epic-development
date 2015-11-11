// export default {
//   data () {
//     return { count: 0 }
//   },
//
//   ready () {
//     this.handle = setInterval(() => {
//       this.count++
//     }, 1000)
//   },
//
//   destroyed () {
//     clearInterval(this.handle)
//   }
// }

module.exports = {
  template: require('./template.html')
}

console.log('hello from ');
