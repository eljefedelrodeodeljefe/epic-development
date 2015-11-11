(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = "/*!\nPure v0.6.0\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*//*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*//*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hidden,[hidden]{display:none!important}.pure-img{max-width:100%;height:auto;display:block}.pure-g{letter-spacing:-.31em;text-rendering:optimizespeed;font-family:FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;-webkit-flex-flow:row wrap;display:-ms-flexbox;-ms-flex-flow:row wrap;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.opera-only :-o-prefocus,.pure-g{word-spacing:-.43em}.pure-u{display:inline-block;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-g [class*=\"pure-u\"]{font-family:sans-serif}.pure-u-1,.pure-u-1-1,.pure-u-1-12,.pure-u-1-2,.pure-u-1-24,.pure-u-1-3,.pure-u-1-4,.pure-u-1-5,.pure-u-1-6,.pure-u-1-8,.pure-u-10-24,.pure-u-11-12,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-2-24,.pure-u-2-3,.pure-u-2-5,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24,.pure-u-3-24,.pure-u-3-4,.pure-u-3-5,.pure-u-3-8,.pure-u-4-24,.pure-u-4-5,.pure-u-5-12,.pure-u-5-24,.pure-u-5-5,.pure-u-5-6,.pure-u-5-8,.pure-u-6-24,.pure-u-7-12,.pure-u-7-24,.pure-u-7-8,.pure-u-8-24,.pure-u-9-24{display:inline-block;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-1-24{width:4.1667%}.pure-u-1-12,.pure-u-2-24{width:8.3333%}.pure-u-1-8,.pure-u-3-24{width:12.5%}.pure-u-1-6,.pure-u-4-24{width:16.6667%}.pure-u-1-5{width:20%}.pure-u-5-24{width:20.8333%}.pure-u-1-4,.pure-u-6-24{width:25%}.pure-u-7-24{width:29.1667%}.pure-u-1-3,.pure-u-8-24{width:33.3333%}.pure-u-3-8,.pure-u-9-24{width:37.5%}.pure-u-2-5{width:40%}.pure-u-10-24,.pure-u-5-12{width:41.6667%}.pure-u-11-24{width:45.8333%}.pure-u-1-2,.pure-u-12-24{width:50%}.pure-u-13-24{width:54.1667%}.pure-u-14-24,.pure-u-7-12{width:58.3333%}.pure-u-3-5{width:60%}.pure-u-15-24,.pure-u-5-8{width:62.5%}.pure-u-16-24,.pure-u-2-3{width:66.6667%}.pure-u-17-24{width:70.8333%}.pure-u-18-24,.pure-u-3-4{width:75%}.pure-u-19-24{width:79.1667%}.pure-u-4-5{width:80%}.pure-u-20-24,.pure-u-5-6{width:83.3333%}.pure-u-21-24,.pure-u-7-8{width:87.5%}.pure-u-11-12,.pure-u-22-24{width:91.6667%}.pure-u-23-24{width:95.8333%}.pure-u-1,.pure-u-1-1,.pure-u-24-24,.pure-u-5-5{width:100%}.pure-button{display:inline-block;zoom:1;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit;font-size:100%;border:1px solid #999;border:none transparent;text-decoration:none}.pure-button-hover,.pure-button:focus,.pure-button:hover{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000', GradientType=0);background-image:-webkit-gradient(linear,0 0,0 100%,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:-moz-linear-gradient(top,rgba(0,0,0,.05) 0,rgba(0,0,0,.1));background-image:-o-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus{outline:0}.pure-button-active,.pure-button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset}.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled]{border:none;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);filter:alpha(opacity=40);-khtml-opacity:.4;-moz-opacity:.4;opacity:.4;cursor:not-allowed;box-shadow:none}.pure-button-hidden{display:none}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected{background-color:#0078e7;color:#fff}.pure-form input[type=color],.pure-form input[type=date],.pure-form input[type=datetime-local],.pure-form input[type=datetime],.pure-form input[type=email],.pure-form input[type=month],.pure-form input[type=number],.pure-form input[type=password],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=text],.pure-form input[type=time],.pure-form input[type=url],.pure-form input[type=week],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input:not([type]){padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input[type=color]{padding:.2em .5em}.pure-form input:not([type]):focus,.pure-form input[type=color]:focus,.pure-form input[type=date]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=email]:focus,.pure-form input[type=month]:focus,.pure-form input[type=number]:focus,.pure-form input[type=password]:focus,.pure-form input[type=search]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=text]:focus,.pure-form input[type=time]:focus,.pure-form input[type=url]:focus,.pure-form input[type=week]:focus,.pure-form select:focus,.pure-form textarea:focus{outline:0;border-color:#129FEA}.pure-form input[type=checkbox]:focus,.pure-form input[type=file]:focus,.pure-form input[type=radio]:focus{outline:#129FEA auto 1px}.pure-form .pure-checkbox,.pure-form .pure-radio{margin:.5em 0;display:block}.pure-form input:not([type])[disabled],.pure-form input[type=color][disabled],.pure-form input[type=date][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=email][disabled],.pure-form input[type=month][disabled],.pure-form input[type=number][disabled],.pure-form input[type=password][disabled],.pure-form input[type=search][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=text][disabled],.pure-form input[type=time][disabled],.pure-form input[type=url][disabled],.pure-form input[type=week][disabled],.pure-form select[disabled],.pure-form textarea[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly]{background-color:#eee;color:#777;border-color:#ccc}.pure-form input:focus:invalid,.pure-form select:focus:invalid,.pure-form textarea:focus:invalid{color:#b94a48;border-color:#e9322d}.pure-form input[type=checkbox]:focus:invalid:focus,.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus{outline-color:#e9322d}.pure-form select{height:2.25em;border:1px solid #ccc;background-color:#fff}.pure-form select[multiple]{height:auto}.pure-form fieldset{margin:0;padding:.35em 0 .75em;border:0}.pure-form legend{display:block;width:100%;padding:.3em 0;margin-bottom:.3em;color:#333;border-bottom:1px solid #e5e5e5}.pure-form-stacked input:not([type]),.pure-form-stacked input[type=color],.pure-form-stacked input[type=date],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=email],.pure-form-stacked input[type=file],.pure-form-stacked input[type=month],.pure-form-stacked input[type=number],.pure-form-stacked input[type=password],.pure-form-stacked input[type=search],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=text],.pure-form-stacked input[type=time],.pure-form-stacked input[type=url],.pure-form-stacked input[type=week],.pure-form-stacked label,.pure-form-stacked select,.pure-form-stacked textarea{display:block;margin:.25em 0}.pure-form-aligned .pure-help-inline,.pure-form-aligned input,.pure-form-aligned select,.pure-form-aligned textarea,.pure-form-message-inline{display:inline-block;vertical-align:middle}.pure-form-aligned textarea{vertical-align:top}.pure-form-aligned .pure-control-group{margin-bottom:.5em}.pure-form-aligned .pure-control-group label{text-align:right;display:inline-block;vertical-align:middle;width:10em;margin:0 1em 0 0}.pure-form-aligned .pure-controls{margin:1.5em 0 0 11em}.pure-form .pure-input-rounded,.pure-form input.pure-input-rounded{border-radius:2em;padding:.5em 1em}.pure-form .pure-group fieldset{margin-bottom:10px}.pure-form .pure-group input,.pure-form .pure-group textarea{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus{z-index:3}.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child{top:1px;border-radius:4px;margin:0}.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.pure-form .pure-group button{margin:.35em 0}.pure-form .pure-input-1{width:100%}.pure-form .pure-input-2-3{width:66%}.pure-form .pure-input-1-2{width:50%}.pure-form .pure-input-1-3{width:33%}.pure-form .pure-input-1-4{width:25%}.pure-form .pure-help-inline,.pure-form-message-inline{display:inline-block;padding-left:.3em;color:#666;vertical-align:middle;font-size:.875em}.pure-form-message{display:block;color:#666;font-size:.875em}@media only screen and (max-width :480px){.pure-form button[type=submit]{margin:.7em 0 0}.pure-form input:not([type]),.pure-form input[type=color],.pure-form input[type=date],.pure-form input[type=datetime-local],.pure-form input[type=datetime],.pure-form input[type=email],.pure-form input[type=month],.pure-form input[type=number],.pure-form input[type=password],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=text],.pure-form input[type=time],.pure-form input[type=url],.pure-form input[type=week],.pure-form label{margin-bottom:.3em;display:block}.pure-group input:not([type]),.pure-group input[type=color],.pure-group input[type=date],.pure-group input[type=datetime-local],.pure-group input[type=datetime],.pure-group input[type=email],.pure-group input[type=month],.pure-group input[type=number],.pure-group input[type=password],.pure-group input[type=search],.pure-group input[type=tel],.pure-group input[type=text],.pure-group input[type=time],.pure-group input[type=url],.pure-group input[type=week]{margin-bottom:0}.pure-form-aligned .pure-control-group label{margin-bottom:.3em;text-align:left;display:block;width:100%}.pure-form-aligned .pure-controls{margin:1.5em 0 0}.pure-form .pure-help-inline,.pure-form-message,.pure-form-message-inline{display:block;font-size:.75em;padding:.2em 0 .8em}}.pure-menu{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-menu-fixed{position:fixed;left:0;top:0;z-index:3}.pure-menu-item,.pure-menu-list{position:relative}.pure-menu-list{list-style:none;margin:0;padding:0}.pure-menu-item{padding:0;margin:0;height:100%}.pure-menu-heading,.pure-menu-link{display:block;text-decoration:none;white-space:nowrap}.pure-menu-horizontal{width:100%;white-space:nowrap}.pure-menu-horizontal .pure-menu-list{display:inline-block}.pure-menu-horizontal .pure-menu-heading,.pure-menu-horizontal .pure-menu-item,.pure-menu-horizontal .pure-menu-separator{display:inline-block;zoom:1;vertical-align:middle}.pure-menu-item .pure-menu-item{display:block}.pure-menu-children{display:none;position:absolute;left:100%;top:0;margin:0;padding:0;z-index:3}.pure-menu-horizontal .pure-menu-children{left:0;top:auto;width:inherit}.pure-menu-active>.pure-menu-children,.pure-menu-allow-hover:hover>.pure-menu-children{display:block;position:absolute}.pure-menu-has-children>.pure-menu-link:after{padding-left:.5em;content:\"\\25B8\";font-size:small}.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after{content:\"\\25BE\"}.pure-menu-scrollable{overflow-y:scroll;overflow-x:hidden}.pure-menu-scrollable .pure-menu-list{display:block}.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list{display:inline-block}.pure-menu-horizontal.pure-menu-scrollable{white-space:nowrap;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;padding:.5em 0}.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar{display:none}.pure-menu-separator{background-color:#ccc;height:1px;margin:.3em 0}.pure-menu-horizontal .pure-menu-separator{width:1px;height:1.3em;margin:0 .3em}.pure-menu-heading{text-transform:uppercase;color:#565d64}.pure-menu-link{color:#777}.pure-menu-children{background-color:#fff}.pure-menu-disabled,.pure-menu-heading,.pure-menu-link{padding:.5em 1em}.pure-menu-disabled{opacity:.5}.pure-menu-disabled .pure-menu-link:hover{background-color:transparent}.pure-menu-active>.pure-menu-link,.pure-menu-link:focus,.pure-menu-link:hover{background-color:#eee}.pure-menu-selected .pure-menu-link,.pure-menu-selected .pure-menu-link:visited{color:#000}.pure-table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}.pure-table caption{color:#000;font:italic 85%/1 arial,sans-serif;padding:1em 0;text-align:center}.pure-table td,.pure-table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:.5em 1em}.pure-table td:first-child,.pure-table th:first-child{border-left-width:0}.pure-table thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}.pure-table td{background-color:transparent}.pure-table-odd td,.pure-table-striped tr:nth-child(2n-1) td{background-color:#f2f2f2}.pure-table-bordered td{border-bottom:1px solid #cbcbcb}.pure-table-bordered tbody>tr:last-child>td{border-bottom-width:0}.pure-table-horizontal td,.pure-table-horizontal th{border-width:0 0 1px;border-bottom:1px solid #cbcbcb}.pure-table-horizontal tbody>tr:last-child>td{border-bottom-width:0}body{margin:0;padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{line-height:1.7em;color:#7f8c8d;font-size:13px}h1,h2,h3,h4,h5,h6,label{color:#34495e}.pure-img-responsive{max-width:100%;height:auto}.l-box{padding:1em}.l-box-lrg{padding:2em;border-bottom:1px solid rgba(0,0,0,.1)}.is-center{text-align:center}.pure-form label{margin:1em 0 0;font-weight:700;font-size:100%}.pure-form input[type]{border:2px solid #ddd;box-shadow:none;font-size:100%;width:100%;margin-bottom:1em}.pure-button{background-color:#1f8dd6;color:#fff;padding:.5em 2em;border-radius:5px}a.pure-button-primary{background:#fff;color:#1f8dd6;border-radius:5px;font-size:120%}.splash-container{background:#1f8dd6;z-index:1;overflow:hidden;width:100%;height:88%;top:0;left:0;position:fixed!important}.splash{width:80%;height:50%;margin:auto;position:absolute;top:100px;left:0;bottom:0;right:0;text-align:center;text-transform:uppercase}.splash-head{font-size:20px;color:#fff;border:3px solid #fff;padding:1em 1.6em;font-weight:100;border-radius:5px;line-height:1em}.splash-subhead{color:#fff;letter-spacing:.05em;opacity:.8}.content-wrapper{position:absolute;top:87%;width:100%;min-height:12%;z-index:2;background:#fff}.content-head{font-weight:400;text-transform:uppercase;letter-spacing:.1em;margin:2em 0 1em}.content-head-ribbon{color:#fff}.content-subhead{color:#1f8dd6}.content-subhead i{margin-right:7px}.ribbon{background:#2d3e50;color:#aaa}.footer{background:#111}@media (min-width:48em){body{font-size:16px}.content{padding:1em}.content.slide-container{padding:0}.splash-head{font-size:250%}.l-box-lrg{border:none}}@media (min-width:78em){.splash-head{font-size:300%}}"; (require("browserify-css").createStyle(css, { "href": "client/app.css"})); module.exports = css;
},{"browserify-css":26}],2:[function(require,module,exports){
module.exports = "<!-- <div id=\"app\">\n  <p>\n </p>\n  <router-view></router-view>\n  <h1>Hello</h1>\n  <h1>{{msg}}</h1>\n\n  <comp-b></comp-b>\n  <counter></counter>\n</div> -->\n<style lang=\"stylus\" src=\"./app.styl\"></style>\n<div>\n  <header-nav></header-nav>\n  <!-- use router-view element as route outlet -->\n  <router-view></router-view>\n</div>\n";

},{}],3:[function(require,module,exports){
'use strict';

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
};

console.log('hello from ');

},{"./template.html":4}],4:[function(require,module,exports){
module.exports = "<div>\n  <p>I am a Counter Component. Edit me in dev mode.</p>\n  <p class=\"count\">Current count: {{count}}</p>\n</div>\n";

},{}],5:[function(require,module,exports){
'use strict';

module.exports = {
  data: function data() {
    return;
    msg: 'Hello from Component AAA!';
  },
  template: require('./template.html')
};

},{"./template.html":6}],6:[function(require,module,exports){
module.exports = "<div class=\"footer l-box is-center\">\n    This is the footer\n</div>\n";

},{}],7:[function(require,module,exports){
'use strict';

module.exports = {
  data: function data() {
    return;
    msg: 'Hello from Component Home!';
  },
  template: require('./template.html')
};

},{"./template.html":8}],8:[function(require,module,exports){
module.exports = "<div class=\"home-menu pure-menu pure-menu-horizontal pure-menu-fixed\">\n        <a class=\"pure-menu-heading logo\" v-link=\"{ path: '/' }\"><img class=\"header logo\" src=\"http://res.cloudinary.com/jefe-io/image/upload/v1447273038/epic_logo_black_optimized_uojzqz.svg\" alt=\"\" /></a>\n\n        <ul class=\"pure-menu-list\">\n            <li class=\"pure-menu-item pure-menu-selected\"><a v-link=\"{ path: '/' }\" class=\"pure-menu-link\">Home</a></li>\n            <li class=\"pure-menu-item\"><a v-link=\"{ path: '/collection' }\" class=\"pure-menu-link\">Collection</a></li>\n            <li class=\"pure-menu-item\"><a v-link=\"{ path: '/about' }\" class=\"pure-menu-link\">About</a></li>\n            <!-- <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Sign Up</a></li> -->\n        </ul>\n    </div>\n";

},{}],9:[function(require,module,exports){
'use strict';

module.exports = {
  template: '<div>This is About</div>'
};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = {
  template: require('./template.html'),
  components: {}
};

},{"./template.html":11}],11:[function(require,module,exports){
module.exports = "<div class=\"content slide-container\">\n    <div class=\"\">\n        <!-- <h1 class=\"splash-head\">Big Bold Text</h1>\n        <p class=\"splash-subhead\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        </p>\n        <p>\n            <a href=\"http://purecss.io\" class=\"pure-button pure-button-primary\">Get Started</a>\n        </p> -->\n\n        <ul class=\"slides\">\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-1\" checked />\n          <li class=\"slide-container\">\n      \t\t<div class=\"slide\">\n      \t\t\t<img src=\"http://res.cloudinary.com/jefe-io/image/upload/v1443615109/5193672965_723916da0a_b_jszhs3.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-6\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-2\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-2\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://res.cloudinary.com/jefe-io/image/upload/v1443615109/5193672965_723916da0a_b_jszhs3.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-1\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-3\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-3\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-2\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-4\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-4\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-3\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-5\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-5\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-4\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-6\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-6\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-5\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-1\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <li class=\"nav-dots\">\n            <label for=\"img-1\" class=\"nav-dot\" id=\"img-dot-1\"></label>\n            <label for=\"img-2\" class=\"nav-dot\" id=\"img-dot-2\"></label>\n            <label for=\"img-3\" class=\"nav-dot\" id=\"img-dot-3\"></label>\n            <label for=\"img-4\" class=\"nav-dot\" id=\"img-dot-4\"></label>\n            <label for=\"img-5\" class=\"nav-dot\" id=\"img-dot-5\"></label>\n            <label for=\"img-6\" class=\"nav-dot\" id=\"img-dot-6\"></label>\n          </li>\n      </ul>\n\n    </div>\n</div>\n";

},{}],12:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"./template.html":13,"dup":10}],13:[function(require,module,exports){
module.exports = "<div class=\"content\">\n    <h2 class=\"content-head is-center\">Excepteur sint occaecat cupidatat.</h2>\n\n    <div class=\"pure-g\">\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-rocket\"></i>\n                Get Started Quickly\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-mobile\"></i>\n                Responsive Layouts\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-th-large\"></i>\n                Modular\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-check-square-o\"></i>\n                Plays Nice\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n    </div>\n</div>\n";

},{}],14:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"./template.html":15,"dup":10}],15:[function(require,module,exports){
module.exports = "<div class=\"ribbon l-box-lrg pure-g\">\n    <div class=\"l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5\">\n\n    </div>\n    <div class=\"pure-u-1 pure-u-md-1-2 pure-u-lg-3-5\">\n\n        <h2 class=\"content-head content-head-ribbon\">Laboris nisi ut aliquip.</h2>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat. Duis aute irure dolor.\n        </p>\n    </div>\n</div>\n";

},{}],16:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"./template.html":17,"dup":10}],17:[function(require,module,exports){
module.exports = "<div class=\"content\">\n    <h2 class=\"content-head is-center\">Dolore magna aliqua. Uis aute irure.</h2>\n\n    <div class=\"pure-g\">\n        <div class=\"l-box-lrg pure-u-1 pure-u-md-2-5\">\n            <form class=\"pure-form pure-form-stacked\">\n                <fieldset>\n\n                    <label for=\"name\">Your Name</label>\n                    <input id=\"name\" type=\"text\" placeholder=\"Your Name\">\n\n\n                    <label for=\"email\">Your Email</label>\n                    <input id=\"email\" type=\"email\" placeholder=\"Your Email\">\n\n                    <label for=\"password\">Your Password</label>\n                    <input id=\"password\" type=\"password\" placeholder=\"Your Password\">\n\n                    <button type=\"submit\" class=\"pure-button\">Sign Up</button>\n                </fieldset>\n            </form>\n        </div>\n\n        <div class=\"l-box-lrg pure-u-1 pure-u-md-3-5\">\n            <h4>Contact Us</h4>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat.\n            </p>\n\n            <h4>More Information</h4>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n        </div>\n    </div>\n\n</div>\n";

},{}],18:[function(require,module,exports){
'use strict';

var _index = require('../../counter/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./elements/1_splash/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./elements/2_subhead_1/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./elements/3_subhead_2/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./elements/4_box_1/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../../layouts/footer-nav/index.js');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  template: require('./template.html'),
  components: {
    Splash: _index4.default,
    Subhead1: _index6.default,
    Subhead2: _index8.default,
    Box1: _index10.default,
    FooterNav: _index12.default
    // Counter
  }
};

},{"../../counter/index.js":3,"../../layouts/footer-nav/index.js":5,"./elements/1_splash/index.js":10,"./elements/2_subhead_1/index.js":12,"./elements/3_subhead_2/index.js":14,"./elements/4_box_1/index.js":16,"./template.html":19}],19:[function(require,module,exports){
module.exports = "\n<splash></splash>\n\n<div class=\"content-wrapper\">\n  <subhead1></subhead1>\n  <subhead2></subhead2>\n  <box1></box1>\n  <footer-nav></footer-nav>\n</div>\n<!-- <counter></counter> -->\n";

},{}],20:[function(require,module,exports){
'use strict';

var _index = require('./components/layouts/header-nav/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./components/pages/home/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./components/pages/about/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = require('vue');
var css = require('./app.css');

// // var App = require('./app.js')
var VueRouter = require('vue-router');

// Registering middleware
Vue.use(VueRouter);

// bootstrapping the instance
var App = Vue.extend({
  components: {
    HeaderNav: _index2.default
  },
  template: require('./app.html')
});
// End of setting up vue

// Routing below...
var options = {
  hashbang: false
};

var router = new VueRouter({
  hashbang: true
});

router.map({
  '/': {
    component: _index4.default
  },
  '/about': {
    component: _index6.default
  }
});

router.start(App, '#app');
// End of routing

},{"./app.css":1,"./app.html":2,"./components/layouts/header-nav/index.js":7,"./components/pages/about/index.js":9,"./components/pages/home/index.js":18,"vue":121,"vue-router":50}],21:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":27}],22:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":28}],23:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":29}],24:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],25:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],26:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }
        
        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            head.appendChild(style);
        } else if (style.styleSheet) { // for IE8 and below
            head.appendChild(style);
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            head.appendChild(style);
        }
    }
};

},{}],27:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":38}],28:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/$.core').Object.freeze;
},{"../../modules/$.core":31,"../../modules/es6.object.freeze":41}],29:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":31,"../../modules/es6.object.keys":42}],30:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],31:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],32:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":30}],33:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],34:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":31,"./$.ctx":32,"./$.global":36}],35:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],36:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],37:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],38:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],39:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":31,"./$.export":34,"./$.fails":35}],40:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":33}],41:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});
},{"./$.is-object":37,"./$.object-sap":39}],42:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":39,"./$.to-object":40}],43:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],44:[function(require,module,exports){
(function() {
    "use strict";
    function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
      this.path = path;
      this.matcher = matcher;
      this.delegate = delegate;
    }

    $$route$recognizer$dsl$$Target.prototype = {
      to: function(target, callback) {
        var delegate = this.delegate;

        if (delegate && delegate.willAddRoute) {
          target = delegate.willAddRoute(this.matcher.target, target);
        }

        this.matcher.add(this.path, target);

        if (callback) {
          if (callback.length === 0) { throw new Error("You must have an argument in the function passed to `to`"); }
          this.matcher.addChild(this.path, target, callback, this.delegate);
        }
        return this;
      }
    };

    function $$route$recognizer$dsl$$Matcher(target) {
      this.routes = {};
      this.children = {};
      this.target = target;
    }

    $$route$recognizer$dsl$$Matcher.prototype = {
      add: function(path, handler) {
        this.routes[path] = handler;
      },

      addChild: function(path, target, callback, delegate) {
        var matcher = new $$route$recognizer$dsl$$Matcher(target);
        this.children[path] = matcher;

        var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);

        if (delegate && delegate.contextEntered) {
          delegate.contextEntered(target, match);
        }

        callback(match);
      }
    };

    function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
      return function(path, nestedCallback) {
        var fullPath = startingPath + path;

        if (nestedCallback) {
          nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
        } else {
          return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
        }
      };
    }

    function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
      var len = 0;
      for (var i=0, l=routeArray.length; i<l; i++) {
        len += routeArray[i].path.length;
      }

      path = path.substr(len);
      var route = { path: path, handler: handler };
      routeArray.push(route);
    }

    function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
      var routes = matcher.routes;

      for (var path in routes) {
        if (routes.hasOwnProperty(path)) {
          var routeArray = baseRoute.slice();
          $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);

          if (matcher.children[path]) {
            $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
          } else {
            callback.call(binding, routeArray);
          }
        }
      }
    }

    var $$route$recognizer$dsl$$default = function(callback, addRouteCallback) {
      var matcher = new $$route$recognizer$dsl$$Matcher();

      callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));

      $$route$recognizer$dsl$$eachRoute([], matcher, function(route) {
        if (addRouteCallback) { addRouteCallback(this, route); }
        else { this.add(route); }
      }, this);
    };

    var $$route$recognizer$$specials = [
      '/', '.', '*', '+', '?', '|',
      '(', ')', '[', ']', '{', '}', '\\'
    ];

    var $$route$recognizer$$escapeRegex = new RegExp('(\\' + $$route$recognizer$$specials.join('|\\') + ')', 'g');

    function $$route$recognizer$$isArray(test) {
      return Object.prototype.toString.call(test) === "[object Array]";
    }

    // A Segment represents a segment in the original route description.
    // Each Segment type provides an `eachChar` and `regex` method.
    //
    // The `eachChar` method invokes the callback with one or more character
    // specifications. A character specification consumes one or more input
    // characters.
    //
    // The `regex` method returns a regex fragment for the segment. If the
    // segment is a dynamic of star segment, the regex fragment also includes
    // a capture.
    //
    // A character specification contains:
    //
    // * `validChars`: a String with a list of all valid characters, or
    // * `invalidChars`: a String with a list of all invalid characters
    // * `repeat`: true if the character specification can repeat

    function $$route$recognizer$$StaticSegment(string) { this.string = string; }
    $$route$recognizer$$StaticSegment.prototype = {
      eachChar: function(callback) {
        var string = this.string, ch;

        for (var i=0, l=string.length; i<l; i++) {
          ch = string.charAt(i);
          callback({ validChars: ch });
        }
      },

      regex: function() {
        return this.string.replace($$route$recognizer$$escapeRegex, '\\$1');
      },

      generate: function() {
        return this.string;
      }
    };

    function $$route$recognizer$$DynamicSegment(name) { this.name = name; }
    $$route$recognizer$$DynamicSegment.prototype = {
      eachChar: function(callback) {
        callback({ invalidChars: "/", repeat: true });
      },

      regex: function() {
        return "([^/]+)";
      },

      generate: function(params) {
        return params[this.name];
      }
    };

    function $$route$recognizer$$StarSegment(name) { this.name = name; }
    $$route$recognizer$$StarSegment.prototype = {
      eachChar: function(callback) {
        callback({ invalidChars: "", repeat: true });
      },

      regex: function() {
        return "(.+)";
      },

      generate: function(params) {
        return params[this.name];
      }
    };

    function $$route$recognizer$$EpsilonSegment() {}
    $$route$recognizer$$EpsilonSegment.prototype = {
      eachChar: function() {},
      regex: function() { return ""; },
      generate: function() { return ""; }
    };

    function $$route$recognizer$$parse(route, names, specificity) {
      // normalize route as not starting with a "/". Recognition will
      // also normalize.
      if (route.charAt(0) === "/") { route = route.substr(1); }

      var segments = route.split("/"), results = [];

      // A routes has specificity determined by the order that its different segments
      // appear in. This system mirrors how the magnitude of numbers written as strings
      // works.
      // Consider a number written as: "abc". An example would be "200". Any other number written
      // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
      // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
      // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
      // leading symbol, "1".
      // The rule is that symbols to the left carry more weight than symbols to the right
      // when a number is written out as a string. In the above strings, the leading digit
      // represents how many 100's are in the number, and it carries more weight than the middle
      // number which represents how many 10's are in the number.
      // This system of number magnitude works well for route specificity, too. A route written as
      // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
      // `x`, irrespective of the other parts.
      // Because of this similarity, we assign each type of segment a number value written as a
      // string. We can find the specificity of compound routes by concatenating these strings
      // together, from left to right. After we have looped through all of the segments,
      // we convert the string to a number.
      specificity.val = '';

      for (var i=0, l=segments.length; i<l; i++) {
        var segment = segments[i], match;

        if (match = segment.match(/^:([^\/]+)$/)) {
          results.push(new $$route$recognizer$$DynamicSegment(match[1]));
          names.push(match[1]);
          specificity.val += '3';
        } else if (match = segment.match(/^\*([^\/]+)$/)) {
          results.push(new $$route$recognizer$$StarSegment(match[1]));
          specificity.val += '2';
          names.push(match[1]);
        } else if(segment === "") {
          results.push(new $$route$recognizer$$EpsilonSegment());
          specificity.val += '1';
        } else {
          results.push(new $$route$recognizer$$StaticSegment(segment));
          specificity.val += '4';
        }
      }

      specificity.val = +specificity.val;

      return results;
    }

    // A State has a character specification and (`charSpec`) and a list of possible
    // subsequent states (`nextStates`).
    //
    // If a State is an accepting state, it will also have several additional
    // properties:
    //
    // * `regex`: A regular expression that is used to extract parameters from paths
    //   that reached this accepting state.
    // * `handlers`: Information on how to convert the list of captures into calls
    //   to registered handlers with the specified parameters
    // * `types`: How many static, dynamic or star segments in this route. Used to
    //   decide which route to use if multiple registered routes match a path.
    //
    // Currently, State is implemented naively by looping over `nextStates` and
    // comparing a character specification against a character. A more efficient
    // implementation would use a hash of keys pointing at one or more next states.

    function $$route$recognizer$$State(charSpec) {
      this.charSpec = charSpec;
      this.nextStates = [];
    }

    $$route$recognizer$$State.prototype = {
      get: function(charSpec) {
        var nextStates = this.nextStates;

        for (var i=0, l=nextStates.length; i<l; i++) {
          var child = nextStates[i];

          var isEqual = child.charSpec.validChars === charSpec.validChars;
          isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

          if (isEqual) { return child; }
        }
      },

      put: function(charSpec) {
        var state;

        // If the character specification already exists in a child of the current
        // state, just return that state.
        if (state = this.get(charSpec)) { return state; }

        // Make a new state for the character spec
        state = new $$route$recognizer$$State(charSpec);

        // Insert the new state as a child of the current state
        this.nextStates.push(state);

        // If this character specification repeats, insert the new state as a child
        // of itself. Note that this will not trigger an infinite loop because each
        // transition during recognition consumes a character.
        if (charSpec.repeat) {
          state.nextStates.push(state);
        }

        // Return the new state
        return state;
      },

      // Find a list of child states matching the next character
      match: function(ch) {
        // DEBUG "Processing `" + ch + "`:"
        var nextStates = this.nextStates,
            child, charSpec, chars;

        // DEBUG "  " + debugState(this)
        var returned = [];

        for (var i=0, l=nextStates.length; i<l; i++) {
          child = nextStates[i];

          charSpec = child.charSpec;

          if (typeof (chars = charSpec.validChars) !== 'undefined') {
            if (chars.indexOf(ch) !== -1) { returned.push(child); }
          } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
            if (chars.indexOf(ch) === -1) { returned.push(child); }
          }
        }

        return returned;
      }

      /** IF DEBUG
      , debug: function() {
        var charSpec = this.charSpec,
            debug = "[",
            chars = charSpec.validChars || charSpec.invalidChars;

        if (charSpec.invalidChars) { debug += "^"; }
        debug += chars;
        debug += "]";

        if (charSpec.repeat) { debug += "+"; }

        return debug;
      }
      END IF **/
    };

    /** IF DEBUG
    function debug(log) {
      console.log(log);
    }

    function debugState(state) {
      return state.nextStates.map(function(n) {
        if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
        return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
      }).join(", ")
    }
    END IF **/

    // Sort the routes by specificity
    function $$route$recognizer$$sortSolutions(states) {
      return states.sort(function(a, b) {
        return b.specificity.val - a.specificity.val;
      });
    }

    function $$route$recognizer$$recognizeChar(states, ch) {
      var nextStates = [];

      for (var i=0, l=states.length; i<l; i++) {
        var state = states[i];

        nextStates = nextStates.concat(state.match(ch));
      }

      return nextStates;
    }

    var $$route$recognizer$$oCreate = Object.create || function(proto) {
      function F() {}
      F.prototype = proto;
      return new F();
    };

    function $$route$recognizer$$RecognizeResults(queryParams) {
      this.queryParams = queryParams || {};
    }
    $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
      splice: Array.prototype.splice,
      slice:  Array.prototype.slice,
      push:   Array.prototype.push,
      length: 0,
      queryParams: null
    });

    function $$route$recognizer$$findHandler(state, path, queryParams) {
      var handlers = state.handlers, regex = state.regex;
      var captures = path.match(regex), currentCapture = 1;
      var result = new $$route$recognizer$$RecognizeResults(queryParams);

      for (var i=0, l=handlers.length; i<l; i++) {
        var handler = handlers[i], names = handler.names, params = {};

        for (var j=0, m=names.length; j<m; j++) {
          params[names[j]] = captures[currentCapture++];
        }

        result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
      }

      return result;
    }

    function $$route$recognizer$$addSegment(currentState, segment) {
      segment.eachChar(function(ch) {
        var state;

        currentState = currentState.put(ch);
      });

      return currentState;
    }

    function $$route$recognizer$$decodeQueryParamPart(part) {
      // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
      part = part.replace(/\+/gm, '%20');
      return decodeURIComponent(part);
    }

    // The main interface

    var $$route$recognizer$$RouteRecognizer = function() {
      this.rootState = new $$route$recognizer$$State();
      this.names = {};
    };


    $$route$recognizer$$RouteRecognizer.prototype = {
      add: function(routes, options) {
        var currentState = this.rootState, regex = "^",
            specificity = {},
            handlers = [], allSegments = [], name;

        var isEmpty = true;

        for (var i=0, l=routes.length; i<l; i++) {
          var route = routes[i], names = [];

          var segments = $$route$recognizer$$parse(route.path, names, specificity);

          allSegments = allSegments.concat(segments);

          for (var j=0, m=segments.length; j<m; j++) {
            var segment = segments[j];

            if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }

            isEmpty = false;

            // Add a "/" for the new segment
            currentState = currentState.put({ validChars: "/" });
            regex += "/";

            // Add a representation of the segment to the NFA and regex
            currentState = $$route$recognizer$$addSegment(currentState, segment);
            regex += segment.regex();
          }

          var handler = { handler: route.handler, names: names };
          handlers.push(handler);
        }

        if (isEmpty) {
          currentState = currentState.put({ validChars: "/" });
          regex += "/";
        }

        currentState.handlers = handlers;
        currentState.regex = new RegExp(regex + "$");
        currentState.specificity = specificity;

        if (name = options && options.as) {
          this.names[name] = {
            segments: allSegments,
            handlers: handlers
          };
        }
      },

      handlersFor: function(name) {
        var route = this.names[name], result = [];
        if (!route) { throw new Error("There is no route named " + name); }

        for (var i=0, l=route.handlers.length; i<l; i++) {
          result.push(route.handlers[i]);
        }

        return result;
      },

      hasRoute: function(name) {
        return !!this.names[name];
      },

      generate: function(name, params) {
        var route = this.names[name], output = "";
        if (!route) { throw new Error("There is no route named " + name); }

        var segments = route.segments;

        for (var i=0, l=segments.length; i<l; i++) {
          var segment = segments[i];

          if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }

          output += "/";
          output += segment.generate(params);
        }

        if (output.charAt(0) !== '/') { output = '/' + output; }

        if (params && params.queryParams) {
          output += this.generateQueryString(params.queryParams, route.handlers);
        }

        return output;
      },

      generateQueryString: function(params, handlers) {
        var pairs = [];
        var keys = [];
        for(var key in params) {
          if (params.hasOwnProperty(key)) {
            keys.push(key);
          }
        }
        keys.sort();
        for (var i = 0, len = keys.length; i < len; i++) {
          key = keys[i];
          var value = params[key];
          if (value == null) {
            continue;
          }
          var pair = encodeURIComponent(key);
          if ($$route$recognizer$$isArray(value)) {
            for (var j = 0, l = value.length; j < l; j++) {
              var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
              pairs.push(arrayPair);
            }
          } else {
            pair += "=" + encodeURIComponent(value);
            pairs.push(pair);
          }
        }

        if (pairs.length === 0) { return ''; }

        return "?" + pairs.join("&");
      },

      parseQueryString: function(queryString) {
        var pairs = queryString.split("&"), queryParams = {};
        for(var i=0; i < pairs.length; i++) {
          var pair      = pairs[i].split('='),
              key       = $$route$recognizer$$decodeQueryParamPart(pair[0]),
              keyLength = key.length,
              isArray = false,
              value;
          if (pair.length === 1) {
            value = 'true';
          } else {
            //Handle arrays
            if (keyLength > 2 && key.slice(keyLength -2) === '[]') {
              isArray = true;
              key = key.slice(0, keyLength - 2);
              if(!queryParams[key]) {
                queryParams[key] = [];
              }
            }
            value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : '';
          }
          if (isArray) {
            queryParams[key].push(value);
          } else {
            queryParams[key] = value;
          }
        }
        return queryParams;
      },

      recognize: function(path) {
        var states = [ this.rootState ],
            pathLen, i, l, queryStart, queryParams = {},
            isSlashDropped = false;

        queryStart = path.indexOf('?');
        if (queryStart !== -1) {
          var queryString = path.substr(queryStart + 1, path.length);
          path = path.substr(0, queryStart);
          queryParams = this.parseQueryString(queryString);
        }

        path = decodeURI(path);

        // DEBUG GROUP path

        if (path.charAt(0) !== "/") { path = "/" + path; }

        pathLen = path.length;
        if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
          path = path.substr(0, pathLen - 1);
          isSlashDropped = true;
        }

        for (i=0, l=path.length; i<l; i++) {
          states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
          if (!states.length) { break; }
        }

        // END DEBUG GROUP

        var solutions = [];
        for (i=0, l=states.length; i<l; i++) {
          if (states[i].handlers) { solutions.push(states[i]); }
        }

        states = $$route$recognizer$$sortSolutions(solutions);

        var state = solutions[0];

        if (state && state.handlers) {
          // if a trailing slash was dropped and a star segment is the last segment
          // specified, put the trailing slash back
          if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
            path = path + "/";
          }
          return $$route$recognizer$$findHandler(state, path, queryParams);
        }
      }
    };

    $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;

    $$route$recognizer$$RouteRecognizer.VERSION = '0.1.9';

    var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define('route-recognizer', function() { return $$route$recognizer$$default; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = $$route$recognizer$$default;
    } else if (typeof this !== 'undefined') {
      this['RouteRecognizer'] = $$route$recognizer$$default;
    }
}).call(this);


},{}],45:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _util = require('../util');

var trailingSlashRE = /\/$/;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

// install v-link, which provides navigation support for
// HTML5 history mode

exports['default'] = function (Vue) {

  var _ = Vue.util;

  Vue.directive('link', {

    bind: function bind() {
      var _this = this;

      var vm = this.vm;
      /* istanbul ignore if */
      if (!vm.$route) {
        _util.warn('v-link can only be used inside a ' + 'router-enabled app.');
        return;
      }
      var router = vm.$route.router;
      this.handler = function (e) {
        // don't redirect with control keys
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        if (e.defaultPrevented) return;
        // don't redirect on right click
        if (e.button !== 0) return;

        var target = _this.target;
        var go = function go(target) {
          e.preventDefault();
          if (target != null) {
            router.go(target);
          }
        };

        if (_this.el.tagName === 'A' || e.target === _this.el) {
          // v-link on <a v-link="'path'">
          go(target);
        } else {
          // v-link delegate on <div v-link>
          var el = e.target;
          while (el && el.tagName !== 'A' && el !== _this.el) {
            el = el.parentNode;
          }
          if (!el) return;
          if (el.tagName !== 'A' || !el.href) {
            // allow not anchor
            go(target);
          } else if (sameOrigin(el)) {
            go({
              path: el.pathname,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      };
      this.el.addEventListener('click', this.handler);
      // manage active link class
      this.unwatch = vm.$watch('$route.path', _.bind(this.updateClasses, this));
    },

    update: function update(path) {
      var router = this.vm.$route.router;
      var append = undefined;
      this.target = path;
      if (_.isObject(path)) {
        append = path.append;
        this.exact = path.exact;
        this.prevActiveClass = this.activeClass;
        this.activeClass = path.activeClass;
      }
      path = this.path = router._stringifyPath(path);
      this.activeRE = path && !this.exact ? new RegExp('^' + path.replace(/\/$/, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      this.updateClasses(this.vm.$route.path);
      var isAbsolute = path.charAt(0) === '/';
      // do not format non-hash relative paths
      var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, append) : path;
      if (this.el.tagName === 'A') {
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      }
    },

    updateClasses: function updateClasses(path) {
      var el = this.el;
      var dest = this.path;
      var router = this.vm.$route.router;
      var activeClass = this.activeClass || router._linkActiveClass;
      // clear old class
      if (this.prevActiveClass !== activeClass) {
        _.removeClass(el, this.prevActiveClass);
      }
      // add new class
      if (this.exact) {
        if (dest === path ||
        // also allow additional trailing slash
        dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
          _.addClass(el, activeClass);
        } else {
          _.removeClass(el, activeClass);
        }
      } else {
        if (this.activeRE && this.activeRE.test(path)) {
          _.addClass(el, activeClass);
        } else {
          _.removeClass(el, activeClass);
        }
      }
    },

    unbind: function unbind() {
      this.el.removeEventListener('click', this.handler);
      this.unwatch && this.unwatch();
    }
  });

  function sameOrigin(link) {
    return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
  }
};

module.exports = exports['default'];
},{"../util":55}],46:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _util = require('../util');

var _pipeline = require('../pipeline');

exports['default'] = function (Vue) {

  var _ = Vue.util;
  var componentDef =
  // 0.12
  Vue.directive('_component') ||
  // 1.0
  Vue.internalDirectives.component;
  // <router-view> extends the internal component directive
  var viewDef = _.extend({}, componentDef);

  // with some overrides
  _.extend(viewDef, {

    _isRouterView: true,

    bind: function bind() {
      var route = this.vm.$route;
      /* istanbul ignore if */
      if (!route) {
        _util.warn('<router-view> can only be used inside a ' + 'router-enabled app.');
        return;
      }
      // force dynamic directive so v-component doesn't
      // attempt to build right now
      this._isDynamicLiteral = true;
      // finally, init by delegating to v-component
      componentDef.bind.call(this);

      // all we need to do here is registering this view
      // in the router. actual component switching will be
      // managed by the pipeline.
      var router = this.router = route.router;
      router._views.unshift(this);

      // note the views are in reverse order.
      var parentView = router._views[1];
      if (parentView) {
        // register self as a child of the parent view,
        // instead of activating now. This is so that the
        // child's activate hook is called after the
        // parent's has resolved.
        parentView.childView = this;
      }

      // handle late-rendered view
      // two possibilities:
      // 1. root view rendered after transition has been
      //    validated;
      // 2. child view rendered after parent view has been
      //    activated.
      var transition = route.router._currentTransition;
      if (!parentView && transition.done || parentView && parentView.activated) {
        var depth = parentView ? parentView.depth + 1 : 0;
        _pipeline.activate(this, transition, depth);
      }
    },

    unbind: function unbind() {
      this.router._views.$remove(this);
      componentDef.unbind.call(this);
    }
  });

  Vue.elementDirective('router-view', viewDef);
};

module.exports = exports['default'];
},{"../pipeline":52,"../util":55}],47:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var AbstractHistory = (function () {
  function AbstractHistory(_ref) {
    var onChange = _ref.onChange;

    _classCallCheck(this, AbstractHistory);

    this.onChange = onChange;
    this.currentPath = '/';
  }

  AbstractHistory.prototype.start = function start() {
    this.onChange('/');
  };

  AbstractHistory.prototype.stop = function stop() {
    // noop
  };

  AbstractHistory.prototype.go = function go(path, replace, append) {
    path = this.currentPath = this.formatPath(path, append);
    this.onChange(path);
  };

  AbstractHistory.prototype.formatPath = function formatPath(path, append) {
    return path.charAt(0) === '/' ? path : _util.resolvePath(this.currentPath, path, append);
  };

  return AbstractHistory;
})();

exports['default'] = AbstractHistory;
module.exports = exports['default'];
},{"../util":55,"babel-runtime/helpers/class-call-check":24}],48:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var HashHistory = (function () {
  function HashHistory(_ref) {
    var hashbang = _ref.hashbang;
    var onChange = _ref.onChange;

    _classCallCheck(this, HashHistory);

    this.hashbang = hashbang;
    this.onChange = onChange;
  }

  HashHistory.prototype.start = function start() {
    var self = this;
    this.listener = function () {
      var path = location.hash;
      var raw = path.replace(/^#!?/, '');
      // always
      if (raw.charAt(0) !== '/') {
        raw = '/' + raw;
      }
      var formattedPath = self.formatPath(raw);
      if (formattedPath !== path) {
        location.replace(formattedPath);
        return;
      }
      var pathToMatch = decodeURI(path.replace(/^#!?/, '') + location.search);
      self.onChange(pathToMatch);
    };
    window.addEventListener('hashchange', this.listener);
    this.listener();
  };

  HashHistory.prototype.stop = function stop() {
    window.removeEventListener('hashchange', this.listener);
  };

  HashHistory.prototype.go = function go(path, replace, append) {
    path = this.formatPath(path, append);
    if (replace) {
      location.replace(path);
    } else {
      location.hash = path;
    }
  };

  HashHistory.prototype.formatPath = function formatPath(path, append) {
    var isAbsoloute = path.charAt(0) === '/';
    var prefix = '#' + (this.hashbang ? '!' : '');
    return isAbsoloute ? prefix + path : prefix + _util.resolvePath(location.hash.replace(/^#!?/, ''), path, append);
  };

  return HashHistory;
})();

exports['default'] = HashHistory;
module.exports = exports['default'];
},{"../util":55,"babel-runtime/helpers/class-call-check":24}],49:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var hashRE = /#.*$/;

var HTML5History = (function () {
  function HTML5History(_ref) {
    var root = _ref.root;
    var onChange = _ref.onChange;

    _classCallCheck(this, HTML5History);

    if (root) {
      // make sure there's the starting slash
      if (root.charAt(0) !== '/') {
        root = '/' + root;
      }
      // remove trailing slash
      this.root = root.replace(/\/$/, '');
      this.rootRE = new RegExp('^\\' + this.root);
    } else {
      this.root = null;
    }
    this.onChange = onChange;
    // check base tag
    var baseEl = document.querySelector('base');
    this.base = baseEl && baseEl.getAttribute('href');
  }

  HTML5History.prototype.start = function start() {
    var _this = this;

    this.listener = function (e) {
      var url = decodeURI(location.pathname + location.search);
      if (_this.root) {
        url = url.replace(_this.rootRE, '');
      }
      _this.onChange(url, e && e.state, location.hash);
    };
    window.addEventListener('popstate', this.listener);
    this.listener();
  };

  HTML5History.prototype.stop = function stop() {
    window.removeEventListener('popstate', this.listener);
  };

  HTML5History.prototype.go = function go(path, replace, append) {
    var url = this.formatPath(path, append);
    if (replace) {
      history.replaceState({}, '', url);
    } else {
      // record scroll position by replacing current state
      history.replaceState({
        pos: {
          x: window.pageXOffset,
          y: window.pageYOffset
        }
      }, '');
      // then push new state
      history.pushState({}, '', url);
    }
    var hashMatch = path.match(hashRE);
    var hash = hashMatch && hashMatch[0];
    path = url
    // strip hash so it doesn't mess up params
    .replace(hashRE, '')
    // remove root before matching
    .replace(this.rootRE, '');
    this.onChange(path, null, hash);
  };

  HTML5History.prototype.formatPath = function formatPath(path, append) {
    return path.charAt(0) === '/'
    // absolute path
    ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : _util.resolvePath(this.base || location.pathname, path, append);
  };

  return HTML5History;
})();

exports['default'] = HTML5History;
module.exports = exports['default'];
},{"../util":55,"babel-runtime/helpers/class-call-check":24}],50:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _override = require('./override');

var _override2 = _interopRequireDefault(_override);

var _routeRecognizer = require('route-recognizer');

var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var _transition = require('./transition');

var _transition2 = _interopRequireDefault(_transition);

var _directivesView = require('./directives/view');

var _directivesView2 = _interopRequireDefault(_directivesView);

var _directivesLink = require('./directives/link');

var _directivesLink2 = _interopRequireDefault(_directivesLink);

var _historyAbstract = require('./history/abstract');

var _historyAbstract2 = _interopRequireDefault(_historyAbstract);

var _historyHash = require('./history/hash');

var _historyHash2 = _interopRequireDefault(_historyHash);

var _historyHtml5 = require('./history/html5');

var _historyHtml52 = _interopRequireDefault(_historyHtml5);

var historyBackends = {
  abstract: _historyAbstract2['default'],
  hash: _historyHash2['default'],
  html5: _historyHtml52['default']
};

// late bind during install
var Vue = undefined;

/**
 * Router constructor
 *
 * @param {Object} [options]
 */

var Router = (function () {
  function Router() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$hashbang = _ref.hashbang;
    var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
    var _ref$abstract = _ref.abstract;
    var abstract = _ref$abstract === undefined ? false : _ref$abstract;
    var _ref$history = _ref.history;
    var history = _ref$history === undefined ? false : _ref$history;
    var _ref$saveScrollPosition = _ref.saveScrollPosition;
    var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
    var _ref$transitionOnLoad = _ref.transitionOnLoad;
    var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
    var _ref$suppressTransitionError = _ref.suppressTransitionError;
    var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
    var _ref$root = _ref.root;
    var root = _ref$root === undefined ? null : _ref$root;
    var _ref$linkActiveClass = _ref.linkActiveClass;
    var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;

    _classCallCheck(this, Router);

    /* istanbul ignore if */
    if (!Router.installed) {
      throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
    }

    // Vue instances
    this.app = null;
    this._views = [];
    this._children = [];

    // route recognizer
    this._recognizer = new _routeRecognizer2['default']();
    this._guardRecognizer = new _routeRecognizer2['default']();

    // state
    this._started = false;
    this._startCb = null;
    this._currentRoute = {};
    this._currentTransition = null;
    this._previousTransition = null;
    this._notFoundHandler = null;
    this._notFoundRedirect = null;
    this._beforeEachHooks = [];
    this._afterEachHooks = [];

    // feature detection
    this._hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;

    // trigger transition on initial render?
    this._rendered = false;
    this._transitionOnLoad = transitionOnLoad;

    // history mode
    this._abstract = abstract;
    this._hashbang = hashbang;
    this._history = this._hasPushState && history;

    // other options
    this._saveScrollPosition = saveScrollPosition;
    this._linkActiveClass = linkActiveClass;
    this._suppress = suppressTransitionError;

    // create history object
    var inBrowser = Vue.util.inBrowser;
    this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

    var History = historyBackends[this.mode];
    var self = this;
    this.history = new History({
      root: root,
      hashbang: this._hashbang,
      onChange: function onChange(path, state, anchor) {
        self._match(path, state, anchor);
      }
    });
  }

  /**
   * Allow directly passing components to a route
   * definition.
   *
   * @param {String} path
   * @param {Object} handler
   */

  // API ===================================================

  /**
  * Register a map of top-level paths.
  *
  * @param {Object} map
  */

  Router.prototype.map = function map(_map) {
    for (var route in _map) {
      this.on(route, _map[route]);
    }
  };

  /**
   * Register a single root-level path
   *
   * @param {String} rootPath
   * @param {Object} handler
   *                 - {String} component
   *                 - {Object} [subRoutes]
   *                 - {Boolean} [forceRefresh]
   *                 - {Function} [before]
   *                 - {Function} [after]
   */

  Router.prototype.on = function on(rootPath, handler) {
    if (rootPath === '*') {
      this._notFound(handler);
    } else {
      this._addRoute(rootPath, handler, []);
    }
  };

  /**
   * Set redirects.
   *
   * @param {Object} map
   */

  Router.prototype.redirect = function redirect(map) {
    for (var path in map) {
      this._addRedirect(path, map[path]);
    }
  };

  /**
   * Set aliases.
   *
   * @param {Object} map
   */

  Router.prototype.alias = function alias(map) {
    for (var path in map) {
      this._addAlias(path, map[path]);
    }
  };

  /**
   * Set global before hook.
   *
   * @param {Function} fn
   */

  Router.prototype.beforeEach = function beforeEach(fn) {
    this._beforeEachHooks.push(fn);
  };

  /**
   * Set global after hook.
   *
   * @param {Function} fn
   */

  Router.prototype.afterEach = function afterEach(fn) {
    this._afterEachHooks.push(fn);
  };

  /**
   * Navigate to a given path.
   * The path can be an object describing a named path in
   * the format of { name: '...', params: {}, query: {}}
   * The path is assumed to be already decoded, and will
   * be resolved against root (if provided)
   *
   * @param {String|Object} path
   * @param {Boolean} [replace]
   */

  Router.prototype.go = function go(path) {
    var replace = false;
    var append = false;
    if (Vue.util.isObject(path)) {
      replace = path.replace;
      append = path.append;
    }
    path = this._stringifyPath(path);
    if (path) {
      this.history.go(path, replace, append);
    }
  };

  /**
   * Short hand for replacing current path
   *
   * @param {String} path
   */

  Router.prototype.replace = function replace(path) {
    this.go({ path: path, replace: true });
  };

  /**
   * Start the router.
   *
   * @param {VueConstructor} App
   * @param {String|Element} container
   * @param {Function} [cb]
   */

  Router.prototype.start = function start(App, container, cb) {
    /* istanbul ignore if */
    if (this._started) {
      _util.warn('already started.');
      return;
    }
    this._started = true;
    this._startCb = cb;
    if (!this.app) {
      /* istanbul ignore if */
      if (!App || !container) {
        throw new Error('Must start vue-router with a component and a ' + 'root container.');
      }
      this._appContainer = container;
      var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
      // give it a name for better debugging
      Ctor.options.name = Ctor.options.name || 'RouterApp';
    }
    this.history.start();
  };

  /**
   * Stop listening to route changes.
   */

  Router.prototype.stop = function stop() {
    this.history.stop();
    this._started = false;
  };

  // Internal methods ======================================

  /**
  * Add a route containing a list of segments to the internal
  * route recognizer. Will be called recursively to add all
  * possible sub-routes.
  *
  * @param {String} path
  * @param {Object} handler
  * @param {Array} segments
  */

  Router.prototype._addRoute = function _addRoute(path, handler, segments) {
    guardComponent(path, handler);
    handler.path = path;
    handler.fullPath = (segments.reduce(function (path, segment) {
      return path + segment.path;
    }, '') + path).replace('//', '/');
    segments.push({
      path: path,
      handler: handler
    });
    this._recognizer.add(segments, {
      as: handler.name
    });
    // add sub routes
    if (handler.subRoutes) {
      for (var subPath in handler.subRoutes) {
        // recursively walk all sub routes
        this._addRoute(subPath, handler.subRoutes[subPath],
        // pass a copy in recursion to avoid mutating
        // across branches
        segments.slice());
      }
    }
  };

  /**
   * Set the notFound route handler.
   *
   * @param {Object} handler
   */

  Router.prototype._notFound = function _notFound(handler) {
    guardComponent('*', handler);
    this._notFoundHandler = [{ handler: handler }];
  };

  /**
   * Add a redirect record.
   *
   * @param {String} path
   * @param {String} redirectPath
   */

  Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
    if (path === '*') {
      this._notFoundRedirect = redirectPath;
    } else {
      this._addGuard(path, redirectPath, this.replace);
    }
  };

  /**
   * Add an alias record.
   *
   * @param {String} path
   * @param {String} aliasPath
   */

  Router.prototype._addAlias = function _addAlias(path, aliasPath) {
    this._addGuard(path, aliasPath, this._match);
  };

  /**
   * Add a path guard.
   *
   * @param {String} path
   * @param {String} mappedPath
   * @param {Function} handler
   */

  Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
    var _this = this;

    this._guardRecognizer.add([{
      path: path,
      handler: function handler(match, query) {
        var realPath = _util.mapParams(mappedPath, match.params, query);
        _handler.call(_this, realPath);
      }
    }]);
  };

  /**
   * Check if a path matches any redirect records.
   *
   * @param {String} path
   * @return {Boolean} - if true, will skip normal match.
   */

  Router.prototype._checkGuard = function _checkGuard(path) {
    var matched = this._guardRecognizer.recognize(path);
    if (matched) {
      matched[0].handler(matched[0], matched.queryParams);
      return true;
    } else if (this._notFoundRedirect) {
      matched = this._recognizer.recognize(path);
      if (!matched) {
        this.replace(this._notFoundRedirect);
        return true;
      }
    }
  };

  /**
   * Match a URL path and set the route context on vm,
   * triggering view updates.
   *
   * @param {String} path
   * @param {Object} [state]
   * @param {String} [anchor]
   */

  Router.prototype._match = function _match(path, state, anchor) {
    var _this2 = this;

    if (this._checkGuard(path)) {
      return;
    }

    var currentRoute = this._currentRoute;
    var currentTransition = this._currentTransition;

    if (currentTransition) {
      if (currentTransition.to.path === path) {
        // do nothing if we have an active transition going to the same path
        return;
      } else if (currentRoute.path === path) {
        // We are going to the same path, but we also have an ongoing but
        // not-yet-validated transition. Abort that transition and reset to
        // prev transition.
        currentTransition.aborted = true;
        this._currentTransition = this._prevTransition;
        return;
      } else {
        // going to a totally different path. abort ongoing transition.
        currentTransition.aborted = true;
      }
    }

    // construct new route and transition context
    var route = new _route2['default'](path, this);
    var transition = new _transition2['default'](this, route, currentRoute);

    // current transition is updated right now.
    // however, current route will only be updated after the transition has
    // been validated.
    this._prevTransition = currentTransition;
    this._currentTransition = transition;

    if (!this.app) {
      // initial render
      this.app = new this._appConstructor({
        el: this._appContainer,
        _meta: {
          $route: route
        }
      });
    }

    // check global before hook
    var beforeHooks = this._beforeEachHooks;
    var startTransition = function startTransition() {
      transition.start(function () {
        _this2._postTransition(route, state, anchor);
      });
    };

    if (beforeHooks.length) {
      transition.runQueue(beforeHooks, function (hook, _, next) {
        if (transition === _this2._currentTransition) {
          transition.callHook(hook, null, next, {
            expectBoolean: true
          });
        }
      }, startTransition);
    } else {
      startTransition();
    }

    if (!this._rendered && this._startCb) {
      this._startCb.call(null);
    }

    // HACK:
    // set rendered to true after the transition start, so
    // that components that are acitvated synchronously know
    // whether it is the initial render.
    this._rendered = true;
  };

  /**
   * Set current to the new transition.
   * This is called by the transition object when the
   * validation of a route has succeeded.
   *
   * @param {Transition} transition
   */

  Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
    // set current route
    var route = this._currentRoute = transition.to;
    // update route context for all children
    if (this.app.$route !== route) {
      this.app.$route = route;
      this._children.forEach(function (child) {
        child.$route = route;
      });
    }
    // call global after hook
    if (this._afterEachHooks.length) {
      this._afterEachHooks.forEach(function (hook) {
        return hook.call(null, {
          to: transition.to,
          from: transition.from
        });
      });
    }
    this._currentTransition.done = true;
  };

  /**
   * Handle stuff after the transition.
   *
   * @param {Route} route
   * @param {Object} [state]
   * @param {String} [anchor]
   */

  Router.prototype._postTransition = function _postTransition(route, state, anchor) {
    // handle scroll positions
    // saved scroll positions take priority
    // then we check if the path has an anchor
    var pos = state && state.pos;
    if (pos && this._saveScrollPosition) {
      Vue.nextTick(function () {
        window.scrollTo(pos.x, pos.y);
      });
    } else if (anchor) {
      Vue.nextTick(function () {
        var el = document.getElementById(anchor.slice(1));
        if (el) {
          window.scrollTo(window.scrollX, el.offsetTop);
        }
      });
    }
  };

  /**
   * Normalize named route object / string paths into
   * a string.
   *
   * @param {Object|String|Number} path
   * @return {String}
   */

  Router.prototype._stringifyPath = function _stringifyPath(path) {
    if (path && typeof path === 'object') {
      if (path.name) {
        var params = path.params || {};
        if (path.query) {
          params.queryParams = path.query;
        }
        return this._recognizer.generate(path.name, params);
      } else if (path.path) {
        return path.path;
      } else {
        return '';
      }
    } else {
      return path ? path + '' : '';
    }
  };

  return Router;
})();

function guardComponent(path, handler) {
  var comp = handler.component;
  if (Vue.util.isPlainObject(comp)) {
    comp = handler.component = Vue.extend(comp);
  }
  /* istanbul ignore if */
  if (typeof comp !== 'function') {
    handler.component = null;
    _util.warn('invalid component for route "' + path + '".');
  }
}

/* Installation */

Router.installed = false;

/**
 * Installation interface.
 * Install the necessary directives.
 */

Router.install = function (externalVue) {
  /* istanbul ignore if */
  if (Router.installed) {
    _util.warn('already installed.');
    return;
  }
  Vue = externalVue;
  _override2['default'](Vue);
  _directivesView2['default'](Vue);
  _directivesLink2['default'](Vue);
  _util2['default'].Vue = Vue;
  Router.installed = true;
};

// auto install
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Router);
}

exports['default'] = Router;
module.exports = exports['default'];
},{"./directives/link":45,"./directives/view":46,"./history/abstract":47,"./history/hash":48,"./history/html5":49,"./override":51,"./route":53,"./transition":54,"./util":55,"babel-runtime/helpers/class-call-check":24,"babel-runtime/helpers/interop-require-default":25,"route-recognizer":44}],51:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (Vue) {

  var _ = Vue.util;

  // override Vue's init and destroy process to keep track of router instances
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var root = options._parent || options.parent || this;
    var route = root.$route;
    if (route) {
      route.router._children.push(this);
      if (!this.$route) {
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          _.defineReactive(this, '$route', route);
        }
      }
    }
    init.call(this, options);
  };

  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    if (!this._isBeingDestroyed) {
      var route = this.$root.$route;
      if (route) {
        route.router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    }
  };

  // 1.0 only: enable route mixins
  var strats = Vue.config.optionMergeStrategies;
  var hooksToMergeRE = /^(data|activate|deactivate)$/;

  if (strats) {
    strats.route = function (parentVal, childVal) {
      if (!childVal) return parentVal;
      if (!parentVal) return childVal;
      var ret = {};
      _.extend(ret, parentVal);
      for (var key in childVal) {
        var a = ret[key];
        var b = childVal[key];
        // for data, activate and deactivate, we need to merge them into
        // arrays similar to lifecycle hooks.
        if (a && hooksToMergeRE.test(key)) {
          ret[key] = (_.isArray(a) ? a : [a]).concat(b);
        } else {
          ret[key] = b;
        }
      }
      return ret;
    };
  }
};

module.exports = exports['default'];
},{}],52:[function(require,module,exports){
'use strict';

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _Object$create = require('babel-runtime/core-js/object/create')['default'];

exports.__esModule = true;
exports.canReuse = canReuse;
exports.canDeactivate = canDeactivate;
exports.canActivate = canActivate;
exports.deactivate = deactivate;
exports.activate = activate;
exports.reuse = reuse;

var _util = require('./util');

/**
 * Determine the reusability of an existing router view.
 *
 * @param {Directive} view
 * @param {Object} handler
 * @param {Transition} transition
 */

function canReuse(view, handler, transition) {
  var component = view.childVM;
  if (!component || !handler) {
    return false;
  }
  // important: check view.Component here because it may
  // have been changed in activate hook
  if (view.Component !== handler.component) {
    return false;
  }
  var canReuseFn = _util.getRouteConfig(component, 'canReuse');
  return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
    to: transition.to,
    from: transition.from
  }) : true; // defaults to true
}

/**
 * Check if a component can deactivate.
 *
 * @param {Directive} view
 * @param {Transition} transition
 * @param {Function} next
 */

function canDeactivate(view, transition, next) {
  var fromComponent = view.childVM;
  var hook = _util.getRouteConfig(fromComponent, 'canDeactivate');
  if (!hook) {
    next();
  } else {
    transition.callHook(hook, fromComponent, next, {
      expectBoolean: true
    });
  }
}

/**
 * Check if a component can activate.
 *
 * @param {Object} handler
 * @param {Transition} transition
 * @param {Function} next
 */

function canActivate(handler, transition, next) {
  _util.resolveAsyncComponent(handler, function (Component) {
    // have to check due to async-ness
    if (transition.aborted) {
      return;
    }
    // determine if this component can be activated
    var hook = _util.getRouteConfig(Component, 'canActivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, null, next, {
        expectBoolean: true
      });
    }
  });
}

/**
 * Call deactivate hooks for existing router-views.
 *
 * @param {Directive} view
 * @param {Transition} transition
 * @param {Function} next
 */

function deactivate(view, transition, next) {
  var component = view.childVM;
  var hook = _util.getRouteConfig(component, 'deactivate');
  if (!hook) {
    next();
  } else {
    transition.callHooks(hook, component, next);
  }
}

/**
 * Activate / switch component for a router-view.
 *
 * @param {Directive} view
 * @param {Transition} transition
 * @param {Number} depth
 * @param {Function} [cb]
 */

function activate(view, transition, depth, cb, reuse) {
  var handler = transition.activateQueue[depth];
  if (!handler) {
    // fix 1.0.0-alpha.3 compat
    if (view._bound) {
      view.setComponent(null);
    }
    cb && cb();
    return;
  }

  var Component = view.Component = handler.component;
  var activateHook = _util.getRouteConfig(Component, 'activate');
  var dataHook = _util.getRouteConfig(Component, 'data');
  var waitForData = _util.getRouteConfig(Component, 'waitForData');

  view.depth = depth;
  view.activated = false;

  var component = undefined;
  var loading = !!(dataHook && !waitForData);

  // "reuse" is a flag passed down when the parent view is
  // either reused via keep-alive or as a child of a kept-alive view.
  // of course we can only reuse if the current kept-alive instance
  // is of the correct type.
  reuse = reuse && view.childVM && view.childVM.constructor === Component;

  if (reuse) {
    // just reuse
    component = view.childVM;
    component.$loadingRouteData = loading;
  } else {
    // unbuild current component. this step also destroys
    // and removes all nested child views.
    view.unbuild(true);
    // handle keep-alive.
    // if the view has keep-alive, the child vm is not actually
    // destroyed - its nested views will still be in router's
    // view list. We need to removed these child views and
    // cache them on the child vm.
    if (view.keepAlive) {
      var views = transition.router._views;
      var i = views.indexOf(view);
      if (i > 0) {
        transition.router._views = views.slice(i);
        if (view.childVM) {
          view.childVM._routerViews = views.slice(0, i);
        }
      }
    }

    // build the new component. this will also create the
    // direct child view of the current one. it will register
    // itself as view.childView.
    component = view.build({
      _meta: {
        $loadingRouteData: loading
      }
    });
    // handle keep-alive.
    // when a kept-alive child vm is restored, we need to
    // add its cached child views into the router's view list,
    // and also properly update current view's child view.
    if (view.keepAlive) {
      component.$loadingRouteData = loading;
      var cachedViews = component._routerViews;
      if (cachedViews) {
        transition.router._views = cachedViews.concat(transition.router._views);
        view.childView = cachedViews[cachedViews.length - 1];
        component._routerViews = null;
      }
    }
  }

  // cleanup the component in case the transition is aborted
  // before the component is ever inserted.
  var cleanup = function cleanup() {
    component.$destroy();
  };

  // actually insert the component and trigger transition
  var insert = function insert() {
    if (reuse) {
      cb && cb();
      return;
    }
    var router = transition.router;
    if (router._rendered || router._transitionOnLoad) {
      view.transition(component);
    } else {
      // no transition on first render, manual transition
      /* istanbul ignore if */
      if (view.setCurrent) {
        // 0.12 compat
        view.setCurrent(component);
      } else {
        // 1.0
        view.childVM = component;
      }
      component.$before(view.anchor, null, false);
    }
    cb && cb();
  };

  // called after activation hook is resolved
  var afterActivate = function afterActivate() {
    view.activated = true;
    // activate the child view
    if (view.childView) {
      activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
    }
    if (dataHook && waitForData) {
      // wait until data loaded to insert
      loadData(component, transition, dataHook, insert, cleanup);
    } else {
      // load data and insert at the same time
      if (dataHook) {
        loadData(component, transition, dataHook);
      }
      insert();
    }
  };

  if (activateHook) {
    transition.callHooks(activateHook, component, afterActivate, {
      cleanup: cleanup
    });
  } else {
    afterActivate();
  }
}

/**
 * Reuse a view, just reload data if necessary.
 *
 * @param {Directive} view
 * @param {Transition} transition
 */

function reuse(view, transition) {
  var component = view.childVM;
  var dataHook = _util.getRouteConfig(component, 'data');
  if (dataHook) {
    loadData(component, transition, dataHook);
  }
}

/**
 * Asynchronously load and apply data to component.
 *
 * @param {Vue} component
 * @param {Transition} transition
 * @param {Function} hook
 * @param {Function} cb
 * @param {Function} cleanup
 */

function loadData(component, transition, hook, cb, cleanup) {
  component.$loadingRouteData = true;
  transition.callHooks(hook, component, function (data, onError) {
    // merge data from multiple data hooks
    if (Array.isArray(data) && data._needMerge) {
      data = data.reduce(function (res, obj) {
        if (isPlainObject(obj)) {
          _Object$keys(obj).forEach(function (key) {
            res[key] = obj[key];
          });
        }
        return res;
      }, _Object$create(null));
    }
    // handle promise sugar syntax
    var promises = [];
    if (isPlainObject(data)) {
      _Object$keys(data).forEach(function (key) {
        var val = data[key];
        if (_util.isPromise(val)) {
          promises.push(val.then(function (resolvedVal) {
            component.$set(key, resolvedVal);
          }));
        } else {
          component.$set(key, val);
        }
      });
    }
    if (!promises.length) {
      component.$loadingRouteData = false;
      cb && cb();
    } else {
      promises[0].constructor.all(promises).then(function (_) {
        component.$loadingRouteData = false;
        cb && cb();
      }, onError);
    }
  }, {
    cleanup: cleanup,
    expectData: true
  });
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
},{"./util":55,"babel-runtime/core-js/object/create":21,"babel-runtime/core-js/object/keys":23}],53:[function(require,module,exports){
"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$freeze = require("babel-runtime/core-js/object/freeze")["default"];

exports.__esModule = true;
var internalKeysRE = /^(component|subRoutes)$/;

/**
 * Route Context Object
 *
 * @param {String} path
 * @param {Router} router
 */

var Route = function Route(path, router) {
  var _this = this;

  _classCallCheck(this, Route);

  var matched = router._recognizer.recognize(path);
  if (matched) {
    // copy all custom fields from route configs
    [].forEach.call(matched, function (match) {
      for (var key in match.handler) {
        if (!internalKeysRE.test(key)) {
          _this[key] = match.handler[key];
        }
      }
    });
    // set query and params
    this.query = matched.queryParams;
    this.params = [].reduce.call(matched, function (prev, cur) {
      if (cur.params) {
        for (var key in cur.params) {
          prev[key] = cur.params[key];
        }
      }
      return prev;
    }, {});
  }
  // expose path and router
  this.path = path;
  this.router = router;
  // for internal use
  this.matched = matched || router._notFoundHandler;
  // Important: freeze self to prevent observation
  _Object$freeze(this);
};

exports["default"] = Route;
module.exports = exports["default"];
},{"babel-runtime/core-js/object/freeze":22,"babel-runtime/helpers/class-call-check":24}],54:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('./util');

var _pipeline = require('./pipeline');

/**
 * A RouteTransition object manages the pipeline of a
 * router-view switching process. This is also the object
 * passed into user route hooks.
 *
 * @param {Router} router
 * @param {Route} to
 * @param {Route} from
 */

var RouteTransition = (function () {
  function RouteTransition(router, to, from) {
    _classCallCheck(this, RouteTransition);

    this.router = router;
    this.to = to;
    this.from = from;
    this.next = null;
    this.aborted = false;
    this.done = false;

    // start by determine the queues

    // the deactivate queue is an array of router-view
    // directive instances that need to be deactivated,
    // deepest first.
    this.deactivateQueue = router._views;

    // check the default handler of the deepest match
    var matched = to.matched ? Array.prototype.slice.call(to.matched) : [];

    // the activate queue is an array of route handlers
    // that need to be activated
    this.activateQueue = matched.map(function (match) {
      return match.handler;
    });
  }

  /**
   * Abort current transition and return to previous location.
   */

  RouteTransition.prototype.abort = function abort() {
    if (!this.aborted) {
      this.aborted = true;
      // if the root path throws an error during validation
      // on initial load, it gets caught in an infinite loop.
      var abortingOnLoad = !this.from.path && this.to.path === '/';
      if (!abortingOnLoad) {
        this.router.replace(this.from.path || '/');
      }
    }
  };

  /**
   * Abort current transition and redirect to a new location.
   *
   * @param {String} path
   */

  RouteTransition.prototype.redirect = function redirect(path) {
    if (!this.aborted) {
      this.aborted = true;
      if (typeof path === 'string') {
        path = _util.mapParams(path, this.to.params, this.to.query);
      } else {
        path.params = this.to.params;
        path.query = this.to.query;
      }
      this.router.replace(path);
    }
  };

  /**
   * A router view transition's pipeline can be described as
   * follows, assuming we are transitioning from an existing
   * <router-view> chain [Component A, Component B] to a new
   * chain [Component A, Component C]:
   *
   *  A    A
   *  | => |
   *  B    C
   *
   * 1. Reusablity phase:
   *   -> canReuse(A, A)
   *   -> canReuse(B, C)
   *   -> determine new queues:
   *      - deactivation: [B]
   *      - activation: [C]
   *
   * 2. Validation phase:
   *   -> canDeactivate(B)
   *   -> canActivate(C)
   *
   * 3. Activation phase:
   *   -> deactivate(B)
   *   -> activate(C)
   *
   * Each of these steps can be asynchronous, and any
   * step can potentially abort the transition.
   *
   * @param {Function} cb
   */

  RouteTransition.prototype.start = function start(cb) {
    var transition = this;
    var daq = this.deactivateQueue;
    var aq = this.activateQueue;
    var rdaq = daq.slice().reverse();
    var reuseQueue = undefined;

    // 1. Reusability phase
    var i = undefined;
    for (i = 0; i < rdaq.length; i++) {
      if (!_pipeline.canReuse(rdaq[i], aq[i], transition)) {
        break;
      }
    }
    if (i > 0) {
      reuseQueue = rdaq.slice(0, i);
      daq = rdaq.slice(i).reverse();
      aq = aq.slice(i);
    }

    // 2. Validation phase
    transition.runQueue(daq, _pipeline.canDeactivate, function () {
      transition.runQueue(aq, _pipeline.canActivate, function () {
        transition.runQueue(daq, _pipeline.deactivate, function () {
          // 3. Activation phase

          // Update router current route
          transition.router._onTransitionValidated(transition);

          // trigger reuse for all reused views
          reuseQueue && reuseQueue.forEach(function (view) {
            _pipeline.reuse(view, transition);
          });

          // the root of the chain that needs to be replaced
          // is the top-most non-reusable view.
          if (daq.length) {
            var view = daq[daq.length - 1];
            var depth = reuseQueue ? reuseQueue.length : 0;
            _pipeline.activate(view, transition, depth, cb);
          } else {
            cb();
          }
        });
      });
    });
  };

  /**
   * Asynchronously and sequentially apply a function to a
   * queue.
   *
   * @param {Array} queue
   * @param {Function} fn
   * @param {Function} cb
   */

  RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
    var transition = this;
    step(0);
    function step(index) {
      if (index >= queue.length) {
        cb();
      } else {
        fn(queue[index], transition, function () {
          step(index + 1);
        });
      }
    }
  };

  /**
   * Call a user provided route transition hook and handle
   * the response (e.g. if the user returns a promise).
   *
   * If the user neither expects an argument nor returns a
   * promise, the hook is assumed to be synchronous.
   *
   * @param {Function} hook
   * @param {*} [context]
   * @param {Function} [cb]
   * @param {Object} [options]
   *                 - {Boolean} expectBoolean
   *                 - {Boolean} expectData
   *                 - {Function} cleanup
   */

  RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
    var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var _ref$expectBoolean = _ref.expectBoolean;
    var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
    var _ref$expectData = _ref.expectData;
    var expectData = _ref$expectData === undefined ? false : _ref$expectData;
    var cleanup = _ref.cleanup;

    var transition = this;
    var nextCalled = false;

    // abort the transition
    var abort = function abort() {
      cleanup && cleanup();
      transition.abort();
    };

    // handle errors
    var onError = function onError(err) {
      // cleanup indicates an after-activation hook,
      // so instead of aborting we just let the transition
      // finish.
      cleanup ? next() : abort();
      if (err && !transition.router._suppress) {
        _util.warn('Uncaught error during transition: ');
        throw err instanceof Error ? err : new Error(err);
      }
    };

    // advance the transition to the next step
    var next = function next(data) {
      if (nextCalled) {
        _util.warn('transition.next() should be called only once.');
        return;
      }
      nextCalled = true;
      if (transition.aborted) {
        cleanup && cleanup();
        return;
      }
      cb && cb(data, onError);
    };

    // expose a clone of the transition object, so that each
    // hook gets a clean copy and prevent the user from
    // messing with the internals.
    var exposed = {
      to: transition.to,
      from: transition.from,
      abort: abort,
      next: next,
      redirect: function redirect() {
        transition.redirect.apply(transition, arguments);
      }
    };

    // actually call the hook
    var res = undefined;
    try {
      res = hook.call(context, exposed);
    } catch (err) {
      return onError(err);
    }

    // handle boolean/promise return values
    var resIsPromise = _util.isPromise(res);
    if (expectBoolean) {
      if (typeof res === 'boolean') {
        res ? next() : abort();
      } else if (resIsPromise) {
        res.then(function (ok) {
          ok ? next() : abort();
        }, onError);
      } else if (!hook.length) {
        next(res);
      }
    } else if (resIsPromise) {
      res.then(next, onError);
    } else if (expectData && isPlainOjbect(res) || !hook.length) {
      next(res);
    }
  };

  /**
   * Call a single hook or an array of async hooks in series.
   *
   * @param {Array} hooks
   * @param {*} context
   * @param {Function} cb
   * @param {Object} [options]
   */

  RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
    var _this = this;

    if (Array.isArray(hooks)) {
      (function () {
        var res = [];
        res._needMerge = true;
        var onError = undefined;
        _this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, function (r, onError) {
              if (r) res.push(r);
              onError = onError;
              next();
            }, options);
          }
        }, function () {
          cb(res, onError);
        });
      })();
    } else {
      this.callHook(hooks, context, cb, options);
    }
  };

  return RouteTransition;
})();

exports['default'] = RouteTransition;

function isPlainOjbect(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}
module.exports = exports['default'];
},{"./pipeline":52,"./util":55,"babel-runtime/helpers/class-call-check":24}],55:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports.warn = warn;
exports.resolvePath = resolvePath;
exports.isPromise = isPromise;
exports.getRouteConfig = getRouteConfig;
exports.resolveAsyncComponent = resolveAsyncComponent;
exports.mapParams = mapParams;

var _routeRecognizer = require('route-recognizer');

var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

var genQuery = _routeRecognizer2['default'].prototype.generateQueryString;

// export default for holding the Vue reference
var _exports = {};
exports['default'] = _exports;

/**
 * Warn stuff.
 *
 * @param {String} msg
 */

function warn(msg) {
  /* istanbul ignore next */
  if (window.console) {
    console.warn('[vue-router] ' + msg);
    /* istanbul ignore if */
    if (!_exports.Vue || _exports.Vue.config.debug) {
      console.warn(new Error('warning stack trace:').stack);
    }
  }
}

/**
 * Resolve a relative path.
 *
 * @param {String} base
 * @param {String} relative
 * @param {Boolean} append
 * @return {String}
 */

function resolvePath(base, relative, append) {
  var query = base.match(/(\?.*)$/);
  if (query) {
    query = query[1];
    base = base.slice(0, -query.length);
  }
  // a query!
  if (relative.charAt(0) === '?') {
    return base + relative;
  }
  var stack = base.split('/');
  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }
  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue;
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }
  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }
  return stack.join('/');
}

/**
 * Forgiving check for a promise
 *
 * @param {Object} p
 * @return {Boolean}
 */

function isPromise(p) {
  return p && typeof p.then === 'function';
}

/**
 * Retrive a route config field from a component instance
 * OR a component contructor.
 *
 * @param {Function|Vue} component
 * @param {String} name
 * @return {*}
 */

function getRouteConfig(component, name) {
  var options = component && (component.$options || component.options);
  return options && options.route && options.route[name];
}

/**
 * Resolve an async component factory. Have to do a dirty
 * mock here because of Vue core's internal API depends on
 * an ID check.
 *
 * @param {Object} handler
 * @param {Function} cb
 */

var resolver = undefined;

function resolveAsyncComponent(handler, cb) {
  if (!resolver) {
    resolver = {
      resolve: _exports.Vue.prototype._resolveComponent,
      $options: {
        components: {
          _: handler.component
        }
      }
    };
  } else {
    resolver.$options.components._ = handler.component;
  }
  resolver.resolve('_', function (Component) {
    handler.component = Component;
    cb(Component);
  });
}

/**
 * Map the dynamic segments in a path to params.
 *
 * @param {String} path
 * @param {Object} params
 * @param {Object} query
 */

function mapParams(path, params, query) {
  if (params === undefined) params = {};

  path = path.replace(/:([^\/]+)/g, function (_, key) {
    var val = params[key];
    if (!val) {
      warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
    }
    return val || '';
  });
  if (query) {
    path += genQuery(query);
  }
  return path;
}
},{"babel-runtime/helpers/interop-require-default":25,"route-recognizer":44}],56:[function(require,module,exports){
var _ = require('../util')
var Watcher = require('../watcher')
var Path = require('../parsers/path')
var textParser = require('../parsers/text')
var dirParser = require('../parsers/directive')
var expParser = require('../parsers/expression')
var filterRE = /[^|]\|[^|]/

/**
 * Get the value from an expression on this vm.
 *
 * @param {String} exp
 * @param {Boolean} [asStatement]
 * @return {*}
 */

exports.$get = function (exp, asStatement) {
  var res = expParser.parse(exp)
  if (res) {
    if (asStatement && !expParser.isSimplePath(exp)) {
      var self = this
      return function statementHandler () {
        res.get.call(self, self)
      }
    } else {
      try {
        return res.get.call(this, this)
      } catch (e) {}
    }
  }
}

/**
 * Set the value from an expression on this vm.
 * The expression must be a valid left-hand
 * expression in an assignment.
 *
 * @param {String} exp
 * @param {*} val
 */

exports.$set = function (exp, val) {
  var res = expParser.parse(exp, true)
  if (res && res.set) {
    res.set.call(this, this, val)
  }
}

/**
 * Delete a property on the VM
 *
 * @param {String} key
 */

exports.$delete = function (key) {
  _.delete(this._data, key)
}

/**
 * Watch an expression, trigger callback when its
 * value changes.
 *
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} [options]
 *                 - {Boolean} deep
 *                 - {Boolean} immediate
 * @return {Function} - unwatchFn
 */

exports.$watch = function (expOrFn, cb, options) {
  var vm = this
  var parsed
  if (typeof expOrFn === 'string') {
    parsed = dirParser.parse(expOrFn)
    expOrFn = parsed.expression
  }
  var watcher = new Watcher(vm, expOrFn, cb, {
    deep: options && options.deep,
    filters: parsed && parsed.filters
  })
  if (options && options.immediate) {
    cb.call(vm, watcher.value)
  }
  return function unwatchFn () {
    watcher.teardown()
  }
}

/**
 * Evaluate a text directive, including filters.
 *
 * @param {String} text
 * @param {Boolean} [asStatement]
 * @return {String}
 */

exports.$eval = function (text, asStatement) {
  // check for filters.
  if (filterRE.test(text)) {
    var dir = dirParser.parse(text)
    // the filter regex check might give false positive
    // for pipes inside strings, so it's possible that
    // we don't get any filters here
    var val = this.$get(dir.expression, asStatement)
    return dir.filters
      ? this._applyFilters(val, null, dir.filters)
      : val
  } else {
    // no filter
    return this.$get(text, asStatement)
  }
}

/**
 * Interpolate a piece of template text.
 *
 * @param {String} text
 * @return {String}
 */

exports.$interpolate = function (text) {
  var tokens = textParser.parse(text)
  var vm = this
  if (tokens) {
    if (tokens.length === 1) {
      return vm.$eval(tokens[0].value) + ''
    } else {
      return tokens.map(function (token) {
        return token.tag
          ? vm.$eval(token.value)
          : token.value
      }).join('')
    }
  } else {
    return text
  }
}

/**
 * Log instance data as a plain JS object
 * so that it is easier to inspect in console.
 * This method assumes console is available.
 *
 * @param {String} [path]
 */

exports.$log = function (path) {
  var data = path
    ? Path.get(this._data, path)
    : this._data
  if (data) {
    data = clean(data)
  }
  // include computed fields
  if (!path) {
    for (var key in this.$options.computed) {
      data[key] = clean(this[key])
    }
  }
  console.log(data)
}

/**
 * "clean" a getter/setter converted object into a plain
 * object copy.
 *
 * @param {Object} - obj
 * @return {Object}
 */

function clean (obj) {
  return JSON.parse(JSON.stringify(obj))
}

},{"../parsers/directive":106,"../parsers/expression":107,"../parsers/path":108,"../parsers/text":110,"../util":118,"../watcher":122}],57:[function(require,module,exports){
var _ = require('../util')
var transition = require('../transition')

/**
 * Convenience on-instance nextTick. The callback is
 * auto-bound to the instance, and this avoids component
 * modules having to rely on the global Vue.
 *
 * @param {Function} fn
 */

exports.$nextTick = function (fn) {
  _.nextTick(fn, this)
}

/**
 * Append instance to target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$appendTo = function (target, cb, withTransition) {
  return insert(
    this, target, cb, withTransition,
    append, transition.append
  )
}

/**
 * Prepend instance to target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$prependTo = function (target, cb, withTransition) {
  target = query(target)
  if (target.hasChildNodes()) {
    this.$before(target.firstChild, cb, withTransition)
  } else {
    this.$appendTo(target, cb, withTransition)
  }
  return this
}

/**
 * Insert instance before target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$before = function (target, cb, withTransition) {
  return insert(
    this, target, cb, withTransition,
    before, transition.before
  )
}

/**
 * Insert instance after target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$after = function (target, cb, withTransition) {
  target = query(target)
  if (target.nextSibling) {
    this.$before(target.nextSibling, cb, withTransition)
  } else {
    this.$appendTo(target.parentNode, cb, withTransition)
  }
  return this
}

/**
 * Remove instance from DOM
 *
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$remove = function (cb, withTransition) {
  if (!this.$el.parentNode) {
    return cb && cb()
  }
  var inDoc = this._isAttached && _.inDoc(this.$el)
  // if we are not in document, no need to check
  // for transitions
  if (!inDoc) withTransition = false
  var self = this
  var realCb = function () {
    if (inDoc) self._callHook('detached')
    if (cb) cb()
  }
  if (this._isFragment) {
    _.removeNodeRange(
      this._fragmentStart,
      this._fragmentEnd,
      this, this._fragment, realCb
    )
  } else {
    var op = withTransition === false
      ? remove
      : transition.remove
    op(this.$el, this, realCb)
  }
  return this
}

/**
 * Shared DOM insertion function.
 *
 * @param {Vue} vm
 * @param {Element} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition]
 * @param {Function} op1 - op for non-transition insert
 * @param {Function} op2 - op for transition insert
 * @return vm
 */

function insert (vm, target, cb, withTransition, op1, op2) {
  target = query(target)
  var targetIsDetached = !_.inDoc(target)
  var op = withTransition === false || targetIsDetached
      ? op1
      : op2
  var shouldCallHook =
    !targetIsDetached &&
    !vm._isAttached &&
    !_.inDoc(vm.$el)
  if (vm._isFragment) {
    _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
      op(node, target, vm)
    })
    cb && cb()
  } else {
    op(vm.$el, target, vm, cb)
  }
  if (shouldCallHook) {
    vm._callHook('attached')
  }
  return vm
}

/**
 * Check for selectors
 *
 * @param {String|Element} el
 */

function query (el) {
  return typeof el === 'string'
    ? document.querySelector(el)
    : el
}

/**
 * Append operation that takes a callback.
 *
 * @param {Node} el
 * @param {Node} target
 * @param {Vue} vm - unused
 * @param {Function} [cb]
 */

function append (el, target, vm, cb) {
  target.appendChild(el)
  if (cb) cb()
}

/**
 * InsertBefore operation that takes a callback.
 *
 * @param {Node} el
 * @param {Node} target
 * @param {Vue} vm - unused
 * @param {Function} [cb]
 */

function before (el, target, vm, cb) {
  _.before(el, target)
  if (cb) cb()
}

/**
 * Remove operation that takes a callback.
 *
 * @param {Node} el
 * @param {Vue} vm - unused
 * @param {Function} [cb]
 */

function remove (el, vm, cb) {
  _.remove(el)
  if (cb) cb()
}

},{"../transition":111,"../util":118}],58:[function(require,module,exports){
var _ = require('../util')

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 */

exports.$on = function (event, fn) {
  (this._events[event] || (this._events[event] = []))
    .push(fn)
  modifyListenerCount(this, event, 1)
  return this
}

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 */

exports.$once = function (event, fn) {
  var self = this
  function on () {
    self.$off(event, on)
    fn.apply(this, arguments)
  }
  on.fn = fn
  this.$on(event, on)
  return this
}

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 */

exports.$off = function (event, fn) {
  var cbs
  // all
  if (!arguments.length) {
    if (this.$parent) {
      for (event in this._events) {
        cbs = this._events[event]
        if (cbs) {
          modifyListenerCount(this, event, -cbs.length)
        }
      }
    }
    this._events = {}
    return this
  }
  // specific event
  cbs = this._events[event]
  if (!cbs) {
    return this
  }
  if (arguments.length === 1) {
    modifyListenerCount(this, event, -cbs.length)
    this._events[event] = null
    return this
  }
  // specific handler
  var cb
  var i = cbs.length
  while (i--) {
    cb = cbs[i]
    if (cb === fn || cb.fn === fn) {
      modifyListenerCount(this, event, -1)
      cbs.splice(i, 1)
      break
    }
  }
  return this
}

/**
 * Trigger an event on self.
 *
 * @param {String} event
 */

exports.$emit = function (event) {
  var cbs = this._events[event]
  this._shouldPropagate = !cbs
  if (cbs) {
    cbs = cbs.length > 1
      ? _.toArray(cbs)
      : cbs
    var args = _.toArray(arguments, 1)
    for (var i = 0, l = cbs.length; i < l; i++) {
      var res = cbs[i].apply(this, args)
      if (res === true) {
        this._shouldPropagate = true
      }
    }
  }
  return this
}

/**
 * Recursively broadcast an event to all children instances.
 *
 * @param {String} event
 * @param {...*} additional arguments
 */

exports.$broadcast = function (event) {
  // if no child has registered for this event,
  // then there's no need to broadcast.
  if (!this._eventsCount[event]) return
  var children = this.$children
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i]
    child.$emit.apply(child, arguments)
    if (child._shouldPropagate) {
      child.$broadcast.apply(child, arguments)
    }
  }
  return this
}

/**
 * Recursively propagate an event up the parent chain.
 *
 * @param {String} event
 * @param {...*} additional arguments
 */

exports.$dispatch = function () {
  this.$emit.apply(this, arguments)
  var parent = this.$parent
  while (parent) {
    parent.$emit.apply(parent, arguments)
    parent = parent._shouldPropagate
      ? parent.$parent
      : null
  }
  return this
}

/**
 * Modify the listener counts on all parents.
 * This bookkeeping allows $broadcast to return early when
 * no child has listened to a certain event.
 *
 * @param {Vue} vm
 * @param {String} event
 * @param {Number} count
 */

var hookRE = /^hook:/
function modifyListenerCount (vm, event, count) {
  var parent = vm.$parent
  // hooks do not get broadcasted so no need
  // to do bookkeeping for them
  if (!parent || !count || hookRE.test(event)) return
  while (parent) {
    parent._eventsCount[event] =
      (parent._eventsCount[event] || 0) + count
    parent = parent.$parent
  }
}

},{"../util":118}],59:[function(require,module,exports){
(function (process){
var _ = require('../util')
var config = require('../config')

/**
 * Expose useful internals
 */

exports.util = _
exports.config = config
exports.set = _.set
exports.delete = _.delete
exports.nextTick = _.nextTick

/**
 * The following are exposed for advanced usage / plugins
 */

exports.compiler = require('../compiler')
exports.FragmentFactory = require('../fragment/factory')
exports.internalDirectives = require('../directives/internal')
exports.parsers = {
  path: require('../parsers/path'),
  text: require('../parsers/text'),
  template: require('../parsers/template'),
  directive: require('../parsers/directive'),
  expression: require('../parsers/expression')
}

/**
 * Each instance constructor, including Vue, has a unique
 * cid. This enables us to create wrapped "child
 * constructors" for prototypal inheritance and cache them.
 */

exports.cid = 0
var cid = 1

/**
 * Class inheritance
 *
 * @param {Object} extendOptions
 */

exports.extend = function (extendOptions) {
  extendOptions = extendOptions || {}
  var Super = this
  var isFirstExtend = Super.cid === 0
  if (isFirstExtend && extendOptions._Ctor) {
    return extendOptions._Ctor
  }
  var name = extendOptions.name || Super.options.name
  var Sub = createClass(name || 'VueComponent')
  Sub.prototype = Object.create(Super.prototype)
  Sub.prototype.constructor = Sub
  Sub.cid = cid++
  Sub.options = _.mergeOptions(
    Super.options,
    extendOptions
  )
  Sub['super'] = Super
  // allow further extension
  Sub.extend = Super.extend
  // create asset registers, so extended classes
  // can have their private assets too.
  config._assetTypes.forEach(function (type) {
    Sub[type] = Super[type]
  })
  // enable recursive self-lookup
  if (name) {
    Sub.options.components[name] = Sub
  }
  // cache constructor
  if (isFirstExtend) {
    extendOptions._Ctor = Sub
  }
  return Sub
}

/**
 * A function that returns a sub-class constructor with the
 * given name. This gives us much nicer output when
 * logging instances in the console.
 *
 * @param {String} name
 * @return {Function}
 */

function createClass (name) {
  return new Function(
    'return function ' + _.classify(name) +
    ' (options) { this._init(options) }'
  )()
}

/**
 * Plugin system
 *
 * @param {Object} plugin
 */

exports.use = function (plugin) {
  /* istanbul ignore if */
  if (plugin.installed) {
    return
  }
  // additional parameters
  var args = _.toArray(arguments, 1)
  args.unshift(this)
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
  } else {
    plugin.apply(null, args)
  }
  plugin.installed = true
  return this
}

/**
 * Apply a global mixin by merging it into the default
 * options.
 */

exports.mixin = function (mixin) {
  var Vue = _.Vue
  Vue.options = _.mergeOptions(Vue.options, mixin)
}

/**
 * Create asset registration methods with the following
 * signature:
 *
 * @param {String} id
 * @param {*} definition
 */

config._assetTypes.forEach(function (type) {
  exports[type] = function (id, definition) {
    if (!definition) {
      return this.options[type + 's'][id]
    } else {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        if (type === 'component' && _.commonTagRE.test(id)) {
          _.warn(
            'Do not use built-in HTML elements as component ' +
            'id: ' + id
          )
        }
      }
      if (
        type === 'component' &&
        _.isPlainObject(definition)
      ) {
        definition.name = id
        definition = _.Vue.extend(definition)
      }
      this.options[type + 's'][id] = definition
      return definition
    }
  }
})

}).call(this,require('_process'))

},{"../compiler":65,"../config":67,"../directives/internal":74,"../fragment/factory":96,"../parsers/directive":106,"../parsers/expression":107,"../parsers/path":108,"../parsers/template":109,"../parsers/text":110,"../util":118,"_process":43}],60:[function(require,module,exports){
(function (process){
var _ = require('../util')
var compiler = require('../compiler')

/**
 * Set instance target element and kick off the compilation
 * process. The passed in `el` can be a selector string, an
 * existing Element, or a DocumentFragment (for block
 * instances).
 *
 * @param {Element|DocumentFragment|string} el
 * @public
 */

exports.$mount = function (el) {
  if (this._isCompiled) {
    process.env.NODE_ENV !== 'production' && _.warn(
      '$mount() should be called only once.'
    )
    return
  }
  el = _.query(el)
  if (!el) {
    el = document.createElement('div')
  }
  this._compile(el)
  this._initDOMHooks()
  if (_.inDoc(this.$el)) {
    this._callHook('attached')
    ready.call(this)
  } else {
    this.$once('hook:attached', ready)
  }
  return this
}

/**
 * Mark an instance as ready.
 */

function ready () {
  this._isAttached = true
  this._isReady = true
  this._callHook('ready')
}

/**
 * Teardown the instance, simply delegate to the internal
 * _destroy.
 */

exports.$destroy = function (remove, deferCleanup) {
  this._destroy(remove, deferCleanup)
}

/**
 * Partially compile a piece of DOM and return a
 * decompile function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Vue} [host]
 * @return {Function}
 */

exports.$compile = function (el, host, scope, frag) {
  return compiler.compile(el, this.$options, true)(
    this, el, host, scope, frag
  )
}

}).call(this,require('_process'))

},{"../compiler":65,"../util":118,"_process":43}],61:[function(require,module,exports){
(function (process){
var _ = require('./util')
var config = require('./config')

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.
var queue = []
var userQueue = []
var has = {}
var circular = {}
var waiting = false
var internalQueueDepleted = false

/**
 * Reset the batcher's state.
 */

function resetBatcherState () {
  queue = []
  userQueue = []
  has = {}
  circular = {}
  waiting = internalQueueDepleted = false
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue () {
  runBatcherQueue(queue)
  internalQueueDepleted = true
  runBatcherQueue(userQueue)
  // dev tool hook
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
    }
  }
  resetBatcherState()
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue (queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i]
    var id = watcher.id
    has[id] = null
    watcher.run()
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1
      if (circular[id] > config._maxUpdateCount) {
        queue.splice(has[id], 1)
        _.warn(
          'You may have an infinite update loop for watcher ' +
          'with expression: ' + watcher.expression
        )
      }
    }
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

exports.push = function (watcher) {
  var id = watcher.id
  if (has[id] == null) {
    // if an internal watcher is pushed, but the internal
    // queue is already depleted, we run it immediately.
    if (internalQueueDepleted && !watcher.user) {
      watcher.run()
      return
    }
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue
    has[id] = q.length
    q.push(watcher)
    // queue the flush
    if (!waiting) {
      waiting = true
      _.nextTick(flushBatcherQueue)
    }
  }
}

}).call(this,require('_process'))

},{"./config":67,"./util":118,"_process":43}],62:[function(require,module,exports){
/**
 * A doubly linked list-based Least Recently Used (LRU)
 * cache. Will keep most recently used items while
 * discarding least recently used items when its limit is
 * reached. This is a bare-bone version of
 * Rasmus Andersson's js-lru:
 *
 *   https://github.com/rsms/js-lru
 *
 * @param {Number} limit
 * @constructor
 */

function Cache (limit) {
  this.size = 0
  this.limit = limit
  this.head = this.tail = undefined
  this._keymap = Object.create(null)
}

var p = Cache.prototype

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var entry = {
    key: key,
    value: value
  }
  this._keymap[key] = entry
  if (this.tail) {
    this.tail.newer = entry
    entry.older = this.tail
  } else {
    this.head = entry
  }
  this.tail = entry
  if (this.size === this.limit) {
    return this.shift()
  } else {
    this.size++
  }
}

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head
  if (entry) {
    this.head = this.head.newer
    this.head.older = undefined
    entry.newer = entry.older = undefined
    this._keymap[entry.key] = undefined
  }
  return entry
}

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key]
  if (entry === undefined) return
  if (entry === this.tail) {
    return returnEntry
      ? entry
      : entry.value
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer
    }
    entry.newer.older = entry.older // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer // C. --> E
  }
  entry.newer = undefined // D --x
  entry.older = this.tail // D. --> E
  if (this.tail) {
    this.tail.newer = entry // E. <-- D
  }
  this.tail = entry
  return returnEntry
    ? entry
    : entry.value
}

module.exports = Cache

},{}],63:[function(require,module,exports){
(function (process){
var _ = require('../util')
var dirParser = require('../parsers/directive')
var propDef = require('../directives/internal/prop')
var propBindingModes = require('../config')._propBindingModes
var empty = {}

// regexes
var identRE = require('../parsers/path').identRE
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @return {Function} propsLinkFn
 */

module.exports = function compileProps (el, propOptions) {
  var props = []
  var names = Object.keys(propOptions)
  var i = names.length
  var options, name, attr, value, path, parsed, prop
  while (i--) {
    name = names[i]
    options = propOptions[name] || empty

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      _.warn('Do not use $data as prop.')
      continue
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = _.camelize(name)
    if (!identRE.test(path)) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Invalid prop key: "' + name + '". Prop keys ' +
        'must be valid identifiers.'
      )
      continue
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    }

    attr = _.hyphenate(name)
    // first check dynamic version
    if ((value = _.getBindAttr(el, attr)) === null) {
      if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY
      } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value
      parsed = dirParser.parse(value)
      value = parsed.expression
      prop.filters = parsed.filters
      // check binding type
      if (_.isLiteral(value)) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true
      } else {
        prop.dynamic = true
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' &&
            prop.mode === propBindingModes.TWO_WAY &&
            !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY
          _.warn(
            'Cannot bind two-way prop with non-settable ' +
            'parent path: ' + value
          )
        }
      }
      prop.parentPath = value

      // warn required two-way
      if (
        process.env.NODE_ENV !== 'production' &&
        options.twoWay &&
        prop.mode !== propBindingModes.TWO_WAY
      ) {
        _.warn(
          'Prop "' + name + '" expects a two-way binding type.'
        )
      }
    } else if ((value = _.attr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value
    } else if (options.required) {
      // warn missing required
      process.env.NODE_ENV !== 'production' && _.warn(
        'Missing required prop: ' + name
      )
    }
    // push prop
    props.push(prop)
  }
  return makePropsLinkFn(props)
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn (props) {
  return function propsLinkFn (vm, scope) {
    // store resolved props info
    vm._props = {}
    var i = props.length
    var prop, path, options, value, raw
    while (i--) {
      prop = props[i]
      raw = prop.raw
      path = prop.path
      options = prop.options
      vm._props[path] = prop
      if (raw === null) {
        // initialize absent prop
        _.initProp(vm, prop, getDefault(vm, options))
      } else if (prop.dynamic) {
        // dynamic prop
        if (vm._context) {
          if (prop.mode === propBindingModes.ONE_TIME) {
            // one time binding
            value = (scope || vm._context).$get(prop.parentPath)
            _.initProp(vm, prop, value)
          } else {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope) // el, host, scope
          }
        } else {
          process.env.NODE_ENV !== 'production' && _.warn(
            'Cannot bind dynamic prop on a root instance' +
            ' with no parent: ' + prop.name + '="' +
            raw + '"'
          )
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = _.stripQuotes(raw)
        value = stripped === raw
          ? _.toBoolean(_.toNumber(raw))
          : stripped
        _.initProp(vm, prop, value)
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value
        value = options.type === Boolean && raw === ''
          ? true
          : raw
        _.initProp(vm, prop, value)
      }
    }
  }
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} options
 * @return {*}
 */

function getDefault (vm, options) {
  // no default, return undefined
  if (!options.hasOwnProperty('default')) {
    // absent boolean value defaults to false
    return options.type === Boolean
      ? false
      : undefined
  }
  var def = options.default
  // warn against non-factory defaults for Object & Array
  if (_.isObject(def)) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Object/Array as default prop values will be shared ' +
      'across multiple instances. Use a factory function ' +
      'to return the default value instead.'
    )
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function
    ? def.call(vm)
    : def
}

}).call(this,require('_process'))

},{"../config":67,"../directives/internal/prop":75,"../parsers/directive":106,"../parsers/path":108,"../util":118,"_process":43}],64:[function(require,module,exports){
(function (process){
var _ = require('../util')
var publicDirectives = require('../directives/public')
var internalDirectives = require('../directives/internal')
var compileProps = require('./compile-props')
var textParser = require('../parsers/text')
var dirParser = require('../parsers/directive')
var templateParser = require('../parsers/template')
var resolveAsset = _.resolveAsset

// special binding prefixes
var bindRE = /^v-bind:|^:/
var onRE = /^v-on:|^@/
var argRE = /:(.*)$/
var modifierRE = /\.[^\.]+/g
var transitionRE = /^(v-bind:|:)?transition$/

// terminal directives
var terminalDirectives = [
  'for',
  'if'
]

// default directive priority
var DEFAULT_PRIORITY = 1000

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

exports.compile = function (el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent
    ? compileNode(el, options)
    : null
  // link function for the childNodes
  var childLinkFn =
    !(nodeLinkFn && nodeLinkFn.terminal) &&
    el.tagName !== 'SCRIPT' &&
    el.hasChildNodes()
      ? compileNodeList(el.childNodes, options)
      : null

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn (vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = _.toArray(el.childNodes)
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer () {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag)
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag)
    }, vm)
    return makeUnlinkFn(vm, dirs)
  }
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture (linker, vm) {
  var originalDirCount = vm._directives.length
  linker()
  var dirs = vm._directives.slice(originalDirCount)
  dirs.sort(directiveComparator)
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind()
  }
  return dirs
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator (a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY
  b = b.descriptor.def.priority || DEFAULT_PRIORITY
  return a > b ? -1 : a === b ? 0 : 1
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn (vm, dirs, context, contextDirs) {
  return function unlink (destroying) {
    teardownDirs(vm, dirs, destroying)
    if (context && contextDirs) {
      teardownDirs(context, contextDirs)
    }
  }
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs (vm, dirs, destroying) {
  var i = dirs.length
  while (i--) {
    dirs[i]._teardown()
    if (!destroying) {
      vm._directives.$remove(dirs[i])
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

exports.compileAndLinkProps = function (vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props)
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope)
  }, vm)
  return makeUnlinkFn(vm, propDirs)
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

exports.compileRoot = function (el, options, contextOptions) {
  var containerAttrs = options._containerAttrs
  var replacerAttrs = options._replacerAttrs
  var contextLinkFn, replacerLinkFn

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions)
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options)
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options)
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs
      .filter(function (attr) {
        // allow vue-loader/vueify scoped css attributes
        return attr.name.indexOf('_v-') < 0 &&
          // allow event listeners
          !onRE.test(attr.name) &&
          // allow slots
          attr.name !== 'slot'
      })
      .map(function (attr) {
        return '"' + attr.name + '"'
      })
    if (names.length) {
      var plural = names.length > 1
      _.warn(
        'Attribute' + (plural ? 's ' : ' ') + names.join(', ') +
        (plural ? ' are' : ' is') + ' ignored on component ' +
        '<' + options.el.tagName.toLowerCase() + '> because ' +
        'the component is a fragment instance: ' +
        'http://vuejs.org/guide/components.html#Fragment_Instance'
      )
    }
  }

  return function rootLinkFn (vm, el, scope) {
    // link context scope dirs
    var context = vm._context
    var contextDirs
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope)
      }, context)
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el)
    }, vm)

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
  }
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode (node, options) {
  var type = node.nodeType
  if (type === 1 && node.tagName !== 'SCRIPT') {
    return compileElement(node, options)
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options)
  } else {
    return null
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement (el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = textParser.parse(el.value)
    if (tokens) {
      el.setAttribute(':value', textParser.tokensToExp(tokens))
      el.value = ''
    }
  }
  var linkFn
  var hasAttrs = el.hasAttributes()
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, options)
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options)
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options)
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(el.attributes, options)
  }
  return linkFn
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode (node, options) {
  var tokens = textParser.parse(node.data)
  if (!tokens) {
    return null
  }
  var frag = document.createDocumentFragment()
  var el, token
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i]
    el = token.tag
      ? processTextToken(token, options)
      : document.createTextNode(token.value)
    frag.appendChild(el)
  }
  return makeTextNodeLinkFn(tokens, frag, options)
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken (token, options) {
  var el
  if (token.oneTime) {
    el = document.createTextNode(token.value)
  } else {
    if (token.html) {
      el = document.createComment('v-html')
      setTokenType('html')
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ')
      setTokenType('text')
    }
  }
  function setTokenType (type) {
    if (token.descriptor) return
    var parsed = dirParser.parse(token.value)
    token.descriptor = {
      name: type,
      def: publicDirectives[type],
      expression: parsed.expression,
      filters: parsed.filters
    }
  }
  return el
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn (tokens, frag) {
  return function textNodeLinkFn (vm, el, host, scope) {
    var fragClone = frag.cloneNode(true)
    var childNodes = _.toArray(fragClone.childNodes)
    var token, value, node
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i]
      value = token.value
      if (token.tag) {
        node = childNodes[i]
        if (token.oneTime) {
          value = (scope || vm).$eval(value)
          if (token.html) {
            _.replace(node, templateParser.parse(value, true))
          } else {
            node.data = value
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope)
        }
      }
    }
    _.replace(el, fragClone)
  }
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList (nodeList, options) {
  var linkFns = []
  var nodeLinkFn, childLinkFn, node
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i]
    nodeLinkFn = compileNode(node, options)
    childLinkFn =
      !(nodeLinkFn && nodeLinkFn.terminal) &&
      node.tagName !== 'SCRIPT' &&
      node.hasChildNodes()
        ? compileNodeList(node.childNodes, options)
        : null
    linkFns.push(nodeLinkFn, childLinkFn)
  }
  return linkFns.length
    ? makeChildLinkFn(linkFns)
    : null
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn (linkFns) {
  return function childLinkFn (vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n]
      nodeLinkFn = linkFns[i++]
      childrenLinkFn = linkFns[i++]
      // cache childNodes before linking parent, fix #657
      var childNodes = _.toArray(node.childNodes)
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag)
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag)
      }
    }
  }
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives (el, options) {
  var tag = el.tagName.toLowerCase()
  if (_.commonTagRE.test(tag)) return
  var def = resolveAsset(options, 'elementDirectives', tag)
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def)
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent (el, options) {
  var component = _.checkComponent(el, options)
  if (component) {
    var ref = _.findRef(el)
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    }
    var componentLinkFn = function (vm, el, host, scope, frag) {
      if (ref) {
        _.defineReactive((scope || vm).$refs, ref, null)
      }
      vm._bindDir(descriptor, el, host, scope, frag)
    }
    componentLinkFn.terminal = true
    return componentLinkFn
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives (el, options) {
  // skip v-pre
  if (_.attr(el, 'v-pre') !== null) {
    return skip
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling
    if (prev && prev.hasAttribute('v-if')) {
      return skip
    }
  }
  var value, dirName
  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
    dirName = terminalDirectives[i]
    /* eslint-disable no-cond-assign */
    if (value = el.getAttribute('v-' + dirName)) {
      return makeTerminalNodeLinkFn(el, dirName, value, options)
    }
    /* eslint-enable no-cond-assign */
  }
}

function skip () {}
skip.terminal = true

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} [def]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
  var parsed = dirParser.parse(value)
  var descriptor = {
    name: dirName,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    // either an element directive, or if/for
    def: def || publicDirectives[dirName]
  }
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = _.findRef(el)
  }
  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
    if (descriptor.ref) {
      _.defineReactive((scope || vm).$refs, descriptor.ref, null)
    }
    vm._bindDir(descriptor, el, host, scope, frag)
  }
  fn.terminal = true
  return fn
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives (attrs, options) {
  var i = attrs.length
  var dirs = []
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens
  while (i--) {
    attr = attrs[i]
    name = rawName = attr.name
    value = rawValue = attr.value
    tokens = textParser.parse(value)
    // reset arg
    arg = null
    // check modifiers
    modifiers = parseModifiers(name)
    name = name.replace(modifierRE, '')

    // attribute interpolations
    if (tokens) {
      value = textParser.tokensToExp(tokens)
      arg = name
      pushDir('bind', publicDirectives.bind, true)
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class'
        })) {
          _.warn(
            'class="' + rawValue + '": Do not mix mustache interpolation ' +
            'and v-bind for "class" on the same element. Use one or the other.'
          )
        }
      }
    } else

    // special attribute: transition
    if (transitionRE.test(name)) {
      modifiers.literal = !bindRE.test(name)
      pushDir('transition', internalDirectives.transition)
    } else

    // event handlers
    if (onRE.test(name)) {
      arg = name.replace(onRE, '')
      pushDir('on', publicDirectives.on)
    } else

    // attribute bindings
    if (bindRE.test(name)) {
      dirName = name.replace(bindRE, '')
      if (dirName === 'style' || dirName === 'class') {
        pushDir(dirName, internalDirectives[dirName])
      } else {
        arg = dirName
        pushDir('bind', publicDirectives.bind)
      }
    } else

    // normal directives
    if (name.indexOf('v-') === 0) {
      // check arg
      arg = (arg = name.match(argRE)) && arg[1]
      if (arg) {
        name = name.replace(argRE, '')
      }
      // extract directive name
      dirName = name.slice(2)

      // skip v-else (when used with v-show)
      if (dirName === 'else') {
        continue
      }

      dirDef = resolveAsset(options, 'directives', dirName)

      if (process.env.NODE_ENV !== 'production') {
        _.assertAsset(dirDef, 'directive', dirName)
      }

      if (dirDef) {
        pushDir(dirName, dirDef)
      }
    }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Boolean} [interp]
   */

  function pushDir (dirName, def, interp) {
    var parsed = dirParser.parse(value)
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      expression: parsed.expression,
      filters: parsed.filters,
      interp: interp
    })
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs)
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers (name) {
  var res = Object.create(null)
  var match = name.match(modifierRE)
  if (match) {
    var i = match.length
    while (i--) {
      res[match[i].slice(1)] = true
    }
  }
  return res
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn (directives) {
  return function nodeLinkFn (vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag)
    }
  }
}

}).call(this,require('_process'))

},{"../directives/internal":74,"../directives/public":84,"../parsers/directive":106,"../parsers/template":109,"../parsers/text":110,"../util":118,"./compile-props":63,"_process":43}],65:[function(require,module,exports){
var _ = require('../util')

_.extend(exports, require('./compile'))
_.extend(exports, require('./transclude'))

},{"../util":118,"./compile":64,"./transclude":66}],66:[function(require,module,exports){
(function (process){
var _ = require('../util')
var templateParser = require('../parsers/template')
var specialCharRE = /[^\w\-:\.]/

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

exports.transclude = function (el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el)
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (_.isTemplate(el)) {
    el = templateParser.parse(el)
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>'
    }
    if (options.template) {
      options._content = _.extractContent(el)
      el = transcludeTemplate(el, options)
    }
  }
  if (el instanceof DocumentFragment) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    _.prepend(_.createAnchor('v-start', true), el)
    el.appendChild(_.createAnchor('v-end', true))
  }
  return el
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate (el, options) {
  var template = options.template
  var frag = templateParser.parse(template, true)
  if (frag) {
    var replacer = frag.firstChild
    var tag = replacer.tagName && replacer.tagName.toLowerCase()
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'You are mounting an instance with a template to ' +
          '<body>. This will replace <body> entirely. You ' +
          'should probably use `replace: false` here.'
        )
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
        // multi-children template
        frag.childNodes.length > 1 ||
        // non-element template
        replacer.nodeType !== 1 ||
        // single nested component
        tag === 'component' ||
        _.resolveAsset(options, 'components', tag) ||
        replacer.hasAttribute('is') ||
        replacer.hasAttribute(':is') ||
        replacer.hasAttribute('v-bind:is') ||
        // element directive
        _.resolveAsset(options, 'elementDirectives', tag) ||
        // for block
        replacer.hasAttribute('v-for') ||
        // if block
        replacer.hasAttribute('v-if')
      ) {
        return frag
      } else {
        options._replacerAttrs = extractAttrs(replacer)
        mergeAttrs(el, replacer)
        return replacer
      }
    } else {
      el.appendChild(frag)
      return el
    }
  } else {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid template option: ' + template
    )
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs (el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return _.toArray(el.attributes)
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs (from, to) {
  var attrs = from.attributes
  var i = attrs.length
  var name, value
  while (i--) {
    name = attrs[i].name
    value = attrs[i].value
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value)
    } else if (name === 'class') {
      value = to.getAttribute(name) + ' ' + value
      to.setAttribute(name, value)
    }
  }
}

}).call(this,require('_process'))

},{"../parsers/template":109,"../util":118,"_process":43}],67:[function(require,module,exports){
module.exports = {

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: [
    'component',
    'directive',
    'elementDirective',
    'filter',
    'transition',
    'partial'
  ],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}

/**
 * Interpolation delimiters. Changing these would trigger
 * the text parser to re-compile the regular expressions.
 *
 * @type {Array<String>}
 */

var delimiters = ['{{', '}}']
var unsafeDelimiters = ['{{{', '}}}']
var textParser = require('./parsers/text')

Object.defineProperty(module.exports, 'delimiters', {
  get: function () {
    return delimiters
  },
  set: function (val) {
    delimiters = val
    textParser.compileRegex()
  }
})

Object.defineProperty(module.exports, 'unsafeDelimiters', {
  get: function () {
    return unsafeDelimiters
  },
  set: function (val) {
    unsafeDelimiters = val
    textParser.compileRegex()
  }
})

},{"./parsers/text":110}],68:[function(require,module,exports){
(function (process){
var _ = require('./util')
var Watcher = require('./watcher')
var expParser = require('./parsers/expression')
function noop () {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {String} name
 * @param {Node} el
 * @param {Vue} vm
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} raw
 * @param {Object} def - directive definition object
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */

function Directive (descriptor, vm, el, host, scope, frag) {
  this.vm = vm
  this.el = el
  // copy descriptor properties
  this.descriptor = descriptor
  this.name = descriptor.name
  this.expression = descriptor.expression
  this.arg = descriptor.arg
  this.modifiers = descriptor.modifiers
  this.filters = descriptor.filters
  this.literal = this.modifiers && this.modifiers.literal
  // private
  this._locked = false
  this._bound = false
  this._listeners = null
  // link context
  this._host = host
  this._scope = scope
  this._frag = frag
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || []
    this.el._vue_directives.push(this)
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 *
 * @param {Object} def
 */

Directive.prototype._bind = function () {
  var name = this.name
  var descriptor = this.descriptor

  // remove attribute
  if (
    (name !== 'cloak' || this.vm._isCompiled) &&
    this.el && this.el.removeAttribute
  ) {
    var attr = descriptor.attr || ('v-' + name)
    this.el.removeAttribute(attr)
  }

  // copy def properties
  var def = descriptor.def
  if (typeof def === 'function') {
    this.update = def
  } else {
    _.extend(this, def)
  }

  // setup directive params
  this._setupParams()

  // initial bind
  if (this.bind) {
    this.bind()
  }

  if (this.literal) {
    this.update && this.update(descriptor.raw)
  } else if (
    (this.expression || this.modifiers) &&
    (this.update || this.twoWay) &&
    !this._checkStatement()
  ) {
    // wrapped updater for context
    var dir = this
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal)
        }
      }
    } else {
      this._update = noop
    }
    var preProcess = this._preProcess
      ? _.bind(this._preProcess, this)
      : null
    var postProcess = this._postProcess
      ? _.bind(this._postProcess, this)
      : null
    var watcher = this._watcher = new Watcher(
      this.vm,
      this.expression,
      this._update, // callback
      {
        filters: this.filters,
        twoWay: this.twoWay,
        deep: this.deep,
        preProcess: preProcess,
        postProcess: postProcess,
        scope: this._scope
      }
    )
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind()
    } else if (this.update) {
      this.update(watcher.value)
    }
  }
  this._bound = true
}

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return
  }
  var params = this.params
  // swap the params array with a fresh object.
  this.params = Object.create(null)
  var i = params.length
  var key, val, mappedKey
  while (i--) {
    key = params[i]
    mappedKey = _.camelize(key)
    val = _.getBindAttr(this.el, key)
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val)
    } else {
      // static
      val = _.attr(this.el, key)
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val
      }
    }
  }
}

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this
  var called = false
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key]
      if (cb) {
        cb.call(self, val, oldVal)
      }
    } else {
      called = true
    }
  }, {
    immediate: true
  })
  ;(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch)
}

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression
  if (
    expression && this.acceptStatement &&
    !expParser.isSimplePath(expression)
  ) {
    var fn = expParser.parse(expression).get
    var scope = this._scope || this.vm
    var handler = function () {
      fn.call(scope, scope)
    }
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters)
    }
    this.update(handler)
    return true
  }
}

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value)
    })
  } else if (process.env.NODE_ENV !== 'production') {
    _.warn(
      'Directive.set() can only be used inside twoWay' +
      'directives.'
    )
  }
}

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this
  self._locked = true
  fn.call(self)
  _.nextTick(function () {
    self._locked = false
  })
}

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 */

Directive.prototype.on = function (event, handler) {
  _.on(this.el, event, handler)
  ;(this._listeners || (this._listeners = []))
    .push([event, handler])
}

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false
    if (this.unbind) {
      this.unbind()
    }
    if (this._watcher) {
      this._watcher.teardown()
    }
    var listeners = this._listeners
    var i
    if (listeners) {
      i = listeners.length
      while (i--) {
        _.off(this.el, listeners[i][0], listeners[i][1])
      }
    }
    var unwatchFns = this._paramUnwatchFns
    if (unwatchFns) {
      i = unwatchFns.length
      while (i--) {
        unwatchFns[i]()
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this)
    }
    this.vm = this.el = this._watcher = this._listeners = null
  }
}

module.exports = Directive

}).call(this,require('_process'))

},{"./parsers/expression":107,"./util":118,"./watcher":122,"_process":43}],69:[function(require,module,exports){
exports.slot = require('./slot')
exports.partial = require('./partial')

},{"./partial":70,"./slot":71}],70:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var vIf = require('../public/if')
var FragmentFactory = require('../../fragment/factory')

module.exports = {

  priority: 1750,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function (value) {
      vIf.remove.call(this)
      if (value) {
        this.insert(value)
      }
    }
  },

  bind: function () {
    this.anchor = _.createAnchor('v-partial')
    _.replace(this.el, this.anchor)
    this.insert(this.params.name)
  },

  insert: function (id) {
    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
    if (process.env.NODE_ENV !== 'production') {
      _.assertAsset(partial, 'partial', id)
    }
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial)
      vIf.insert.call(this)
    }
  },

  unbind: function () {
    if (this.frag) {
      this.frag.destroy()
    }
  }
}

}).call(this,require('_process'))

},{"../../fragment/factory":96,"../../util":118,"../public/if":83,"_process":43}],71:[function(require,module,exports){
var _ = require('../../util')
var templateParser = require('../../parsers/template')

// This is the elementDirective that handles <content>
// transclusions. It relies on the raw content of an
// instance being stored as `$options._content` during
// the transclude phase.

module.exports = {

  priority: 1750,

  params: ['name'],

  bind: function () {
    var host = this.vm
    var raw = host.$options._content
    var content
    if (!raw) {
      this.fallback()
      return
    }
    var context = host._context
    var slotName = this.params.name
    if (!slotName) {
      // Default content
      var self = this
      var compileDefaultContent = function () {
        self.compile(
          extractFragment(raw.childNodes, raw, true),
          context,
          host
        )
      }
      if (!host._isCompiled) {
        // defer until the end of instance compilation,
        // because the default outlet must wait until all
        // other possible outlets with selectors have picked
        // out their contents.
        host.$once('hook:compiled', compileDefaultContent)
      } else {
        compileDefaultContent()
      }
    } else {
      var selector = '[slot="' + slotName + '"]'
      var nodes = raw.querySelectorAll(selector)
      if (nodes.length) {
        content = extractFragment(nodes, raw)
        if (content.hasChildNodes()) {
          this.compile(content, context, host)
        } else {
          this.fallback()
        }
      } else {
        this.fallback()
      }
    }
  },

  fallback: function () {
    this.compile(_.extractContent(this.el, true), this.vm)
  },

  compile: function (content, context, host) {
    if (content && context) {
      var scope = host
        ? host._scope
        : this._scope
      this.unlink = context.$compile(
        content, host, scope, this._frag
      )
    }
    if (content) {
      _.replace(this.el, content)
    } else {
      _.remove(this.el)
    }
  },

  unbind: function () {
    if (this.unlink) {
      this.unlink()
    }
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @param {Element} parent
 * @param {Boolean} main
 * @return {DocumentFragment}
 */

function extractFragment (nodes, parent, main) {
  var frag = document.createDocumentFragment()
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i]
    // if this is the main outlet, we want to skip all
    // previously selected nodes;
    // otherwise, we want to mark the node as selected.
    // clone the node so the original raw content remains
    // intact. this ensures proper re-compilation in cases
    // where the outlet is inside a conditional block
    if (main && !node.__v_selected) {
      append(node)
    } else if (!main && node.parentNode === parent) {
      node.__v_selected = true
      append(node)
    }
  }
  return frag

  function append (node) {
    if (_.isTemplate(node) &&
        !node.hasAttribute('v-if') &&
        !node.hasAttribute('v-for')) {
      node = templateParser.parse(node)
    }
    node = templateParser.clone(node)
    frag.appendChild(node)
  }
}

},{"../../parsers/template":109,"../../util":118}],72:[function(require,module,exports){
var _ = require('../../util')
var addClass = _.addClass
var removeClass = _.removeClass

module.exports = {

  deep: true,

  update: function (value) {
    if (value && typeof value === 'string') {
      this.handleObject(stringToObject(value))
    } else if (_.isPlainObject(value)) {
      this.handleObject(value)
    } else if (_.isArray(value)) {
      this.handleArray(value)
    } else {
      this.cleanup()
    }
  },

  handleObject: function (value) {
    this.cleanup(value)
    var keys = this.prevKeys = Object.keys(value)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      if (value[key]) {
        addClass(this.el, key)
      } else {
        removeClass(this.el, key)
      }
    }
  },

  handleArray: function (value) {
    this.cleanup(value)
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        addClass(this.el, value[i])
      }
    }
    this.prevKeys = value.slice()
  },

  cleanup: function (value) {
    if (this.prevKeys) {
      var i = this.prevKeys.length
      while (i--) {
        var key = this.prevKeys[i]
        if (key && (!value || !contains(value, key))) {
          removeClass(this.el, key)
        }
      }
    }
  }
}

function stringToObject (value) {
  var res = {}
  var keys = value.trim().split(/\s+/)
  var i = keys.length
  while (i--) {
    res[keys[i]] = true
  }
  return res
}

function contains (value, key) {
  return _.isArray(value)
    ? value.indexOf(key) > -1
    : value.hasOwnProperty(key)
}

},{"../../util":118}],73:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var templateParser = require('../../parsers/template')

module.exports = {

  priority: 1500,

  params: [
    'keep-alive',
    'transition-mode',
    'inline-template'
  ],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function () {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive
      if (this.keepAlive) {
        this.cache = {}
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = _.extractContent(this.el, true)
      }
      // component resolution related state
      this.pendingComponentCb =
      this.Component = null
      // transition related state
      this.pendingRemovals = 0
      this.pendingRemovalCb = null
      // create a ref anchor
      this.anchor = _.createAnchor('v-component')
      _.replace(this.el, this.anchor)
      // remove is attribute
      this.el.removeAttribute('is')
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression)
      }
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'cannot mount component "' + this.expression + '" ' +
        'on already mounted element: ' + this.el
      )
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function (value) {
    if (!this.literal) {
      this.setComponent(value)
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function (value, cb) {
    this.invalidatePending()
    if (!value) {
      // just remove current
      this.unbuild(true)
      this.remove(this.childVM, cb)
      this.childVM = null
    } else {
      var self = this
      this.resolveComponent(value, function () {
        self.mountComponent(cb)
      })
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   */

  resolveComponent: function (id, cb) {
    var self = this
    this.pendingComponentCb = _.cancellable(function (Component) {
      self.ComponentName = Component.options.name || id
      self.Component = Component
      cb()
    })
    this.vm._resolveComponent(id, this.pendingComponentCb)
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function (cb) {
    // actual mount
    this.unbuild(true)
    var self = this
    var activateHook = this.Component.options.activate
    var cached = this.getCached()
    var newComponent = this.build()
    if (activateHook && !cached) {
      this.waitingFor = newComponent
      activateHook.call(newComponent, function () {
        self.waitingFor = null
        self.transition(newComponent, cb)
      })
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef()
      }
      this.transition(newComponent, cb)
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function () {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel()
      this.pendingComponentCb = null
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function (extraOptions) {
    var cached = this.getCached()
    if (cached) {
      return cached
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: templateParser.clone(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      }
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        _.extend(options, extraOptions)
      }
      var child = new this.Component(options)
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' &&
          this.el.hasAttribute('transition') &&
          child._isFragment) {
        _.warn(
          'Transitions will not work on a fragment instance. ' +
          'Template: ' + child.$options.template
        )
      }
      return child
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function () {
    return this.keepAlive && this.cache[this.Component.cid]
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function (defer) {
    if (this.waitingFor) {
      this.waitingFor.$destroy()
      this.waitingFor = null
    }
    var child = this.childVM
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._updateRef(true)
      }
      return
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer)
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function (child, cb) {
    var keepAlive = this.keepAlive
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++
      this.pendingRemovalCb = cb
      var self = this
      child.$remove(function () {
        self.pendingRemovals--
        if (!keepAlive) child._cleanup()
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb()
          self.pendingRemovalCb = null
        }
      })
    } else if (cb) {
      cb()
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function (target, cb) {
    var self = this
    var current = this.childVM
    // for devtool inspection
    if (process.env.NODE_ENV !== 'production') {
      if (current) current._inactive = true
      target._inactive = false
    }
    this.childVM = target
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb)
        })
        break
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb)
        })
        break
      default:
        self.remove(current)
        target.$before(self.anchor, cb)
    }
  },

  /**
   * Unbind.
   */

  unbind: function () {
    this.invalidatePending()
    // Do not defer cleanup when unbinding
    this.unbuild()
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy()
      }
      this.cache = null
    }
  }
}

}).call(this,require('_process'))

},{"../../parsers/template":109,"../../util":118,"_process":43}],74:[function(require,module,exports){
exports.style = require('./style')
exports['class'] = require('./class')
exports.component = require('./component')
exports.prop = require('./prop')
exports.transition = require('./transition')

},{"./class":72,"./component":73,"./prop":75,"./style":76,"./transition":77}],75:[function(require,module,exports){
// NOTE: the prop internal directive is compiled and linked
// during _initScope(), before the created hook is called.
// The purpose is to make the initial prop values available
// inside `created` hooks and `data` functions.

var _ = require('../../util')
var Watcher = require('../../watcher')
var bindingModes = require('../../config')._propBindingModes

module.exports = {

  bind: function () {

    var child = this.vm
    var parent = child._context
    // passed in from compiler directly
    var prop = this.descriptor.prop
    var childKey = prop.path
    var parentKey = prop.parentPath
    var twoWay = prop.mode === bindingModes.TWO_WAY

    var parentWatcher = this.parentWatcher = new Watcher(
      parent,
      parentKey,
      function (val) {
        if (_.assertProp(prop, val)) {
          child[childKey] = val
        }
      }, {
        twoWay: twoWay,
        filters: prop.filters,
        // important: props need to be observed on the
        // v-for scope if present
        scope: this._scope
      }
    )

    // set the child initial value.
    _.initProp(child, prop, parentWatcher.value)

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this
      child.$once('hook:created', function () {
        self.childWatcher = new Watcher(
          child,
          childKey,
          function (val) {
            parentWatcher.set(val)
          }, {
            // ensure sync upward before parent sync down.
            // this is necessary in cases e.g. the child
            // mutates a prop array, then replaces it. (#1683)
            sync: true
          }
        )
      })
    }
  },

  unbind: function () {
    this.parentWatcher.teardown()
    if (this.childWatcher) {
      this.childWatcher.teardown()
    }
  }
}

},{"../../config":67,"../../util":118,"../../watcher":122}],76:[function(require,module,exports){
var _ = require('../../util')
var prefixes = ['-webkit-', '-moz-', '-ms-']
var camelPrefixes = ['Webkit', 'Moz', 'ms']
var importantRE = /!important;?$/
var testEl = null
var propCache = {}

module.exports = {

  deep: true,

  update: function (value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value
    } else if (_.isArray(value)) {
      this.handleObject(value.reduce(_.extend, {}))
    } else {
      this.handleObject(value || {})
    }
  },

  handleObject: function (value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {})
    var name, val
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null)
        delete cache[name]
      }
    }
    for (name in value) {
      val = value[name]
      if (val !== cache[name]) {
        cache[name] = val
        this.handleSingle(name, val)
      }
    }
  },

  handleSingle: function (prop, value) {
    prop = normalize(prop)
    if (!prop) return // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += ''
    if (value) {
      var isImportant = importantRE.test(value)
        ? 'important'
        : ''
      if (isImportant) {
        value = value.replace(importantRE, '').trim()
      }
      this.el.style.setProperty(prop, value, isImportant)
    } else {
      this.el.style.removeProperty(prop)
    }
  }

}

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize (prop) {
  if (propCache[prop]) {
    return propCache[prop]
  }
  var res = prefix(prop)
  propCache[prop] = propCache[res] = res
  return res
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix (prop) {
  prop = _.hyphenate(prop)
  var camel = _.camelize(prop)
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
  if (!testEl) {
    testEl = document.createElement('div')
  }
  if (camel in testEl.style) {
    return prop
  }
  var i = prefixes.length
  var prefixed
  while (i--) {
    prefixed = camelPrefixes[i] + upper
    if (prefixed in testEl.style) {
      return prefixes[i] + prop
    }
  }
}

},{"../../util":118}],77:[function(require,module,exports){
var _ = require('../../util')
var Transition = require('../../transition/transition')

module.exports = {

  priority: 1100,

  update: function (id, oldId) {
    var el = this.el
    // resolve on owner vm
    var hooks = _.resolveAsset(this.vm.$options, 'transitions', id)
    id = id || 'v'
    // apply on closest vm
    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm)
    if (oldId) {
      _.removeClass(el, oldId + '-transition')
    }
    _.addClass(el, id + '-transition')
  }
}

},{"../../transition/transition":113,"../../util":118}],78:[function(require,module,exports){
(function (process){
var _ = require('../../util')

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink'
var xlinkRE = /^xlink:/

// these input element attributes should also set their
// corresponding properties
var inputProps = {
  value: 1,
  checked: 1,
  selected: 1
}

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
}

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/

module.exports = {

  priority: 850,

  bind: function () {
    var attr = this.arg
    var tag = this.el.tagName
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true
    }
    // handle interpolation bindings
    if (this.descriptor.interp) {
      // only allow binding on native attributes
      if (
        disallowedInterpAttrRE.test(attr) ||
        (attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT'))
      ) {
        process.env.NODE_ENV !== 'production' && _.warn(
          attr + '="' + this.descriptor.raw + '": ' +
          'attribute interpolation is not allowed in Vue.js ' +
          'directives and special attributes.'
        )
        this.el.removeAttribute(attr)
        this.invalid = true
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + this.descriptor.raw + '": '
        // warn src
        if (attr === 'src') {
          _.warn(
            raw + 'interpolation in "src" attribute will cause ' +
            'a 404 request. Use v-bind:src instead.'
          )
        }

        // warn style
        if (attr === 'style') {
          _.warn(
            raw + 'interpolation in "style" attribute will cause ' +
            'the attribute to be discarded in Internet Explorer. ' +
            'Use v-bind:style instead.'
          )
        }
      }
    }
  },

  update: function (value) {
    if (this.invalid) {
      return
    }
    var attr = this.arg
    if (this.arg) {
      this.handleSingle(attr, value)
    } else {
      this.handleObject(value || {})
    }
  },

  // share object handler with v-bind:class
  handleObject: require('../internal/style').handleObject,

  handleSingle: function (attr, value) {
    if (inputProps[attr] && attr in this.el) {
      this.el[attr] = attr === 'value'
        ? (value || '') // IE9 will set input.value to "null" for null...
        : value
    }
    // set model props
    var modelProp = modelProps[attr]
    if (modelProp) {
      this.el[modelProp] = value
      // update v-model if present
      var model = this.el.__v_model
      if (model) {
        model.listener()
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
      this.el.removeAttribute(attr)
      return
    }
    // update attribute
    if (value != null && value !== false) {
      if (xlinkRE.test(attr)) {
        this.el.setAttributeNS(xlinkNS, attr, value)
      } else {
        this.el.setAttribute(attr, value)
      }
    } else {
      this.el.removeAttribute(attr)
    }
  }
}

}).call(this,require('_process'))

},{"../../util":118,"../internal/style":76,"_process":43}],79:[function(require,module,exports){
module.exports = {
  bind: function () {
    var el = this.el
    this.vm.$once('hook:compiled', function () {
      el.removeAttribute('v-cloak')
    })
  }
}

},{}],80:[function(require,module,exports){
var _ = require('../../util')

module.exports = {

  priority: 1500,

  bind: function () {
    /* istanbul ignore if */
    if (!this.arg) {
      return
    }
    var id = this.id = _.camelize(this.arg)
    var refs = (this._scope || this.vm).$els
    if (refs.hasOwnProperty(id)) {
      refs[id] = this.el
    } else {
      _.defineReactive(refs, id, this.el)
    }
  },

  unbind: function () {
    var refs = (this._scope || this.vm).$els
    if (refs[this.id] === this.el) {
      refs[this.id] = null
    }
  }
}

},{"../../util":118}],81:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var FragmentFactory = require('../../fragment/factory')
var isObject = _.isObject
var uid = 0

module.exports = {

  priority: 2000,

  params: [
    'track-by',
    'stagger',
    'enter-stagger',
    'leave-stagger'
  ],

  bind: function () {
    // support "item in items" syntax
    var inMatch = this.expression.match(/(.*) in (.*)/)
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/)
      if (itMatch) {
        this.iterator = itMatch[1].trim()
        this.alias = itMatch[2].trim()
      } else {
        this.alias = inMatch[1].trim()
      }
      this.expression = inMatch[2]
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Alias is required in v-for.'
      )
      return
    }

    // uid as a cache identifier
    this.id = '__v-for__' + (++uid)

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName
    this.isOption =
      (tag === 'OPTION' || tag === 'OPTGROUP') &&
      this.el.parentNode.tagName === 'SELECT'

    // setup anchor nodes
    this.start = _.createAnchor('v-for-start')
    this.end = _.createAnchor('v-for-end')
    _.replace(this.el, this.end)
    _.before(this.start, this.end)

    // cache
    this.cache = Object.create(null)

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el)
  },

  update: function (data) {
    this.diff(data)
    this.updateRef()
    this.updateModel()
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function (data) {
    // check if the Array was converted from an Object
    var item = data[0]
    var convertedFromObject = this.fromObject =
      isObject(item) &&
      item.hasOwnProperty('$key') &&
      item.hasOwnProperty('$value')

    var trackByKey = this.params.trackBy
    var oldFrags = this.frags
    var frags = this.frags = new Array(data.length)
    var alias = this.alias
    var iterator = this.iterator
    var start = this.start
    var end = this.end
    var inDoc = _.inDoc(start)
    var init = !oldFrags
    var i, l, frag, key, value, primitive

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i]
      key = convertedFromObject ? item.$key : null
      value = convertedFromObject ? item.$value : item
      primitive = !isObject(value)
      frag = !init && this.getCachedFrag(value, i, key)
      if (frag) { // reusable fragment
        frag.reused = true
        // update $index
        frag.scope.$index = i
        // update $key
        if (key) {
          frag.scope.$key = key
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          frag.scope[alias] = value
        }
      } else { // new isntance
        frag = this.create(value, alias, i, key)
        frag.fresh = !init
      }
      frags[i] = frag
      if (init) {
        frag.before(end)
      }
    }

    // we're done for the initial render.
    if (init) {
      return
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0
    var totalRemoved = oldFrags.length - frags.length
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i]
      if (!frag.reused) {
        this.deleteCachedFrag(frag)
        this.remove(frag, removalIndex++, totalRemoved, inDoc)
      }
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev
    var insertionIndex = 0
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i]
      // this is the frag that we should be after
      targetPrev = frags[i - 1]
      prevEl = targetPrev
        ? targetPrev.staggerCb
          ? targetPrev.staggerAnchor
          : targetPrev.end || targetPrev.node
        : start
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id)
        if (currentPrev !== targetPrev) {
          this.move(frag, prevEl)
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDoc)
      }
      frag.reused = frag.fresh = false
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function (value, alias, index, key) {
    var host = this._host
    // create iteration scope
    var parentScope = this._scope || this.vm
    var scope = Object.create(parentScope)
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs)
    scope.$els = Object.create(parentScope.$els)
    // make sure point $parent to parent scope
    scope.$parent = parentScope
    // for two-way binding on alias
    scope.$forContext = this
    // define scope properties
    _.defineReactive(scope, alias, value)
    _.defineReactive(scope, '$index', index)
    if (key) {
      _.defineReactive(scope, '$key', key)
    } else if (scope.$key) {
      // avoid accidental fallback
      _.define(scope, '$key', null)
    }
    if (this.iterator) {
      _.defineReactive(scope, this.iterator, key !== null ? key : index)
    }
    var frag = this.factory.create(host, scope, this._frag)
    frag.forId = this.id
    this.cacheFrag(value, frag, index, key)
    return frag
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function () {
    var ref = this.descriptor.ref
    if (!ref) return
    var hash = (this._scope || this.vm).$refs
    var refs
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag)
    } else {
      refs = {}
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag)
      })
    }
    hash[ref] = refs
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function () {
    if (this.isOption) {
      var parent = this.start.parentNode
      var model = parent && parent.__v_model
      if (model) {
        model.forceUpdate()
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDoc
   */

  insert: function (frag, index, prevEl, inDoc) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel()
      frag.staggerCb = null
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter')
    if (inDoc && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor
      if (!anchor) {
        anchor = frag.staggerAnchor = _.createAnchor('stagger-anchor')
        anchor.__vfrag__ = frag
      }
      _.after(anchor, prevEl)
      var op = frag.staggerCb = _.cancellable(function () {
        frag.staggerCb = null
        frag.before(anchor)
        _.remove(anchor)
      })
      setTimeout(op, staggerAmount)
    } else {
      frag.before(prevEl.nextSibling)
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDoc
   */

  remove: function (frag, index, total, inDoc) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel()
      frag.staggerCb = null
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave')
    if (inDoc && staggerAmount) {
      var op = frag.staggerCb = _.cancellable(function () {
        frag.staggerCb = null
        frag.remove()
      })
      setTimeout(op, staggerAmount)
    } else {
      frag.remove()
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function (frag, prevEl) {
    frag.before(prevEl.nextSibling, false)
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function (value, frag, index, key) {
    var trackByKey = this.params.trackBy
    var cache = this.cache
    var primitive = !isObject(value)
    var id
    if (key || trackByKey || primitive) {
      id = trackByKey
        ? trackByKey === '$index'
          ? index
          : value[trackByKey]
        : (key || value)
      if (!cache[id]) {
        cache[id] = frag
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' &&
        this.warnDuplicate(value)
      }
    } else {
      id = this.id
      if (value.hasOwnProperty(id)) {
        if (value[id] === null) {
          value[id] = frag
        } else {
          process.env.NODE_ENV !== 'production' &&
          this.warnDuplicate(value)
        }
      } else {
        _.define(value, id, frag)
      }
    }
    frag.raw = value
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function (value, index, key) {
    var trackByKey = this.params.trackBy
    var primitive = !isObject(value)
    var frag
    if (key || trackByKey || primitive) {
      var id = trackByKey
        ? trackByKey === '$index'
          ? index
          : value[trackByKey]
        : (key || value)
      frag = this.cache[id]
    } else {
      frag = value[this.id]
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' &&
      this.warnDuplicate(value)
    }
    return frag
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function (frag) {
    var value = frag.raw
    var trackByKey = this.params.trackBy
    var scope = frag.scope
    var index = scope.$index
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = scope.hasOwnProperty('$key') && scope.$key
    var primitive = !isObject(value)
    if (trackByKey || key || primitive) {
      var id = trackByKey
        ? trackByKey === '$index'
          ? index
          : value[trackByKey]
        : (key || value)
      this.cache[id] = null
    } else {
      value[this.id] = null
      frag.raw = null
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function (frag, index, total, type) {
    type = type + 'Stagger'
    var trans = frag.node.__v_trans
    var hooks = trans && trans.hooks
    var hook = hooks && (hooks[type] || hooks.stagger)
    return hook
      ? hook.call(frag, index, total)
      : index * parseInt(this.params[type] || this.params.stagger, 10)
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function (value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value
    return value
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * wathcer's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function (value) {
    if (_.isArray(value)) {
      return value
    } else if (_.isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value)
      var i = keys.length
      var res = new Array(i)
      var key
      while (i--) {
        key = keys[i]
        res[i] = {
          $key: key,
          $value: value[key]
        }
      }
      return res
    } else {
      if (typeof value === 'number') {
        value = range(value)
      }
      return value || []
    }
  },

  unbind: function () {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null
    }
    if (this.frags) {
      var i = this.frags.length
      var frag
      while (i--) {
        frag = this.frags[i]
        this.deleteCachedFrag(frag)
        frag.destroy()
      }
    }
  }
}

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag (frag, anchor, id) {
  var el = frag.node.previousSibling
  /* istanbul ignore if */
  if (!el) return
  frag = el.__vfrag__
  while (
    (!frag || frag.forId !== id || !frag.inserted) &&
    el !== anchor
  ) {
    el = el.previousSibling
    /* istanbul ignore if */
    if (!el) return
    frag = el.__vfrag__
  }
  return frag
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag (frag) {
  return frag.node.__vue__ || frag.node.nextSibling.__vue__
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range (n) {
  var i = -1
  var ret = new Array(n)
  while (++i < n) {
    ret[i] = i
  }
  return ret
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.warnDuplicate = function (value) {
    _.warn(
      'Duplicate value found in v-for="' + this.descriptor.raw + '": ' +
      JSON.stringify(value) + '. Use track-by="$index" if ' +
      'you are expecting duplicate values.'
    )
  }
}

}).call(this,require('_process'))

},{"../../fragment/factory":96,"../../util":118,"_process":43}],82:[function(require,module,exports){
var _ = require('../../util')
var templateParser = require('../../parsers/template')

module.exports = {

  bind: function () {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = []
      // replace the placeholder with proper anchor
      this.anchor = _.createAnchor('v-html')
      _.replace(this.el, this.anchor)
    }
  },

  update: function (value) {
    value = _.toString(value)
    if (this.nodes) {
      this.swap(value)
    } else {
      this.el.innerHTML = value
    }
  },

  swap: function (value) {
    // remove old nodes
    var i = this.nodes.length
    while (i--) {
      _.remove(this.nodes[i])
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = templateParser.parse(value, true, true)
    // save a reference to these nodes so we can remove later
    this.nodes = _.toArray(frag.childNodes)
    _.before(frag, this.anchor)
  }
}

},{"../../parsers/template":109,"../../util":118}],83:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var FragmentFactory = require('../../fragment/factory')

module.exports = {

  priority: 2000,

  bind: function () {
    var el = this.el
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling
      if (next && _.attr(next, 'v-else') !== null) {
        _.remove(next)
        this.elseFactory = new FragmentFactory(this.vm, next)
      }
      // check main block
      this.anchor = _.createAnchor('v-if')
      _.replace(el, this.anchor)
      this.factory = new FragmentFactory(this.vm, el)
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'v-if="' + this.expression + '" cannot be ' +
        'used on an instance root element.'
      )
      this.invalid = true
    }
  },

  update: function (value) {
    if (this.invalid) return
    if (value) {
      if (!this.frag) {
        this.insert()
      }
    } else {
      this.remove()
    }
  },

  insert: function () {
    if (this.elseFrag) {
      this.elseFrag.remove()
      this.elseFrag = null
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag)
    this.frag.before(this.anchor)
  },

  remove: function () {
    if (this.frag) {
      this.frag.remove()
      this.frag = null
    }
    if (this.elseFactory && !this.elseFrag) {
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag)
      this.elseFrag.before(this.anchor)
    }
  },

  unbind: function () {
    if (this.frag) {
      this.frag.destroy()
    }
  }
}

}).call(this,require('_process'))

},{"../../fragment/factory":96,"../../util":118,"_process":43}],84:[function(require,module,exports){
// text & html
exports.text = require('./text')
exports.html = require('./html')

// logic control
exports['for'] = require('./for')
exports['if'] = require('./if')
exports.show = require('./show')

// two-way binding
exports.model = require('./model')

// event handling
exports.on = require('./on')

// attributes
exports.bind = require('./bind')

// ref & el
exports.el = require('./el')
exports.ref = require('./ref')

// cloak
exports.cloak = require('./cloak')

},{"./bind":78,"./cloak":79,"./el":80,"./for":81,"./html":82,"./if":83,"./model":86,"./on":90,"./ref":91,"./show":92,"./text":93}],85:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el

    this.getValue = function () {
      return el.hasOwnProperty('_value')
        ? el._value
        : self.params.number
          ? _.toNumber(el.value)
          : el.value
    }

    function getBooleanValue () {
      var val = el.checked
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue
      }
      return val
    }

    this.listener = function () {
      var model = self._watcher.value
      if (_.isArray(model)) {
        var val = self.getValue()
        if (el.checked) {
          if (_.indexOf(model, val) < 0) {
            model.push(val)
          }
        } else {
          model.$remove(val)
        }
      } else {
        self.set(getBooleanValue())
      }
    }

    this.on('change', this.listener)
    if (el.checked) {
      this.afterBind = this.listener
    }
  },

  update: function (value) {
    var el = this.el
    if (_.isArray(value)) {
      el.checked = _.indexOf(value, this.getValue()) > -1
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = _.looseEqual(value, el._trueValue)
      } else {
        el.checked = !!value
      }
    }
  }
}

},{"../../../util":118}],86:[function(require,module,exports){
(function (process){
var _ = require('../../../util')

var handlers = {
  text: require('./text'),
  radio: require('./radio'),
  select: require('./select'),
  checkbox: require('./checkbox')
}

module.exports = {

  priority: 800,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function () {
    // friendly warning...
    this.checkFilters()
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'It seems you are using a read-only filter with ' +
        'v-model. You might want to use a two-way filter ' +
        'to ensure correct behavior.'
      )
    }
    var el = this.el
    var tag = el.tagName
    var handler
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text
    } else if (tag === 'SELECT') {
      handler = handlers.select
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'v-model does not support element type: ' + tag
      )
      return
    }
    el.__v_model = this
    handler.bind.call(this)
    this.update = handler.update
    this._unbind = handler.unbind
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function () {
    var filters = this.filters
    if (!filters) return
    var i = filters.length
    while (i--) {
      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true
      }
      if (filter.write) {
        this.hasWrite = true
      }
    }
  },

  unbind: function () {
    this.el.__v_model = null
    this._unbind && this._unbind()
  }
}

}).call(this,require('_process'))

},{"../../../util":118,"./checkbox":85,"./radio":87,"./select":88,"./text":89,"_process":43}],87:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value
      }
      var val = el.value
      if (self.params.number) {
        val = _.toNumber(val)
      }
      return val
    }

    this.listener = function () {
      self.set(self.getValue())
    }
    this.on('change', this.listener)

    if (el.checked) {
      this.afterBind = this.listener
    }
  },

  update: function (value) {
    this.el.checked = _.looseEqual(value, this.getValue())
  }
}

},{"../../../util":118}],88:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get())
      }
    }

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple')

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple)
      value = self.params.number
        ? _.isArray(value)
          ? value.map(_.toNumber)
          : _.toNumber(value)
        : value
      self.set(value)
    }
    this.on('change', this.listener)

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true)
    if ((multiple && initValue.length) ||
        (!multiple && initValue !== null)) {
      this.afterBind = this.listener
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', this.forceUpdate)
  },

  update: function (value) {
    var el = this.el
    el.selectedIndex = -1
    var multi = this.multiple && _.isArray(value)
    var options = el.options
    var i = options.length
    var op, val
    while (i--) {
      op = options[i]
      val = op.hasOwnProperty('_value')
        ? op._value
        : op.value
      /* eslint-disable eqeqeq */
      op.selected = multi
        ? indexOf(value, val) > -1
        : _.looseEqual(value, val)
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function () {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate)
  }
}

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue (el, multi, init) {
  var res = multi ? [] : null
  var op, val, selected
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i]
    selected = init
      ? op.hasAttribute('selected')
      : op.selected
    if (selected) {
      val = op.hasOwnProperty('_value')
        ? op._value
        : op.value
      if (multi) {
        res.push(val)
      } else {
        return val
      }
    }
  }
  return res
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf (arr, val) {
  var i = arr.length
  while (i--) {
    if (_.looseEqual(arr[i], val)) {
      return i
    }
  }
  return -1
}

},{"../../../util":118}],89:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el
    var isRange = el.type === 'range'
    var lazy = this.params.lazy
    var number = this.params.number
    var debounce = this.params.debounce

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false
    if (!_.isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true
      })
      this.on('compositionend', function () {
        composing = false
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener()
        }
      })
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false
    if (!isRange) {
      this.on('focus', function () {
        self.focused = true
      })
      this.on('blur', function () {
        self.focused = false
        self.listener()
      })
    }

    // Now attach the main listener
    this.listener = function () {
      if (composing) return
      var val = number || isRange
        ? _.toNumber(el.value)
        : el.value
      self.set(val)
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      _.nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value)
        }
      })
    }

    // apply debounce
    if (debounce) {
      this.listener = _.debounce(this.listener, debounce)
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function'
    if (this.hasjQuery) {
      jQuery(el).on('change', this.listener)
      if (!lazy) {
        jQuery(el).on('input', this.listener)
      }
    } else {
      this.on('change', this.listener)
      if (!lazy) {
        this.on('input', this.listener)
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && _.isIE9) {
      this.on('cut', function () {
        _.nextTick(self.listener)
      })
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener()
        }
      })
    }

    // set initial value if present
    if (
      el.hasAttribute('value') ||
      (el.tagName === 'TEXTAREA' && el.value.trim())
    ) {
      this.afterBind = this.listener
    }
  },

  update: function (value) {
    this.el.value = _.toString(value)
  },

  unbind: function () {
    var el = this.el
    if (this.hasjQuery) {
      jQuery(el).off('change', this.listener)
      jQuery(el).off('input', this.listener)
    }
  }
}

},{"../../../util":118}],90:[function(require,module,exports){
(function (process){
var _ = require('../../util')

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': 46,
  up: 38,
  left: 37,
  right: 39,
  down: 40
}

function keyFilter (handler, keys) {
  var codes = keys.map(function (key) {
    var code = keyCodes[key]
    if (!code) {
      code = parseInt(key, 10)
    }
    return code
  })
  return function keyHandler (e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e)
    }
  }
}

function stopFilter (handler) {
  return function stopHandler (e) {
    e.stopPropagation()
    return handler.call(this, e)
  }
}

function preventFilter (handler) {
  return function preventHandler (e) {
    e.preventDefault()
    return handler.call(this, e)
  }
}

module.exports = {

  acceptStatement: true,
  priority: 700,

  bind: function () {
    // deal with iframes
    if (
      this.el.tagName === 'IFRAME' &&
      this.arg !== 'load'
    ) {
      var self = this
      this.iframeBind = function () {
        _.on(self.el.contentWindow, self.arg, self.handler)
      }
      this.on('load', this.iframeBind)
    }
  },

  update: function (handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {}
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && _.warn(
        'v-on:' + this.arg + '="' +
        this.expression + '" expects a function value, ' +
        'got ' + handler
      )
      return
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler)
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler)
    }
    // key filter
    var keys = Object.keys(this.modifiers)
      .filter(function (key) {
        return key !== 'stop' && key !== 'prevent'
      })
    if (keys.length) {
      handler = keyFilter(handler, keys)
    }

    this.reset()
    var scope = this._scope || this.vm
    this.handler = function (e) {
      scope.$event = e
      var res = handler(e)
      scope.$event = null
      return res
    }
    if (this.iframeBind) {
      this.iframeBind()
    } else {
      _.on(this.el, this.arg, this.handler)
    }
  },

  reset: function () {
    var el = this.iframeBind
      ? this.el.contentWindow
      : this.el
    if (this.handler) {
      _.off(el, this.arg, this.handler)
    }
  },

  unbind: function () {
    this.reset()
  }
}

}).call(this,require('_process'))

},{"../../util":118,"_process":43}],91:[function(require,module,exports){
(function (process){
if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    bind: function () {
      require('../../util').warn(
        'v-ref:' + this.arg + ' must be used on a child ' +
        'component. Found on <' + this.el.tagName.toLowerCase() + '>.'
      )
    }
  }
}

}).call(this,require('_process'))

},{"../../util":118,"_process":43}],92:[function(require,module,exports){
var _ = require('../../util')
var transition = require('../../transition')

module.exports = {

  bind: function () {
    // check else block
    var next = this.el.nextElementSibling
    if (next && _.attr(next, 'v-else') !== null) {
      this.elseEl = next
    }
  },

  update: function (value) {
    this.apply(this.el, value)
    if (this.elseEl) {
      this.apply(this.elseEl, !value)
    }
  },

  apply: function (el, value) {
    function done () {
      el.style.display = value ? '' : 'none'
    }
    // do not apply transition if not in doc
    if (_.inDoc(el)) {
      transition.apply(el, value ? 1 : -1, done, this.vm)
    } else {
      done()
    }
  }
}

},{"../../transition":111,"../../util":118}],93:[function(require,module,exports){
var _ = require('../../util')

module.exports = {

  bind: function () {
    this.attr = this.el.nodeType === 3
      ? 'data'
      : 'textContent'
  },

  update: function (value) {
    this.el[this.attr] = _.toString(value)
  }
}

},{"../../util":118}],94:[function(require,module,exports){
var _ = require('../util')
var Path = require('../parsers/path')
var toArray = require('../directives/public/for')._postProcess

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

exports.limitBy = function (arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0
  return typeof n === 'number'
    ? arr.slice(offset, offset + n)
    : arr
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

exports.filterBy = function (arr, search, delimiter) {
  arr = toArray(arr)
  if (search == null) {
    return arr
  }
  if (typeof search === 'function') {
    return arr.filter(search)
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase()
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2
  // extract and flatten keys
  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
    return prev.concat(cur)
  }, [])
  var res = []
  var item, key, val, j
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i]
    val = (item && item.$value) || item
    j = keys.length
    if (j) {
      while (j--) {
        key = keys[j]
        if ((key === '$key' && contains(item.$key, search)) ||
            contains(Path.get(val, key), search)) {
          res.push(item)
          break
        }
      }
    } else if (contains(item, search)) {
      res.push(item)
    }
  }
  return res
}

/**
 * Filter filter for arrays
 *
 * @param {String} sortKey
 * @param {String} reverse
 */

exports.orderBy = function (arr, sortKey, reverse) {
  arr = toArray(arr)
  if (!sortKey) {
    return arr
  }
  var order = (reverse && reverse < 0) ? -1 : 1
  // sort on a copy to avoid mutating original array
  return arr.slice().sort(function (a, b) {
    if (sortKey !== '$key') {
      if (_.isObject(a) && '$value' in a) a = a.$value
      if (_.isObject(b) && '$value' in b) b = b.$value
    }
    a = _.isObject(a) ? Path.get(a, sortKey) : a
    b = _.isObject(b) ? Path.get(b, sortKey) : b
    return a === b ? 0 : a > b ? order : -order
  })
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains (val, search) {
  var i
  if (_.isPlainObject(val)) {
    var keys = Object.keys(val)
    i = keys.length
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true
      }
    }
  } else if (_.isArray(val)) {
    i = val.length
    while (i--) {
      if (contains(val[i], search)) {
        return true
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1
  }
}

},{"../directives/public/for":81,"../parsers/path":108,"../util":118}],95:[function(require,module,exports){
var _ = require('../util')

/**
 * Stringify value.
 *
 * @param {Number} indent
 */

exports.json = {
  read: function (value, indent) {
    return typeof value === 'string'
      ? value
      : JSON.stringify(value, null, Number(indent) || 2)
  },
  write: function (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
}

/**
 * 'abc' => 'Abc'
 */

exports.capitalize = function (value) {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * 'abc' => 'ABC'
 */

exports.uppercase = function (value) {
  return (value || value === 0)
    ? value.toString().toUpperCase()
    : ''
}

/**
 * 'AbC' => 'abc'
 */

exports.lowercase = function (value) {
  return (value || value === 0)
    ? value.toString().toLowerCase()
    : ''
}

/**
 * 12345 => $12,345.00
 *
 * @param {String} sign
 */

var digitsRE = /(\d{3})(?=\d)/g
exports.currency = function (value, currency) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  var stringified = Math.abs(value).toFixed(2)
  var _int = stringified.slice(0, -3)
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = stringified.slice(-3)
  var sign = value < 0 ? '-' : ''
  return currency + sign + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

/**
 * 'item' => 'items'
 *
 * @params
 *  an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */

exports.pluralize = function (value) {
  var args = _.toArray(arguments, 1)
  return args.length > 1
    ? (args[value % 10 - 1] || args[args.length - 1])
    : (args[0] + (value === 1 ? '' : 's'))
}

/**
 * Debounce a handler function.
 *
 * @param {Function} handler
 * @param {Number} delay = 300
 * @return {Function}
 */

exports.debounce = function (handler, delay) {
  if (!handler) return
  if (!delay) {
    delay = 300
  }
  return _.debounce(handler, delay)
}

/**
 * Install special array filters
 */

_.extend(exports, require('./array-filters'))

},{"../util":118,"./array-filters":94}],96:[function(require,module,exports){
var _ = require('../util')
var compiler = require('../compiler')
var templateParser = require('../parsers/template')
var Fragment = require('./fragment')
var Cache = require('../cache')
var linkerCache = new Cache(5000)

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */

function FragmentFactory (vm, el) {
  this.vm = vm
  var template
  var isString = typeof el === 'string'
  if (isString || _.isTemplate(el)) {
    template = templateParser.parse(el, true)
  } else {
    template = document.createDocumentFragment()
    template.appendChild(el)
  }
  this.template = template
  // linker can be cached, but only for components
  var linker
  var cid = vm.constructor.cid
  if (cid > 0) {
    var cacheId = cid + (isString ? el : el.outerHTML)
    linker = linkerCache.get(cacheId)
    if (!linker) {
      linker = compiler.compile(template, vm.$options, true)
      linkerCache.put(cacheId, linker)
    }
  } else {
    linker = compiler.compile(template, vm.$options, true)
  }
  this.linker = linker
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = templateParser.clone(this.template)
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag)
}

module.exports = FragmentFactory

},{"../cache":62,"../compiler":65,"../parsers/template":109,"../util":118,"./fragment":97}],97:[function(require,module,exports){
var _ = require('../util')
var transition = require('../transition')

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 */

function Fragment (linker, vm, frag, host, scope, parentFrag) {
  this.children = []
  this.childFrags = []
  this.vm = vm
  this.scope = scope
  this.inserted = false
  this.parentFrag = parentFrag
  if (parentFrag) {
    parentFrag.childFrags.push(this)
  }
  this.unlink = linker(vm, frag, host, scope, this)
  var single = this.single = frag.childNodes.length === 1
  if (single) {
    this.node = frag.childNodes[0]
    this.before = singleBefore
    this.remove = singleRemove
  } else {
    this.node = _.createAnchor('fragment-start')
    this.end = _.createAnchor('fragment-end')
    this.frag = frag
    _.prepend(this.node, frag)
    frag.appendChild(this.end)
    this.before = multiBefore
    this.remove = multiRemove
  }
  this.node.__vfrag__ = this
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i])
  }
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook)
  }
}

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this)
  }
  this.unlink()
}

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore (target, withTransition) {
  this.inserted = true
  var method = withTransition !== false
    ? transition.before
    : _.before
  method(this.node, target, this.vm)
  if (_.inDoc(this.node)) {
    this.callHook(attach)
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove () {
  this.inserted = false
  var shouldCallRemove = _.inDoc(this.node)
  var self = this
  self.callHook(destroyChild)
  transition.remove(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach)
    }
    self.destroy()
  })
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore (target, withTransition) {
  this.inserted = true
  var vm = this.vm
  var method = withTransition !== false
    ? transition.before
    : _.before
  _.mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm)
  })
  if (_.inDoc(this.node)) {
    this.callHook(attach)
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove () {
  this.inserted = false
  var self = this
  var shouldCallRemove = _.inDoc(this.node)
  self.callHook(destroyChild)
  _.removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach)
    }
    self.destroy()
  })
}

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach (child) {
  if (!child._isAttached) {
    child._callHook('attached')
  }
}

/**
 * Call destroy for all contained instances,
 * with remove:false and defer:true.
 * Defer is necessary because we need to
 * keep the children to call detach hooks
 * on them.
 *
 * @param {Vue} child
 */

function destroyChild (child) {
  child.$destroy(false, true)
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach (child) {
  if (child._isAttached) {
    child._callHook('detached')
  }
}

module.exports = Fragment

},{"../transition":111,"../util":118}],98:[function(require,module,exports){
(function (process){
var _ = require('../util')
var inDoc = _.inDoc
var eventRE = /^v-on:|^@/

/**
 * Setup the instance's option events & watchers.
 * If the value is a string, we pull it from the
 * instance's methods by name.
 */

exports._initEvents = function () {
  var options = this.$options
  if (options._asComponent) {
    registerComponentEvents(this, options.el)
  }
  registerCallbacks(this, '$on', options.events)
  registerCallbacks(this, '$watch', options.watch)
}

/**
 * Register v-on events on a child component
 *
 * @param {Vue} vm
 * @param {Element} el
 */

function registerComponentEvents (vm, el) {
  var attrs = el.attributes
  var name, handler
  for (var i = 0, l = attrs.length; i < l; i++) {
    name = attrs[i].name
    if (eventRE.test(name)) {
      name = name.replace(eventRE, '')
      handler = (vm._scope || vm._context).$eval(attrs[i].value, true)
      vm.$on(name.replace(eventRE), handler)
    }
  }
}

/**
 * Register callbacks for option events and watchers.
 *
 * @param {Vue} vm
 * @param {String} action
 * @param {Object} hash
 */

function registerCallbacks (vm, action, hash) {
  if (!hash) return
  var handlers, key, i, j
  for (key in hash) {
    handlers = hash[key]
    if (_.isArray(handlers)) {
      for (i = 0, j = handlers.length; i < j; i++) {
        register(vm, action, key, handlers[i])
      }
    } else {
      register(vm, action, key, handlers)
    }
  }
}

/**
 * Helper to register an event/watch callback.
 *
 * @param {Vue} vm
 * @param {String} action
 * @param {String} key
 * @param {Function|String|Object} handler
 * @param {Object} [options]
 */

function register (vm, action, key, handler, options) {
  var type = typeof handler
  if (type === 'function') {
    vm[action](key, handler, options)
  } else if (type === 'string') {
    var methods = vm.$options.methods
    var method = methods && methods[handler]
    if (method) {
      vm[action](key, method, options)
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Unknown method: "' + handler + '" when ' +
        'registering callback for ' + action +
        ': "' + key + '".'
      )
    }
  } else if (handler && type === 'object') {
    register(vm, action, key, handler.handler, handler)
  }
}

/**
 * Setup recursive attached/detached calls
 */

exports._initDOMHooks = function () {
  this.$on('hook:attached', onAttached)
  this.$on('hook:detached', onDetached)
}

/**
 * Callback to recursively call attached hook on children
 */

function onAttached () {
  if (!this._isAttached) {
    this._isAttached = true
    this.$children.forEach(callAttach)
  }
}

/**
 * Iterator to call attached hook
 *
 * @param {Vue} child
 */

function callAttach (child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached')
  }
}

/**
 * Callback to recursively call detached hook on children
 */

function onDetached () {
  if (this._isAttached) {
    this._isAttached = false
    this.$children.forEach(callDetach)
  }
}

/**
 * Iterator to call detached hook
 *
 * @param {Vue} child
 */

function callDetach (child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached')
  }
}

/**
 * Trigger all handlers for a hook
 *
 * @param {String} hook
 */

exports._callHook = function (hook) {
  var handlers = this.$options[hook]
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(this)
    }
  }
  this.$emit('hook:' + hook)
}

}).call(this,require('_process'))

},{"../util":118,"_process":43}],99:[function(require,module,exports){
var mergeOptions = require('../util').mergeOptions
var uid = 0

/**
 * The main init sequence. This is called for every
 * instance, including ones that are created from extended
 * constructors.
 *
 * @param {Object} options - this options object should be
 *                           the result of merging class
 *                           options and the options passed
 *                           in to the constructor.
 */

exports._init = function (options) {

  options = options || {}

  this.$el = null
  this.$parent = options.parent
  this.$root = this.$parent
    ? this.$parent.$root
    : this
  this.$children = []
  this.$refs = {}       // child vm references
  this.$els = {}        // element references
  this._watchers = []   // all watchers as an array
  this._directives = [] // all directives

  // a uid
  this._uid = uid++

  // a flag to avoid this being observed
  this._isVue = true

  // events bookkeeping
  this._events = {}            // registered callbacks
  this._eventsCount = {}       // for $broadcast optimization
  this._shouldPropagate = false // for event propagation

  // fragment instance properties
  this._isFragment = false
  this._fragment =         // @type {DocumentFragment}
  this._fragmentStart =    // @type {Text|Comment}
  this._fragmentEnd = null // @type {Text|Comment}

  // lifecycle state
  this._isCompiled =
  this._isDestroyed =
  this._isReady =
  this._isAttached =
  this._isBeingDestroyed = false
  this._unlinkFn = null

  // context:
  // if this is a transcluded component, context
  // will be the common parent vm of this instance
  // and its host.
  this._context = options._context || this.$parent

  // scope:
  // if this is inside an inline v-for, the scope
  // will be the intermediate scope created for this
  // repeat fragment. this is used for linking props
  // and container directives.
  this._scope = options._scope

  // fragment:
  // if this instance is compiled inside a Fragment, it
  // needs to reigster itself as a child of that fragment
  // for attach/detach to work properly.
  this._frag = options._frag
  if (this._frag) {
    this._frag.children.push(this)
  }

  // push self into parent / transclusion host
  if (this.$parent) {
    this.$parent.$children.push(this)
  }

  // merge options.
  options = this.$options = mergeOptions(
    this.constructor.options,
    options,
    this
  )

  // set ref
  this._updateRef()

  // initialize data as empty object.
  // it will be filled up in _initScope().
  this._data = {}

  // call init hook
  this._callHook('init')

  // initialize data observation and scope inheritance.
  this._initState()

  // setup event system and option events.
  this._initEvents()

  // call created hook
  this._callHook('created')

  // if `el` option is passed, start compilation.
  if (options.el) {
    this.$mount(options.el)
  }
}

},{"../util":118}],100:[function(require,module,exports){
var _ = require('../util')
var Directive = require('../directive')
var compiler = require('../compiler')

/**
 * Update v-ref for component.
 *
 * @param {Boolean} remove
 */

exports._updateRef = function (remove) {
  var ref = this.$options._ref
  if (ref) {
    var refs = (this._scope || this._context).$refs
    if (remove) {
      if (refs[ref] === this) {
        refs[ref] = null
      }
    } else {
      refs[ref] = this
    }
  }
}

/**
 * Transclude, compile and link element.
 *
 * If a pre-compiled linker is available, that means the
 * passed in element will be pre-transcluded and compiled
 * as well - all we need to do is to call the linker.
 *
 * Otherwise we need to call transclude/compile/link here.
 *
 * @param {Element} el
 * @return {Element}
 */

exports._compile = function (el) {
  var options = this.$options

  // transclude and init element
  // transclude can potentially replace original
  // so we need to keep reference; this step also injects
  // the template and caches the original attributes
  // on the container node and replacer node.
  var original = el
  el = compiler.transclude(el, options)
  this._initElement(el)

  // root is always compiled per-instance, because
  // container attrs and props can be different every time.
  var contextOptions = this._context && this._context.$options
  var rootLinker = compiler.compileRoot(el, options, contextOptions)

  // compile and link the rest
  var contentLinkFn
  var ctor = this.constructor
  // component compilation can be cached
  // as long as it's not using inline-template
  if (options._linkerCachable) {
    contentLinkFn = ctor.linker
    if (!contentLinkFn) {
      contentLinkFn = ctor.linker = compiler.compile(el, options)
    }
  }

  // link phase
  // make sure to link root with prop scope!
  var rootUnlinkFn = rootLinker(this, el, this._scope)
  var contentUnlinkFn = contentLinkFn
    ? contentLinkFn(this, el)
    : compiler.compile(el, options)(this, el)

  // register composite unlink function
  // to be called during instance destruction
  this._unlinkFn = function () {
    rootUnlinkFn()
    // passing destroying: true to avoid searching and
    // splicing the directives
    contentUnlinkFn(true)
  }

  // finally replace original
  if (options.replace) {
    _.replace(original, el)
  }

  this._isCompiled = true
  this._callHook('compiled')
  return el
}

/**
 * Initialize instance element. Called in the public
 * $mount() method.
 *
 * @param {Element} el
 */

exports._initElement = function (el) {
  if (el instanceof DocumentFragment) {
    this._isFragment = true
    this.$el = this._fragmentStart = el.firstChild
    this._fragmentEnd = el.lastChild
    // set persisted text anchors to empty
    if (this._fragmentStart.nodeType === 3) {
      this._fragmentStart.data = this._fragmentEnd.data = ''
    }
    this._fragment = el
  } else {
    this.$el = el
  }
  this.$el.__vue__ = this
  this._callHook('beforeCompile')
}

/**
 * Create and bind a directive to an element.
 *
 * @param {String} name - directive name
 * @param {Node} node   - target node
 * @param {Object} desc - parsed directive descriptor
 * @param {Object} def  - directive definition object
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 */

exports._bindDir = function (descriptor, node, host, scope, frag) {
  this._directives.push(
    new Directive(descriptor, this, node, host, scope, frag)
  )
}

/**
 * Teardown an instance, unobserves the data, unbind all the
 * directives, turn off all the event listeners, etc.
 *
 * @param {Boolean} remove - whether to remove the DOM node.
 * @param {Boolean} deferCleanup - if true, defer cleanup to
 *                                 be called later
 */

exports._destroy = function (remove, deferCleanup) {
  if (this._isBeingDestroyed) {
    if (!deferCleanup) {
      this._cleanup()
    }
    return
  }
  this._callHook('beforeDestroy')
  this._isBeingDestroyed = true
  var i
  // remove self from parent. only necessary
  // if parent is not being destroyed as well.
  var parent = this.$parent
  if (parent && !parent._isBeingDestroyed) {
    parent.$children.$remove(this)
    // unregister ref (remove: true)
    this._updateRef(true)
  }
  // destroy all children.
  i = this.$children.length
  while (i--) {
    this.$children[i].$destroy()
  }
  // teardown props
  if (this._propsUnlinkFn) {
    this._propsUnlinkFn()
  }
  // teardown all directives. this also tearsdown all
  // directive-owned watchers.
  if (this._unlinkFn) {
    this._unlinkFn()
  }
  i = this._watchers.length
  while (i--) {
    this._watchers[i].teardown()
  }
  // remove reference to self on $el
  if (this.$el) {
    this.$el.__vue__ = null
  }
  // remove DOM element
  var self = this
  if (remove && this.$el) {
    this.$remove(function () {
      self._cleanup()
    })
  } else if (!deferCleanup) {
    this._cleanup()
  }
}

/**
 * Clean up to ensure garbage collection.
 * This is called after the leave transition if there
 * is any.
 */

exports._cleanup = function () {
  if (this._isDestroyed) {
    return
  }
  // remove self from owner fragment
  // do it in cleanup so that we can call $destroy with
  // defer right when a fragment is about to be removed.
  if (this._frag) {
    this._frag.children.$remove(this)
  }
  // remove reference from data ob
  // frozen object may not have observer.
  if (this._data.__ob__) {
    this._data.__ob__.removeVm(this)
  }
  // Clean up references to private properties and other
  // instances. preserve reference to _data so that proxy
  // accessors still work. The only potential side effect
  // here is that mutating the instance after it's destroyed
  // may affect the state of other components that are still
  // observing the same object, but that seems to be a
  // reasonable responsibility for the user rather than
  // always throwing an error on them.
  this.$el =
  this.$parent =
  this.$root =
  this.$children =
  this._watchers =
  this._context =
  this._scope =
  this._directives = null
  // call the last hook...
  this._isDestroyed = true
  this._callHook('destroyed')
  // turn off all instance listeners.
  this.$off()
}

},{"../compiler":65,"../directive":68,"../util":118}],101:[function(require,module,exports){
(function (process){
var _ = require('../util')

/**
 * Apply a list of filter (descriptors) to a value.
 * Using plain for loops here because this will be called in
 * the getter of any watcher with filters so it is very
 * performance sensitive.
 *
 * @param {*} value
 * @param {*} [oldValue]
 * @param {Array} filters
 * @param {Boolean} write
 * @return {*}
 */

exports._applyFilters = function (value, oldValue, filters, write) {
  var filter, fn, args, arg, offset, i, l, j, k
  for (i = 0, l = filters.length; i < l; i++) {
    filter = filters[i]
    fn = _.resolveAsset(this.$options, 'filters', filter.name)
    if (process.env.NODE_ENV !== 'production') {
      _.assertAsset(fn, 'filter', filter.name)
    }
    if (!fn) continue
    fn = write ? fn.write : (fn.read || fn)
    if (typeof fn !== 'function') continue
    args = write ? [value, oldValue] : [value]
    offset = write ? 2 : 1
    if (filter.args) {
      for (j = 0, k = filter.args.length; j < k; j++) {
        arg = filter.args[j]
        args[j + offset] = arg.dynamic
          ? this.$get(arg.value)
          : arg.value
      }
    }
    value = fn.apply(this, args)
  }
  return value
}

/**
 * Resolve a component, depending on whether the component
 * is defined normally or using an async factory function.
 * Resolves synchronously if already resolved, otherwise
 * resolves asynchronously and caches the resolved
 * constructor on the factory.
 *
 * @param {String} id
 * @param {Function} cb
 */

exports._resolveComponent = function (id, cb) {
  var factory = _.resolveAsset(this.$options, 'components', id)
  if (process.env.NODE_ENV !== 'production') {
    _.assertAsset(factory, 'component', id)
  }
  if (!factory) {
    return
  }
  // async component factory
  if (!factory.options) {
    if (factory.resolved) {
      // cached
      cb(factory.resolved)
    } else if (factory.requested) {
      // pool callbacks
      factory.pendingCallbacks.push(cb)
    } else {
      factory.requested = true
      var cbs = factory.pendingCallbacks = [cb]
      factory(function resolve (res) {
        if (_.isPlainObject(res)) {
          res = _.Vue.extend(res)
        }
        // cache resolved
        factory.resolved = res
        // invoke callbacks
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res)
        }
      }, function reject (reason) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'Failed to resolve async component: ' + id + '. ' +
          (reason ? '\nReason: ' + reason : '')
        )
      })
    }
  } else {
    // normal component
    cb(factory)
  }
}

}).call(this,require('_process'))

},{"../util":118,"_process":43}],102:[function(require,module,exports){
(function (process){
var _ = require('../util')
var compiler = require('../compiler')
var Observer = require('../observer')
var Dep = require('../observer/dep')
var Watcher = require('../watcher')

/**
 * Setup the scope of an instance, which contains:
 * - observed data
 * - computed properties
 * - user methods
 * - meta properties
 */

exports._initState = function () {
  this._initProps()
  this._initMeta()
  this._initMethods()
  this._initData()
  this._initComputed()
}

/**
 * Initialize props.
 */

exports._initProps = function () {
  var options = this.$options
  var el = options.el
  var props = options.props
  if (props && !el) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Props will not be compiled if no `el` option is ' +
      'provided at instantiation.'
    )
  }
  // make sure to convert string selectors into element now
  el = options.el = _.query(el)
  this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compiler.compileAndLinkProps(this, el, props, this._scope)
    : null
}

/**
 * Initialize the data.
 */

exports._initData = function () {
  var propsData = this._data
  var optionsDataFn = this.$options.data
  var optionsData = optionsDataFn && optionsDataFn()
  if (optionsData) {
    this._data = optionsData
    for (var prop in propsData) {
      if (process.env.NODE_ENV !== 'production' &&
          optionsData.hasOwnProperty(prop)) {
        _.warn(
          'Data field "' + prop + '" is already defined ' +
          'as a prop. Use prop default value instead.'
        )
      }
      if (this._props[prop].raw !== null ||
          !optionsData.hasOwnProperty(prop)) {
        _.set(optionsData, prop, propsData[prop])
      }
    }
  }
  var data = this._data
  // proxy data on instance
  var keys = Object.keys(data)
  var i, key
  i = keys.length
  while (i--) {
    key = keys[i]
    this._proxy(key)
  }
  // observe data
  Observer.create(data, this)
}

/**
 * Swap the isntance's $data. Called in $data's setter.
 *
 * @param {Object} newData
 */

exports._setData = function (newData) {
  newData = newData || {}
  var oldData = this._data
  this._data = newData
  var keys, key, i
  // unproxy keys not present in new data
  keys = Object.keys(oldData)
  i = keys.length
  while (i--) {
    key = keys[i]
    if (!(key in newData)) {
      this._unproxy(key)
    }
  }
  // proxy keys not already proxied,
  // and trigger change for changed values
  keys = Object.keys(newData)
  i = keys.length
  while (i--) {
    key = keys[i]
    if (!this.hasOwnProperty(key)) {
      // new property
      this._proxy(key)
    }
  }
  oldData.__ob__.removeVm(this)
  Observer.create(newData, this)
  this._digest()
}

/**
 * Proxy a property, so that
 * vm.prop === vm._data.prop
 *
 * @param {String} key
 */

exports._proxy = function (key) {
  if (!_.isReserved(key)) {
    // need to store ref to self here
    // because these getter/setters might
    // be called by child scopes via
    // prototype inheritance.
    var self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return self._data[key]
      },
      set: function proxySetter (val) {
        self._data[key] = val
      }
    })
  }
}

/**
 * Unproxy a property.
 *
 * @param {String} key
 */

exports._unproxy = function (key) {
  if (!_.isReserved(key)) {
    delete this[key]
  }
}

/**
 * Force update on every watcher in scope.
 */

exports._digest = function () {
  for (var i = 0, l = this._watchers.length; i < l; i++) {
    this._watchers[i].update(true) // shallow updates
  }
}

/**
 * Setup computed properties. They are essentially
 * special getter/setters
 */

function noop () {}
exports._initComputed = function () {
  var computed = this.$options.computed
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key]
      var def = {
        enumerable: true,
        configurable: true
      }
      if (typeof userDef === 'function') {
        def.get = makeComputedGetter(userDef, this)
        def.set = noop
      } else {
        def.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, this)
            : _.bind(userDef.get, this)
          : noop
        def.set = userDef.set
          ? _.bind(userDef.set, this)
          : noop
      }
      Object.defineProperty(this, key, def)
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, null, {
    lazy: true
  })
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate()
    }
    if (Dep.target) {
      watcher.depend()
    }
    return watcher.value
  }
}

/**
 * Setup instance methods. Methods must be bound to the
 * instance since they might be passed down as a prop to
 * child components.
 */

exports._initMethods = function () {
  var methods = this.$options.methods
  if (methods) {
    for (var key in methods) {
      this[key] = _.bind(methods[key], this)
    }
  }
}

/**
 * Initialize meta information like $index, $key & $value.
 */

exports._initMeta = function () {
  var metas = this.$options._meta
  if (metas) {
    for (var key in metas) {
      _.defineReactive(this, key, metas[key])
    }
  }
}

}).call(this,require('_process'))

},{"../compiler":65,"../observer":105,"../observer/dep":104,"../util":118,"../watcher":122,"_process":43}],103:[function(require,module,exports){
var _ = require('../util')
var arrayProto = Array.prototype
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method]
  _.define(arrayMethods, method, function mutator () {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length
    var args = new Array(i)
    while (i--) {
      args[i] = arguments[i]
    }
    var result = original.apply(this, args)
    var ob = this.__ob__
    var inserted
    switch (method) {
      case 'push':
        inserted = args
        break
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

_.define(
  arrayProto,
  '$set',
  function $set (index, val) {
    if (index >= this.length) {
      this.length = index + 1
    }
    return this.splice(index, 1, val)[0]
  }
)

/**
 * Convenience method to remove the element at given index.
 *
 * @param {Number} index
 * @param {*} val
 */

_.define(
  arrayProto,
  '$remove',
  function $remove (item) {
    /* istanbul ignore if */
    if (!this.length) return
    var index = _.indexOf(this, item)
    if (index > -1) {
      return this.splice(index, 1)
    }
  }
)

module.exports = arrayMethods

},{"../util":118}],104:[function(require,module,exports){
var _ = require('../util')
var uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */

function Dep () {
  this.id = uid++
  this.subs = []
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub)
}

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this)
}

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = _.toArray(this.subs)
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
}

module.exports = Dep

},{"../util":118}],105:[function(require,module,exports){
var _ = require('../util')
var Dep = require('./dep')
var arrayMethods = require('./array')
var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer (value) {
  this.value = value
  this.dep = new Dep()
  _.define(value, '__ob__', this)
  if (_.isArray(value)) {
    var augment = _.hasProto
      ? protoAugment
      : copyAugment
    augment(value, arrayMethods, arrayKeys)
    this.observeArray(value)
  } else {
    this.walk(value)
  }
}

// Static methods

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

Observer.create = function (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  var ob
  if (
    value.hasOwnProperty('__ob__') &&
    value.__ob__ instanceof Observer
  ) {
    ob = value.__ob__
  } else if (
    (_.isArray(value) || _.isPlainObject(value)) &&
    !Object.isFrozen(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  if (ob && vm) {
    ob.addVm(vm)
  }
  return ob
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj)
  var i = keys.length
  while (i--) {
    this.convert(keys[i], obj[keys[i]])
  }
}

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  var i = items.length
  while (i--) {
    Observer.create(items[i])
  }
}

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val)
}

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm)
}

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm)
}

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function protoAugment (target, src) {
  target.__proto__ = src
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment (target, src, keys) {
  var i = keys.length
  var key
  while (i--) {
    key = keys[i]
    _.define(target, key, src[key])
  }
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive (obj, key, val) {
  var dep = new Dep()
  var childOb = Observer.create(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function metaGetter () {
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
        if (_.isArray(val)) {
          for (var e, i = 0, l = val.length; i < l; i++) {
            e = val[i]
            e && e.__ob__ && e.__ob__.dep.depend()
          }
        }
      }
      return val
    },
    set: function metaSetter (newVal) {
      if (newVal === val) return
      val = newVal
      childOb = Observer.create(newVal)
      dep.notify()
    }
  })
}

// Attach to the util object so it can be used elsewhere.
_.defineReactive = defineReactive

module.exports = Observer

},{"../util":118,"./array":103,"./dep":104}],106:[function(require,module,exports){
var _ = require('../util')
var Cache = require('../cache')
var cache = new Cache(1000)
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
var reservedArgRE = /^in$|^-?\d+/

/**
 * Parser state
 */

var str, dir
var c, i, l, lastFilterIndex
var inSingle, inDouble, curly, square, paren

/**
 * Push a filter to the current directive object
 */

function pushFilter () {
  var exp = str.slice(lastFilterIndex, i).trim()
  var filter
  if (exp) {
    filter = {}
    var tokens = exp.match(filterTokenRE)
    filter.name = tokens[0]
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg)
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter)
  }
  lastFilterIndex = i + 1
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg (arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: _.toNumber(arg),
      dynamic: false
    }
  } else {
    var stripped = _.stripQuotes(arg)
    var dynamic = stripped === arg
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    }
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} str
 * @return {Object}
 */

exports.parse = function (s) {

  var hit = cache.get(s)
  if (hit) {
    return hit
  }

  // reset parser state
  str = s
  inSingle = inDouble = false
  curly = square = paren = 0
  lastFilterIndex = 0
  dir = {}

  for (i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i)
    if (inSingle) {
      // check single quote
      if (c === 0x27) inSingle = !inSingle
    } else if (inDouble) {
      // check double quote
      if (c === 0x22) inDouble = !inDouble
    } else if (
      c === 0x7C && // pipe
      str.charCodeAt(i + 1) !== 0x7C &&
      str.charCodeAt(i - 1) !== 0x7C
    ) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1
        dir.expression = str.slice(0, i).trim()
      } else {
        // already has filter
        pushFilter()
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break // "
        case 0x27: inSingle = true; break // '
        case 0x28: paren++; break         // (
        case 0x29: paren--; break         // )
        case 0x5B: square++; break        // [
        case 0x5D: square--; break        // ]
        case 0x7B: curly++; break         // {
        case 0x7D: curly--; break         // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  cache.put(s, dir)
  return dir
}

},{"../cache":62,"../util":118}],107:[function(require,module,exports){
(function (process){
var _ = require('../util')
var Path = require('./path')
var Cache = require('../cache')
var expressionCache = new Cache(1000)

var allowedKeywords =
  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
  'encodeURIComponent,parseInt,parseFloat'
var allowedKeywordsRE =
  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')

// keywords that don't make sense inside expressions
var improperKeywords =
  'break,case,class,catch,const,continue,debugger,default,' +
  'delete,do,else,export,extends,finally,for,function,if,' +
  'import,in,instanceof,let,return,super,switch,throw,try,' +
  'var,while,with,yield,enum,await,implements,package,' +
  'proctected,static,interface,private,public'
var improperKeywordsRE =
  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')

var wsRE = /\s/g
var newlineRE = /\n/g
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
var restoreRE = /"(\d+)"/g
var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
var booleanLiteralRE = /^(true|false)$/

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = []

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save (str, isString) {
  var i = saved.length
  saved[i] = isString
    ? str.replace(newlineRE, '\\n')
    : str
  return '"' + i + '"'
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite (raw) {
  var c = raw.charAt(0)
  var path = raw.slice(1)
  if (allowedKeywordsRE.test(path)) {
    return raw
  } else {
    path = path.indexOf('"') > -1
      ? path.replace(restoreRE, restore)
      : path
    return c + 'scope.' + path
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore (str, i) {
  return saved[i]
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function compileExpFns (exp, needSet) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Avoid using reserved keywords in expression: ' + exp
    )
  }
  // reset state
  saved.length = 0
  // save strings and object literal keys
  var body = exp
    .replace(saveRE, save)
    .replace(wsRE, '')
  // rewrite all paths
  // pad 1 space here becaue the regex matches 1 extra char
  body = (' ' + body)
    .replace(pathReplaceRE, rewrite)
    .replace(restoreRE, restore)
  var getter = makeGetter(body)
  if (getter) {
    return {
      get: getter,
      body: body,
      set: needSet
        ? makeSetter(body)
        : null
    }
  }
}

/**
 * Compile getter setters for a simple path.
 *
 * @param {String} exp
 * @return {Function}
 */

function compilePathFns (exp) {
  var getter, path
  if (exp.indexOf('[') < 0) {
    // really simple path
    path = exp.split('.')
    path.raw = exp
    getter = Path.compileGetter(path)
  } else {
    // do the real parsing
    path = Path.parse(exp)
    getter = path.get
  }
  return {
    get: getter,
    // always generate setter for simple paths
    set: function (obj, val) {
      Path.set(obj, path, val)
    }
  }
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetter (body) {
  try {
    return new Function('scope', 'return ' + body + ';')
  } catch (e) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid expression. ' +
      'Generated function body: ' + body
    )
  }
}

/**
 * Build a setter function.
 *
 * This is only needed in rare situations like "a[b]" where
 * a settable path requires dynamic evaluation.
 *
 * This setter function may throw error when called if the
 * expression body is not a valid left-hand expression in
 * assignment.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeSetter (body) {
  try {
    return new Function('scope', 'value', body + '=value;')
  } catch (e) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid setter function body: ' + body
    )
  }
}

/**
 * Check for setter existence on a cache hit.
 *
 * @param {Function} hit
 */

function checkSetter (hit) {
  if (!hit.set) {
    hit.set = makeSetter(hit.body)
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

exports.parse = function (exp, needSet) {
  exp = exp.trim()
  // try cache
  var hit = expressionCache.get(exp)
  if (hit) {
    if (needSet) {
      checkSetter(hit)
    }
    return hit
  }
  // we do a simple path check to optimize for them.
  // the check fails valid paths with unusal whitespaces,
  // but that's too rare and we don't care.
  // also skip boolean literals and paths that start with
  // global "Math"
  var res = exports.isSimplePath(exp)
    ? compilePathFns(exp)
    : compileExpFns(exp, needSet)
  expressionCache.put(exp, res)
  return res
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

exports.isSimplePath = function (exp) {
  return pathTestRE.test(exp) &&
    // don't treat true/false as paths
    !booleanLiteralRE.test(exp) &&
    // Math constants e.g. Math.PI, Math.E etc.
    exp.slice(0, 5) !== 'Math.'
}

}).call(this,require('_process'))

},{"../cache":62,"../util":118,"./path":108,"_process":43}],108:[function(require,module,exports){
(function (process){
var _ = require('../util')
var Cache = require('../cache')
var pathCache = new Cache(1000)
var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/

// actions
var APPEND = 0
var PUSH = 1

// states
var BEFORE_PATH = 0
var IN_PATH = 1
var BEFORE_IDENT = 2
var IN_IDENT = 3
var BEFORE_ELEMENT = 4
var AFTER_ZERO = 5
var IN_INDEX = 6
var IN_SINGLE_QUOTE = 7
var IN_DOUBLE_QUOTE = 8
var IN_SUB_PATH = 9
var AFTER_ELEMENT = 10
var AFTER_PATH = 11
var ERROR = 12

var pathStateMachine = []

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [BEFORE_ELEMENT],
  'eof': [AFTER_PATH]
}

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [BEFORE_ELEMENT],
  'eof': [AFTER_PATH]
}

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
}

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [BEFORE_ELEMENT, PUSH],
  'eof': [AFTER_PATH, PUSH]
}

pathStateMachine[BEFORE_ELEMENT] = {
  'ws': [BEFORE_ELEMENT],
  '0': [AFTER_ZERO, APPEND],
  'number': [IN_INDEX, APPEND],
  "'": [IN_SINGLE_QUOTE, APPEND, ''],
  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
  'ident': [IN_SUB_PATH, APPEND, '*']
}

pathStateMachine[AFTER_ZERO] = {
  'ws': [AFTER_ELEMENT, PUSH],
  ']': [IN_PATH, PUSH]
}

pathStateMachine[IN_INDEX] = {
  '0': [IN_INDEX, APPEND],
  'number': [IN_INDEX, APPEND],
  'ws': [AFTER_ELEMENT],
  ']': [IN_PATH, PUSH]
}

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [AFTER_ELEMENT],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
}

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [AFTER_ELEMENT],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
}

pathStateMachine[IN_SUB_PATH] = {
  'ident': [IN_SUB_PATH, APPEND],
  '0': [IN_SUB_PATH, APPEND],
  'number': [IN_SUB_PATH, APPEND],
  'ws': [AFTER_ELEMENT],
  ']': [IN_PATH, PUSH]
}

pathStateMachine[AFTER_ELEMENT] = {
  'ws': [AFTER_ELEMENT],
  ']': [IN_PATH, PUSH]
}

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType (ch) {
  if (ch === undefined) {
    return 'eof'
  }

  var code = ch.charCodeAt(0)

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if (
    (code >= 0x61 && code <= 0x7A) ||
    (code >= 0x41 && code <= 0x5A)
  ) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number'
  }

  return 'else'
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath (path) {
  var keys = []
  var index = -1
  var mode = BEFORE_PATH
  var c, newChar, key, type, transition, action, typeMap

  var actions = []
  actions[PUSH] = function () {
    if (key === undefined) {
      return
    }
    keys.push(key)
    key = undefined
  }
  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar
    } else {
      key += newChar
    }
  }

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1]
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++
      newChar = nextChar
      actions[APPEND]()
      return true
    }
  }

  while (mode != null) {
    index++
    c = path[index]

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c)
    typeMap = pathStateMachine[mode]
    transition = typeMap[type] || typeMap['else'] || ERROR

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0]
    action = actions[transition[1]]
    if (action) {
      newChar = transition[2]
      newChar = newChar === undefined
        ? c
        : newChar === '*'
          ? newChar + c
          : newChar
      action()
    }

    if (mode === AFTER_PATH) {
      keys.raw = path
      return keys
    }
  }
}

/**
 * Format a accessor segment based on its type.
 *
 * @param {String} key
 * @return {Boolean}
 */

function formatAccessor (key) {
  if (identRE.test(key)) { // identifier
    return '.' + key
  } else if (+key === key >>> 0) { // bracket index
    return '[' + key + ']'
  } else if (key.charAt(0) === '*') {
    return '[o' + formatAccessor(key.slice(1)) + ']'
  } else { // bracket string
    return '["' + key.replace(/"/g, '\\"') + '"]'
  }
}

/**
 * Compiles a getter function with a fixed path.
 * The fixed path getter supresses errors.
 *
 * @param {Array} path
 * @return {Function}
 */

exports.compileGetter = function (path) {
  var body = 'return o' + path.map(formatAccessor).join('')
  return new Function('o', body)
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

exports.parse = function (path) {
  var hit = pathCache.get(path)
  if (!hit) {
    hit = parsePath(path)
    if (hit) {
      hit.get = exports.compileGetter(hit)
      pathCache.put(path, hit)
    }
  }
  return hit
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

exports.get = function (obj, path) {
  path = exports.parse(path)
  if (path) {
    return path.get(obj)
  }
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path) {
    _.warn(
      'You are setting a non-existent path "' + path.raw + '" ' +
      'on a vm instance. Consider pre-initializing the property ' +
      'with the "data" option for more reliable reactivity ' +
      'and better performance.'
    )
  }
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

exports.set = function (obj, path, val) {
  var original = obj
  if (typeof path === 'string') {
    path = exports.parse(path)
  }
  if (!path || !_.isObject(obj)) {
    return false
  }
  var last, key
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj
    key = path[i]
    if (key.charAt(0) === '*') {
      key = original[key.slice(1)]
    }
    if (i < l - 1) {
      obj = obj[key]
      if (!_.isObject(obj)) {
        obj = {}
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path)
        }
        _.set(last, key, obj)
      }
    } else {
      if (_.isArray(obj)) {
        obj.$set(key, val)
      } else if (key in obj) {
        obj[key] = val
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path)
        }
        _.set(obj, key, val)
      }
    }
  }
  return true
}

}).call(this,require('_process'))

},{"../cache":62,"../util":118,"_process":43}],109:[function(require,module,exports){
var _ = require('../util')
var Cache = require('../cache')
var templateCache = new Cache(1000)
var idSelectorCache = new Cache(1000)

var map = {
  _default: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [
    2,
    '<table><tbody></tbody><colgroup>',
    '</colgroup></table>'
  ]
}

map.td =
map.th = [
  3,
  '<table><tbody><tr>',
  '</tr></tbody></table>'
]

map.option =
map.optgroup = [
  1,
  '<select multiple="multiple">',
  '</select>'
]

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>']

map.g =
map.defs =
map.symbol =
map.use =
map.image =
map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [
  1,
  '<svg ' +
    'xmlns="http://www.w3.org/2000/svg" ' +
    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
    'version="1.1">',
  '</svg>'
]

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate (node) {
  return _.isTemplate(node) &&
    node.content instanceof DocumentFragment
}

var tagRE = /<([\w:]+)/
var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @return {DocumentFragment}
 */

function stringToFragment (templateString) {
  // try a cache hit first
  var hit = templateCache.get(templateString)
  if (hit) {
    return hit
  }

  var frag = document.createDocumentFragment()
  var tagMatch = templateString.match(tagRE)
  var entityMatch = entityRE.test(templateString)

  if (!tagMatch && !entityMatch) {
    // text only, return a single text node.
    frag.appendChild(
      document.createTextNode(templateString)
    )
  } else {

    var tag = tagMatch && tagMatch[1]
    var wrap = map[tag] || map._default
    var depth = wrap[0]
    var prefix = wrap[1]
    var suffix = wrap[2]
    var node = document.createElement('div')

    node.innerHTML = prefix + templateString.trim() + suffix
    while (depth--) {
      node = node.lastChild
    }

    var child
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
    /* eslint-enable no-cond-assign */
      frag.appendChild(child)
    }
  }

  templateCache.put(templateString, frag)
  return frag
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment (node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment.
  if (isRealTemplate(node)) {
    _.trimNode(node.content)
    return node.content
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent)
  }
  // normal node, clone it to avoid mutating the original
  var clone = exports.clone(node)
  var frag = document.createDocumentFragment()
  var child
  /* eslint-disable no-cond-assign */
  while (child = clone.firstChild) {
  /* eslint-enable no-cond-assign */
    frag.appendChild(child)
  }
  _.trimNode(frag)
  return frag
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/show_bug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (_.inBrowser) {
    var a = document.createElement('div')
    a.innerHTML = '<template>1</template>'
    return !a.cloneNode(true).firstChild.innerHTML
  } else {
    return false
  }
})()

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (_.inBrowser) {
    var t = document.createElement('textarea')
    t.placeholder = 't'
    return t.cloneNode(true).value === 't'
  } else {
    return false
  }
})()

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

exports.clone = function (node) {
  if (!node.querySelectorAll) {
    return node.cloneNode()
  }
  var res = node.cloneNode(true)
  var i, original, cloned
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var clone = res
    if (isRealTemplate(node)) {
      node = node.content
      clone = res.content
    }
    original = node.querySelectorAll('template')
    if (original.length) {
      cloned = clone.querySelectorAll('template')
      i = cloned.length
      while (i--) {
        cloned[i].parentNode.replaceChild(
          exports.clone(original[i]),
          cloned[i]
        )
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value
    } else {
      original = node.querySelectorAll('textarea')
      if (original.length) {
        cloned = res.querySelectorAll('textarea')
        i = cloned.length
        while (i--) {
          cloned[i].value = original[i].value
        }
      }
    }
  }
  return res
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *    Possible values include:
 *    - DocumentFragment object
 *    - Node object of type Template
 *    - id selector: '#some-template-id'
 *    - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} clone
 * @param {Boolean} noSelector
 * @return {DocumentFragment|undefined}
 */

exports.parse = function (template, clone, noSelector) {
  var node, frag

  // if the template is already a document fragment,
  // do nothing
  if (template instanceof DocumentFragment) {
    _.trimNode(template)
    return clone
      ? exports.clone(template)
      : template
  }

  if (typeof template === 'string') {
    // id selector
    if (!noSelector && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template)
      if (!frag) {
        node = document.getElementById(template.slice(1))
        if (node) {
          frag = nodeToFragment(node)
          // save selector to cache
          idSelectorCache.put(template, frag)
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template)
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template)
  }

  return frag && clone
    ? exports.clone(frag)
    : frag
}

},{"../cache":62,"../util":118}],110:[function(require,module,exports){
var Cache = require('../cache')
var config = require('../config')
var dirParser = require('./directive')
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
var cache, tagRE, htmlRE

/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex (str) {
  return str.replace(regexEscapeRE, '\\$&')
}

exports.compileRegex = function () {
  var open = escapeRegex(config.delimiters[0])
  var close = escapeRegex(config.delimiters[1])
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0])
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1])
  tagRE = new RegExp(
    unsafeOpen + '(.+?)' + unsafeClose + '|' +
    open + '(.+?)' + close,
    'g'
  )
  htmlRE = new RegExp(
    '^' + unsafeOpen + '.*' + unsafeClose + '$'
  )
  // reset cache
  cache = new Cache(1000)
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

exports.parse = function (text) {
  if (!cache) {
    exports.compileRegex()
  }
  var hit = cache.get(text)
  if (hit) {
    return hit
  }
  text = text.replace(/\n/g, '')
  if (!tagRE.test(text)) {
    return null
  }
  var tokens = []
  var lastIndex = tagRE.lastIndex = 0
  var match, index, html, value, first, oneTime
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
  /* eslint-enable no-cond-assign */
    index = match.index
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      })
    }
    // tag token
    html = htmlRE.test(match[0])
    value = html ? match[1] : match[2]
    first = value.charCodeAt(0)
    oneTime = first === 42 // *
    value = oneTime
      ? value.slice(1)
      : value
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    })
    lastIndex = index + match[0].length
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    })
  }
  cache.put(text, tokens)
  return tokens
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @return {String}
 */

exports.tokensToExp = function (tokens) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token)
    }).join('+')
  } else {
    return formatToken(tokens[0], true)
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Boolean} single
 * @return {String}
 */

function formatToken (token, single) {
  return token.tag
    ? inlineFilters(token.value, single)
    : '"' + token.value + '"'
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/
function inlineFilters (exp, single) {
  if (!filterRE.test(exp)) {
    return single
      ? exp
      : '(' + exp + ')'
  } else {
    var dir = dirParser.parse(exp)
    if (!dir.filters) {
      return '(' + exp + ')'
    } else {
      return 'this._applyFilters(' +
        dir.expression + // value
        ',null,' +       // oldValue (null for read)
        JSON.stringify(dir.filters) + // filter descriptors
        ',false)'        // write?
    }
  }
}

},{"../cache":62,"../config":67,"./directive":106}],111:[function(require,module,exports){
var _ = require('../util')

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

exports.append = function (el, target, vm, cb) {
  apply(el, 1, function () {
    target.appendChild(el)
  }, vm, cb)
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

exports.before = function (el, target, vm, cb) {
  apply(el, 1, function () {
    _.before(el, target)
  }, vm, cb)
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

exports.remove = function (el, vm, cb) {
  apply(el, -1, function () {
    _.remove(el)
  }, vm, cb)
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

var apply = exports.apply = function (el, direction, op, vm, cb) {
  var transition = el.__v_trans
  if (
    !transition ||
    // skip if there are no js hooks and CSS transition is
    // not supported
    (!transition.hooks && !_.transitionEndEvent) ||
    // skip transitions for initial compile
    !vm._isCompiled ||
    // if the vm is being manipulated by a parent directive
    // during the parent's compilation phase, skip the
    // animation.
    (vm.$parent && !vm.$parent._isCompiled)
  ) {
    op()
    if (cb) cb()
    return
  }
  var action = direction > 0 ? 'enter' : 'leave'
  transition[action](op, cb)
}

},{"../util":118}],112:[function(require,module,exports){
var _ = require('../util')
var queue = []
var queued = false

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

exports.push = function (job) {
  queue.push(job)
  if (!queued) {
    queued = true
    _.nextTick(flush)
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush () {
  // Force layout
  var f = document.documentElement.offsetHeight
  for (var i = 0; i < queue.length; i++) {
    queue[i]()
  }
  queue = []
  queued = false
  // dummy return, so js linters don't complain about
  // unused variable f
  return f
}

},{"../util":118}],113:[function(require,module,exports){
var _ = require('../util')
var queue = require('./queue')
var addClass = _.addClass
var removeClass = _.removeClass
var transitionEndEvent = _.transitionEndEvent
var animationEndEvent = _.animationEndEvent
var transDurationProp = _.transitionProp + 'Duration'
var animDurationProp = _.animationProp + 'Duration'

var TYPE_TRANSITION = 1
var TYPE_ANIMATION = 2

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */

function Transition (el, id, hooks, vm) {
  this.id = id
  this.el = el
  this.enterClass = id + '-enter'
  this.leaveClass = id + '-leave'
  this.hooks = hooks
  this.vm = vm
  // async state
  this.pendingCssEvent =
  this.pendingCssCb =
  this.cancel =
  this.pendingJsCb =
  this.op =
  this.cb = null
  this.justEntered = false
  this.entered = this.left = false
  this.typeCache = {}
  // bind
  var self = this
  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
    .forEach(function (m) {
      self[m] = _.bind(self[m], self)
    })
}

var p = Transition.prototype

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p.enter = function (op, cb) {
  this.cancelPending()
  this.callHook('beforeEnter')
  this.cb = cb
  addClass(this.el, this.enterClass)
  op()
  this.entered = false
  this.callHookWithCb('enter')
  if (this.entered) {
    return // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled
  queue.push(this.enterNextTick)
}

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p.enterNextTick = function () {

  // Important hack:
  // in Chrome, if a just-entered element is applied the
  // leave class while its interpolated property still has
  // a very small value (within one frame), Chrome will
  // skip the leave transition entirely and not firing the
  // transtionend event. Therefore we need to protected
  // against such cases using a one-frame timeout.
  this.justEntered = true
  var self = this
  setTimeout(function () {
    self.justEntered = false
  }, 17)

  var enterDone = this.enterDone
  var type = this.getCssTransitionType(this.enterClass)
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass)
      this.setupCssCb(transitionEndEvent, enterDone)
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone)
    } else {
      enterDone()
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass)
  }
}

/**
 * The "cleanup" phase of an entering transition.
 */

p.enterDone = function () {
  this.entered = true
  this.cancel = this.pendingJsCb = null
  removeClass(this.el, this.enterClass)
  this.callHook('afterEnter')
  if (this.cb) this.cb()
}

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p.leave = function (op, cb) {
  this.cancelPending()
  this.callHook('beforeLeave')
  this.op = op
  this.cb = cb
  addClass(this.el, this.leaveClass)
  this.left = false
  this.callHookWithCb('leave')
  if (this.left) {
    return // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone()
    } else {
      queue.push(this.leaveNextTick)
    }
  }
}

/**
 * The "nextTick" phase of a leaving transition.
 */

p.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass)
  if (type) {
    var event = type === TYPE_TRANSITION
      ? transitionEndEvent
      : animationEndEvent
    this.setupCssCb(event, this.leaveDone)
  } else {
    this.leaveDone()
  }
}

/**
 * The "cleanup" phase of a leaving transition.
 */

p.leaveDone = function () {
  this.left = true
  this.cancel = this.pendingJsCb = null
  this.op()
  removeClass(this.el, this.leaveClass)
  this.callHook('afterLeave')
  if (this.cb) this.cb()
  this.op = null
}

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p.cancelPending = function () {
  this.op = this.cb = null
  var hasPending = false
  if (this.pendingCssCb) {
    hasPending = true
    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
    this.pendingCssEvent = this.pendingCssCb = null
  }
  if (this.pendingJsCb) {
    hasPending = true
    this.pendingJsCb.cancel()
    this.pendingJsCb = null
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass)
    removeClass(this.el, this.leaveClass)
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el)
    this.cancel = null
  }
}

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el)
  }
}

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type]
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = _.cancellable(this[type + 'Done'])
    }
    hook.call(this.vm, this.el, this.pendingJsCb)
  }
}

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (
    !transitionEndEvent ||
    // skip CSS transitions if page is not visible -
    // this solves the issue of transitionend events not
    // firing until the page is visible again.
    // pageVisibility API is supported in IE10+, same as
    // CSS transitions.
    document.hidden ||
    // explicit js-only transition
    (this.hooks && this.hooks.css === false) ||
    // element is hidden
    isHidden(this.el)
  ) {
    return
  }
  var type = this.typeCache[className]
  if (type) return type
  var inlineStyles = this.el.style
  var computedStyles = window.getComputedStyle(this.el)
  var transDuration =
    inlineStyles[transDurationProp] ||
    computedStyles[transDurationProp]
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION
  } else {
    var animDuration =
      inlineStyles[animDurationProp] ||
      computedStyles[animDurationProp]
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION
    }
  }
  if (type) {
    this.typeCache[className] = type
  }
  return type
}

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event
  var self = this
  var el = this.el
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      _.off(el, event, onEnd)
      self.pendingCssEvent = self.pendingCssCb = null
      if (!self.pendingJsCb && cb) {
        cb()
      }
    }
  }
  _.on(el, event, onEnd)
}

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden (el) {
  return !(
    el.offsetWidth &&
    el.offsetHeight &&
    el.getClientRects().length
  )
}

module.exports = Transition

},{"../util":118,"./queue":112}],114:[function(require,module,exports){
(function (process){
var _ = require('./index')

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

exports.commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/
exports.checkComponent = function (el, options) {
  var tag = el.tagName.toLowerCase()
  var hasAttrs = el.hasAttributes()
  if (!exports.commonTagRE.test(tag) && tag !== 'component') {
    if (_.resolveAsset(options, 'components', tag)) {
      return { id: tag }
    } else {
      var is = hasAttrs && getIsBinding(el)
      if (is) {
        return is
      } else if (process.env.NODE_ENV !== 'production') {
        if (
          tag.indexOf('-') > -1 ||
          (
            /HTMLUnknownElement/.test(el.toString()) &&
            // Chrome returns unknown for several HTML5 elements.
            // https://code.google.com/p/chromium/issues/detail?id=540526
            !/^(data|time|rtc|rb)$/.test(tag)
          )
        ) {
          _.warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly?'
          )
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el)
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @return {Object|undefined}
 */

function getIsBinding (el) {
  // dynamic syntax
  var exp = _.attr(el, 'is')
  if (exp != null) {
    return { id: exp }
  } else {
    exp = _.getBindAttr(el, 'is')
    if (exp != null) {
      return { id: exp, dynamic: true }
    }
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

exports.initProp = function (vm, prop, value) {
  if (exports.assertProp(prop, value)) {
    var key = prop.path
    vm[key] = vm._data[key] = value
  }
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 */

exports.assertProp = function (prop, value) {
  // if a prop is not provided and is not required,
  // skip the check.
  if (prop.raw === null && !prop.required) {
    return true
  }
  var options = prop.options
  var type = options.type
  var valid = true
  var expectedType
  if (type) {
    if (type === String) {
      expectedType = 'string'
      valid = typeof value === expectedType
    } else if (type === Number) {
      expectedType = 'number'
      valid = typeof value === 'number'
    } else if (type === Boolean) {
      expectedType = 'boolean'
      valid = typeof value === 'boolean'
    } else if (type === Function) {
      expectedType = 'function'
      valid = typeof value === 'function'
    } else if (type === Object) {
      expectedType = 'object'
      valid = _.isPlainObject(value)
    } else if (type === Array) {
      expectedType = 'array'
      valid = _.isArray(value)
    } else {
      valid = value instanceof type
    }
  }
  if (!valid) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid prop: type check failed for ' +
      prop.path + '="' + prop.raw + '".' +
      ' Expected ' + formatType(expectedType) +
      ', got ' + formatValue(value) + '.'
    )
    return false
  }
  var validator = options.validator
  if (validator) {
    if (!validator.call(null, value)) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Invalid prop: custom validator check failed for ' +
        prop.path + '="' + prop.raw + '"'
      )
      return false
    }
  }
  return true
}

function formatType (val) {
  return val
    ? val.charAt(0).toUpperCase() + val.slice(1)
    : 'custom type'
}

function formatValue (val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

}).call(this,require('_process'))

},{"./index":118,"_process":43}],115:[function(require,module,exports){
(function (process){
/**
 * Enable debug utilities.
 */

if (process.env.NODE_ENV !== 'production') {

  var config = require('../config')
  var hasConsole = typeof console !== 'undefined'

  /**
   * Log a message.
   *
   * @param {String} msg
   */

  exports.log = function (msg) {
    if (hasConsole && config.debug) {
      console.log('[Vue info]: ' + msg)
    }
  }

  /**
   * We've got a problem here.
   *
   * @param {String} msg
   */

  exports.warn = function (msg, e) {
    if (hasConsole && (!config.silent || config.debug)) {
      console.warn('[Vue warn]: ' + msg)
      /* istanbul ignore if */
      if (config.debug) {
        console.warn((e || new Error('Warning Stack Trace')).stack)
      }
    }
  }

  /**
   * Assert asset exists
   */

  exports.assertAsset = function (val, type, id) {
    if (!val) {
      exports.warn('Failed to resolve ' + type + ': ' + id)
    }
  }
}

}).call(this,require('_process'))

},{"../config":67,"_process":43}],116:[function(require,module,exports){
(function (process){
var _ = require('./index')
var config = require('../config')
var transition = require('../transition')

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

exports.query = function (el) {
  if (typeof el === 'string') {
    var selector = el
    el = document.querySelector(el)
    if (!el) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Cannot find element: ' + selector
      )
    }
  }
  return el
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

exports.inDoc = function (node) {
  var doc = document.documentElement
  var parent = node && node.parentNode
  return doc === node ||
    doc === parent ||
    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} attr
 */

exports.attr = function (node, attr) {
  var val = node.getAttribute(attr)
  if (val !== null) {
    node.removeAttribute(attr)
  }
  return val
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

exports.getBindAttr = function (node, name) {
  var val = exports.attr(node, ':' + name)
  if (val === null) {
    val = exports.attr(node, 'v-bind:' + name)
  }
  return val
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

exports.before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

exports.after = function (el, target) {
  if (target.nextSibling) {
    exports.before(el, target.nextSibling)
  } else {
    target.parentNode.appendChild(el)
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

exports.remove = function (el) {
  el.parentNode.removeChild(el)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

exports.prepend = function (el, target) {
  if (target.firstChild) {
    exports.before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

exports.replace = function (target, el) {
  var parent = target.parentNode
  if (parent) {
    parent.replaceChild(el, target)
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

exports.on = function (el, event, cb) {
  el.addEventListener(event, cb)
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

exports.off = function (el, event, cb) {
  el.removeEventListener(event, cb)
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {Strong} cls
 */

exports.addClass = function (el, cls) {
  if (el.classList) {
    el.classList.add(cls)
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' '
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim())
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {Strong} cls
 */

exports.removeClass = function (el, cls) {
  if (el.classList) {
    el.classList.remove(cls)
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' '
    var tar = ' ' + cls + ' '
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ')
    }
    el.setAttribute('class', cur.trim())
  }
  if (!el.className) {
    el.removeAttribute('class')
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element}
 */

exports.extractContent = function (el, asFragment) {
  var child
  var rawContent
  /* istanbul ignore if */
  if (
    exports.isTemplate(el) &&
    el.content instanceof DocumentFragment
  ) {
    el = el.content
  }
  if (el.hasChildNodes()) {
    exports.trimNode(el)
    rawContent = asFragment
      ? document.createDocumentFragment()
      : document.createElement('div')
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
    /* eslint-enable no-cond-assign */
      rawContent.appendChild(child)
    }
  }
  return rawContent
}

/**
 * Trim possible empty head/tail textNodes inside a parent.
 *
 * @param {Node} node
 */

exports.trimNode = function (node) {
  trim(node, node.firstChild)
  trim(node, node.lastChild)
}

function trim (parent, node) {
  if (node && node.nodeType === 3 && !node.data.trim()) {
    parent.removeChild(node)
  }
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

exports.isTemplate = function (el) {
  return el.tagName &&
    el.tagName.toLowerCase() === 'template'
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

exports.createAnchor = function (content, persist) {
  return config.debug
    ? document.createComment(content)
    : document.createTextNode(persist ? ' ' : '')
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/
exports.findRef = function (node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name
      if (refRE.test(name)) {
        node.removeAttribute(name)
        return _.camelize(name.replace(refRE, ''))
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

exports.mapNodeRange = function (node, end, op) {
  var next
  while (node !== end) {
    next = node.nextSibling
    op(node)
    node = next
  }
  op(end)
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

exports.removeNodeRange = function (start, end, vm, frag, cb) {
  var done = false
  var removed = 0
  var nodes = []
  exports.mapNodeRange(start, end, function (node) {
    if (node === end) done = true
    nodes.push(node)
    transition.remove(node, vm, onRemoved)
  })
  function onRemoved () {
    removed++
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i])
      }
      cb && cb()
    }
  }
}

}).call(this,require('_process'))

},{"../config":67,"../transition":111,"./index":118,"_process":43}],117:[function(require,module,exports){
// can we use __proto__?
exports.hasProto = '__proto__' in {}

// Browser environment sniffing
var inBrowser = exports.inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]'

exports.isIE9 =
  inBrowser &&
  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0

exports.isAndroid =
  inBrowser &&
  navigator.userAgent.toLowerCase().indexOf('android') > 0

// Transition property/event sniffing
if (inBrowser && !exports.isIE9) {
  var isWebkitTrans =
    window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  var isWebkitAnim =
    window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  exports.transitionProp = isWebkitTrans
    ? 'WebkitTransition'
    : 'transition'
  exports.transitionEndEvent = isWebkitTrans
    ? 'webkitTransitionEnd'
    : 'transitionend'
  exports.animationProp = isWebkitAnim
    ? 'WebkitAnimation'
    : 'animation'
  exports.animationEndEvent = isWebkitAnim
    ? 'webkitAnimationEnd'
    : 'animationend'
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

exports.nextTick = (function () {
  var callbacks = []
  var pending = false
  var timerFunc
  function nextTickHandler () {
    pending = false
    var copies = callbacks.slice(0)
    callbacks = []
    for (var i = 0; i < copies.length; i++) {
      copies[i]()
    }
  }
  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined') {
    var counter = 1
    var observer = new MutationObserver(nextTickHandler)
    var textNode = document.createTextNode(counter)
    observer.observe(textNode, {
      characterData: true
    })
    timerFunc = function () {
      counter = (counter + 1) % 2
      textNode.data = counter
    }
  } else {
    timerFunc = setTimeout
  }
  return function (cb, ctx) {
    var func = ctx
      ? function () { cb.call(ctx) }
      : cb
    callbacks.push(func)
    if (pending) return
    pending = true
    timerFunc(nextTickHandler, 0)
  }
})()

},{}],118:[function(require,module,exports){
var lang = require('./lang')
var extend = lang.extend

extend(exports, lang)
extend(exports, require('./env'))
extend(exports, require('./dom'))
extend(exports, require('./options'))
extend(exports, require('./component'))
extend(exports, require('./debug'))

},{"./component":114,"./debug":115,"./dom":116,"./env":117,"./lang":119,"./options":120}],119:[function(require,module,exports){
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @public
 */

exports.set = function set (obj, key, val) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = val
    return
  }
  if (obj._isVue) {
    set(obj._data, key, val)
    return
  }
  var ob = obj.__ob__
  if (!ob) {
    obj[key] = val
    return
  }
  ob.convert(key, val)
  ob.dep.notify()
  if (ob.vms) {
    var i = ob.vms.length
    while (i--) {
      var vm = ob.vms[i]
      vm._proxy(key)
      vm._digest()
    }
  }
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

exports.delete = function (obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return
  }
  delete obj[key]
  var ob = obj.__ob__
  if (!ob) {
    return
  }
  ob.dep.notify()
  if (ob.vms) {
    var i = ob.vms.length
    while (i--) {
      var vm = ob.vms[i]
      vm._unproxy(key)
      vm._digest()
    }
  }
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/
exports.isLiteral = function (exp) {
  return literalValueRE.test(exp)
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

exports.isReserved = function (str) {
  var c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

exports.toString = function (value) {
  return value == null
    ? ''
    : value.toString()
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

exports.toNumber = function (value) {
  if (typeof value !== 'string') {
    return value
  } else {
    var parsed = Number(value)
    return isNaN(parsed)
      ? value
      : parsed
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

exports.toBoolean = function (value) {
  return value === 'true'
    ? true
    : value === 'false'
      ? false
      : value
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

exports.stripQuotes = function (str) {
  var a = str.charCodeAt(0)
  var b = str.charCodeAt(str.length - 1)
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g
exports.camelize = function (str) {
  return str.replace(camelizeRE, toUpper)
}

function toUpper (_, c) {
  return c ? c.toUpperCase() : ''
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g
exports.hyphenate = function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g
exports.classify = function (str) {
  return str.replace(classifyRE, toUpper)
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

exports.bind = function (fn, ctx) {
  return function (a) {
    var l = arguments.length
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

exports.toArray = function (list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

exports.extend = function (to, from) {
  var keys = Object.keys(from)
  var i = keys.length
  while (i--) {
    to[keys[i]] = from[keys[i]]
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

exports.isObject = function (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
exports.isPlainObject = function (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

exports.isArray = Array.isArray

/**
 * Define a non-enumerable property
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

exports.define = function (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

exports.debounce = function (func, wait) {
  var timeout, args, context, timestamp, result
  var later = function () {
    var last = Date.now() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = Date.now()
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    return result
  }
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

exports.indexOf = function (arr, obj) {
  var i = arr.length
  while (i--) {
    if (arr[i] === obj) return i
  }
  return -1
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

exports.cancellable = function (fn) {
  var cb = function () {
    if (!cb.cancelled) {
      return fn.apply(this, arguments)
    }
  }
  cb.cancel = function () {
    cb.cancelled = true
  }
  return cb
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

exports.looseEqual = function (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    exports.isObject(a) && exports.isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

},{}],120:[function(require,module,exports){
(function (process){
var _ = require('./index')
var config = require('../config')
var extend = _.extend

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null)

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData (to, from) {
  var key, toVal, fromVal
  for (key in from) {
    toVal = to[key]
    fromVal = from[key]
    if (!to.hasOwnProperty(key)) {
      _.set(to, key, fromVal)
    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
      mergeData(toVal, fromVal)
    }
  }
  return to
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && _.warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.'
      )
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && _.warn(
      'The "el" option should be a function ' +
      'that returns a per-instance value in component ' +
      'definitions.'
    )
    return
  }
  var ret = childVal || parentVal
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function'
    ? ret.call(vm)
    : ret
}

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init =
strats.created =
strats.ready =
strats.attached =
strats.detached =
strats.beforeCompile =
strats.compiled =
strats.beforeDestroy =
strats.destroyed = function (parentVal, childVal) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : _.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

/**
 * 0.11 deprecation warning
 */

strats.paramAttributes = function () {
  /* istanbul ignore next */
  process.env.NODE_ENV !== 'production' && _.warn(
    '"paramAttributes" option has been deprecated in 0.12. ' +
    'Use "props" instead.'
  )
}

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal)
  return childVal
    ? extend(res, guardArrayAssets(childVal))
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets
})

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch =
strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal
  if (!parentVal) return childVal
  var ret = {}
  extend(ret, parentVal)
  for (var key in childVal) {
    var parent = ret[key]
    var child = childVal[key]
    if (parent && !_.isArray(parent)) {
      parent = [parent]
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child]
  }
  return ret
}

/**
 * Other object hashes.
 */

strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal
  if (!parentVal) return childVal
  var ret = Object.create(null)
  extend(ret, parentVal)
  extend(ret, childVal)
  return ret
}

/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents (options) {
  if (options.components) {
    var components = options.components =
      guardArrayAssets(options.components)
    var def
    var ids = Object.keys(components)
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i]
      if (_.commonTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'Do not use built-in HTML elements as component ' +
          'id: ' + key
        )
        continue
      }
      def = components[key]
      if (_.isPlainObject(def)) {
        components[key] = _.Vue.extend(def)
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps (options) {
  var props = options.props
  var i
  if (_.isArray(props)) {
    options.props = {}
    i = props.length
    while (i--) {
      options.props[props[i]] = null
    }
  } else if (_.isPlainObject(props)) {
    var keys = Object.keys(props)
    i = keys.length
    while (i--) {
      var val = props[keys[i]]
      if (typeof val === 'function') {
        props[keys[i]] = { type: val }
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets (assets) {
  if (_.isArray(assets)) {
    var res = {}
    var i = assets.length
    var asset
    while (i--) {
      asset = assets[i]
      var id = typeof asset === 'function'
        ? ((asset.options && asset.options.name) || asset.id)
        : (asset.name || asset.id)
      if (!id) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'Array-syntax assets must provide a "name" or "id" field.'
        )
      } else {
        res[id] = asset
      }
    }
    return res
  }
  return assets
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

exports.mergeOptions = function merge (parent, child, vm) {
  guardComponents(child)
  guardProps(child)
  var options = {}
  var key
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = merge(parent, child.mixins[i], vm)
    }
  }
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!(parent.hasOwnProperty(key))) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @return {Object|Function}
 */

exports.resolveAsset = function resolve (options, type, id) {
  var assets = options[type]
  var camelizedId
  return assets[id] ||
    // camelCase ID
    assets[camelizedId = _.camelize(id)] ||
    // Pascal Case ID
    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)]
}

}).call(this,require('_process'))

},{"../config":67,"./index":118,"_process":43}],121:[function(require,module,exports){
(function (process){
var _ = require('./util')
var extend = _.extend

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefiexed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue (options) {
  this._init(options)
}

/**
 * Mixin global API
 */

extend(Vue, require('./api/global'))

/**
 * Vue and every constructor that extends Vue has an
 * associated options object, which can be accessed during
 * compilation steps as `this.constructor.options`.
 *
 * These can be seen as the default options of every
 * Vue instance.
 */

Vue.options = {
  replace: true,
  directives: require('./directives/public'),
  elementDirectives: require('./directives/element'),
  filters: require('./filters'),
  transitions: {},
  components: {},
  partials: {}
}

/**
 * Build up the prototype
 */

var p = Vue.prototype

/**
 * $data has a setter which does a bunch of
 * teardown/setup work
 */

Object.defineProperty(p, '$data', {
  get: function () {
    return this._data
  },
  set: function (newData) {
    if (newData !== this._data) {
      this._setData(newData)
    }
  }
})

/**
 * Mixin internal instance methods
 */

extend(p, require('./instance/init'))
extend(p, require('./instance/events'))
extend(p, require('./instance/state'))
extend(p, require('./instance/lifecycle'))
extend(p, require('./instance/misc'))

/**
 * Mixin public API methods
 */

extend(p, require('./api/data'))
extend(p, require('./api/dom'))
extend(p, require('./api/events'))
extend(p, require('./api/lifecycle'))

Vue.version = '1.0.7'
module.exports = _.Vue = Vue

/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production') {
  if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue)
  }
}

}).call(this,require('_process'))

},{"./api/data":56,"./api/dom":57,"./api/events":58,"./api/global":59,"./api/lifecycle":60,"./directives/element":69,"./directives/public":84,"./filters":95,"./instance/events":98,"./instance/init":99,"./instance/lifecycle":100,"./instance/misc":101,"./instance/state":102,"./util":118,"_process":43}],122:[function(require,module,exports){
(function (process){
var _ = require('./util')
var config = require('./config')
var Dep = require('./observer/dep')
var expParser = require('./parsers/expression')
var batcher = require('./batcher')
var uid = 0

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String} expression
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */

function Watcher (vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    _.extend(this, options)
  }
  var isFn = typeof expOrFn === 'function'
  this.vm = vm
  vm._watchers.push(this)
  this.expression = isFn ? expOrFn.toString() : expOrFn
  this.cb = cb
  this.id = ++uid // uid for batching
  this.active = true
  this.dirty = this.lazy // for lazy watchers
  this.deps = Object.create(null)
  this.newDeps = null
  this.prevError = null // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn
    this.setter = undefined
  } else {
    var res = expParser.parse(expOrFn, this.twoWay)
    this.getter = res.get
    this.setter = res.set
  }
  this.value = this.lazy
    ? undefined
    : this.get()
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false
}

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id
  if (!this.newDeps[id]) {
    this.newDeps[id] = dep
    if (!this.deps[id]) {
      this.deps[id] = dep
      dep.addSub(this)
    }
  }
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet()
  var scope = this.scope || this.vm
  var value
  try {
    value = this.getter.call(scope, scope)
  } catch (e) {
    if (
      process.env.NODE_ENV !== 'production' &&
      config.warnExpressionErrors
    ) {
      _.warn(
        'Error when evaluating expression "' +
        this.expression + '". ' +
        (config.debug
          ? ''
          : 'Turn on debug mode to see stack trace.'
        ), e
      )
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value)
  }
  if (this.preProcess) {
    value = this.preProcess(value)
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false)
  }
  if (this.postProcess) {
    value = this.postProcess(value)
  }
  this.afterGet()
  return value
}

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm
  if (this.filters) {
    value = scope._applyFilters(
      value, this.value, this.filters, true)
  }
  try {
    this.setter.call(scope, scope, value)
  } catch (e) {
    if (
      process.env.NODE_ENV !== 'production' &&
      config.warnExpressionErrors
    ) {
      _.warn(
        'Error when evaluating setter "' +
        this.expression + '"', e
      )
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext
  if (process.env.NODE_ENV !== 'production') {
    if (
      forContext &&
      forContext.filters &&
      (new RegExp(forContext.alias + '\\b')).test(this.expression)
    ) {
      _.warn(
        'It seems you are using two-way binding on ' +
        'a v-for alias (' + this.expression + '), and the ' +
        'v-for has filters. This will not work properly. ' +
        'Either remove the filters or use an array of ' +
        'objects and bind to object properties instead.'
      )
    }
  }
  if (
    forContext &&
    forContext.alias === this.expression &&
    !forContext.filters
  ) {
    if (scope.$key) { // original is an object
      forContext.rawValue[scope.$key] = value
    } else {
      forContext.rawValue.$set(scope.$index, value)
    }
  }
}

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this
  this.newDeps = Object.create(null)
}

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null
  var ids = Object.keys(this.deps)
  var i = ids.length
  while (i--) {
    var id = ids[i]
    if (!this.newDeps[id]) {
      this.deps[id].removeSub(this)
    }
  }
  this.deps = this.newDeps
}

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync || !config.async) {
    this.run()
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued
      ? shallow
        ? this.shallow
        : false
      : !!shallow
    this.queued = true
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace')
    }
    batcher.push(this)
  }
}

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get()
    if (
      value !== this.value ||
      // Deep watchers and Array watchers should fire even
      // when the value is the same, because the value may
      // have mutated; but only do so if this is a
      // non-shallow update (caused by a vm digest).
      ((_.isArray(value) || this.deep) && !this.shallow)
    ) {
      // set new value
      var oldValue = this.value
      this.value = value
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' &&
          config.debug && prevError) {
        this.prevError = null
        try {
          this.cb.call(this.vm, value, oldValue)
        } catch (e) {
          _.nextTick(function () {
            throw prevError
          }, 0)
          throw e
        }
      } else {
        this.cb.call(this.vm, value, oldValue)
      }
    }
    this.queued = this.shallow = false
  }
}

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target
  this.value = this.get()
  this.dirty = false
  Dep.target = current
}

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var depIds = Object.keys(this.deps)
  var i = depIds.length
  while (i--) {
    this.deps[depIds[i]].depend()
  }
}

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // we can skip this if the vm if being destroyed
    // which can improve teardown performance.
    if (!this.vm._isBeingDestroyed) {
      this.vm._watchers.$remove(this)
    }
    var depIds = Object.keys(this.deps)
    var i = depIds.length
    while (i--) {
      this.deps[depIds[i]].removeSub(this)
    }
    this.active = false
    this.vm = this.cb = this.value = null
  }
}

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

function traverse (val) {
  var i, keys
  if (_.isArray(val)) {
    i = val.length
    while (i--) traverse(val[i])
  } else if (_.isObject(val)) {
    keys = Object.keys(val)
    i = keys.length
    while (i--) traverse(val[keys[i]])
  }
}

module.exports = Watcher

}).call(this,require('_process'))

},{"./batcher":61,"./config":67,"./observer/dep":104,"./parsers/expression":107,"./util":118,"_process":43}]},{},[20])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwLmNzcyIsImNsaWVudC9hcHAuaHRtbCIsImNsaWVudC9jb21wb25lbnRzL2NvdW50ZXIvaW5kZXguanMiLCJjbGllbnQvY29tcG9uZW50cy9jb3VudGVyL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci1uYXYvaW5kZXguanMiLCJjbGllbnQvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci1uYXYvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyLW5hdi9pbmRleC5qcyIsImNsaWVudC9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyLW5hdi90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvaW5kZXguanMiLCJjbGllbnQvY29tcG9uZW50cy9wYWdlcy9ob21lL2VsZW1lbnRzLzFfc3BsYXNoL2luZGV4LmpzIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy8xX3NwbGFzaC90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy8yX3N1YmhlYWRfMS90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy8zX3N1YmhlYWRfMi90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy80X2JveF8xL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvY29tcG9uZW50cy9wYWdlcy9ob21lL2luZGV4LmpzIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L21haW4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5LWNzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcm91dGUtcmVjb2duaXplci9kaXN0L3JvdXRlLXJlY29nbml6ZXIuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvZGlyZWN0aXZlcy9saW5rLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL2RpcmVjdGl2ZXMvdmlldy5qcyIsIm5vZGVfbW9kdWxlcy92dWUtcm91dGVyL2xpYi9oaXN0b3J5L2Fic3RyYWN0LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL2hpc3RvcnkvaGFzaC5qcyIsIm5vZGVfbW9kdWxlcy92dWUtcm91dGVyL2xpYi9oaXN0b3J5L2h0bWw1LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL292ZXJyaWRlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL3BpcGVsaW5lLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL3JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2FwaS9kYXRhLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvYXBpL2RvbS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2FwaS9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9hcGkvZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvYXBpL2xpZmVjeWNsZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2JhdGNoZXIuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9jYWNoZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2NvbXBpbGVyL2NvbXBpbGUtcHJvcHMuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9jb21waWxlci9jb21waWxlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvY29tcGlsZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9jb21waWxlci90cmFuc2NsdWRlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9lbGVtZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9lbGVtZW50L3BhcnRpYWwuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2VsZW1lbnQvc2xvdC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvaW50ZXJuYWwvY2xhc3MuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2ludGVybmFsL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvaW50ZXJuYWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2ludGVybmFsL3Byb3AuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2ludGVybmFsL3N0eWxlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9pbnRlcm5hbC90cmFuc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvYmluZC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL2Nsb2FrLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvZWwuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9mb3IuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9odG1sLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvaWYuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL21vZGVsL2NoZWNrYm94LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvbW9kZWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9tb2RlbC9yYWRpby5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL21vZGVsL3NlbGVjdC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL21vZGVsL3RleHQuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9vbi5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL3JlZi5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL3Nob3cuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy90ZXh0LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZmlsdGVycy9hcnJheS1maWx0ZXJzLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZmlsdGVycy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2ZyYWdtZW50L2ZhY3RvcnkuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9mcmFnbWVudC9mcmFnbWVudC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2luc3RhbmNlL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2luc3RhbmNlL2luaXQuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9pbnN0YW5jZS9saWZlY3ljbGUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9pbnN0YW5jZS9taXNjLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvaW5zdGFuY2Uvc3RhdGUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9vYnNlcnZlci9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL29ic2VydmVyL2RlcC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL29ic2VydmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvcGFyc2Vycy9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9wYXJzZXJzL2V4cHJlc3Npb24uanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9wYXJzZXJzL3BhdGguanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9wYXJzZXJzL3RlbXBsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvcGFyc2Vycy90ZXh0LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdHJhbnNpdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3RyYW5zaXRpb24vcXVldWUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3V0aWwvZGVidWcuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy91dGlsL2RvbS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3V0aWwvZW52LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdXRpbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3V0aWwvbGFuZy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3V0aWwvb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3Z1ZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3dhdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2VBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixVQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0NBQ3JDLENBQUE7O0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7O0FDcEIzQjtBQUNBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLE1BQUksRUFBRSxnQkFBWTtBQUNoQixXQUFNO0FBQ0osT0FBRyxFQUFFLDJCQUEyQixDQUFBO0dBQ25DO0FBQ0QsVUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztDQUNyQyxDQUFDOzs7QUNQRjtBQUNBOzs7O0FDQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLE1BQUksRUFBRSxnQkFBWTtBQUNoQixXQUFNO0FBQ0osT0FBRyxFQUFFLDRCQUE0QixDQUFBO0dBQ3BDO0FBQ0QsVUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztDQUNyQyxDQUFDOzs7QUNQRjtBQUNBOzs7O0FDREEsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLFVBQVEsRUFBRSwwQkFBMEI7Q0FDckMsQ0FBQTs7Ozs7QUNGRCxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsVUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNwQyxZQUFVLEVBQUUsRUFFWDtDQUNGLENBQUE7OztBQ0xEO0FBQ0E7Ozs7QUNEQTtBQUNBOzs7O0FDREE7QUFDQTs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09BLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixVQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLFlBQVUsRUFBRTtBQUNWLFVBQU0saUJBQUE7QUFDTixZQUFRLGlCQUFBO0FBQ1IsWUFBUSxpQkFBQTtBQUNSLFFBQUksa0JBQUE7QUFDSixhQUFTOztBQUFBLEdBRVY7Q0FDRixDQUFBOzs7QUNsQkQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3hCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTs7O0FBTTlCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7OztBQUFBLEFBR3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDOzs7QUFBQSxBQUdsQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ25CLFlBQVUsRUFBRTtBQUNWLGFBQVMsaUJBQUE7R0FDVjtBQUNELFVBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQ2hDLENBQUM7Ozs7QUFBQSxBQUlGLElBQUksT0FBTyxHQUFHO0FBQ1osVUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQztBQUN6QixVQUFRLEVBQUUsSUFBSTtDQUNmLENBQUMsQ0FBQTs7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ1AsS0FBRyxFQUFFO0FBQ0gsYUFBUyxpQkFBTTtHQUNoQjtBQUNELFVBQVEsRUFBRTtBQUNSLGFBQVMsaUJBQU87R0FDakI7Q0FDSixDQUFDLENBQUE7O0FBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDOztBQUFBOztBQ3ZDekI7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3Z1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoVUE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY3NzID0gXCIvKiFcXG5QdXJlIHYwLjYuMFxcbkNvcHlyaWdodCAyMDE0IFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuTGljZW5zZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxcbmh0dHBzOi8vZ2l0aHViLmNvbS95YWhvby9wdXJlL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcXG4qLy8qIVxcbm5vcm1hbGl6ZS5jc3Mgdl4zLjAgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemVcXG5Db3B5cmlnaHQgKGMpIE5pY29sYXMgR2FsbGFnaGVyIGFuZCBKb25hdGhhbiBOZWFsXFxuKi8vKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9odG1se2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixtZW51LG5hdixzZWN0aW9uLHN1bW1hcnl7ZGlzcGxheTpibG9ja31hdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWE6YWN0aXZlLGE6aG92ZXJ7b3V0bGluZTowfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206MXB4IGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDo3MDB9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9bWFya3tiYWNrZ3JvdW5kOiNmZjA7Y29sb3I6IzAwMH1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1cHt0b3A6LS41ZW19c3Vie2JvdHRvbTotLjI1ZW19aW1ne2JvcmRlcjowfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWhyey1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowfXByZXtvdmVyZmxvdzphdXRvfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O21hcmdpbjowfWJ1dHRvbntvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1idXR0b24saHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1yZXNldF0saW5wdXRbdHlwZT1zdWJtaXRdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Y3Vyc29yOnBvaW50ZXJ9YnV0dG9uW2Rpc2FibGVkXSxodG1sIGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowfWlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbH1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99aW5wdXRbdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fWlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9ZmllbGRzZXR7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7bWFyZ2luOjAgMnB4O3BhZGRpbmc6LjM1ZW0gLjYyNWVtIC43NWVtfWxlZ2VuZHtib3JkZXI6MDtwYWRkaW5nOjB9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31vcHRncm91cHtmb250LXdlaWdodDo3MDB9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9dGQsdGh7cGFkZGluZzowfS5oaWRkZW4sW2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH0ucHVyZS1pbWd7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG87ZGlzcGxheTpibG9ja30ucHVyZS1ne2xldHRlci1zcGFjaW5nOi0uMzFlbTt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZXNwZWVkO2ZvbnQtZmFtaWx5OkZyZWVTYW5zLEFyaW1vLFxcXCJEcm9pZCBTYW5zXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjstd2Via2l0LWZsZXgtZmxvdzpyb3cgd3JhcDtkaXNwbGF5Oi1tcy1mbGV4Ym94Oy1tcy1mbGV4LWZsb3c6cm93IHdyYXA7LW1zLWFsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDstd2Via2l0LWFsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9Lm9wZXJhLW9ubHkgOi1vLXByZWZvY3VzLC5wdXJlLWd7d29yZC1zcGFjaW5nOi0uNDNlbX0ucHVyZS11e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt2ZXJ0aWNhbC1hbGlnbjp0b3A7dGV4dC1yZW5kZXJpbmc6YXV0b30ucHVyZS1nIFtjbGFzcyo9XFxcInB1cmUtdVxcXCJde2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWZ9LnB1cmUtdS0xLC5wdXJlLXUtMS0xLC5wdXJlLXUtMS0xMiwucHVyZS11LTEtMiwucHVyZS11LTEtMjQsLnB1cmUtdS0xLTMsLnB1cmUtdS0xLTQsLnB1cmUtdS0xLTUsLnB1cmUtdS0xLTYsLnB1cmUtdS0xLTgsLnB1cmUtdS0xMC0yNCwucHVyZS11LTExLTEyLC5wdXJlLXUtMTEtMjQsLnB1cmUtdS0xMi0yNCwucHVyZS11LTEzLTI0LC5wdXJlLXUtMTQtMjQsLnB1cmUtdS0xNS0yNCwucHVyZS11LTE2LTI0LC5wdXJlLXUtMTctMjQsLnB1cmUtdS0xOC0yNCwucHVyZS11LTE5LTI0LC5wdXJlLXUtMi0yNCwucHVyZS11LTItMywucHVyZS11LTItNSwucHVyZS11LTIwLTI0LC5wdXJlLXUtMjEtMjQsLnB1cmUtdS0yMi0yNCwucHVyZS11LTIzLTI0LC5wdXJlLXUtMjQtMjQsLnB1cmUtdS0zLTI0LC5wdXJlLXUtMy00LC5wdXJlLXUtMy01LC5wdXJlLXUtMy04LC5wdXJlLXUtNC0yNCwucHVyZS11LTQtNSwucHVyZS11LTUtMTIsLnB1cmUtdS01LTI0LC5wdXJlLXUtNS01LC5wdXJlLXUtNS02LC5wdXJlLXUtNS04LC5wdXJlLXUtNi0yNCwucHVyZS11LTctMTIsLnB1cmUtdS03LTI0LC5wdXJlLXUtNy04LC5wdXJlLXUtOC0yNCwucHVyZS11LTktMjR7ZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3ZlcnRpY2FsLWFsaWduOnRvcDt0ZXh0LXJlbmRlcmluZzphdXRvfS5wdXJlLXUtMS0yNHt3aWR0aDo0LjE2NjclfS5wdXJlLXUtMS0xMiwucHVyZS11LTItMjR7d2lkdGg6OC4zMzMzJX0ucHVyZS11LTEtOCwucHVyZS11LTMtMjR7d2lkdGg6MTIuNSV9LnB1cmUtdS0xLTYsLnB1cmUtdS00LTI0e3dpZHRoOjE2LjY2NjclfS5wdXJlLXUtMS01e3dpZHRoOjIwJX0ucHVyZS11LTUtMjR7d2lkdGg6MjAuODMzMyV9LnB1cmUtdS0xLTQsLnB1cmUtdS02LTI0e3dpZHRoOjI1JX0ucHVyZS11LTctMjR7d2lkdGg6MjkuMTY2NyV9LnB1cmUtdS0xLTMsLnB1cmUtdS04LTI0e3dpZHRoOjMzLjMzMzMlfS5wdXJlLXUtMy04LC5wdXJlLXUtOS0yNHt3aWR0aDozNy41JX0ucHVyZS11LTItNXt3aWR0aDo0MCV9LnB1cmUtdS0xMC0yNCwucHVyZS11LTUtMTJ7d2lkdGg6NDEuNjY2NyV9LnB1cmUtdS0xMS0yNHt3aWR0aDo0NS44MzMzJX0ucHVyZS11LTEtMiwucHVyZS11LTEyLTI0e3dpZHRoOjUwJX0ucHVyZS11LTEzLTI0e3dpZHRoOjU0LjE2NjclfS5wdXJlLXUtMTQtMjQsLnB1cmUtdS03LTEye3dpZHRoOjU4LjMzMzMlfS5wdXJlLXUtMy01e3dpZHRoOjYwJX0ucHVyZS11LTE1LTI0LC5wdXJlLXUtNS04e3dpZHRoOjYyLjUlfS5wdXJlLXUtMTYtMjQsLnB1cmUtdS0yLTN7d2lkdGg6NjYuNjY2NyV9LnB1cmUtdS0xNy0yNHt3aWR0aDo3MC44MzMzJX0ucHVyZS11LTE4LTI0LC5wdXJlLXUtMy00e3dpZHRoOjc1JX0ucHVyZS11LTE5LTI0e3dpZHRoOjc5LjE2NjclfS5wdXJlLXUtNC01e3dpZHRoOjgwJX0ucHVyZS11LTIwLTI0LC5wdXJlLXUtNS02e3dpZHRoOjgzLjMzMzMlfS5wdXJlLXUtMjEtMjQsLnB1cmUtdS03LTh7d2lkdGg6ODcuNSV9LnB1cmUtdS0xMS0xMiwucHVyZS11LTIyLTI0e3dpZHRoOjkxLjY2NjclfS5wdXJlLXUtMjMtMjR7d2lkdGg6OTUuODMzMyV9LnB1cmUtdS0xLC5wdXJlLXUtMS0xLC5wdXJlLXUtMjQtMjQsLnB1cmUtdS01LTV7d2lkdGg6MTAwJX0ucHVyZS1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1kcmFnOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2JvcmRlcjoxcHggc29saWQgIzk5OTtib3JkZXI6bm9uZSB0cmFuc3BhcmVudDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucHVyZS1idXR0b24taG92ZXIsLnB1cmUtYnV0dG9uOmZvY3VzLC5wdXJlLWJ1dHRvbjpob3ZlcntmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMwMDAwMDAwMCcsIGVuZENvbG9yc3RyPScjMWEwMDAwMDAnLCBHcmFkaWVudFR5cGU9MCk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhciwwIDAsMCAxMDAlLGZyb20odHJhbnNwYXJlbnQpLGNvbG9yLXN0b3AoNDAlLHJnYmEoMCwwLDAsLjA1KSksdG8ocmdiYSgwLDAsMCwuMSkpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LHJnYmEoMCwwLDAsLjA1KSA0MCUscmdiYSgwLDAsMCwuMSkpO2JhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjA1KSAwLHJnYmEoMCwwLDAsLjEpKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKX0ucHVyZS1idXR0b246Zm9jdXN7b3V0bGluZTowfS5wdXJlLWJ1dHRvbi1hY3RpdmUsLnB1cmUtYnV0dG9uOmFjdGl2ZXtib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSkgaW5zZXQsMCAwIDZweCByZ2JhKDAsMCwwLC4yKSBpbnNldH0ucHVyZS1idXR0b24tZGlzYWJsZWQsLnB1cmUtYnV0dG9uLWRpc2FibGVkOmFjdGl2ZSwucHVyZS1idXR0b24tZGlzYWJsZWQ6Zm9jdXMsLnB1cmUtYnV0dG9uLWRpc2FibGVkOmhvdmVyLC5wdXJlLWJ1dHRvbltkaXNhYmxlZF17Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1pbWFnZTpub25lO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZD1mYWxzZSk7ZmlsdGVyOmFscGhhKG9wYWNpdHk9NDApOy1raHRtbC1vcGFjaXR5Oi40Oy1tb3otb3BhY2l0eTouNDtvcGFjaXR5Oi40O2N1cnNvcjpub3QtYWxsb3dlZDtib3gtc2hhZG93Om5vbmV9LnB1cmUtYnV0dG9uLWhpZGRlbntkaXNwbGF5Om5vbmV9LnB1cmUtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXI6MH0ucHVyZS1idXR0b24tcHJpbWFyeSwucHVyZS1idXR0b24tc2VsZWN0ZWQsYS5wdXJlLWJ1dHRvbi1wcmltYXJ5LGEucHVyZS1idXR0b24tc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDA3OGU3O2NvbG9yOiNmZmZ9LnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNvbG9yXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZV0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWVdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1lbWFpbF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPW1vbnRoXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9bnVtYmVyXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1zZWFyY2hdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZWxdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGltZV0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXVybF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXdlZWtdLC5wdXJlLWZvcm0gc2VsZWN0LC5wdXJlLWZvcm0gdGV4dGFyZWF7cGFkZGluZzouNWVtIC42ZW07ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggM3B4ICNkZGQ7Ym9yZGVyLXJhZGl1czo0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucHVyZS1mb3JtIGlucHV0Om5vdChbdHlwZV0pe3BhZGRpbmc6LjVlbSAuNmVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93Omluc2V0IDAgMXB4IDNweCAjZGRkO2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucHVyZS1mb3JtIGlucHV0W3R5cGU9Y29sb3Jde3BhZGRpbmc6LjJlbSAuNWVtfS5wdXJlLWZvcm0gaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNvbG9yXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWVdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPW1vbnRoXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZWxdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9dGltZV06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXVybF06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXdlZWtdOmZvY3VzLC5wdXJlLWZvcm0gc2VsZWN0OmZvY3VzLC5wdXJlLWZvcm0gdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTowO2JvcmRlci1jb2xvcjojMTI5RkVBfS5wdXJlLWZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWZpbGVdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1yYWRpb106Zm9jdXN7b3V0bGluZTojMTI5RkVBIGF1dG8gMXB4fS5wdXJlLWZvcm0gLnB1cmUtY2hlY2tib3gsLnB1cmUtZm9ybSAucHVyZS1yYWRpb3ttYXJnaW46LjVlbSAwO2Rpc3BsYXk6YmxvY2t9LnB1cmUtZm9ybSBpbnB1dDpub3QoW3R5cGVdKVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNvbG9yXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGVdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWVdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZW1haWxdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9bW9udGhdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9bnVtYmVyXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXBhc3N3b3JkXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXNlYXJjaF1bZGlzYWJsZWRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZWxdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGV4dF1bZGlzYWJsZWRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10aW1lXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXVybF1bZGlzYWJsZWRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT13ZWVrXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBzZWxlY3RbZGlzYWJsZWRdLC5wdXJlLWZvcm0gdGV4dGFyZWFbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZDtiYWNrZ3JvdW5kLWNvbG9yOiNlYWVkZWQ7Y29sb3I6I2NhZDJkM30ucHVyZS1mb3JtIGlucHV0W3JlYWRvbmx5XSwucHVyZS1mb3JtIHNlbGVjdFtyZWFkb25seV0sLnB1cmUtZm9ybSB0ZXh0YXJlYVtyZWFkb25seV17YmFja2dyb3VuZC1jb2xvcjojZWVlO2NvbG9yOiM3Nzc7Ym9yZGVyLWNvbG9yOiNjY2N9LnB1cmUtZm9ybSBpbnB1dDpmb2N1czppbnZhbGlkLC5wdXJlLWZvcm0gc2VsZWN0OmZvY3VzOmludmFsaWQsLnB1cmUtZm9ybSB0ZXh0YXJlYTpmb2N1czppbnZhbGlke2NvbG9yOiNiOTRhNDg7Ym9yZGVyLWNvbG9yOiNlOTMyMmR9LnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1czppbnZhbGlkOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1maWxlXTpmb2N1czppbnZhbGlkOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1yYWRpb106Zm9jdXM6aW52YWxpZDpmb2N1c3tvdXRsaW5lLWNvbG9yOiNlOTMyMmR9LnB1cmUtZm9ybSBzZWxlY3R7aGVpZ2h0OjIuMjVlbTtib3JkZXI6MXB4IHNvbGlkICNjY2M7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5wdXJlLWZvcm0gc2VsZWN0W211bHRpcGxlXXtoZWlnaHQ6YXV0b30ucHVyZS1mb3JtIGZpZWxkc2V0e21hcmdpbjowO3BhZGRpbmc6LjM1ZW0gMCAuNzVlbTtib3JkZXI6MH0ucHVyZS1mb3JtIGxlZ2VuZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzouM2VtIDA7bWFyZ2luLWJvdHRvbTouM2VtO2NvbG9yOiMzMzM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTVlNX0ucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXQ6bm90KFt0eXBlXSksLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9Y29sb3JdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPWRhdGVdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT1kYXRldGltZV0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9ZW1haWxdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPWZpbGVdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPW1vbnRoXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT1udW1iZXJdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT1zZWFyY2hdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPXRlbF0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9dGV4dF0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9dGltZV0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9dXJsXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT13ZWVrXSwucHVyZS1mb3JtLXN0YWNrZWQgbGFiZWwsLnB1cmUtZm9ybS1zdGFja2VkIHNlbGVjdCwucHVyZS1mb3JtLXN0YWNrZWQgdGV4dGFyZWF7ZGlzcGxheTpibG9jazttYXJnaW46LjI1ZW0gMH0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtaGVscC1pbmxpbmUsLnB1cmUtZm9ybS1hbGlnbmVkIGlucHV0LC5wdXJlLWZvcm0tYWxpZ25lZCBzZWxlY3QsLnB1cmUtZm9ybS1hbGlnbmVkIHRleHRhcmVhLC5wdXJlLWZvcm0tbWVzc2FnZS1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5wdXJlLWZvcm0tYWxpZ25lZCB0ZXh0YXJlYXt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnB1cmUtZm9ybS1hbGlnbmVkIC5wdXJlLWNvbnRyb2wtZ3JvdXB7bWFyZ2luLWJvdHRvbTouNWVtfS5wdXJlLWZvcm0tYWxpZ25lZCAucHVyZS1jb250cm9sLWdyb3VwIGxhYmVse3RleHQtYWxpZ246cmlnaHQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjEwZW07bWFyZ2luOjAgMWVtIDAgMH0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtY29udHJvbHN7bWFyZ2luOjEuNWVtIDAgMCAxMWVtfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtcm91bmRlZCwucHVyZS1mb3JtIGlucHV0LnB1cmUtaW5wdXQtcm91bmRlZHtib3JkZXItcmFkaXVzOjJlbTtwYWRkaW5nOi41ZW0gMWVtfS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgZmllbGRzZXR7bWFyZ2luLWJvdHRvbToxMHB4fS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgaW5wdXQsLnB1cmUtZm9ybSAucHVyZS1ncm91cCB0ZXh0YXJlYXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTBweDttYXJnaW46MCAwIC0xcHg7Ym9yZGVyLXJhZGl1czowO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4fS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgaW5wdXQ6Zm9jdXMsLnB1cmUtZm9ybSAucHVyZS1ncm91cCB0ZXh0YXJlYTpmb2N1c3t6LWluZGV4OjN9LnB1cmUtZm9ybSAucHVyZS1ncm91cCBpbnB1dDpmaXJzdC1jaGlsZCwucHVyZS1mb3JtIC5wdXJlLWdyb3VwIHRleHRhcmVhOmZpcnN0LWNoaWxke3RvcDoxcHg7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMDttYXJnaW46MH0ucHVyZS1mb3JtIC5wdXJlLWdyb3VwIGlucHV0OmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQsLnB1cmUtZm9ybSAucHVyZS1ncm91cCB0ZXh0YXJlYTpmaXJzdC1jaGlsZDpsYXN0LWNoaWxke3RvcDoxcHg7Ym9yZGVyLXJhZGl1czo0cHg7bWFyZ2luOjB9LnB1cmUtZm9ybSAucHVyZS1ncm91cCBpbnB1dDpsYXN0LWNoaWxkLC5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgdGV4dGFyZWE6bGFzdC1jaGlsZHt0b3A6LTJweDtib3JkZXItcmFkaXVzOjAgMCA0cHggNHB4O21hcmdpbjowfS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgYnV0dG9ue21hcmdpbjouMzVlbSAwfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtMXt3aWR0aDoxMDAlfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtMi0ze3dpZHRoOjY2JX0ucHVyZS1mb3JtIC5wdXJlLWlucHV0LTEtMnt3aWR0aDo1MCV9LnB1cmUtZm9ybSAucHVyZS1pbnB1dC0xLTN7d2lkdGg6MzMlfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtMS00e3dpZHRoOjI1JX0ucHVyZS1mb3JtIC5wdXJlLWhlbHAtaW5saW5lLC5wdXJlLWZvcm0tbWVzc2FnZS1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0Oi4zZW07Y29sb3I6IzY2Njt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Zm9udC1zaXplOi44NzVlbX0ucHVyZS1mb3JtLW1lc3NhZ2V7ZGlzcGxheTpibG9jaztjb2xvcjojNjY2O2ZvbnQtc2l6ZTouODc1ZW19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDo0ODBweCl7LnB1cmUtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRde21hcmdpbjouN2VtIDAgMH0ucHVyZS1mb3JtIGlucHV0Om5vdChbdHlwZV0pLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1jb2xvcl0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGVdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGV0aW1lXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZW1haWxdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1tb250aF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPW51bWJlcl0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXBhc3N3b3JkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9c2VhcmNoXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGVsXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGV4dF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXRpbWVdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT11cmxdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT13ZWVrXSwucHVyZS1mb3JtIGxhYmVse21hcmdpbi1ib3R0b206LjNlbTtkaXNwbGF5OmJsb2NrfS5wdXJlLWdyb3VwIGlucHV0Om5vdChbdHlwZV0pLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9Y29sb3JdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9ZGF0ZV0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1kYXRldGltZV0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1lbWFpbF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1tb250aF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1udW1iZXJdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9cGFzc3dvcmRdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9c2VhcmNoXSwucHVyZS1ncm91cCBpbnB1dFt0eXBlPXRlbF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XSwucHVyZS1ncm91cCBpbnB1dFt0eXBlPXRpbWVdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9dXJsXSwucHVyZS1ncm91cCBpbnB1dFt0eXBlPXdlZWtde21hcmdpbi1ib3R0b206MH0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtY29udHJvbC1ncm91cCBsYWJlbHttYXJnaW4tYm90dG9tOi4zZW07dGV4dC1hbGlnbjpsZWZ0O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtY29udHJvbHN7bWFyZ2luOjEuNWVtIDAgMH0ucHVyZS1mb3JtIC5wdXJlLWhlbHAtaW5saW5lLC5wdXJlLWZvcm0tbWVzc2FnZSwucHVyZS1mb3JtLW1lc3NhZ2UtaW5saW5le2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi43NWVtO3BhZGRpbmc6LjJlbSAwIC44ZW19fS5wdXJlLW1lbnV7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5wdXJlLW1lbnUtZml4ZWR7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3otaW5kZXg6M30ucHVyZS1tZW51LWl0ZW0sLnB1cmUtbWVudS1saXN0e3Bvc2l0aW9uOnJlbGF0aXZlfS5wdXJlLW1lbnUtbGlzdHtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowfS5wdXJlLW1lbnUtaXRlbXtwYWRkaW5nOjA7bWFyZ2luOjA7aGVpZ2h0OjEwMCV9LnB1cmUtbWVudS1oZWFkaW5nLC5wdXJlLW1lbnUtbGlua3tkaXNwbGF5OmJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO3doaXRlLXNwYWNlOm5vd3JhcH0ucHVyZS1tZW51LWhvcml6b250YWx7d2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpub3dyYXB9LnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtbGlzdHtkaXNwbGF5OmlubGluZS1ibG9ja30ucHVyZS1tZW51LWhvcml6b250YWwgLnB1cmUtbWVudS1oZWFkaW5nLC5wdXJlLW1lbnUtaG9yaXpvbnRhbCAucHVyZS1tZW51LWl0ZW0sLnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtc2VwYXJhdG9ye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnB1cmUtbWVudS1pdGVtIC5wdXJlLW1lbnUtaXRlbXtkaXNwbGF5OmJsb2NrfS5wdXJlLW1lbnUtY2hpbGRyZW57ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTAwJTt0b3A6MDttYXJnaW46MDtwYWRkaW5nOjA7ei1pbmRleDozfS5wdXJlLW1lbnUtaG9yaXpvbnRhbCAucHVyZS1tZW51LWNoaWxkcmVue2xlZnQ6MDt0b3A6YXV0bzt3aWR0aDppbmhlcml0fS5wdXJlLW1lbnUtYWN0aXZlPi5wdXJlLW1lbnUtY2hpbGRyZW4sLnB1cmUtbWVudS1hbGxvdy1ob3Zlcjpob3Zlcj4ucHVyZS1tZW51LWNoaWxkcmVue2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGV9LnB1cmUtbWVudS1oYXMtY2hpbGRyZW4+LnB1cmUtbWVudS1saW5rOmFmdGVye3BhZGRpbmctbGVmdDouNWVtO2NvbnRlbnQ6XFxcIlxcXFwyNUI4XFxcIjtmb250LXNpemU6c21hbGx9LnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtaGFzLWNoaWxkcmVuPi5wdXJlLW1lbnUtbGluazphZnRlcntjb250ZW50OlxcXCJcXFxcMjVCRVxcXCJ9LnB1cmUtbWVudS1zY3JvbGxhYmxle292ZXJmbG93LXk6c2Nyb2xsO292ZXJmbG93LXg6aGlkZGVufS5wdXJlLW1lbnUtc2Nyb2xsYWJsZSAucHVyZS1tZW51LWxpc3R7ZGlzcGxheTpibG9ja30ucHVyZS1tZW51LWhvcml6b250YWwucHVyZS1tZW51LXNjcm9sbGFibGUgLnB1cmUtbWVudS1saXN0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5wdXJlLW1lbnUtaG9yaXpvbnRhbC5wdXJlLW1lbnUtc2Nyb2xsYWJsZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3cteTpoaWRkZW47b3ZlcmZsb3cteDphdXRvOy1tcy1vdmVyZmxvdy1zdHlsZTpub25lOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3BhZGRpbmc6LjVlbSAwfS5wdXJlLW1lbnUtaG9yaXpvbnRhbC5wdXJlLW1lbnUtc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5wdXJlLW1lbnUtc2VwYXJhdG9ye2JhY2tncm91bmQtY29sb3I6I2NjYztoZWlnaHQ6MXB4O21hcmdpbjouM2VtIDB9LnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtc2VwYXJhdG9ye3dpZHRoOjFweDtoZWlnaHQ6MS4zZW07bWFyZ2luOjAgLjNlbX0ucHVyZS1tZW51LWhlYWRpbmd7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiM1NjVkNjR9LnB1cmUtbWVudS1saW5re2NvbG9yOiM3Nzd9LnB1cmUtbWVudS1jaGlsZHJlbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnB1cmUtbWVudS1kaXNhYmxlZCwucHVyZS1tZW51LWhlYWRpbmcsLnB1cmUtbWVudS1saW5re3BhZGRpbmc6LjVlbSAxZW19LnB1cmUtbWVudS1kaXNhYmxlZHtvcGFjaXR5Oi41fS5wdXJlLW1lbnUtZGlzYWJsZWQgLnB1cmUtbWVudS1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnB1cmUtbWVudS1hY3RpdmU+LnB1cmUtbWVudS1saW5rLC5wdXJlLW1lbnUtbGluazpmb2N1cywucHVyZS1tZW51LWxpbms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5wdXJlLW1lbnUtc2VsZWN0ZWQgLnB1cmUtbWVudS1saW5rLC5wdXJlLW1lbnUtc2VsZWN0ZWQgLnB1cmUtbWVudS1saW5rOnZpc2l0ZWR7Y29sb3I6IzAwMH0ucHVyZS10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtlbXB0eS1jZWxsczpzaG93O2JvcmRlcjoxcHggc29saWQgI2NiY2JjYn0ucHVyZS10YWJsZSBjYXB0aW9ue2NvbG9yOiMwMDA7Zm9udDppdGFsaWMgODUlLzEgYXJpYWwsc2Fucy1zZXJpZjtwYWRkaW5nOjFlbSAwO3RleHQtYWxpZ246Y2VudGVyfS5wdXJlLXRhYmxlIHRkLC5wdXJlLXRhYmxlIHRoe2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2JjYmNiO2JvcmRlci13aWR0aDowIDAgMCAxcHg7Zm9udC1zaXplOmluaGVyaXQ7bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOi41ZW0gMWVtfS5wdXJlLXRhYmxlIHRkOmZpcnN0LWNoaWxkLC5wdXJlLXRhYmxlIHRoOmZpcnN0LWNoaWxke2JvcmRlci1sZWZ0LXdpZHRoOjB9LnB1cmUtdGFibGUgdGhlYWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOiMwMDA7dGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0ucHVyZS10YWJsZSB0ZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wdXJlLXRhYmxlLW9kZCB0ZCwucHVyZS10YWJsZS1zdHJpcGVkIHRyOm50aC1jaGlsZCgybi0xKSB0ZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LnB1cmUtdGFibGUtYm9yZGVyZWQgdGR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NiY2JjYn0ucHVyZS10YWJsZS1ib3JkZXJlZCB0Ym9keT50cjpsYXN0LWNoaWxkPnRke2JvcmRlci1ib3R0b20td2lkdGg6MH0ucHVyZS10YWJsZS1ob3Jpem9udGFsIHRkLC5wdXJlLXRhYmxlLWhvcml6b250YWwgdGh7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NiY2JjYn0ucHVyZS10YWJsZS1ob3Jpem9udGFsIHRib2R5PnRyOmxhc3QtY2hpbGQ+dGR7Ym9yZGVyLWJvdHRvbS13aWR0aDowfWJvZHl7bWFyZ2luOjA7cGFkZGluZzowfSp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWJvZHl7bGluZS1oZWlnaHQ6MS43ZW07Y29sb3I6IzdmOGM4ZDtmb250LXNpemU6MTNweH1oMSxoMixoMyxoNCxoNSxoNixsYWJlbHtjb2xvcjojMzQ0OTVlfS5wdXJlLWltZy1yZXNwb25zaXZle21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5sLWJveHtwYWRkaW5nOjFlbX0ubC1ib3gtbHJne3BhZGRpbmc6MmVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpfS5pcy1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnB1cmUtZm9ybSBsYWJlbHttYXJnaW46MWVtIDAgMDtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEwMCV9LnB1cmUtZm9ybSBpbnB1dFt0eXBlXXtib3JkZXI6MnB4IHNvbGlkICNkZGQ7Ym94LXNoYWRvdzpub25lO2ZvbnQtc2l6ZToxMDAlO3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToxZW19LnB1cmUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzFmOGRkNjtjb2xvcjojZmZmO3BhZGRpbmc6LjVlbSAyZW07Ym9yZGVyLXJhZGl1czo1cHh9YS5wdXJlLWJ1dHRvbi1wcmltYXJ5e2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojMWY4ZGQ2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxMjAlfS5zcGxhc2gtY29udGFpbmVye2JhY2tncm91bmQ6IzFmOGRkNjt6LWluZGV4OjE7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEwMCU7aGVpZ2h0Ojg4JTt0b3A6MDtsZWZ0OjA7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50fS5zcGxhc2h7d2lkdGg6ODAlO2hlaWdodDo1MCU7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMHB4O2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uc3BsYXNoLWhlYWR7Zm9udC1zaXplOjIwcHg7Y29sb3I6I2ZmZjtib3JkZXI6M3B4IHNvbGlkICNmZmY7cGFkZGluZzoxZW0gMS42ZW07Zm9udC13ZWlnaHQ6MTAwO2JvcmRlci1yYWRpdXM6NXB4O2xpbmUtaGVpZ2h0OjFlbX0uc3BsYXNoLXN1YmhlYWR7Y29sb3I6I2ZmZjtsZXR0ZXItc3BhY2luZzouMDVlbTtvcGFjaXR5Oi44fS5jb250ZW50LXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjg3JTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTIlO3otaW5kZXg6MjtiYWNrZ3JvdW5kOiNmZmZ9LmNvbnRlbnQtaGVhZHtmb250LXdlaWdodDo0MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi4xZW07bWFyZ2luOjJlbSAwIDFlbX0uY29udGVudC1oZWFkLXJpYmJvbntjb2xvcjojZmZmfS5jb250ZW50LXN1YmhlYWR7Y29sb3I6IzFmOGRkNn0uY29udGVudC1zdWJoZWFkIGl7bWFyZ2luLXJpZ2h0OjdweH0ucmliYm9ue2JhY2tncm91bmQ6IzJkM2U1MDtjb2xvcjojYWFhfS5mb290ZXJ7YmFja2dyb3VuZDojMTExfUBtZWRpYSAobWluLXdpZHRoOjQ4ZW0pe2JvZHl7Zm9udC1zaXplOjE2cHh9LmNvbnRlbnR7cGFkZGluZzoxZW19LmNvbnRlbnQuc2xpZGUtY29udGFpbmVye3BhZGRpbmc6MH0uc3BsYXNoLWhlYWR7Zm9udC1zaXplOjI1MCV9LmwtYm94LWxyZ3tib3JkZXI6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NzhlbSl7LnNwbGFzaC1oZWFke2ZvbnQtc2l6ZTozMDAlfX1cIjsgKHJlcXVpcmUoXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwiY2xpZW50L2FwcC5jc3NcIn0pKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGRpdiBpZD1cXFwiYXBwXFxcIj5cXG4gIDxwPlxcbiA8L3A+XFxuICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXG4gIDxoMT5IZWxsbzwvaDE+XFxuICA8aDE+e3ttc2d9fTwvaDE+XFxuXFxuICA8Y29tcC1iPjwvY29tcC1iPlxcbiAgPGNvdW50ZXI+PC9jb3VudGVyPlxcbjwvZGl2PiAtLT5cXG48c3R5bGUgbGFuZz1cXFwic3R5bHVzXFxcIiBzcmM9XFxcIi4vYXBwLnN0eWxcXFwiPjwvc3R5bGU+XFxuPGRpdj5cXG4gIDxoZWFkZXItbmF2PjwvaGVhZGVyLW5hdj5cXG4gIDwhLS0gdXNlIHJvdXRlci12aWV3IGVsZW1lbnQgYXMgcm91dGUgb3V0bGV0IC0tPlxcbiAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxuPC9kaXY+XFxuXCI7XG4iLCIvLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIGRhdGEgKCkge1xuLy8gICAgIHJldHVybiB7IGNvdW50OiAwIH1cbi8vICAgfSxcbi8vXG4vLyAgIHJlYWR5ICgpIHtcbi8vICAgICB0aGlzLmhhbmRsZSA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgIHRoaXMuY291bnQrK1xuLy8gICAgIH0sIDEwMDApXG4vLyAgIH0sXG4vL1xuLy8gICBkZXN0cm95ZWQgKCkge1xuLy8gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGUpXG4vLyAgIH1cbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKVxufVxuXG5jb25zb2xlLmxvZygnaGVsbG8gZnJvbSAnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgPHA+SSBhbSBhIENvdW50ZXIgQ29tcG9uZW50LiBFZGl0IG1lIGluIGRldiBtb2RlLjwvcD5cXG4gIDxwIGNsYXNzPVxcXCJjb3VudFxcXCI+Q3VycmVudCBjb3VudDoge3tjb3VudH19PC9wPlxcbjwvZGl2PlxcblwiO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVyblxuICAgICAgbXNnOiAnSGVsbG8gZnJvbSBDb21wb25lbnQgQUFBISdcbiAgfSxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3RlciBsLWJveCBpcy1jZW50ZXJcXFwiPlxcbiAgICBUaGlzIGlzIHRoZSBmb290ZXJcXG48L2Rpdj5cXG5cIjtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm5cbiAgICAgIG1zZzogJ0hlbGxvIGZyb20gQ29tcG9uZW50IEhvbWUhJ1xuICB9LFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJylcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaG9tZS1tZW51IHB1cmUtbWVudSBwdXJlLW1lbnUtaG9yaXpvbnRhbCBwdXJlLW1lbnUtZml4ZWRcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInB1cmUtbWVudS1oZWFkaW5nIGxvZ29cXFwiIHYtbGluaz1cXFwieyBwYXRoOiAnLycgfVxcXCI+PGltZyBjbGFzcz1cXFwiaGVhZGVyIGxvZ29cXFwiIHNyYz1cXFwiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qZWZlLWlvL2ltYWdlL3VwbG9hZC92MTQ0NzI3MzAzOC9lcGljX2xvZ29fYmxhY2tfb3B0aW1pemVkX3Vvanpxei5zdmdcXFwiIGFsdD1cXFwiXFxcIiAvPjwvYT5cXG5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicHVyZS1tZW51LWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicHVyZS1tZW51LWl0ZW0gcHVyZS1tZW51LXNlbGVjdGVkXFxcIj48YSB2LWxpbms9XFxcInsgcGF0aDogJy8nIH1cXFwiIGNsYXNzPVxcXCJwdXJlLW1lbnUtbGlua1xcXCI+SG9tZTwvYT48L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicHVyZS1tZW51LWl0ZW1cXFwiPjxhIHYtbGluaz1cXFwieyBwYXRoOiAnL2NvbGxlY3Rpb24nIH1cXFwiIGNsYXNzPVxcXCJwdXJlLW1lbnUtbGlua1xcXCI+Q29sbGVjdGlvbjwvYT48L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicHVyZS1tZW51LWl0ZW1cXFwiPjxhIHYtbGluaz1cXFwieyBwYXRoOiAnL2Fib3V0JyB9XFxcIiBjbGFzcz1cXFwicHVyZS1tZW51LWxpbmtcXFwiPkFib3V0PC9hPjwvbGk+XFxuICAgICAgICAgICAgPCEtLSA8bGkgY2xhc3M9XFxcInB1cmUtbWVudS1pdGVtXFxcIj48YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwicHVyZS1tZW51LWxpbmtcXFwiPlNpZ24gVXA8L2E+PC9saT4gLS0+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogJzxkaXY+VGhpcyBpcyBBYm91dDwvZGl2Pidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJyksXG4gIGNvbXBvbmVudHM6IHtcblxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudCBzbGlkZS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcbiAgICAgICAgPCEtLSA8aDEgY2xhc3M9XFxcInNwbGFzaC1oZWFkXFxcIj5CaWcgQm9sZCBUZXh0PC9oMT5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJzcGxhc2gtc3ViaGVhZFxcXCI+XFxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXFxuICAgICAgICA8L3A+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwOi8vcHVyZWNzcy5pb1xcXCIgY2xhc3M9XFxcInB1cmUtYnV0dG9uIHB1cmUtYnV0dG9uLXByaW1hcnlcXFwiPkdldCBTdGFydGVkPC9hPlxcbiAgICAgICAgPC9wPiAtLT5cXG5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwic2xpZGVzXFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJyYWRpby1idG5cXFwiIGlkPVxcXCJpbWctMVxcXCIgY2hlY2tlZCAvPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgXFx0XFx0PGRpdiBjbGFzcz1cXFwic2xpZGVcXFwiPlxcbiAgICAgIFxcdFxcdFxcdDxpbWcgc3JjPVxcXCJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2plZmUtaW8vaW1hZ2UvdXBsb2FkL3YxNDQzNjE1MTA5LzUxOTM2NzI5NjVfNzIzOTE2ZGEwYV9iX2pzemhzMy5qcGdcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJuYXZcXFwiPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy02XFxcIiBjbGFzcz1cXFwicHJldlxcXCI+JiN4MjAzOTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy0yXFxcIiBjbGFzcz1cXFwibmV4dFxcXCI+JiN4MjAzYTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInJhZGlvLWJ0blxcXCIgaWQ9XFxcImltZy0yXFxcIiAvPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2plZmUtaW8vaW1hZ2UvdXBsb2FkL3YxNDQzNjE1MTA5LzUxOTM2NzI5NjVfNzIzOTE2ZGEwYV9iX2pzemhzMy5qcGdcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJuYXZcXFwiPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy0xXFxcIiBjbGFzcz1cXFwicHJldlxcXCI+JiN4MjAzOTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy0zXFxcIiBjbGFzcz1cXFwibmV4dFxcXCI+JiN4MjAzYTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInJhZGlvLWJ0blxcXCIgaWQ9XFxcImltZy0zXFxcIiAvPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vZmFybTkuc3RhdGljZmxpY2tyLmNvbS84MDY4LzgyNTA0Mzg1NzJfZDFhNTkxNzA3Ml96LmpwZ1xcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcIm5hdlxcXCI+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTJcXFwiIGNsYXNzPVxcXCJwcmV2XFxcIj4mI3gyMDM5OzwvbGFiZWw+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTRcXFwiIGNsYXNzPVxcXCJuZXh0XFxcIj4mI3gyMDNhOzwvbGFiZWw+XFxuICAgICAgXFx0XFx0PC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwicmFkaW8tYnRuXFxcIiBpZD1cXFwiaW1nLTRcXFwiIC8+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImh0dHA6Ly9mYXJtOS5zdGF0aWNmbGlja3IuY29tLzgwNjEvODIzNzI0NjgzM181NGQ4ZmEzN2YwX3ouanBnXFxcIiAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgXFx0XFx0PGRpdiBjbGFzcz1cXFwibmF2XFxcIj5cXG4gICAgICBcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpbWctM1xcXCIgY2xhc3M9XFxcInByZXZcXFwiPiYjeDIwMzk7PC9sYWJlbD5cXG4gICAgICBcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpbWctNVxcXCIgY2xhc3M9XFxcIm5leHRcXFwiPiYjeDIwM2E7PC9sYWJlbD5cXG4gICAgICBcXHRcXHQ8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJyYWRpby1idG5cXFwiIGlkPVxcXCJpbWctNVxcXCIgLz5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzbGlkZS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2xpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cDovL2Zhcm05LnN0YXRpY2ZsaWNrci5jb20vODA1NS84MDk4NzUwNjIzXzY2MjkyYTM1YzBfei5qcGdcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJuYXZcXFwiPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy00XFxcIiBjbGFzcz1cXFwicHJldlxcXCI+JiN4MjAzOTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy02XFxcIiBjbGFzcz1cXFwibmV4dFxcXCI+JiN4MjAzYTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInJhZGlvLWJ0blxcXCIgaWQ9XFxcImltZy02XFxcIiAvPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vZmFybTkuc3RhdGljZmxpY2tyLmNvbS84MTk1LzgwOTg3NTA3MDNfNzk3ZTEwMmRhMl96LmpwZ1xcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcIm5hdlxcXCI+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTVcXFwiIGNsYXNzPVxcXCJwcmV2XFxcIj4mI3gyMDM5OzwvbGFiZWw+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTFcXFwiIGNsYXNzPVxcXCJuZXh0XFxcIj4mI3gyMDNhOzwvbGFiZWw+XFxuICAgICAgXFx0XFx0PC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWRvdHNcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImltZy0xXFxcIiBjbGFzcz1cXFwibmF2LWRvdFxcXCIgaWQ9XFxcImltZy1kb3QtMVxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpbWctMlxcXCIgY2xhc3M9XFxcIm5hdi1kb3RcXFwiIGlkPVxcXCJpbWctZG90LTJcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1nLTNcXFwiIGNsYXNzPVxcXCJuYXYtZG90XFxcIiBpZD1cXFwiaW1nLWRvdC0zXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImltZy00XFxcIiBjbGFzcz1cXFwibmF2LWRvdFxcXCIgaWQ9XFxcImltZy1kb3QtNFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpbWctNVxcXCIgY2xhc3M9XFxcIm5hdi1kb3RcXFwiIGlkPVxcXCJpbWctZG90LTVcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1nLTZcXFwiIGNsYXNzPVxcXCJuYXYtZG90XFxcIiBpZD1cXFwiaW1nLWRvdC02XFxcIj48L2xhYmVsPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuXFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8aDIgY2xhc3M9XFxcImNvbnRlbnQtaGVhZCBpcy1jZW50ZXJcXFwiPkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdC48L2gyPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwdXJlLWdcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibC1ib3ggcHVyZS11LTEgcHVyZS11LW1kLTEtMiBwdXJlLXUtbGctMS00XFxcIj5cXG5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbnRlbnQtc3ViaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1yb2NrZXRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWQgUXVpY2tseVxcbiAgICAgICAgICAgIDwvaDM+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBlZ2V0IGVuaW0gZXUgbGVjdHVzIGZhdWNpYnVzIHZlc3RpYnVsdW0uIFN1c3BlbmRpc3NlIHNvZGFsZXMgcGVsbGVudGVzcXVlIGVsZW1lbnR1bS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImwtYm94IHB1cmUtdS0xIHB1cmUtdS1tZC0xLTIgcHVyZS11LWxnLTEtNFxcXCI+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb250ZW50LXN1YmhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbW9iaWxlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIFJlc3BvbnNpdmUgTGF5b3V0c1xcbiAgICAgICAgICAgIDwvaDM+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBlZ2V0IGVuaW0gZXUgbGVjdHVzIGZhdWNpYnVzIHZlc3RpYnVsdW0uIFN1c3BlbmRpc3NlIHNvZGFsZXMgcGVsbGVudGVzcXVlIGVsZW1lbnR1bS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImwtYm94IHB1cmUtdS0xIHB1cmUtdS1tZC0xLTIgcHVyZS11LWxnLTEtNFxcXCI+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb250ZW50LXN1YmhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGFyZ2VcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgTW9kdWxhclxcbiAgICAgICAgICAgIDwvaDM+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBlZ2V0IGVuaW0gZXUgbGVjdHVzIGZhdWNpYnVzIHZlc3RpYnVsdW0uIFN1c3BlbmRpc3NlIHNvZGFsZXMgcGVsbGVudGVzcXVlIGVsZW1lbnR1bS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImwtYm94IHB1cmUtdS0xIHB1cmUtdS1tZC0xLTIgcHVyZS11LWxnLTEtNFxcXCI+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb250ZW50LXN1YmhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2stc3F1YXJlLW9cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgUGxheXMgTmljZVxcbiAgICAgICAgICAgIDwvaDM+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBlZ2V0IGVuaW0gZXUgbGVjdHVzIGZhdWNpYnVzIHZlc3RpYnVsdW0uIFN1c3BlbmRpc3NlIHNvZGFsZXMgcGVsbGVudGVzcXVlIGVsZW1lbnR1bS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmliYm9uIGwtYm94LWxyZyBwdXJlLWdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsLWJveC1scmcgaXMtY2VudGVyIHB1cmUtdS0xIHB1cmUtdS1tZC0xLTIgcHVyZS11LWxnLTItNVxcXCI+XFxuXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0yIHB1cmUtdS1sZy0zLTVcXFwiPlxcblxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJjb250ZW50LWhlYWQgY29udGVudC1oZWFkLXJpYmJvblxcXCI+TGFib3JpcyBuaXNpIHV0IGFsaXF1aXAuPC9oMj5cXG5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxcbiAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcXG4gICAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kb1xcbiAgICAgICAgICAgIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yLlxcbiAgICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgPGgyIGNsYXNzPVxcXCJjb250ZW50LWhlYWQgaXMtY2VudGVyXFxcIj5Eb2xvcmUgbWFnbmEgYWxpcXVhLiBVaXMgYXV0ZSBpcnVyZS48L2gyPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwdXJlLWdcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibC1ib3gtbHJnIHB1cmUtdS0xIHB1cmUtdS1tZC0yLTVcXFwiPlxcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJwdXJlLWZvcm0gcHVyZS1mb3JtLXN0YWNrZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIj5Zb3VyIE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBOYW1lXFxcIj5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBFbWFpbFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIllvdXIgUGFzc3dvcmRcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJwdXJlLWJ1dHRvblxcXCI+U2lnbiBVcDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibC1ib3gtbHJnIHB1cmUtdS0xIHB1cmUtdS1tZC0zLTVcXFwiPlxcbiAgICAgICAgICAgIDxoND5Db250YWN0IFVzPC9oND5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXFxuICAgICAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcXG4gICAgICAgICAgICAgICAgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG9cXG4gICAgICAgICAgICAgICAgY29uc2VxdWF0LlxcbiAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICA8aDQ+TW9yZSBJbmZvcm1hdGlvbjwvaDQ+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxcbiAgICAgICAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCI7XG4iLCJpbXBvcnQgQ291bnRlciBmcm9tICcuLi8uLi9jb3VudGVyL2luZGV4LmpzJ1xuaW1wb3J0IFNwbGFzaCBmcm9tICcuL2VsZW1lbnRzLzFfc3BsYXNoL2luZGV4LmpzJ1xuaW1wb3J0IFN1YmhlYWQxIGZyb20gJy4vZWxlbWVudHMvMl9zdWJoZWFkXzEvaW5kZXguanMnXG5pbXBvcnQgU3ViaGVhZDIgZnJvbSAnLi9lbGVtZW50cy8zX3N1YmhlYWRfMi9pbmRleC5qcydcbmltcG9ydCBCb3gxIGZyb20gJy4vZWxlbWVudHMvNF9ib3hfMS9pbmRleC5qcydcblxuaW1wb3J0IEZvb3Rlck5hdiBmcm9tICcuLi8uLi9sYXlvdXRzL2Zvb3Rlci1uYXYvaW5kZXguanMnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJyksXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTcGxhc2gsXG4gICAgU3ViaGVhZDEsXG4gICAgU3ViaGVhZDIsXG4gICAgQm94MSxcbiAgICBGb290ZXJOYXZcbiAgICAvLyBDb3VudGVyXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48c3BsYXNoPjwvc3BsYXNoPlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtd3JhcHBlclxcXCI+XFxuICA8c3ViaGVhZDE+PC9zdWJoZWFkMT5cXG4gIDxzdWJoZWFkMj48L3N1YmhlYWQyPlxcbiAgPGJveDE+PC9ib3gxPlxcbiAgPGZvb3Rlci1uYXY+PC9mb290ZXItbmF2PlxcbjwvZGl2PlxcbjwhLS0gPGNvdW50ZXI+PC9jb3VudGVyPiAtLT5cXG5cIjtcbiIsInZhciBWdWUgPSByZXF1aXJlKCd2dWUnKVxudmFyIGNzcyA9IHJlcXVpcmUoJy4vYXBwLmNzcycpXG5cbmltcG9ydCBIZWFkZXJOYXYgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyLW5hdi9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9ob21lL2luZGV4LmpzJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9wYWdlcy9hYm91dC9pbmRleC5qcydcbi8vIC8vIHZhciBBcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpXG52YXIgVnVlUm91dGVyID0gcmVxdWlyZSgndnVlLXJvdXRlcicpXG5cbi8vIFJlZ2lzdGVyaW5nIG1pZGRsZXdhcmVcblZ1ZS51c2UoVnVlUm91dGVyKVxuXG4vLyBib290c3RyYXBwaW5nIHRoZSBpbnN0YW5jZVxudmFyIEFwcCA9IFZ1ZS5leHRlbmQoe1xuICBjb21wb25lbnRzOiB7XG4gICAgSGVhZGVyTmF2XG4gIH0sXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5odG1sJylcbn0pXG4vLyBFbmQgb2Ygc2V0dGluZyB1cCB2dWVcblxuLy8gUm91dGluZyBiZWxvdy4uLlxudmFyIG9wdGlvbnMgPSB7XG4gIGhhc2hiYW5nOiBmYWxzZVxufVxuXG52YXIgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIGhhc2hiYW5nOiB0cnVlXG59KVxuXG5yb3V0ZXIubWFwKHtcbiAgICAnLyc6IHtcbiAgICAgIGNvbXBvbmVudDogSG9tZVxuICAgIH0sXG4gICAgJy9hYm91dCc6IHtcbiAgICAgIGNvbXBvbmVudDogQWJvdXRcbiAgICB9XG59KVxuXG5yb3V0ZXIuc3RhcnQoQXBwLCAnI2FwcCcpXG4vLyBFbmQgb2Ygcm91dGluZ1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGJyb3dzZXIgZmllbGQsIGNoZWNrIG91dCB0aGUgYnJvd3NlciBmaWVsZCBhdCBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svYnJvd3NlcmlmeS1oYW5kYm9vayNicm93c2VyLWZpZWxkLlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDcmVhdGUgYSA8bGluaz4gdGFnIHdpdGggb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgY3JlYXRlTGluazogZnVuY3Rpb24oaHJlZiwgYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSxcbiAgICAvLyBDcmVhdGUgYSA8c3R5bGU+IHRhZyB3aXRoIG9wdGlvbmFsIGRhdGEgYXR0cmlidXRlc1xuICAgIGNyZWF0ZVN0eWxlOiBmdW5jdGlvbihjc3NUZXh0LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoICEgYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoc3R5bGUuc2hlZXQpIHsgLy8gZm9yIGpzZG9tIGFuZCBJRTkrXG4gICAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3NUZXh0O1xuICAgICAgICAgICAgc3R5bGUuc2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7IC8vIGZvciBJRTggYW5kIGJlbG93XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgICAgIH0gZWxzZSB7IC8vIGZvciBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmlcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1RleHQpKTtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmZyZWV6ZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5rZXlzOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShpdCkgOiBpdDtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oJGtleXMpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRUYXJnZXQocGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpIHtcbiAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICB0aGlzLm1hdGNoZXIgPSBtYXRjaGVyO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH1cblxuICAgICQkcm91dGUkcmVjb2duaXplciRkc2wkJFRhcmdldC5wcm90b3R5cGUgPSB7XG4gICAgICB0bzogZnVuY3Rpb24odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSB0aGlzLmRlbGVnYXRlO1xuXG4gICAgICAgIGlmIChkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS53aWxsQWRkUm91dGUpIHtcbiAgICAgICAgICB0YXJnZXQgPSBkZWxlZ2F0ZS53aWxsQWRkUm91dGUodGhpcy5tYXRjaGVyLnRhcmdldCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWF0Y2hlci5hZGQodGhpcy5wYXRoLCB0YXJnZXQpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaGF2ZSBhbiBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gcGFzc2VkIHRvIGB0b2BcIik7IH1cbiAgICAgICAgICB0aGlzLm1hdGNoZXIuYWRkQ2hpbGQodGhpcy5wYXRoLCB0YXJnZXQsIGNhbGxiYWNrLCB0aGlzLmRlbGVnYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkTWF0Y2hlcih0YXJnZXQpIHtcbiAgICAgIHRoaXMucm91dGVzID0ge307XG4gICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG5cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRNYXRjaGVyLnByb3RvdHlwZSA9IHtcbiAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvdXRlc1twYXRoXSA9IGhhbmRsZXI7XG4gICAgICB9LFxuXG4gICAgICBhZGRDaGlsZDogZnVuY3Rpb24ocGF0aCwgdGFyZ2V0LCBjYWxsYmFjaywgZGVsZWdhdGUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkTWF0Y2hlcih0YXJnZXQpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuW3BhdGhdID0gbWF0Y2hlcjtcblxuICAgICAgICB2YXIgbWF0Y2ggPSAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRnZW5lcmF0ZU1hdGNoKHBhdGgsIG1hdGNoZXIsIGRlbGVnYXRlKTtcblxuICAgICAgICBpZiAoZGVsZWdhdGUgJiYgZGVsZWdhdGUuY29udGV4dEVudGVyZWQpIHtcbiAgICAgICAgICBkZWxlZ2F0ZS5jb250ZXh0RW50ZXJlZCh0YXJnZXQsIG1hdGNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKG1hdGNoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZ2VuZXJhdGVNYXRjaChzdGFydGluZ1BhdGgsIG1hdGNoZXIsIGRlbGVnYXRlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocGF0aCwgbmVzdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZ1bGxQYXRoID0gc3RhcnRpbmdQYXRoICsgcGF0aDtcblxuICAgICAgICBpZiAobmVzdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICBuZXN0ZWRDYWxsYmFjaygkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRnZW5lcmF0ZU1hdGNoKGZ1bGxQYXRoLCBtYXRjaGVyLCBkZWxlZ2F0ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkVGFyZ2V0KHN0YXJ0aW5nUGF0aCArIHBhdGgsIG1hdGNoZXIsIGRlbGVnYXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRhZGRSb3V0ZShyb3V0ZUFycmF5LCBwYXRoLCBoYW5kbGVyKSB7XG4gICAgICB2YXIgbGVuID0gMDtcbiAgICAgIGZvciAodmFyIGk9MCwgbD1yb3V0ZUFycmF5Lmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgbGVuICs9IHJvdXRlQXJyYXlbaV0ucGF0aC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihsZW4pO1xuICAgICAgdmFyIHJvdXRlID0geyBwYXRoOiBwYXRoLCBoYW5kbGVyOiBoYW5kbGVyIH07XG4gICAgICByb3V0ZUFycmF5LnB1c2gocm91dGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciRkc2wkJGVhY2hSb3V0ZShiYXNlUm91dGUsIG1hdGNoZXIsIGNhbGxiYWNrLCBiaW5kaW5nKSB7XG4gICAgICB2YXIgcm91dGVzID0gbWF0Y2hlci5yb3V0ZXM7XG5cbiAgICAgIGZvciAodmFyIHBhdGggaW4gcm91dGVzKSB7XG4gICAgICAgIGlmIChyb3V0ZXMuaGFzT3duUHJvcGVydHkocGF0aCkpIHtcbiAgICAgICAgICB2YXIgcm91dGVBcnJheSA9IGJhc2VSb3V0ZS5zbGljZSgpO1xuICAgICAgICAgICQkcm91dGUkcmVjb2duaXplciRkc2wkJGFkZFJvdXRlKHJvdXRlQXJyYXksIHBhdGgsIHJvdXRlc1twYXRoXSk7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlci5jaGlsZHJlbltwYXRoXSkge1xuICAgICAgICAgICAgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZWFjaFJvdXRlKHJvdXRlQXJyYXksIG1hdGNoZXIuY2hpbGRyZW5bcGF0aF0sIGNhbGxiYWNrLCBiaW5kaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChiaW5kaW5nLCByb3V0ZUFycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZGVmYXVsdCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBhZGRSb3V0ZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgbWF0Y2hlciA9IG5ldyAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRNYXRjaGVyKCk7XG5cbiAgICAgIGNhbGxiYWNrKCQkcm91dGUkcmVjb2duaXplciRkc2wkJGdlbmVyYXRlTWF0Y2goXCJcIiwgbWF0Y2hlciwgdGhpcy5kZWxlZ2F0ZSkpO1xuXG4gICAgICAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRlYWNoUm91dGUoW10sIG1hdGNoZXIsIGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgIGlmIChhZGRSb3V0ZUNhbGxiYWNrKSB7IGFkZFJvdXRlQ2FsbGJhY2sodGhpcywgcm91dGUpOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLmFkZChyb3V0ZSk7IH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICB2YXIgJCRyb3V0ZSRyZWNvZ25pemVyJCRzcGVjaWFscyA9IFtcbiAgICAgICcvJywgJy4nLCAnKicsICcrJywgJz8nLCAnfCcsXG4gICAgICAnKCcsICcpJywgJ1snLCAnXScsICd7JywgJ30nLCAnXFxcXCdcbiAgICBdO1xuXG4gICAgdmFyICQkcm91dGUkcmVjb2duaXplciQkZXNjYXBlUmVnZXggPSBuZXcgUmVnRXhwKCcoXFxcXCcgKyAkJHJvdXRlJHJlY29nbml6ZXIkJHNwZWNpYWxzLmpvaW4oJ3xcXFxcJykgKyAnKScsICdnJyk7XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJGlzQXJyYXkodGVzdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXN0KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgIH1cblxuICAgIC8vIEEgU2VnbWVudCByZXByZXNlbnRzIGEgc2VnbWVudCBpbiB0aGUgb3JpZ2luYWwgcm91dGUgZGVzY3JpcHRpb24uXG4gICAgLy8gRWFjaCBTZWdtZW50IHR5cGUgcHJvdmlkZXMgYW4gYGVhY2hDaGFyYCBhbmQgYHJlZ2V4YCBtZXRob2QuXG4gICAgLy9cbiAgICAvLyBUaGUgYGVhY2hDaGFyYCBtZXRob2QgaW52b2tlcyB0aGUgY2FsbGJhY2sgd2l0aCBvbmUgb3IgbW9yZSBjaGFyYWN0ZXJcbiAgICAvLyBzcGVjaWZpY2F0aW9ucy4gQSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBjb25zdW1lcyBvbmUgb3IgbW9yZSBpbnB1dFxuICAgIC8vIGNoYXJhY3RlcnMuXG4gICAgLy9cbiAgICAvLyBUaGUgYHJlZ2V4YCBtZXRob2QgcmV0dXJucyBhIHJlZ2V4IGZyYWdtZW50IGZvciB0aGUgc2VnbWVudC4gSWYgdGhlXG4gICAgLy8gc2VnbWVudCBpcyBhIGR5bmFtaWMgb2Ygc3RhciBzZWdtZW50LCB0aGUgcmVnZXggZnJhZ21lbnQgYWxzbyBpbmNsdWRlc1xuICAgIC8vIGEgY2FwdHVyZS5cbiAgICAvL1xuICAgIC8vIEEgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gY29udGFpbnM6XG4gICAgLy9cbiAgICAvLyAqIGB2YWxpZENoYXJzYDogYSBTdHJpbmcgd2l0aCBhIGxpc3Qgb2YgYWxsIHZhbGlkIGNoYXJhY3RlcnMsIG9yXG4gICAgLy8gKiBgaW52YWxpZENoYXJzYDogYSBTdHJpbmcgd2l0aCBhIGxpc3Qgb2YgYWxsIGludmFsaWQgY2hhcmFjdGVyc1xuICAgIC8vICogYHJlcGVhdGA6IHRydWUgaWYgdGhlIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIGNhbiByZXBlYXRcblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkU3RhdGljU2VnbWVudChzdHJpbmcpIHsgdGhpcy5zdHJpbmcgPSBzdHJpbmc7IH1cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXRpY1NlZ21lbnQucHJvdG90eXBlID0ge1xuICAgICAgZWFjaENoYXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSB0aGlzLnN0cmluZywgY2g7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPXN0cmluZy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgY2ggPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICAgIGNhbGxiYWNrKHsgdmFsaWRDaGFyczogY2ggfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlZ2V4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nLnJlcGxhY2UoJCRyb3V0ZSRyZWNvZ25pemVyJCRlc2NhcGVSZWdleCwgJ1xcXFwkMScpO1xuICAgICAgfSxcblxuICAgICAgZ2VuZXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkRHluYW1pY1NlZ21lbnQobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCREeW5hbWljU2VnbWVudC5wcm90b3R5cGUgPSB7XG4gICAgICBlYWNoQ2hhcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soeyBpbnZhbGlkQ2hhcnM6IFwiL1wiLCByZXBlYXQ6IHRydWUgfSk7XG4gICAgICB9LFxuXG4gICAgICByZWdleDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIihbXi9dKylcIjtcbiAgICAgIH0sXG5cbiAgICAgIGdlbmVyYXRlOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1t0aGlzLm5hbWVdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXJTZWdtZW50KG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgICQkcm91dGUkcmVjb2duaXplciQkU3RhclNlZ21lbnQucHJvdG90eXBlID0ge1xuICAgICAgZWFjaENoYXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHsgaW52YWxpZENoYXJzOiBcIlwiLCByZXBlYXQ6IHRydWUgfSk7XG4gICAgICB9LFxuXG4gICAgICByZWdleDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIiguKylcIjtcbiAgICAgIH0sXG5cbiAgICAgIGdlbmVyYXRlOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1t0aGlzLm5hbWVdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJEVwc2lsb25TZWdtZW50KCkge31cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkJEVwc2lsb25TZWdtZW50LnByb3RvdHlwZSA9IHtcbiAgICAgIGVhY2hDaGFyOiBmdW5jdGlvbigpIHt9LFxuICAgICAgcmVnZXg6IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJcIjsgfSxcbiAgICAgIGdlbmVyYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIFwiXCI7IH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRwYXJzZShyb3V0ZSwgbmFtZXMsIHNwZWNpZmljaXR5KSB7XG4gICAgICAvLyBub3JtYWxpemUgcm91dGUgYXMgbm90IHN0YXJ0aW5nIHdpdGggYSBcIi9cIi4gUmVjb2duaXRpb24gd2lsbFxuICAgICAgLy8gYWxzbyBub3JtYWxpemUuXG4gICAgICBpZiAocm91dGUuY2hhckF0KDApID09PSBcIi9cIikgeyByb3V0ZSA9IHJvdXRlLnN1YnN0cigxKTsgfVxuXG4gICAgICB2YXIgc2VnbWVudHMgPSByb3V0ZS5zcGxpdChcIi9cIiksIHJlc3VsdHMgPSBbXTtcblxuICAgICAgLy8gQSByb3V0ZXMgaGFzIHNwZWNpZmljaXR5IGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoYXQgaXRzIGRpZmZlcmVudCBzZWdtZW50c1xuICAgICAgLy8gYXBwZWFyIGluLiBUaGlzIHN5c3RlbSBtaXJyb3JzIGhvdyB0aGUgbWFnbml0dWRlIG9mIG51bWJlcnMgd3JpdHRlbiBhcyBzdHJpbmdzXG4gICAgICAvLyB3b3Jrcy5cbiAgICAgIC8vIENvbnNpZGVyIGEgbnVtYmVyIHdyaXR0ZW4gYXM6IFwiYWJjXCIuIEFuIGV4YW1wbGUgd291bGQgYmUgXCIyMDBcIi4gQW55IG90aGVyIG51bWJlciB3cml0dGVuXG4gICAgICAvLyBcInh5elwiIHdpbGwgYmUgc21hbGxlciB0aGFuIFwiYWJjXCIgc28gbG9uZyBhcyBgYSA+IHpgLiBGb3IgaW5zdGFuY2UsIFwiMTk5XCIgaXMgc21hbGxlclxuICAgICAgLy8gdGhlbiBcIjIwMFwiLCBldmVuIHRob3VnaCBcInlcIiBhbmQgXCJ6XCIgKHdoaWNoIGFyZSBib3RoIDkpIGFyZSBsYXJnZXIgdGhhbiBcIjBcIiAodGhlIHZhbHVlXG4gICAgICAvLyBvZiAoYGJgIGFuZCBgY2ApLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGxlYWRpbmcgc3ltYm9sLCBcIjJcIiwgaXMgbGFyZ2VyIHRoYW4gdGhlIG90aGVyXG4gICAgICAvLyBsZWFkaW5nIHN5bWJvbCwgXCIxXCIuXG4gICAgICAvLyBUaGUgcnVsZSBpcyB0aGF0IHN5bWJvbHMgdG8gdGhlIGxlZnQgY2FycnkgbW9yZSB3ZWlnaHQgdGhhbiBzeW1ib2xzIHRvIHRoZSByaWdodFxuICAgICAgLy8gd2hlbiBhIG51bWJlciBpcyB3cml0dGVuIG91dCBhcyBhIHN0cmluZy4gSW4gdGhlIGFib3ZlIHN0cmluZ3MsIHRoZSBsZWFkaW5nIGRpZ2l0XG4gICAgICAvLyByZXByZXNlbnRzIGhvdyBtYW55IDEwMCdzIGFyZSBpbiB0aGUgbnVtYmVyLCBhbmQgaXQgY2FycmllcyBtb3JlIHdlaWdodCB0aGFuIHRoZSBtaWRkbGVcbiAgICAgIC8vIG51bWJlciB3aGljaCByZXByZXNlbnRzIGhvdyBtYW55IDEwJ3MgYXJlIGluIHRoZSBudW1iZXIuXG4gICAgICAvLyBUaGlzIHN5c3RlbSBvZiBudW1iZXIgbWFnbml0dWRlIHdvcmtzIHdlbGwgZm9yIHJvdXRlIHNwZWNpZmljaXR5LCB0b28uIEEgcm91dGUgd3JpdHRlbiBhc1xuICAgICAgLy8gYGEvYi9jYCB3aWxsIGJlIG1vcmUgc3BlY2lmaWMgdGhhbiBgeC95L3pgIGFzIGxvbmcgYXMgYGFgIGlzIG1vcmUgc3BlY2lmaWMgdGhhblxuICAgICAgLy8gYHhgLCBpcnJlc3BlY3RpdmUgb2YgdGhlIG90aGVyIHBhcnRzLlxuICAgICAgLy8gQmVjYXVzZSBvZiB0aGlzIHNpbWlsYXJpdHksIHdlIGFzc2lnbiBlYWNoIHR5cGUgb2Ygc2VnbWVudCBhIG51bWJlciB2YWx1ZSB3cml0dGVuIGFzIGFcbiAgICAgIC8vIHN0cmluZy4gV2UgY2FuIGZpbmQgdGhlIHNwZWNpZmljaXR5IG9mIGNvbXBvdW5kIHJvdXRlcyBieSBjb25jYXRlbmF0aW5nIHRoZXNlIHN0cmluZ3NcbiAgICAgIC8vIHRvZ2V0aGVyLCBmcm9tIGxlZnQgdG8gcmlnaHQuIEFmdGVyIHdlIGhhdmUgbG9vcGVkIHRocm91Z2ggYWxsIG9mIHRoZSBzZWdtZW50cyxcbiAgICAgIC8vIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB0byBhIG51bWJlci5cbiAgICAgIHNwZWNpZmljaXR5LnZhbCA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpPTAsIGw9c2VnbWVudHMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldLCBtYXRjaDtcblxuICAgICAgICBpZiAobWF0Y2ggPSBzZWdtZW50Lm1hdGNoKC9eOihbXlxcL10rKSQvKSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgJCRyb3V0ZSRyZWNvZ25pemVyJCREeW5hbWljU2VnbWVudChtYXRjaFsxXSkpO1xuICAgICAgICAgIG5hbWVzLnB1c2gobWF0Y2hbMV0pO1xuICAgICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnMyc7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBzZWdtZW50Lm1hdGNoKC9eXFwqKFteXFwvXSspJC8pKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXJTZWdtZW50KG1hdGNoWzFdKSk7XG4gICAgICAgICAgc3BlY2lmaWNpdHkudmFsICs9ICcyJztcbiAgICAgICAgICBuYW1lcy5wdXNoKG1hdGNoWzFdKTtcbiAgICAgICAgfSBlbHNlIGlmKHNlZ21lbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3ICQkcm91dGUkcmVjb2duaXplciQkRXBzaWxvblNlZ21lbnQoKSk7XG4gICAgICAgICAgc3BlY2lmaWNpdHkudmFsICs9ICcxJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3ICQkcm91dGUkcmVjb2duaXplciQkU3RhdGljU2VnbWVudChzZWdtZW50KSk7XG4gICAgICAgICAgc3BlY2lmaWNpdHkudmFsICs9ICc0JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzcGVjaWZpY2l0eS52YWwgPSArc3BlY2lmaWNpdHkudmFsO1xuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBBIFN0YXRlIGhhcyBhIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIGFuZCAoYGNoYXJTcGVjYCkgYW5kIGEgbGlzdCBvZiBwb3NzaWJsZVxuICAgIC8vIHN1YnNlcXVlbnQgc3RhdGVzIChgbmV4dFN0YXRlc2ApLlxuICAgIC8vXG4gICAgLy8gSWYgYSBTdGF0ZSBpcyBhbiBhY2NlcHRpbmcgc3RhdGUsIGl0IHdpbGwgYWxzbyBoYXZlIHNldmVyYWwgYWRkaXRpb25hbFxuICAgIC8vIHByb3BlcnRpZXM6XG4gICAgLy9cbiAgICAvLyAqIGByZWdleGA6IEEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgaXMgdXNlZCB0byBleHRyYWN0IHBhcmFtZXRlcnMgZnJvbSBwYXRoc1xuICAgIC8vICAgdGhhdCByZWFjaGVkIHRoaXMgYWNjZXB0aW5nIHN0YXRlLlxuICAgIC8vICogYGhhbmRsZXJzYDogSW5mb3JtYXRpb24gb24gaG93IHRvIGNvbnZlcnQgdGhlIGxpc3Qgb2YgY2FwdHVyZXMgaW50byBjYWxsc1xuICAgIC8vICAgdG8gcmVnaXN0ZXJlZCBoYW5kbGVycyB3aXRoIHRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyc1xuICAgIC8vICogYHR5cGVzYDogSG93IG1hbnkgc3RhdGljLCBkeW5hbWljIG9yIHN0YXIgc2VnbWVudHMgaW4gdGhpcyByb3V0ZS4gVXNlZCB0b1xuICAgIC8vICAgZGVjaWRlIHdoaWNoIHJvdXRlIHRvIHVzZSBpZiBtdWx0aXBsZSByZWdpc3RlcmVkIHJvdXRlcyBtYXRjaCBhIHBhdGguXG4gICAgLy9cbiAgICAvLyBDdXJyZW50bHksIFN0YXRlIGlzIGltcGxlbWVudGVkIG5haXZlbHkgYnkgbG9vcGluZyBvdmVyIGBuZXh0U3RhdGVzYCBhbmRcbiAgICAvLyBjb21wYXJpbmcgYSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBhZ2FpbnN0IGEgY2hhcmFjdGVyLiBBIG1vcmUgZWZmaWNpZW50XG4gICAgLy8gaW1wbGVtZW50YXRpb24gd291bGQgdXNlIGEgaGFzaCBvZiBrZXlzIHBvaW50aW5nIGF0IG9uZSBvciBtb3JlIG5leHQgc3RhdGVzLlxuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRTdGF0ZShjaGFyU3BlYykge1xuICAgICAgdGhpcy5jaGFyU3BlYyA9IGNoYXJTcGVjO1xuICAgICAgdGhpcy5uZXh0U3RhdGVzID0gW107XG4gICAgfVxuXG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCRTdGF0ZS5wcm90b3R5cGUgPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKGNoYXJTcGVjKSB7XG4gICAgICAgIHZhciBuZXh0U3RhdGVzID0gdGhpcy5uZXh0U3RhdGVzO1xuXG4gICAgICAgIGZvciAodmFyIGk9MCwgbD1uZXh0U3RhdGVzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBuZXh0U3RhdGVzW2ldO1xuXG4gICAgICAgICAgdmFyIGlzRXF1YWwgPSBjaGlsZC5jaGFyU3BlYy52YWxpZENoYXJzID09PSBjaGFyU3BlYy52YWxpZENoYXJzO1xuICAgICAgICAgIGlzRXF1YWwgPSBpc0VxdWFsICYmIGNoaWxkLmNoYXJTcGVjLmludmFsaWRDaGFycyA9PT0gY2hhclNwZWMuaW52YWxpZENoYXJzO1xuXG4gICAgICAgICAgaWYgKGlzRXF1YWwpIHsgcmV0dXJuIGNoaWxkOyB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHB1dDogZnVuY3Rpb24oY2hhclNwZWMpIHtcbiAgICAgICAgdmFyIHN0YXRlO1xuXG4gICAgICAgIC8vIElmIHRoZSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBhbHJlYWR5IGV4aXN0cyBpbiBhIGNoaWxkIG9mIHRoZSBjdXJyZW50XG4gICAgICAgIC8vIHN0YXRlLCBqdXN0IHJldHVybiB0aGF0IHN0YXRlLlxuICAgICAgICBpZiAoc3RhdGUgPSB0aGlzLmdldChjaGFyU3BlYykpIHsgcmV0dXJuIHN0YXRlOyB9XG5cbiAgICAgICAgLy8gTWFrZSBhIG5ldyBzdGF0ZSBmb3IgdGhlIGNoYXJhY3RlciBzcGVjXG4gICAgICAgIHN0YXRlID0gbmV3ICQkcm91dGUkcmVjb2duaXplciQkU3RhdGUoY2hhclNwZWMpO1xuXG4gICAgICAgIC8vIEluc2VydCB0aGUgbmV3IHN0YXRlIGFzIGEgY2hpbGQgb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgdGhpcy5uZXh0U3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gcmVwZWF0cywgaW5zZXJ0IHRoZSBuZXcgc3RhdGUgYXMgYSBjaGlsZFxuICAgICAgICAvLyBvZiBpdHNlbGYuIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IHRyaWdnZXIgYW4gaW5maW5pdGUgbG9vcCBiZWNhdXNlIGVhY2hcbiAgICAgICAgLy8gdHJhbnNpdGlvbiBkdXJpbmcgcmVjb2duaXRpb24gY29uc3VtZXMgYSBjaGFyYWN0ZXIuXG4gICAgICAgIGlmIChjaGFyU3BlYy5yZXBlYXQpIHtcbiAgICAgICAgICBzdGF0ZS5uZXh0U3RhdGVzLnB1c2goc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBuZXcgc3RhdGVcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSxcblxuICAgICAgLy8gRmluZCBhIGxpc3Qgb2YgY2hpbGQgc3RhdGVzIG1hdGNoaW5nIHRoZSBuZXh0IGNoYXJhY3RlclxuICAgICAgbWF0Y2g6IGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIC8vIERFQlVHIFwiUHJvY2Vzc2luZyBgXCIgKyBjaCArIFwiYDpcIlxuICAgICAgICB2YXIgbmV4dFN0YXRlcyA9IHRoaXMubmV4dFN0YXRlcyxcbiAgICAgICAgICAgIGNoaWxkLCBjaGFyU3BlYywgY2hhcnM7XG5cbiAgICAgICAgLy8gREVCVUcgXCIgIFwiICsgZGVidWdTdGF0ZSh0aGlzKVxuICAgICAgICB2YXIgcmV0dXJuZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIGw9bmV4dFN0YXRlcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSBuZXh0U3RhdGVzW2ldO1xuXG4gICAgICAgICAgY2hhclNwZWMgPSBjaGlsZC5jaGFyU3BlYztcblxuICAgICAgICAgIGlmICh0eXBlb2YgKGNoYXJzID0gY2hhclNwZWMudmFsaWRDaGFycykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xKSB7IHJldHVybmVkLnB1c2goY2hpbGQpOyB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGNoYXJzID0gY2hhclNwZWMuaW52YWxpZENoYXJzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChjaGFycy5pbmRleE9mKGNoKSA9PT0gLTEpIHsgcmV0dXJuZWQucHVzaChjaGlsZCk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKiBJRiBERUJVR1xuICAgICAgLCBkZWJ1ZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGFyU3BlYyA9IHRoaXMuY2hhclNwZWMsXG4gICAgICAgICAgICBkZWJ1ZyA9IFwiW1wiLFxuICAgICAgICAgICAgY2hhcnMgPSBjaGFyU3BlYy52YWxpZENoYXJzIHx8IGNoYXJTcGVjLmludmFsaWRDaGFycztcblxuICAgICAgICBpZiAoY2hhclNwZWMuaW52YWxpZENoYXJzKSB7IGRlYnVnICs9IFwiXlwiOyB9XG4gICAgICAgIGRlYnVnICs9IGNoYXJzO1xuICAgICAgICBkZWJ1ZyArPSBcIl1cIjtcblxuICAgICAgICBpZiAoY2hhclNwZWMucmVwZWF0KSB7IGRlYnVnICs9IFwiK1wiOyB9XG5cbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgICAgfVxuICAgICAgRU5EIElGICoqL1xuICAgIH07XG5cbiAgICAvKiogSUYgREVCVUdcbiAgICBmdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVidWdTdGF0ZShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLm5leHRTdGF0ZXMubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgaWYgKG4ubmV4dFN0YXRlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIFwiKCBcIiArIG4uZGVidWcoKSArIFwiIFthY2NlcHRpbmddIClcIjsgfVxuICAgICAgICByZXR1cm4gXCIoIFwiICsgbi5kZWJ1ZygpICsgXCIgPHRoZW4+IFwiICsgbi5uZXh0U3RhdGVzLm1hcChmdW5jdGlvbihzKSB7IHJldHVybiBzLmRlYnVnKCkgfSkuam9pbihcIiBvciBcIikgKyBcIiApXCI7XG4gICAgICB9KS5qb2luKFwiLCBcIilcbiAgICB9XG4gICAgRU5EIElGICoqL1xuXG4gICAgLy8gU29ydCB0aGUgcm91dGVzIGJ5IHNwZWNpZmljaXR5XG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRzb3J0U29sdXRpb25zKHN0YXRlcykge1xuICAgICAgcmV0dXJuIHN0YXRlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuc3BlY2lmaWNpdHkudmFsIC0gYS5zcGVjaWZpY2l0eS52YWw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJHJlY29nbml6ZUNoYXIoc3RhdGVzLCBjaCkge1xuICAgICAgdmFyIG5leHRTdGF0ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaT0wLCBsPXN0YXRlcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHN0YXRlc1tpXTtcblxuICAgICAgICBuZXh0U3RhdGVzID0gbmV4dFN0YXRlcy5jb25jYXQoc3RhdGUubWF0Y2goY2gpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRTdGF0ZXM7XG4gICAgfVxuXG4gICAgdmFyICQkcm91dGUkcmVjb2duaXplciQkb0NyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgIGZ1bmN0aW9uIEYoKSB7fVxuICAgICAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHJldHVybiBuZXcgRigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJFJlY29nbml6ZVJlc3VsdHMocXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMucXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcyB8fCB7fTtcbiAgICB9XG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCRSZWNvZ25pemVSZXN1bHRzLnByb3RvdHlwZSA9ICQkcm91dGUkcmVjb2duaXplciQkb0NyZWF0ZSh7XG4gICAgICBzcGxpY2U6IEFycmF5LnByb3RvdHlwZS5zcGxpY2UsXG4gICAgICBzbGljZTogIEFycmF5LnByb3RvdHlwZS5zbGljZSxcbiAgICAgIHB1c2g6ICAgQXJyYXkucHJvdG90eXBlLnB1c2gsXG4gICAgICBsZW5ndGg6IDAsXG4gICAgICBxdWVyeVBhcmFtczogbnVsbFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRmaW5kSGFuZGxlcihzdGF0ZSwgcGF0aCwgcXVlcnlQYXJhbXMpIHtcbiAgICAgIHZhciBoYW5kbGVycyA9IHN0YXRlLmhhbmRsZXJzLCByZWdleCA9IHN0YXRlLnJlZ2V4O1xuICAgICAgdmFyIGNhcHR1cmVzID0gcGF0aC5tYXRjaChyZWdleCksIGN1cnJlbnRDYXB0dXJlID0gMTtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgJCRyb3V0ZSRyZWNvZ25pemVyJCRSZWNvZ25pemVSZXN1bHRzKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgZm9yICh2YXIgaT0wLCBsPWhhbmRsZXJzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tpXSwgbmFtZXMgPSBoYW5kbGVyLm5hbWVzLCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBqPTAsIG09bmFtZXMubGVuZ3RoOyBqPG07IGorKykge1xuICAgICAgICAgIHBhcmFtc1tuYW1lc1tqXV0gPSBjYXB0dXJlc1tjdXJyZW50Q2FwdHVyZSsrXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKHsgaGFuZGxlcjogaGFuZGxlci5oYW5kbGVyLCBwYXJhbXM6IHBhcmFtcywgaXNEeW5hbWljOiAhIW5hbWVzLmxlbmd0aCB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJGFkZFNlZ21lbnQoY3VycmVudFN0YXRlLCBzZWdtZW50KSB7XG4gICAgICBzZWdtZW50LmVhY2hDaGFyKGZ1bmN0aW9uKGNoKSB7XG4gICAgICAgIHZhciBzdGF0ZTtcblxuICAgICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGUucHV0KGNoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkZGVjb2RlUXVlcnlQYXJhbVBhcnQocGFydCkge1xuICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuMTMuNC4xXG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9cXCsvZ20sICclMjAnKTtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFydCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIG1haW4gaW50ZXJmYWNlXG5cbiAgICB2YXIgJCRyb3V0ZSRyZWNvZ25pemVyJCRSb3V0ZVJlY29nbml6ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucm9vdFN0YXRlID0gbmV3ICQkcm91dGUkcmVjb2duaXplciQkU3RhdGUoKTtcbiAgICAgIHRoaXMubmFtZXMgPSB7fTtcbiAgICB9O1xuXG5cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkJFJvdXRlUmVjb2duaXplci5wcm90b3R5cGUgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uKHJvdXRlcywgb3B0aW9ucykge1xuICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5yb290U3RhdGUsIHJlZ2V4ID0gXCJeXCIsXG4gICAgICAgICAgICBzcGVjaWZpY2l0eSA9IHt9LFxuICAgICAgICAgICAgaGFuZGxlcnMgPSBbXSwgYWxsU2VnbWVudHMgPSBbXSwgbmFtZTtcblxuICAgICAgICB2YXIgaXNFbXB0eSA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPXJvdXRlcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHJvdXRlID0gcm91dGVzW2ldLCBuYW1lcyA9IFtdO1xuXG4gICAgICAgICAgdmFyIHNlZ21lbnRzID0gJCRyb3V0ZSRyZWNvZ25pemVyJCRwYXJzZShyb3V0ZS5wYXRoLCBuYW1lcywgc3BlY2lmaWNpdHkpO1xuXG4gICAgICAgICAgYWxsU2VnbWVudHMgPSBhbGxTZWdtZW50cy5jb25jYXQoc2VnbWVudHMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaj0wLCBtPXNlZ21lbnRzLmxlbmd0aDsgajxtOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbal07XG5cbiAgICAgICAgICAgIGlmIChzZWdtZW50IGluc3RhbmNlb2YgJCRyb3V0ZSRyZWNvZ25pemVyJCRFcHNpbG9uU2VnbWVudCkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEFkZCBhIFwiL1wiIGZvciB0aGUgbmV3IHNlZ21lbnRcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5wdXQoeyB2YWxpZENoYXJzOiBcIi9cIiB9KTtcbiAgICAgICAgICAgIHJlZ2V4ICs9IFwiL1wiO1xuXG4gICAgICAgICAgICAvLyBBZGQgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2VnbWVudCB0byB0aGUgTkZBIGFuZCByZWdleFxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJCRyb3V0ZSRyZWNvZ25pemVyJCRhZGRTZWdtZW50KGN1cnJlbnRTdGF0ZSwgc2VnbWVudCk7XG4gICAgICAgICAgICByZWdleCArPSBzZWdtZW50LnJlZ2V4KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSB7IGhhbmRsZXI6IHJvdXRlLmhhbmRsZXIsIG5hbWVzOiBuYW1lcyB9O1xuICAgICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5wdXQoeyB2YWxpZENoYXJzOiBcIi9cIiB9KTtcbiAgICAgICAgICByZWdleCArPSBcIi9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTdGF0ZS5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgICAgICBjdXJyZW50U3RhdGUucmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4ICsgXCIkXCIpO1xuICAgICAgICBjdXJyZW50U3RhdGUuc3BlY2lmaWNpdHkgPSBzcGVjaWZpY2l0eTtcblxuICAgICAgICBpZiAobmFtZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hcykge1xuICAgICAgICAgIHRoaXMubmFtZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBzZWdtZW50czogYWxsU2VnbWVudHMsXG4gICAgICAgICAgICBoYW5kbGVyczogaGFuZGxlcnNcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVyc0ZvcjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgcm91dGUgPSB0aGlzLm5hbWVzW25hbWVdLCByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFyb3V0ZSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyByb3V0ZSBuYW1lZCBcIiArIG5hbWUpOyB9XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPXJvdXRlLmhhbmRsZXJzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQucHVzaChyb3V0ZS5oYW5kbGVyc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcblxuICAgICAgaGFzUm91dGU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5uYW1lc1tuYW1lXTtcbiAgICAgIH0sXG5cbiAgICAgIGdlbmVyYXRlOiBmdW5jdGlvbihuYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5uYW1lc1tuYW1lXSwgb3V0cHV0ID0gXCJcIjtcbiAgICAgICAgaWYgKCFyb3V0ZSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyByb3V0ZSBuYW1lZCBcIiArIG5hbWUpOyB9XG5cbiAgICAgICAgdmFyIHNlZ21lbnRzID0gcm91dGUuc2VnbWVudHM7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPXNlZ21lbnRzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuXG4gICAgICAgICAgaWYgKHNlZ21lbnQgaW5zdGFuY2VvZiAkJHJvdXRlJHJlY29nbml6ZXIkJEVwc2lsb25TZWdtZW50KSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgICBvdXRwdXQgKz0gXCIvXCI7XG4gICAgICAgICAgb3V0cHV0ICs9IHNlZ21lbnQuZ2VuZXJhdGUocGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXRwdXQuY2hhckF0KDApICE9PSAnLycpIHsgb3V0cHV0ID0gJy8nICsgb3V0cHV0OyB9XG5cbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5nZW5lcmF0ZVF1ZXJ5U3RyaW5nKHBhcmFtcy5xdWVyeVBhcmFtcywgcm91dGUuaGFuZGxlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH0sXG5cbiAgICAgIGdlbmVyYXRlUXVlcnlTdHJpbmc6IGZ1bmN0aW9uKHBhcmFtcywgaGFuZGxlcnMpIHtcbiAgICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvcih2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1zW2tleV07XG4gICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcGFpciA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgICAgICAgIGlmICgkJHJvdXRlJHJlY29nbml6ZXIkJGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICB2YXIgYXJyYXlQYWlyID0ga2V5ICsgJ1tdJyArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtqXSk7XG4gICAgICAgICAgICAgIHBhaXJzLnB1c2goYXJyYXlQYWlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFpciArPSBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHBhaXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYWlycy5sZW5ndGggPT09IDApIHsgcmV0dXJuICcnOyB9XG5cbiAgICAgICAgcmV0dXJuIFwiP1wiICsgcGFpcnMuam9pbihcIiZcIik7XG4gICAgICB9LFxuXG4gICAgICBwYXJzZVF1ZXJ5U3RyaW5nOiBmdW5jdGlvbihxdWVyeVN0cmluZykge1xuICAgICAgICB2YXIgcGFpcnMgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIiksIHF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcGFpciAgICAgID0gcGFpcnNbaV0uc3BsaXQoJz0nKSxcbiAgICAgICAgICAgICAga2V5ICAgICAgID0gJCRyb3V0ZSRyZWNvZ25pemVyJCRkZWNvZGVRdWVyeVBhcmFtUGFydChwYWlyWzBdKSxcbiAgICAgICAgICAgICAga2V5TGVuZ3RoID0ga2V5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICBpZiAocGFpci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJ3RydWUnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0hhbmRsZSBhcnJheXNcbiAgICAgICAgICAgIGlmIChrZXlMZW5ndGggPiAyICYmIGtleS5zbGljZShrZXlMZW5ndGggLTIpID09PSAnW10nKSB7XG4gICAgICAgICAgICAgIGlzQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICBrZXkgPSBrZXkuc2xpY2UoMCwga2V5TGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgIGlmKCFxdWVyeVBhcmFtc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHBhaXJbMV0gPyAkJHJvdXRlJHJlY29nbml6ZXIkJGRlY29kZVF1ZXJ5UGFyYW1QYXJ0KHBhaXJbMV0pIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgICAgIH0sXG5cbiAgICAgIHJlY29nbml6ZTogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICB2YXIgc3RhdGVzID0gWyB0aGlzLnJvb3RTdGF0ZSBdLFxuICAgICAgICAgICAgcGF0aExlbiwgaSwgbCwgcXVlcnlTdGFydCwgcXVlcnlQYXJhbXMgPSB7fSxcbiAgICAgICAgICAgIGlzU2xhc2hEcm9wcGVkID0gZmFsc2U7XG5cbiAgICAgICAgcXVlcnlTdGFydCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgICAgICBpZiAocXVlcnlTdGFydCAhPT0gLTEpIHtcbiAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBwYXRoLnN1YnN0cihxdWVyeVN0YXJ0ICsgMSwgcGF0aC5sZW5ndGgpO1xuICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBxdWVyeVN0YXJ0KTtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHRoaXMucGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXRoID0gZGVjb2RlVVJJKHBhdGgpO1xuXG4gICAgICAgIC8vIERFQlVHIEdST1VQIHBhdGhcblxuICAgICAgICBpZiAocGF0aC5jaGFyQXQoMCkgIT09IFwiL1wiKSB7IHBhdGggPSBcIi9cIiArIHBhdGg7IH1cblxuICAgICAgICBwYXRoTGVuID0gcGF0aC5sZW5ndGg7XG4gICAgICAgIGlmIChwYXRoTGVuID4gMSAmJiBwYXRoLmNoYXJBdChwYXRoTGVuIC0gMSkgPT09IFwiL1wiKSB7XG4gICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGhMZW4gLSAxKTtcbiAgICAgICAgICBpc1NsYXNoRHJvcHBlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGk9MCwgbD1wYXRoLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgICBzdGF0ZXMgPSAkJHJvdXRlJHJlY29nbml6ZXIkJHJlY29nbml6ZUNoYXIoc3RhdGVzLCBwYXRoLmNoYXJBdChpKSk7XG4gICAgICAgICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7IGJyZWFrOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFTkQgREVCVUcgR1JPVVBcblxuICAgICAgICB2YXIgc29sdXRpb25zID0gW107XG4gICAgICAgIGZvciAoaT0wLCBsPXN0YXRlcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHN0YXRlc1tpXS5oYW5kbGVycykgeyBzb2x1dGlvbnMucHVzaChzdGF0ZXNbaV0pOyB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZXMgPSAkJHJvdXRlJHJlY29nbml6ZXIkJHNvcnRTb2x1dGlvbnMoc29sdXRpb25zKTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBzb2x1dGlvbnNbMF07XG5cbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmhhbmRsZXJzKSB7XG4gICAgICAgICAgLy8gaWYgYSB0cmFpbGluZyBzbGFzaCB3YXMgZHJvcHBlZCBhbmQgYSBzdGFyIHNlZ21lbnQgaXMgdGhlIGxhc3Qgc2VnbWVudFxuICAgICAgICAgIC8vIHNwZWNpZmllZCwgcHV0IHRoZSB0cmFpbGluZyBzbGFzaCBiYWNrXG4gICAgICAgICAgaWYgKGlzU2xhc2hEcm9wcGVkICYmIHN0YXRlLnJlZ2V4LnNvdXJjZS5zbGljZSgtNSkgPT09IFwiKC4rKSRcIikge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGggKyBcIi9cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICQkcm91dGUkcmVjb2duaXplciQkZmluZEhhbmRsZXIoc3RhdGUsIHBhdGgsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkJFJvdXRlUmVjb2duaXplci5wcm90b3R5cGUubWFwID0gJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZGVmYXVsdDtcblxuICAgICQkcm91dGUkcmVjb2duaXplciQkUm91dGVSZWNvZ25pemVyLlZFUlNJT04gPSAnMC4xLjknO1xuXG4gICAgdmFyICQkcm91dGUkcmVjb2duaXplciQkZGVmYXVsdCA9ICQkcm91dGUkcmVjb2duaXplciQkUm91dGVSZWNvZ25pemVyO1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZSgncm91dGUtcmVjb2duaXplcicsIGZ1bmN0aW9uKCkgeyByZXR1cm4gJCRyb3V0ZSRyZWNvZ25pemVyJCRkZWZhdWx0OyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9ICQkcm91dGUkcmVjb2duaXplciQkZGVmYXVsdDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snUm91dGVSZWNvZ25pemVyJ10gPSAkJHJvdXRlJHJlY29nbml6ZXIkJGRlZmF1bHQ7XG4gICAgfVxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVjb2duaXplci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8kLztcbnZhciByZWdleEVzY2FwZVJFID0gL1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZztcblxuLy8gaW5zdGFsbCB2LWxpbmssIHdoaWNoIHByb3ZpZGVzIG5hdmlnYXRpb24gc3VwcG9ydCBmb3Jcbi8vIEhUTUw1IGhpc3RvcnkgbW9kZVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoVnVlKSB7XG5cbiAgdmFyIF8gPSBWdWUudXRpbDtcblxuICBWdWUuZGlyZWN0aXZlKCdsaW5rJywge1xuXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciB2bSA9IHRoaXMudm07XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdm0uJHJvdXRlKSB7XG4gICAgICAgIF91dGlsLndhcm4oJ3YtbGluayBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhICcgKyAncm91dGVyLWVuYWJsZWQgYXBwLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcm91dGVyID0gdm0uJHJvdXRlLnJvdXRlcjtcbiAgICAgIHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gICAgICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHJldHVybjtcbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2hlbiBwcmV2ZW50RGVmYXVsdCBjYWxsZWRcbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCBvbiByaWdodCBjbGlja1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHJldHVybjtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gX3RoaXMudGFyZ2V0O1xuICAgICAgICB2YXIgZ28gPSBmdW5jdGlvbiBnbyh0YXJnZXQpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgICByb3V0ZXIuZ28odGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzLmVsLnRhZ05hbWUgPT09ICdBJyB8fCBlLnRhcmdldCA9PT0gX3RoaXMuZWwpIHtcbiAgICAgICAgICAvLyB2LWxpbmsgb24gPGEgdi1saW5rPVwiJ3BhdGgnXCI+XG4gICAgICAgICAgZ28odGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB2LWxpbmsgZGVsZWdhdGUgb24gPGRpdiB2LWxpbms+XG4gICAgICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICAgICAgd2hpbGUgKGVsICYmIGVsLnRhZ05hbWUgIT09ICdBJyAmJiBlbCAhPT0gX3RoaXMuZWwpIHtcbiAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlbC50YWdOYW1lICE9PSAnQScgfHwgIWVsLmhyZWYpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IG5vdCBhbmNob3JcbiAgICAgICAgICAgIGdvKHRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzYW1lT3JpZ2luKGVsKSkge1xuICAgICAgICAgICAgZ28oe1xuICAgICAgICAgICAgICBwYXRoOiBlbC5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcmVwbGFjZTogdGFyZ2V0ICYmIHRhcmdldC5yZXBsYWNlLFxuICAgICAgICAgICAgICBhcHBlbmQ6IHRhcmdldCAmJiB0YXJnZXQuYXBwZW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVyKTtcbiAgICAgIC8vIG1hbmFnZSBhY3RpdmUgbGluayBjbGFzc1xuICAgICAgdGhpcy51bndhdGNoID0gdm0uJHdhdGNoKCckcm91dGUucGF0aCcsIF8uYmluZCh0aGlzLnVwZGF0ZUNsYXNzZXMsIHRoaXMpKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUocGF0aCkge1xuICAgICAgdmFyIHJvdXRlciA9IHRoaXMudm0uJHJvdXRlLnJvdXRlcjtcbiAgICAgIHZhciBhcHBlbmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnRhcmdldCA9IHBhdGg7XG4gICAgICBpZiAoXy5pc09iamVjdChwYXRoKSkge1xuICAgICAgICBhcHBlbmQgPSBwYXRoLmFwcGVuZDtcbiAgICAgICAgdGhpcy5leGFjdCA9IHBhdGguZXhhY3Q7XG4gICAgICAgIHRoaXMucHJldkFjdGl2ZUNsYXNzID0gdGhpcy5hY3RpdmVDbGFzcztcbiAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9IHBhdGguYWN0aXZlQ2xhc3M7XG4gICAgICB9XG4gICAgICBwYXRoID0gdGhpcy5wYXRoID0gcm91dGVyLl9zdHJpbmdpZnlQYXRoKHBhdGgpO1xuICAgICAgdGhpcy5hY3RpdmVSRSA9IHBhdGggJiYgIXRoaXMuZXhhY3QgPyBuZXcgUmVnRXhwKCdeJyArIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKSArICcoXFxcXC98JCknKSA6IG51bGw7XG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzZXModGhpcy52bS4kcm91dGUucGF0aCk7XG4gICAgICB2YXIgaXNBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gICAgICAvLyBkbyBub3QgZm9ybWF0IG5vbi1oYXNoIHJlbGF0aXZlIHBhdGhzXG4gICAgICB2YXIgaHJlZiA9IHBhdGggJiYgKHJvdXRlci5tb2RlID09PSAnaGFzaCcgfHwgaXNBYnNvbHV0ZSkgPyByb3V0ZXIuaGlzdG9yeS5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCkgOiBwYXRoO1xuICAgICAgaWYgKHRoaXMuZWwudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgdGhpcy5lbC5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUNsYXNzZXM6IGZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMocGF0aCkge1xuICAgICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICAgIHZhciBkZXN0ID0gdGhpcy5wYXRoO1xuICAgICAgdmFyIHJvdXRlciA9IHRoaXMudm0uJHJvdXRlLnJvdXRlcjtcbiAgICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgfHwgcm91dGVyLl9saW5rQWN0aXZlQ2xhc3M7XG4gICAgICAvLyBjbGVhciBvbGQgY2xhc3NcbiAgICAgIGlmICh0aGlzLnByZXZBY3RpdmVDbGFzcyAhPT0gYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgXy5yZW1vdmVDbGFzcyhlbCwgdGhpcy5wcmV2QWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgLy8gYWRkIG5ldyBjbGFzc1xuICAgICAgaWYgKHRoaXMuZXhhY3QpIHtcbiAgICAgICAgaWYgKGRlc3QgPT09IHBhdGggfHxcbiAgICAgICAgLy8gYWxzbyBhbGxvdyBhZGRpdGlvbmFsIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGRlc3QuY2hhckF0KGRlc3QubGVuZ3RoIC0gMSkgIT09ICcvJyAmJiBkZXN0ID09PSBwYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykpIHtcbiAgICAgICAgICBfLmFkZENsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXy5yZW1vdmVDbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVSRSAmJiB0aGlzLmFjdGl2ZVJFLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICBfLmFkZENsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXy5yZW1vdmVDbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlcik7XG4gICAgICB0aGlzLnVud2F0Y2ggJiYgdGhpcy51bndhdGNoKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzYW1lT3JpZ2luKGxpbmspIHtcbiAgICByZXR1cm4gbGluay5wcm90b2NvbCA9PT0gbG9jYXRpb24ucHJvdG9jb2wgJiYgbGluay5ob3N0bmFtZSA9PT0gbG9jYXRpb24uaG9zdG5hbWUgJiYgbGluay5wb3J0ID09PSBsb2NhdGlvbi5wb3J0O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxudmFyIF9waXBlbGluZSA9IHJlcXVpcmUoJy4uL3BpcGVsaW5lJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChWdWUpIHtcblxuICB2YXIgXyA9IFZ1ZS51dGlsO1xuICB2YXIgY29tcG9uZW50RGVmID1cbiAgLy8gMC4xMlxuICBWdWUuZGlyZWN0aXZlKCdfY29tcG9uZW50JykgfHxcbiAgLy8gMS4wXG4gIFZ1ZS5pbnRlcm5hbERpcmVjdGl2ZXMuY29tcG9uZW50O1xuICAvLyA8cm91dGVyLXZpZXc+IGV4dGVuZHMgdGhlIGludGVybmFsIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAgdmFyIHZpZXdEZWYgPSBfLmV4dGVuZCh7fSwgY29tcG9uZW50RGVmKTtcblxuICAvLyB3aXRoIHNvbWUgb3ZlcnJpZGVzXG4gIF8uZXh0ZW5kKHZpZXdEZWYsIHtcblxuICAgIF9pc1JvdXRlclZpZXc6IHRydWUsXG5cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy52bS4kcm91dGU7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgX3V0aWwud2FybignPHJvdXRlci12aWV3PiBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhICcgKyAncm91dGVyLWVuYWJsZWQgYXBwLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBmb3JjZSBkeW5hbWljIGRpcmVjdGl2ZSBzbyB2LWNvbXBvbmVudCBkb2Vzbid0XG4gICAgICAvLyBhdHRlbXB0IHRvIGJ1aWxkIHJpZ2h0IG5vd1xuICAgICAgdGhpcy5faXNEeW5hbWljTGl0ZXJhbCA9IHRydWU7XG4gICAgICAvLyBmaW5hbGx5LCBpbml0IGJ5IGRlbGVnYXRpbmcgdG8gdi1jb21wb25lbnRcbiAgICAgIGNvbXBvbmVudERlZi5iaW5kLmNhbGwodGhpcyk7XG5cbiAgICAgIC8vIGFsbCB3ZSBuZWVkIHRvIGRvIGhlcmUgaXMgcmVnaXN0ZXJpbmcgdGhpcyB2aWV3XG4gICAgICAvLyBpbiB0aGUgcm91dGVyLiBhY3R1YWwgY29tcG9uZW50IHN3aXRjaGluZyB3aWxsIGJlXG4gICAgICAvLyBtYW5hZ2VkIGJ5IHRoZSBwaXBlbGluZS5cbiAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlciA9IHJvdXRlLnJvdXRlcjtcbiAgICAgIHJvdXRlci5fdmlld3MudW5zaGlmdCh0aGlzKTtcblxuICAgICAgLy8gbm90ZSB0aGUgdmlld3MgYXJlIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICB2YXIgcGFyZW50VmlldyA9IHJvdXRlci5fdmlld3NbMV07XG4gICAgICBpZiAocGFyZW50Vmlldykge1xuICAgICAgICAvLyByZWdpc3RlciBzZWxmIGFzIGEgY2hpbGQgb2YgdGhlIHBhcmVudCB2aWV3LFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGFjdGl2YXRpbmcgbm93LiBUaGlzIGlzIHNvIHRoYXQgdGhlXG4gICAgICAgIC8vIGNoaWxkJ3MgYWN0aXZhdGUgaG9vayBpcyBjYWxsZWQgYWZ0ZXIgdGhlXG4gICAgICAgIC8vIHBhcmVudCdzIGhhcyByZXNvbHZlZC5cbiAgICAgICAgcGFyZW50Vmlldy5jaGlsZFZpZXcgPSB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBoYW5kbGUgbGF0ZS1yZW5kZXJlZCB2aWV3XG4gICAgICAvLyB0d28gcG9zc2liaWxpdGllczpcbiAgICAgIC8vIDEuIHJvb3QgdmlldyByZW5kZXJlZCBhZnRlciB0cmFuc2l0aW9uIGhhcyBiZWVuXG4gICAgICAvLyAgICB2YWxpZGF0ZWQ7XG4gICAgICAvLyAyLiBjaGlsZCB2aWV3IHJlbmRlcmVkIGFmdGVyIHBhcmVudCB2aWV3IGhhcyBiZWVuXG4gICAgICAvLyAgICBhY3RpdmF0ZWQuXG4gICAgICB2YXIgdHJhbnNpdGlvbiA9IHJvdXRlLnJvdXRlci5fY3VycmVudFRyYW5zaXRpb247XG4gICAgICBpZiAoIXBhcmVudFZpZXcgJiYgdHJhbnNpdGlvbi5kb25lIHx8IHBhcmVudFZpZXcgJiYgcGFyZW50Vmlldy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgdmFyIGRlcHRoID0gcGFyZW50VmlldyA/IHBhcmVudFZpZXcuZGVwdGggKyAxIDogMDtcbiAgICAgICAgX3BpcGVsaW5lLmFjdGl2YXRlKHRoaXMsIHRyYW5zaXRpb24sIGRlcHRoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICB0aGlzLnJvdXRlci5fdmlld3MuJHJlbW92ZSh0aGlzKTtcbiAgICAgIGNvbXBvbmVudERlZi51bmJpbmQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIFZ1ZS5lbGVtZW50RGlyZWN0aXZlKCdyb3V0ZXItdmlldycsIHZpZXdEZWYpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBBYnN0cmFjdEhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBYnN0cmFjdEhpc3RvcnkoX3JlZikge1xuICAgIHZhciBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWJzdHJhY3RIaXN0b3J5KTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gJy8nO1xuICB9XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHRoaXMub25DaGFuZ2UoJy8nKTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIC8vIG5vb3BcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28ocGF0aCwgcmVwbGFjZSwgYXBwZW5kKSB7XG4gICAgcGF0aCA9IHRoaXMuY3VycmVudFBhdGggPSB0aGlzLmZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHBhdGgpO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZm9ybWF0UGF0aCA9IGZ1bmN0aW9uIGZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKSB7XG4gICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogX3V0aWwucmVzb2x2ZVBhdGgodGhpcy5jdXJyZW50UGF0aCwgcGF0aCwgYXBwZW5kKTtcbiAgfTtcblxuICByZXR1cm4gQWJzdHJhY3RIaXN0b3J5O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWJzdHJhY3RIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBIYXNoSGlzdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhhc2hIaXN0b3J5KF9yZWYpIHtcbiAgICB2YXIgaGFzaGJhbmcgPSBfcmVmLmhhc2hiYW5nO1xuICAgIHZhciBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaEhpc3RvcnkpO1xuXG4gICAgdGhpcy5oYXNoYmFuZyA9IGhhc2hiYW5nO1xuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgfVxuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhdGggPSBsb2NhdGlvbi5oYXNoO1xuICAgICAgdmFyIHJhdyA9IHBhdGgucmVwbGFjZSgvXiMhPy8sICcnKTtcbiAgICAgIC8vIGFsd2F5c1xuICAgICAgaWYgKHJhdy5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICByYXcgPSAnLycgKyByYXc7XG4gICAgICB9XG4gICAgICB2YXIgZm9ybWF0dGVkUGF0aCA9IHNlbGYuZm9ybWF0UGF0aChyYXcpO1xuICAgICAgaWYgKGZvcm1hdHRlZFBhdGggIT09IHBhdGgpIHtcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZShmb3JtYXR0ZWRQYXRoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHBhdGhUb01hdGNoID0gZGVjb2RlVVJJKHBhdGgucmVwbGFjZSgvXiMhPy8sICcnKSArIGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICBzZWxmLm9uQ2hhbmdlKHBhdGhUb01hdGNoKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5saXN0ZW5lcik7XG4gICAgdGhpcy5saXN0ZW5lcigpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMubGlzdGVuZXIpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKHBhdGgsIHJlcGxhY2UsIGFwcGVuZCkge1xuICAgIHBhdGggPSB0aGlzLmZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKTtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgbG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5mb3JtYXRQYXRoID0gZnVuY3Rpb24gZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpIHtcbiAgICB2YXIgaXNBYnNvbG91dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICAgIHZhciBwcmVmaXggPSAnIycgKyAodGhpcy5oYXNoYmFuZyA/ICchJyA6ICcnKTtcbiAgICByZXR1cm4gaXNBYnNvbG91dGUgPyBwcmVmaXggKyBwYXRoIDogcHJlZml4ICsgX3V0aWwucmVzb2x2ZVBhdGgobG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIyE/LywgJycpLCBwYXRoLCBhcHBlbmQpO1xuICB9O1xuXG4gIHJldHVybiBIYXNoSGlzdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhhc2hIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBoYXNoUkUgPSAvIy4qJC87XG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290O1xuICAgIHZhciBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTDVIaXN0b3J5KTtcblxuICAgIGlmIChyb290KSB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhlcmUncyB0aGUgc3RhcnRpbmcgc2xhc2hcbiAgICAgIGlmIChyb290LmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICAgIHJvb3QgPSAnLycgKyByb290O1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gICAgICB0aGlzLnJvb3QgPSByb290LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICB0aGlzLnJvb3RSRSA9IG5ldyBSZWdFeHAoJ15cXFxcJyArIHRoaXMucm9vdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICAvLyBjaGVjayBiYXNlIHRhZ1xuICAgIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJyk7XG4gICAgdGhpcy5iYXNlID0gYmFzZUVsICYmIGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgfVxuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdXJsID0gZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKTtcbiAgICAgIGlmIChfdGhpcy5yb290KSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKF90aGlzLnJvb3RSRSwgJycpO1xuICAgICAgfVxuICAgICAgX3RoaXMub25DaGFuZ2UodXJsLCBlICYmIGUuc3RhdGUsIGxvY2F0aW9uLmhhc2gpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5saXN0ZW5lcik7XG4gICAgdGhpcy5saXN0ZW5lcigpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5saXN0ZW5lcik7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKHBhdGgsIHJlcGxhY2UsIGFwcGVuZCkge1xuICAgIHZhciB1cmwgPSB0aGlzLmZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKTtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZWNvcmQgc2Nyb2xsIHBvc2l0aW9uIGJ5IHJlcGxhY2luZyBjdXJyZW50IHN0YXRlXG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgIHBvczoge1xuICAgICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfSwgJycpO1xuICAgICAgLy8gdGhlbiBwdXNoIG5ldyBzdGF0ZVxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuICAgIH1cbiAgICB2YXIgaGFzaE1hdGNoID0gcGF0aC5tYXRjaChoYXNoUkUpO1xuICAgIHZhciBoYXNoID0gaGFzaE1hdGNoICYmIGhhc2hNYXRjaFswXTtcbiAgICBwYXRoID0gdXJsXG4gICAgLy8gc3RyaXAgaGFzaCBzbyBpdCBkb2Vzbid0IG1lc3MgdXAgcGFyYW1zXG4gICAgLnJlcGxhY2UoaGFzaFJFLCAnJylcbiAgICAvLyByZW1vdmUgcm9vdCBiZWZvcmUgbWF0Y2hpbmdcbiAgICAucmVwbGFjZSh0aGlzLnJvb3RSRSwgJycpO1xuICAgIHRoaXMub25DaGFuZ2UocGF0aCwgbnVsbCwgaGFzaCk7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5mb3JtYXRQYXRoID0gZnVuY3Rpb24gZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpIHtcbiAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJ1xuICAgIC8vIGFic29sdXRlIHBhdGhcbiAgICA/IHRoaXMucm9vdCA/IHRoaXMucm9vdCArICcvJyArIHBhdGgucmVwbGFjZSgvXlxcLy8sICcnKSA6IHBhdGggOiBfdXRpbC5yZXNvbHZlUGF0aCh0aGlzLmJhc2UgfHwgbG9jYXRpb24ucGF0aG5hbWUsIHBhdGgsIGFwcGVuZCk7XG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhUTUw1SGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIF91dGlsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWwpO1xuXG52YXIgX292ZXJyaWRlID0gcmVxdWlyZSgnLi9vdmVycmlkZScpO1xuXG52YXIgX292ZXJyaWRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX292ZXJyaWRlKTtcblxudmFyIF9yb3V0ZVJlY29nbml6ZXIgPSByZXF1aXJlKCdyb3V0ZS1yZWNvZ25pemVyJyk7XG5cbnZhciBfcm91dGVSZWNvZ25pemVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlUmVjb2duaXplcik7XG5cbnZhciBfcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbnZhciBfcm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGUpO1xuXG52YXIgX3RyYW5zaXRpb24gPSByZXF1aXJlKCcuL3RyYW5zaXRpb24nKTtcblxudmFyIF90cmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb24pO1xuXG52YXIgX2RpcmVjdGl2ZXNWaWV3ID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL3ZpZXcnKTtcblxudmFyIF9kaXJlY3RpdmVzVmlldzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXJlY3RpdmVzVmlldyk7XG5cbnZhciBfZGlyZWN0aXZlc0xpbmsgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvbGluaycpO1xuXG52YXIgX2RpcmVjdGl2ZXNMaW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpcmVjdGl2ZXNMaW5rKTtcblxudmFyIF9oaXN0b3J5QWJzdHJhY3QgPSByZXF1aXJlKCcuL2hpc3RvcnkvYWJzdHJhY3QnKTtcblxudmFyIF9oaXN0b3J5QWJzdHJhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUFic3RyYWN0KTtcblxudmFyIF9oaXN0b3J5SGFzaCA9IHJlcXVpcmUoJy4vaGlzdG9yeS9oYXNoJyk7XG5cbnZhciBfaGlzdG9yeUhhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUhhc2gpO1xuXG52YXIgX2hpc3RvcnlIdG1sNSA9IHJlcXVpcmUoJy4vaGlzdG9yeS9odG1sNScpO1xuXG52YXIgX2hpc3RvcnlIdG1sNTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oaXN0b3J5SHRtbDUpO1xuXG52YXIgaGlzdG9yeUJhY2tlbmRzID0ge1xuICBhYnN0cmFjdDogX2hpc3RvcnlBYnN0cmFjdDJbJ2RlZmF1bHQnXSxcbiAgaGFzaDogX2hpc3RvcnlIYXNoMlsnZGVmYXVsdCddLFxuICBodG1sNTogX2hpc3RvcnlIdG1sNTJbJ2RlZmF1bHQnXVxufTtcblxuLy8gbGF0ZSBiaW5kIGR1cmluZyBpbnN0YWxsXG52YXIgVnVlID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJvdXRlciBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqL1xuXG52YXIgUm91dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUm91dGVyKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgX3JlZiRoYXNoYmFuZyA9IF9yZWYuaGFzaGJhbmc7XG4gICAgdmFyIGhhc2hiYW5nID0gX3JlZiRoYXNoYmFuZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkaGFzaGJhbmc7XG4gICAgdmFyIF9yZWYkYWJzdHJhY3QgPSBfcmVmLmFic3RyYWN0O1xuICAgIHZhciBhYnN0cmFjdCA9IF9yZWYkYWJzdHJhY3QgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRhYnN0cmFjdDtcbiAgICB2YXIgX3JlZiRoaXN0b3J5ID0gX3JlZi5oaXN0b3J5O1xuICAgIHZhciBoaXN0b3J5ID0gX3JlZiRoaXN0b3J5ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkaGlzdG9yeTtcbiAgICB2YXIgX3JlZiRzYXZlU2Nyb2xsUG9zaXRpb24gPSBfcmVmLnNhdmVTY3JvbGxQb3NpdGlvbjtcbiAgICB2YXIgc2F2ZVNjcm9sbFBvc2l0aW9uID0gX3JlZiRzYXZlU2Nyb2xsUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRzYXZlU2Nyb2xsUG9zaXRpb247XG4gICAgdmFyIF9yZWYkdHJhbnNpdGlvbk9uTG9hZCA9IF9yZWYudHJhbnNpdGlvbk9uTG9hZDtcbiAgICB2YXIgdHJhbnNpdGlvbk9uTG9hZCA9IF9yZWYkdHJhbnNpdGlvbk9uTG9hZCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHRyYW5zaXRpb25PbkxvYWQ7XG4gICAgdmFyIF9yZWYkc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3IgPSBfcmVmLnN1cHByZXNzVHJhbnNpdGlvbkVycm9yO1xuICAgIHZhciBzdXBwcmVzc1RyYW5zaXRpb25FcnJvciA9IF9yZWYkc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3IgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRzdXBwcmVzc1RyYW5zaXRpb25FcnJvcjtcbiAgICB2YXIgX3JlZiRyb290ID0gX3JlZi5yb290O1xuICAgIHZhciByb290ID0gX3JlZiRyb290ID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZiRyb290O1xuICAgIHZhciBfcmVmJGxpbmtBY3RpdmVDbGFzcyA9IF9yZWYubGlua0FjdGl2ZUNsYXNzO1xuICAgIHZhciBsaW5rQWN0aXZlQ2xhc3MgPSBfcmVmJGxpbmtBY3RpdmVDbGFzcyA9PT0gdW5kZWZpbmVkID8gJ3YtbGluay1hY3RpdmUnIDogX3JlZiRsaW5rQWN0aXZlQ2xhc3M7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghUm91dGVyLmluc3RhbGxlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgaW5zdGFsbCB0aGUgUm91dGVyIHdpdGggVnVlLnVzZSgpIGJlZm9yZSAnICsgJ2NyZWF0aW5nIGFuIGluc3RhbmNlLicpO1xuICAgIH1cblxuICAgIC8vIFZ1ZSBpbnN0YW5jZXNcbiAgICB0aGlzLmFwcCA9IG51bGw7XG4gICAgdGhpcy5fdmlld3MgPSBbXTtcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gcm91dGUgcmVjb2duaXplclxuICAgIHRoaXMuX3JlY29nbml6ZXIgPSBuZXcgX3JvdXRlUmVjb2duaXplcjJbJ2RlZmF1bHQnXSgpO1xuICAgIHRoaXMuX2d1YXJkUmVjb2duaXplciA9IG5ldyBfcm91dGVSZWNvZ25pemVyMlsnZGVmYXVsdCddKCk7XG5cbiAgICAvLyBzdGF0ZVxuICAgIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGFydENiID0gbnVsbDtcbiAgICB0aGlzLl9jdXJyZW50Um91dGUgPSB7fTtcbiAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fcHJldmlvdXNUcmFuc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9ub3RGb3VuZEhhbmRsZXIgPSBudWxsO1xuICAgIHRoaXMuX25vdEZvdW5kUmVkaXJlY3QgPSBudWxsO1xuICAgIHRoaXMuX2JlZm9yZUVhY2hIb29rcyA9IFtdO1xuICAgIHRoaXMuX2FmdGVyRWFjaEhvb2tzID0gW107XG5cbiAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgIHRoaXMuX2hhc1B1c2hTdGF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICAgIC8vIHRyaWdnZXIgdHJhbnNpdGlvbiBvbiBpbml0aWFsIHJlbmRlcj9cbiAgICB0aGlzLl9yZW5kZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RyYW5zaXRpb25PbkxvYWQgPSB0cmFuc2l0aW9uT25Mb2FkO1xuXG4gICAgLy8gaGlzdG9yeSBtb2RlXG4gICAgdGhpcy5fYWJzdHJhY3QgPSBhYnN0cmFjdDtcbiAgICB0aGlzLl9oYXNoYmFuZyA9IGhhc2hiYW5nO1xuICAgIHRoaXMuX2hpc3RvcnkgPSB0aGlzLl9oYXNQdXNoU3RhdGUgJiYgaGlzdG9yeTtcblxuICAgIC8vIG90aGVyIG9wdGlvbnNcbiAgICB0aGlzLl9zYXZlU2Nyb2xsUG9zaXRpb24gPSBzYXZlU2Nyb2xsUG9zaXRpb247XG4gICAgdGhpcy5fbGlua0FjdGl2ZUNsYXNzID0gbGlua0FjdGl2ZUNsYXNzO1xuICAgIHRoaXMuX3N1cHByZXNzID0gc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3I7XG5cbiAgICAvLyBjcmVhdGUgaGlzdG9yeSBvYmplY3RcbiAgICB2YXIgaW5Ccm93c2VyID0gVnVlLnV0aWwuaW5Ccm93c2VyO1xuICAgIHRoaXMubW9kZSA9ICFpbkJyb3dzZXIgfHwgdGhpcy5fYWJzdHJhY3QgPyAnYWJzdHJhY3QnIDogdGhpcy5faGlzdG9yeSA/ICdodG1sNScgOiAnaGFzaCc7XG5cbiAgICB2YXIgSGlzdG9yeSA9IGhpc3RvcnlCYWNrZW5kc1t0aGlzLm1vZGVdO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSh7XG4gICAgICByb290OiByb290LFxuICAgICAgaGFzaGJhbmc6IHRoaXMuX2hhc2hiYW5nLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHBhdGgsIHN0YXRlLCBhbmNob3IpIHtcbiAgICAgICAgc2VsZi5fbWF0Y2gocGF0aCwgc3RhdGUsIGFuY2hvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgZGlyZWN0bHkgcGFzc2luZyBjb21wb25lbnRzIHRvIGEgcm91dGVcbiAgICogZGVmaW5pdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICovXG5cbiAgLy8gQVBJID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAqIFJlZ2lzdGVyIGEgbWFwIG9mIHRvcC1sZXZlbCBwYXRocy5cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcbiAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIG1hcChfbWFwKSB7XG4gICAgZm9yICh2YXIgcm91dGUgaW4gX21hcCkge1xuICAgICAgdGhpcy5vbihyb3V0ZSwgX21hcFtyb3V0ZV0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBzaW5nbGUgcm9vdC1sZXZlbCBwYXRoXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByb290UGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICAgKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBjb21wb25lbnRcbiAgICogICAgICAgICAgICAgICAgIC0ge09iamVjdH0gW3N1YlJvdXRlc11cbiAgICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IFtmb3JjZVJlZnJlc2hdXG4gICAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW2JlZm9yZV1cbiAgICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbYWZ0ZXJdXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihyb290UGF0aCwgaGFuZGxlcikge1xuICAgIGlmIChyb290UGF0aCA9PT0gJyonKSB7XG4gICAgICB0aGlzLl9ub3RGb3VuZChoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkUm91dGUocm9vdFBhdGgsIGhhbmRsZXIsIFtdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCByZWRpcmVjdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KG1hcCkge1xuICAgIGZvciAodmFyIHBhdGggaW4gbWFwKSB7XG4gICAgICB0aGlzLl9hZGRSZWRpcmVjdChwYXRoLCBtYXBbcGF0aF0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IGFsaWFzZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5hbGlhcyA9IGZ1bmN0aW9uIGFsaWFzKG1hcCkge1xuICAgIGZvciAodmFyIHBhdGggaW4gbWFwKSB7XG4gICAgICB0aGlzLl9hZGRBbGlhcyhwYXRoLCBtYXBbcGF0aF0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IGdsb2JhbCBiZWZvcmUgaG9vay5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5iZWZvcmVFYWNoID0gZnVuY3Rpb24gYmVmb3JlRWFjaChmbikge1xuICAgIHRoaXMuX2JlZm9yZUVhY2hIb29rcy5wdXNoKGZuKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IGdsb2JhbCBhZnRlciBob29rLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaChmbikge1xuICAgIHRoaXMuX2FmdGVyRWFjaEhvb2tzLnB1c2goZm4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZSB0byBhIGdpdmVuIHBhdGguXG4gICAqIFRoZSBwYXRoIGNhbiBiZSBhbiBvYmplY3QgZGVzY3JpYmluZyBhIG5hbWVkIHBhdGggaW5cbiAgICogdGhlIGZvcm1hdCBvZiB7IG5hbWU6ICcuLi4nLCBwYXJhbXM6IHt9LCBxdWVyeToge319XG4gICAqIFRoZSBwYXRoIGlzIGFzc3VtZWQgdG8gYmUgYWxyZWFkeSBkZWNvZGVkLCBhbmQgd2lsbFxuICAgKiBiZSByZXNvbHZlZCBhZ2FpbnN0IHJvb3QgKGlmIHByb3ZpZGVkKVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHBhdGhcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVwbGFjZV1cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKHBhdGgpIHtcbiAgICB2YXIgcmVwbGFjZSA9IGZhbHNlO1xuICAgIHZhciBhcHBlbmQgPSBmYWxzZTtcbiAgICBpZiAoVnVlLnV0aWwuaXNPYmplY3QocGF0aCkpIHtcbiAgICAgIHJlcGxhY2UgPSBwYXRoLnJlcGxhY2U7XG4gICAgICBhcHBlbmQgPSBwYXRoLmFwcGVuZDtcbiAgICB9XG4gICAgcGF0aCA9IHRoaXMuX3N0cmluZ2lmeVBhdGgocGF0aCk7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5nbyhwYXRoLCByZXBsYWNlLCBhcHBlbmQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2hvcnQgaGFuZCBmb3IgcmVwbGFjaW5nIGN1cnJlbnQgcGF0aFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB0aGlzLmdvKHsgcGF0aDogcGF0aCwgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJvdXRlci5cbiAgICpcbiAgICogQHBhcmFtIHtWdWVDb25zdHJ1Y3Rvcn0gQXBwXG4gICAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChBcHAsIGNvbnRhaW5lciwgY2IpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodGhpcy5fc3RhcnRlZCkge1xuICAgICAgX3V0aWwud2FybignYWxyZWFkeSBzdGFydGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdGFydENiID0gY2I7XG4gICAgaWYgKCF0aGlzLmFwcCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIUFwcCB8fCAhY29udGFpbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBzdGFydCB2dWUtcm91dGVyIHdpdGggYSBjb21wb25lbnQgYW5kIGEgJyArICdyb290IGNvbnRhaW5lci4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHZhciBDdG9yID0gdGhpcy5fYXBwQ29uc3RydWN0b3IgPSB0eXBlb2YgQXBwID09PSAnZnVuY3Rpb24nID8gQXBwIDogVnVlLmV4dGVuZChBcHApO1xuICAgICAgLy8gZ2l2ZSBpdCBhIG5hbWUgZm9yIGJldHRlciBkZWJ1Z2dpbmdcbiAgICAgIEN0b3Iub3B0aW9ucy5uYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgJ1JvdXRlckFwcCc7XG4gICAgfVxuICAgIHRoaXMuaGlzdG9yeS5zdGFydCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byByb3V0ZSBjaGFuZ2VzLlxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHRoaXMuaGlzdG9yeS5zdG9wKCk7XG4gICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIC8vIEludGVybmFsIG1ldGhvZHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgKiBBZGQgYSByb3V0ZSBjb250YWluaW5nIGEgbGlzdCBvZiBzZWdtZW50cyB0byB0aGUgaW50ZXJuYWxcbiAgKiByb3V0ZSByZWNvZ25pemVyLiBXaWxsIGJlIGNhbGxlZCByZWN1cnNpdmVseSB0byBhZGQgYWxsXG4gICogcG9zc2libGUgc3ViLXJvdXRlcy5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgKiBAcGFyYW0ge0FycmF5fSBzZWdtZW50c1xuICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX2FkZFJvdXRlID0gZnVuY3Rpb24gX2FkZFJvdXRlKHBhdGgsIGhhbmRsZXIsIHNlZ21lbnRzKSB7XG4gICAgZ3VhcmRDb21wb25lbnQocGF0aCwgaGFuZGxlcik7XG4gICAgaGFuZGxlci5wYXRoID0gcGF0aDtcbiAgICBoYW5kbGVyLmZ1bGxQYXRoID0gKHNlZ21lbnRzLnJlZHVjZShmdW5jdGlvbiAocGF0aCwgc2VnbWVudCkge1xuICAgICAgcmV0dXJuIHBhdGggKyBzZWdtZW50LnBhdGg7XG4gICAgfSwgJycpICsgcGF0aCkucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICB9KTtcbiAgICB0aGlzLl9yZWNvZ25pemVyLmFkZChzZWdtZW50cywge1xuICAgICAgYXM6IGhhbmRsZXIubmFtZVxuICAgIH0pO1xuICAgIC8vIGFkZCBzdWIgcm91dGVzXG4gICAgaWYgKGhhbmRsZXIuc3ViUm91dGVzKSB7XG4gICAgICBmb3IgKHZhciBzdWJQYXRoIGluIGhhbmRsZXIuc3ViUm91dGVzKSB7XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IHdhbGsgYWxsIHN1YiByb3V0ZXNcbiAgICAgICAgdGhpcy5fYWRkUm91dGUoc3ViUGF0aCwgaGFuZGxlci5zdWJSb3V0ZXNbc3ViUGF0aF0sXG4gICAgICAgIC8vIHBhc3MgYSBjb3B5IGluIHJlY3Vyc2lvbiB0byBhdm9pZCBtdXRhdGluZ1xuICAgICAgICAvLyBhY3Jvc3MgYnJhbmNoZXNcbiAgICAgICAgc2VnbWVudHMuc2xpY2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vdEZvdW5kIHJvdXRlIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX25vdEZvdW5kID0gZnVuY3Rpb24gX25vdEZvdW5kKGhhbmRsZXIpIHtcbiAgICBndWFyZENvbXBvbmVudCgnKicsIGhhbmRsZXIpO1xuICAgIHRoaXMuX25vdEZvdW5kSGFuZGxlciA9IFt7IGhhbmRsZXI6IGhhbmRsZXIgfV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlZGlyZWN0IHJlY29yZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlZGlyZWN0UGF0aFxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9hZGRSZWRpcmVjdCA9IGZ1bmN0aW9uIF9hZGRSZWRpcmVjdChwYXRoLCByZWRpcmVjdFBhdGgpIHtcbiAgICBpZiAocGF0aCA9PT0gJyonKSB7XG4gICAgICB0aGlzLl9ub3RGb3VuZFJlZGlyZWN0ID0gcmVkaXJlY3RQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRHdWFyZChwYXRoLCByZWRpcmVjdFBhdGgsIHRoaXMucmVwbGFjZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYW4gYWxpYXMgcmVjb3JkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWxpYXNQYXRoXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX2FkZEFsaWFzID0gZnVuY3Rpb24gX2FkZEFsaWFzKHBhdGgsIGFsaWFzUGF0aCkge1xuICAgIHRoaXMuX2FkZEd1YXJkKHBhdGgsIGFsaWFzUGF0aCwgdGhpcy5fbWF0Y2gpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBwYXRoIGd1YXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWFwcGVkUGF0aFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX2FkZEd1YXJkID0gZnVuY3Rpb24gX2FkZEd1YXJkKHBhdGgsIG1hcHBlZFBhdGgsIF9oYW5kbGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2d1YXJkUmVjb2duaXplci5hZGQoW3tcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKG1hdGNoLCBxdWVyeSkge1xuICAgICAgICB2YXIgcmVhbFBhdGggPSBfdXRpbC5tYXBQYXJhbXMobWFwcGVkUGF0aCwgbWF0Y2gucGFyYW1zLCBxdWVyeSk7XG4gICAgICAgIF9oYW5kbGVyLmNhbGwoX3RoaXMsIHJlYWxQYXRoKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgcGF0aCBtYXRjaGVzIGFueSByZWRpcmVjdCByZWNvcmRzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAtIGlmIHRydWUsIHdpbGwgc2tpcCBub3JtYWwgbWF0Y2guXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX2NoZWNrR3VhcmQgPSBmdW5jdGlvbiBfY2hlY2tHdWFyZChwYXRoKSB7XG4gICAgdmFyIG1hdGNoZWQgPSB0aGlzLl9ndWFyZFJlY29nbml6ZXIucmVjb2duaXplKHBhdGgpO1xuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICBtYXRjaGVkWzBdLmhhbmRsZXIobWF0Y2hlZFswXSwgbWF0Y2hlZC5xdWVyeVBhcmFtcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX25vdEZvdW5kUmVkaXJlY3QpIHtcbiAgICAgIG1hdGNoZWQgPSB0aGlzLl9yZWNvZ25pemVyLnJlY29nbml6ZShwYXRoKTtcbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICB0aGlzLnJlcGxhY2UodGhpcy5fbm90Rm91bmRSZWRpcmVjdCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTWF0Y2ggYSBVUkwgcGF0aCBhbmQgc2V0IHRoZSByb3V0ZSBjb250ZXh0IG9uIHZtLFxuICAgKiB0cmlnZ2VyaW5nIHZpZXcgdXBkYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGF0ZV1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFthbmNob3JdXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX21hdGNoID0gZnVuY3Rpb24gX21hdGNoKHBhdGgsIHN0YXRlLCBhbmNob3IpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9jaGVja0d1YXJkKHBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRSb3V0ZSA9IHRoaXMuX2N1cnJlbnRSb3V0ZTtcbiAgICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbjtcblxuICAgIGlmIChjdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgaWYgKGN1cnJlbnRUcmFuc2l0aW9uLnRvLnBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB3ZSBoYXZlIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIGdvaW5nIHRvIHRoZSBzYW1lIHBhdGhcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Um91dGUucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAvLyBXZSBhcmUgZ29pbmcgdG8gdGhlIHNhbWUgcGF0aCwgYnV0IHdlIGFsc28gaGF2ZSBhbiBvbmdvaW5nIGJ1dFxuICAgICAgICAvLyBub3QteWV0LXZhbGlkYXRlZCB0cmFuc2l0aW9uLiBBYm9ydCB0aGF0IHRyYW5zaXRpb24gYW5kIHJlc2V0IHRvXG4gICAgICAgIC8vIHByZXYgdHJhbnNpdGlvbi5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uID0gdGhpcy5fcHJldlRyYW5zaXRpb247XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvaW5nIHRvIGEgdG90YWxseSBkaWZmZXJlbnQgcGF0aC4gYWJvcnQgb25nb2luZyB0cmFuc2l0aW9uLlxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zdHJ1Y3QgbmV3IHJvdXRlIGFuZCB0cmFuc2l0aW9uIGNvbnRleHRcbiAgICB2YXIgcm91dGUgPSBuZXcgX3JvdXRlMlsnZGVmYXVsdCddKHBhdGgsIHRoaXMpO1xuICAgIHZhciB0cmFuc2l0aW9uID0gbmV3IF90cmFuc2l0aW9uMlsnZGVmYXVsdCddKHRoaXMsIHJvdXRlLCBjdXJyZW50Um91dGUpO1xuXG4gICAgLy8gY3VycmVudCB0cmFuc2l0aW9uIGlzIHVwZGF0ZWQgcmlnaHQgbm93LlxuICAgIC8vIGhvd2V2ZXIsIGN1cnJlbnQgcm91dGUgd2lsbCBvbmx5IGJlIHVwZGF0ZWQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gaGFzXG4gICAgLy8gYmVlbiB2YWxpZGF0ZWQuXG4gICAgdGhpcy5fcHJldlRyYW5zaXRpb24gPSBjdXJyZW50VHJhbnNpdGlvbjtcbiAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICBpZiAoIXRoaXMuYXBwKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdGhpcy5hcHAgPSBuZXcgdGhpcy5fYXBwQ29uc3RydWN0b3Ioe1xuICAgICAgICBlbDogdGhpcy5fYXBwQ29udGFpbmVyLFxuICAgICAgICBfbWV0YToge1xuICAgICAgICAgICRyb3V0ZTogcm91dGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZ2xvYmFsIGJlZm9yZSBob29rXG4gICAgdmFyIGJlZm9yZUhvb2tzID0gdGhpcy5fYmVmb3JlRWFjaEhvb2tzO1xuICAgIHZhciBzdGFydFRyYW5zaXRpb24gPSBmdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oKSB7XG4gICAgICB0cmFuc2l0aW9uLnN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLl9wb3N0VHJhbnNpdGlvbihyb3V0ZSwgc3RhdGUsIGFuY2hvcik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGJlZm9yZUhvb2tzLmxlbmd0aCkge1xuICAgICAgdHJhbnNpdGlvbi5ydW5RdWV1ZShiZWZvcmVIb29rcywgZnVuY3Rpb24gKGhvb2ssIF8sIG5leHQpIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24gPT09IF90aGlzMi5fY3VycmVudFRyYW5zaXRpb24pIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLmNhbGxIb29rKGhvb2ssIG51bGwsIG5leHQsIHtcbiAgICAgICAgICAgIGV4cGVjdEJvb2xlYW46IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgc3RhcnRUcmFuc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9yZW5kZXJlZCAmJiB0aGlzLl9zdGFydENiKSB7XG4gICAgICB0aGlzLl9zdGFydENiLmNhbGwobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gSEFDSzpcbiAgICAvLyBzZXQgcmVuZGVyZWQgdG8gdHJ1ZSBhZnRlciB0aGUgdHJhbnNpdGlvbiBzdGFydCwgc29cbiAgICAvLyB0aGF0IGNvbXBvbmVudHMgdGhhdCBhcmUgYWNpdHZhdGVkIHN5bmNocm9ub3VzbHkga25vd1xuICAgIC8vIHdoZXRoZXIgaXQgaXMgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIHRoaXMuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IGN1cnJlbnQgdG8gdGhlIG5ldyB0cmFuc2l0aW9uLlxuICAgKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgdHJhbnNpdGlvbiBvYmplY3Qgd2hlbiB0aGVcbiAgICogdmFsaWRhdGlvbiBvZiBhIHJvdXRlIGhhcyBzdWNjZWVkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9vblRyYW5zaXRpb25WYWxpZGF0ZWQgPSBmdW5jdGlvbiBfb25UcmFuc2l0aW9uVmFsaWRhdGVkKHRyYW5zaXRpb24pIHtcbiAgICAvLyBzZXQgY3VycmVudCByb3V0ZVxuICAgIHZhciByb3V0ZSA9IHRoaXMuX2N1cnJlbnRSb3V0ZSA9IHRyYW5zaXRpb24udG87XG4gICAgLy8gdXBkYXRlIHJvdXRlIGNvbnRleHQgZm9yIGFsbCBjaGlsZHJlblxuICAgIGlmICh0aGlzLmFwcC4kcm91dGUgIT09IHJvdXRlKSB7XG4gICAgICB0aGlzLmFwcC4kcm91dGUgPSByb3V0ZTtcbiAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLiRyb3V0ZSA9IHJvdXRlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNhbGwgZ2xvYmFsIGFmdGVyIGhvb2tcbiAgICBpZiAodGhpcy5fYWZ0ZXJFYWNoSG9va3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9hZnRlckVhY2hIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIHJldHVybiBob29rLmNhbGwobnVsbCwge1xuICAgICAgICAgIHRvOiB0cmFuc2l0aW9uLnRvLFxuICAgICAgICAgIGZyb206IHRyYW5zaXRpb24uZnJvbVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbi5kb25lID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIHN0dWZmIGFmdGVyIHRoZSB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1JvdXRlfSByb3V0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3N0YXRlXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2FuY2hvcl1cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5fcG9zdFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfcG9zdFRyYW5zaXRpb24ocm91dGUsIHN0YXRlLCBhbmNob3IpIHtcbiAgICAvLyBoYW5kbGUgc2Nyb2xsIHBvc2l0aW9uc1xuICAgIC8vIHNhdmVkIHNjcm9sbCBwb3NpdGlvbnMgdGFrZSBwcmlvcml0eVxuICAgIC8vIHRoZW4gd2UgY2hlY2sgaWYgdGhlIHBhdGggaGFzIGFuIGFuY2hvclxuICAgIHZhciBwb3MgPSBzdGF0ZSAmJiBzdGF0ZS5wb3M7XG4gICAgaWYgKHBvcyAmJiB0aGlzLl9zYXZlU2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3MueCwgcG9zLnkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhbmNob3IpIHtcbiAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFuY2hvci5zbGljZSgxKSk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgZWwub2Zmc2V0VG9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgbmFtZWQgcm91dGUgb2JqZWN0IC8gc3RyaW5nIHBhdGhzIGludG9cbiAgICogYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xOdW1iZXJ9IHBhdGhcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9zdHJpbmdpZnlQYXRoID0gZnVuY3Rpb24gX3N0cmluZ2lmeVBhdGgocGF0aCkge1xuICAgIGlmIChwYXRoICYmIHR5cGVvZiBwYXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHBhdGgubmFtZSkge1xuICAgICAgICB2YXIgcGFyYW1zID0gcGF0aC5wYXJhbXMgfHwge307XG4gICAgICAgIGlmIChwYXRoLnF1ZXJ5KSB7XG4gICAgICAgICAgcGFyYW1zLnF1ZXJ5UGFyYW1zID0gcGF0aC5xdWVyeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVjb2duaXplci5nZW5lcmF0ZShwYXRoLm5hbWUsIHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKHBhdGgucGF0aCkge1xuICAgICAgICByZXR1cm4gcGF0aC5wYXRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGF0aCA/IHBhdGggKyAnJyA6ICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUm91dGVyO1xufSkoKTtcblxuZnVuY3Rpb24gZ3VhcmRDb21wb25lbnQocGF0aCwgaGFuZGxlcikge1xuICB2YXIgY29tcCA9IGhhbmRsZXIuY29tcG9uZW50O1xuICBpZiAoVnVlLnV0aWwuaXNQbGFpbk9iamVjdChjb21wKSkge1xuICAgIGNvbXAgPSBoYW5kbGVyLmNvbXBvbmVudCA9IFZ1ZS5leHRlbmQoY29tcCk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgY29tcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGhhbmRsZXIuY29tcG9uZW50ID0gbnVsbDtcbiAgICBfdXRpbC53YXJuKCdpbnZhbGlkIGNvbXBvbmVudCBmb3Igcm91dGUgXCInICsgcGF0aCArICdcIi4nKTtcbiAgfVxufVxuXG4vKiBJbnN0YWxsYXRpb24gKi9cblxuUm91dGVyLmluc3RhbGxlZCA9IGZhbHNlO1xuXG4vKipcbiAqIEluc3RhbGxhdGlvbiBpbnRlcmZhY2UuXG4gKiBJbnN0YWxsIHRoZSBuZWNlc3NhcnkgZGlyZWN0aXZlcy5cbiAqL1xuXG5Sb3V0ZXIuaW5zdGFsbCA9IGZ1bmN0aW9uIChleHRlcm5hbFZ1ZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFJvdXRlci5pbnN0YWxsZWQpIHtcbiAgICBfdXRpbC53YXJuKCdhbHJlYWR5IGluc3RhbGxlZC4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgVnVlID0gZXh0ZXJuYWxWdWU7XG4gIF9vdmVycmlkZTJbJ2RlZmF1bHQnXShWdWUpO1xuICBfZGlyZWN0aXZlc1ZpZXcyWydkZWZhdWx0J10oVnVlKTtcbiAgX2RpcmVjdGl2ZXNMaW5rMlsnZGVmYXVsdCddKFZ1ZSk7XG4gIF91dGlsMlsnZGVmYXVsdCddLlZ1ZSA9IFZ1ZTtcbiAgUm91dGVyLmluc3RhbGxlZCA9IHRydWU7XG59O1xuXG4vLyBhdXRvIGluc3RhbGxcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoUm91dGVyKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm91dGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoVnVlKSB7XG5cbiAgdmFyIF8gPSBWdWUudXRpbDtcblxuICAvLyBvdmVycmlkZSBWdWUncyBpbml0IGFuZCBkZXN0cm95IHByb2Nlc3MgdG8ga2VlcCB0cmFjayBvZiByb3V0ZXIgaW5zdGFuY2VzXG4gIHZhciBpbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHJvb3QgPSBvcHRpb25zLl9wYXJlbnQgfHwgb3B0aW9ucy5wYXJlbnQgfHwgdGhpcztcbiAgICB2YXIgcm91dGUgPSByb290LiRyb3V0ZTtcbiAgICBpZiAocm91dGUpIHtcbiAgICAgIHJvdXRlLnJvdXRlci5fY2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICAgIGlmICghdGhpcy4kcm91dGUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0aGlzLl9kZWZpbmVNZXRhKSB7XG4gICAgICAgICAgLy8gMC4xMlxuICAgICAgICAgIHRoaXMuX2RlZmluZU1ldGEoJyRyb3V0ZScsIHJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAxLjBcbiAgICAgICAgICBfLmRlZmluZVJlYWN0aXZlKHRoaXMsICckcm91dGUnLCByb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciBkZXN0cm95ID0gVnVlLnByb3RvdHlwZS5fZGVzdHJveTtcbiAgVnVlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHZhciByb3V0ZSA9IHRoaXMuJHJvb3QuJHJvdXRlO1xuICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgIHJvdXRlLnJvdXRlci5fY2hpbGRyZW4uJHJlbW92ZSh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGRlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gMS4wIG9ubHk6IGVuYWJsZSByb3V0ZSBtaXhpbnNcbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuICB2YXIgaG9va3NUb01lcmdlUkUgPSAvXihkYXRhfGFjdGl2YXRlfGRlYWN0aXZhdGUpJC87XG5cbiAgaWYgKHN0cmF0cykge1xuICAgIHN0cmF0cy5yb3V0ZSA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsO1xuICAgICAgaWYgKCFwYXJlbnRWYWwpIHJldHVybiBjaGlsZFZhbDtcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIF8uZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBjaGlsZFZhbCkge1xuICAgICAgICB2YXIgYSA9IHJldFtrZXldO1xuICAgICAgICB2YXIgYiA9IGNoaWxkVmFsW2tleV07XG4gICAgICAgIC8vIGZvciBkYXRhLCBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSwgd2UgbmVlZCB0byBtZXJnZSB0aGVtIGludG9cbiAgICAgICAgLy8gYXJyYXlzIHNpbWlsYXIgdG8gbGlmZWN5Y2xlIGhvb2tzLlxuICAgICAgICBpZiAoYSAmJiBob29rc1RvTWVyZ2VSRS50ZXN0KGtleSkpIHtcbiAgICAgICAgICByZXRba2V5XSA9IChfLmlzQXJyYXkoYSkgPyBhIDogW2FdKS5jb25jYXQoYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0W2tleV0gPSBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9PYmplY3Qka2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpWydkZWZhdWx0J107XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlJylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2FuUmV1c2UgPSBjYW5SZXVzZTtcbmV4cG9ydHMuY2FuRGVhY3RpdmF0ZSA9IGNhbkRlYWN0aXZhdGU7XG5leHBvcnRzLmNhbkFjdGl2YXRlID0gY2FuQWN0aXZhdGU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBkZWFjdGl2YXRlO1xuZXhwb3J0cy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuZXhwb3J0cy5yZXVzZSA9IHJldXNlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIHJldXNhYmlsaXR5IG9mIGFuIGV4aXN0aW5nIHJvdXRlciB2aWV3LlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gKi9cblxuZnVuY3Rpb24gY2FuUmV1c2UodmlldywgaGFuZGxlciwgdHJhbnNpdGlvbikge1xuICB2YXIgY29tcG9uZW50ID0gdmlldy5jaGlsZFZNO1xuICBpZiAoIWNvbXBvbmVudCB8fCAhaGFuZGxlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBpbXBvcnRhbnQ6IGNoZWNrIHZpZXcuQ29tcG9uZW50IGhlcmUgYmVjYXVzZSBpdCBtYXlcbiAgLy8gaGF2ZSBiZWVuIGNoYW5nZWQgaW4gYWN0aXZhdGUgaG9va1xuICBpZiAodmlldy5Db21wb25lbnQgIT09IGhhbmRsZXIuY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBjYW5SZXVzZUZuID0gX3V0aWwuZ2V0Um91dGVDb25maWcoY29tcG9uZW50LCAnY2FuUmV1c2UnKTtcbiAgcmV0dXJuIHR5cGVvZiBjYW5SZXVzZUZuID09PSAnYm9vbGVhbicgPyBjYW5SZXVzZUZuIDogY2FuUmV1c2VGbiA/IGNhblJldXNlRm4uY2FsbChjb21wb25lbnQsIHtcbiAgICB0bzogdHJhbnNpdGlvbi50byxcbiAgICBmcm9tOiB0cmFuc2l0aW9uLmZyb21cbiAgfSkgOiB0cnVlOyAvLyBkZWZhdWx0cyB0byB0cnVlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjb21wb25lbnQgY2FuIGRlYWN0aXZhdGUuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFxuICovXG5cbmZ1bmN0aW9uIGNhbkRlYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgbmV4dCkge1xuICB2YXIgZnJvbUNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgdmFyIGhvb2sgPSBfdXRpbC5nZXRSb3V0ZUNvbmZpZyhmcm9tQ29tcG9uZW50LCAnY2FuRGVhY3RpdmF0ZScpO1xuICBpZiAoIWhvb2spIHtcbiAgICBuZXh0KCk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNpdGlvbi5jYWxsSG9vayhob29rLCBmcm9tQ29tcG9uZW50LCBuZXh0LCB7XG4gICAgICBleHBlY3RCb29sZWFuOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNvbXBvbmVudCBjYW4gYWN0aXZhdGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFxuICovXG5cbmZ1bmN0aW9uIGNhbkFjdGl2YXRlKGhhbmRsZXIsIHRyYW5zaXRpb24sIG5leHQpIHtcbiAgX3V0aWwucmVzb2x2ZUFzeW5jQ29tcG9uZW50KGhhbmRsZXIsIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAvLyBoYXZlIHRvIGNoZWNrIGR1ZSB0byBhc3luYy1uZXNzXG4gICAgaWYgKHRyYW5zaXRpb24uYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBjb21wb25lbnQgY2FuIGJlIGFjdGl2YXRlZFxuICAgIHZhciBob29rID0gX3V0aWwuZ2V0Um91dGVDb25maWcoQ29tcG9uZW50LCAnY2FuQWN0aXZhdGUnKTtcbiAgICBpZiAoIWhvb2spIHtcbiAgICAgIG5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbi5jYWxsSG9vayhob29rLCBudWxsLCBuZXh0LCB7XG4gICAgICAgIGV4cGVjdEJvb2xlYW46IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ2FsbCBkZWFjdGl2YXRlIGhvb2tzIGZvciBleGlzdGluZyByb3V0ZXItdmlld3MuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFxuICovXG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgbmV4dCkge1xuICB2YXIgY29tcG9uZW50ID0gdmlldy5jaGlsZFZNO1xuICB2YXIgaG9vayA9IF91dGlsLmdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgJ2RlYWN0aXZhdGUnKTtcbiAgaWYgKCFob29rKSB7XG4gICAgbmV4dCgpO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zaXRpb24uY2FsbEhvb2tzKGhvb2ssIGNvbXBvbmVudCwgbmV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBY3RpdmF0ZSAvIHN3aXRjaCBjb21wb25lbnQgZm9yIGEgcm91dGVyLXZpZXcuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGRlcHRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxuZnVuY3Rpb24gYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgZGVwdGgsIGNiLCByZXVzZSkge1xuICB2YXIgaGFuZGxlciA9IHRyYW5zaXRpb24uYWN0aXZhdGVRdWV1ZVtkZXB0aF07XG4gIGlmICghaGFuZGxlcikge1xuICAgIC8vIGZpeCAxLjAuMC1hbHBoYS4zIGNvbXBhdFxuICAgIGlmICh2aWV3Ll9ib3VuZCkge1xuICAgICAgdmlldy5zZXRDb21wb25lbnQobnVsbCk7XG4gICAgfVxuICAgIGNiICYmIGNiKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIENvbXBvbmVudCA9IHZpZXcuQ29tcG9uZW50ID0gaGFuZGxlci5jb21wb25lbnQ7XG4gIHZhciBhY3RpdmF0ZUhvb2sgPSBfdXRpbC5nZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICdhY3RpdmF0ZScpO1xuICB2YXIgZGF0YUhvb2sgPSBfdXRpbC5nZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICdkYXRhJyk7XG4gIHZhciB3YWl0Rm9yRGF0YSA9IF91dGlsLmdldFJvdXRlQ29uZmlnKENvbXBvbmVudCwgJ3dhaXRGb3JEYXRhJyk7XG5cbiAgdmlldy5kZXB0aCA9IGRlcHRoO1xuICB2aWV3LmFjdGl2YXRlZCA9IGZhbHNlO1xuXG4gIHZhciBjb21wb25lbnQgPSB1bmRlZmluZWQ7XG4gIHZhciBsb2FkaW5nID0gISEoZGF0YUhvb2sgJiYgIXdhaXRGb3JEYXRhKTtcblxuICAvLyBcInJldXNlXCIgaXMgYSBmbGFnIHBhc3NlZCBkb3duIHdoZW4gdGhlIHBhcmVudCB2aWV3IGlzXG4gIC8vIGVpdGhlciByZXVzZWQgdmlhIGtlZXAtYWxpdmUgb3IgYXMgYSBjaGlsZCBvZiBhIGtlcHQtYWxpdmUgdmlldy5cbiAgLy8gb2YgY291cnNlIHdlIGNhbiBvbmx5IHJldXNlIGlmIHRoZSBjdXJyZW50IGtlcHQtYWxpdmUgaW5zdGFuY2VcbiAgLy8gaXMgb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAgcmV1c2UgPSByZXVzZSAmJiB2aWV3LmNoaWxkVk0gJiYgdmlldy5jaGlsZFZNLmNvbnN0cnVjdG9yID09PSBDb21wb25lbnQ7XG5cbiAgaWYgKHJldXNlKSB7XG4gICAgLy8ganVzdCByZXVzZVxuICAgIGNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBsb2FkaW5nO1xuICB9IGVsc2Uge1xuICAgIC8vIHVuYnVpbGQgY3VycmVudCBjb21wb25lbnQuIHRoaXMgc3RlcCBhbHNvIGRlc3Ryb3lzXG4gICAgLy8gYW5kIHJlbW92ZXMgYWxsIG5lc3RlZCBjaGlsZCB2aWV3cy5cbiAgICB2aWV3LnVuYnVpbGQodHJ1ZSk7XG4gICAgLy8gaGFuZGxlIGtlZXAtYWxpdmUuXG4gICAgLy8gaWYgdGhlIHZpZXcgaGFzIGtlZXAtYWxpdmUsIHRoZSBjaGlsZCB2bSBpcyBub3QgYWN0dWFsbHlcbiAgICAvLyBkZXN0cm95ZWQgLSBpdHMgbmVzdGVkIHZpZXdzIHdpbGwgc3RpbGwgYmUgaW4gcm91dGVyJ3NcbiAgICAvLyB2aWV3IGxpc3QuIFdlIG5lZWQgdG8gcmVtb3ZlZCB0aGVzZSBjaGlsZCB2aWV3cyBhbmRcbiAgICAvLyBjYWNoZSB0aGVtIG9uIHRoZSBjaGlsZCB2bS5cbiAgICBpZiAodmlldy5rZWVwQWxpdmUpIHtcbiAgICAgIHZhciB2aWV3cyA9IHRyYW5zaXRpb24ucm91dGVyLl92aWV3cztcbiAgICAgIHZhciBpID0gdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICB0cmFuc2l0aW9uLnJvdXRlci5fdmlld3MgPSB2aWV3cy5zbGljZShpKTtcbiAgICAgICAgaWYgKHZpZXcuY2hpbGRWTSkge1xuICAgICAgICAgIHZpZXcuY2hpbGRWTS5fcm91dGVyVmlld3MgPSB2aWV3cy5zbGljZSgwLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBuZXcgY29tcG9uZW50LiB0aGlzIHdpbGwgYWxzbyBjcmVhdGUgdGhlXG4gICAgLy8gZGlyZWN0IGNoaWxkIHZpZXcgb2YgdGhlIGN1cnJlbnQgb25lLiBpdCB3aWxsIHJlZ2lzdGVyXG4gICAgLy8gaXRzZWxmIGFzIHZpZXcuY2hpbGRWaWV3LlxuICAgIGNvbXBvbmVudCA9IHZpZXcuYnVpbGQoe1xuICAgICAgX21ldGE6IHtcbiAgICAgICAgJGxvYWRpbmdSb3V0ZURhdGE6IGxvYWRpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUga2VlcC1hbGl2ZS5cbiAgICAvLyB3aGVuIGEga2VwdC1hbGl2ZSBjaGlsZCB2bSBpcyByZXN0b3JlZCwgd2UgbmVlZCB0b1xuICAgIC8vIGFkZCBpdHMgY2FjaGVkIGNoaWxkIHZpZXdzIGludG8gdGhlIHJvdXRlcidzIHZpZXcgbGlzdCxcbiAgICAvLyBhbmQgYWxzbyBwcm9wZXJseSB1cGRhdGUgY3VycmVudCB2aWV3J3MgY2hpbGQgdmlldy5cbiAgICBpZiAodmlldy5rZWVwQWxpdmUpIHtcbiAgICAgIGNvbXBvbmVudC4kbG9hZGluZ1JvdXRlRGF0YSA9IGxvYWRpbmc7XG4gICAgICB2YXIgY2FjaGVkVmlld3MgPSBjb21wb25lbnQuX3JvdXRlclZpZXdzO1xuICAgICAgaWYgKGNhY2hlZFZpZXdzKSB7XG4gICAgICAgIHRyYW5zaXRpb24ucm91dGVyLl92aWV3cyA9IGNhY2hlZFZpZXdzLmNvbmNhdCh0cmFuc2l0aW9uLnJvdXRlci5fdmlld3MpO1xuICAgICAgICB2aWV3LmNoaWxkVmlldyA9IGNhY2hlZFZpZXdzW2NhY2hlZFZpZXdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb21wb25lbnQuX3JvdXRlclZpZXdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjbGVhbnVwIHRoZSBjb21wb25lbnQgaW4gY2FzZSB0aGUgdHJhbnNpdGlvbiBpcyBhYm9ydGVkXG4gIC8vIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGV2ZXIgaW5zZXJ0ZWQuXG4gIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBjb21wb25lbnQuJGRlc3Ryb3koKTtcbiAgfTtcblxuICAvLyBhY3R1YWxseSBpbnNlcnQgdGhlIGNvbXBvbmVudCBhbmQgdHJpZ2dlciB0cmFuc2l0aW9uXG4gIHZhciBpbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoKSB7XG4gICAgaWYgKHJldXNlKSB7XG4gICAgICBjYiAmJiBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcm91dGVyID0gdHJhbnNpdGlvbi5yb3V0ZXI7XG4gICAgaWYgKHJvdXRlci5fcmVuZGVyZWQgfHwgcm91dGVyLl90cmFuc2l0aW9uT25Mb2FkKSB7XG4gICAgICB2aWV3LnRyYW5zaXRpb24oY29tcG9uZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gdHJhbnNpdGlvbiBvbiBmaXJzdCByZW5kZXIsIG1hbnVhbCB0cmFuc2l0aW9uXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh2aWV3LnNldEN1cnJlbnQpIHtcbiAgICAgICAgLy8gMC4xMiBjb21wYXRcbiAgICAgICAgdmlldy5zZXRDdXJyZW50KGNvbXBvbmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAxLjBcbiAgICAgICAgdmlldy5jaGlsZFZNID0gY29tcG9uZW50O1xuICAgICAgfVxuICAgICAgY29tcG9uZW50LiRiZWZvcmUodmlldy5hbmNob3IsIG51bGwsIGZhbHNlKTtcbiAgICB9XG4gICAgY2IgJiYgY2IoKTtcbiAgfTtcblxuICAvLyBjYWxsZWQgYWZ0ZXIgYWN0aXZhdGlvbiBob29rIGlzIHJlc29sdmVkXG4gIHZhciBhZnRlckFjdGl2YXRlID0gZnVuY3Rpb24gYWZ0ZXJBY3RpdmF0ZSgpIHtcbiAgICB2aWV3LmFjdGl2YXRlZCA9IHRydWU7XG4gICAgLy8gYWN0aXZhdGUgdGhlIGNoaWxkIHZpZXdcbiAgICBpZiAodmlldy5jaGlsZFZpZXcpIHtcbiAgICAgIGFjdGl2YXRlKHZpZXcuY2hpbGRWaWV3LCB0cmFuc2l0aW9uLCBkZXB0aCArIDEsIG51bGwsIHJldXNlIHx8IHZpZXcua2VlcEFsaXZlKTtcbiAgICB9XG4gICAgaWYgKGRhdGFIb29rICYmIHdhaXRGb3JEYXRhKSB7XG4gICAgICAvLyB3YWl0IHVudGlsIGRhdGEgbG9hZGVkIHRvIGluc2VydFxuICAgICAgbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBkYXRhSG9vaywgaW5zZXJ0LCBjbGVhbnVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbG9hZCBkYXRhIGFuZCBpbnNlcnQgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgaWYgKGRhdGFIb29rKSB7XG4gICAgICAgIGxvYWREYXRhKGNvbXBvbmVudCwgdHJhbnNpdGlvbiwgZGF0YUhvb2spO1xuICAgICAgfVxuICAgICAgaW5zZXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChhY3RpdmF0ZUhvb2spIHtcbiAgICB0cmFuc2l0aW9uLmNhbGxIb29rcyhhY3RpdmF0ZUhvb2ssIGNvbXBvbmVudCwgYWZ0ZXJBY3RpdmF0ZSwge1xuICAgICAgY2xlYW51cDogY2xlYW51cFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFmdGVyQWN0aXZhdGUoKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldXNlIGEgdmlldywganVzdCByZWxvYWQgZGF0YSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICovXG5cbmZ1bmN0aW9uIHJldXNlKHZpZXcsIHRyYW5zaXRpb24pIHtcbiAgdmFyIGNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgdmFyIGRhdGFIb29rID0gX3V0aWwuZ2V0Um91dGVDb25maWcoY29tcG9uZW50LCAnZGF0YScpO1xuICBpZiAoZGF0YUhvb2spIHtcbiAgICBsb2FkRGF0YShjb21wb25lbnQsIHRyYW5zaXRpb24sIGRhdGFIb29rKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IGxvYWQgYW5kIGFwcGx5IGRhdGEgdG8gY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7VnVlfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsZWFudXBcbiAqL1xuXG5mdW5jdGlvbiBsb2FkRGF0YShjb21wb25lbnQsIHRyYW5zaXRpb24sIGhvb2ssIGNiLCBjbGVhbnVwKSB7XG4gIGNvbXBvbmVudC4kbG9hZGluZ1JvdXRlRGF0YSA9IHRydWU7XG4gIHRyYW5zaXRpb24uY2FsbEhvb2tzKGhvb2ssIGNvbXBvbmVudCwgZnVuY3Rpb24gKGRhdGEsIG9uRXJyb3IpIHtcbiAgICAvLyBtZXJnZSBkYXRhIGZyb20gbXVsdGlwbGUgZGF0YSBob29rc1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEuX25lZWRNZXJnZSkge1xuICAgICAgZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uIChyZXMsIG9iaikge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvYmopKSB7XG4gICAgICAgICAgX09iamVjdCRrZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXNba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LCBfT2JqZWN0JGNyZWF0ZShudWxsKSk7XG4gICAgfVxuICAgIC8vIGhhbmRsZSBwcm9taXNlIHN1Z2FyIHN5bnRheFxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICBfT2JqZWN0JGtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSBkYXRhW2tleV07XG4gICAgICAgIGlmIChfdXRpbC5pc1Byb21pc2UodmFsKSkge1xuICAgICAgICAgIHByb21pc2VzLnB1c2godmFsLnRoZW4oZnVuY3Rpb24gKHJlc29sdmVkVmFsKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuJHNldChrZXksIHJlc29sdmVkVmFsKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcG9uZW50LiRzZXQoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgIGNvbXBvbmVudC4kbG9hZGluZ1JvdXRlRGF0YSA9IGZhbHNlO1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZXNbMF0uY29uc3RydWN0b3IuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIGNvbXBvbmVudC4kbG9hZGluZ1JvdXRlRGF0YSA9IGZhbHNlO1xuICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgfSwgb25FcnJvcik7XG4gICAgfVxuICB9LCB7XG4gICAgY2xlYW51cDogY2xlYW51cCxcbiAgICBleHBlY3REYXRhOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9PYmplY3QkZnJlZXplID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBpbnRlcm5hbEtleXNSRSA9IC9eKGNvbXBvbmVudHxzdWJSb3V0ZXMpJC87XG5cbi8qKlxuICogUm91dGUgQ29udGV4dCBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtSb3V0ZXJ9IHJvdXRlclxuICovXG5cbnZhciBSb3V0ZSA9IGZ1bmN0aW9uIFJvdXRlKHBhdGgsIHJvdXRlcikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgdmFyIG1hdGNoZWQgPSByb3V0ZXIuX3JlY29nbml6ZXIucmVjb2duaXplKHBhdGgpO1xuICBpZiAobWF0Y2hlZCkge1xuICAgIC8vIGNvcHkgYWxsIGN1c3RvbSBmaWVsZHMgZnJvbSByb3V0ZSBjb25maWdzXG4gICAgW10uZm9yRWFjaC5jYWxsKG1hdGNoZWQsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIG1hdGNoLmhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCFpbnRlcm5hbEtleXNSRS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBfdGhpc1trZXldID0gbWF0Y2guaGFuZGxlcltrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gc2V0IHF1ZXJ5IGFuZCBwYXJhbXNcbiAgICB0aGlzLnF1ZXJ5ID0gbWF0Y2hlZC5xdWVyeVBhcmFtcztcbiAgICB0aGlzLnBhcmFtcyA9IFtdLnJlZHVjZS5jYWxsKG1hdGNoZWQsIGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcbiAgICAgIGlmIChjdXIucGFyYW1zKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXIucGFyYW1zKSB7XG4gICAgICAgICAgcHJldltrZXldID0gY3VyLnBhcmFtc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIH1cbiAgLy8gZXhwb3NlIHBhdGggYW5kIHJvdXRlclxuICB0aGlzLnBhdGggPSBwYXRoO1xuICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgLy8gZm9yIGludGVybmFsIHVzZVxuICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkIHx8IHJvdXRlci5fbm90Rm91bmRIYW5kbGVyO1xuICAvLyBJbXBvcnRhbnQ6IGZyZWV6ZSBzZWxmIHRvIHByZXZlbnQgb2JzZXJ2YXRpb25cbiAgX09iamVjdCRmcmVlemUodGhpcyk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJvdXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgX3BpcGVsaW5lID0gcmVxdWlyZSgnLi9waXBlbGluZScpO1xuXG4vKipcbiAqIEEgUm91dGVUcmFuc2l0aW9uIG9iamVjdCBtYW5hZ2VzIHRoZSBwaXBlbGluZSBvZiBhXG4gKiByb3V0ZXItdmlldyBzd2l0Y2hpbmcgcHJvY2Vzcy4gVGhpcyBpcyBhbHNvIHRoZSBvYmplY3RcbiAqIHBhc3NlZCBpbnRvIHVzZXIgcm91dGUgaG9va3MuXG4gKlxuICogQHBhcmFtIHtSb3V0ZXJ9IHJvdXRlclxuICogQHBhcmFtIHtSb3V0ZX0gdG9cbiAqIEBwYXJhbSB7Um91dGV9IGZyb21cbiAqL1xuXG52YXIgUm91dGVUcmFuc2l0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUm91dGVUcmFuc2l0aW9uKHJvdXRlciwgdG8sIGZyb20pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVUcmFuc2l0aW9uKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudG8gPSB0bztcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG5cbiAgICAvLyBzdGFydCBieSBkZXRlcm1pbmUgdGhlIHF1ZXVlc1xuXG4gICAgLy8gdGhlIGRlYWN0aXZhdGUgcXVldWUgaXMgYW4gYXJyYXkgb2Ygcm91dGVyLXZpZXdcbiAgICAvLyBkaXJlY3RpdmUgaW5zdGFuY2VzIHRoYXQgbmVlZCB0byBiZSBkZWFjdGl2YXRlZCxcbiAgICAvLyBkZWVwZXN0IGZpcnN0LlxuICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gcm91dGVyLl92aWV3cztcblxuICAgIC8vIGNoZWNrIHRoZSBkZWZhdWx0IGhhbmRsZXIgb2YgdGhlIGRlZXBlc3QgbWF0Y2hcbiAgICB2YXIgbWF0Y2hlZCA9IHRvLm1hdGNoZWQgPyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0by5tYXRjaGVkKSA6IFtdO1xuXG4gICAgLy8gdGhlIGFjdGl2YXRlIHF1ZXVlIGlzIGFuIGFycmF5IG9mIHJvdXRlIGhhbmRsZXJzXG4gICAgLy8gdGhhdCBuZWVkIHRvIGJlIGFjdGl2YXRlZFxuICAgIHRoaXMuYWN0aXZhdGVRdWV1ZSA9IG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoLmhhbmRsZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWJvcnQgY3VycmVudCB0cmFuc2l0aW9uIGFuZCByZXR1cm4gdG8gcHJldmlvdXMgbG9jYXRpb24uXG4gICAqL1xuXG4gIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICBpZiAoIXRoaXMuYWJvcnRlZCkge1xuICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgIC8vIGlmIHRoZSByb290IHBhdGggdGhyb3dzIGFuIGVycm9yIGR1cmluZyB2YWxpZGF0aW9uXG4gICAgICAvLyBvbiBpbml0aWFsIGxvYWQsIGl0IGdldHMgY2F1Z2h0IGluIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICB2YXIgYWJvcnRpbmdPbkxvYWQgPSAhdGhpcy5mcm9tLnBhdGggJiYgdGhpcy50by5wYXRoID09PSAnLyc7XG4gICAgICBpZiAoIWFib3J0aW5nT25Mb2FkKSB7XG4gICAgICAgIHRoaXMucm91dGVyLnJlcGxhY2UodGhpcy5mcm9tLnBhdGggfHwgJy8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFib3J0IGN1cnJlbnQgdHJhbnNpdGlvbiBhbmQgcmVkaXJlY3QgdG8gYSBuZXcgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqL1xuXG4gIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdChwYXRoKSB7XG4gICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggPSBfdXRpbC5tYXBQYXJhbXMocGF0aCwgdGhpcy50by5wYXJhbXMsIHRoaXMudG8ucXVlcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wYXJhbXMgPSB0aGlzLnRvLnBhcmFtcztcbiAgICAgICAgcGF0aC5xdWVyeSA9IHRoaXMudG8ucXVlcnk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvdXRlci5yZXBsYWNlKHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQSByb3V0ZXIgdmlldyB0cmFuc2l0aW9uJ3MgcGlwZWxpbmUgY2FuIGJlIGRlc2NyaWJlZCBhc1xuICAgKiBmb2xsb3dzLCBhc3N1bWluZyB3ZSBhcmUgdHJhbnNpdGlvbmluZyBmcm9tIGFuIGV4aXN0aW5nXG4gICAqIDxyb3V0ZXItdmlldz4gY2hhaW4gW0NvbXBvbmVudCBBLCBDb21wb25lbnQgQl0gdG8gYSBuZXdcbiAgICogY2hhaW4gW0NvbXBvbmVudCBBLCBDb21wb25lbnQgQ106XG4gICAqXG4gICAqICBBICAgIEFcbiAgICogIHwgPT4gfFxuICAgKiAgQiAgICBDXG4gICAqXG4gICAqIDEuIFJldXNhYmxpdHkgcGhhc2U6XG4gICAqICAgLT4gY2FuUmV1c2UoQSwgQSlcbiAgICogICAtPiBjYW5SZXVzZShCLCBDKVxuICAgKiAgIC0+IGRldGVybWluZSBuZXcgcXVldWVzOlxuICAgKiAgICAgIC0gZGVhY3RpdmF0aW9uOiBbQl1cbiAgICogICAgICAtIGFjdGl2YXRpb246IFtDXVxuICAgKlxuICAgKiAyLiBWYWxpZGF0aW9uIHBoYXNlOlxuICAgKiAgIC0+IGNhbkRlYWN0aXZhdGUoQilcbiAgICogICAtPiBjYW5BY3RpdmF0ZShDKVxuICAgKlxuICAgKiAzLiBBY3RpdmF0aW9uIHBoYXNlOlxuICAgKiAgIC0+IGRlYWN0aXZhdGUoQilcbiAgICogICAtPiBhY3RpdmF0ZShDKVxuICAgKlxuICAgKiBFYWNoIG9mIHRoZXNlIHN0ZXBzIGNhbiBiZSBhc3luY2hyb25vdXMsIGFuZCBhbnlcbiAgICogc3RlcCBjYW4gcG90ZW50aWFsbHkgYWJvcnQgdGhlIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChjYikge1xuICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcztcbiAgICB2YXIgZGFxID0gdGhpcy5kZWFjdGl2YXRlUXVldWU7XG4gICAgdmFyIGFxID0gdGhpcy5hY3RpdmF0ZVF1ZXVlO1xuICAgIHZhciByZGFxID0gZGFxLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIHZhciByZXVzZVF1ZXVlID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gMS4gUmV1c2FiaWxpdHkgcGhhc2VcbiAgICB2YXIgaSA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcmRhcS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFfcGlwZWxpbmUuY2FuUmV1c2UocmRhcVtpXSwgYXFbaV0sIHRyYW5zaXRpb24pKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIHJldXNlUXVldWUgPSByZGFxLnNsaWNlKDAsIGkpO1xuICAgICAgZGFxID0gcmRhcS5zbGljZShpKS5yZXZlcnNlKCk7XG4gICAgICBhcSA9IGFxLnNsaWNlKGkpO1xuICAgIH1cblxuICAgIC8vIDIuIFZhbGlkYXRpb24gcGhhc2VcbiAgICB0cmFuc2l0aW9uLnJ1blF1ZXVlKGRhcSwgX3BpcGVsaW5lLmNhbkRlYWN0aXZhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyYW5zaXRpb24ucnVuUXVldWUoYXEsIF9waXBlbGluZS5jYW5BY3RpdmF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cmFuc2l0aW9uLnJ1blF1ZXVlKGRhcSwgX3BpcGVsaW5lLmRlYWN0aXZhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAzLiBBY3RpdmF0aW9uIHBoYXNlXG5cbiAgICAgICAgICAvLyBVcGRhdGUgcm91dGVyIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICB0cmFuc2l0aW9uLnJvdXRlci5fb25UcmFuc2l0aW9uVmFsaWRhdGVkKHRyYW5zaXRpb24pO1xuXG4gICAgICAgICAgLy8gdHJpZ2dlciByZXVzZSBmb3IgYWxsIHJldXNlZCB2aWV3c1xuICAgICAgICAgIHJldXNlUXVldWUgJiYgcmV1c2VRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICBfcGlwZWxpbmUucmV1c2UodmlldywgdHJhbnNpdGlvbik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGUgcm9vdCBvZiB0aGUgY2hhaW4gdGhhdCBuZWVkcyB0byBiZSByZXBsYWNlZFxuICAgICAgICAgIC8vIGlzIHRoZSB0b3AtbW9zdCBub24tcmV1c2FibGUgdmlldy5cbiAgICAgICAgICBpZiAoZGFxLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBkYXFbZGFxLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGRlcHRoID0gcmV1c2VRdWV1ZSA/IHJldXNlUXVldWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgIF9waXBlbGluZS5hY3RpdmF0ZSh2aWV3LCB0cmFuc2l0aW9uLCBkZXB0aCwgY2IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgYW5kIHNlcXVlbnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIHRvIGFcbiAgICogcXVldWUuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUucnVuUXVldWUgPSBmdW5jdGlvbiBydW5RdWV1ZShxdWV1ZSwgZm4sIGNiKSB7XG4gICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzO1xuICAgIHN0ZXAoMCk7XG4gICAgZnVuY3Rpb24gc3RlcChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBjYigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCB0cmFuc2l0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGwgYSB1c2VyIHByb3ZpZGVkIHJvdXRlIHRyYW5zaXRpb24gaG9vayBhbmQgaGFuZGxlXG4gICAqIHRoZSByZXNwb25zZSAoZS5nLiBpZiB0aGUgdXNlciByZXR1cm5zIGEgcHJvbWlzZSkuXG4gICAqXG4gICAqIElmIHRoZSB1c2VyIG5laXRoZXIgZXhwZWN0cyBhbiBhcmd1bWVudCBub3IgcmV0dXJucyBhXG4gICAqIHByb21pc2UsIHRoZSBob29rIGlzIGFzc3VtZWQgdG8gYmUgc3luY2hyb25vdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tcbiAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBleHBlY3RCb29sZWFuXG4gICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBleHBlY3REYXRhXG4gICAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gY2xlYW51cFxuICAgKi9cblxuICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLmNhbGxIb29rID0gZnVuY3Rpb24gY2FsbEhvb2soaG9vaywgY29udGV4dCwgY2IpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gICAgdmFyIF9yZWYkZXhwZWN0Qm9vbGVhbiA9IF9yZWYuZXhwZWN0Qm9vbGVhbjtcbiAgICB2YXIgZXhwZWN0Qm9vbGVhbiA9IF9yZWYkZXhwZWN0Qm9vbGVhbiA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGV4cGVjdEJvb2xlYW47XG4gICAgdmFyIF9yZWYkZXhwZWN0RGF0YSA9IF9yZWYuZXhwZWN0RGF0YTtcbiAgICB2YXIgZXhwZWN0RGF0YSA9IF9yZWYkZXhwZWN0RGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGV4cGVjdERhdGE7XG4gICAgdmFyIGNsZWFudXAgPSBfcmVmLmNsZWFudXA7XG5cbiAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXM7XG4gICAgdmFyIG5leHRDYWxsZWQgPSBmYWxzZTtcblxuICAgIC8vIGFib3J0IHRoZSB0cmFuc2l0aW9uXG4gICAgdmFyIGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICBjbGVhbnVwICYmIGNsZWFudXAoKTtcbiAgICAgIHRyYW5zaXRpb24uYWJvcnQoKTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGVycm9yc1xuICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcbiAgICAgIC8vIGNsZWFudXAgaW5kaWNhdGVzIGFuIGFmdGVyLWFjdGl2YXRpb24gaG9vayxcbiAgICAgIC8vIHNvIGluc3RlYWQgb2YgYWJvcnRpbmcgd2UganVzdCBsZXQgdGhlIHRyYW5zaXRpb25cbiAgICAgIC8vIGZpbmlzaC5cbiAgICAgIGNsZWFudXAgPyBuZXh0KCkgOiBhYm9ydCgpO1xuICAgICAgaWYgKGVyciAmJiAhdHJhbnNpdGlvbi5yb3V0ZXIuX3N1cHByZXNzKSB7XG4gICAgICAgIF91dGlsLndhcm4oJ1VuY2F1Z2h0IGVycm9yIGR1cmluZyB0cmFuc2l0aW9uOiAnKTtcbiAgICAgICAgdGhyb3cgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIgOiBuZXcgRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWR2YW5jZSB0aGUgdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGVwXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGRhdGEpIHtcbiAgICAgIGlmIChuZXh0Q2FsbGVkKSB7XG4gICAgICAgIF91dGlsLndhcm4oJ3RyYW5zaXRpb24ubmV4dCgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBuZXh0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0cmFuc2l0aW9uLmFib3J0ZWQpIHtcbiAgICAgICAgY2xlYW51cCAmJiBjbGVhbnVwKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNiICYmIGNiKGRhdGEsIG9uRXJyb3IpO1xuICAgIH07XG5cbiAgICAvLyBleHBvc2UgYSBjbG9uZSBvZiB0aGUgdHJhbnNpdGlvbiBvYmplY3QsIHNvIHRoYXQgZWFjaFxuICAgIC8vIGhvb2sgZ2V0cyBhIGNsZWFuIGNvcHkgYW5kIHByZXZlbnQgdGhlIHVzZXIgZnJvbVxuICAgIC8vIG1lc3Npbmcgd2l0aCB0aGUgaW50ZXJuYWxzLlxuICAgIHZhciBleHBvc2VkID0ge1xuICAgICAgdG86IHRyYW5zaXRpb24udG8sXG4gICAgICBmcm9tOiB0cmFuc2l0aW9uLmZyb20sXG4gICAgICBhYm9ydDogYWJvcnQsXG4gICAgICBuZXh0OiBuZXh0LFxuICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xuICAgICAgICB0cmFuc2l0aW9uLnJlZGlyZWN0LmFwcGx5KHRyYW5zaXRpb24sIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGFjdHVhbGx5IGNhbGwgdGhlIGhvb2tcbiAgICB2YXIgcmVzID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICByZXMgPSBob29rLmNhbGwoY29udGV4dCwgZXhwb3NlZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBib29sZWFuL3Byb21pc2UgcmV0dXJuIHZhbHVlc1xuICAgIHZhciByZXNJc1Byb21pc2UgPSBfdXRpbC5pc1Byb21pc2UocmVzKTtcbiAgICBpZiAoZXhwZWN0Qm9vbGVhbikge1xuICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXMgPyBuZXh0KCkgOiBhYm9ydCgpO1xuICAgICAgfSBlbHNlIGlmIChyZXNJc1Byb21pc2UpIHtcbiAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgb2sgPyBuZXh0KCkgOiBhYm9ydCgpO1xuICAgICAgICB9LCBvbkVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoIWhvb2subGVuZ3RoKSB7XG4gICAgICAgIG5leHQocmVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlc0lzUHJvbWlzZSkge1xuICAgICAgcmVzLnRoZW4obmV4dCwgb25FcnJvcik7XG4gICAgfSBlbHNlIGlmIChleHBlY3REYXRhICYmIGlzUGxhaW5PamJlY3QocmVzKSB8fCAhaG9vay5sZW5ndGgpIHtcbiAgICAgIG5leHQocmVzKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGwgYSBzaW5nbGUgaG9vayBvciBhbiBhcnJheSBvZiBhc3luYyBob29rcyBpbiBzZXJpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGhvb2tzXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuXG4gIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUuY2FsbEhvb2tzID0gZnVuY3Rpb24gY2FsbEhvb2tzKGhvb2tzLCBjb250ZXh0LCBjYiwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShob29rcykpIHtcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgcmVzLl9uZWVkTWVyZ2UgPSB0cnVlO1xuICAgICAgICB2YXIgb25FcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgX3RoaXMucnVuUXVldWUoaG9va3MsIGZ1bmN0aW9uIChob29rLCBfLCBuZXh0KSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgICBfdGhpcy5jYWxsSG9vayhob29rLCBjb250ZXh0LCBmdW5jdGlvbiAociwgb25FcnJvcikge1xuICAgICAgICAgICAgICBpZiAocikgcmVzLnB1c2gocik7XG4gICAgICAgICAgICAgIG9uRXJyb3IgPSBvbkVycm9yO1xuICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYihyZXMsIG9uRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsbEhvb2soaG9va3MsIGNvbnRleHQsIGNiLCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlVHJhbnNpdGlvbjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRlVHJhbnNpdGlvbjtcblxuZnVuY3Rpb24gaXNQbGFpbk9qYmVjdCh2YWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53YXJuID0gd2FybjtcbmV4cG9ydHMucmVzb2x2ZVBhdGggPSByZXNvbHZlUGF0aDtcbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuZXhwb3J0cy5nZXRSb3V0ZUNvbmZpZyA9IGdldFJvdXRlQ29uZmlnO1xuZXhwb3J0cy5yZXNvbHZlQXN5bmNDb21wb25lbnQgPSByZXNvbHZlQXN5bmNDb21wb25lbnQ7XG5leHBvcnRzLm1hcFBhcmFtcyA9IG1hcFBhcmFtcztcblxudmFyIF9yb3V0ZVJlY29nbml6ZXIgPSByZXF1aXJlKCdyb3V0ZS1yZWNvZ25pemVyJyk7XG5cbnZhciBfcm91dGVSZWNvZ25pemVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlUmVjb2duaXplcik7XG5cbnZhciBnZW5RdWVyeSA9IF9yb3V0ZVJlY29nbml6ZXIyWydkZWZhdWx0J10ucHJvdG90eXBlLmdlbmVyYXRlUXVlcnlTdHJpbmc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZvciBob2xkaW5nIHRoZSBWdWUgcmVmZXJlbmNlXG52YXIgX2V4cG9ydHMgPSB7fTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9leHBvcnRzO1xuXG4vKipcbiAqIFdhcm4gc3R1ZmYuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICovXG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgIGNvbnNvbGUud2FybignW3Z1ZS1yb3V0ZXJdICcgKyBtc2cpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghX2V4cG9ydHMuVnVlIHx8IF9leHBvcnRzLlZ1ZS5jb25maWcuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoJ3dhcm5pbmcgc3RhY2sgdHJhY2U6Jykuc3RhY2spO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgYSByZWxhdGl2ZSBwYXRoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYXBwZW5kXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGgoYmFzZSwgcmVsYXRpdmUsIGFwcGVuZCkge1xuICB2YXIgcXVlcnkgPSBiYXNlLm1hdGNoKC8oXFw/LiopJC8pO1xuICBpZiAocXVlcnkpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5WzFdO1xuICAgIGJhc2UgPSBiYXNlLnNsaWNlKDAsIC1xdWVyeS5sZW5ndGgpO1xuICB9XG4gIC8vIGEgcXVlcnkhXG4gIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICc/Jykge1xuICAgIHJldHVybiBiYXNlICsgcmVsYXRpdmU7XG4gIH1cbiAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdCgnLycpO1xuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpO1xuICB9XG4gIC8vIHJlc29sdmUgcmVsYXRpdmUgcGF0aFxuICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuICAgIGlmIChzZWdtZW50ID09PSAnLicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCA9PT0gJy4uJykge1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9XG4gIC8vIGVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICBzdGFjay51bnNoaWZ0KCcnKTtcbiAgfVxuICByZXR1cm4gc3RhY2suam9pbignLycpO1xufVxuXG4vKipcbiAqIEZvcmdpdmluZyBjaGVjayBmb3IgYSBwcm9taXNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNQcm9taXNlKHApIHtcbiAgcmV0dXJuIHAgJiYgdHlwZW9mIHAudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBSZXRyaXZlIGEgcm91dGUgY29uZmlnIGZpZWxkIGZyb20gYSBjb21wb25lbnQgaW5zdGFuY2VcbiAqIE9SIGEgY29tcG9uZW50IGNvbnRydWN0b3IuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxWdWV9IGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZnVuY3Rpb24gZ2V0Um91dGVDb25maWcoY29tcG9uZW50LCBuYW1lKSB7XG4gIHZhciBvcHRpb25zID0gY29tcG9uZW50ICYmIChjb21wb25lbnQuJG9wdGlvbnMgfHwgY29tcG9uZW50Lm9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnJvdXRlICYmIG9wdGlvbnMucm91dGVbbmFtZV07XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeS4gSGF2ZSB0byBkbyBhIGRpcnR5XG4gKiBtb2NrIGhlcmUgYmVjYXVzZSBvZiBWdWUgY29yZSdzIGludGVybmFsIEFQSSBkZXBlbmRzIG9uXG4gKiBhbiBJRCBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG52YXIgcmVzb2x2ZXIgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudChoYW5kbGVyLCBjYikge1xuICBpZiAoIXJlc29sdmVyKSB7XG4gICAgcmVzb2x2ZXIgPSB7XG4gICAgICByZXNvbHZlOiBfZXhwb3J0cy5WdWUucHJvdG90eXBlLl9yZXNvbHZlQ29tcG9uZW50LFxuICAgICAgJG9wdGlvbnM6IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIF86IGhhbmRsZXIuY29tcG9uZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJlc29sdmVyLiRvcHRpb25zLmNvbXBvbmVudHMuXyA9IGhhbmRsZXIuY29tcG9uZW50O1xuICB9XG4gIHJlc29sdmVyLnJlc29sdmUoJ18nLCBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgaGFuZGxlci5jb21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgY2IoQ29tcG9uZW50KTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWFwIHRoZSBkeW5hbWljIHNlZ21lbnRzIGluIGEgcGF0aCB0byBwYXJhbXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeVxuICovXG5cbmZ1bmN0aW9uIG1hcFBhcmFtcyhwYXRoLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCkgcGFyYW1zID0ge307XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL10rKS9nLCBmdW5jdGlvbiAoXywga2V5KSB7XG4gICAgdmFyIHZhbCA9IHBhcmFtc1trZXldO1xuICAgIGlmICghdmFsKSB7XG4gICAgICB3YXJuKCdwYXJhbSBcIicgKyBrZXkgKyAnXCIgbm90IGZvdW5kIHdoZW4gZ2VuZXJhdGluZyAnICsgJ3BhdGggZm9yIFwiJyArIHBhdGggKyAnXCIgd2l0aCBwYXJhbXMgJyArIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9KTtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcGF0aCArPSBnZW5RdWVyeShxdWVyeSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59IiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBXYXRjaGVyID0gcmVxdWlyZSgnLi4vd2F0Y2hlcicpXG52YXIgUGF0aCA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvcGF0aCcpXG52YXIgdGV4dFBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGV4dCcpXG52YXIgZGlyUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9kaXJlY3RpdmUnKVxudmFyIGV4cFBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvZXhwcmVzc2lvbicpXG52YXIgZmlsdGVyUkUgPSAvW158XVxcfFtefF0vXG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBmcm9tIGFuIGV4cHJlc3Npb24gb24gdGhpcyB2bS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthc1N0YXRlbWVudF1cbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZXhwb3J0cy4kZ2V0ID0gZnVuY3Rpb24gKGV4cCwgYXNTdGF0ZW1lbnQpIHtcbiAgdmFyIHJlcyA9IGV4cFBhcnNlci5wYXJzZShleHApXG4gIGlmIChyZXMpIHtcbiAgICBpZiAoYXNTdGF0ZW1lbnQgJiYgIWV4cFBhcnNlci5pc1NpbXBsZVBhdGgoZXhwKSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICByZXR1cm4gZnVuY3Rpb24gc3RhdGVtZW50SGFuZGxlciAoKSB7XG4gICAgICAgIHJlcy5nZXQuY2FsbChzZWxmLCBzZWxmKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVzLmdldC5jYWxsKHRoaXMsIHRoaXMpXG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgZnJvbSBhbiBleHByZXNzaW9uIG9uIHRoaXMgdm0uXG4gKiBUaGUgZXhwcmVzc2lvbiBtdXN0IGJlIGEgdmFsaWQgbGVmdC1oYW5kXG4gKiBleHByZXNzaW9uIGluIGFuIGFzc2lnbm1lbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnRzLiRzZXQgPSBmdW5jdGlvbiAoZXhwLCB2YWwpIHtcbiAgdmFyIHJlcyA9IGV4cFBhcnNlci5wYXJzZShleHAsIHRydWUpXG4gIGlmIChyZXMgJiYgcmVzLnNldCkge1xuICAgIHJlcy5zZXQuY2FsbCh0aGlzLCB0aGlzLCB2YWwpXG4gIH1cbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBvbiB0aGUgVk1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0cy4kZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICBfLmRlbGV0ZSh0aGlzLl9kYXRhLCBrZXkpXG59XG5cbi8qKlxuICogV2F0Y2ggYW4gZXhwcmVzc2lvbiwgdHJpZ2dlciBjYWxsYmFjayB3aGVuIGl0c1xuICogdmFsdWUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gaW1tZWRpYXRlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gLSB1bndhdGNoRm5cbiAqL1xuXG5leHBvcnRzLiR3YXRjaCA9IGZ1bmN0aW9uIChleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICB2YXIgdm0gPSB0aGlzXG4gIHZhciBwYXJzZWRcbiAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnc3RyaW5nJykge1xuICAgIHBhcnNlZCA9IGRpclBhcnNlci5wYXJzZShleHBPckZuKVxuICAgIGV4cE9yRm4gPSBwYXJzZWQuZXhwcmVzc2lvblxuICB9XG4gIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCB7XG4gICAgZGVlcDogb3B0aW9ucyAmJiBvcHRpb25zLmRlZXAsXG4gICAgZmlsdGVyczogcGFyc2VkICYmIHBhcnNlZC5maWx0ZXJzXG4gIH0pXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICB3YXRjaGVyLnRlYXJkb3duKClcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIGEgdGV4dCBkaXJlY3RpdmUsIGluY2x1ZGluZyBmaWx0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthc1N0YXRlbWVudF1cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLiRldmFsID0gZnVuY3Rpb24gKHRleHQsIGFzU3RhdGVtZW50KSB7XG4gIC8vIGNoZWNrIGZvciBmaWx0ZXJzLlxuICBpZiAoZmlsdGVyUkUudGVzdCh0ZXh0KSkge1xuICAgIHZhciBkaXIgPSBkaXJQYXJzZXIucGFyc2UodGV4dClcbiAgICAvLyB0aGUgZmlsdGVyIHJlZ2V4IGNoZWNrIG1pZ2h0IGdpdmUgZmFsc2UgcG9zaXRpdmVcbiAgICAvLyBmb3IgcGlwZXMgaW5zaWRlIHN0cmluZ3MsIHNvIGl0J3MgcG9zc2libGUgdGhhdFxuICAgIC8vIHdlIGRvbid0IGdldCBhbnkgZmlsdGVycyBoZXJlXG4gICAgdmFyIHZhbCA9IHRoaXMuJGdldChkaXIuZXhwcmVzc2lvbiwgYXNTdGF0ZW1lbnQpXG4gICAgcmV0dXJuIGRpci5maWx0ZXJzXG4gICAgICA/IHRoaXMuX2FwcGx5RmlsdGVycyh2YWwsIG51bGwsIGRpci5maWx0ZXJzKVxuICAgICAgOiB2YWxcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBmaWx0ZXJcbiAgICByZXR1cm4gdGhpcy4kZ2V0KHRleHQsIGFzU3RhdGVtZW50KVxuICB9XG59XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgYSBwaWVjZSBvZiB0ZW1wbGF0ZSB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy4kaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAodGV4dCkge1xuICB2YXIgdG9rZW5zID0gdGV4dFBhcnNlci5wYXJzZSh0ZXh0KVxuICB2YXIgdm0gPSB0aGlzXG4gIGlmICh0b2tlbnMpIHtcbiAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHZtLiRldmFsKHRva2Vuc1swXS52YWx1ZSkgKyAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnRhZ1xuICAgICAgICAgID8gdm0uJGV2YWwodG9rZW4udmFsdWUpXG4gICAgICAgICAgOiB0b2tlbi52YWx1ZVxuICAgICAgfSkuam9pbignJylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRleHRcbiAgfVxufVxuXG4vKipcbiAqIExvZyBpbnN0YW5jZSBkYXRhIGFzIGEgcGxhaW4gSlMgb2JqZWN0XG4gKiBzbyB0aGF0IGl0IGlzIGVhc2llciB0byBpbnNwZWN0IGluIGNvbnNvbGUuXG4gKiBUaGlzIG1ldGhvZCBhc3N1bWVzIGNvbnNvbGUgaXMgYXZhaWxhYmxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcGF0aF1cbiAqL1xuXG5leHBvcnRzLiRsb2cgPSBmdW5jdGlvbiAocGF0aCkge1xuICB2YXIgZGF0YSA9IHBhdGhcbiAgICA/IFBhdGguZ2V0KHRoaXMuX2RhdGEsIHBhdGgpXG4gICAgOiB0aGlzLl9kYXRhXG4gIGlmIChkYXRhKSB7XG4gICAgZGF0YSA9IGNsZWFuKGRhdGEpXG4gIH1cbiAgLy8gaW5jbHVkZSBjb21wdXRlZCBmaWVsZHNcbiAgaWYgKCFwYXRoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGRhdGFba2V5XSA9IGNsZWFuKHRoaXNba2V5XSlcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coZGF0YSlcbn1cblxuLyoqXG4gKiBcImNsZWFuXCIgYSBnZXR0ZXIvc2V0dGVyIGNvbnZlcnRlZCBvYmplY3QgaW50byBhIHBsYWluXG4gKiBvYmplY3QgY29weS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gLSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBjbGVhbiAob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHRyYW5zaXRpb24gPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uJylcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBvbi1pbnN0YW5jZSBuZXh0VGljay4gVGhlIGNhbGxiYWNrIGlzXG4gKiBhdXRvLWJvdW5kIHRvIHRoZSBpbnN0YW5jZSwgYW5kIHRoaXMgYXZvaWRzIGNvbXBvbmVudFxuICogbW9kdWxlcyBoYXZpbmcgdG8gcmVseSBvbiB0aGUgZ2xvYmFsIFZ1ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbmV4cG9ydHMuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIF8ubmV4dFRpY2soZm4sIHRoaXMpXG59XG5cbi8qKlxuICogQXBwZW5kIGluc3RhbmNlIHRvIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gKi9cblxuZXhwb3J0cy4kYXBwZW5kVG8gPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgcmV0dXJuIGluc2VydChcbiAgICB0aGlzLCB0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbixcbiAgICBhcHBlbmQsIHRyYW5zaXRpb24uYXBwZW5kXG4gIClcbn1cblxuLyoqXG4gKiBQcmVwZW5kIGluc3RhbmNlIHRvIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gKi9cblxuZXhwb3J0cy4kcHJlcGVuZFRvID0gZnVuY3Rpb24gKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIHRhcmdldCA9IHF1ZXJ5KHRhcmdldClcbiAgaWYgKHRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICB0aGlzLiRiZWZvcmUodGFyZ2V0LmZpcnN0Q2hpbGQsIGNiLCB3aXRoVHJhbnNpdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLiRhcHBlbmRUbyh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEluc2VydCBpbnN0YW5jZSBiZWZvcmUgdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAqL1xuXG5leHBvcnRzLiRiZWZvcmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgcmV0dXJuIGluc2VydChcbiAgICB0aGlzLCB0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbixcbiAgICBiZWZvcmUsIHRyYW5zaXRpb24uYmVmb3JlXG4gIClcbn1cblxuLyoqXG4gKiBJbnNlcnQgaW5zdGFuY2UgYWZ0ZXIgdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAqL1xuXG5leHBvcnRzLiRhZnRlciA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpXG4gIGlmICh0YXJnZXQubmV4dFNpYmxpbmcpIHtcbiAgICB0aGlzLiRiZWZvcmUodGFyZ2V0Lm5leHRTaWJsaW5nLCBjYiwgd2l0aFRyYW5zaXRpb24pXG4gIH0gZWxzZSB7XG4gICAgdGhpcy4kYXBwZW5kVG8odGFyZ2V0LnBhcmVudE5vZGUsIGNiLCB3aXRoVHJhbnNpdGlvbilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZSBmcm9tIERPTVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAqL1xuXG5leHBvcnRzLiRyZW1vdmUgPSBmdW5jdGlvbiAoY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIGlmICghdGhpcy4kZWwucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBjYiAmJiBjYigpXG4gIH1cbiAgdmFyIGluRG9jID0gdGhpcy5faXNBdHRhY2hlZCAmJiBfLmluRG9jKHRoaXMuJGVsKVxuICAvLyBpZiB3ZSBhcmUgbm90IGluIGRvY3VtZW50LCBubyBuZWVkIHRvIGNoZWNrXG4gIC8vIGZvciB0cmFuc2l0aW9uc1xuICBpZiAoIWluRG9jKSB3aXRoVHJhbnNpdGlvbiA9IGZhbHNlXG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgcmVhbENiID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbkRvYykgc2VsZi5fY2FsbEhvb2soJ2RldGFjaGVkJylcbiAgICBpZiAoY2IpIGNiKClcbiAgfVxuICBpZiAodGhpcy5faXNGcmFnbWVudCkge1xuICAgIF8ucmVtb3ZlTm9kZVJhbmdlKFxuICAgICAgdGhpcy5fZnJhZ21lbnRTdGFydCxcbiAgICAgIHRoaXMuX2ZyYWdtZW50RW5kLFxuICAgICAgdGhpcywgdGhpcy5fZnJhZ21lbnQsIHJlYWxDYlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB2YXIgb3AgPSB3aXRoVHJhbnNpdGlvbiA9PT0gZmFsc2VcbiAgICAgID8gcmVtb3ZlXG4gICAgICA6IHRyYW5zaXRpb24ucmVtb3ZlXG4gICAgb3AodGhpcy4kZWwsIHRoaXMsIHJlYWxDYilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFNoYXJlZCBET00gaW5zZXJ0aW9uIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AxIC0gb3AgZm9yIG5vbi10cmFuc2l0aW9uIGluc2VydFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AyIC0gb3AgZm9yIHRyYW5zaXRpb24gaW5zZXJ0XG4gKiBAcmV0dXJuIHZtXG4gKi9cblxuZnVuY3Rpb24gaW5zZXJ0ICh2bSwgdGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24sIG9wMSwgb3AyKSB7XG4gIHRhcmdldCA9IHF1ZXJ5KHRhcmdldClcbiAgdmFyIHRhcmdldElzRGV0YWNoZWQgPSAhXy5pbkRvYyh0YXJnZXQpXG4gIHZhciBvcCA9IHdpdGhUcmFuc2l0aW9uID09PSBmYWxzZSB8fCB0YXJnZXRJc0RldGFjaGVkXG4gICAgICA/IG9wMVxuICAgICAgOiBvcDJcbiAgdmFyIHNob3VsZENhbGxIb29rID1cbiAgICAhdGFyZ2V0SXNEZXRhY2hlZCAmJlxuICAgICF2bS5faXNBdHRhY2hlZCAmJlxuICAgICFfLmluRG9jKHZtLiRlbClcbiAgaWYgKHZtLl9pc0ZyYWdtZW50KSB7XG4gICAgXy5tYXBOb2RlUmFuZ2Uodm0uX2ZyYWdtZW50U3RhcnQsIHZtLl9mcmFnbWVudEVuZCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIG9wKG5vZGUsIHRhcmdldCwgdm0pXG4gICAgfSlcbiAgICBjYiAmJiBjYigpXG4gIH0gZWxzZSB7XG4gICAgb3Aodm0uJGVsLCB0YXJnZXQsIHZtLCBjYilcbiAgfVxuICBpZiAoc2hvdWxkQ2FsbEhvb2spIHtcbiAgICB2bS5fY2FsbEhvb2soJ2F0dGFjaGVkJylcbiAgfVxuICByZXR1cm4gdm1cbn1cblxuLyoqXG4gKiBDaGVjayBmb3Igc2VsZWN0b3JzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RWxlbWVudH0gZWxcbiAqL1xuXG5mdW5jdGlvbiBxdWVyeSAoZWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gJ3N0cmluZydcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgOiBlbFxufVxuXG4vKipcbiAqIEFwcGVuZCBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiBhcHBlbmQgKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIGlmIChjYikgY2IoKVxufVxuXG4vKipcbiAqIEluc2VydEJlZm9yZSBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUgKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICBfLmJlZm9yZShlbCwgdGFyZ2V0KVxuICBpZiAoY2IpIGNiKClcbn1cblxuLyoqXG4gKiBSZW1vdmUgb3BlcmF0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiByZW1vdmUgKGVsLCB2bSwgY2IpIHtcbiAgXy5yZW1vdmUoZWwpXG4gIGlmIChjYikgY2IoKVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnRzLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgKHRoaXMuX2V2ZW50c1tldmVudF0gfHwgKHRoaXMuX2V2ZW50c1tldmVudF0gPSBbXSkpXG4gICAgLnB1c2goZm4pXG4gIG1vZGlmeUxpc3RlbmVyQ291bnQodGhpcywgZXZlbnQsIDEpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnRzLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgZnVuY3Rpb24gb24gKCkge1xuICAgIHNlbGYuJG9mZihldmVudCwgb24pXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIG9uLmZuID0gZm5cbiAgdGhpcy4kb24oZXZlbnQsIG9uKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZXhwb3J0cy4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICB2YXIgY2JzXG4gIC8vIGFsbFxuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBpZiAodGhpcy4kcGFyZW50KSB7XG4gICAgICBmb3IgKGV2ZW50IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgICBjYnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdXG4gICAgICAgIGlmIChjYnMpIHtcbiAgICAgICAgICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAtY2JzLmxlbmd0aClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9ldmVudHMgPSB7fVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgY2JzID0gdGhpcy5fZXZlbnRzW2V2ZW50XVxuICBpZiAoIWNicykge1xuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAtY2JzLmxlbmd0aClcbiAgICB0aGlzLl9ldmVudHNbZXZlbnRdID0gbnVsbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgLy8gc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2JcbiAgdmFyIGkgPSBjYnMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjYiA9IGNic1tpXVxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAtMSlcbiAgICAgIGNicy5zcGxpY2UoaSwgMSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogVHJpZ2dlciBhbiBldmVudCBvbiBzZWxmLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICovXG5cbmV4cG9ydHMuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGNicyA9IHRoaXMuX2V2ZW50c1tldmVudF1cbiAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gIWNic1xuICBpZiAoY2JzKSB7XG4gICAgY2JzID0gY2JzLmxlbmd0aCA+IDFcbiAgICAgID8gXy50b0FycmF5KGNicylcbiAgICAgIDogY2JzXG4gICAgdmFyIGFyZ3MgPSBfLnRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHJlcyA9IGNic1tpXS5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgaWYgKHJlcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgYnJvYWRjYXN0IGFuIGV2ZW50IHRvIGFsbCBjaGlsZHJlbiBpbnN0YW5jZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0gey4uLip9IGFkZGl0aW9uYWwgYXJndW1lbnRzXG4gKi9cblxuZXhwb3J0cy4kYnJvYWRjYXN0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIGlmIG5vIGNoaWxkIGhhcyByZWdpc3RlcmVkIGZvciB0aGlzIGV2ZW50LFxuICAvLyB0aGVuIHRoZXJlJ3Mgbm8gbmVlZCB0byBicm9hZGNhc3QuXG4gIGlmICghdGhpcy5fZXZlbnRzQ291bnRbZXZlbnRdKSByZXR1cm5cbiAgdmFyIGNoaWxkcmVuID0gdGhpcy4kY2hpbGRyZW5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgIGNoaWxkLiRlbWl0LmFwcGx5KGNoaWxkLCBhcmd1bWVudHMpXG4gICAgaWYgKGNoaWxkLl9zaG91bGRQcm9wYWdhdGUpIHtcbiAgICAgIGNoaWxkLiRicm9hZGNhc3QuYXBwbHkoY2hpbGQsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBwcm9wYWdhdGUgYW4gZXZlbnQgdXAgdGhlIHBhcmVudCBjaGFpbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7Li4uKn0gYWRkaXRpb25hbCBhcmd1bWVudHNcbiAqL1xuXG5leHBvcnRzLiRkaXNwYXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy4kZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIHZhciBwYXJlbnQgPSB0aGlzLiRwYXJlbnRcbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIHBhcmVudC4kZW1pdC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cylcbiAgICBwYXJlbnQgPSBwYXJlbnQuX3Nob3VsZFByb3BhZ2F0ZVxuICAgICAgPyBwYXJlbnQuJHBhcmVudFxuICAgICAgOiBudWxsXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBNb2RpZnkgdGhlIGxpc3RlbmVyIGNvdW50cyBvbiBhbGwgcGFyZW50cy5cbiAqIFRoaXMgYm9va2tlZXBpbmcgYWxsb3dzICRicm9hZGNhc3QgdG8gcmV0dXJuIGVhcmx5IHdoZW5cbiAqIG5vIGNoaWxkIGhhcyBsaXN0ZW5lZCB0byBhIGNlcnRhaW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICovXG5cbnZhciBob29rUkUgPSAvXmhvb2s6L1xuZnVuY3Rpb24gbW9kaWZ5TGlzdGVuZXJDb3VudCAodm0sIGV2ZW50LCBjb3VudCkge1xuICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudFxuICAvLyBob29rcyBkbyBub3QgZ2V0IGJyb2FkY2FzdGVkIHNvIG5vIG5lZWRcbiAgLy8gdG8gZG8gYm9va2tlZXBpbmcgZm9yIHRoZW1cbiAgaWYgKCFwYXJlbnQgfHwgIWNvdW50IHx8IGhvb2tSRS50ZXN0KGV2ZW50KSkgcmV0dXJuXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuX2V2ZW50c0NvdW50W2V2ZW50XSA9XG4gICAgICAocGFyZW50Ll9ldmVudHNDb3VudFtldmVudF0gfHwgMCkgKyBjb3VudFxuICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcblxuLyoqXG4gKiBFeHBvc2UgdXNlZnVsIGludGVybmFsc1xuICovXG5cbmV4cG9ydHMudXRpbCA9IF9cbmV4cG9ydHMuY29uZmlnID0gY29uZmlnXG5leHBvcnRzLnNldCA9IF8uc2V0XG5leHBvcnRzLmRlbGV0ZSA9IF8uZGVsZXRlXG5leHBvcnRzLm5leHRUaWNrID0gXy5uZXh0VGlja1xuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgYXJlIGV4cG9zZWQgZm9yIGFkdmFuY2VkIHVzYWdlIC8gcGx1Z2luc1xuICovXG5cbmV4cG9ydHMuY29tcGlsZXIgPSByZXF1aXJlKCcuLi9jb21waWxlcicpXG5leHBvcnRzLkZyYWdtZW50RmFjdG9yeSA9IHJlcXVpcmUoJy4uL2ZyYWdtZW50L2ZhY3RvcnknKVxuZXhwb3J0cy5pbnRlcm5hbERpcmVjdGl2ZXMgPSByZXF1aXJlKCcuLi9kaXJlY3RpdmVzL2ludGVybmFsJylcbmV4cG9ydHMucGFyc2VycyA9IHtcbiAgcGF0aDogcmVxdWlyZSgnLi4vcGFyc2Vycy9wYXRoJyksXG4gIHRleHQ6IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGV4dCcpLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vcGFyc2Vycy90ZW1wbGF0ZScpLFxuICBkaXJlY3RpdmU6IHJlcXVpcmUoJy4uL3BhcnNlcnMvZGlyZWN0aXZlJyksXG4gIGV4cHJlc3Npb246IHJlcXVpcmUoJy4uL3BhcnNlcnMvZXhwcmVzc2lvbicpXG59XG5cbi8qKlxuICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXG4gKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAqL1xuXG5leHBvcnRzLmNpZCA9IDBcbnZhciBjaWQgPSAxXG5cbi8qKlxuICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5kT3B0aW9uc1xuICovXG5cbmV4cG9ydHMuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge31cbiAgdmFyIFN1cGVyID0gdGhpc1xuICB2YXIgaXNGaXJzdEV4dGVuZCA9IFN1cGVyLmNpZCA9PT0gMFxuICBpZiAoaXNGaXJzdEV4dGVuZCAmJiBleHRlbmRPcHRpb25zLl9DdG9yKSB7XG4gICAgcmV0dXJuIGV4dGVuZE9wdGlvbnMuX0N0b3JcbiAgfVxuICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWVcbiAgdmFyIFN1YiA9IGNyZWF0ZUNsYXNzKG5hbWUgfHwgJ1Z1ZUNvbXBvbmVudCcpXG4gIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSlcbiAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YlxuICBTdWIuY2lkID0gY2lkKytcbiAgU3ViLm9wdGlvbnMgPSBfLm1lcmdlT3B0aW9ucyhcbiAgICBTdXBlci5vcHRpb25zLFxuICAgIGV4dGVuZE9wdGlvbnNcbiAgKVxuICBTdWJbJ3N1cGVyJ10gPSBTdXBlclxuICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvblxuICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kXG4gIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgLy8gY2FuIGhhdmUgdGhlaXIgcHJpdmF0ZSBhc3NldHMgdG9vLlxuICBjb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdXG4gIH0pXG4gIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgaWYgKG5hbWUpIHtcbiAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViXG4gIH1cbiAgLy8gY2FjaGUgY29uc3RydWN0b3JcbiAgaWYgKGlzRmlyc3RFeHRlbmQpIHtcbiAgICBleHRlbmRPcHRpb25zLl9DdG9yID0gU3ViXG4gIH1cbiAgcmV0dXJuIFN1YlxufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3ViLWNsYXNzIGNvbnN0cnVjdG9yIHdpdGggdGhlXG4gKiBnaXZlbiBuYW1lLiBUaGlzIGdpdmVzIHVzIG11Y2ggbmljZXIgb3V0cHV0IHdoZW5cbiAqIGxvZ2dpbmcgaW5zdGFuY2VzIGluIHRoZSBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyAobmFtZSkge1xuICByZXR1cm4gbmV3IEZ1bmN0aW9uKFxuICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIF8uY2xhc3NpZnkobmFtZSkgK1xuICAgICcgKG9wdGlvbnMpIHsgdGhpcy5faW5pdChvcHRpb25zKSB9J1xuICApKClcbn1cblxuLyoqXG4gKiBQbHVnaW4gc3lzdGVtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBsdWdpblxuICovXG5cbmV4cG9ydHMudXNlID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHBsdWdpbi5pbnN0YWxsZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgdmFyIGFyZ3MgPSBfLnRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICBhcmdzLnVuc2hpZnQodGhpcylcbiAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncylcbiAgfSBlbHNlIHtcbiAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncylcbiAgfVxuICBwbHVnaW4uaW5zdGFsbGVkID0gdHJ1ZVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEFwcGx5IGEgZ2xvYmFsIG1peGluIGJ5IG1lcmdpbmcgaXQgaW50byB0aGUgZGVmYXVsdFxuICogb3B0aW9ucy5cbiAqL1xuXG5leHBvcnRzLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gIHZhciBWdWUgPSBfLlZ1ZVxuICBWdWUub3B0aW9ucyA9IF8ubWVyZ2VPcHRpb25zKFZ1ZS5vcHRpb25zLCBtaXhpbilcbn1cblxuLyoqXG4gKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMgd2l0aCB0aGUgZm9sbG93aW5nXG4gKiBzaWduYXR1cmU6XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0geyp9IGRlZmluaXRpb25cbiAqL1xuXG5jb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBleHBvcnRzW3R5cGVdID0gZnVuY3Rpb24gKGlkLCBkZWZpbml0aW9uKSB7XG4gICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBfLmNvbW1vblRhZ1JFLnRlc3QoaWQpKSB7XG4gICAgICAgICAgXy53YXJuKFxuICAgICAgICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAgICAgICAnaWQ6ICcgKyBpZFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0eXBlID09PSAnY29tcG9uZW50JyAmJlxuICAgICAgICBfLmlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbilcbiAgICAgICkge1xuICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBpZFxuICAgICAgICBkZWZpbml0aW9uID0gXy5WdWUuZXh0ZW5kKGRlZmluaXRpb24pXG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdID0gZGVmaW5pdGlvblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25cbiAgICB9XG4gIH1cbn0pXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIGNvbXBpbGVyID0gcmVxdWlyZSgnLi4vY29tcGlsZXInKVxuXG4vKipcbiAqIFNldCBpbnN0YW5jZSB0YXJnZXQgZWxlbWVudCBhbmQga2ljayBvZmYgdGhlIGNvbXBpbGF0aW9uXG4gKiBwcm9jZXNzLiBUaGUgcGFzc2VkIGluIGBlbGAgY2FuIGJlIGEgc2VsZWN0b3Igc3RyaW5nLCBhblxuICogZXhpc3RpbmcgRWxlbWVudCwgb3IgYSBEb2N1bWVudEZyYWdtZW50IChmb3IgYmxvY2tcbiAqIGluc3RhbmNlcykuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8c3RyaW5nfSBlbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuJG1vdW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gIGlmICh0aGlzLl9pc0NvbXBpbGVkKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnJG1vdW50KCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJ1xuICAgIClcbiAgICByZXR1cm5cbiAgfVxuICBlbCA9IF8ucXVlcnkoZWwpXG4gIGlmICghZWwpIHtcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cbiAgdGhpcy5fY29tcGlsZShlbClcbiAgdGhpcy5faW5pdERPTUhvb2tzKClcbiAgaWYgKF8uaW5Eb2ModGhpcy4kZWwpKSB7XG4gICAgdGhpcy5fY2FsbEhvb2soJ2F0dGFjaGVkJylcbiAgICByZWFkeS5jYWxsKHRoaXMpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy4kb25jZSgnaG9vazphdHRhY2hlZCcsIHJlYWR5KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogTWFyayBhbiBpbnN0YW5jZSBhcyByZWFkeS5cbiAqL1xuXG5mdW5jdGlvbiByZWFkeSAoKSB7XG4gIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlXG4gIHRoaXMuX2lzUmVhZHkgPSB0cnVlXG4gIHRoaXMuX2NhbGxIb29rKCdyZWFkeScpXG59XG5cbi8qKlxuICogVGVhcmRvd24gdGhlIGluc3RhbmNlLCBzaW1wbHkgZGVsZWdhdGUgdG8gdGhlIGludGVybmFsXG4gKiBfZGVzdHJveS5cbiAqL1xuXG5leHBvcnRzLiRkZXN0cm95ID0gZnVuY3Rpb24gKHJlbW92ZSwgZGVmZXJDbGVhbnVwKSB7XG4gIHRoaXMuX2Rlc3Ryb3kocmVtb3ZlLCBkZWZlckNsZWFudXApXG59XG5cbi8qKlxuICogUGFydGlhbGx5IGNvbXBpbGUgYSBwaWVjZSBvZiBET00gYW5kIHJldHVybiBhXG4gKiBkZWNvbXBpbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLiRjb21waWxlID0gZnVuY3Rpb24gKGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICByZXR1cm4gY29tcGlsZXIuY29tcGlsZShlbCwgdGhpcy4kb3B0aW9ucywgdHJ1ZSkoXG4gICAgdGhpcywgZWwsIGhvc3QsIHNjb3BlLCBmcmFnXG4gIClcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi91dGlsJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG5cbi8vIHdlIGhhdmUgdHdvIHNlcGFyYXRlIHF1ZXVlczogb25lIGZvciBkaXJlY3RpdmUgdXBkYXRlc1xuLy8gYW5kIG9uZSBmb3IgdXNlciB3YXRjaGVyIHJlZ2lzdGVyZWQgdmlhICR3YXRjaCgpLlxuLy8gd2Ugd2FudCB0byBndWFyYW50ZWUgZGlyZWN0aXZlIHVwZGF0ZXMgdG8gYmUgY2FsbGVkXG4vLyBiZWZvcmUgdXNlciB3YXRjaGVycyBzbyB0aGF0IHdoZW4gdXNlciB3YXRjaGVycyBhcmVcbi8vIHRyaWdnZXJlZCwgdGhlIERPTSB3b3VsZCBoYXZlIGFscmVhZHkgYmVlbiBpbiB1cGRhdGVkXG4vLyBzdGF0ZS5cbnZhciBxdWV1ZSA9IFtdXG52YXIgdXNlclF1ZXVlID0gW11cbnZhciBoYXMgPSB7fVxudmFyIGNpcmN1bGFyID0ge31cbnZhciB3YWl0aW5nID0gZmFsc2VcbnZhciBpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgPSBmYWxzZVxuXG4vKipcbiAqIFJlc2V0IHRoZSBiYXRjaGVyJ3Mgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gcmVzZXRCYXRjaGVyU3RhdGUgKCkge1xuICBxdWV1ZSA9IFtdXG4gIHVzZXJRdWV1ZSA9IFtdXG4gIGhhcyA9IHt9XG4gIGNpcmN1bGFyID0ge31cbiAgd2FpdGluZyA9IGludGVybmFsUXVldWVEZXBsZXRlZCA9IGZhbHNlXG59XG5cbi8qKlxuICogRmx1c2ggYm90aCBxdWV1ZXMgYW5kIHJ1biB0aGUgd2F0Y2hlcnMuXG4gKi9cblxuZnVuY3Rpb24gZmx1c2hCYXRjaGVyUXVldWUgKCkge1xuICBydW5CYXRjaGVyUXVldWUocXVldWUpXG4gIGludGVybmFsUXVldWVEZXBsZXRlZCA9IHRydWVcbiAgcnVuQmF0Y2hlclF1ZXVlKHVzZXJRdWV1ZSlcbiAgLy8gZGV2IHRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoXy5pbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pIHtcbiAgICAgIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLmVtaXQoJ2ZsdXNoJylcbiAgICB9XG4gIH1cbiAgcmVzZXRCYXRjaGVyU3RhdGUoKVxufVxuXG4vKipcbiAqIFJ1biB0aGUgd2F0Y2hlcnMgaW4gYSBzaW5nbGUgcXVldWUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcXVldWVcbiAqL1xuXG5mdW5jdGlvbiBydW5CYXRjaGVyUXVldWUgKHF1ZXVlKSB7XG4gIC8vIGRvIG5vdCBjYWNoZSBsZW5ndGggYmVjYXVzZSBtb3JlIHdhdGNoZXJzIG1pZ2h0IGJlIHB1c2hlZFxuICAvLyBhcyB3ZSBydW4gZXhpc3Rpbmcgd2F0Y2hlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV1cbiAgICB2YXIgaWQgPSB3YXRjaGVyLmlkXG4gICAgaGFzW2lkXSA9IG51bGxcbiAgICB3YXRjaGVyLnJ1bigpXG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDFcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBjb25maWcuX21heFVwZGF0ZUNvdW50KSB7XG4gICAgICAgIHF1ZXVlLnNwbGljZShoYXNbaWRdLCAxKVxuICAgICAgICBfLndhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCBmb3Igd2F0Y2hlciAnICtcbiAgICAgICAgICAnd2l0aCBleHByZXNzaW9uOiAnICsgd2F0Y2hlci5leHByZXNzaW9uXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICogSm9icyB3aXRoIGR1cGxpY2F0ZSBJRHMgd2lsbCBiZSBza2lwcGVkIHVubGVzcyBpdCdzXG4gKiBwdXNoZWQgd2hlbiB0aGUgcXVldWUgaXMgYmVpbmcgZmx1c2hlZC5cbiAqXG4gKiBAcGFyYW0ge1dhdGNoZXJ9IHdhdGNoZXJcbiAqICAgcHJvcGVydGllczpcbiAqICAgLSB7TnVtYmVyfSBpZFxuICogICAtIHtGdW5jdGlvbn0gcnVuXG4gKi9cblxuZXhwb3J0cy5wdXNoID0gZnVuY3Rpb24gKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZFxuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgLy8gaWYgYW4gaW50ZXJuYWwgd2F0Y2hlciBpcyBwdXNoZWQsIGJ1dCB0aGUgaW50ZXJuYWxcbiAgICAvLyBxdWV1ZSBpcyBhbHJlYWR5IGRlcGxldGVkLCB3ZSBydW4gaXQgaW1tZWRpYXRlbHkuXG4gICAgaWYgKGludGVybmFsUXVldWVEZXBsZXRlZCAmJiAhd2F0Y2hlci51c2VyKSB7XG4gICAgICB3YXRjaGVyLnJ1bigpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gcHVzaCB3YXRjaGVyIGludG8gYXBwcm9wcmlhdGUgcXVldWVcbiAgICB2YXIgcSA9IHdhdGNoZXIudXNlciA/IHVzZXJRdWV1ZSA6IHF1ZXVlXG4gICAgaGFzW2lkXSA9IHEubGVuZ3RoXG4gICAgcS5wdXNoKHdhdGNoZXIpXG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZVxuICAgICAgXy5uZXh0VGljayhmbHVzaEJhdGNoZXJRdWV1ZSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQSBkb3VibHkgbGlua2VkIGxpc3QtYmFzZWQgTGVhc3QgUmVjZW50bHkgVXNlZCAoTFJVKVxuICogY2FjaGUuIFdpbGwga2VlcCBtb3N0IHJlY2VudGx5IHVzZWQgaXRlbXMgd2hpbGVcbiAqIGRpc2NhcmRpbmcgbGVhc3QgcmVjZW50bHkgdXNlZCBpdGVtcyB3aGVuIGl0cyBsaW1pdCBpc1xuICogcmVhY2hlZC4gVGhpcyBpcyBhIGJhcmUtYm9uZSB2ZXJzaW9uIG9mXG4gKiBSYXNtdXMgQW5kZXJzc29uJ3MganMtbHJ1OlxuICpcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3JzbXMvanMtbHJ1XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGxpbWl0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBDYWNoZSAobGltaXQpIHtcbiAgdGhpcy5zaXplID0gMFxuICB0aGlzLmxpbWl0ID0gbGltaXRcbiAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gdW5kZWZpbmVkXG4gIHRoaXMuX2tleW1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxudmFyIHAgPSBDYWNoZS5wcm90b3R5cGVcblxuLyoqXG4gKiBQdXQgPHZhbHVlPiBpbnRvIHRoZSBjYWNoZSBhc3NvY2lhdGVkIHdpdGggPGtleT4uXG4gKiBSZXR1cm5zIHRoZSBlbnRyeSB3aGljaCB3YXMgcmVtb3ZlZCB0byBtYWtlIHJvb20gZm9yXG4gKiB0aGUgbmV3IGVudHJ5LiBPdGhlcndpc2UgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICogKGkuZS4gaWYgdGhlcmUgd2FzIGVub3VnaCByb29tIGFscmVhZHkpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0VudHJ5fHVuZGVmaW5lZH1cbiAqL1xuXG5wLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciBlbnRyeSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfVxuICB0aGlzLl9rZXltYXBba2V5XSA9IGVudHJ5XG4gIGlmICh0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwubmV3ZXIgPSBlbnRyeVxuICAgIGVudHJ5Lm9sZGVyID0gdGhpcy50YWlsXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5oZWFkID0gZW50cnlcbiAgfVxuICB0aGlzLnRhaWwgPSBlbnRyeVxuICBpZiAodGhpcy5zaXplID09PSB0aGlzLmxpbWl0KSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnQoKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc2l6ZSsrXG4gIH1cbn1cblxuLyoqXG4gKiBQdXJnZSB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCAob2xkZXN0KSBlbnRyeSBmcm9tIHRoZVxuICogY2FjaGUuIFJldHVybnMgdGhlIHJlbW92ZWQgZW50cnkgb3IgdW5kZWZpbmVkIGlmIHRoZVxuICogY2FjaGUgd2FzIGVtcHR5LlxuICovXG5cbnAuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbnRyeSA9IHRoaXMuaGVhZFxuICBpZiAoZW50cnkpIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV3ZXJcbiAgICB0aGlzLmhlYWQub2xkZXIgPSB1bmRlZmluZWRcbiAgICBlbnRyeS5uZXdlciA9IGVudHJ5Lm9sZGVyID0gdW5kZWZpbmVkXG4gICAgdGhpcy5fa2V5bWFwW2VudHJ5LmtleV0gPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gZW50cnlcbn1cblxuLyoqXG4gKiBHZXQgYW5kIHJlZ2lzdGVyIHJlY2VudCB1c2Ugb2YgPGtleT4uIFJldHVybnMgdGhlIHZhbHVlXG4gKiBhc3NvY2lhdGVkIHdpdGggPGtleT4gb3IgdW5kZWZpbmVkIGlmIG5vdCBpbiBjYWNoZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHJldHVybkVudHJ5XG4gKiBAcmV0dXJuIHtFbnRyeXwqfVxuICovXG5cbnAuZ2V0ID0gZnVuY3Rpb24gKGtleSwgcmV0dXJuRW50cnkpIHtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fa2V5bWFwW2tleV1cbiAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHJldHVyblxuICBpZiAoZW50cnkgPT09IHRoaXMudGFpbCkge1xuICAgIHJldHVybiByZXR1cm5FbnRyeVxuICAgICAgPyBlbnRyeVxuICAgICAgOiBlbnRyeS52YWx1ZVxuICB9XG4gIC8vIEhFQUQtLS0tLS0tLS0tLS0tLVRBSUxcbiAgLy8gICA8Lm9sZGVyICAgLm5ld2VyPlxuICAvLyAgPC0tLSBhZGQgZGlyZWN0aW9uIC0tXG4gIC8vICAgQSAgQiAgQyAgPEQ+ICBFXG4gIGlmIChlbnRyeS5uZXdlcikge1xuICAgIGlmIChlbnRyeSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgICB0aGlzLmhlYWQgPSBlbnRyeS5uZXdlclxuICAgIH1cbiAgICBlbnRyeS5uZXdlci5vbGRlciA9IGVudHJ5Lm9sZGVyIC8vIEMgPC0tIEUuXG4gIH1cbiAgaWYgKGVudHJ5Lm9sZGVyKSB7XG4gICAgZW50cnkub2xkZXIubmV3ZXIgPSBlbnRyeS5uZXdlciAvLyBDLiAtLT4gRVxuICB9XG4gIGVudHJ5Lm5ld2VyID0gdW5kZWZpbmVkIC8vIEQgLS14XG4gIGVudHJ5Lm9sZGVyID0gdGhpcy50YWlsIC8vIEQuIC0tPiBFXG4gIGlmICh0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwubmV3ZXIgPSBlbnRyeSAvLyBFLiA8LS0gRFxuICB9XG4gIHRoaXMudGFpbCA9IGVudHJ5XG4gIHJldHVybiByZXR1cm5FbnRyeVxuICAgID8gZW50cnlcbiAgICA6IGVudHJ5LnZhbHVlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FjaGVcbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgZGlyUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9kaXJlY3RpdmUnKVxudmFyIHByb3BEZWYgPSByZXF1aXJlKCcuLi9kaXJlY3RpdmVzL2ludGVybmFsL3Byb3AnKVxudmFyIHByb3BCaW5kaW5nTW9kZXMgPSByZXF1aXJlKCcuLi9jb25maWcnKS5fcHJvcEJpbmRpbmdNb2Rlc1xudmFyIGVtcHR5ID0ge31cblxuLy8gcmVnZXhlc1xudmFyIGlkZW50UkUgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3BhdGgnKS5pZGVudFJFXG52YXIgc2V0dGFibGVQYXRoUkUgPSAvXltBLVphLXpfJF1bXFx3JF0qKFxcLltBLVphLXpfJF1bXFx3JF0qfFxcW1teXFxbXFxdXStcXF0pKiQvXG5cbi8qKlxuICogQ29tcGlsZSBwcm9wcyBvbiBhIHJvb3QgZWxlbWVudCBhbmQgcmV0dXJuXG4gKiBhIHByb3BzIGxpbmsgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wT3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IHByb3BzTGlua0ZuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21waWxlUHJvcHMgKGVsLCBwcm9wT3B0aW9ucykge1xuICB2YXIgcHJvcHMgPSBbXVxuICB2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wT3B0aW9ucylcbiAgdmFyIGkgPSBuYW1lcy5sZW5ndGhcbiAgdmFyIG9wdGlvbnMsIG5hbWUsIGF0dHIsIHZhbHVlLCBwYXRoLCBwYXJzZWQsIHByb3BcbiAgd2hpbGUgKGktLSkge1xuICAgIG5hbWUgPSBuYW1lc1tpXVxuICAgIG9wdGlvbnMgPSBwcm9wT3B0aW9uc1tuYW1lXSB8fCBlbXB0eVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbmFtZSA9PT0gJyRkYXRhJykge1xuICAgICAgXy53YXJuKCdEbyBub3QgdXNlICRkYXRhIGFzIHByb3AuJylcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gcHJvcHMgY291bGQgY29udGFpbiBkYXNoZXMsIHdoaWNoIHdpbGwgYmVcbiAgICAvLyBpbnRlcnByZXRlZCBhcyBtaW51cyBjYWxjdWxhdGlvbnMgYnkgdGhlIHBhcnNlclxuICAgIC8vIHNvIHdlIG5lZWQgdG8gY2FtZWxpemUgdGhlIHBhdGggaGVyZVxuICAgIHBhdGggPSBfLmNhbWVsaXplKG5hbWUpXG4gICAgaWYgKCFpZGVudFJFLnRlc3QocGF0aCkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wIGtleTogXCInICsgbmFtZSArICdcIi4gUHJvcCBrZXlzICcgK1xuICAgICAgICAnbXVzdCBiZSB2YWxpZCBpZGVudGlmaWVycy4nXG4gICAgICApXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHByb3AgPSB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBtb2RlOiBwcm9wQmluZGluZ01vZGVzLk9ORV9XQVksXG4gICAgICByYXc6IG51bGxcbiAgICB9XG5cbiAgICBhdHRyID0gXy5oeXBoZW5hdGUobmFtZSlcbiAgICAvLyBmaXJzdCBjaGVjayBkeW5hbWljIHZlcnNpb25cbiAgICBpZiAoKHZhbHVlID0gXy5nZXRCaW5kQXR0cihlbCwgYXR0cikpID09PSBudWxsKSB7XG4gICAgICBpZiAoKHZhbHVlID0gXy5nZXRCaW5kQXR0cihlbCwgYXR0ciArICcuc3luYycpKSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wLm1vZGUgPSBwcm9wQmluZGluZ01vZGVzLlRXT19XQVlcbiAgICAgIH0gZWxzZSBpZiAoKHZhbHVlID0gXy5nZXRCaW5kQXR0cihlbCwgYXR0ciArICcub25jZScpKSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wLm1vZGUgPSBwcm9wQmluZGluZ01vZGVzLk9ORV9USU1FXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgLy8gaGFzIGR5bmFtaWMgYmluZGluZyFcbiAgICAgIHByb3AucmF3ID0gdmFsdWVcbiAgICAgIHBhcnNlZCA9IGRpclBhcnNlci5wYXJzZSh2YWx1ZSlcbiAgICAgIHZhbHVlID0gcGFyc2VkLmV4cHJlc3Npb25cbiAgICAgIHByb3AuZmlsdGVycyA9IHBhcnNlZC5maWx0ZXJzXG4gICAgICAvLyBjaGVjayBiaW5kaW5nIHR5cGVcbiAgICAgIGlmIChfLmlzTGl0ZXJhbCh2YWx1ZSkpIHtcbiAgICAgICAgLy8gZm9yIGV4cHJlc3Npb25zIGNvbnRhaW5pbmcgbGl0ZXJhbCBudW1iZXJzIGFuZFxuICAgICAgICAvLyBib29sZWFucywgdGhlcmUncyBubyBuZWVkIHRvIHNldHVwIGEgcHJvcCBiaW5kaW5nLFxuICAgICAgICAvLyBzbyB3ZSBjYW4gb3B0aW1pemUgdGhlbSBhcyBhIG9uZS10aW1lIHNldC5cbiAgICAgICAgcHJvcC5vcHRpbWl6ZWRMaXRlcmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcC5keW5hbWljID0gdHJ1ZVxuICAgICAgICAvLyBjaGVjayBub24tc2V0dGFibGUgcGF0aCBmb3IgdHdvLXdheSBiaW5kaW5nc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgcHJvcC5tb2RlID09PSBwcm9wQmluZGluZ01vZGVzLlRXT19XQVkgJiZcbiAgICAgICAgICAgICFzZXR0YWJsZVBhdGhSRS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgIHByb3AubW9kZSA9IHByb3BCaW5kaW5nTW9kZXMuT05FX1dBWVxuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgICdDYW5ub3QgYmluZCB0d28td2F5IHByb3Agd2l0aCBub24tc2V0dGFibGUgJyArXG4gICAgICAgICAgICAncGFyZW50IHBhdGg6ICcgKyB2YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcC5wYXJlbnRQYXRoID0gdmFsdWVcblxuICAgICAgLy8gd2FybiByZXF1aXJlZCB0d28td2F5XG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgb3B0aW9ucy50d29XYXkgJiZcbiAgICAgICAgcHJvcC5tb2RlICE9PSBwcm9wQmluZGluZ01vZGVzLlRXT19XQVlcbiAgICAgICkge1xuICAgICAgICBfLndhcm4oXG4gICAgICAgICAgJ1Byb3AgXCInICsgbmFtZSArICdcIiBleHBlY3RzIGEgdHdvLXdheSBiaW5kaW5nIHR5cGUuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgodmFsdWUgPSBfLmF0dHIoZWwsIGF0dHIpKSAhPT0gbnVsbCkge1xuICAgICAgLy8gaGFzIGxpdGVyYWwgYmluZGluZyFcbiAgICAgIHByb3AucmF3ID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZWQpIHtcbiAgICAgIC8vIHdhcm4gbWlzc2luZyByZXF1aXJlZFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6ICcgKyBuYW1lXG4gICAgICApXG4gICAgfVxuICAgIC8vIHB1c2ggcHJvcFxuICAgIHByb3BzLnB1c2gocHJvcClcbiAgfVxuICByZXR1cm4gbWFrZVByb3BzTGlua0ZuKHByb3BzKVxufVxuXG4vKipcbiAqIEJ1aWxkIGEgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIHByb3BzIHRvIGEgdm0uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwcm9wc0xpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VQcm9wc0xpbmtGbiAocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb3BzTGlua0ZuICh2bSwgc2NvcGUpIHtcbiAgICAvLyBzdG9yZSByZXNvbHZlZCBwcm9wcyBpbmZvXG4gICAgdm0uX3Byb3BzID0ge31cbiAgICB2YXIgaSA9IHByb3BzLmxlbmd0aFxuICAgIHZhciBwcm9wLCBwYXRoLCBvcHRpb25zLCB2YWx1ZSwgcmF3XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHJvcCA9IHByb3BzW2ldXG4gICAgICByYXcgPSBwcm9wLnJhd1xuICAgICAgcGF0aCA9IHByb3AucGF0aFxuICAgICAgb3B0aW9ucyA9IHByb3Aub3B0aW9uc1xuICAgICAgdm0uX3Byb3BzW3BhdGhdID0gcHJvcFxuICAgICAgaWYgKHJhdyA9PT0gbnVsbCkge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFic2VudCBwcm9wXG4gICAgICAgIF8uaW5pdFByb3Aodm0sIHByb3AsIGdldERlZmF1bHQodm0sIG9wdGlvbnMpKVxuICAgICAgfSBlbHNlIGlmIChwcm9wLmR5bmFtaWMpIHtcbiAgICAgICAgLy8gZHluYW1pYyBwcm9wXG4gICAgICAgIGlmICh2bS5fY29udGV4dCkge1xuICAgICAgICAgIGlmIChwcm9wLm1vZGUgPT09IHByb3BCaW5kaW5nTW9kZXMuT05FX1RJTUUpIHtcbiAgICAgICAgICAgIC8vIG9uZSB0aW1lIGJpbmRpbmdcbiAgICAgICAgICAgIHZhbHVlID0gKHNjb3BlIHx8IHZtLl9jb250ZXh0KS4kZ2V0KHByb3AucGFyZW50UGF0aClcbiAgICAgICAgICAgIF8uaW5pdFByb3Aodm0sIHByb3AsIHZhbHVlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkeW5hbWljIGJpbmRpbmdcbiAgICAgICAgICAgIHZtLl9iaW5kRGlyKHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Byb3AnLFxuICAgICAgICAgICAgICBkZWY6IHByb3BEZWYsXG4gICAgICAgICAgICAgIHByb3A6IHByb3BcbiAgICAgICAgICAgIH0sIG51bGwsIG51bGwsIHNjb3BlKSAvLyBlbCwgaG9zdCwgc2NvcGVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICAgICAnQ2Fubm90IGJpbmQgZHluYW1pYyBwcm9wIG9uIGEgcm9vdCBpbnN0YW5jZScgK1xuICAgICAgICAgICAgJyB3aXRoIG5vIHBhcmVudDogJyArIHByb3AubmFtZSArICc9XCInICtcbiAgICAgICAgICAgIHJhdyArICdcIidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJvcC5vcHRpbWl6ZWRMaXRlcmFsKSB7XG4gICAgICAgIC8vIG9wdGltaXplZCBsaXRlcmFsLCBjYXN0IGl0IGFuZCBqdXN0IHNldCBvbmNlXG4gICAgICAgIHZhciBzdHJpcHBlZCA9IF8uc3RyaXBRdW90ZXMocmF3KVxuICAgICAgICB2YWx1ZSA9IHN0cmlwcGVkID09PSByYXdcbiAgICAgICAgICA/IF8udG9Cb29sZWFuKF8udG9OdW1iZXIocmF3KSlcbiAgICAgICAgICA6IHN0cmlwcGVkXG4gICAgICAgIF8uaW5pdFByb3Aodm0sIHByb3AsIHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3RyaW5nIGxpdGVyYWwsIGJ1dCB3ZSBuZWVkIHRvIGNhdGVyIGZvclxuICAgICAgICAvLyBCb29sZWFuIHByb3BzIHdpdGggbm8gdmFsdWVcbiAgICAgICAgdmFsdWUgPSBvcHRpb25zLnR5cGUgPT09IEJvb2xlYW4gJiYgcmF3ID09PSAnJ1xuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogcmF3XG4gICAgICAgIF8uaW5pdFByb3Aodm0sIHByb3AsIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7Kn1cbiAqL1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0ICh2bSwgb3B0aW9ucykge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpKSB7XG4gICAgLy8gYWJzZW50IGJvb2xlYW4gdmFsdWUgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICByZXR1cm4gb3B0aW9ucy50eXBlID09PSBCb29sZWFuXG4gICAgICA/IGZhbHNlXG4gICAgICA6IHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBvcHRpb25zLmRlZmF1bHRcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAoXy5pc09iamVjdChkZWYpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnT2JqZWN0L0FycmF5IGFzIGRlZmF1bHQgcHJvcCB2YWx1ZXMgd2lsbCBiZSBzaGFyZWQgJyArXG4gICAgICAnYWNyb3NzIG11bHRpcGxlIGluc3RhbmNlcy4gVXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICtcbiAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC4nXG4gICAgKVxuICB9XG4gIC8vIGNhbGwgZmFjdG9yeSBmdW5jdGlvbiBmb3Igbm9uLUZ1bmN0aW9uIHR5cGVzXG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMudHlwZSAhPT0gRnVuY3Rpb25cbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHB1YmxpY0RpcmVjdGl2ZXMgPSByZXF1aXJlKCcuLi9kaXJlY3RpdmVzL3B1YmxpYycpXG52YXIgaW50ZXJuYWxEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlcy9pbnRlcm5hbCcpXG52YXIgY29tcGlsZVByb3BzID0gcmVxdWlyZSgnLi9jb21waWxlLXByb3BzJylcbnZhciB0ZXh0UGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy90ZXh0JylcbnZhciBkaXJQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL2RpcmVjdGl2ZScpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RlbXBsYXRlJylcbnZhciByZXNvbHZlQXNzZXQgPSBfLnJlc29sdmVBc3NldFxuXG4vLyBzcGVjaWFsIGJpbmRpbmcgcHJlZml4ZXNcbnZhciBiaW5kUkUgPSAvXnYtYmluZDp8XjovXG52YXIgb25SRSA9IC9edi1vbjp8XkAvXG52YXIgYXJnUkUgPSAvOiguKikkL1xudmFyIG1vZGlmaWVyUkUgPSAvXFwuW15cXC5dKy9nXG52YXIgdHJhbnNpdGlvblJFID0gL14odi1iaW5kOnw6KT90cmFuc2l0aW9uJC9cblxuLy8gdGVybWluYWwgZGlyZWN0aXZlc1xudmFyIHRlcm1pbmFsRGlyZWN0aXZlcyA9IFtcbiAgJ2ZvcicsXG4gICdpZidcbl1cblxuLy8gZGVmYXVsdCBkaXJlY3RpdmUgcHJpb3JpdHlcbnZhciBERUZBVUxUX1BSSU9SSVRZID0gMTAwMFxuXG4vKipcbiAqIENvbXBpbGUgYSB0ZW1wbGF0ZSBhbmQgcmV0dXJuIGEgcmV1c2FibGUgY29tcG9zaXRlIGxpbmtcbiAqIGZ1bmN0aW9uLCB3aGljaCByZWN1cnNpdmVseSBjb250YWlucyBtb3JlIGxpbmsgZnVuY3Rpb25zXG4gKiBpbnNpZGUuIFRoaXMgdG9wIGxldmVsIGNvbXBpbGUgZnVuY3Rpb24gd291bGQgbm9ybWFsbHlcbiAqIGJlIGNhbGxlZCBvbiBpbnN0YW5jZSByb290IG5vZGVzLCBidXQgY2FuIGFsc28gYmUgdXNlZFxuICogZm9yIHBhcnRpYWwgY29tcGlsYXRpb24gaWYgdGhlIHBhcnRpYWwgYXJndW1lbnQgaXMgdHJ1ZS5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgY29tcG9zaXRlIGxpbmsgZnVuY3Rpb24sIHdoZW4gY2FsbGVkLCB3aWxsXG4gKiByZXR1cm4gYW4gdW5saW5rIGZ1bmN0aW9uIHRoYXQgdGVhcnNkb3duIGFsbCBkaXJlY3RpdmVzXG4gKiBjcmVhdGVkIGR1cmluZyB0aGUgbGlua2luZyBwaGFzZS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBhcnRpYWxcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuY29tcGlsZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucywgcGFydGlhbCkge1xuICAvLyBsaW5rIGZ1bmN0aW9uIGZvciB0aGUgbm9kZSBpdHNlbGYuXG4gIHZhciBub2RlTGlua0ZuID0gcGFydGlhbCB8fCAhb3B0aW9ucy5fYXNDb21wb25lbnRcbiAgICA/IGNvbXBpbGVOb2RlKGVsLCBvcHRpb25zKVxuICAgIDogbnVsbFxuICAvLyBsaW5rIGZ1bmN0aW9uIGZvciB0aGUgY2hpbGROb2Rlc1xuICB2YXIgY2hpbGRMaW5rRm4gPVxuICAgICEobm9kZUxpbmtGbiAmJiBub2RlTGlua0ZuLnRlcm1pbmFsKSAmJlxuICAgIGVsLnRhZ05hbWUgIT09ICdTQ1JJUFQnICYmXG4gICAgZWwuaGFzQ2hpbGROb2RlcygpXG4gICAgICA/IGNvbXBpbGVOb2RlTGlzdChlbC5jaGlsZE5vZGVzLCBvcHRpb25zKVxuICAgICAgOiBudWxsXG5cbiAgLyoqXG4gICAqIEEgY29tcG9zaXRlIGxpbmtlciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gYSBhbHJlYWR5XG4gICAqIGNvbXBpbGVkIHBpZWNlIG9mIERPTSwgd2hpY2ggaW5zdGFudGlhdGVzIGFsbCBkaXJlY3RpdmVcbiAgICogaW5zdGFuY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gICAqIEBwYXJhbSB7VnVlfSBbaG9zdF0gLSBob3N0IHZtIG9mIHRyYW5zY2x1ZGVkIGNvbnRlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gLSB2LWZvciBzY29wZVxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBbZnJhZ10gLSBsaW5rIGNvbnRleHQgZnJhZ21lbnRcbiAgICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gY29tcG9zaXRlTGlua0ZuICh2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgLy8gY2FjaGUgY2hpbGROb2RlcyBiZWZvcmUgbGlua2luZyBwYXJlbnQsIGZpeCAjNjU3XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBfLnRvQXJyYXkoZWwuY2hpbGROb2RlcylcbiAgICAvLyBsaW5rXG4gICAgdmFyIGRpcnMgPSBsaW5rQW5kQ2FwdHVyZShmdW5jdGlvbiBjb21wb3NpdGVMaW5rQ2FwdHVyZXIgKCkge1xuICAgICAgaWYgKG5vZGVMaW5rRm4pIG5vZGVMaW5rRm4odm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZylcbiAgICAgIGlmIChjaGlsZExpbmtGbikgY2hpbGRMaW5rRm4odm0sIGNoaWxkTm9kZXMsIGhvc3QsIHNjb3BlLCBmcmFnKVxuICAgIH0sIHZtKVxuICAgIHJldHVybiBtYWtlVW5saW5rRm4odm0sIGRpcnMpXG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSBhIGxpbmtlciB0byBhIHZtL2VsZW1lbnQgcGFpciBhbmQgY2FwdHVyZSB0aGVcbiAqIGRpcmVjdGl2ZXMgY3JlYXRlZCBkdXJpbmcgdGhlIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlua2VyXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5mdW5jdGlvbiBsaW5rQW5kQ2FwdHVyZSAobGlua2VyLCB2bSkge1xuICB2YXIgb3JpZ2luYWxEaXJDb3VudCA9IHZtLl9kaXJlY3RpdmVzLmxlbmd0aFxuICBsaW5rZXIoKVxuICB2YXIgZGlycyA9IHZtLl9kaXJlY3RpdmVzLnNsaWNlKG9yaWdpbmFsRGlyQ291bnQpXG4gIGRpcnMuc29ydChkaXJlY3RpdmVDb21wYXJhdG9yKVxuICBmb3IgKHZhciBpID0gMCwgbCA9IGRpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGlyc1tpXS5fYmluZCgpXG4gIH1cbiAgcmV0dXJuIGRpcnNcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgcHJpb3JpdHkgc29ydCBjb21wYXJhdG9yXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKi9cblxuZnVuY3Rpb24gZGlyZWN0aXZlQ29tcGFyYXRvciAoYSwgYikge1xuICBhID0gYS5kZXNjcmlwdG9yLmRlZi5wcmlvcml0eSB8fCBERUZBVUxUX1BSSU9SSVRZXG4gIGIgPSBiLmRlc2NyaXB0b3IuZGVmLnByaW9yaXR5IHx8IERFRkFVTFRfUFJJT1JJVFlcbiAgcmV0dXJuIGEgPiBiID8gLTEgOiBhID09PSBiID8gMCA6IDFcbn1cblxuLyoqXG4gKiBMaW5rZXIgZnVuY3Rpb25zIHJldHVybiBhbiB1bmxpbmsgZnVuY3Rpb24gdGhhdFxuICogdGVhcnNkb3duIGFsbCBkaXJlY3RpdmVzIGluc3RhbmNlcyBnZW5lcmF0ZWQgZHVyaW5nXG4gKiB0aGUgcHJvY2Vzcy5cbiAqXG4gKiBXZSBjcmVhdGUgdW5saW5rIGZ1bmN0aW9ucyB3aXRoIG9ubHkgdGhlIG5lY2Vzc2FyeVxuICogaW5mb3JtYXRpb24gdG8gYXZvaWQgcmV0YWluaW5nIGFkZGl0aW9uYWwgY2xvc3VyZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0FycmF5fSBkaXJzXG4gKiBAcGFyYW0ge1Z1ZX0gW2NvbnRleHRdXG4gKiBAcGFyYW0ge0FycmF5fSBbY29udGV4dERpcnNdXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBtYWtlVW5saW5rRm4gKHZtLCBkaXJzLCBjb250ZXh0LCBjb250ZXh0RGlycykge1xuICByZXR1cm4gZnVuY3Rpb24gdW5saW5rIChkZXN0cm95aW5nKSB7XG4gICAgdGVhcmRvd25EaXJzKHZtLCBkaXJzLCBkZXN0cm95aW5nKVxuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHREaXJzKSB7XG4gICAgICB0ZWFyZG93bkRpcnMoY29udGV4dCwgY29udGV4dERpcnMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGVhcmRvd24gcGFydGlhbCBsaW5rZWQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7QXJyYXl9IGRpcnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVzdHJveWluZ1xuICovXG5cbmZ1bmN0aW9uIHRlYXJkb3duRGlycyAodm0sIGRpcnMsIGRlc3Ryb3lpbmcpIHtcbiAgdmFyIGkgPSBkaXJzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgZGlyc1tpXS5fdGVhcmRvd24oKVxuICAgIGlmICghZGVzdHJveWluZykge1xuICAgICAgdm0uX2RpcmVjdGl2ZXMuJHJlbW92ZShkaXJzW2ldKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGUgbGluayBwcm9wcyBvbiBhbiBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuY29tcGlsZUFuZExpbmtQcm9wcyA9IGZ1bmN0aW9uICh2bSwgZWwsIHByb3BzLCBzY29wZSkge1xuICB2YXIgcHJvcHNMaW5rRm4gPSBjb21waWxlUHJvcHMoZWwsIHByb3BzKVxuICB2YXIgcHJvcERpcnMgPSBsaW5rQW5kQ2FwdHVyZShmdW5jdGlvbiAoKSB7XG4gICAgcHJvcHNMaW5rRm4odm0sIHNjb3BlKVxuICB9LCB2bSlcbiAgcmV0dXJuIG1ha2VVbmxpbmtGbih2bSwgcHJvcERpcnMpXG59XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgcm9vdCBlbGVtZW50IG9mIGFuIGluc3RhbmNlLlxuICpcbiAqIDEuIGF0dHJzIG9uIGNvbnRleHQgY29udGFpbmVyIChjb250ZXh0IHNjb3BlKVxuICogMi4gYXR0cnMgb24gdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSByb290IG5vZGUsIGlmXG4gKiAgICByZXBsYWNlOnRydWUgKGNoaWxkIHNjb3BlKVxuICpcbiAqIElmIHRoaXMgaXMgYSBmcmFnbWVudCBpbnN0YW5jZSwgd2Ugb25seSBuZWVkIHRvIGNvbXBpbGUgMS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dE9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuY29tcGlsZVJvb3QgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMsIGNvbnRleHRPcHRpb25zKSB7XG4gIHZhciBjb250YWluZXJBdHRycyA9IG9wdGlvbnMuX2NvbnRhaW5lckF0dHJzXG4gIHZhciByZXBsYWNlckF0dHJzID0gb3B0aW9ucy5fcmVwbGFjZXJBdHRyc1xuICB2YXIgY29udGV4dExpbmtGbiwgcmVwbGFjZXJMaW5rRm5cblxuICAvLyBvbmx5IG5lZWQgdG8gY29tcGlsZSBvdGhlciBhdHRyaWJ1dGVzIGZvclxuICAvLyBub24tZnJhZ21lbnQgaW5zdGFuY2VzXG4gIGlmIChlbC5ub2RlVHlwZSAhPT0gMTEpIHtcbiAgICAvLyBmb3IgY29tcG9uZW50cywgY29udGFpbmVyIGFuZCByZXBsYWNlciBuZWVkIHRvIGJlXG4gICAgLy8gY29tcGlsZWQgc2VwYXJhdGVseSBhbmQgbGlua2VkIGluIGRpZmZlcmVudCBzY29wZXMuXG4gICAgaWYgKG9wdGlvbnMuX2FzQ29tcG9uZW50KSB7XG4gICAgICAvLyAyLiBjb250YWluZXIgYXR0cmlidXRlc1xuICAgICAgaWYgKGNvbnRhaW5lckF0dHJzICYmIGNvbnRleHRPcHRpb25zKSB7XG4gICAgICAgIGNvbnRleHRMaW5rRm4gPSBjb21waWxlRGlyZWN0aXZlcyhjb250YWluZXJBdHRycywgY29udGV4dE9wdGlvbnMpXG4gICAgICB9XG4gICAgICBpZiAocmVwbGFjZXJBdHRycykge1xuICAgICAgICAvLyAzLiByZXBsYWNlciBhdHRyaWJ1dGVzXG4gICAgICAgIHJlcGxhY2VyTGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMocmVwbGFjZXJBdHRycywgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uLWNvbXBvbmVudCwganVzdCBjb21waWxlIGFzIGEgbm9ybWFsIGVsZW1lbnQuXG4gICAgICByZXBsYWNlckxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKGVsLmF0dHJpYnV0ZXMsIG9wdGlvbnMpXG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29udGFpbmVyQXR0cnMpIHtcbiAgICAvLyB3YXJuIGNvbnRhaW5lciBkaXJlY3RpdmVzIGZvciBmcmFnbWVudCBpbnN0YW5jZXNcbiAgICB2YXIgbmFtZXMgPSBjb250YWluZXJBdHRyc1xuICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAvLyBhbGxvdyB2dWUtbG9hZGVyL3Z1ZWlmeSBzY29wZWQgY3NzIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuIGF0dHIubmFtZS5pbmRleE9mKCdfdi0nKSA8IDAgJiZcbiAgICAgICAgICAvLyBhbGxvdyBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICAhb25SRS50ZXN0KGF0dHIubmFtZSkgJiZcbiAgICAgICAgICAvLyBhbGxvdyBzbG90c1xuICAgICAgICAgIGF0dHIubmFtZSAhPT0gJ3Nsb3QnXG4gICAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICByZXR1cm4gJ1wiJyArIGF0dHIubmFtZSArICdcIidcbiAgICAgIH0pXG4gICAgaWYgKG5hbWVzLmxlbmd0aCkge1xuICAgICAgdmFyIHBsdXJhbCA9IG5hbWVzLmxlbmd0aCA+IDFcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0F0dHJpYnV0ZScgKyAocGx1cmFsID8gJ3MgJyA6ICcgJykgKyBuYW1lcy5qb2luKCcsICcpICtcbiAgICAgICAgKHBsdXJhbCA/ICcgYXJlJyA6ICcgaXMnKSArICcgaWdub3JlZCBvbiBjb21wb25lbnQgJyArXG4gICAgICAgICc8JyArIG9wdGlvbnMuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJz4gYmVjYXVzZSAnICtcbiAgICAgICAgJ3RoZSBjb21wb25lbnQgaXMgYSBmcmFnbWVudCBpbnN0YW5jZTogJyArXG4gICAgICAgICdodHRwOi8vdnVlanMub3JnL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNGcmFnbWVudF9JbnN0YW5jZSdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcm9vdExpbmtGbiAodm0sIGVsLCBzY29wZSkge1xuICAgIC8vIGxpbmsgY29udGV4dCBzY29wZSBkaXJzXG4gICAgdmFyIGNvbnRleHQgPSB2bS5fY29udGV4dFxuICAgIHZhciBjb250ZXh0RGlyc1xuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHRMaW5rRm4pIHtcbiAgICAgIGNvbnRleHREaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZXh0TGlua0ZuKGNvbnRleHQsIGVsLCBudWxsLCBzY29wZSlcbiAgICAgIH0sIGNvbnRleHQpXG4gICAgfVxuXG4gICAgLy8gbGluayBzZWxmXG4gICAgdmFyIHNlbGZEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcGxhY2VyTGlua0ZuKSByZXBsYWNlckxpbmtGbih2bSwgZWwpXG4gICAgfSwgdm0pXG5cbiAgICAvLyByZXR1cm4gdGhlIHVubGluayBmdW5jdGlvbiB0aGF0IHRlYXJzZG93biBjb250ZXh0XG4gICAgLy8gY29udGFpbmVyIGRpcmVjdGl2ZXMuXG4gICAgcmV0dXJuIG1ha2VVbmxpbmtGbih2bSwgc2VsZkRpcnMsIGNvbnRleHQsIGNvbnRleHREaXJzKVxuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIG5vZGUgYW5kIHJldHVybiBhIG5vZGVMaW5rRm4gYmFzZWQgb24gdGhlXG4gKiBub2RlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlTm9kZSAobm9kZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZSA9IG5vZGUubm9kZVR5cGVcbiAgaWYgKHR5cGUgPT09IDEgJiYgbm9kZS50YWdOYW1lICE9PSAnU0NSSVBUJykge1xuICAgIHJldHVybiBjb21waWxlRWxlbWVudChub2RlLCBvcHRpb25zKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IDMgJiYgbm9kZS5kYXRhLnRyaW0oKSkge1xuICAgIHJldHVybiBjb21waWxlVGV4dE5vZGUobm9kZSwgb3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBhbiBlbGVtZW50IGFuZCByZXR1cm4gYSBub2RlTGlua0ZuLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVFbGVtZW50IChlbCwgb3B0aW9ucykge1xuICAvLyBwcmVwcm9jZXNzIHRleHRhcmVhcy5cbiAgLy8gdGV4dGFyZWEgdHJlYXRzIGl0cyB0ZXh0IGNvbnRlbnQgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gIC8vIGp1c3QgYmluZCBpdCBhcyBhbiBhdHRyIGRpcmVjdGl2ZSBmb3IgdmFsdWUuXG4gIGlmIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgdmFyIHRva2VucyA9IHRleHRQYXJzZXIucGFyc2UoZWwudmFsdWUpXG4gICAgaWYgKHRva2Vucykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCc6dmFsdWUnLCB0ZXh0UGFyc2VyLnRva2Vuc1RvRXhwKHRva2VucykpXG4gICAgICBlbC52YWx1ZSA9ICcnXG4gICAgfVxuICB9XG4gIHZhciBsaW5rRm5cbiAgdmFyIGhhc0F0dHJzID0gZWwuaGFzQXR0cmlidXRlcygpXG4gIC8vIGNoZWNrIHRlcm1pbmFsIGRpcmVjdGl2ZXMgKGZvciAmIGlmKVxuICBpZiAoaGFzQXR0cnMpIHtcbiAgICBsaW5rRm4gPSBjaGVja1Rlcm1pbmFsRGlyZWN0aXZlcyhlbCwgb3B0aW9ucylcbiAgfVxuICAvLyBjaGVjayBlbGVtZW50IGRpcmVjdGl2ZXNcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0VsZW1lbnREaXJlY3RpdmVzKGVsLCBvcHRpb25zKVxuICB9XG4gIC8vIGNoZWNrIGNvbXBvbmVudFxuICBpZiAoIWxpbmtGbikge1xuICAgIGxpbmtGbiA9IGNoZWNrQ29tcG9uZW50KGVsLCBvcHRpb25zKVxuICB9XG4gIC8vIG5vcm1hbCBkaXJlY3RpdmVzXG4gIGlmICghbGlua0ZuICYmIGhhc0F0dHJzKSB7XG4gICAgbGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMoZWwuYXR0cmlidXRlcywgb3B0aW9ucylcbiAgfVxuICByZXR1cm4gbGlua0ZuXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRleHROb2RlIGFuZCByZXR1cm4gYSBub2RlTGlua0ZuLlxuICpcbiAqIEBwYXJhbSB7VGV4dE5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSB0ZXh0Tm9kZUxpbmtGblxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVUZXh0Tm9kZSAobm9kZSwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gdGV4dFBhcnNlci5wYXJzZShub2RlLmRhdGEpXG4gIGlmICghdG9rZW5zKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICB2YXIgZWwsIHRva2VuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRva2VuID0gdG9rZW5zW2ldXG4gICAgZWwgPSB0b2tlbi50YWdcbiAgICAgID8gcHJvY2Vzc1RleHRUb2tlbih0b2tlbiwgb3B0aW9ucylcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW4udmFsdWUpXG4gICAgZnJhZy5hcHBlbmRDaGlsZChlbClcbiAgfVxuICByZXR1cm4gbWFrZVRleHROb2RlTGlua0ZuKHRva2VucywgZnJhZywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBQcm9jZXNzIGEgc2luZ2xlIHRleHQgdG9rZW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRva2VuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuXG5mdW5jdGlvbiBwcm9jZXNzVGV4dFRva2VuICh0b2tlbiwgb3B0aW9ucykge1xuICB2YXIgZWxcbiAgaWYgKHRva2VuLm9uZVRpbWUpIHtcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRva2VuLnZhbHVlKVxuICB9IGVsc2Uge1xuICAgIGlmICh0b2tlbi5odG1sKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3YtaHRtbCcpXG4gICAgICBzZXRUb2tlblR5cGUoJ2h0bWwnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRSB3aWxsIGNsZWFuIHVwIGVtcHR5IHRleHROb2RlcyBkdXJpbmdcbiAgICAgIC8vIGZyYWcuY2xvbmVOb2RlKHRydWUpLCBzbyB3ZSBoYXZlIHRvIGdpdmUgaXRcbiAgICAgIC8vIHNvbWV0aGluZyBoZXJlLi4uXG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJylcbiAgICAgIHNldFRva2VuVHlwZSgndGV4dCcpXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldFRva2VuVHlwZSAodHlwZSkge1xuICAgIGlmICh0b2tlbi5kZXNjcmlwdG9yKSByZXR1cm5cbiAgICB2YXIgcGFyc2VkID0gZGlyUGFyc2VyLnBhcnNlKHRva2VuLnZhbHVlKVxuICAgIHRva2VuLmRlc2NyaXB0b3IgPSB7XG4gICAgICBuYW1lOiB0eXBlLFxuICAgICAgZGVmOiBwdWJsaWNEaXJlY3RpdmVzW3R5cGVdLFxuICAgICAgZXhwcmVzc2lvbjogcGFyc2VkLmV4cHJlc3Npb24sXG4gICAgICBmaWx0ZXJzOiBwYXJzZWQuZmlsdGVyc1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxcbn1cblxuLyoqXG4gKiBCdWlsZCBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGEgdGV4dE5vZGUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSB0b2tlbnNcbiAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ1xuICovXG5cbmZ1bmN0aW9uIG1ha2VUZXh0Tm9kZUxpbmtGbiAodG9rZW5zLCBmcmFnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0ZXh0Tm9kZUxpbmtGbiAodm0sIGVsLCBob3N0LCBzY29wZSkge1xuICAgIHZhciBmcmFnQ2xvbmUgPSBmcmFnLmNsb25lTm9kZSh0cnVlKVxuICAgIHZhciBjaGlsZE5vZGVzID0gXy50b0FycmF5KGZyYWdDbG9uZS5jaGlsZE5vZGVzKVxuICAgIHZhciB0b2tlbiwgdmFsdWUsIG5vZGVcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICB2YWx1ZSA9IHRva2VuLnZhbHVlXG4gICAgICBpZiAodG9rZW4udGFnKSB7XG4gICAgICAgIG5vZGUgPSBjaGlsZE5vZGVzW2ldXG4gICAgICAgIGlmICh0b2tlbi5vbmVUaW1lKSB7XG4gICAgICAgICAgdmFsdWUgPSAoc2NvcGUgfHwgdm0pLiRldmFsKHZhbHVlKVxuICAgICAgICAgIGlmICh0b2tlbi5odG1sKSB7XG4gICAgICAgICAgICBfLnJlcGxhY2Uobm9kZSwgdGVtcGxhdGVQYXJzZXIucGFyc2UodmFsdWUsIHRydWUpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bS5fYmluZERpcih0b2tlbi5kZXNjcmlwdG9yLCBub2RlLCBob3N0LCBzY29wZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBfLnJlcGxhY2UoZWwsIGZyYWdDbG9uZSlcbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBub2RlIGxpc3QgYW5kIHJldHVybiBhIGNoaWxkTGlua0ZuLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVMaXN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVOb2RlTGlzdCAobm9kZUxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGxpbmtGbnMgPSBbXVxuICB2YXIgbm9kZUxpbmtGbiwgY2hpbGRMaW5rRm4sIG5vZGVcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2RlTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBub2RlID0gbm9kZUxpc3RbaV1cbiAgICBub2RlTGlua0ZuID0gY29tcGlsZU5vZGUobm9kZSwgb3B0aW9ucylcbiAgICBjaGlsZExpbmtGbiA9XG4gICAgICAhKG5vZGVMaW5rRm4gJiYgbm9kZUxpbmtGbi50ZXJtaW5hbCkgJiZcbiAgICAgIG5vZGUudGFnTmFtZSAhPT0gJ1NDUklQVCcgJiZcbiAgICAgIG5vZGUuaGFzQ2hpbGROb2RlcygpXG4gICAgICAgID8gY29tcGlsZU5vZGVMaXN0KG5vZGUuY2hpbGROb2Rlcywgb3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgbGlua0Zucy5wdXNoKG5vZGVMaW5rRm4sIGNoaWxkTGlua0ZuKVxuICB9XG4gIHJldHVybiBsaW5rRm5zLmxlbmd0aFxuICAgID8gbWFrZUNoaWxkTGlua0ZuKGxpbmtGbnMpXG4gICAgOiBudWxsXG59XG5cbi8qKlxuICogTWFrZSBhIGNoaWxkIGxpbmsgZnVuY3Rpb24gZm9yIGEgbm9kZSdzIGNoaWxkTm9kZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj59IGxpbmtGbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjaGlsZExpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VDaGlsZExpbmtGbiAobGlua0Zucykge1xuICByZXR1cm4gZnVuY3Rpb24gY2hpbGRMaW5rRm4gKHZtLCBub2RlcywgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgICB2YXIgbm9kZSwgbm9kZUxpbmtGbiwgY2hpbGRyZW5MaW5rRm5cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IDAsIGwgPSBsaW5rRm5zLmxlbmd0aDsgaSA8IGw7IG4rKykge1xuICAgICAgbm9kZSA9IG5vZGVzW25dXG4gICAgICBub2RlTGlua0ZuID0gbGlua0Zuc1tpKytdXG4gICAgICBjaGlsZHJlbkxpbmtGbiA9IGxpbmtGbnNbaSsrXVxuICAgICAgLy8gY2FjaGUgY2hpbGROb2RlcyBiZWZvcmUgbGlua2luZyBwYXJlbnQsIGZpeCAjNjU3XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IF8udG9BcnJheShub2RlLmNoaWxkTm9kZXMpXG4gICAgICBpZiAobm9kZUxpbmtGbikge1xuICAgICAgICBub2RlTGlua0ZuKHZtLCBub2RlLCBob3N0LCBzY29wZSwgZnJhZylcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZHJlbkxpbmtGbikge1xuICAgICAgICBjaGlsZHJlbkxpbmtGbih2bSwgY2hpbGROb2RlcywgaG9zdCwgc2NvcGUsIGZyYWcpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGVsZW1lbnQgZGlyZWN0aXZlcyAoY3VzdG9tIGVsZW1lbnRzIHRoYXQgc2hvdWxkXG4gKiBiZSByZXNvdmxlZCBhcyB0ZXJtaW5hbCBkaXJlY3RpdmVzKS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGNoZWNrRWxlbWVudERpcmVjdGl2ZXMgKGVsLCBvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgaWYgKF8uY29tbW9uVGFnUkUudGVzdCh0YWcpKSByZXR1cm5cbiAgdmFyIGRlZiA9IHJlc29sdmVBc3NldChvcHRpb25zLCAnZWxlbWVudERpcmVjdGl2ZXMnLCB0YWcpXG4gIGlmIChkZWYpIHtcbiAgICByZXR1cm4gbWFrZVRlcm1pbmFsTm9kZUxpbmtGbihlbCwgdGFnLCAnJywgb3B0aW9ucywgZGVmKVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBhIGNvbXBvbmVudC4gSWYgeWVzLCByZXR1cm5cbiAqIGEgY29tcG9uZW50IGxpbmsgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudCAoZWwsIG9wdGlvbnMpIHtcbiAgdmFyIGNvbXBvbmVudCA9IF8uY2hlY2tDb21wb25lbnQoZWwsIG9wdGlvbnMpXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICB2YXIgcmVmID0gXy5maW5kUmVmKGVsKVxuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgbmFtZTogJ2NvbXBvbmVudCcsXG4gICAgICByZWY6IHJlZixcbiAgICAgIGV4cHJlc3Npb246IGNvbXBvbmVudC5pZCxcbiAgICAgIGRlZjogaW50ZXJuYWxEaXJlY3RpdmVzLmNvbXBvbmVudCxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBsaXRlcmFsOiAhY29tcG9uZW50LmR5bmFtaWNcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNvbXBvbmVudExpbmtGbiA9IGZ1bmN0aW9uICh2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIF8uZGVmaW5lUmVhY3RpdmUoKHNjb3BlIHx8IHZtKS4kcmVmcywgcmVmLCBudWxsKVxuICAgICAgfVxuICAgICAgdm0uX2JpbmREaXIoZGVzY3JpcHRvciwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKVxuICAgIH1cbiAgICBjb21wb25lbnRMaW5rRm4udGVybWluYWwgPSB0cnVlXG4gICAgcmV0dXJuIGNvbXBvbmVudExpbmtGblxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgYW4gZWxlbWVudCBmb3IgdGVybWluYWwgZGlyZWN0aXZlcyBpbiBmaXhlZCBvcmRlci5cbiAqIElmIGl0IGZpbmRzIG9uZSwgcmV0dXJuIGEgdGVybWluYWwgbGluayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IHRlcm1pbmFsTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gY2hlY2tUZXJtaW5hbERpcmVjdGl2ZXMgKGVsLCBvcHRpb25zKSB7XG4gIC8vIHNraXAgdi1wcmVcbiAgaWYgKF8uYXR0cihlbCwgJ3YtcHJlJykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2tpcFxuICB9XG4gIC8vIHNraXAgdi1lbHNlIGJsb2NrLCBidXQgb25seSBpZiBmb2xsb3dpbmcgdi1pZlxuICBpZiAoZWwuaGFzQXR0cmlidXRlKCd2LWVsc2UnKSkge1xuICAgIHZhciBwcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIGlmIChwcmV2ICYmIHByZXYuaGFzQXR0cmlidXRlKCd2LWlmJykpIHtcbiAgICAgIHJldHVybiBza2lwXG4gICAgfVxuICB9XG4gIHZhciB2YWx1ZSwgZGlyTmFtZVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHRlcm1pbmFsRGlyZWN0aXZlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBkaXJOYW1lID0gdGVybWluYWxEaXJlY3RpdmVzW2ldXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICBpZiAodmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3YtJyArIGRpck5hbWUpKSB7XG4gICAgICByZXR1cm4gbWFrZVRlcm1pbmFsTm9kZUxpbmtGbihlbCwgZGlyTmFtZSwgdmFsdWUsIG9wdGlvbnMpXG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgfVxufVxuXG5mdW5jdGlvbiBza2lwICgpIHt9XG5za2lwLnRlcm1pbmFsID0gdHJ1ZVxuXG4vKipcbiAqIEJ1aWxkIGEgbm9kZSBsaW5rIGZ1bmN0aW9uIGZvciBhIHRlcm1pbmFsIGRpcmVjdGl2ZS5cbiAqIEEgdGVybWluYWwgbGluayBmdW5jdGlvbiB0ZXJtaW5hdGVzIHRoZSBjdXJyZW50XG4gKiBjb21waWxhdGlvbiByZWN1cnNpb24gYW5kIGhhbmRsZXMgY29tcGlsYXRpb24gb2YgdGhlXG4gKiBzdWJ0cmVlIGluIHRoZSBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGRpck5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmXVxuICogQHJldHVybiB7RnVuY3Rpb259IHRlcm1pbmFsTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gbWFrZVRlcm1pbmFsTm9kZUxpbmtGbiAoZWwsIGRpck5hbWUsIHZhbHVlLCBvcHRpb25zLCBkZWYpIHtcbiAgdmFyIHBhcnNlZCA9IGRpclBhcnNlci5wYXJzZSh2YWx1ZSlcbiAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgbmFtZTogZGlyTmFtZSxcbiAgICBleHByZXNzaW9uOiBwYXJzZWQuZXhwcmVzc2lvbixcbiAgICBmaWx0ZXJzOiBwYXJzZWQuZmlsdGVycyxcbiAgICByYXc6IHZhbHVlLFxuICAgIC8vIGVpdGhlciBhbiBlbGVtZW50IGRpcmVjdGl2ZSwgb3IgaWYvZm9yXG4gICAgZGVmOiBkZWYgfHwgcHVibGljRGlyZWN0aXZlc1tkaXJOYW1lXVxuICB9XG4gIC8vIGNoZWNrIHJlZiBmb3Igdi1mb3IgYW5kIHJvdXRlci12aWV3XG4gIGlmIChkaXJOYW1lID09PSAnZm9yJyB8fCBkaXJOYW1lID09PSAncm91dGVyLXZpZXcnKSB7XG4gICAgZGVzY3JpcHRvci5yZWYgPSBfLmZpbmRSZWYoZWwpXG4gIH1cbiAgdmFyIGZuID0gZnVuY3Rpb24gdGVybWluYWxOb2RlTGlua0ZuICh2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgaWYgKGRlc2NyaXB0b3IucmVmKSB7XG4gICAgICBfLmRlZmluZVJlYWN0aXZlKChzY29wZSB8fCB2bSkuJHJlZnMsIGRlc2NyaXB0b3IucmVmLCBudWxsKVxuICAgIH1cbiAgICB2bS5fYmluZERpcihkZXNjcmlwdG9yLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpXG4gIH1cbiAgZm4udGVybWluYWwgPSB0cnVlXG4gIHJldHVybiBmblxufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIGRpcmVjdGl2ZXMgb24gYW4gZWxlbWVudCBhbmQgcmV0dXJuIGEgbGlua2VyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8TmFtZWROb2RlTWFwfSBhdHRyc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVEaXJlY3RpdmVzIChhdHRycywgb3B0aW9ucykge1xuICB2YXIgaSA9IGF0dHJzLmxlbmd0aFxuICB2YXIgZGlycyA9IFtdXG4gIHZhciBhdHRyLCBuYW1lLCB2YWx1ZSwgcmF3TmFtZSwgcmF3VmFsdWUsIGRpck5hbWUsIGFyZywgbW9kaWZpZXJzLCBkaXJEZWYsIHRva2Vuc1xuICB3aGlsZSAoaS0tKSB7XG4gICAgYXR0ciA9IGF0dHJzW2ldXG4gICAgbmFtZSA9IHJhd05hbWUgPSBhdHRyLm5hbWVcbiAgICB2YWx1ZSA9IHJhd1ZhbHVlID0gYXR0ci52YWx1ZVxuICAgIHRva2VucyA9IHRleHRQYXJzZXIucGFyc2UodmFsdWUpXG4gICAgLy8gcmVzZXQgYXJnXG4gICAgYXJnID0gbnVsbFxuICAgIC8vIGNoZWNrIG1vZGlmaWVyc1xuICAgIG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKG5hbWUpXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShtb2RpZmllclJFLCAnJylcblxuICAgIC8vIGF0dHJpYnV0ZSBpbnRlcnBvbGF0aW9uc1xuICAgIGlmICh0b2tlbnMpIHtcbiAgICAgIHZhbHVlID0gdGV4dFBhcnNlci50b2tlbnNUb0V4cCh0b2tlbnMpXG4gICAgICBhcmcgPSBuYW1lXG4gICAgICBwdXNoRGlyKCdiaW5kJywgcHVibGljRGlyZWN0aXZlcy5iaW5kLCB0cnVlKVxuICAgICAgLy8gd2FybiBhZ2FpbnN0IG1peGluZyBtdXN0YWNoZXMgd2l0aCB2LWJpbmRcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnY2xhc3MnICYmIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXR0cnMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgcmV0dXJuIGF0dHIubmFtZSA9PT0gJzpjbGFzcycgfHwgYXR0ci5uYW1lID09PSAndi1iaW5kOmNsYXNzJ1xuICAgICAgICB9KSkge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgICdjbGFzcz1cIicgKyByYXdWYWx1ZSArICdcIjogRG8gbm90IG1peCBtdXN0YWNoZSBpbnRlcnBvbGF0aW9uICcgK1xuICAgICAgICAgICAgJ2FuZCB2LWJpbmQgZm9yIFwiY2xhc3NcIiBvbiB0aGUgc2FtZSBlbGVtZW50LiBVc2Ugb25lIG9yIHRoZSBvdGhlci4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlXG5cbiAgICAvLyBzcGVjaWFsIGF0dHJpYnV0ZTogdHJhbnNpdGlvblxuICAgIGlmICh0cmFuc2l0aW9uUkUudGVzdChuYW1lKSkge1xuICAgICAgbW9kaWZpZXJzLmxpdGVyYWwgPSAhYmluZFJFLnRlc3QobmFtZSlcbiAgICAgIHB1c2hEaXIoJ3RyYW5zaXRpb24nLCBpbnRlcm5hbERpcmVjdGl2ZXMudHJhbnNpdGlvbilcbiAgICB9IGVsc2VcblxuICAgIC8vIGV2ZW50IGhhbmRsZXJzXG4gICAgaWYgKG9uUkUudGVzdChuYW1lKSkge1xuICAgICAgYXJnID0gbmFtZS5yZXBsYWNlKG9uUkUsICcnKVxuICAgICAgcHVzaERpcignb24nLCBwdWJsaWNEaXJlY3RpdmVzLm9uKVxuICAgIH0gZWxzZVxuXG4gICAgLy8gYXR0cmlidXRlIGJpbmRpbmdzXG4gICAgaWYgKGJpbmRSRS50ZXN0KG5hbWUpKSB7XG4gICAgICBkaXJOYW1lID0gbmFtZS5yZXBsYWNlKGJpbmRSRSwgJycpXG4gICAgICBpZiAoZGlyTmFtZSA9PT0gJ3N0eWxlJyB8fCBkaXJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgIHB1c2hEaXIoZGlyTmFtZSwgaW50ZXJuYWxEaXJlY3RpdmVzW2Rpck5hbWVdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJnID0gZGlyTmFtZVxuICAgICAgICBwdXNoRGlyKCdiaW5kJywgcHVibGljRGlyZWN0aXZlcy5iaW5kKVxuICAgICAgfVxuICAgIH0gZWxzZVxuXG4gICAgLy8gbm9ybWFsIGRpcmVjdGl2ZXNcbiAgICBpZiAobmFtZS5pbmRleE9mKCd2LScpID09PSAwKSB7XG4gICAgICAvLyBjaGVjayBhcmdcbiAgICAgIGFyZyA9IChhcmcgPSBuYW1lLm1hdGNoKGFyZ1JFKSkgJiYgYXJnWzFdXG4gICAgICBpZiAoYXJnKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoYXJnUkUsICcnKVxuICAgICAgfVxuICAgICAgLy8gZXh0cmFjdCBkaXJlY3RpdmUgbmFtZVxuICAgICAgZGlyTmFtZSA9IG5hbWUuc2xpY2UoMilcblxuICAgICAgLy8gc2tpcCB2LWVsc2UgKHdoZW4gdXNlZCB3aXRoIHYtc2hvdylcbiAgICAgIGlmIChkaXJOYW1lID09PSAnZWxzZScpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgZGlyRGVmID0gcmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyTmFtZSlcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgXy5hc3NlcnRBc3NldChkaXJEZWYsICdkaXJlY3RpdmUnLCBkaXJOYW1lKVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyRGVmKSB7XG4gICAgICAgIHB1c2hEaXIoZGlyTmFtZSwgZGlyRGVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGEgZGlyZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyTmFtZVxuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gZGVmXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ludGVycF1cbiAgICovXG5cbiAgZnVuY3Rpb24gcHVzaERpciAoZGlyTmFtZSwgZGVmLCBpbnRlcnApIHtcbiAgICB2YXIgcGFyc2VkID0gZGlyUGFyc2VyLnBhcnNlKHZhbHVlKVxuICAgIGRpcnMucHVzaCh7XG4gICAgICBuYW1lOiBkaXJOYW1lLFxuICAgICAgYXR0cjogcmF3TmFtZSxcbiAgICAgIHJhdzogcmF3VmFsdWUsXG4gICAgICBkZWY6IGRlZixcbiAgICAgIGFyZzogYXJnLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICBleHByZXNzaW9uOiBwYXJzZWQuZXhwcmVzc2lvbixcbiAgICAgIGZpbHRlcnM6IHBhcnNlZC5maWx0ZXJzLFxuICAgICAgaW50ZXJwOiBpbnRlcnBcbiAgICB9KVxuICB9XG5cbiAgaWYgKGRpcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1ha2VOb2RlTGlua0ZuKGRpcnMpXG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBtb2RpZmllcnMgZnJvbSBkaXJlY3RpdmUgYXR0cmlidXRlIG5hbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZU1vZGlmaWVycyAobmFtZSkge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgbWF0Y2ggPSBuYW1lLm1hdGNoKG1vZGlmaWVyUkUpXG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBpID0gbWF0Y2gubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcmVzW21hdGNoW2ldLnNsaWNlKDEpXSA9IHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgbGluayBmdW5jdGlvbiBmb3IgYWxsIGRpcmVjdGl2ZXMgb24gYSBzaW5nbGUgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBkaXJlY3RpdmVzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gZGlyZWN0aXZlc0xpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VOb2RlTGlua0ZuIChkaXJlY3RpdmVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBub2RlTGlua0ZuICh2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgLy8gcmV2ZXJzZSBhcHBseSBiZWNhdXNlIGl0J3Mgc29ydGVkIGxvdyB0byBoaWdoXG4gICAgdmFyIGkgPSBkaXJlY3RpdmVzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl9iaW5kRGlyKGRpcmVjdGl2ZXNbaV0sIGVsLCBob3N0LCBzY29wZSwgZnJhZylcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbl8uZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vY29tcGlsZScpKVxuXy5leHRlbmQoZXhwb3J0cywgcmVxdWlyZSgnLi90cmFuc2NsdWRlJykpXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHRlbXBsYXRlUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy90ZW1wbGF0ZScpXG52YXIgc3BlY2lhbENoYXJSRSA9IC9bXlxcd1xcLTpcXC5dL1xuXG4vKipcbiAqIFByb2Nlc3MgYW4gZWxlbWVudCBvciBhIERvY3VtZW50RnJhZ21lbnQgYmFzZWQgb24gYVxuICogaW5zdGFuY2Ugb3B0aW9uIG9iamVjdC4gVGhpcyBhbGxvd3MgdXMgdG8gdHJhbnNjbHVkZVxuICogYSB0ZW1wbGF0ZSBub2RlL2ZyYWdtZW50IGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgY3JlYXRlZCxcbiAqIHNvIHRoZSBwcm9jZXNzZWQgZnJhZ21lbnQgY2FuIHRoZW4gYmUgY2xvbmVkIGFuZCByZXVzZWRcbiAqIGluIHYtZm9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0cy50cmFuc2NsdWRlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIC8vIGV4dHJhY3QgY29udGFpbmVyIGF0dHJpYnV0ZXMgdG8gcGFzcyB0aGVtIGRvd25cbiAgLy8gdG8gY29tcGlsZXIsIGJlY2F1c2UgdGhleSBuZWVkIHRvIGJlIGNvbXBpbGVkIGluXG4gIC8vIHBhcmVudCBzY29wZS4gd2UgYXJlIG11dGF0aW5nIHRoZSBvcHRpb25zIG9iamVjdCBoZXJlXG4gIC8vIGFzc3VtaW5nIHRoZSBzYW1lIG9iamVjdCB3aWxsIGJlIHVzZWQgZm9yIGNvbXBpbGVcbiAgLy8gcmlnaHQgYWZ0ZXIgdGhpcy5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLl9jb250YWluZXJBdHRycyA9IGV4dHJhY3RBdHRycyhlbClcbiAgfVxuICAvLyBmb3IgdGVtcGxhdGUgdGFncywgd2hhdCB3ZSB3YW50IGlzIGl0cyBjb250ZW50IGFzXG4gIC8vIGEgZG9jdW1lbnRGcmFnbWVudCAoZm9yIGZyYWdtZW50IGluc3RhbmNlcylcbiAgaWYgKF8uaXNUZW1wbGF0ZShlbCkpIHtcbiAgICBlbCA9IHRlbXBsYXRlUGFyc2VyLnBhcnNlKGVsKVxuICB9XG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuX2FzQ29tcG9uZW50ICYmICFvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICBvcHRpb25zLnRlbXBsYXRlID0gJzxzbG90Pjwvc2xvdD4nXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICBvcHRpb25zLl9jb250ZW50ID0gXy5leHRyYWN0Q29udGVudChlbClcbiAgICAgIGVsID0gdHJhbnNjbHVkZVRlbXBsYXRlKGVsLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuICBpZiAoZWwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgLy8gYW5jaG9ycyBmb3IgZnJhZ21lbnQgaW5zdGFuY2VcbiAgICAvLyBwYXNzaW5nIGluIGBwZXJzaXN0OiB0cnVlYCB0byBhdm9pZCB0aGVtIGJlaW5nXG4gICAgLy8gZGlzY2FyZGVkIGJ5IElFIGR1cmluZyB0ZW1wbGF0ZSBjbG9uaW5nXG4gICAgXy5wcmVwZW5kKF8uY3JlYXRlQW5jaG9yKCd2LXN0YXJ0JywgdHJ1ZSksIGVsKVxuICAgIGVsLmFwcGVuZENoaWxkKF8uY3JlYXRlQW5jaG9yKCd2LWVuZCcsIHRydWUpKVxuICB9XG4gIHJldHVybiBlbFxufVxuXG4vKipcbiAqIFByb2Nlc3MgdGhlIHRlbXBsYXRlIG9wdGlvbi5cbiAqIElmIHRoZSByZXBsYWNlIG9wdGlvbiBpcyB0cnVlIHRoaXMgd2lsbCBzd2FwIHRoZSAkZWwuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2NsdWRlVGVtcGxhdGUgKGVsLCBvcHRpb25zKSB7XG4gIHZhciB0ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGVcbiAgdmFyIGZyYWcgPSB0ZW1wbGF0ZVBhcnNlci5wYXJzZSh0ZW1wbGF0ZSwgdHJ1ZSlcbiAgaWYgKGZyYWcpIHtcbiAgICB2YXIgcmVwbGFjZXIgPSBmcmFnLmZpcnN0Q2hpbGRcbiAgICB2YXIgdGFnID0gcmVwbGFjZXIudGFnTmFtZSAmJiByZXBsYWNlci50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBpZiAob3B0aW9ucy5yZXBsYWNlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgICAnWW91IGFyZSBtb3VudGluZyBhbiBpbnN0YW5jZSB3aXRoIGEgdGVtcGxhdGUgdG8gJyArXG4gICAgICAgICAgJzxib2R5Pi4gVGhpcyB3aWxsIHJlcGxhY2UgPGJvZHk+IGVudGlyZWx5LiBZb3UgJyArXG4gICAgICAgICAgJ3Nob3VsZCBwcm9iYWJseSB1c2UgYHJlcGxhY2U6IGZhbHNlYCBoZXJlLidcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgLy8gdGhlcmUgYXJlIG1hbnkgY2FzZXMgd2hlcmUgdGhlIGluc3RhbmNlIG11c3RcbiAgICAgIC8vIGJlY29tZSBhIGZyYWdtZW50IGluc3RhbmNlOiBiYXNpY2FsbHkgYW55dGhpbmcgdGhhdFxuICAgICAgLy8gY2FuIGNyZWF0ZSBtb3JlIHRoYW4gMSByb290IG5vZGVzLlxuICAgICAgaWYgKFxuICAgICAgICAvLyBtdWx0aS1jaGlsZHJlbiB0ZW1wbGF0ZVxuICAgICAgICBmcmFnLmNoaWxkTm9kZXMubGVuZ3RoID4gMSB8fFxuICAgICAgICAvLyBub24tZWxlbWVudCB0ZW1wbGF0ZVxuICAgICAgICByZXBsYWNlci5ub2RlVHlwZSAhPT0gMSB8fFxuICAgICAgICAvLyBzaW5nbGUgbmVzdGVkIGNvbXBvbmVudFxuICAgICAgICB0YWcgPT09ICdjb21wb25lbnQnIHx8XG4gICAgICAgIF8ucmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSB8fFxuICAgICAgICByZXBsYWNlci5oYXNBdHRyaWJ1dGUoJ2lzJykgfHxcbiAgICAgICAgcmVwbGFjZXIuaGFzQXR0cmlidXRlKCc6aXMnKSB8fFxuICAgICAgICByZXBsYWNlci5oYXNBdHRyaWJ1dGUoJ3YtYmluZDppcycpIHx8XG4gICAgICAgIC8vIGVsZW1lbnQgZGlyZWN0aXZlXG4gICAgICAgIF8ucmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdlbGVtZW50RGlyZWN0aXZlcycsIHRhZykgfHxcbiAgICAgICAgLy8gZm9yIGJsb2NrXG4gICAgICAgIHJlcGxhY2VyLmhhc0F0dHJpYnV0ZSgndi1mb3InKSB8fFxuICAgICAgICAvLyBpZiBibG9ja1xuICAgICAgICByZXBsYWNlci5oYXNBdHRyaWJ1dGUoJ3YtaWYnKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmcmFnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLl9yZXBsYWNlckF0dHJzID0gZXh0cmFjdEF0dHJzKHJlcGxhY2VyKVxuICAgICAgICBtZXJnZUF0dHJzKGVsLCByZXBsYWNlcilcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VyXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmFwcGVuZENoaWxkKGZyYWcpXG4gICAgICByZXR1cm4gZWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnSW52YWxpZCB0ZW1wbGF0ZSBvcHRpb246ICcgKyB0ZW1wbGF0ZVxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBleHRyYWN0IGEgY29tcG9uZW50IGNvbnRhaW5lcidzIGF0dHJpYnV0ZXNcbiAqIGludG8gYSBwbGFpbiBvYmplY3QgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gZXh0cmFjdEF0dHJzIChlbCkge1xuICBpZiAoZWwubm9kZVR5cGUgPT09IDEgJiYgZWwuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgcmV0dXJuIF8udG9BcnJheShlbC5hdHRyaWJ1dGVzKVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdHdvIGVsZW1lbnRzLCBhbmQgbWFrZSBzdXJlXG4gKiB0aGUgY2xhc3MgbmFtZXMgYXJlIG1lcmdlZCBwcm9wZXJseS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZyb21cbiAqIEBwYXJhbSB7RWxlbWVudH0gdG9cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZUF0dHJzIChmcm9tLCB0bykge1xuICB2YXIgYXR0cnMgPSBmcm9tLmF0dHJpYnV0ZXNcbiAgdmFyIGkgPSBhdHRycy5sZW5ndGhcbiAgdmFyIG5hbWUsIHZhbHVlXG4gIHdoaWxlIChpLS0pIHtcbiAgICBuYW1lID0gYXR0cnNbaV0ubmFtZVxuICAgIHZhbHVlID0gYXR0cnNbaV0udmFsdWVcbiAgICBpZiAoIXRvLmhhc0F0dHJpYnV0ZShuYW1lKSAmJiAhc3BlY2lhbENoYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgICB0by5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICB2YWx1ZSA9IHRvLmdldEF0dHJpYnV0ZShuYW1lKSArICcgJyArIHZhbHVlXG4gICAgICB0by5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogV2hldGhlciB0byBwcmludCBkZWJ1ZyBtZXNzYWdlcy5cbiAgICogQWxzbyBlbmFibGVzIHN0YWNrIHRyYWNlIGZvciB3YXJuaW5ncy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIGRlYnVnOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gdXNlIGFzeW5jIHJlbmRlcmluZy5cbiAgICovXG5cbiAgYXN5bmM6IHRydWUsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gd2FybiBhZ2FpbnN0IGVycm9ycyBjYXVnaHQgd2hlbiBldmFsdWF0aW5nXG4gICAqIGV4cHJlc3Npb25zLlxuICAgKi9cblxuICB3YXJuRXhwcmVzc2lvbkVycm9yczogdHJ1ZSxcblxuICAvKipcbiAgICogSW50ZXJuYWwgZmxhZyB0byBpbmRpY2F0ZSB0aGUgZGVsaW1pdGVycyBoYXZlIGJlZW5cbiAgICogY2hhbmdlZC5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIF9kZWxpbWl0ZXJzQ2hhbmdlZDogdHJ1ZSxcblxuICAvKipcbiAgICogTGlzdCBvZiBhc3NldCB0eXBlcyB0aGF0IGEgY29tcG9uZW50IGNhbiBvd24uXG4gICAqXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG5cbiAgX2Fzc2V0VHlwZXM6IFtcbiAgICAnY29tcG9uZW50JyxcbiAgICAnZGlyZWN0aXZlJyxcbiAgICAnZWxlbWVudERpcmVjdGl2ZScsXG4gICAgJ2ZpbHRlcicsXG4gICAgJ3RyYW5zaXRpb24nLFxuICAgICdwYXJ0aWFsJ1xuICBdLFxuXG4gIC8qKlxuICAgKiBwcm9wIGJpbmRpbmcgbW9kZXNcbiAgICovXG5cbiAgX3Byb3BCaW5kaW5nTW9kZXM6IHtcbiAgICBPTkVfV0FZOiAwLFxuICAgIFRXT19XQVk6IDEsXG4gICAgT05FX1RJTUU6IDJcbiAgfSxcblxuICAvKipcbiAgICogTWF4IGNpcmN1bGFyIHVwZGF0ZXMgYWxsb3dlZCBpbiBhIGJhdGNoZXIgZmx1c2ggY3ljbGUuXG4gICAqL1xuXG4gIF9tYXhVcGRhdGVDb3VudDogMTAwXG5cbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0aW9uIGRlbGltaXRlcnMuIENoYW5naW5nIHRoZXNlIHdvdWxkIHRyaWdnZXJcbiAqIHRoZSB0ZXh0IHBhcnNlciB0byByZS1jb21waWxlIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zLlxuICpcbiAqIEB0eXBlIHtBcnJheTxTdHJpbmc+fVxuICovXG5cbnZhciBkZWxpbWl0ZXJzID0gWyd7eycsICd9fSddXG52YXIgdW5zYWZlRGVsaW1pdGVycyA9IFsne3t7JywgJ319fSddXG52YXIgdGV4dFBhcnNlciA9IHJlcXVpcmUoJy4vcGFyc2Vycy90ZXh0JylcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAnZGVsaW1pdGVycycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlbGltaXRlcnNcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgZGVsaW1pdGVycyA9IHZhbFxuICAgIHRleHRQYXJzZXIuY29tcGlsZVJlZ2V4KClcbiAgfVxufSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAndW5zYWZlRGVsaW1pdGVycycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVuc2FmZURlbGltaXRlcnNcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgdW5zYWZlRGVsaW1pdGVycyA9IHZhbFxuICAgIHRleHRQYXJzZXIuY29tcGlsZVJlZ2V4KClcbiAgfVxufSlcbiIsInZhciBfID0gcmVxdWlyZSgnLi91dGlsJylcbnZhciBXYXRjaGVyID0gcmVxdWlyZSgnLi93YXRjaGVyJylcbnZhciBleHBQYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcnMvZXhwcmVzc2lvbicpXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgbGlua3MgYSBET00gZWxlbWVudCB3aXRoIGEgcGllY2Ugb2YgZGF0YSxcbiAqIHdoaWNoIGlzIHRoZSByZXN1bHQgb2YgZXZhbHVhdGluZyBhbiBleHByZXNzaW9uLlxuICogSXQgcmVnaXN0ZXJzIGEgd2F0Y2hlciB3aXRoIHRoZSBleHByZXNzaW9uIGFuZCBjYWxsc1xuICogdGhlIERPTSB1cGRhdGUgZnVuY3Rpb24gd2hlbiBhIGNoYW5nZSBpcyB0cmlnZ2VyZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IGRlc2NyaXB0b3JcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IG5hbWVcbiAqICAgICAgICAgICAgICAgICAtIHtPYmplY3R9IGRlZlxuICogICAgICAgICAgICAgICAgIC0ge1N0cmluZ30gZXhwcmVzc2lvblxuICogICAgICAgICAgICAgICAgIC0ge0FycmF5PE9iamVjdD59IFtmaWx0ZXJzXVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxpdGVyYWxcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IGF0dHJcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IHJhd1xuICogQHBhcmFtIHtPYmplY3R9IGRlZiAtIGRpcmVjdGl2ZSBkZWZpbml0aW9uIG9iamVjdFxuICogQHBhcmFtIHtWdWV9IFtob3N0XSAtIHRyYW5zY2x1c2lvbiBob3N0IGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gLSB2LWZvciBzY29wZVxuICogQHBhcmFtIHtGcmFnbWVudH0gW2ZyYWddIC0gb3duZXIgZnJhZ21lbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmZ1bmN0aW9uIERpcmVjdGl2ZSAoZGVzY3JpcHRvciwgdm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICB0aGlzLnZtID0gdm1cbiAgdGhpcy5lbCA9IGVsXG4gIC8vIGNvcHkgZGVzY3JpcHRvciBwcm9wZXJ0aWVzXG4gIHRoaXMuZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JcbiAgdGhpcy5uYW1lID0gZGVzY3JpcHRvci5uYW1lXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGRlc2NyaXB0b3IuZXhwcmVzc2lvblxuICB0aGlzLmFyZyA9IGRlc2NyaXB0b3IuYXJnXG4gIHRoaXMubW9kaWZpZXJzID0gZGVzY3JpcHRvci5tb2RpZmllcnNcbiAgdGhpcy5maWx0ZXJzID0gZGVzY3JpcHRvci5maWx0ZXJzXG4gIHRoaXMubGl0ZXJhbCA9IHRoaXMubW9kaWZpZXJzICYmIHRoaXMubW9kaWZpZXJzLmxpdGVyYWxcbiAgLy8gcHJpdmF0ZVxuICB0aGlzLl9sb2NrZWQgPSBmYWxzZVxuICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gIHRoaXMuX2xpc3RlbmVycyA9IG51bGxcbiAgLy8gbGluayBjb250ZXh0XG4gIHRoaXMuX2hvc3QgPSBob3N0XG4gIHRoaXMuX3Njb3BlID0gc2NvcGVcbiAgdGhpcy5fZnJhZyA9IGZyYWdcbiAgLy8gc3RvcmUgZGlyZWN0aXZlcyBvbiBub2RlIGluIGRldiBtb2RlXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuZWwpIHtcbiAgICB0aGlzLmVsLl92dWVfZGlyZWN0aXZlcyA9IHRoaXMuZWwuX3Z1ZV9kaXJlY3RpdmVzIHx8IFtdXG4gICAgdGhpcy5lbC5fdnVlX2RpcmVjdGl2ZXMucHVzaCh0aGlzKVxuICB9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZGlyZWN0aXZlLCBtaXhpbiBkZWZpbml0aW9uIHByb3BlcnRpZXMsXG4gKiBzZXR1cCB0aGUgd2F0Y2hlciwgY2FsbCBkZWZpbml0aW9uIGJpbmQoKSBhbmQgdXBkYXRlKClcbiAqIGlmIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZlxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuYW1lID0gdGhpcy5uYW1lXG4gIHZhciBkZXNjcmlwdG9yID0gdGhpcy5kZXNjcmlwdG9yXG5cbiAgLy8gcmVtb3ZlIGF0dHJpYnV0ZVxuICBpZiAoXG4gICAgKG5hbWUgIT09ICdjbG9haycgfHwgdGhpcy52bS5faXNDb21waWxlZCkgJiZcbiAgICB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlXG4gICkge1xuICAgIHZhciBhdHRyID0gZGVzY3JpcHRvci5hdHRyIHx8ICgndi0nICsgbmFtZSlcbiAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKVxuICB9XG5cbiAgLy8gY29weSBkZWYgcHJvcGVydGllc1xuICB2YXIgZGVmID0gZGVzY3JpcHRvci5kZWZcbiAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLnVwZGF0ZSA9IGRlZlxuICB9IGVsc2Uge1xuICAgIF8uZXh0ZW5kKHRoaXMsIGRlZilcbiAgfVxuXG4gIC8vIHNldHVwIGRpcmVjdGl2ZSBwYXJhbXNcbiAgdGhpcy5fc2V0dXBQYXJhbXMoKVxuXG4gIC8vIGluaXRpYWwgYmluZFxuICBpZiAodGhpcy5iaW5kKSB7XG4gICAgdGhpcy5iaW5kKClcbiAgfVxuXG4gIGlmICh0aGlzLmxpdGVyYWwpIHtcbiAgICB0aGlzLnVwZGF0ZSAmJiB0aGlzLnVwZGF0ZShkZXNjcmlwdG9yLnJhdylcbiAgfSBlbHNlIGlmIChcbiAgICAodGhpcy5leHByZXNzaW9uIHx8IHRoaXMubW9kaWZpZXJzKSAmJlxuICAgICh0aGlzLnVwZGF0ZSB8fCB0aGlzLnR3b1dheSkgJiZcbiAgICAhdGhpcy5fY2hlY2tTdGF0ZW1lbnQoKVxuICApIHtcbiAgICAvLyB3cmFwcGVkIHVwZGF0ZXIgZm9yIGNvbnRleHRcbiAgICB2YXIgZGlyID0gdGhpc1xuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlID0gZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGlmICghZGlyLl9sb2NrZWQpIHtcbiAgICAgICAgICBkaXIudXBkYXRlKHZhbCwgb2xkVmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IG5vb3BcbiAgICB9XG4gICAgdmFyIHByZVByb2Nlc3MgPSB0aGlzLl9wcmVQcm9jZXNzXG4gICAgICA/IF8uYmluZCh0aGlzLl9wcmVQcm9jZXNzLCB0aGlzKVxuICAgICAgOiBudWxsXG4gICAgdmFyIHBvc3RQcm9jZXNzID0gdGhpcy5fcG9zdFByb2Nlc3NcbiAgICAgID8gXy5iaW5kKHRoaXMuX3Bvc3RQcm9jZXNzLCB0aGlzKVxuICAgICAgOiBudWxsXG4gICAgdmFyIHdhdGNoZXIgPSB0aGlzLl93YXRjaGVyID0gbmV3IFdhdGNoZXIoXG4gICAgICB0aGlzLnZtLFxuICAgICAgdGhpcy5leHByZXNzaW9uLFxuICAgICAgdGhpcy5fdXBkYXRlLCAvLyBjYWxsYmFja1xuICAgICAge1xuICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICAgIHR3b1dheTogdGhpcy50d29XYXksXG4gICAgICAgIGRlZXA6IHRoaXMuZGVlcCxcbiAgICAgICAgcHJlUHJvY2VzczogcHJlUHJvY2VzcyxcbiAgICAgICAgcG9zdFByb2Nlc3M6IHBvc3RQcm9jZXNzLFxuICAgICAgICBzY29wZTogdGhpcy5fc2NvcGVcbiAgICAgIH1cbiAgICApXG4gICAgLy8gdi1tb2RlbCB3aXRoIGluaXRhbCBpbmxpbmUgdmFsdWUgbmVlZCB0byBzeW5jIGJhY2sgdG9cbiAgICAvLyBtb2RlbCBpbnN0ZWFkIG9mIHVwZGF0ZSB0byBET00gb24gaW5pdC4gVGhleSB3b3VsZFxuICAgIC8vIHNldCB0aGUgYWZ0ZXJCaW5kIGhvb2sgdG8gaW5kaWNhdGUgdGhhdC5cbiAgICBpZiAodGhpcy5hZnRlckJpbmQpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kKClcbiAgICB9IGVsc2UgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZSh3YXRjaGVyLnZhbHVlKVxuICAgIH1cbiAgfVxuICB0aGlzLl9ib3VuZCA9IHRydWVcbn1cblxuLyoqXG4gKiBTZXR1cCBhbGwgcGFyYW0gYXR0cmlidXRlcywgZS5nLiB0cmFjay1ieSxcbiAqIHRyYW5zaXRpb24tbW9kZSwgZXRjLi4uXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5fc2V0dXBQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5wYXJhbXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXNcbiAgLy8gc3dhcCB0aGUgcGFyYW1zIGFycmF5IHdpdGggYSBmcmVzaCBvYmplY3QuXG4gIHRoaXMucGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgaSA9IHBhcmFtcy5sZW5ndGhcbiAgdmFyIGtleSwgdmFsLCBtYXBwZWRLZXlcbiAgd2hpbGUgKGktLSkge1xuICAgIGtleSA9IHBhcmFtc1tpXVxuICAgIG1hcHBlZEtleSA9IF8uY2FtZWxpemUoa2V5KVxuICAgIHZhbCA9IF8uZ2V0QmluZEF0dHIodGhpcy5lbCwga2V5KVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgLy8gZHluYW1pY1xuICAgICAgdGhpcy5fc2V0dXBQYXJhbVdhdGNoZXIobWFwcGVkS2V5LCB2YWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN0YXRpY1xuICAgICAgdmFsID0gXy5hdHRyKHRoaXMuZWwsIGtleSlcbiAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBhcmFtc1ttYXBwZWRLZXldID0gdmFsID09PSAnJyA/IHRydWUgOiB2YWxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXR1cCBhIHdhdGNoZXIgZm9yIGEgZHluYW1pYyBwYXJhbS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwcmVzc2lvblxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX3NldHVwUGFyYW1XYXRjaGVyID0gZnVuY3Rpb24gKGtleSwgZXhwcmVzc2lvbikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gIHZhciB1bndhdGNoID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiR3YXRjaChleHByZXNzaW9uLCBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcbiAgICBzZWxmLnBhcmFtc1trZXldID0gdmFsXG4gICAgLy8gc2luY2Ugd2UgYXJlIGluIGltbWVkaWF0ZSBtb2RlLFxuICAgIC8vIG9ubHkgY2FsbCB0aGUgcGFyYW0gY2hhbmdlIGNhbGxiYWNrcyBpZiB0aGlzIGlzIG5vdCB0aGUgZmlyc3QgdXBkYXRlLlxuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHZhciBjYiA9IHNlbGYucGFyYW1XYXRjaGVycyAmJiBzZWxmLnBhcmFtV2F0Y2hlcnNba2V5XVxuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiLmNhbGwoc2VsZiwgdmFsLCBvbGRWYWwpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxlZCA9IHRydWVcbiAgICB9XG4gIH0sIHtcbiAgICBpbW1lZGlhdGU6IHRydWVcbiAgfSlcbiAgOyh0aGlzLl9wYXJhbVVud2F0Y2hGbnMgfHwgKHRoaXMuX3BhcmFtVW53YXRjaEZucyA9IFtdKSkucHVzaCh1bndhdGNoKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBkaXJlY3RpdmUgaXMgYSBmdW5jdGlvbiBjYWxsZXJcbiAqIGFuZCBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIGNhbGxhYmxlIG9uZS4gSWYgYm90aCB0cnVlLFxuICogd2Ugd3JhcCB1cCB0aGUgZXhwcmVzc2lvbiBhbmQgdXNlIGl0IGFzIHRoZSBldmVudFxuICogaGFuZGxlci5cbiAqXG4gKiBlLmcuIG9uLWNsaWNrPVwiYSsrXCJcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX2NoZWNrU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvblxuICBpZiAoXG4gICAgZXhwcmVzc2lvbiAmJiB0aGlzLmFjY2VwdFN0YXRlbWVudCAmJlxuICAgICFleHBQYXJzZXIuaXNTaW1wbGVQYXRoKGV4cHJlc3Npb24pXG4gICkge1xuICAgIHZhciBmbiA9IGV4cFBhcnNlci5wYXJzZShleHByZXNzaW9uKS5nZXRcbiAgICB2YXIgc2NvcGUgPSB0aGlzLl9zY29wZSB8fCB0aGlzLnZtXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5jYWxsKHNjb3BlLCBzY29wZSlcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycykge1xuICAgICAgaGFuZGxlciA9IHNjb3BlLl9hcHBseUZpbHRlcnMoaGFuZGxlciwgbnVsbCwgdGhpcy5maWx0ZXJzKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShoYW5kbGVyKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgd2l0aCB0aGUgc2V0dGVyLlxuICogVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGluIHR3by13YXkgZGlyZWN0aXZlc1xuICogZS5nLiB2LW1vZGVsLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwdWJsaWNcbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy50d29XYXkpIHtcbiAgICB0aGlzLl93aXRoTG9jayhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl93YXRjaGVyLnNldCh2YWx1ZSlcbiAgICB9KVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBfLndhcm4oXG4gICAgICAnRGlyZWN0aXZlLnNldCgpIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIHR3b1dheScgK1xuICAgICAgJ2RpcmVjdGl2ZXMuJ1xuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIEV4ZWN1dGUgYSBmdW5jdGlvbiB3aGlsZSBwcmV2ZW50aW5nIHRoYXQgZnVuY3Rpb24gZnJvbVxuICogdHJpZ2dlcmluZyB1cGRhdGVzIG9uIHRoaXMgZGlyZWN0aXZlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5fd2l0aExvY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNlbGYuX2xvY2tlZCA9IHRydWVcbiAgZm4uY2FsbChzZWxmKVxuICBfLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9sb2NrZWQgPSBmYWxzZVxuICB9KVxufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGF0dGFjaGVzIGEgRE9NIGV2ZW50IGxpc3RlbmVyXG4gKiB0byB0aGUgZGlyZWN0aXZlIGVsZW1lbnQgYW5kIGF1dG9tZXRpY2FsbHkgdGVhcnMgaXQgZG93blxuICogZHVyaW5nIHVuYmluZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyKSB7XG4gIF8ub24odGhpcy5lbCwgZXZlbnQsIGhhbmRsZXIpXG4gIDsodGhpcy5fbGlzdGVuZXJzIHx8ICh0aGlzLl9saXN0ZW5lcnMgPSBbXSkpXG4gICAgLnB1c2goW2V2ZW50LCBoYW5kbGVyXSlcbn1cblxuLyoqXG4gKiBUZWFyZG93biB0aGUgd2F0Y2hlciBhbmQgY2FsbCB1bmJpbmQuXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5fdGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9ib3VuZCkge1xuICAgIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgICBpZiAodGhpcy51bmJpbmQpIHtcbiAgICAgIHRoaXMudW5iaW5kKClcbiAgICB9XG4gICAgaWYgKHRoaXMuX3dhdGNoZXIpIHtcbiAgICAgIHRoaXMuX3dhdGNoZXIudGVhcmRvd24oKVxuICAgIH1cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gICAgdmFyIGlcbiAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICBpID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBfLm9mZih0aGlzLmVsLCBsaXN0ZW5lcnNbaV1bMF0sIGxpc3RlbmVyc1tpXVsxXSlcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHVud2F0Y2hGbnMgPSB0aGlzLl9wYXJhbVVud2F0Y2hGbnNcbiAgICBpZiAodW53YXRjaEZucykge1xuICAgICAgaSA9IHVud2F0Y2hGbnMubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVud2F0Y2hGbnNbaV0oKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLmVsKSB7XG4gICAgICB0aGlzLmVsLl92dWVfZGlyZWN0aXZlcy4kcmVtb3ZlKHRoaXMpXG4gICAgfVxuICAgIHRoaXMudm0gPSB0aGlzLmVsID0gdGhpcy5fd2F0Y2hlciA9IHRoaXMuX2xpc3RlbmVycyA9IG51bGxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGl2ZVxuIiwiZXhwb3J0cy5zbG90ID0gcmVxdWlyZSgnLi9zbG90JylcbmV4cG9ydHMucGFydGlhbCA9IHJlcXVpcmUoJy4vcGFydGlhbCcpXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIHZJZiA9IHJlcXVpcmUoJy4uL3B1YmxpYy9pZicpXG52YXIgRnJhZ21lbnRGYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZnJhZ21lbnQvZmFjdG9yeScpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiAxNzUwLFxuXG4gIHBhcmFtczogWyduYW1lJ10sXG5cbiAgLy8gd2F0Y2ggY2hhbmdlcyB0byBuYW1lIGZvciBkeW5hbWljIHBhcnRpYWxzXG4gIHBhcmFtV2F0Y2hlcnM6IHtcbiAgICBuYW1lOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZJZi5yZW1vdmUuY2FsbCh0aGlzKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hbmNob3IgPSBfLmNyZWF0ZUFuY2hvcigndi1wYXJ0aWFsJylcbiAgICBfLnJlcGxhY2UodGhpcy5lbCwgdGhpcy5hbmNob3IpXG4gICAgdGhpcy5pbnNlcnQodGhpcy5wYXJhbXMubmFtZSlcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBwYXJ0aWFsID0gXy5yZXNvbHZlQXNzZXQodGhpcy52bS4kb3B0aW9ucywgJ3BhcnRpYWxzJywgaWQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF8uYXNzZXJ0QXNzZXQocGFydGlhbCwgJ3BhcnRpYWwnLCBpZClcbiAgICB9XG4gICAgaWYgKHBhcnRpYWwpIHtcbiAgICAgIHRoaXMuZmFjdG9yeSA9IG5ldyBGcmFnbWVudEZhY3RvcnkodGhpcy52bSwgcGFydGlhbClcbiAgICAgIHZJZi5pbnNlcnQuY2FsbCh0aGlzKVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5mcmFnKSB7XG4gICAgICB0aGlzLmZyYWcuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIHRlbXBsYXRlUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vcGFyc2Vycy90ZW1wbGF0ZScpXG5cbi8vIFRoaXMgaXMgdGhlIGVsZW1lbnREaXJlY3RpdmUgdGhhdCBoYW5kbGVzIDxjb250ZW50PlxuLy8gdHJhbnNjbHVzaW9ucy4gSXQgcmVsaWVzIG9uIHRoZSByYXcgY29udGVudCBvZiBhblxuLy8gaW5zdGFuY2UgYmVpbmcgc3RvcmVkIGFzIGAkb3B0aW9ucy5fY29udGVudGAgZHVyaW5nXG4vLyB0aGUgdHJhbnNjbHVkZSBwaGFzZS5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJpb3JpdHk6IDE3NTAsXG5cbiAgcGFyYW1zOiBbJ25hbWUnXSxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhvc3QgPSB0aGlzLnZtXG4gICAgdmFyIHJhdyA9IGhvc3QuJG9wdGlvbnMuX2NvbnRlbnRcbiAgICB2YXIgY29udGVudFxuICAgIGlmICghcmF3KSB7XG4gICAgICB0aGlzLmZhbGxiYWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgY29udGV4dCA9IGhvc3QuX2NvbnRleHRcbiAgICB2YXIgc2xvdE5hbWUgPSB0aGlzLnBhcmFtcy5uYW1lXG4gICAgaWYgKCFzbG90TmFtZSkge1xuICAgICAgLy8gRGVmYXVsdCBjb250ZW50XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBjb21waWxlRGVmYXVsdENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuY29tcGlsZShcbiAgICAgICAgICBleHRyYWN0RnJhZ21lbnQocmF3LmNoaWxkTm9kZXMsIHJhdywgdHJ1ZSksXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBob3N0XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICghaG9zdC5faXNDb21waWxlZCkge1xuICAgICAgICAvLyBkZWZlciB1bnRpbCB0aGUgZW5kIG9mIGluc3RhbmNlIGNvbXBpbGF0aW9uLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBkZWZhdWx0IG91dGxldCBtdXN0IHdhaXQgdW50aWwgYWxsXG4gICAgICAgIC8vIG90aGVyIHBvc3NpYmxlIG91dGxldHMgd2l0aCBzZWxlY3RvcnMgaGF2ZSBwaWNrZWRcbiAgICAgICAgLy8gb3V0IHRoZWlyIGNvbnRlbnRzLlxuICAgICAgICBob3N0LiRvbmNlKCdob29rOmNvbXBpbGVkJywgY29tcGlsZURlZmF1bHRDb250ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGlsZURlZmF1bHRDb250ZW50KClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNlbGVjdG9yID0gJ1tzbG90PVwiJyArIHNsb3ROYW1lICsgJ1wiXSdcbiAgICAgIHZhciBub2RlcyA9IHJhdy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBjb250ZW50ID0gZXh0cmFjdEZyYWdtZW50KG5vZGVzLCByYXcpXG4gICAgICAgIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgIHRoaXMuY29tcGlsZShjb250ZW50LCBjb250ZXh0LCBob3N0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmFsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmFsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbXBpbGUoXy5leHRyYWN0Q29udGVudCh0aGlzLmVsLCB0cnVlKSwgdGhpcy52bSlcbiAgfSxcblxuICBjb21waWxlOiBmdW5jdGlvbiAoY29udGVudCwgY29udGV4dCwgaG9zdCkge1xuICAgIGlmIChjb250ZW50ICYmIGNvbnRleHQpIHtcbiAgICAgIHZhciBzY29wZSA9IGhvc3RcbiAgICAgICAgPyBob3N0Ll9zY29wZVxuICAgICAgICA6IHRoaXMuX3Njb3BlXG4gICAgICB0aGlzLnVubGluayA9IGNvbnRleHQuJGNvbXBpbGUoXG4gICAgICAgIGNvbnRlbnQsIGhvc3QsIHNjb3BlLCB0aGlzLl9mcmFnXG4gICAgICApXG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBfLnJlcGxhY2UodGhpcy5lbCwgY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgXy5yZW1vdmUodGhpcy5lbClcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudW5saW5rKSB7XG4gICAgICB0aGlzLnVubGluaygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCBxdWFsaWZpZWQgY29udGVudCBub2RlcyBmcm9tIGEgbm9kZSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtCb29sZWFufSBtYWluXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RGcmFnbWVudCAobm9kZXMsIHBhcmVudCwgbWFpbikge1xuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV1cbiAgICAvLyBpZiB0aGlzIGlzIHRoZSBtYWluIG91dGxldCwgd2Ugd2FudCB0byBza2lwIGFsbFxuICAgIC8vIHByZXZpb3VzbHkgc2VsZWN0ZWQgbm9kZXM7XG4gICAgLy8gb3RoZXJ3aXNlLCB3ZSB3YW50IHRvIG1hcmsgdGhlIG5vZGUgYXMgc2VsZWN0ZWQuXG4gICAgLy8gY2xvbmUgdGhlIG5vZGUgc28gdGhlIG9yaWdpbmFsIHJhdyBjb250ZW50IHJlbWFpbnNcbiAgICAvLyBpbnRhY3QuIHRoaXMgZW5zdXJlcyBwcm9wZXIgcmUtY29tcGlsYXRpb24gaW4gY2FzZXNcbiAgICAvLyB3aGVyZSB0aGUgb3V0bGV0IGlzIGluc2lkZSBhIGNvbmRpdGlvbmFsIGJsb2NrXG4gICAgaWYgKG1haW4gJiYgIW5vZGUuX192X3NlbGVjdGVkKSB7XG4gICAgICBhcHBlbmQobm9kZSlcbiAgICB9IGVsc2UgaWYgKCFtYWluICYmIG5vZGUucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICBub2RlLl9fdl9zZWxlY3RlZCA9IHRydWVcbiAgICAgIGFwcGVuZChub2RlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZnJhZ1xuXG4gIGZ1bmN0aW9uIGFwcGVuZCAobm9kZSkge1xuICAgIGlmIChfLmlzVGVtcGxhdGUobm9kZSkgJiZcbiAgICAgICAgIW5vZGUuaGFzQXR0cmlidXRlKCd2LWlmJykgJiZcbiAgICAgICAgIW5vZGUuaGFzQXR0cmlidXRlKCd2LWZvcicpKSB7XG4gICAgICBub2RlID0gdGVtcGxhdGVQYXJzZXIucGFyc2Uobm9kZSlcbiAgICB9XG4gICAgbm9kZSA9IHRlbXBsYXRlUGFyc2VyLmNsb25lKG5vZGUpXG4gICAgZnJhZy5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIGFkZENsYXNzID0gXy5hZGRDbGFzc1xudmFyIHJlbW92ZUNsYXNzID0gXy5yZW1vdmVDbGFzc1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBkZWVwOiB0cnVlLFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaGFuZGxlT2JqZWN0KHN0cmluZ1RvT2JqZWN0KHZhbHVlKSlcbiAgICB9IGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlT2JqZWN0KHZhbHVlKVxuICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5oYW5kbGVBcnJheSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhbnVwKClcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlT2JqZWN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmNsZWFudXAodmFsdWUpXG4gICAgdmFyIGtleXMgPSB0aGlzLnByZXZLZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIGtleSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGtleSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlQXJyYXk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuY2xlYW51cCh2YWx1ZSlcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHZhbHVlW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZXZLZXlzID0gdmFsdWUuc2xpY2UoKVxuICB9LFxuXG4gIGNsZWFudXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnByZXZLZXlzKSB7XG4gICAgICB2YXIgaSA9IHRoaXMucHJldktleXMubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLnByZXZLZXlzW2ldXG4gICAgICAgIGlmIChrZXkgJiYgKCF2YWx1ZSB8fCAhY29udGFpbnModmFsdWUsIGtleSkpKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwga2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ1RvT2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0ge31cbiAgdmFyIGtleXMgPSB2YWx1ZS50cmltKCkuc3BsaXQoL1xccysvKVxuICB2YXIgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXNba2V5c1tpXV0gPSB0cnVlXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBjb250YWlucyAodmFsdWUsIGtleSkge1xuICByZXR1cm4gXy5pc0FycmF5KHZhbHVlKVxuICAgID8gdmFsdWUuaW5kZXhPZihrZXkpID4gLTFcbiAgICA6IHZhbHVlLmhhc093blByb3BlcnR5KGtleSlcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9wYXJzZXJzL3RlbXBsYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJpb3JpdHk6IDE1MDAsXG5cbiAgcGFyYW1zOiBbXG4gICAgJ2tlZXAtYWxpdmUnLFxuICAgICd0cmFuc2l0aW9uLW1vZGUnLFxuICAgICdpbmxpbmUtdGVtcGxhdGUnXG4gIF0sXG5cbiAgLyoqXG4gICAqIFNldHVwLiBUd28gcG9zc2libGUgdXNhZ2VzOlxuICAgKlxuICAgKiAtIHN0YXRpYzpcbiAgICogICA8Y29tcD4gb3IgPGRpdiB2LWNvbXBvbmVudD1cImNvbXBcIj5cbiAgICpcbiAgICogLSBkeW5hbWljOlxuICAgKiAgIDxjb21wb25lbnQgOmlzPVwidmlld1wiPlxuICAgKi9cblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmVsLl9fdnVlX18pIHtcbiAgICAgIC8vIGtlZXAtYWxpdmUgY2FjaGVcbiAgICAgIHRoaXMua2VlcEFsaXZlID0gdGhpcy5wYXJhbXMua2VlcEFsaXZlXG4gICAgICBpZiAodGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGVcbiAgICAgIGlmICh0aGlzLnBhcmFtcy5pbmxpbmVUZW1wbGF0ZSkge1xuICAgICAgICAvLyBleHRyYWN0IGlubGluZSB0ZW1wbGF0ZSBhcyBhIERvY3VtZW50RnJhZ21lbnRcbiAgICAgICAgdGhpcy5pbmxpbmVUZW1wbGF0ZSA9IF8uZXh0cmFjdENvbnRlbnQodGhpcy5lbCwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIC8vIGNvbXBvbmVudCByZXNvbHV0aW9uIHJlbGF0ZWQgc3RhdGVcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENiID1cbiAgICAgIHRoaXMuQ29tcG9uZW50ID0gbnVsbFxuICAgICAgLy8gdHJhbnNpdGlvbiByZWxhdGVkIHN0YXRlXG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFscyA9IDBcbiAgICAgIHRoaXMucGVuZGluZ1JlbW92YWxDYiA9IG51bGxcbiAgICAgIC8vIGNyZWF0ZSBhIHJlZiBhbmNob3JcbiAgICAgIHRoaXMuYW5jaG9yID0gXy5jcmVhdGVBbmNob3IoJ3YtY29tcG9uZW50JylcbiAgICAgIF8ucmVwbGFjZSh0aGlzLmVsLCB0aGlzLmFuY2hvcilcbiAgICAgIC8vIHJlbW92ZSBpcyBhdHRyaWJ1dGVcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdpcycpXG4gICAgICAvLyBpZiBzdGF0aWMsIGJ1aWxkIHJpZ2h0IG5vdy5cbiAgICAgIGlmICh0aGlzLmxpdGVyYWwpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnQodGhpcy5leHByZXNzaW9uKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ2Nhbm5vdCBtb3VudCBjb21wb25lbnQgXCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiICcgK1xuICAgICAgICAnb24gYWxyZWFkeSBtb3VudGVkIGVsZW1lbnQ6ICcgKyB0aGlzLmVsXG4gICAgICApXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQdWJsaWMgdXBkYXRlLCBjYWxsZWQgYnkgdGhlIHdhdGNoZXIgaW4gdGhlIGR5bmFtaWNcbiAgICogbGl0ZXJhbCBzY2VuYXJpbywgZS5nLiA8Y29tcG9uZW50IDppcz1cInZpZXdcIj5cbiAgICovXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMubGl0ZXJhbCkge1xuICAgICAgdGhpcy5zZXRDb21wb25lbnQodmFsdWUpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggZHluYW1pYyBjb21wb25lbnRzLiBNYXkgcmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqIGFzeW5jaHJvbm91c2x5LCBhbmQgcGVyZm9ybSB0cmFuc2l0aW9uIGJhc2VkIG9uXG4gICAqIHNwZWNpZmllZCB0cmFuc2l0aW9uIG1vZGUuIEFjY2VwdHMgYSBmZXcgYWRkaXRpb25hbFxuICAgKiBhcmd1bWVudHMgc3BlY2lmaWNhbGx5IGZvciB2dWUtcm91dGVyLlxuICAgKlxuICAgKiBUaGUgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gdGhlIGZ1bGwgdHJhbnNpdGlvbiBpc1xuICAgKiBmaW5pc2hlZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgc2V0Q29tcG9uZW50OiBmdW5jdGlvbiAodmFsdWUsIGNiKSB7XG4gICAgdGhpcy5pbnZhbGlkYXRlUGVuZGluZygpXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8ganVzdCByZW1vdmUgY3VycmVudFxuICAgICAgdGhpcy51bmJ1aWxkKHRydWUpXG4gICAgICB0aGlzLnJlbW92ZSh0aGlzLmNoaWxkVk0sIGNiKVxuICAgICAgdGhpcy5jaGlsZFZNID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMucmVzb2x2ZUNvbXBvbmVudCh2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm1vdW50Q29tcG9uZW50KGNiKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byB1c2Ugd2hlbiBjcmVhdGluZ1xuICAgKiB0aGUgY2hpbGQgdm0uXG4gICAqL1xuXG4gIHJlc29sdmVDb21wb25lbnQ6IGZ1bmN0aW9uIChpZCwgY2IpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYiA9IF8uY2FuY2VsbGFibGUoZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgICAgc2VsZi5Db21wb25lbnROYW1lID0gQ29tcG9uZW50Lm9wdGlvbnMubmFtZSB8fCBpZFxuICAgICAgc2VsZi5Db21wb25lbnQgPSBDb21wb25lbnRcbiAgICAgIGNiKClcbiAgICB9KVxuICAgIHRoaXMudm0uX3Jlc29sdmVDb21wb25lbnQoaWQsIHRoaXMucGVuZGluZ0NvbXBvbmVudENiKVxuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIGN1cnJlbnQgY29uc3RydWN0b3IgYW5kXG4gICAqIHJlcGxhY2UgdGhlIGV4aXN0aW5nIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBkb2Vzbid0IGNhcmVcbiAgICogd2hldGhlciB0aGUgbmV3IGNvbXBvbmVudCBhbmQgdGhlIG9sZCBvbmUgYXJlIGFjdHVhbGx5XG4gICAqIHRoZSBzYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIG1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoY2IpIHtcbiAgICAvLyBhY3R1YWwgbW91bnRcbiAgICB0aGlzLnVuYnVpbGQodHJ1ZSlcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgYWN0aXZhdGVIb29rID0gdGhpcy5Db21wb25lbnQub3B0aW9ucy5hY3RpdmF0ZVxuICAgIHZhciBjYWNoZWQgPSB0aGlzLmdldENhY2hlZCgpXG4gICAgdmFyIG5ld0NvbXBvbmVudCA9IHRoaXMuYnVpbGQoKVxuICAgIGlmIChhY3RpdmF0ZUhvb2sgJiYgIWNhY2hlZCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9yID0gbmV3Q29tcG9uZW50XG4gICAgICBhY3RpdmF0ZUhvb2suY2FsbChuZXdDb21wb25lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi53YWl0aW5nRm9yID0gbnVsbFxuICAgICAgICBzZWxmLnRyYW5zaXRpb24obmV3Q29tcG9uZW50LCBjYilcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZSByZWYgZm9yIGtlcHQtYWxpdmUgY29tcG9uZW50XG4gICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIG5ld0NvbXBvbmVudC5fdXBkYXRlUmVmKClcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNpdGlvbihuZXdDb21wb25lbnQsIGNiKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB0aGUgY29tcG9uZW50IGNoYW5nZXMgb3IgdW5iaW5kcyBiZWZvcmUgYW4gYXN5bmNcbiAgICogY29uc3RydWN0b3IgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG8gaW52YWxpZGF0ZSBpdHNcbiAgICogcGVuZGluZyBjYWxsYmFjay5cbiAgICovXG5cbiAgaW52YWxpZGF0ZVBlbmRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nQ29tcG9uZW50Q2IpIHtcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENiLmNhbmNlbCgpXG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYiA9IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlL2luc2VydCBhIG5ldyBjaGlsZCB2bS5cbiAgICogSWYga2VlcCBhbGl2ZSBhbmQgaGFzIGNhY2hlZCBpbnN0YW5jZSwgaW5zZXJ0IHRoYXRcbiAgICogaW5zdGFuY2U7IG90aGVyd2lzZSBidWlsZCBhIG5ldyBvbmUgYW5kIGNhY2hlIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhT3B0aW9uc11cbiAgICogQHJldHVybiB7VnVlfSAtIHRoZSBjcmVhdGVkIGluc3RhbmNlXG4gICAqL1xuXG4gIGJ1aWxkOiBmdW5jdGlvbiAoZXh0cmFPcHRpb25zKSB7XG4gICAgdmFyIGNhY2hlZCA9IHRoaXMuZ2V0Q2FjaGVkKClcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkXG4gICAgfVxuICAgIGlmICh0aGlzLkNvbXBvbmVudCkge1xuICAgICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5Db21wb25lbnROYW1lLFxuICAgICAgICBlbDogdGVtcGxhdGVQYXJzZXIuY2xvbmUodGhpcy5lbCksXG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLmlubGluZVRlbXBsYXRlLFxuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gYWRkIHRoZSBjaGlsZCB3aXRoIGNvcnJlY3QgcGFyZW50XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSB0cmFuc2NsdWRlZCBjb21wb25lbnQsIGl0cyBwYXJlbnRcbiAgICAgICAgLy8gc2hvdWxkIGJlIHRoZSB0cmFuc2NsdXNpb24gaG9zdC5cbiAgICAgICAgcGFyZW50OiB0aGlzLl9ob3N0IHx8IHRoaXMudm0sXG4gICAgICAgIC8vIGlmIG5vIGlubGluZS10ZW1wbGF0ZSwgdGhlbiB0aGUgY29tcGlsZWRcbiAgICAgICAgLy8gbGlua2VyIGNhbiBiZSBjYWNoZWQgZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgICAgICAgX2xpbmtlckNhY2hhYmxlOiAhdGhpcy5pbmxpbmVUZW1wbGF0ZSxcbiAgICAgICAgX3JlZjogdGhpcy5kZXNjcmlwdG9yLnJlZixcbiAgICAgICAgX2FzQ29tcG9uZW50OiB0cnVlLFxuICAgICAgICBfaXNSb3V0ZXJWaWV3OiB0aGlzLl9pc1JvdXRlclZpZXcsXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSB0cmFuc2NsdWRlZCBjb21wb25lbnQsIGNvbnRleHRcbiAgICAgICAgLy8gd2lsbCBiZSB0aGUgY29tbW9uIHBhcmVudCB2bSBvZiB0aGlzIGluc3RhbmNlXG4gICAgICAgIC8vIGFuZCBpdHMgaG9zdC5cbiAgICAgICAgX2NvbnRleHQ6IHRoaXMudm0sXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIGFuIGlubGluZSB2LWZvciwgdGhlIHNjb3BlXG4gICAgICAgIC8vIHdpbGwgYmUgdGhlIGludGVybWVkaWF0ZSBzY29wZSBjcmVhdGVkIGZvciB0aGlzXG4gICAgICAgIC8vIHJlcGVhdCBmcmFnbWVudC4gdGhpcyBpcyB1c2VkIGZvciBsaW5raW5nIHByb3BzXG4gICAgICAgIC8vIGFuZCBjb250YWluZXIgZGlyZWN0aXZlcy5cbiAgICAgICAgX3Njb3BlOiB0aGlzLl9zY29wZSxcbiAgICAgICAgLy8gcGFzcyBpbiB0aGUgb3duZXIgZnJhZ21lbnQgb2YgdGhpcyBjb21wb25lbnQuXG4gICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgdGhlIGZyYWdtZW50IGNhbiBrZWVwXG4gICAgICAgIC8vIHRyYWNrIG9mIGl0cyBjb250YWluZWQgY29tcG9uZW50cyBpbiBvcmRlciB0b1xuICAgICAgICAvLyBjYWxsIGF0dGFjaC9kZXRhY2ggaG9va3MgZm9yIHRoZW0uXG4gICAgICAgIF9mcmFnOiB0aGlzLl9mcmFnXG4gICAgICB9XG4gICAgICAvLyBleHRyYSBvcHRpb25zXG4gICAgICAvLyBpbiAxLjAuMCB0aGlzIGlzIHVzZWQgYnkgdnVlLXJvdXRlciBvbmx5XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgXy5leHRlbmQob3B0aW9ucywgZXh0cmFPcHRpb25zKVxuICAgICAgfVxuICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuQ29tcG9uZW50KG9wdGlvbnMpXG4gICAgICBpZiAodGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLkNvbXBvbmVudC5jaWRdID0gY2hpbGRcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndHJhbnNpdGlvbicpICYmXG4gICAgICAgICAgY2hpbGQuX2lzRnJhZ21lbnQpIHtcbiAgICAgICAgXy53YXJuKFxuICAgICAgICAgICdUcmFuc2l0aW9ucyB3aWxsIG5vdCB3b3JrIG9uIGEgZnJhZ21lbnQgaW5zdGFuY2UuICcgK1xuICAgICAgICAgICdUZW1wbGF0ZTogJyArIGNoaWxkLiRvcHRpb25zLnRlbXBsYXRlXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVHJ5IHRvIGdldCBhIGNhY2hlZCBpbnN0YW5jZSBvZiB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge1Z1ZXx1bmRlZmluZWR9XG4gICAqL1xuXG4gIGdldENhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmtlZXBBbGl2ZSAmJiB0aGlzLmNhY2hlW3RoaXMuQ29tcG9uZW50LmNpZF1cbiAgfSxcblxuICAvKipcbiAgICogVGVhcmRvd24gdGhlIGN1cnJlbnQgY2hpbGQsIGJ1dCBkZWZlcnMgY2xlYW51cCBzb1xuICAgKiB0aGF0IHdlIGNhbiBzZXBhcmF0ZSB0aGUgZGVzdHJveSBhbmQgcmVtb3ZhbCBzdGVwcy5cbiAgICpcbiAgICogQHBhcmFtIHtCb29sZWFufSBkZWZlclxuICAgKi9cblxuICB1bmJ1aWxkOiBmdW5jdGlvbiAoZGVmZXIpIHtcbiAgICBpZiAodGhpcy53YWl0aW5nRm9yKSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3IuJGRlc3Ryb3koKVxuICAgICAgdGhpcy53YWl0aW5nRm9yID0gbnVsbFxuICAgIH1cbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkVk1cbiAgICBpZiAoIWNoaWxkIHx8IHRoaXMua2VlcEFsaXZlKSB7XG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHJlZlxuICAgICAgICBjaGlsZC5fdXBkYXRlUmVmKHRydWUpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gdGhlIHNvbGUgcHVycG9zZSBvZiBgZGVmZXJDbGVhbnVwYCBpcyBzbyB0aGF0IHdlIGNhblxuICAgIC8vIFwiZGVhY3RpdmF0ZVwiIHRoZSB2bSByaWdodCBub3cgYW5kIHBlcmZvcm0gRE9NIHJlbW92YWxcbiAgICAvLyBsYXRlci5cbiAgICBjaGlsZC4kZGVzdHJveShmYWxzZSwgZGVmZXIpXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjdXJyZW50IGRlc3Ryb3llZCBjaGlsZCBhbmQgbWFudWFsbHkgZG9cbiAgICogdGhlIGNsZWFudXAgYWZ0ZXIgcmVtb3ZhbC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICovXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbiAoY2hpbGQsIGNiKSB7XG4gICAgdmFyIGtlZXBBbGl2ZSA9IHRoaXMua2VlcEFsaXZlXG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAvLyB3ZSBtYXkgaGF2ZSBhIGNvbXBvbmVudCBzd2l0Y2ggd2hlbiBhIHByZXZpb3VzXG4gICAgICAvLyBjb21wb25lbnQgaXMgc3RpbGwgYmVpbmcgdHJhbnNpdGlvbmVkIG91dC5cbiAgICAgIC8vIHdlIHdhbnQgdG8gdHJpZ2dlciBvbmx5IG9uZSBsYXN0ZXN0IGluc2VydGlvbiBjYlxuICAgICAgLy8gd2hlbiB0aGUgZXhpc3RpbmcgdHJhbnNpdGlvbiBmaW5pc2hlcy4gKCMxMTE5KVxuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHMrK1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbENiID0gY2JcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgY2hpbGQuJHJlbW92ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucGVuZGluZ1JlbW92YWxzLS1cbiAgICAgICAgaWYgKCFrZWVwQWxpdmUpIGNoaWxkLl9jbGVhbnVwKClcbiAgICAgICAgaWYgKCFzZWxmLnBlbmRpbmdSZW1vdmFscyAmJiBzZWxmLnBlbmRpbmdSZW1vdmFsQ2IpIHtcbiAgICAgICAgICBzZWxmLnBlbmRpbmdSZW1vdmFsQ2IoKVxuICAgICAgICAgIHNlbGYucGVuZGluZ1JlbW92YWxDYiA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYigpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSBzd2FwIHRoZSBjb21wb25lbnRzLCBkZXBlbmRpbmcgb24gdGhlXG4gICAqIHRyYW5zaXRpb24gbW9kZS4gRGVmYXVsdHMgdG8gc2ltdWx0YW5lb3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgdHJhbnNpdGlvbjogZnVuY3Rpb24gKHRhcmdldCwgY2IpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY2hpbGRWTVxuICAgIC8vIGZvciBkZXZ0b29sIGluc3BlY3Rpb25cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGN1cnJlbnQpIGN1cnJlbnQuX2luYWN0aXZlID0gdHJ1ZVxuICAgICAgdGFyZ2V0Ll9pbmFjdGl2ZSA9IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuY2hpbGRWTSA9IHRhcmdldFxuICAgIHN3aXRjaCAoc2VsZi5wYXJhbXMudHJhbnNpdGlvbk1vZGUpIHtcbiAgICAgIGNhc2UgJ2luLW91dCc6XG4gICAgICAgIHRhcmdldC4kYmVmb3JlKHNlbGYuYW5jaG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5yZW1vdmUoY3VycmVudCwgY2IpXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdvdXQtaW4nOlxuICAgICAgICBzZWxmLnJlbW92ZShjdXJyZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGNiKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc2VsZi5yZW1vdmUoY3VycmVudClcbiAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGNiKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVW5iaW5kLlxuICAgKi9cblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmludmFsaWRhdGVQZW5kaW5nKClcbiAgICAvLyBEbyBub3QgZGVmZXIgY2xlYW51cCB3aGVuIHVuYmluZGluZ1xuICAgIHRoaXMudW5idWlsZCgpXG4gICAgLy8gZGVzdHJveSBhbGwga2VlcC1hbGl2ZSBjYWNoZWQgaW5zdGFuY2VzXG4gICAgaWYgKHRoaXMuY2FjaGUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVba2V5XS4kZGVzdHJveSgpXG4gICAgICB9XG4gICAgICB0aGlzLmNhY2hlID0gbnVsbFxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGUnKVxuZXhwb3J0c1snY2xhc3MnXSA9IHJlcXVpcmUoJy4vY2xhc3MnKVxuZXhwb3J0cy5jb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpXG5leHBvcnRzLnByb3AgPSByZXF1aXJlKCcuL3Byb3AnKVxuZXhwb3J0cy50cmFuc2l0aW9uID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uJylcbiIsIi8vIE5PVEU6IHRoZSBwcm9wIGludGVybmFsIGRpcmVjdGl2ZSBpcyBjb21waWxlZCBhbmQgbGlua2VkXG4vLyBkdXJpbmcgX2luaXRTY29wZSgpLCBiZWZvcmUgdGhlIGNyZWF0ZWQgaG9vayBpcyBjYWxsZWQuXG4vLyBUaGUgcHVycG9zZSBpcyB0byBtYWtlIHRoZSBpbml0aWFsIHByb3AgdmFsdWVzIGF2YWlsYWJsZVxuLy8gaW5zaWRlIGBjcmVhdGVkYCBob29rcyBhbmQgYGRhdGFgIGZ1bmN0aW9ucy5cblxudmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciBXYXRjaGVyID0gcmVxdWlyZSgnLi4vLi4vd2F0Y2hlcicpXG52YXIgYmluZGluZ01vZGVzID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJykuX3Byb3BCaW5kaW5nTW9kZXNcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGNoaWxkID0gdGhpcy52bVxuICAgIHZhciBwYXJlbnQgPSBjaGlsZC5fY29udGV4dFxuICAgIC8vIHBhc3NlZCBpbiBmcm9tIGNvbXBpbGVyIGRpcmVjdGx5XG4gICAgdmFyIHByb3AgPSB0aGlzLmRlc2NyaXB0b3IucHJvcFxuICAgIHZhciBjaGlsZEtleSA9IHByb3AucGF0aFxuICAgIHZhciBwYXJlbnRLZXkgPSBwcm9wLnBhcmVudFBhdGhcbiAgICB2YXIgdHdvV2F5ID0gcHJvcC5tb2RlID09PSBiaW5kaW5nTW9kZXMuVFdPX1dBWVxuXG4gICAgdmFyIHBhcmVudFdhdGNoZXIgPSB0aGlzLnBhcmVudFdhdGNoZXIgPSBuZXcgV2F0Y2hlcihcbiAgICAgIHBhcmVudCxcbiAgICAgIHBhcmVudEtleSxcbiAgICAgIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKF8uYXNzZXJ0UHJvcChwcm9wLCB2YWwpKSB7XG4gICAgICAgICAgY2hpbGRbY2hpbGRLZXldID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdHdvV2F5OiB0d29XYXksXG4gICAgICAgIGZpbHRlcnM6IHByb3AuZmlsdGVycyxcbiAgICAgICAgLy8gaW1wb3J0YW50OiBwcm9wcyBuZWVkIHRvIGJlIG9ic2VydmVkIG9uIHRoZVxuICAgICAgICAvLyB2LWZvciBzY29wZSBpZiBwcmVzZW50XG4gICAgICAgIHNjb3BlOiB0aGlzLl9zY29wZVxuICAgICAgfVxuICAgIClcblxuICAgIC8vIHNldCB0aGUgY2hpbGQgaW5pdGlhbCB2YWx1ZS5cbiAgICBfLmluaXRQcm9wKGNoaWxkLCBwcm9wLCBwYXJlbnRXYXRjaGVyLnZhbHVlKVxuXG4gICAgLy8gc2V0dXAgdHdvLXdheSBiaW5kaW5nXG4gICAgaWYgKHR3b1dheSkge1xuICAgICAgLy8gaW1wb3J0YW50OiBkZWZlciB0aGUgY2hpbGQgd2F0Y2hlciBjcmVhdGlvbiB1bnRpbFxuICAgICAgLy8gdGhlIGNyZWF0ZWQgaG9vayAoYWZ0ZXIgZGF0YSBvYnNlcnZhdGlvbilcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgY2hpbGQuJG9uY2UoJ2hvb2s6Y3JlYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5jaGlsZFdhdGNoZXIgPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICBjaGlsZEtleSxcbiAgICAgICAgICBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBwYXJlbnRXYXRjaGVyLnNldCh2YWwpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gZW5zdXJlIHN5bmMgdXB3YXJkIGJlZm9yZSBwYXJlbnQgc3luYyBkb3duLlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgaW4gY2FzZXMgZS5nLiB0aGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG11dGF0ZXMgYSBwcm9wIGFycmF5LCB0aGVuIHJlcGxhY2VzIGl0LiAoIzE2ODMpXG4gICAgICAgICAgICBzeW5jOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBhcmVudFdhdGNoZXIudGVhcmRvd24oKVxuICAgIGlmICh0aGlzLmNoaWxkV2F0Y2hlcikge1xuICAgICAgdGhpcy5jaGlsZFdhdGNoZXIudGVhcmRvd24oKVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW1zLSddXG52YXIgY2FtZWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddXG52YXIgaW1wb3J0YW50UkUgPSAvIWltcG9ydGFudDs/JC9cbnZhciB0ZXN0RWwgPSBudWxsXG52YXIgcHJvcENhY2hlID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgZGVlcDogdHJ1ZSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmNzc1RleHQgPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5oYW5kbGVPYmplY3QodmFsdWUucmVkdWNlKF8uZXh0ZW5kLCB7fSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlT2JqZWN0KHZhbHVlIHx8IHt9KVxuICAgIH1cbiAgfSxcblxuICBoYW5kbGVPYmplY3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIGNhY2hlIG9iamVjdCBzdHlsZXMgc28gdGhhdCBvbmx5IGNoYW5nZWQgcHJvcHNcbiAgICAvLyBhcmUgYWN0dWFsbHkgdXBkYXRlZC5cbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlIHx8ICh0aGlzLmNhY2hlID0ge30pXG4gICAgdmFyIG5hbWUsIHZhbFxuICAgIGZvciAobmFtZSBpbiBjYWNoZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTaW5nbGUobmFtZSwgbnVsbClcbiAgICAgICAgZGVsZXRlIGNhY2hlW25hbWVdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiB2YWx1ZSkge1xuICAgICAgdmFsID0gdmFsdWVbbmFtZV1cbiAgICAgIGlmICh2YWwgIT09IGNhY2hlW25hbWVdKSB7XG4gICAgICAgIGNhY2hlW25hbWVdID0gdmFsXG4gICAgICAgIHRoaXMuaGFuZGxlU2luZ2xlKG5hbWUsIHZhbClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU2luZ2xlOiBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICBwcm9wID0gbm9ybWFsaXplKHByb3ApXG4gICAgaWYgKCFwcm9wKSByZXR1cm4gLy8gdW5zdXBwb3J0ZWQgcHJvcFxuICAgIC8vIGNhc3QgcG9zc2libGUgbnVtYmVycy9ib29sZWFucyBpbnRvIHN0cmluZ3NcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWUgKz0gJydcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhciBpc0ltcG9ydGFudCA9IGltcG9ydGFudFJFLnRlc3QodmFsdWUpXG4gICAgICAgID8gJ2ltcG9ydGFudCdcbiAgICAgICAgOiAnJ1xuICAgICAgaWYgKGlzSW1wb3J0YW50KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShpbXBvcnRhbnRSRSwgJycpLnRyaW0oKVxuICAgICAgfVxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSwgaXNJbXBvcnRhbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcClcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIENTUyBwcm9wZXJ0eSBuYW1lLlxuICogLSBjYWNoZSByZXN1bHRcbiAqIC0gYXV0byBwcmVmaXhcbiAqIC0gY2FtZWxDYXNlIC0+IGRhc2gtY2FzZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplIChwcm9wKSB7XG4gIGlmIChwcm9wQ2FjaGVbcHJvcF0pIHtcbiAgICByZXR1cm4gcHJvcENhY2hlW3Byb3BdXG4gIH1cbiAgdmFyIHJlcyA9IHByZWZpeChwcm9wKVxuICBwcm9wQ2FjaGVbcHJvcF0gPSBwcm9wQ2FjaGVbcmVzXSA9IHJlc1xuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogQXV0byBkZXRlY3QgdGhlIGFwcHJvcHJpYXRlIHByZWZpeCBmb3IgYSBDU1MgcHJvcGVydHkuXG4gKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvNTIzNjkyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXggKHByb3ApIHtcbiAgcHJvcCA9IF8uaHlwaGVuYXRlKHByb3ApXG4gIHZhciBjYW1lbCA9IF8uY2FtZWxpemUocHJvcClcbiAgdmFyIHVwcGVyID0gY2FtZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjYW1lbC5zbGljZSgxKVxuICBpZiAoIXRlc3RFbCkge1xuICAgIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cbiAgaWYgKGNhbWVsIGluIHRlc3RFbC5zdHlsZSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cbiAgdmFyIGkgPSBwcmVmaXhlcy5sZW5ndGhcbiAgdmFyIHByZWZpeGVkXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcmVmaXhlZCA9IGNhbWVsUHJlZml4ZXNbaV0gKyB1cHBlclxuICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWwuc3R5bGUpIHtcbiAgICAgIHJldHVybiBwcmVmaXhlc1tpXSArIHByb3BcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3RyYW5zaXRpb24vdHJhbnNpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiAxMTAwLFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGlkLCBvbGRJZCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICAvLyByZXNvbHZlIG9uIG93bmVyIHZtXG4gICAgdmFyIGhvb2tzID0gXy5yZXNvbHZlQXNzZXQodGhpcy52bS4kb3B0aW9ucywgJ3RyYW5zaXRpb25zJywgaWQpXG4gICAgaWQgPSBpZCB8fCAndidcbiAgICAvLyBhcHBseSBvbiBjbG9zZXN0IHZtXG4gICAgZWwuX192X3RyYW5zID0gbmV3IFRyYW5zaXRpb24oZWwsIGlkLCBob29rcywgdGhpcy5lbC5fX3Z1ZV9fIHx8IHRoaXMudm0pXG4gICAgaWYgKG9sZElkKSB7XG4gICAgICBfLnJlbW92ZUNsYXNzKGVsLCBvbGRJZCArICctdHJhbnNpdGlvbicpXG4gICAgfVxuICAgIF8uYWRkQ2xhc3MoZWwsIGlkICsgJy10cmFuc2l0aW9uJylcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcblxuLy8geGxpbmtcbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG52YXIgeGxpbmtSRSA9IC9eeGxpbms6L1xuXG4vLyB0aGVzZSBpbnB1dCBlbGVtZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGFsc28gc2V0IHRoZWlyXG4vLyBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXNcbnZhciBpbnB1dFByb3BzID0ge1xuICB2YWx1ZTogMSxcbiAgY2hlY2tlZDogMSxcbiAgc2VsZWN0ZWQ6IDFcbn1cblxuLy8gdGhlc2UgYXR0cmlidXRlcyBzaG91bGQgc2V0IGEgaGlkZGVuIHByb3BlcnR5IGZvclxuLy8gYmluZGluZyB2LW1vZGVsIHRvIG9iamVjdCB2YWx1ZXNcbnZhciBtb2RlbFByb3BzID0ge1xuICB2YWx1ZTogJ192YWx1ZScsXG4gICd0cnVlLXZhbHVlJzogJ190cnVlVmFsdWUnLFxuICAnZmFsc2UtdmFsdWUnOiAnX2ZhbHNlVmFsdWUnXG59XG5cbi8vIGNoZWNrIGZvciBhdHRyaWJ1dGVzIHRoYXQgcHJvaGliaXQgaW50ZXJwb2xhdGlvbnNcbnZhciBkaXNhbGxvd2VkSW50ZXJwQXR0clJFID0gL152LXxeOnxeQHxeKGlzfHRyYW5zaXRpb258dHJhbnNpdGlvbi1tb2RlfGRlYm91bmNlfHRyYWNrLWJ5fHN0YWdnZXJ8ZW50ZXItc3RhZ2dlcnxsZWF2ZS1zdGFnZ2VyKSQvXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiA4NTAsXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBhdHRyID0gdGhpcy5hcmdcbiAgICB2YXIgdGFnID0gdGhpcy5lbC50YWdOYW1lXG4gICAgLy8gc2hvdWxkIGJlIGRlZXAgd2F0Y2ggb24gb2JqZWN0IG1vZGVcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgIHRoaXMuZGVlcCA9IHRydWVcbiAgICB9XG4gICAgLy8gaGFuZGxlIGludGVycG9sYXRpb24gYmluZGluZ3NcbiAgICBpZiAodGhpcy5kZXNjcmlwdG9yLmludGVycCkge1xuICAgICAgLy8gb25seSBhbGxvdyBiaW5kaW5nIG9uIG5hdGl2ZSBhdHRyaWJ1dGVzXG4gICAgICBpZiAoXG4gICAgICAgIGRpc2FsbG93ZWRJbnRlcnBBdHRyUkUudGVzdChhdHRyKSB8fFxuICAgICAgICAoYXR0ciA9PT0gJ25hbWUnICYmICh0YWcgPT09ICdQQVJUSUFMJyB8fCB0YWcgPT09ICdTTE9UJykpXG4gICAgICApIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICAgYXR0ciArICc9XCInICsgdGhpcy5kZXNjcmlwdG9yLnJhdyArICdcIjogJyArXG4gICAgICAgICAgJ2F0dHJpYnV0ZSBpbnRlcnBvbGF0aW9uIGlzIG5vdCBhbGxvd2VkIGluIFZ1ZS5qcyAnICtcbiAgICAgICAgICAnZGlyZWN0aXZlcyBhbmQgc3BlY2lhbCBhdHRyaWJ1dGVzLidcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKVxuICAgICAgICB0aGlzLmludmFsaWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIHJhdyA9IGF0dHIgKyAnPVwiJyArIHRoaXMuZGVzY3JpcHRvci5yYXcgKyAnXCI6ICdcbiAgICAgICAgLy8gd2FybiBzcmNcbiAgICAgICAgaWYgKGF0dHIgPT09ICdzcmMnKSB7XG4gICAgICAgICAgXy53YXJuKFxuICAgICAgICAgICAgcmF3ICsgJ2ludGVycG9sYXRpb24gaW4gXCJzcmNcIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZSAnICtcbiAgICAgICAgICAgICdhIDQwNCByZXF1ZXN0LiBVc2Ugdi1iaW5kOnNyYyBpbnN0ZWFkLidcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyB3YXJuIHN0eWxlXG4gICAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgXy53YXJuKFxuICAgICAgICAgICAgcmF3ICsgJ2ludGVycG9sYXRpb24gaW4gXCJzdHlsZVwiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlICcgK1xuICAgICAgICAgICAgJ3RoZSBhdHRyaWJ1dGUgdG8gYmUgZGlzY2FyZGVkIGluIEludGVybmV0IEV4cGxvcmVyLiAnICtcbiAgICAgICAgICAgICdVc2Ugdi1iaW5kOnN0eWxlIGluc3RlYWQuJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmludmFsaWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgYXR0ciA9IHRoaXMuYXJnXG4gICAgaWYgKHRoaXMuYXJnKSB7XG4gICAgICB0aGlzLmhhbmRsZVNpbmdsZShhdHRyLCB2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVPYmplY3QodmFsdWUgfHwge30pXG4gICAgfVxuICB9LFxuXG4gIC8vIHNoYXJlIG9iamVjdCBoYW5kbGVyIHdpdGggdi1iaW5kOmNsYXNzXG4gIGhhbmRsZU9iamVjdDogcmVxdWlyZSgnLi4vaW50ZXJuYWwvc3R5bGUnKS5oYW5kbGVPYmplY3QsXG5cbiAgaGFuZGxlU2luZ2xlOiBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHtcbiAgICBpZiAoaW5wdXRQcm9wc1thdHRyXSAmJiBhdHRyIGluIHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuZWxbYXR0cl0gPSBhdHRyID09PSAndmFsdWUnXG4gICAgICAgID8gKHZhbHVlIHx8ICcnKSAvLyBJRTkgd2lsbCBzZXQgaW5wdXQudmFsdWUgdG8gXCJudWxsXCIgZm9yIG51bGwuLi5cbiAgICAgICAgOiB2YWx1ZVxuICAgIH1cbiAgICAvLyBzZXQgbW9kZWwgcHJvcHNcbiAgICB2YXIgbW9kZWxQcm9wID0gbW9kZWxQcm9wc1thdHRyXVxuICAgIGlmIChtb2RlbFByb3ApIHtcbiAgICAgIHRoaXMuZWxbbW9kZWxQcm9wXSA9IHZhbHVlXG4gICAgICAvLyB1cGRhdGUgdi1tb2RlbCBpZiBwcmVzZW50XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLmVsLl9fdl9tb2RlbFxuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG1vZGVsLmxpc3RlbmVyKClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZG8gbm90IHNldCB2YWx1ZSBhdHRyaWJ1dGUgZm9yIHRleHRhcmVhXG4gICAgaWYgKGF0dHIgPT09ICd2YWx1ZScgJiYgdGhpcy5lbC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGlmICh4bGlua1JFLnRlc3QoYXR0cikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBhdHRyLCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKVxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgdGhpcy52bS4kb25jZSgnaG9vazpjb21waWxlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgndi1jbG9haycpXG4gICAgfSlcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJpb3JpdHk6IDE1MDAsXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5hcmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgaWQgPSB0aGlzLmlkID0gXy5jYW1lbGl6ZSh0aGlzLmFyZylcbiAgICB2YXIgcmVmcyA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLnZtKS4kZWxzXG4gICAgaWYgKHJlZnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICByZWZzW2lkXSA9IHRoaXMuZWxcbiAgICB9IGVsc2Uge1xuICAgICAgXy5kZWZpbmVSZWFjdGl2ZShyZWZzLCBpZCwgdGhpcy5lbClcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlZnMgPSAodGhpcy5fc2NvcGUgfHwgdGhpcy52bSkuJGVsc1xuICAgIGlmIChyZWZzW3RoaXMuaWRdID09PSB0aGlzLmVsKSB7XG4gICAgICByZWZzW3RoaXMuaWRdID0gbnVsbFxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciBGcmFnbWVudEZhY3RvcnkgPSByZXF1aXJlKCcuLi8uLi9mcmFnbWVudC9mYWN0b3J5JylcbnZhciBpc09iamVjdCA9IF8uaXNPYmplY3RcbnZhciB1aWQgPSAwXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiAyMDAwLFxuXG4gIHBhcmFtczogW1xuICAgICd0cmFjay1ieScsXG4gICAgJ3N0YWdnZXInLFxuICAgICdlbnRlci1zdGFnZ2VyJyxcbiAgICAnbGVhdmUtc3RhZ2dlcidcbiAgXSxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gc3VwcG9ydCBcIml0ZW0gaW4gaXRlbXNcIiBzeW50YXhcbiAgICB2YXIgaW5NYXRjaCA9IHRoaXMuZXhwcmVzc2lvbi5tYXRjaCgvKC4qKSBpbiAoLiopLylcbiAgICBpZiAoaW5NYXRjaCkge1xuICAgICAgdmFyIGl0TWF0Y2ggPSBpbk1hdGNoWzFdLm1hdGNoKC9cXCgoLiopLCguKilcXCkvKVxuICAgICAgaWYgKGl0TWF0Y2gpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0TWF0Y2hbMV0udHJpbSgpXG4gICAgICAgIHRoaXMuYWxpYXMgPSBpdE1hdGNoWzJdLnRyaW0oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbGlhcyA9IGluTWF0Y2hbMV0udHJpbSgpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cHJlc3Npb24gPSBpbk1hdGNoWzJdXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmFsaWFzKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ0FsaWFzIGlzIHJlcXVpcmVkIGluIHYtZm9yLidcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHVpZCBhcyBhIGNhY2hlIGlkZW50aWZpZXJcbiAgICB0aGlzLmlkID0gJ19fdi1mb3JfXycgKyAoKyt1aWQpXG5cbiAgICAvLyBjaGVjayBpZiB0aGlzIGlzIGFuIG9wdGlvbiBsaXN0LFxuICAgIC8vIHNvIHRoYXQgd2Uga25vdyBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgPHNlbGVjdD4nc1xuICAgIC8vIHYtbW9kZWwgd2hlbiB0aGUgb3B0aW9uIGxpc3QgaGFzIGNoYW5nZWQuXG4gICAgLy8gYmVjYXVzZSB2LW1vZGVsIGhhcyBhIGxvd2VyIHByaW9yaXR5IHRoYW4gdi1mb3IsXG4gICAgLy8gdGhlIHYtbW9kZWwgaXMgbm90IGJvdW5kIGhlcmUgeWV0LCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmV0cml2ZSBpdCBpbiB0aGUgYWN0dWFsIHVwZGF0ZU1vZGVsKCkgZnVuY3Rpb24uXG4gICAgdmFyIHRhZyA9IHRoaXMuZWwudGFnTmFtZVxuICAgIHRoaXMuaXNPcHRpb24gPVxuICAgICAgKHRhZyA9PT0gJ09QVElPTicgfHwgdGFnID09PSAnT1BUR1JPVVAnKSAmJlxuICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnXG5cbiAgICAvLyBzZXR1cCBhbmNob3Igbm9kZXNcbiAgICB0aGlzLnN0YXJ0ID0gXy5jcmVhdGVBbmNob3IoJ3YtZm9yLXN0YXJ0JylcbiAgICB0aGlzLmVuZCA9IF8uY3JlYXRlQW5jaG9yKCd2LWZvci1lbmQnKVxuICAgIF8ucmVwbGFjZSh0aGlzLmVsLCB0aGlzLmVuZClcbiAgICBfLmJlZm9yZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZClcblxuICAgIC8vIGNhY2hlXG4gICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAgIC8vIGZyYWdtZW50IGZhY3RvcnlcbiAgICB0aGlzLmZhY3RvcnkgPSBuZXcgRnJhZ21lbnRGYWN0b3J5KHRoaXMudm0sIHRoaXMuZWwpXG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuZGlmZihkYXRhKVxuICAgIHRoaXMudXBkYXRlUmVmKClcbiAgICB0aGlzLnVwZGF0ZU1vZGVsKClcbiAgfSxcblxuICAvKipcbiAgICogRGlmZiwgYmFzZWQgb24gbmV3IGRhdGEgYW5kIG9sZCBkYXRhLCBkZXRlcm1pbmUgdGhlXG4gICAqIG1pbmltdW0gYW1vdW50IG9mIERPTSBtYW5pcHVsYXRpb25zIG5lZWRlZCB0byBtYWtlIHRoZVxuICAgKiBET00gcmVmbGVjdCB0aGUgbmV3IGRhdGEgQXJyYXkuXG4gICAqXG4gICAqIFRoZSBhbGdvcml0aG0gZGlmZnMgdGhlIG5ldyBkYXRhIEFycmF5IGJ5IHN0b3JpbmcgYVxuICAgKiBoaWRkZW4gcmVmZXJlbmNlIHRvIGFuIG93bmVyIHZtIGluc3RhbmNlIG9uIHByZXZpb3VzbHlcbiAgICogc2VlbiBkYXRhLiBUaGlzIGFsbG93cyB1cyB0byBhY2hpZXZlIE8obikgd2hpY2ggaXNcbiAgICogYmV0dGVyIHRoYW4gYSBsZXZlbnNodGVpbiBkaXN0YW5jZSBiYXNlZCBhbGdvcml0aG0sXG4gICAqIHdoaWNoIGlzIE8obSAqIG4pLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhXG4gICAqL1xuXG4gIGRpZmY6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIEFycmF5IHdhcyBjb252ZXJ0ZWQgZnJvbSBhbiBPYmplY3RcbiAgICB2YXIgaXRlbSA9IGRhdGFbMF1cbiAgICB2YXIgY29udmVydGVkRnJvbU9iamVjdCA9IHRoaXMuZnJvbU9iamVjdCA9XG4gICAgICBpc09iamVjdChpdGVtKSAmJlxuICAgICAgaXRlbS5oYXNPd25Qcm9wZXJ0eSgnJGtleScpICYmXG4gICAgICBpdGVtLmhhc093blByb3BlcnR5KCckdmFsdWUnKVxuXG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5XG4gICAgdmFyIG9sZEZyYWdzID0gdGhpcy5mcmFnc1xuICAgIHZhciBmcmFncyA9IHRoaXMuZnJhZ3MgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpXG4gICAgdmFyIGFsaWFzID0gdGhpcy5hbGlhc1xuICAgIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kXG4gICAgdmFyIGluRG9jID0gXy5pbkRvYyhzdGFydClcbiAgICB2YXIgaW5pdCA9ICFvbGRGcmFnc1xuICAgIHZhciBpLCBsLCBmcmFnLCBrZXksIHZhbHVlLCBwcmltaXRpdmVcblxuICAgIC8vIEZpcnN0IHBhc3MsIGdvIHRocm91Z2ggdGhlIG5ldyBBcnJheSBhbmQgZmlsbCB1cFxuICAgIC8vIHRoZSBuZXcgZnJhZ3MgYXJyYXkuIElmIGEgcGllY2Ugb2YgZGF0YSBoYXMgYSBjYWNoZWRcbiAgICAvLyBpbnN0YW5jZSBmb3IgaXQsIHdlIHJldXNlIGl0LiBPdGhlcndpc2UgYnVpbGQgYSBuZXdcbiAgICAvLyBpbnN0YW5jZS5cbiAgICBmb3IgKGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBkYXRhW2ldXG4gICAgICBrZXkgPSBjb252ZXJ0ZWRGcm9tT2JqZWN0ID8gaXRlbS4ka2V5IDogbnVsbFxuICAgICAgdmFsdWUgPSBjb252ZXJ0ZWRGcm9tT2JqZWN0ID8gaXRlbS4kdmFsdWUgOiBpdGVtXG4gICAgICBwcmltaXRpdmUgPSAhaXNPYmplY3QodmFsdWUpXG4gICAgICBmcmFnID0gIWluaXQgJiYgdGhpcy5nZXRDYWNoZWRGcmFnKHZhbHVlLCBpLCBrZXkpXG4gICAgICBpZiAoZnJhZykgeyAvLyByZXVzYWJsZSBmcmFnbWVudFxuICAgICAgICBmcmFnLnJldXNlZCA9IHRydWVcbiAgICAgICAgLy8gdXBkYXRlICRpbmRleFxuICAgICAgICBmcmFnLnNjb3BlLiRpbmRleCA9IGlcbiAgICAgICAgLy8gdXBkYXRlICRrZXlcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIGZyYWcuc2NvcGUuJGtleSA9IGtleVxuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBpdGVyYXRvclxuICAgICAgICBpZiAoaXRlcmF0b3IpIHtcbiAgICAgICAgICBmcmFnLnNjb3BlW2l0ZXJhdG9yXSA9IGtleSAhPT0gbnVsbCA/IGtleSA6IGlcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgZGF0YSBmb3IgdHJhY2stYnksIG9iamVjdCByZXBlYXQgJlxuICAgICAgICAvLyBwcmltaXRpdmUgdmFsdWVzLlxuICAgICAgICBpZiAodHJhY2tCeUtleSB8fCBjb252ZXJ0ZWRGcm9tT2JqZWN0IHx8IHByaW1pdGl2ZSkge1xuICAgICAgICAgIGZyYWcuc2NvcGVbYWxpYXNdID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gbmV3IGlzbnRhbmNlXG4gICAgICAgIGZyYWcgPSB0aGlzLmNyZWF0ZSh2YWx1ZSwgYWxpYXMsIGksIGtleSlcbiAgICAgICAgZnJhZy5mcmVzaCA9ICFpbml0XG4gICAgICB9XG4gICAgICBmcmFnc1tpXSA9IGZyYWdcbiAgICAgIGlmIChpbml0KSB7XG4gICAgICAgIGZyYWcuYmVmb3JlKGVuZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3ZSdyZSBkb25lIGZvciB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgaWYgKGluaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNlY29uZCBwYXNzLCBnbyB0aHJvdWdoIHRoZSBvbGQgZnJhZ21lbnRzIGFuZFxuICAgIC8vIGRlc3Ryb3kgdGhvc2Ugd2hvIGFyZSBub3QgcmV1c2VkIChhbmQgcmVtb3ZlIHRoZW1cbiAgICAvLyBmcm9tIGNhY2hlKVxuICAgIHZhciByZW1vdmFsSW5kZXggPSAwXG4gICAgdmFyIHRvdGFsUmVtb3ZlZCA9IG9sZEZyYWdzLmxlbmd0aCAtIGZyYWdzLmxlbmd0aFxuICAgIGZvciAoaSA9IDAsIGwgPSBvbGRGcmFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZyYWcgPSBvbGRGcmFnc1tpXVxuICAgICAgaWYgKCFmcmFnLnJldXNlZCkge1xuICAgICAgICB0aGlzLmRlbGV0ZUNhY2hlZEZyYWcoZnJhZylcbiAgICAgICAgdGhpcy5yZW1vdmUoZnJhZywgcmVtb3ZhbEluZGV4KyssIHRvdGFsUmVtb3ZlZCwgaW5Eb2MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmluYWwgcGFzcywgbW92ZS9pbnNlcnQgbmV3IGZyYWdtZW50cyBpbnRvIHRoZVxuICAgIC8vIHJpZ2h0IHBsYWNlLlxuICAgIHZhciB0YXJnZXRQcmV2LCBwcmV2RWwsIGN1cnJlbnRQcmV2XG4gICAgdmFyIGluc2VydGlvbkluZGV4ID0gMFxuICAgIGZvciAoaSA9IDAsIGwgPSBmcmFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZyYWcgPSBmcmFnc1tpXVxuICAgICAgLy8gdGhpcyBpcyB0aGUgZnJhZyB0aGF0IHdlIHNob3VsZCBiZSBhZnRlclxuICAgICAgdGFyZ2V0UHJldiA9IGZyYWdzW2kgLSAxXVxuICAgICAgcHJldkVsID0gdGFyZ2V0UHJldlxuICAgICAgICA/IHRhcmdldFByZXYuc3RhZ2dlckNiXG4gICAgICAgICAgPyB0YXJnZXRQcmV2LnN0YWdnZXJBbmNob3JcbiAgICAgICAgICA6IHRhcmdldFByZXYuZW5kIHx8IHRhcmdldFByZXYubm9kZVxuICAgICAgICA6IHN0YXJ0XG4gICAgICBpZiAoZnJhZy5yZXVzZWQgJiYgIWZyYWcuc3RhZ2dlckNiKSB7XG4gICAgICAgIGN1cnJlbnRQcmV2ID0gZmluZFByZXZGcmFnKGZyYWcsIHN0YXJ0LCB0aGlzLmlkKVxuICAgICAgICBpZiAoY3VycmVudFByZXYgIT09IHRhcmdldFByZXYpIHtcbiAgICAgICAgICB0aGlzLm1vdmUoZnJhZywgcHJldkVsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBuZXcgaW5zdGFuY2UsIG9yIHN0aWxsIGluIHN0YWdnZXIuXG4gICAgICAgIC8vIGluc2VydCB3aXRoIHVwZGF0ZWQgc3RhZ2dlciBpbmRleC5cbiAgICAgICAgdGhpcy5pbnNlcnQoZnJhZywgaW5zZXJ0aW9uSW5kZXgrKywgcHJldkVsLCBpbkRvYylcbiAgICAgIH1cbiAgICAgIGZyYWcucmV1c2VkID0gZnJhZy5mcmVzaCA9IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJhZ21lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFsaWFzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV1cbiAgICogQHJldHVybiB7RnJhZ21lbnR9XG4gICAqL1xuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKHZhbHVlLCBhbGlhcywgaW5kZXgsIGtleSkge1xuICAgIHZhciBob3N0ID0gdGhpcy5faG9zdFxuICAgIC8vIGNyZWF0ZSBpdGVyYXRpb24gc2NvcGVcbiAgICB2YXIgcGFyZW50U2NvcGUgPSB0aGlzLl9zY29wZSB8fCB0aGlzLnZtXG4gICAgdmFyIHNjb3BlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRTY29wZSlcbiAgICAvLyByZWYgaG9sZGVyIGZvciB0aGUgc2NvcGVcbiAgICBzY29wZS4kcmVmcyA9IE9iamVjdC5jcmVhdGUocGFyZW50U2NvcGUuJHJlZnMpXG4gICAgc2NvcGUuJGVscyA9IE9iamVjdC5jcmVhdGUocGFyZW50U2NvcGUuJGVscylcbiAgICAvLyBtYWtlIHN1cmUgcG9pbnQgJHBhcmVudCB0byBwYXJlbnQgc2NvcGVcbiAgICBzY29wZS4kcGFyZW50ID0gcGFyZW50U2NvcGVcbiAgICAvLyBmb3IgdHdvLXdheSBiaW5kaW5nIG9uIGFsaWFzXG4gICAgc2NvcGUuJGZvckNvbnRleHQgPSB0aGlzXG4gICAgLy8gZGVmaW5lIHNjb3BlIHByb3BlcnRpZXNcbiAgICBfLmRlZmluZVJlYWN0aXZlKHNjb3BlLCBhbGlhcywgdmFsdWUpXG4gICAgXy5kZWZpbmVSZWFjdGl2ZShzY29wZSwgJyRpbmRleCcsIGluZGV4KVxuICAgIGlmIChrZXkpIHtcbiAgICAgIF8uZGVmaW5lUmVhY3RpdmUoc2NvcGUsICcka2V5Jywga2V5KVxuICAgIH0gZWxzZSBpZiAoc2NvcGUuJGtleSkge1xuICAgICAgLy8gYXZvaWQgYWNjaWRlbnRhbCBmYWxsYmFja1xuICAgICAgXy5kZWZpbmUoc2NvcGUsICcka2V5JywgbnVsbClcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlcmF0b3IpIHtcbiAgICAgIF8uZGVmaW5lUmVhY3RpdmUoc2NvcGUsIHRoaXMuaXRlcmF0b3IsIGtleSAhPT0gbnVsbCA/IGtleSA6IGluZGV4KVxuICAgIH1cbiAgICB2YXIgZnJhZyA9IHRoaXMuZmFjdG9yeS5jcmVhdGUoaG9zdCwgc2NvcGUsIHRoaXMuX2ZyYWcpXG4gICAgZnJhZy5mb3JJZCA9IHRoaXMuaWRcbiAgICB0aGlzLmNhY2hlRnJhZyh2YWx1ZSwgZnJhZywgaW5kZXgsIGtleSlcbiAgICByZXR1cm4gZnJhZ1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHYtcmVmIG9uIG93bmVyIHZtLlxuICAgKi9cblxuICB1cGRhdGVSZWY6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5kZXNjcmlwdG9yLnJlZlxuICAgIGlmICghcmVmKSByZXR1cm5cbiAgICB2YXIgaGFzaCA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLnZtKS4kcmVmc1xuICAgIHZhciByZWZzXG4gICAgaWYgKCF0aGlzLmZyb21PYmplY3QpIHtcbiAgICAgIHJlZnMgPSB0aGlzLmZyYWdzLm1hcChmaW5kVm1Gcm9tRnJhZylcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmcyA9IHt9XG4gICAgICB0aGlzLmZyYWdzLmZvckVhY2goZnVuY3Rpb24gKGZyYWcpIHtcbiAgICAgICAgcmVmc1tmcmFnLnNjb3BlLiRrZXldID0gZmluZFZtRnJvbUZyYWcoZnJhZylcbiAgICAgIH0pXG4gICAgfVxuICAgIGhhc2hbcmVmXSA9IHJlZnNcbiAgfSxcblxuICAvKipcbiAgICogRm9yIG9wdGlvbiBsaXN0cywgdXBkYXRlIHRoZSBjb250YWluaW5nIHYtbW9kZWwgb25cbiAgICogcGFyZW50IDxzZWxlY3Q+LlxuICAgKi9cblxuICB1cGRhdGVNb2RlbDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzT3B0aW9uKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5zdGFydC5wYXJlbnROb2RlXG4gICAgICB2YXIgbW9kZWwgPSBwYXJlbnQgJiYgcGFyZW50Ll9fdl9tb2RlbFxuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG1vZGVsLmZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCBhIGZyYWdtZW50LiBIYW5kbGVzIHN0YWdnZXJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Tm9kZX0gcHJldkVsXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5Eb2NcbiAgICovXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiAoZnJhZywgaW5kZXgsIHByZXZFbCwgaW5Eb2MpIHtcbiAgICBpZiAoZnJhZy5zdGFnZ2VyQ2IpIHtcbiAgICAgIGZyYWcuc3RhZ2dlckNiLmNhbmNlbCgpXG4gICAgICBmcmFnLnN0YWdnZXJDYiA9IG51bGxcbiAgICB9XG4gICAgdmFyIHN0YWdnZXJBbW91bnQgPSB0aGlzLmdldFN0YWdnZXIoZnJhZywgaW5kZXgsIG51bGwsICdlbnRlcicpXG4gICAgaWYgKGluRG9jICYmIHN0YWdnZXJBbW91bnQpIHtcbiAgICAgIC8vIGNyZWF0ZSBhbiBhbmNob3IgYW5kIGluc2VydCBpdCBzeW5jaHJvbm91c2x5LFxuICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGUgY29ycmVjdCBvcmRlciB3aXRob3V0XG4gICAgICAvLyB3b3JyeWluZyBhYm91dCBzb21lIGVsZW1lbnRzIG5vdCBpbnNlcnRlZCB5ZXRcbiAgICAgIHZhciBhbmNob3IgPSBmcmFnLnN0YWdnZXJBbmNob3JcbiAgICAgIGlmICghYW5jaG9yKSB7XG4gICAgICAgIGFuY2hvciA9IGZyYWcuc3RhZ2dlckFuY2hvciA9IF8uY3JlYXRlQW5jaG9yKCdzdGFnZ2VyLWFuY2hvcicpXG4gICAgICAgIGFuY2hvci5fX3ZmcmFnX18gPSBmcmFnXG4gICAgICB9XG4gICAgICBfLmFmdGVyKGFuY2hvciwgcHJldkVsKVxuICAgICAgdmFyIG9wID0gZnJhZy5zdGFnZ2VyQ2IgPSBfLmNhbmNlbGxhYmxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnJhZy5zdGFnZ2VyQ2IgPSBudWxsXG4gICAgICAgIGZyYWcuYmVmb3JlKGFuY2hvcilcbiAgICAgICAgXy5yZW1vdmUoYW5jaG9yKVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQob3AsIHN0YWdnZXJBbW91bnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYWcuYmVmb3JlKHByZXZFbC5uZXh0U2libGluZylcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZyYWdtZW50LiBIYW5kbGVzIHN0YWdnZXJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluRG9jXG4gICAqL1xuXG4gIHJlbW92ZTogZnVuY3Rpb24gKGZyYWcsIGluZGV4LCB0b3RhbCwgaW5Eb2MpIHtcbiAgICBpZiAoZnJhZy5zdGFnZ2VyQ2IpIHtcbiAgICAgIGZyYWcuc3RhZ2dlckNiLmNhbmNlbCgpXG4gICAgICBmcmFnLnN0YWdnZXJDYiA9IG51bGxcbiAgICAgIC8vIGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgc2FtZSBmcmFnIHRvIGJlIHJlbW92ZWRcbiAgICAgIC8vIHR3aWNlLCBzbyBpZiB3ZSBoYXZlIGEgcGVuZGluZyBzdGFnZ2VyIGNhbGxiYWNrLFxuICAgICAgLy8gaXQgbWVhbnMgdGhpcyBmcmFnIGlzIHF1ZXVlZCBmb3IgZW50ZXIgYnV0IHJlbW92ZWRcbiAgICAgIC8vIGJlZm9yZSBpdHMgdHJhbnNpdGlvbiBzdGFydGVkLiBTaW5jZSBpdCBpcyBhbHJlYWR5XG4gICAgICAvLyBkZXN0cm95ZWQsIHdlIGNhbiBqdXN0IGxlYXZlIGl0IGluIGRldGFjaGVkIHN0YXRlLlxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBzdGFnZ2VyQW1vdW50ID0gdGhpcy5nZXRTdGFnZ2VyKGZyYWcsIGluZGV4LCB0b3RhbCwgJ2xlYXZlJylcbiAgICBpZiAoaW5Eb2MgJiYgc3RhZ2dlckFtb3VudCkge1xuICAgICAgdmFyIG9wID0gZnJhZy5zdGFnZ2VyQ2IgPSBfLmNhbmNlbGxhYmxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnJhZy5zdGFnZ2VyQ2IgPSBudWxsXG4gICAgICAgIGZyYWcucmVtb3ZlKClcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KG9wLCBzdGFnZ2VyQW1vdW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnLnJlbW92ZSgpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNb3ZlIGEgZnJhZ21lbnQgdG8gYSBuZXcgcG9zaXRpb24uXG4gICAqIEZvcmNlIG5vIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOb2RlfSBwcmV2RWxcbiAgICovXG5cbiAgbW92ZTogZnVuY3Rpb24gKGZyYWcsIHByZXZFbCkge1xuICAgIGZyYWcuYmVmb3JlKHByZXZFbC5uZXh0U2libGluZywgZmFsc2UpXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhY2hlIGEgZnJhZ21lbnQgdXNpbmcgdHJhY2stYnkgb3IgdGhlIG9iamVjdCBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldXG4gICAqL1xuXG4gIGNhY2hlRnJhZzogZnVuY3Rpb24gKHZhbHVlLCBmcmFnLCBpbmRleCwga2V5KSB7XG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZVxuICAgIHZhciBwcmltaXRpdmUgPSAhaXNPYmplY3QodmFsdWUpXG4gICAgdmFyIGlkXG4gICAgaWYgKGtleSB8fCB0cmFja0J5S2V5IHx8IHByaW1pdGl2ZSkge1xuICAgICAgaWQgPSB0cmFja0J5S2V5XG4gICAgICAgID8gdHJhY2tCeUtleSA9PT0gJyRpbmRleCdcbiAgICAgICAgICA/IGluZGV4XG4gICAgICAgICAgOiB2YWx1ZVt0cmFja0J5S2V5XVxuICAgICAgICA6IChrZXkgfHwgdmFsdWUpXG4gICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICBjYWNoZVtpZF0gPSBmcmFnXG4gICAgICB9IGVsc2UgaWYgKHRyYWNrQnlLZXkgIT09ICckaW5kZXgnKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgdGhpcy53YXJuRHVwbGljYXRlKHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IHRoaXMuaWRcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgaWYgKHZhbHVlW2lkXSA9PT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlW2lkXSA9IGZyYWdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgdGhpcy53YXJuRHVwbGljYXRlKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfLmRlZmluZSh2YWx1ZSwgaWQsIGZyYWcpXG4gICAgICB9XG4gICAgfVxuICAgIGZyYWcucmF3ID0gdmFsdWVcbiAgfSxcblxuICAvKipcbiAgICogR2V0IGEgY2FjaGVkIGZyYWdtZW50IGZyb20gdGhlIHZhbHVlL2luZGV4L2tleVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAqIEByZXR1cm4ge0ZyYWdtZW50fVxuICAgKi9cblxuICBnZXRDYWNoZWRGcmFnOiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBrZXkpIHtcbiAgICB2YXIgdHJhY2tCeUtleSA9IHRoaXMucGFyYW1zLnRyYWNrQnlcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KHZhbHVlKVxuICAgIHZhciBmcmFnXG4gICAgaWYgKGtleSB8fCB0cmFja0J5S2V5IHx8IHByaW1pdGl2ZSkge1xuICAgICAgdmFyIGlkID0gdHJhY2tCeUtleVxuICAgICAgICA/IHRyYWNrQnlLZXkgPT09ICckaW5kZXgnXG4gICAgICAgICAgPyBpbmRleFxuICAgICAgICAgIDogdmFsdWVbdHJhY2tCeUtleV1cbiAgICAgICAgOiAoa2V5IHx8IHZhbHVlKVxuICAgICAgZnJhZyA9IHRoaXMuY2FjaGVbaWRdXG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYWcgPSB2YWx1ZVt0aGlzLmlkXVxuICAgIH1cbiAgICBpZiAoZnJhZyAmJiAoZnJhZy5yZXVzZWQgfHwgZnJhZy5mcmVzaCkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHRoaXMud2FybkR1cGxpY2F0ZSh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdcbiAgfSxcblxuICAvKipcbiAgICogRGVsZXRlIGEgZnJhZ21lbnQgZnJvbSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKi9cblxuICBkZWxldGVDYWNoZWRGcmFnOiBmdW5jdGlvbiAoZnJhZykge1xuICAgIHZhciB2YWx1ZSA9IGZyYWcucmF3XG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5XG4gICAgdmFyIHNjb3BlID0gZnJhZy5zY29wZVxuICAgIHZhciBpbmRleCA9IHNjb3BlLiRpbmRleFxuICAgIC8vIGZpeCAjOTQ4OiBhdm9pZCBhY2NpZGVudGFsbHkgZmFsbCB0aHJvdWdoIHRvXG4gICAgLy8gYSBwYXJlbnQgcmVwZWF0ZXIgd2hpY2ggaGFwcGVucyB0byBoYXZlICRrZXkuXG4gICAgdmFyIGtleSA9IHNjb3BlLmhhc093blByb3BlcnR5KCcka2V5JykgJiYgc2NvcGUuJGtleVxuICAgIHZhciBwcmltaXRpdmUgPSAhaXNPYmplY3QodmFsdWUpXG4gICAgaWYgKHRyYWNrQnlLZXkgfHwga2V5IHx8IHByaW1pdGl2ZSkge1xuICAgICAgdmFyIGlkID0gdHJhY2tCeUtleVxuICAgICAgICA/IHRyYWNrQnlLZXkgPT09ICckaW5kZXgnXG4gICAgICAgICAgPyBpbmRleFxuICAgICAgICAgIDogdmFsdWVbdHJhY2tCeUtleV1cbiAgICAgICAgOiAoa2V5IHx8IHZhbHVlKVxuICAgICAgdGhpcy5jYWNoZVtpZF0gPSBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlW3RoaXMuaWRdID0gbnVsbFxuICAgICAgZnJhZy5yYXcgPSBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0YWdnZXIgYW1vdW50IGZvciBhbiBpbnNlcnRpb24vcmVtb3ZhbC5cbiAgICpcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqL1xuXG4gIGdldFN0YWdnZXI6IGZ1bmN0aW9uIChmcmFnLCBpbmRleCwgdG90YWwsIHR5cGUpIHtcbiAgICB0eXBlID0gdHlwZSArICdTdGFnZ2VyJ1xuICAgIHZhciB0cmFucyA9IGZyYWcubm9kZS5fX3ZfdHJhbnNcbiAgICB2YXIgaG9va3MgPSB0cmFucyAmJiB0cmFucy5ob29rc1xuICAgIHZhciBob29rID0gaG9va3MgJiYgKGhvb2tzW3R5cGVdIHx8IGhvb2tzLnN0YWdnZXIpXG4gICAgcmV0dXJuIGhvb2tcbiAgICAgID8gaG9vay5jYWxsKGZyYWcsIGluZGV4LCB0b3RhbClcbiAgICAgIDogaW5kZXggKiBwYXJzZUludCh0aGlzLnBhcmFtc1t0eXBlXSB8fCB0aGlzLnBhcmFtcy5zdGFnZ2VyLCAxMClcbiAgfSxcblxuICAvKipcbiAgICogUHJlLXByb2Nlc3MgdGhlIHZhbHVlIGJlZm9yZSBwaXBpbmcgaXQgdGhyb3VnaCB0aGVcbiAgICogZmlsdGVycy4gVGhpcyBpcyBwYXNzZWQgdG8gYW5kIGNhbGxlZCBieSB0aGUgd2F0Y2hlci5cbiAgICovXG5cbiAgX3ByZVByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHJlZ2FyZGxlc3Mgb2YgdHlwZSwgc3RvcmUgdGhlIHVuLWZpbHRlcmVkIHJhdyB2YWx1ZS5cbiAgICB0aGlzLnJhd1ZhbHVlID0gdmFsdWVcbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcblxuICAvKipcbiAgICogUG9zdC1wcm9jZXNzIHRoZSB2YWx1ZSBhZnRlciBpdCBoYXMgYmVlbiBwaXBlZCB0aHJvdWdoXG4gICAqIHRoZSBmaWx0ZXJzLiBUaGlzIGlzIHBhc3NlZCB0byBhbmQgY2FsbGVkIGJ5IHRoZSB3YXRjaGVyLlxuICAgKlxuICAgKiBJdCBpcyBuZWNlc3NhcnkgZm9yIHRoaXMgdG8gYmUgY2FsbGVkIGR1cmluZyB0aGVcbiAgICogd2F0aGNlcidzIGRlcGVuZGVuY3kgY29sbGVjdGlvbiBwaGFzZSBiZWNhdXNlIHdlIHdhbnRcbiAgICogdGhlIHYtZm9yIHRvIHVwZGF0ZSB3aGVuIHRoZSBzb3VyY2UgT2JqZWN0IGlzIG11dGF0ZWQuXG4gICAqL1xuXG4gIF9wb3N0UHJvY2VzczogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoXy5pc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgLy8gY29udmVydCBwbGFpbiBvYmplY3QgdG8gYXJyYXkuXG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuICAgICAgdmFyIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgdmFyIHJlcyA9IG5ldyBBcnJheShpKVxuICAgICAgdmFyIGtleVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBrZXkgPSBrZXlzW2ldXG4gICAgICAgIHJlc1tpXSA9IHtcbiAgICAgICAgICAka2V5OiBrZXksXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVtrZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFsdWUgPSByYW5nZSh2YWx1ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZSB8fCBbXVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kZXNjcmlwdG9yLnJlZikge1xuICAgICAgKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiRyZWZzW3RoaXMuZGVzY3JpcHRvci5yZWZdID0gbnVsbFxuICAgIH1cbiAgICBpZiAodGhpcy5mcmFncykge1xuICAgICAgdmFyIGkgPSB0aGlzLmZyYWdzLmxlbmd0aFxuICAgICAgdmFyIGZyYWdcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgZnJhZyA9IHRoaXMuZnJhZ3NbaV1cbiAgICAgICAgdGhpcy5kZWxldGVDYWNoZWRGcmFnKGZyYWcpXG4gICAgICAgIGZyYWcuZGVzdHJveSgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGZpbmQgdGhlIHByZXZpb3VzIGVsZW1lbnQgdGhhdCBpcyBhIGZyYWdtZW50XG4gKiBhbmNob3IuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYSBkZXN0cm95ZWQgZnJhZydzXG4gKiBlbGVtZW50IGNvdWxkIHN0aWxsIGJlIGxpbmdlcmluZyBpbiB0aGUgRE9NIGJlZm9yZSBpdHNcbiAqIGxlYXZpbmcgdHJhbnNpdGlvbiBmaW5pc2hlcywgYnV0IGl0cyBpbnNlcnRlZCBmbGFnXG4gKiBzaG91bGQgaGF2ZSBiZWVuIHNldCB0byBmYWxzZSBzbyB3ZSBjYW4gc2tpcCB0aGVtLlxuICpcbiAqIElmIHRoaXMgaXMgYSBibG9jayByZXBlYXQsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIG9ubHlcbiAqIHJldHVybiBmcmFnIHRoYXQgaXMgYm91bmQgdG8gdGhpcyB2LWZvci4gKHNlZSAjOTI5KVxuICpcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7Q29tbWVudHxUZXh0fSBhbmNob3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gZmluZFByZXZGcmFnIChmcmFnLCBhbmNob3IsIGlkKSB7XG4gIHZhciBlbCA9IGZyYWcubm9kZS5wcmV2aW91c1NpYmxpbmdcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghZWwpIHJldHVyblxuICBmcmFnID0gZWwuX192ZnJhZ19fXG4gIHdoaWxlIChcbiAgICAoIWZyYWcgfHwgZnJhZy5mb3JJZCAhPT0gaWQgfHwgIWZyYWcuaW5zZXJ0ZWQpICYmXG4gICAgZWwgIT09IGFuY2hvclxuICApIHtcbiAgICBlbCA9IGVsLnByZXZpb3VzU2libGluZ1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghZWwpIHJldHVyblxuICAgIGZyYWcgPSBlbC5fX3ZmcmFnX19cbiAgfVxuICByZXR1cm4gZnJhZ1xufVxuXG4vKipcbiAqIEZpbmQgYSB2bSBmcm9tIGEgZnJhZ21lbnQuXG4gKlxuICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICogQHJldHVybiB7VnVlfHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBmaW5kVm1Gcm9tRnJhZyAoZnJhZykge1xuICByZXR1cm4gZnJhZy5ub2RlLl9fdnVlX18gfHwgZnJhZy5ub2RlLm5leHRTaWJsaW5nLl9fdnVlX19cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByYW5nZSBhcnJheSBmcm9tIGdpdmVuIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gcmFuZ2UgKG4pIHtcbiAgdmFyIGkgPSAtMVxuICB2YXIgcmV0ID0gbmV3IEFycmF5KG4pXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgcmV0W2ldID0gaVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMud2FybkR1cGxpY2F0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIF8ud2FybihcbiAgICAgICdEdXBsaWNhdGUgdmFsdWUgZm91bmQgaW4gdi1mb3I9XCInICsgdGhpcy5kZXNjcmlwdG9yLnJhdyArICdcIjogJyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnLiBVc2UgdHJhY2stYnk9XCIkaW5kZXhcIiBpZiAnICtcbiAgICAgICd5b3UgYXJlIGV4cGVjdGluZyBkdXBsaWNhdGUgdmFsdWVzLidcbiAgICApXG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9wYXJzZXJzL3RlbXBsYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIGEgY29tbWVudCBub2RlIG1lYW5zIHRoaXMgaXMgYSBiaW5kaW5nIGZvclxuICAgIC8vIHt7eyBpbmxpbmUgdW5lc2NhcGVkIGh0bWwgfX19XG4gICAgaWYgKHRoaXMuZWwubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgIC8vIGhvbGQgbm9kZXNcbiAgICAgIHRoaXMubm9kZXMgPSBbXVxuICAgICAgLy8gcmVwbGFjZSB0aGUgcGxhY2Vob2xkZXIgd2l0aCBwcm9wZXIgYW5jaG9yXG4gICAgICB0aGlzLmFuY2hvciA9IF8uY3JlYXRlQW5jaG9yKCd2LWh0bWwnKVxuICAgICAgXy5yZXBsYWNlKHRoaXMuZWwsIHRoaXMuYW5jaG9yKVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gXy50b1N0cmluZyh2YWx1ZSlcbiAgICBpZiAodGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5zd2FwKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHZhbHVlXG4gICAgfVxuICB9LFxuXG4gIHN3YXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHJlbW92ZSBvbGQgbm9kZXNcbiAgICB2YXIgaSA9IHRoaXMubm9kZXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgXy5yZW1vdmUodGhpcy5ub2Rlc1tpXSlcbiAgICB9XG4gICAgLy8gY29udmVydCBuZXcgdmFsdWUgdG8gYSBmcmFnbWVudFxuICAgIC8vIGRvIG5vdCBhdHRlbXB0IHRvIHJldHJpZXZlIGZyb20gaWQgc2VsZWN0b3JcbiAgICB2YXIgZnJhZyA9IHRlbXBsYXRlUGFyc2VyLnBhcnNlKHZhbHVlLCB0cnVlLCB0cnVlKVxuICAgIC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlc2Ugbm9kZXMgc28gd2UgY2FuIHJlbW92ZSBsYXRlclxuICAgIHRoaXMubm9kZXMgPSBfLnRvQXJyYXkoZnJhZy5jaGlsZE5vZGVzKVxuICAgIF8uYmVmb3JlKGZyYWcsIHRoaXMuYW5jaG9yKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIEZyYWdtZW50RmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZyYWdtZW50L2ZhY3RvcnknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcmlvcml0eTogMjAwMCxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIGlmICghZWwuX192dWVfXykge1xuICAgICAgLy8gY2hlY2sgZWxzZSBibG9ja1xuICAgICAgdmFyIG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgIGlmIChuZXh0ICYmIF8uYXR0cihuZXh0LCAndi1lbHNlJykgIT09IG51bGwpIHtcbiAgICAgICAgXy5yZW1vdmUobmV4dClcbiAgICAgICAgdGhpcy5lbHNlRmFjdG9yeSA9IG5ldyBGcmFnbWVudEZhY3RvcnkodGhpcy52bSwgbmV4dClcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIG1haW4gYmxvY2tcbiAgICAgIHRoaXMuYW5jaG9yID0gXy5jcmVhdGVBbmNob3IoJ3YtaWYnKVxuICAgICAgXy5yZXBsYWNlKGVsLCB0aGlzLmFuY2hvcilcbiAgICAgIHRoaXMuZmFjdG9yeSA9IG5ldyBGcmFnbWVudEZhY3RvcnkodGhpcy52bSwgZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAndi1pZj1cIicgKyB0aGlzLmV4cHJlc3Npb24gKyAnXCIgY2Fubm90IGJlICcgK1xuICAgICAgICAndXNlZCBvbiBhbiBpbnN0YW5jZSByb290IGVsZW1lbnQuJ1xuICAgICAgKVxuICAgICAgdGhpcy5pbnZhbGlkID0gdHJ1ZVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmludmFsaWQpIHJldHVyblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmZyYWcpIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZSgpXG4gICAgfVxuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsc2VGcmFnKSB7XG4gICAgICB0aGlzLmVsc2VGcmFnLnJlbW92ZSgpXG4gICAgICB0aGlzLmVsc2VGcmFnID0gbnVsbFxuICAgIH1cbiAgICB0aGlzLmZyYWcgPSB0aGlzLmZhY3RvcnkuY3JlYXRlKHRoaXMuX2hvc3QsIHRoaXMuX3Njb3BlLCB0aGlzLl9mcmFnKVxuICAgIHRoaXMuZnJhZy5iZWZvcmUodGhpcy5hbmNob3IpXG4gIH0sXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZnJhZykge1xuICAgICAgdGhpcy5mcmFnLnJlbW92ZSgpXG4gICAgICB0aGlzLmZyYWcgPSBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmVsc2VGYWN0b3J5ICYmICF0aGlzLmVsc2VGcmFnKSB7XG4gICAgICB0aGlzLmVsc2VGcmFnID0gdGhpcy5lbHNlRmFjdG9yeS5jcmVhdGUodGhpcy5faG9zdCwgdGhpcy5fc2NvcGUsIHRoaXMuX2ZyYWcpXG4gICAgICB0aGlzLmVsc2VGcmFnLmJlZm9yZSh0aGlzLmFuY2hvcilcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZnJhZykge1xuICAgICAgdGhpcy5mcmFnLmRlc3Ryb3koKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gdGV4dCAmIGh0bWxcbmV4cG9ydHMudGV4dCA9IHJlcXVpcmUoJy4vdGV4dCcpXG5leHBvcnRzLmh0bWwgPSByZXF1aXJlKCcuL2h0bWwnKVxuXG4vLyBsb2dpYyBjb250cm9sXG5leHBvcnRzWydmb3InXSA9IHJlcXVpcmUoJy4vZm9yJylcbmV4cG9ydHNbJ2lmJ10gPSByZXF1aXJlKCcuL2lmJylcbmV4cG9ydHMuc2hvdyA9IHJlcXVpcmUoJy4vc2hvdycpXG5cbi8vIHR3by13YXkgYmluZGluZ1xuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwnKVxuXG4vLyBldmVudCBoYW5kbGluZ1xuZXhwb3J0cy5vbiA9IHJlcXVpcmUoJy4vb24nKVxuXG4vLyBhdHRyaWJ1dGVzXG5leHBvcnRzLmJpbmQgPSByZXF1aXJlKCcuL2JpbmQnKVxuXG4vLyByZWYgJiBlbFxuZXhwb3J0cy5lbCA9IHJlcXVpcmUoJy4vZWwnKVxuZXhwb3J0cy5yZWYgPSByZXF1aXJlKCcuL3JlZicpXG5cbi8vIGNsb2FrXG5leHBvcnRzLmNsb2FrID0gcmVxdWlyZSgnLi9jbG9haycpXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGVsID0gdGhpcy5lbFxuXG4gICAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlbC5oYXNPd25Qcm9wZXJ0eSgnX3ZhbHVlJylcbiAgICAgICAgPyBlbC5fdmFsdWVcbiAgICAgICAgOiBzZWxmLnBhcmFtcy5udW1iZXJcbiAgICAgICAgICA/IF8udG9OdW1iZXIoZWwudmFsdWUpXG4gICAgICAgICAgOiBlbC52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvb2xlYW5WYWx1ZSAoKSB7XG4gICAgICB2YXIgdmFsID0gZWwuY2hlY2tlZFxuICAgICAgaWYgKHZhbCAmJiBlbC5oYXNPd25Qcm9wZXJ0eSgnX3RydWVWYWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbC5fdHJ1ZVZhbHVlXG4gICAgICB9XG4gICAgICBpZiAoIXZhbCAmJiBlbC5oYXNPd25Qcm9wZXJ0eSgnX2ZhbHNlVmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWwuX2ZhbHNlVmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1vZGVsID0gc2VsZi5fd2F0Y2hlci52YWx1ZVxuICAgICAgaWYgKF8uaXNBcnJheShtb2RlbCkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHNlbGYuZ2V0VmFsdWUoKVxuICAgICAgICBpZiAoZWwuY2hlY2tlZCkge1xuICAgICAgICAgIGlmIChfLmluZGV4T2YobW9kZWwsIHZhbCkgPCAwKSB7XG4gICAgICAgICAgICBtb2RlbC5wdXNoKHZhbClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kZWwuJHJlbW92ZSh2YWwpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuc2V0KGdldEJvb2xlYW5WYWx1ZSgpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMubGlzdGVuZXIpXG4gICAgaWYgKGVsLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kID0gdGhpcy5saXN0ZW5lclxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZWwuY2hlY2tlZCA9IF8uaW5kZXhPZih2YWx1ZSwgdGhpcy5nZXRWYWx1ZSgpKSA+IC0xXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbC5oYXNPd25Qcm9wZXJ0eSgnX3RydWVWYWx1ZScpKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSBfLmxvb3NlRXF1YWwodmFsdWUsIGVsLl90cnVlVmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gISF2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsJylcblxudmFyIGhhbmRsZXJzID0ge1xuICB0ZXh0OiByZXF1aXJlKCcuL3RleHQnKSxcbiAgcmFkaW86IHJlcXVpcmUoJy4vcmFkaW8nKSxcbiAgc2VsZWN0OiByZXF1aXJlKCcuL3NlbGVjdCcpLFxuICBjaGVja2JveDogcmVxdWlyZSgnLi9jaGVja2JveCcpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiA4MDAsXG4gIHR3b1dheTogdHJ1ZSxcbiAgaGFuZGxlcnM6IGhhbmRsZXJzLFxuICBwYXJhbXM6IFsnbGF6eScsICdudW1iZXInLCAnZGVib3VuY2UnXSxcblxuICAvKipcbiAgICogUG9zc2libGUgZWxlbWVudHM6XG4gICAqICAgPHNlbGVjdD5cbiAgICogICA8dGV4dGFyZWE+XG4gICAqICAgPGlucHV0IHR5cGU9XCIqXCI+XG4gICAqICAgICAtIHRleHRcbiAgICogICAgIC0gY2hlY2tib3hcbiAgICogICAgIC0gcmFkaW9cbiAgICogICAgIC0gbnVtYmVyXG4gICAqL1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBmcmllbmRseSB3YXJuaW5nLi4uXG4gICAgdGhpcy5jaGVja0ZpbHRlcnMoKVxuICAgIGlmICh0aGlzLmhhc1JlYWQgJiYgIXRoaXMuaGFzV3JpdGUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAnSXQgc2VlbXMgeW91IGFyZSB1c2luZyBhIHJlYWQtb25seSBmaWx0ZXIgd2l0aCAnICtcbiAgICAgICAgJ3YtbW9kZWwuIFlvdSBtaWdodCB3YW50IHRvIHVzZSBhIHR3by13YXkgZmlsdGVyICcgK1xuICAgICAgICAndG8gZW5zdXJlIGNvcnJlY3QgYmVoYXZpb3IuJ1xuICAgICAgKVxuICAgIH1cbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgdmFyIHRhZyA9IGVsLnRhZ05hbWVcbiAgICB2YXIgaGFuZGxlclxuICAgIGlmICh0YWcgPT09ICdJTlBVVCcpIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVyc1tlbC50eXBlXSB8fCBoYW5kbGVycy50ZXh0XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnMuc2VsZWN0XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVycy50ZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAndi1tb2RlbCBkb2VzIG5vdCBzdXBwb3J0IGVsZW1lbnQgdHlwZTogJyArIHRhZ1xuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsLl9fdl9tb2RlbCA9IHRoaXNcbiAgICBoYW5kbGVyLmJpbmQuY2FsbCh0aGlzKVxuICAgIHRoaXMudXBkYXRlID0gaGFuZGxlci51cGRhdGVcbiAgICB0aGlzLl91bmJpbmQgPSBoYW5kbGVyLnVuYmluZFxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayByZWFkL3dyaXRlIGZpbHRlciBzdGF0cy5cbiAgICovXG5cbiAgY2hlY2tGaWx0ZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbHRlcnMgPSB0aGlzLmZpbHRlcnNcbiAgICBpZiAoIWZpbHRlcnMpIHJldHVyblxuICAgIHZhciBpID0gZmlsdGVycy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgZmlsdGVyID0gXy5yZXNvbHZlQXNzZXQodGhpcy52bS4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBmaWx0ZXJzW2ldLm5hbWUpXG4gICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBmaWx0ZXIucmVhZCkge1xuICAgICAgICB0aGlzLmhhc1JlYWQgPSB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLndyaXRlKSB7XG4gICAgICAgIHRoaXMuaGFzV3JpdGUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWwuX192X21vZGVsID0gbnVsbFxuICAgIHRoaXMuX3VuYmluZCAmJiB0aGlzLl91bmJpbmQoKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGVsID0gdGhpcy5lbFxuXG4gICAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHZhbHVlIG92ZXJ3cml0ZSB2aWEgdi1iaW5kOnZhbHVlXG4gICAgICBpZiAoZWwuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbC5fdmFsdWVcbiAgICAgIH1cbiAgICAgIHZhciB2YWwgPSBlbC52YWx1ZVxuICAgICAgaWYgKHNlbGYucGFyYW1zLm51bWJlcikge1xuICAgICAgICB2YWwgPSBfLnRvTnVtYmVyKHZhbClcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5zZXQoc2VsZi5nZXRWYWx1ZSgpKVxuICAgIH1cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKVxuXG4gICAgaWYgKGVsLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kID0gdGhpcy5saXN0ZW5lclxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuZWwuY2hlY2tlZCA9IF8ubG9vc2VFcXVhbCh2YWx1ZSwgdGhpcy5nZXRWYWx1ZSgpKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGVsID0gdGhpcy5lbFxuXG4gICAgLy8gbWV0aG9kIHRvIGZvcmNlIHVwZGF0ZSBET00gdXNpbmcgbGF0ZXN0IHZhbHVlLlxuICAgIHRoaXMuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5fd2F0Y2hlcikge1xuICAgICAgICBzZWxmLnVwZGF0ZShzZWxmLl93YXRjaGVyLmdldCgpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYSBtdWx0aXBsZSBzZWxlY3RcbiAgICB2YXIgbXVsdGlwbGUgPSB0aGlzLm11bHRpcGxlID0gZWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpXG5cbiAgICAvLyBhdHRhY2ggbGlzdGVuZXJcbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoZWwsIG11bHRpcGxlKVxuICAgICAgdmFsdWUgPSBzZWxmLnBhcmFtcy5udW1iZXJcbiAgICAgICAgPyBfLmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgPyB2YWx1ZS5tYXAoXy50b051bWJlcilcbiAgICAgICAgICA6IF8udG9OdW1iZXIodmFsdWUpXG4gICAgICAgIDogdmFsdWVcbiAgICAgIHNlbGYuc2V0KHZhbHVlKVxuICAgIH1cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKVxuXG4gICAgLy8gaWYgaGFzIGluaXRpYWwgdmFsdWUsIHNldCBhZnRlckJpbmRcbiAgICB2YXIgaW5pdFZhbHVlID0gZ2V0VmFsdWUoZWwsIG11bHRpcGxlLCB0cnVlKVxuICAgIGlmICgobXVsdGlwbGUgJiYgaW5pdFZhbHVlLmxlbmd0aCkgfHxcbiAgICAgICAgKCFtdWx0aXBsZSAmJiBpbml0VmFsdWUgIT09IG51bGwpKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXJcbiAgICB9XG5cbiAgICAvLyBBbGwgbWFqb3IgYnJvd3NlcnMgZXhjZXB0IEZpcmVmb3ggcmVzZXRzXG4gICAgLy8gc2VsZWN0ZWRJbmRleCB3aXRoIHZhbHVlIC0xIHRvIDAgd2hlbiB0aGUgZWxlbWVudFxuICAgIC8vIGlzIGFwcGVuZGVkIHRvIGEgbmV3IHBhcmVudCwgdGhlcmVmb3JlIHdlIGhhdmUgdG9cbiAgICAvLyBmb3JjZSBhIERPTSB1cGRhdGUgd2hlbmV2ZXIgdGhhdCBoYXBwZW5zLi4uXG4gICAgdGhpcy52bS4kb24oJ2hvb2s6YXR0YWNoZWQnLCB0aGlzLmZvcmNlVXBkYXRlKVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMVxuICAgIHZhciBtdWx0aSA9IHRoaXMubXVsdGlwbGUgJiYgXy5pc0FycmF5KHZhbHVlKVxuICAgIHZhciBvcHRpb25zID0gZWwub3B0aW9uc1xuICAgIHZhciBpID0gb3B0aW9ucy5sZW5ndGhcbiAgICB2YXIgb3AsIHZhbFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIG9wID0gb3B0aW9uc1tpXVxuICAgICAgdmFsID0gb3AuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpXG4gICAgICAgID8gb3AuX3ZhbHVlXG4gICAgICAgIDogb3AudmFsdWVcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuICAgICAgb3Auc2VsZWN0ZWQgPSBtdWx0aVxuICAgICAgICA/IGluZGV4T2YodmFsdWUsIHZhbCkgPiAtMVxuICAgICAgICA6IF8ubG9vc2VFcXVhbCh2YWx1ZSwgdmFsKVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0aGlzLnZtLiRvZmYoJ2hvb2s6YXR0YWNoZWQnLCB0aGlzLmZvcmNlVXBkYXRlKVxuICB9XG59XG5cbi8qKlxuICogR2V0IHNlbGVjdCB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7U2VsZWN0RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbXVsdGlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5pdFxuICogQHJldHVybiB7QXJyYXl8Kn1cbiAqL1xuXG5mdW5jdGlvbiBnZXRWYWx1ZSAoZWwsIG11bHRpLCBpbml0KSB7XG4gIHZhciByZXMgPSBtdWx0aSA/IFtdIDogbnVsbFxuICB2YXIgb3AsIHZhbCwgc2VsZWN0ZWRcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBlbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9wID0gZWwub3B0aW9uc1tpXVxuICAgIHNlbGVjdGVkID0gaW5pdFxuICAgICAgPyBvcC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJylcbiAgICAgIDogb3Auc2VsZWN0ZWRcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHZhbCA9IG9wLmhhc093blByb3BlcnR5KCdfdmFsdWUnKVxuICAgICAgICA/IG9wLl92YWx1ZVxuICAgICAgICA6IG9wLnZhbHVlXG4gICAgICBpZiAobXVsdGkpIHtcbiAgICAgICAgcmVzLnB1c2godmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogTmF0aXZlIEFycmF5LmluZGV4T2YgdXNlcyBzdHJpY3QgZXF1YWwsIGJ1dCBpbiB0aGlzXG4gKiBjYXNlIHdlIG5lZWQgdG8gbWF0Y2ggc3RyaW5nL251bWJlcnMgd2l0aCBjdXN0b20gZXF1YWwuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmZ1bmN0aW9uIGluZGV4T2YgKGFyciwgdmFsKSB7XG4gIHZhciBpID0gYXJyLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKF8ubG9vc2VFcXVhbChhcnJbaV0sIHZhbCkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICB2YXIgaXNSYW5nZSA9IGVsLnR5cGUgPT09ICdyYW5nZSdcbiAgICB2YXIgbGF6eSA9IHRoaXMucGFyYW1zLmxhenlcbiAgICB2YXIgbnVtYmVyID0gdGhpcy5wYXJhbXMubnVtYmVyXG4gICAgdmFyIGRlYm91bmNlID0gdGhpcy5wYXJhbXMuZGVib3VuY2VcblxuICAgIC8vIGhhbmRsZSBjb21wb3NpdGlvbiBldmVudHMuXG4gICAgLy8gICBodHRwOi8vYmxvZy5ldmFueW91Lm1lLzIwMTQvMDEvMDMvY29tcG9zaXRpb24tZXZlbnQvXG4gICAgLy8gc2tpcCB0aGlzIGZvciBBbmRyb2lkIGJlY2F1c2UgaXQgaGFuZGxlcyBjb21wb3NpdGlvblxuICAgIC8vIGV2ZW50cyBxdWl0ZSBkaWZmZXJlbnRseS4gQW5kcm9pZCBkb2Vzbid0IHRyaWdnZXJcbiAgICAvLyBjb21wb3NpdGlvbiBldmVudHMgZm9yIGxhbmd1YWdlIGlucHV0IG1ldGhvZHMgZS5nLlxuICAgIC8vIENoaW5lc2UsIGJ1dCBpbnN0ZWFkIHRyaWdnZXJzIHRoZW0gZm9yIHNwZWxsaW5nXG4gICAgLy8gc3VnZ2VzdGlvbnMuLi4gKHNlZSBEaXNjdXNzaW9uLyMxNjIpXG4gICAgdmFyIGNvbXBvc2luZyA9IGZhbHNlXG4gICAgaWYgKCFfLmlzQW5kcm9pZCAmJiAhaXNSYW5nZSkge1xuICAgICAgdGhpcy5vbignY29tcG9zaXRpb25zdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcG9zaW5nID0gdHJ1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMub24oJ2NvbXBvc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wb3NpbmcgPSBmYWxzZVxuICAgICAgICAvLyBpbiBJRTExIHRoZSBcImNvbXBvc2l0aW9uZW5kXCIgZXZlbnQgZmlyZXMgQUZURVJcbiAgICAgICAgLy8gdGhlIFwiaW5wdXRcIiBldmVudCwgc28gdGhlIGlucHV0IGhhbmRsZXIgaXMgYmxvY2tlZFxuICAgICAgICAvLyBhdCB0aGUgZW5kLi4uIGhhdmUgdG8gY2FsbCBpdCBoZXJlLlxuICAgICAgICAvL1xuICAgICAgICAvLyAjMTMyNzogaW4gbGF6eSBtb2RlIHRoaXMgaXMgdW5lY2Vzc2FyeS5cbiAgICAgICAgaWYgKCFsYXp5KSB7XG4gICAgICAgICAgc2VsZi5saXN0ZW5lcigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcHJldmVudCBtZXNzaW5nIHdpdGggdGhlIGlucHV0IHdoZW4gdXNlciBpcyB0eXBpbmcsXG4gICAgLy8gYW5kIGZvcmNlIHVwZGF0ZSBvbiBibHVyLlxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlXG4gICAgaWYgKCFpc1JhbmdlKSB7XG4gICAgICB0aGlzLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5mb2N1c2VkID0gdHJ1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuZm9jdXNlZCA9IGZhbHNlXG4gICAgICAgIHNlbGYubGlzdGVuZXIoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBOb3cgYXR0YWNoIHRoZSBtYWluIGxpc3RlbmVyXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjb21wb3NpbmcpIHJldHVyblxuICAgICAgdmFyIHZhbCA9IG51bWJlciB8fCBpc1JhbmdlXG4gICAgICAgID8gXy50b051bWJlcihlbC52YWx1ZSlcbiAgICAgICAgOiBlbC52YWx1ZVxuICAgICAgc2VsZi5zZXQodmFsKVxuICAgICAgLy8gZm9yY2UgdXBkYXRlIG9uIG5leHQgdGljayB0byBhdm9pZCBsb2NrICYgc2FtZSB2YWx1ZVxuICAgICAgLy8gYWxzbyBvbmx5IHVwZGF0ZSB3aGVuIHVzZXIgaXMgbm90IHR5cGluZ1xuICAgICAgXy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLl9ib3VuZCAmJiAhc2VsZi5mb2N1c2VkKSB7XG4gICAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBhcHBseSBkZWJvdW5jZVxuICAgIGlmIChkZWJvdW5jZSkge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IF8uZGVib3VuY2UodGhpcy5saXN0ZW5lciwgZGVib3VuY2UpXG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBqUXVlcnkgZXZlbnRzLCBzaW5jZSBqUXVlcnkudHJpZ2dlcigpIGRvZXNuJ3RcbiAgICAvLyB0cmlnZ2VyIG5hdGl2ZSBldmVudHMgaW4gc29tZSBjYXNlcyBhbmQgc29tZSBwbHVnaW5zXG4gICAgLy8gcmVseSBvbiAkLnRyaWdnZXIoKVxuICAgIC8vXG4gICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgaWYgYSBsaXN0ZW5lciBpcyBhdHRhY2hlZCB1c2luZ1xuICAgIC8vIGpRdWVyeSwgaXQgaXMgYWxzbyByZW1vdmVkIHdpdGggalF1ZXJ5LCB0aGF0J3Mgd2h5XG4gICAgLy8gd2UgZG8gdGhlIGNoZWNrIGZvciBlYWNoIGRpcmVjdGl2ZSBpbnN0YW5jZSBhbmRcbiAgICAvLyBzdG9yZSB0aGF0IGNoZWNrIHJlc3VsdCBvbiBpdHNlbGYuIFRoaXMgYWxzbyBhbGxvd3NcbiAgICAvLyBlYXNpZXIgdGVzdCBjb3ZlcmFnZSBjb250cm9sIGJ5IHVuc2V0dGluZyB0aGUgZ2xvYmFsXG4gICAgLy8galF1ZXJ5IHZhcmlhYmxlIGluIHRlc3RzLlxuICAgIHRoaXMuaGFzalF1ZXJ5ID0gdHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJ1xuICAgIGlmICh0aGlzLmhhc2pRdWVyeSkge1xuICAgICAgalF1ZXJ5KGVsKS5vbignY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcbiAgICAgIGlmICghbGF6eSkge1xuICAgICAgICBqUXVlcnkoZWwpLm9uKCdpbnB1dCcsIHRoaXMubGlzdGVuZXIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMubGlzdGVuZXIpXG4gICAgICBpZiAoIWxhenkpIHtcbiAgICAgICAgdGhpcy5vbignaW5wdXQnLCB0aGlzLmxpc3RlbmVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElFOSBkb2Vzbid0IGZpcmUgaW5wdXQgZXZlbnQgb24gYmFja3NwYWNlL2RlbC9jdXRcbiAgICBpZiAoIWxhenkgJiYgXy5pc0lFOSkge1xuICAgICAgdGhpcy5vbignY3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfLm5leHRUaWNrKHNlbGYubGlzdGVuZXIpXG4gICAgICB9KVxuICAgICAgdGhpcy5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0NiB8fCBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICBzZWxmLmxpc3RlbmVyKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBzZXQgaW5pdGlhbCB2YWx1ZSBpZiBwcmVzZW50XG4gICAgaWYgKFxuICAgICAgZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpIHx8XG4gICAgICAoZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJiBlbC52YWx1ZS50cmltKCkpXG4gICAgKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXJcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmVsLnZhbHVlID0gXy50b1N0cmluZyh2YWx1ZSlcbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgaWYgKHRoaXMuaGFzalF1ZXJ5KSB7XG4gICAgICBqUXVlcnkoZWwpLm9mZignY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcbiAgICAgIGpRdWVyeShlbCkub2ZmKCdpbnB1dCcsIHRoaXMubGlzdGVuZXIpXG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxuXG4vLyBrZXlDb2RlIGFsaWFzZXNcbnZhciBrZXlDb2RlcyA9IHtcbiAgZXNjOiAyNyxcbiAgdGFiOiA5LFxuICBlbnRlcjogMTMsXG4gIHNwYWNlOiAzMixcbiAgJ2RlbGV0ZSc6IDQ2LFxuICB1cDogMzgsXG4gIGxlZnQ6IDM3LFxuICByaWdodDogMzksXG4gIGRvd246IDQwXG59XG5cbmZ1bmN0aW9uIGtleUZpbHRlciAoaGFuZGxlciwga2V5cykge1xuICB2YXIgY29kZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNvZGUgPSBrZXlDb2Rlc1trZXldXG4gICAgaWYgKCFjb2RlKSB7XG4gICAgICBjb2RlID0gcGFyc2VJbnQoa2V5LCAxMClcbiAgICB9XG4gICAgcmV0dXJuIGNvZGVcbiAgfSlcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleUhhbmRsZXIgKGUpIHtcbiAgICBpZiAoY29kZXMuaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcEZpbHRlciAoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gc3RvcEhhbmRsZXIgKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRGaWx0ZXIgKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRIYW5kbGVyIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGFjY2VwdFN0YXRlbWVudDogdHJ1ZSxcbiAgcHJpb3JpdHk6IDcwMCxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZGVhbCB3aXRoIGlmcmFtZXNcbiAgICBpZiAoXG4gICAgICB0aGlzLmVsLnRhZ05hbWUgPT09ICdJRlJBTUUnICYmXG4gICAgICB0aGlzLmFyZyAhPT0gJ2xvYWQnXG4gICAgKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMuaWZyYW1lQmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXy5vbihzZWxmLmVsLmNvbnRlbnRXaW5kb3csIHNlbGYuYXJnLCBzZWxmLmhhbmRsZXIpXG4gICAgICB9XG4gICAgICB0aGlzLm9uKCdsb2FkJywgdGhpcy5pZnJhbWVCaW5kKVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgLy8gc3R1YiBhIG5vb3AgZm9yIHYtb24gd2l0aCBubyB2YWx1ZSxcbiAgICAvLyBlLmcuIEBtb3VzZWRvd24ucHJldmVudFxuICAgIGlmICghdGhpcy5kZXNjcmlwdG9yLnJhdykge1xuICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ3Ytb246JyArIHRoaXMuYXJnICsgJz1cIicgK1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gKyAnXCIgZXhwZWN0cyBhIGZ1bmN0aW9uIHZhbHVlLCAnICtcbiAgICAgICAgJ2dvdCAnICsgaGFuZGxlclxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgbW9kaWZpZXJzXG4gICAgaWYgKHRoaXMubW9kaWZpZXJzLnN0b3ApIHtcbiAgICAgIGhhbmRsZXIgPSBzdG9wRmlsdGVyKGhhbmRsZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGlmaWVycy5wcmV2ZW50KSB7XG4gICAgICBoYW5kbGVyID0gcHJldmVudEZpbHRlcihoYW5kbGVyKVxuICAgIH1cbiAgICAvLyBrZXkgZmlsdGVyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vZGlmaWVycylcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICE9PSAnc3RvcCcgJiYga2V5ICE9PSAncHJldmVudCdcbiAgICAgIH0pXG4gICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICBoYW5kbGVyID0ga2V5RmlsdGVyKGhhbmRsZXIsIGtleXMpXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpXG4gICAgdmFyIHNjb3BlID0gdGhpcy5fc2NvcGUgfHwgdGhpcy52bVxuICAgIHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBzY29wZS4kZXZlbnQgPSBlXG4gICAgICB2YXIgcmVzID0gaGFuZGxlcihlKVxuICAgICAgc2NvcGUuJGV2ZW50ID0gbnVsbFxuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgICBpZiAodGhpcy5pZnJhbWVCaW5kKSB7XG4gICAgICB0aGlzLmlmcmFtZUJpbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBfLm9uKHRoaXMuZWwsIHRoaXMuYXJnLCB0aGlzLmhhbmRsZXIpXG4gICAgfVxuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5pZnJhbWVCaW5kXG4gICAgICA/IHRoaXMuZWwuY29udGVudFdpbmRvd1xuICAgICAgOiB0aGlzLmVsXG4gICAgaWYgKHRoaXMuaGFuZGxlcikge1xuICAgICAgXy5vZmYoZWwsIHRoaXMuYXJnLCB0aGlzLmhhbmRsZXIpXG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzZXQoKVxuICB9XG59XG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXF1aXJlKCcuLi8uLi91dGlsJykud2FybihcbiAgICAgICAgJ3YtcmVmOicgKyB0aGlzLmFyZyArICcgbXVzdCBiZSB1c2VkIG9uIGEgY2hpbGQgJyArXG4gICAgICAgICdjb21wb25lbnQuIEZvdW5kIG9uIDwnICsgdGhpcy5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAnPi4nXG4gICAgICApXG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIHRyYW5zaXRpb24gPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIGNoZWNrIGVsc2UgYmxvY2tcbiAgICB2YXIgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgaWYgKG5leHQgJiYgXy5hdHRyKG5leHQsICd2LWVsc2UnKSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5lbHNlRWwgPSBuZXh0XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5hcHBseSh0aGlzLmVsLCB2YWx1ZSlcbiAgICBpZiAodGhpcy5lbHNlRWwpIHtcbiAgICAgIHRoaXMuYXBwbHkodGhpcy5lbHNlRWwsICF2YWx1ZSlcbiAgICB9XG4gIH0sXG5cbiAgYXBwbHk6IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcbiAgICBmdW5jdGlvbiBkb25lICgpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/ICcnIDogJ25vbmUnXG4gICAgfVxuICAgIC8vIGRvIG5vdCBhcHBseSB0cmFuc2l0aW9uIGlmIG5vdCBpbiBkb2NcbiAgICBpZiAoXy5pbkRvYyhlbCkpIHtcbiAgICAgIHRyYW5zaXRpb24uYXBwbHkoZWwsIHZhbHVlID8gMSA6IC0xLCBkb25lLCB0aGlzLnZtKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb25lKClcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmF0dHIgPSB0aGlzLmVsLm5vZGVUeXBlID09PSAzXG4gICAgICA/ICdkYXRhJ1xuICAgICAgOiAndGV4dENvbnRlbnQnXG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmVsW3RoaXMuYXR0cl0gPSBfLnRvU3RyaW5nKHZhbHVlKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIFBhdGggPSByZXF1aXJlKCcuLi9wYXJzZXJzL3BhdGgnKVxudmFyIHRvQXJyYXkgPSByZXF1aXJlKCcuLi9kaXJlY3RpdmVzL3B1YmxpYy9mb3InKS5fcG9zdFByb2Nlc3NcblxuLyoqXG4gKiBMaW1pdCBmaWx0ZXIgZm9yIGFycmF5c1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IChEZWNpbWFsIGV4cGVjdGVkKVxuICovXG5cbmV4cG9ydHMubGltaXRCeSA9IGZ1bmN0aW9uIChhcnIsIG4sIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPyBwYXJzZUludChvZmZzZXQsIDEwKSA6IDBcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJ1xuICAgID8gYXJyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbilcbiAgICA6IGFyclxufVxuXG4vKipcbiAqIEZpbHRlciBmaWx0ZXIgZm9yIGFycmF5c1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsaW1pdGVyXVxuICogQHBhcmFtIHtTdHJpbmd9IC4uLmRhdGFLZXlzXG4gKi9cblxuZXhwb3J0cy5maWx0ZXJCeSA9IGZ1bmN0aW9uIChhcnIsIHNlYXJjaCwgZGVsaW1pdGVyKSB7XG4gIGFyciA9IHRvQXJyYXkoYXJyKVxuICBpZiAoc2VhcmNoID09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyXG4gIH1cbiAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYXJyLmZpbHRlcihzZWFyY2gpXG4gIH1cbiAgLy8gY2FzdCB0byBsb3dlcmNhc2Ugc3RyaW5nXG4gIHNlYXJjaCA9ICgnJyArIHNlYXJjaCkudG9Mb3dlckNhc2UoKVxuICAvLyBhbGxvdyBvcHRpb25hbCBgaW5gIGRlbGltaXRlclxuICAvLyBiZWNhdXNlIHdoeSBub3RcbiAgdmFyIG4gPSBkZWxpbWl0ZXIgPT09ICdpbicgPyAzIDogMlxuICAvLyBleHRyYWN0IGFuZCBmbGF0dGVuIGtleXNcbiAgdmFyIGtleXMgPSBfLnRvQXJyYXkoYXJndW1lbnRzLCBuKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cikge1xuICAgIHJldHVybiBwcmV2LmNvbmNhdChjdXIpXG4gIH0sIFtdKVxuICB2YXIgcmVzID0gW11cbiAgdmFyIGl0ZW0sIGtleSwgdmFsLCBqXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGl0ZW0gPSBhcnJbaV1cbiAgICB2YWwgPSAoaXRlbSAmJiBpdGVtLiR2YWx1ZSkgfHwgaXRlbVxuICAgIGogPSBrZXlzLmxlbmd0aFxuICAgIGlmIChqKSB7XG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGtleSA9IGtleXNbal1cbiAgICAgICAgaWYgKChrZXkgPT09ICcka2V5JyAmJiBjb250YWlucyhpdGVtLiRrZXksIHNlYXJjaCkpIHx8XG4gICAgICAgICAgICBjb250YWlucyhQYXRoLmdldCh2YWwsIGtleSksIHNlYXJjaCkpIHtcbiAgICAgICAgICByZXMucHVzaChpdGVtKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zKGl0ZW0sIHNlYXJjaCkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBGaWx0ZXIgZmlsdGVyIGZvciBhcnJheXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc29ydEtleVxuICogQHBhcmFtIHtTdHJpbmd9IHJldmVyc2VcbiAqL1xuXG5leHBvcnRzLm9yZGVyQnkgPSBmdW5jdGlvbiAoYXJyLCBzb3J0S2V5LCByZXZlcnNlKSB7XG4gIGFyciA9IHRvQXJyYXkoYXJyKVxuICBpZiAoIXNvcnRLZXkpIHtcbiAgICByZXR1cm4gYXJyXG4gIH1cbiAgdmFyIG9yZGVyID0gKHJldmVyc2UgJiYgcmV2ZXJzZSA8IDApID8gLTEgOiAxXG4gIC8vIHNvcnQgb24gYSBjb3B5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGFycmF5XG4gIHJldHVybiBhcnIuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKHNvcnRLZXkgIT09ICcka2V5Jykge1xuICAgICAgaWYgKF8uaXNPYmplY3QoYSkgJiYgJyR2YWx1ZScgaW4gYSkgYSA9IGEuJHZhbHVlXG4gICAgICBpZiAoXy5pc09iamVjdChiKSAmJiAnJHZhbHVlJyBpbiBiKSBiID0gYi4kdmFsdWVcbiAgICB9XG4gICAgYSA9IF8uaXNPYmplY3QoYSkgPyBQYXRoLmdldChhLCBzb3J0S2V5KSA6IGFcbiAgICBiID0gXy5pc09iamVjdChiKSA/IFBhdGguZ2V0KGIsIHNvcnRLZXkpIDogYlxuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gb3JkZXIgOiAtb3JkZXJcbiAgfSlcbn1cblxuLyoqXG4gKiBTdHJpbmcgY29udGFpbiBoZWxwZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFxuICovXG5cbmZ1bmN0aW9uIGNvbnRhaW5zICh2YWwsIHNlYXJjaCkge1xuICB2YXIgaVxuICBpZiAoXy5pc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICBpID0ga2V5cy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoY29udGFpbnModmFsW2tleXNbaV1dLCBzZWFyY2gpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKF8uaXNBcnJheSh2YWwpKSB7XG4gICAgaSA9IHZhbC5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoY29udGFpbnModmFsW2ldLCBzZWFyY2gpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTFcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxuLyoqXG4gKiBTdHJpbmdpZnkgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGVudFxuICovXG5cbmV4cG9ydHMuanNvbiA9IHtcbiAgcmVhZDogZnVuY3Rpb24gKHZhbHVlLCBpbmRlbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgPyB2YWx1ZVxuICAgICAgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgTnVtYmVyKGluZGVudCkgfHwgMilcbiAgfSxcbiAgd3JpdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAnYWJjJyA9PiAnQWJjJ1xuICovXG5cbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSByZXR1cm4gJydcbiAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG59XG5cbi8qKlxuICogJ2FiYycgPT4gJ0FCQydcbiAqL1xuXG5leHBvcnRzLnVwcGVyY2FzZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIHx8IHZhbHVlID09PSAwKVxuICAgID8gdmFsdWUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpXG4gICAgOiAnJ1xufVxuXG4vKipcbiAqICdBYkMnID0+ICdhYmMnXG4gKi9cblxuZXhwb3J0cy5sb3dlcmNhc2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMClcbiAgICA/IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxuICAgIDogJydcbn1cblxuLyoqXG4gKiAxMjM0NSA9PiAkMTIsMzQ1LjAwXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNpZ25cbiAqL1xuXG52YXIgZGlnaXRzUkUgPSAvKFxcZHszfSkoPz1cXGQpL2dcbmV4cG9ydHMuY3VycmVuY3kgPSBmdW5jdGlvbiAodmFsdWUsIGN1cnJlbmN5KSB7XG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkgfHwgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkpIHJldHVybiAnJ1xuICBjdXJyZW5jeSA9IGN1cnJlbmN5ICE9IG51bGwgPyBjdXJyZW5jeSA6ICckJ1xuICB2YXIgc3RyaW5naWZpZWQgPSBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKVxuICB2YXIgX2ludCA9IHN0cmluZ2lmaWVkLnNsaWNlKDAsIC0zKVxuICB2YXIgaSA9IF9pbnQubGVuZ3RoICUgM1xuICB2YXIgaGVhZCA9IGkgPiAwXG4gICAgPyAoX2ludC5zbGljZSgwLCBpKSArIChfaW50Lmxlbmd0aCA+IDMgPyAnLCcgOiAnJykpXG4gICAgOiAnJ1xuICB2YXIgX2Zsb2F0ID0gc3RyaW5naWZpZWQuc2xpY2UoLTMpXG4gIHZhciBzaWduID0gdmFsdWUgPCAwID8gJy0nIDogJydcbiAgcmV0dXJuIGN1cnJlbmN5ICsgc2lnbiArIGhlYWQgK1xuICAgIF9pbnQuc2xpY2UoaSkucmVwbGFjZShkaWdpdHNSRSwgJyQxLCcpICtcbiAgICBfZmxvYXRcbn1cblxuLyoqXG4gKiAnaXRlbScgPT4gJ2l0ZW1zJ1xuICpcbiAqIEBwYXJhbXNcbiAqICBhbiBhcnJheSBvZiBzdHJpbmdzIGNvcnJlc3BvbmRpbmcgdG9cbiAqICB0aGUgc2luZ2xlLCBkb3VibGUsIHRyaXBsZSAuLi4gZm9ybXMgb2YgdGhlIHdvcmQgdG9cbiAqICBiZSBwbHVyYWxpemVkLiBXaGVuIHRoZSBudW1iZXIgdG8gYmUgcGx1cmFsaXplZFxuICogIGV4Y2VlZHMgdGhlIGxlbmd0aCBvZiB0aGUgYXJncywgaXQgd2lsbCB1c2UgdGhlIGxhc3RcbiAqICBlbnRyeSBpbiB0aGUgYXJyYXkuXG4gKlxuICogIGUuZy4gWydzaW5nbGUnLCAnZG91YmxlJywgJ3RyaXBsZScsICdtdWx0aXBsZSddXG4gKi9cblxuZXhwb3J0cy5wbHVyYWxpemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIGFyZ3MgPSBfLnRvQXJyYXkoYXJndW1lbnRzLCAxKVxuICByZXR1cm4gYXJncy5sZW5ndGggPiAxXG4gICAgPyAoYXJnc1t2YWx1ZSAlIDEwIC0gMV0gfHwgYXJnc1thcmdzLmxlbmd0aCAtIDFdKVxuICAgIDogKGFyZ3NbMF0gKyAodmFsdWUgPT09IDEgPyAnJyA6ICdzJykpXG59XG5cbi8qKlxuICogRGVib3VuY2UgYSBoYW5kbGVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSA9IDMwMFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5kZWJvdW5jZSA9IGZ1bmN0aW9uIChoYW5kbGVyLCBkZWxheSkge1xuICBpZiAoIWhhbmRsZXIpIHJldHVyblxuICBpZiAoIWRlbGF5KSB7XG4gICAgZGVsYXkgPSAzMDBcbiAgfVxuICByZXR1cm4gXy5kZWJvdW5jZShoYW5kbGVyLCBkZWxheSlcbn1cblxuLyoqXG4gKiBJbnN0YWxsIHNwZWNpYWwgYXJyYXkgZmlsdGVyc1xuICovXG5cbl8uZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vYXJyYXktZmlsdGVycycpKVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcbnZhciB0ZW1wbGF0ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGVtcGxhdGUnKVxudmFyIEZyYWdtZW50ID0gcmVxdWlyZSgnLi9mcmFnbWVudCcpXG52YXIgQ2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpXG52YXIgbGlua2VyQ2FjaGUgPSBuZXcgQ2FjaGUoNTAwMClcblxuLyoqXG4gKiBBIGZhY3RvcnkgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIGFcbiAqIGZyYWdtZW50LiBDYWNoZXMgdGhlIGNvbXBpbGVkIGxpbmtlciBpZiBwb3NzaWJsZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd9IGVsXG4gKi9cblxuZnVuY3Rpb24gRnJhZ21lbnRGYWN0b3J5ICh2bSwgZWwpIHtcbiAgdGhpcy52bSA9IHZtXG4gIHZhciB0ZW1wbGF0ZVxuICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnXG4gIGlmIChpc1N0cmluZyB8fCBfLmlzVGVtcGxhdGUoZWwpKSB7XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZVBhcnNlci5wYXJzZShlbCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIHRlbXBsYXRlLmFwcGVuZENoaWxkKGVsKVxuICB9XG4gIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAvLyBsaW5rZXIgY2FuIGJlIGNhY2hlZCwgYnV0IG9ubHkgZm9yIGNvbXBvbmVudHNcbiAgdmFyIGxpbmtlclxuICB2YXIgY2lkID0gdm0uY29uc3RydWN0b3IuY2lkXG4gIGlmIChjaWQgPiAwKSB7XG4gICAgdmFyIGNhY2hlSWQgPSBjaWQgKyAoaXNTdHJpbmcgPyBlbCA6IGVsLm91dGVySFRNTClcbiAgICBsaW5rZXIgPSBsaW5rZXJDYWNoZS5nZXQoY2FjaGVJZClcbiAgICBpZiAoIWxpbmtlcikge1xuICAgICAgbGlua2VyID0gY29tcGlsZXIuY29tcGlsZSh0ZW1wbGF0ZSwgdm0uJG9wdGlvbnMsIHRydWUpXG4gICAgICBsaW5rZXJDYWNoZS5wdXQoY2FjaGVJZCwgbGlua2VyKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsaW5rZXIgPSBjb21waWxlci5jb21waWxlKHRlbXBsYXRlLCB2bS4kb3B0aW9ucywgdHJ1ZSlcbiAgfVxuICB0aGlzLmxpbmtlciA9IGxpbmtlclxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGZyYWdtZW50IGluc3RhbmNlIHdpdGggZ2l2ZW4gaG9zdCBhbmQgc2NvcGUuXG4gKlxuICogQHBhcmFtIHtWdWV9IGhvc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHBhcmFtIHtGcmFnbWVudH0gcGFyZW50RnJhZ1xuICovXG5cbkZyYWdtZW50RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGhvc3QsIHNjb3BlLCBwYXJlbnRGcmFnKSB7XG4gIHZhciBmcmFnID0gdGVtcGxhdGVQYXJzZXIuY2xvbmUodGhpcy50ZW1wbGF0ZSlcbiAgcmV0dXJuIG5ldyBGcmFnbWVudCh0aGlzLmxpbmtlciwgdGhpcy52bSwgZnJhZywgaG9zdCwgc2NvcGUsIHBhcmVudEZyYWcpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhZ21lbnRGYWN0b3J5XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHRyYW5zaXRpb24gPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uJylcblxuLyoqXG4gKiBBYnN0cmFjdGlvbiBmb3IgYSBwYXJ0aWFsbHktY29tcGlsZWQgZnJhZ21lbnQuXG4gKiBDYW4gb3B0aW9uYWxseSBjb21waWxlIGNvbnRlbnQgd2l0aCBhIGNoaWxkIHNjb3BlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpbmtlclxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7VnVlfSBbaG9zdF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gKi9cblxuZnVuY3Rpb24gRnJhZ21lbnQgKGxpbmtlciwgdm0sIGZyYWcsIGhvc3QsIHNjb3BlLCBwYXJlbnRGcmFnKSB7XG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLmNoaWxkRnJhZ3MgPSBbXVxuICB0aGlzLnZtID0gdm1cbiAgdGhpcy5zY29wZSA9IHNjb3BlXG4gIHRoaXMuaW5zZXJ0ZWQgPSBmYWxzZVxuICB0aGlzLnBhcmVudEZyYWcgPSBwYXJlbnRGcmFnXG4gIGlmIChwYXJlbnRGcmFnKSB7XG4gICAgcGFyZW50RnJhZy5jaGlsZEZyYWdzLnB1c2godGhpcylcbiAgfVxuICB0aGlzLnVubGluayA9IGxpbmtlcih2bSwgZnJhZywgaG9zdCwgc2NvcGUsIHRoaXMpXG4gIHZhciBzaW5nbGUgPSB0aGlzLnNpbmdsZSA9IGZyYWcuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgaWYgKHNpbmdsZSkge1xuICAgIHRoaXMubm9kZSA9IGZyYWcuY2hpbGROb2Rlc1swXVxuICAgIHRoaXMuYmVmb3JlID0gc2luZ2xlQmVmb3JlXG4gICAgdGhpcy5yZW1vdmUgPSBzaW5nbGVSZW1vdmVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5vZGUgPSBfLmNyZWF0ZUFuY2hvcignZnJhZ21lbnQtc3RhcnQnKVxuICAgIHRoaXMuZW5kID0gXy5jcmVhdGVBbmNob3IoJ2ZyYWdtZW50LWVuZCcpXG4gICAgdGhpcy5mcmFnID0gZnJhZ1xuICAgIF8ucHJlcGVuZCh0aGlzLm5vZGUsIGZyYWcpXG4gICAgZnJhZy5hcHBlbmRDaGlsZCh0aGlzLmVuZClcbiAgICB0aGlzLmJlZm9yZSA9IG11bHRpQmVmb3JlXG4gICAgdGhpcy5yZW1vdmUgPSBtdWx0aVJlbW92ZVxuICB9XG4gIHRoaXMubm9kZS5fX3ZmcmFnX18gPSB0aGlzXG59XG5cbi8qKlxuICogQ2FsbCBhdHRhY2gvZGV0YWNoIGZvciBhbGwgY29tcG9uZW50cyBjb250YWluZWQgd2l0aGluXG4gKiB0aGlzIGZyYWdtZW50LiBBbHNvIGRvIHNvIHJlY3Vyc2l2ZWx5IGZvciBhbGwgY2hpbGRcbiAqIGZyYWdtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gKi9cblxuRnJhZ21lbnQucHJvdG90eXBlLmNhbGxIb29rID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgdmFyIGksIGxcbiAgZm9yIChpID0gMCwgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaG9vayh0aGlzLmNoaWxkcmVuW2ldKVxuICB9XG4gIGZvciAoaSA9IDAsIGwgPSB0aGlzLmNoaWxkRnJhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5jaGlsZEZyYWdzW2ldLmNhbGxIb29rKGhvb2spXG4gIH1cbn1cblxuLyoqXG4gKiBEZXN0cm95IHRoZSBmcmFnbWVudC5cbiAqL1xuXG5GcmFnbWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucGFyZW50RnJhZykge1xuICAgIHRoaXMucGFyZW50RnJhZy5jaGlsZEZyYWdzLiRyZW1vdmUodGhpcylcbiAgfVxuICB0aGlzLnVubGluaygpXG59XG5cbi8qKlxuICogSW5zZXJ0IGZyYWdtZW50IGJlZm9yZSB0YXJnZXQsIHNpbmdsZSBub2RlIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtCb29sZWFufSB3aXRoVHJhbnNpdGlvblxuICovXG5cbmZ1bmN0aW9uIHNpbmdsZUJlZm9yZSAodGFyZ2V0LCB3aXRoVHJhbnNpdGlvbikge1xuICB0aGlzLmluc2VydGVkID0gdHJ1ZVxuICB2YXIgbWV0aG9kID0gd2l0aFRyYW5zaXRpb24gIT09IGZhbHNlXG4gICAgPyB0cmFuc2l0aW9uLmJlZm9yZVxuICAgIDogXy5iZWZvcmVcbiAgbWV0aG9kKHRoaXMubm9kZSwgdGFyZ2V0LCB0aGlzLnZtKVxuICBpZiAoXy5pbkRvYyh0aGlzLm5vZGUpKSB7XG4gICAgdGhpcy5jYWxsSG9vayhhdHRhY2gpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZnJhZ21lbnQsIHNpbmdsZSBub2RlIHZlcnNpb25cbiAqL1xuXG5mdW5jdGlvbiBzaW5nbGVSZW1vdmUgKCkge1xuICB0aGlzLmluc2VydGVkID0gZmFsc2VcbiAgdmFyIHNob3VsZENhbGxSZW1vdmUgPSBfLmluRG9jKHRoaXMubm9kZSlcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNlbGYuY2FsbEhvb2soZGVzdHJveUNoaWxkKVxuICB0cmFuc2l0aW9uLnJlbW92ZSh0aGlzLm5vZGUsIHRoaXMudm0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2hvdWxkQ2FsbFJlbW92ZSkge1xuICAgICAgc2VsZi5jYWxsSG9vayhkZXRhY2gpXG4gICAgfVxuICAgIHNlbGYuZGVzdHJveSgpXG4gIH0pXG59XG5cbi8qKlxuICogSW5zZXJ0IGZyYWdtZW50IGJlZm9yZSB0YXJnZXQsIG11bHRpLW5vZGVzIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtCb29sZWFufSB3aXRoVHJhbnNpdGlvblxuICovXG5cbmZ1bmN0aW9uIG11bHRpQmVmb3JlICh0YXJnZXQsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIHRoaXMuaW5zZXJ0ZWQgPSB0cnVlXG4gIHZhciB2bSA9IHRoaXMudm1cbiAgdmFyIG1ldGhvZCA9IHdpdGhUcmFuc2l0aW9uICE9PSBmYWxzZVxuICAgID8gdHJhbnNpdGlvbi5iZWZvcmVcbiAgICA6IF8uYmVmb3JlXG4gIF8ubWFwTm9kZVJhbmdlKHRoaXMubm9kZSwgdGhpcy5lbmQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgbWV0aG9kKG5vZGUsIHRhcmdldCwgdm0pXG4gIH0pXG4gIGlmIChfLmluRG9jKHRoaXMubm9kZSkpIHtcbiAgICB0aGlzLmNhbGxIb29rKGF0dGFjaClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBmcmFnbWVudCwgbXVsdGktbm9kZXMgdmVyc2lvblxuICovXG5cbmZ1bmN0aW9uIG11bHRpUmVtb3ZlICgpIHtcbiAgdGhpcy5pbnNlcnRlZCA9IGZhbHNlXG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2hvdWxkQ2FsbFJlbW92ZSA9IF8uaW5Eb2ModGhpcy5ub2RlKVxuICBzZWxmLmNhbGxIb29rKGRlc3Ryb3lDaGlsZClcbiAgXy5yZW1vdmVOb2RlUmFuZ2UodGhpcy5ub2RlLCB0aGlzLmVuZCwgdGhpcy52bSwgdGhpcy5mcmFnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3VsZENhbGxSZW1vdmUpIHtcbiAgICAgIHNlbGYuY2FsbEhvb2soZGV0YWNoKVxuICAgIH1cbiAgICBzZWxmLmRlc3Ryb3koKVxuICB9KVxufVxuXG4vKipcbiAqIENhbGwgYXR0YWNoIGhvb2sgZm9yIGEgVnVlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSBjaGlsZFxuICovXG5cbmZ1bmN0aW9uIGF0dGFjaCAoY2hpbGQpIHtcbiAgaWYgKCFjaGlsZC5faXNBdHRhY2hlZCkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnYXR0YWNoZWQnKVxuICB9XG59XG5cbi8qKlxuICogQ2FsbCBkZXN0cm95IGZvciBhbGwgY29udGFpbmVkIGluc3RhbmNlcyxcbiAqIHdpdGggcmVtb3ZlOmZhbHNlIGFuZCBkZWZlcjp0cnVlLlxuICogRGVmZXIgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugd2UgbmVlZCB0b1xuICoga2VlcCB0aGUgY2hpbGRyZW4gdG8gY2FsbCBkZXRhY2ggaG9va3NcbiAqIG9uIHRoZW0uXG4gKlxuICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gKi9cblxuZnVuY3Rpb24gZGVzdHJveUNoaWxkIChjaGlsZCkge1xuICBjaGlsZC4kZGVzdHJveShmYWxzZSwgdHJ1ZSlcbn1cblxuLyoqXG4gKiBDYWxsIGRldGFjaCBob29rIGZvciBhIFZ1ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAqL1xuXG5mdW5jdGlvbiBkZXRhY2ggKGNoaWxkKSB7XG4gIGlmIChjaGlsZC5faXNBdHRhY2hlZCkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnZGV0YWNoZWQnKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhZ21lbnRcbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgaW5Eb2MgPSBfLmluRG9jXG52YXIgZXZlbnRSRSA9IC9edi1vbjp8XkAvXG5cbi8qKlxuICogU2V0dXAgdGhlIGluc3RhbmNlJ3Mgb3B0aW9uIGV2ZW50cyAmIHdhdGNoZXJzLlxuICogSWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLCB3ZSBwdWxsIGl0IGZyb20gdGhlXG4gKiBpbnN0YW5jZSdzIG1ldGhvZHMgYnkgbmFtZS5cbiAqL1xuXG5leHBvcnRzLl9pbml0RXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMuX2FzQ29tcG9uZW50KSB7XG4gICAgcmVnaXN0ZXJDb21wb25lbnRFdmVudHModGhpcywgb3B0aW9ucy5lbClcbiAgfVxuICByZWdpc3RlckNhbGxiYWNrcyh0aGlzLCAnJG9uJywgb3B0aW9ucy5ldmVudHMpXG4gIHJlZ2lzdGVyQ2FsbGJhY2tzKHRoaXMsICckd2F0Y2gnLCBvcHRpb25zLndhdGNoKVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHYtb24gZXZlbnRzIG9uIGEgY2hpbGQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKi9cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRFdmVudHMgKHZtLCBlbCkge1xuICB2YXIgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzXG4gIHZhciBuYW1lLCBoYW5kbGVyXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbmFtZSA9IGF0dHJzW2ldLm5hbWVcbiAgICBpZiAoZXZlbnRSRS50ZXN0KG5hbWUpKSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKGV2ZW50UkUsICcnKVxuICAgICAgaGFuZGxlciA9ICh2bS5fc2NvcGUgfHwgdm0uX2NvbnRleHQpLiRldmFsKGF0dHJzW2ldLnZhbHVlLCB0cnVlKVxuICAgICAgdm0uJG9uKG5hbWUucmVwbGFjZShldmVudFJFKSwgaGFuZGxlcilcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBjYWxsYmFja3MgZm9yIG9wdGlvbiBldmVudHMgYW5kIHdhdGNoZXJzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGhhc2hcbiAqL1xuXG5mdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyAodm0sIGFjdGlvbiwgaGFzaCkge1xuICBpZiAoIWhhc2gpIHJldHVyblxuICB2YXIgaGFuZGxlcnMsIGtleSwgaSwgalxuICBmb3IgKGtleSBpbiBoYXNoKSB7XG4gICAgaGFuZGxlcnMgPSBoYXNoW2tleV1cbiAgICBpZiAoXy5pc0FycmF5KGhhbmRsZXJzKSkge1xuICAgICAgZm9yIChpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXJzW2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXJzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byByZWdpc3RlciBhbiBldmVudC93YXRjaCBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfE9iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICovXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyICh2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgaGFuZGxlclxuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZtW2FjdGlvbl0oa2V5LCBoYW5kbGVyLCBvcHRpb25zKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzXG4gICAgdmFyIG1ldGhvZCA9IG1ldGhvZHMgJiYgbWV0aG9kc1toYW5kbGVyXVxuICAgIGlmIChtZXRob2QpIHtcbiAgICAgIHZtW2FjdGlvbl0oa2V5LCBtZXRob2QsIG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAnVW5rbm93biBtZXRob2Q6IFwiJyArIGhhbmRsZXIgKyAnXCIgd2hlbiAnICtcbiAgICAgICAgJ3JlZ2lzdGVyaW5nIGNhbGxiYWNrIGZvciAnICsgYWN0aW9uICtcbiAgICAgICAgJzogXCInICsga2V5ICsgJ1wiLidcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGFuZGxlciAmJiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHJlZ2lzdGVyKHZtLCBhY3Rpb24sIGtleSwgaGFuZGxlci5oYW5kbGVyLCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogU2V0dXAgcmVjdXJzaXZlIGF0dGFjaGVkL2RldGFjaGVkIGNhbGxzXG4gKi9cblxuZXhwb3J0cy5faW5pdERPTUhvb2tzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLiRvbignaG9vazphdHRhY2hlZCcsIG9uQXR0YWNoZWQpXG4gIHRoaXMuJG9uKCdob29rOmRldGFjaGVkJywgb25EZXRhY2hlZClcbn1cblxuLyoqXG4gKiBDYWxsYmFjayB0byByZWN1cnNpdmVseSBjYWxsIGF0dGFjaGVkIGhvb2sgb24gY2hpbGRyZW5cbiAqL1xuXG5mdW5jdGlvbiBvbkF0dGFjaGVkICgpIHtcbiAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWVcbiAgICB0aGlzLiRjaGlsZHJlbi5mb3JFYWNoKGNhbGxBdHRhY2gpXG4gIH1cbn1cblxuLyoqXG4gKiBJdGVyYXRvciB0byBjYWxsIGF0dGFjaGVkIGhvb2tcbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAqL1xuXG5mdW5jdGlvbiBjYWxsQXR0YWNoIChjaGlsZCkge1xuICBpZiAoIWNoaWxkLl9pc0F0dGFjaGVkICYmIGluRG9jKGNoaWxkLiRlbCkpIHtcbiAgICBjaGlsZC5fY2FsbEhvb2soJ2F0dGFjaGVkJylcbiAgfVxufVxuXG4vKipcbiAqIENhbGxiYWNrIHRvIHJlY3Vyc2l2ZWx5IGNhbGwgZGV0YWNoZWQgaG9vayBvbiBjaGlsZHJlblxuICovXG5cbmZ1bmN0aW9uIG9uRGV0YWNoZWQgKCkge1xuICBpZiAodGhpcy5faXNBdHRhY2hlZCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZVxuICAgIHRoaXMuJGNoaWxkcmVuLmZvckVhY2goY2FsbERldGFjaClcbiAgfVxufVxuXG4vKipcbiAqIEl0ZXJhdG9yIHRvIGNhbGwgZGV0YWNoZWQgaG9va1xuICpcbiAqIEBwYXJhbSB7VnVlfSBjaGlsZFxuICovXG5cbmZ1bmN0aW9uIGNhbGxEZXRhY2ggKGNoaWxkKSB7XG4gIGlmIChjaGlsZC5faXNBdHRhY2hlZCAmJiAhaW5Eb2MoY2hpbGQuJGVsKSkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnZGV0YWNoZWQnKVxuICB9XG59XG5cbi8qKlxuICogVHJpZ2dlciBhbGwgaGFuZGxlcnMgZm9yIGEgaG9va1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBob29rXG4gKi9cblxuZXhwb3J0cy5fY2FsbEhvb2sgPSBmdW5jdGlvbiAoaG9vaykge1xuICB2YXIgaGFuZGxlcnMgPSB0aGlzLiRvcHRpb25zW2hvb2tdXG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBoYW5kbGVyc1tpXS5jYWxsKHRoaXMpXG4gICAgfVxuICB9XG4gIHRoaXMuJGVtaXQoJ2hvb2s6JyArIGhvb2spXG59XG4iLCJ2YXIgbWVyZ2VPcHRpb25zID0gcmVxdWlyZSgnLi4vdXRpbCcpLm1lcmdlT3B0aW9uc1xudmFyIHVpZCA9IDBcblxuLyoqXG4gKiBUaGUgbWFpbiBpbml0IHNlcXVlbmNlLiBUaGlzIGlzIGNhbGxlZCBmb3IgZXZlcnlcbiAqIGluc3RhbmNlLCBpbmNsdWRpbmcgb25lcyB0aGF0IGFyZSBjcmVhdGVkIGZyb20gZXh0ZW5kZWRcbiAqIGNvbnN0cnVjdG9ycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoaXMgb3B0aW9ucyBvYmplY3Qgc2hvdWxkIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZXN1bHQgb2YgbWVyZ2luZyBjbGFzc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5cbmV4cG9ydHMuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdGhpcy4kZWwgPSBudWxsXG4gIHRoaXMuJHBhcmVudCA9IG9wdGlvbnMucGFyZW50XG4gIHRoaXMuJHJvb3QgPSB0aGlzLiRwYXJlbnRcbiAgICA/IHRoaXMuJHBhcmVudC4kcm9vdFxuICAgIDogdGhpc1xuICB0aGlzLiRjaGlsZHJlbiA9IFtdXG4gIHRoaXMuJHJlZnMgPSB7fSAgICAgICAvLyBjaGlsZCB2bSByZWZlcmVuY2VzXG4gIHRoaXMuJGVscyA9IHt9ICAgICAgICAvLyBlbGVtZW50IHJlZmVyZW5jZXNcbiAgdGhpcy5fd2F0Y2hlcnMgPSBbXSAgIC8vIGFsbCB3YXRjaGVycyBhcyBhbiBhcnJheVxuICB0aGlzLl9kaXJlY3RpdmVzID0gW10gLy8gYWxsIGRpcmVjdGl2ZXNcblxuICAvLyBhIHVpZFxuICB0aGlzLl91aWQgPSB1aWQrK1xuXG4gIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gIHRoaXMuX2lzVnVlID0gdHJ1ZVxuXG4gIC8vIGV2ZW50cyBib29ra2VlcGluZ1xuICB0aGlzLl9ldmVudHMgPSB7fSAgICAgICAgICAgIC8vIHJlZ2lzdGVyZWQgY2FsbGJhY2tzXG4gIHRoaXMuX2V2ZW50c0NvdW50ID0ge30gICAgICAgLy8gZm9yICRicm9hZGNhc3Qgb3B0aW1pemF0aW9uXG4gIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IGZhbHNlIC8vIGZvciBldmVudCBwcm9wYWdhdGlvblxuXG4gIC8vIGZyYWdtZW50IGluc3RhbmNlIHByb3BlcnRpZXNcbiAgdGhpcy5faXNGcmFnbWVudCA9IGZhbHNlXG4gIHRoaXMuX2ZyYWdtZW50ID0gICAgICAgICAvLyBAdHlwZSB7RG9jdW1lbnRGcmFnbWVudH1cbiAgdGhpcy5fZnJhZ21lbnRTdGFydCA9ICAgIC8vIEB0eXBlIHtUZXh0fENvbW1lbnR9XG4gIHRoaXMuX2ZyYWdtZW50RW5kID0gbnVsbCAvLyBAdHlwZSB7VGV4dHxDb21tZW50fVxuXG4gIC8vIGxpZmVjeWNsZSBzdGF0ZVxuICB0aGlzLl9pc0NvbXBpbGVkID1cbiAgdGhpcy5faXNEZXN0cm95ZWQgPVxuICB0aGlzLl9pc1JlYWR5ID1cbiAgdGhpcy5faXNBdHRhY2hlZCA9XG4gIHRoaXMuX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZVxuICB0aGlzLl91bmxpbmtGbiA9IG51bGxcblxuICAvLyBjb250ZXh0OlxuICAvLyBpZiB0aGlzIGlzIGEgdHJhbnNjbHVkZWQgY29tcG9uZW50LCBjb250ZXh0XG4gIC8vIHdpbGwgYmUgdGhlIGNvbW1vbiBwYXJlbnQgdm0gb2YgdGhpcyBpbnN0YW5jZVxuICAvLyBhbmQgaXRzIGhvc3QuXG4gIHRoaXMuX2NvbnRleHQgPSBvcHRpb25zLl9jb250ZXh0IHx8IHRoaXMuJHBhcmVudFxuXG4gIC8vIHNjb3BlOlxuICAvLyBpZiB0aGlzIGlzIGluc2lkZSBhbiBpbmxpbmUgdi1mb3IsIHRoZSBzY29wZVxuICAvLyB3aWxsIGJlIHRoZSBpbnRlcm1lZGlhdGUgc2NvcGUgY3JlYXRlZCBmb3IgdGhpc1xuICAvLyByZXBlYXQgZnJhZ21lbnQuIHRoaXMgaXMgdXNlZCBmb3IgbGlua2luZyBwcm9wc1xuICAvLyBhbmQgY29udGFpbmVyIGRpcmVjdGl2ZXMuXG4gIHRoaXMuX3Njb3BlID0gb3B0aW9ucy5fc2NvcGVcblxuICAvLyBmcmFnbWVudDpcbiAgLy8gaWYgdGhpcyBpbnN0YW5jZSBpcyBjb21waWxlZCBpbnNpZGUgYSBGcmFnbWVudCwgaXRcbiAgLy8gbmVlZHMgdG8gcmVpZ3N0ZXIgaXRzZWxmIGFzIGEgY2hpbGQgb2YgdGhhdCBmcmFnbWVudFxuICAvLyBmb3IgYXR0YWNoL2RldGFjaCB0byB3b3JrIHByb3Blcmx5LlxuICB0aGlzLl9mcmFnID0gb3B0aW9ucy5fZnJhZ1xuICBpZiAodGhpcy5fZnJhZykge1xuICAgIHRoaXMuX2ZyYWcuY2hpbGRyZW4ucHVzaCh0aGlzKVxuICB9XG5cbiAgLy8gcHVzaCBzZWxmIGludG8gcGFyZW50IC8gdHJhbnNjbHVzaW9uIGhvc3RcbiAgaWYgKHRoaXMuJHBhcmVudCkge1xuICAgIHRoaXMuJHBhcmVudC4kY2hpbGRyZW4ucHVzaCh0aGlzKVxuICB9XG5cbiAgLy8gbWVyZ2Ugb3B0aW9ucy5cbiAgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5vcHRpb25zLFxuICAgIG9wdGlvbnMsXG4gICAgdGhpc1xuICApXG5cbiAgLy8gc2V0IHJlZlxuICB0aGlzLl91cGRhdGVSZWYoKVxuXG4gIC8vIGluaXRpYWxpemUgZGF0YSBhcyBlbXB0eSBvYmplY3QuXG4gIC8vIGl0IHdpbGwgYmUgZmlsbGVkIHVwIGluIF9pbml0U2NvcGUoKS5cbiAgdGhpcy5fZGF0YSA9IHt9XG5cbiAgLy8gY2FsbCBpbml0IGhvb2tcbiAgdGhpcy5fY2FsbEhvb2soJ2luaXQnKVxuXG4gIC8vIGluaXRpYWxpemUgZGF0YSBvYnNlcnZhdGlvbiBhbmQgc2NvcGUgaW5oZXJpdGFuY2UuXG4gIHRoaXMuX2luaXRTdGF0ZSgpXG5cbiAgLy8gc2V0dXAgZXZlbnQgc3lzdGVtIGFuZCBvcHRpb24gZXZlbnRzLlxuICB0aGlzLl9pbml0RXZlbnRzKClcblxuICAvLyBjYWxsIGNyZWF0ZWQgaG9va1xuICB0aGlzLl9jYWxsSG9vaygnY3JlYXRlZCcpXG5cbiAgLy8gaWYgYGVsYCBvcHRpb24gaXMgcGFzc2VkLCBzdGFydCBjb21waWxhdGlvbi5cbiAgaWYgKG9wdGlvbnMuZWwpIHtcbiAgICB0aGlzLiRtb3VudChvcHRpb25zLmVsKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIERpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2RpcmVjdGl2ZScpXG52YXIgY29tcGlsZXIgPSByZXF1aXJlKCcuLi9jb21waWxlcicpXG5cbi8qKlxuICogVXBkYXRlIHYtcmVmIGZvciBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVcbiAqL1xuXG5leHBvcnRzLl91cGRhdGVSZWYgPSBmdW5jdGlvbiAocmVtb3ZlKSB7XG4gIHZhciByZWYgPSB0aGlzLiRvcHRpb25zLl9yZWZcbiAgaWYgKHJlZikge1xuICAgIHZhciByZWZzID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMuX2NvbnRleHQpLiRyZWZzXG4gICAgaWYgKHJlbW92ZSkge1xuICAgICAgaWYgKHJlZnNbcmVmXSA9PT0gdGhpcykge1xuICAgICAgICByZWZzW3JlZl0gPSBudWxsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnNbcmVmXSA9IHRoaXNcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2NsdWRlLCBjb21waWxlIGFuZCBsaW5rIGVsZW1lbnQuXG4gKlxuICogSWYgYSBwcmUtY29tcGlsZWQgbGlua2VyIGlzIGF2YWlsYWJsZSwgdGhhdCBtZWFucyB0aGVcbiAqIHBhc3NlZCBpbiBlbGVtZW50IHdpbGwgYmUgcHJlLXRyYW5zY2x1ZGVkIGFuZCBjb21waWxlZFxuICogYXMgd2VsbCAtIGFsbCB3ZSBuZWVkIHRvIGRvIGlzIHRvIGNhbGwgdGhlIGxpbmtlci5cbiAqXG4gKiBPdGhlcndpc2Ugd2UgbmVlZCB0byBjYWxsIHRyYW5zY2x1ZGUvY29tcGlsZS9saW5rIGhlcmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuXG5leHBvcnRzLl9jb21waWxlID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9uc1xuXG4gIC8vIHRyYW5zY2x1ZGUgYW5kIGluaXQgZWxlbWVudFxuICAvLyB0cmFuc2NsdWRlIGNhbiBwb3RlbnRpYWxseSByZXBsYWNlIG9yaWdpbmFsXG4gIC8vIHNvIHdlIG5lZWQgdG8ga2VlcCByZWZlcmVuY2U7IHRoaXMgc3RlcCBhbHNvIGluamVjdHNcbiAgLy8gdGhlIHRlbXBsYXRlIGFuZCBjYWNoZXMgdGhlIG9yaWdpbmFsIGF0dHJpYnV0ZXNcbiAgLy8gb24gdGhlIGNvbnRhaW5lciBub2RlIGFuZCByZXBsYWNlciBub2RlLlxuICB2YXIgb3JpZ2luYWwgPSBlbFxuICBlbCA9IGNvbXBpbGVyLnRyYW5zY2x1ZGUoZWwsIG9wdGlvbnMpXG4gIHRoaXMuX2luaXRFbGVtZW50KGVsKVxuXG4gIC8vIHJvb3QgaXMgYWx3YXlzIGNvbXBpbGVkIHBlci1pbnN0YW5jZSwgYmVjYXVzZVxuICAvLyBjb250YWluZXIgYXR0cnMgYW5kIHByb3BzIGNhbiBiZSBkaWZmZXJlbnQgZXZlcnkgdGltZS5cbiAgdmFyIGNvbnRleHRPcHRpb25zID0gdGhpcy5fY29udGV4dCAmJiB0aGlzLl9jb250ZXh0LiRvcHRpb25zXG4gIHZhciByb290TGlua2VyID0gY29tcGlsZXIuY29tcGlsZVJvb3QoZWwsIG9wdGlvbnMsIGNvbnRleHRPcHRpb25zKVxuXG4gIC8vIGNvbXBpbGUgYW5kIGxpbmsgdGhlIHJlc3RcbiAgdmFyIGNvbnRlbnRMaW5rRm5cbiAgdmFyIGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yXG4gIC8vIGNvbXBvbmVudCBjb21waWxhdGlvbiBjYW4gYmUgY2FjaGVkXG4gIC8vIGFzIGxvbmcgYXMgaXQncyBub3QgdXNpbmcgaW5saW5lLXRlbXBsYXRlXG4gIGlmIChvcHRpb25zLl9saW5rZXJDYWNoYWJsZSkge1xuICAgIGNvbnRlbnRMaW5rRm4gPSBjdG9yLmxpbmtlclxuICAgIGlmICghY29udGVudExpbmtGbikge1xuICAgICAgY29udGVudExpbmtGbiA9IGN0b3IubGlua2VyID0gY29tcGlsZXIuY29tcGlsZShlbCwgb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICAvLyBsaW5rIHBoYXNlXG4gIC8vIG1ha2Ugc3VyZSB0byBsaW5rIHJvb3Qgd2l0aCBwcm9wIHNjb3BlIVxuICB2YXIgcm9vdFVubGlua0ZuID0gcm9vdExpbmtlcih0aGlzLCBlbCwgdGhpcy5fc2NvcGUpXG4gIHZhciBjb250ZW50VW5saW5rRm4gPSBjb250ZW50TGlua0ZuXG4gICAgPyBjb250ZW50TGlua0ZuKHRoaXMsIGVsKVxuICAgIDogY29tcGlsZXIuY29tcGlsZShlbCwgb3B0aW9ucykodGhpcywgZWwpXG5cbiAgLy8gcmVnaXN0ZXIgY29tcG9zaXRlIHVubGluayBmdW5jdGlvblxuICAvLyB0byBiZSBjYWxsZWQgZHVyaW5nIGluc3RhbmNlIGRlc3RydWN0aW9uXG4gIHRoaXMuX3VubGlua0ZuID0gZnVuY3Rpb24gKCkge1xuICAgIHJvb3RVbmxpbmtGbigpXG4gICAgLy8gcGFzc2luZyBkZXN0cm95aW5nOiB0cnVlIHRvIGF2b2lkIHNlYXJjaGluZyBhbmRcbiAgICAvLyBzcGxpY2luZyB0aGUgZGlyZWN0aXZlc1xuICAgIGNvbnRlbnRVbmxpbmtGbih0cnVlKVxuICB9XG5cbiAgLy8gZmluYWxseSByZXBsYWNlIG9yaWdpbmFsXG4gIGlmIChvcHRpb25zLnJlcGxhY2UpIHtcbiAgICBfLnJlcGxhY2Uob3JpZ2luYWwsIGVsKVxuICB9XG5cbiAgdGhpcy5faXNDb21waWxlZCA9IHRydWVcbiAgdGhpcy5fY2FsbEhvb2soJ2NvbXBpbGVkJylcbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBpbnN0YW5jZSBlbGVtZW50LiBDYWxsZWQgaW4gdGhlIHB1YmxpY1xuICogJG1vdW50KCkgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5leHBvcnRzLl9pbml0RWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAoZWwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgdGhpcy5faXNGcmFnbWVudCA9IHRydWVcbiAgICB0aGlzLiRlbCA9IHRoaXMuX2ZyYWdtZW50U3RhcnQgPSBlbC5maXJzdENoaWxkXG4gICAgdGhpcy5fZnJhZ21lbnRFbmQgPSBlbC5sYXN0Q2hpbGRcbiAgICAvLyBzZXQgcGVyc2lzdGVkIHRleHQgYW5jaG9ycyB0byBlbXB0eVxuICAgIGlmICh0aGlzLl9mcmFnbWVudFN0YXJ0Lm5vZGVUeXBlID09PSAzKSB7XG4gICAgICB0aGlzLl9mcmFnbWVudFN0YXJ0LmRhdGEgPSB0aGlzLl9mcmFnbWVudEVuZC5kYXRhID0gJydcbiAgICB9XG4gICAgdGhpcy5fZnJhZ21lbnQgPSBlbFxuICB9IGVsc2Uge1xuICAgIHRoaXMuJGVsID0gZWxcbiAgfVxuICB0aGlzLiRlbC5fX3Z1ZV9fID0gdGhpc1xuICB0aGlzLl9jYWxsSG9vaygnYmVmb3JlQ29tcGlsZScpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCBiaW5kIGEgZGlyZWN0aXZlIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBkaXJlY3RpdmUgbmFtZVxuICogQHBhcmFtIHtOb2RlfSBub2RlICAgLSB0YXJnZXQgbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IGRlc2MgLSBwYXJzZWQgZGlyZWN0aXZlIGRlc2NyaXB0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgIC0gZGlyZWN0aXZlIGRlZmluaXRpb24gb2JqZWN0XG4gKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdIC0gdHJhbnNjbHVzaW9uIGhvc3QgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSAtIHYtZm9yIHNjb3BlXG4gKiBAcGFyYW0ge0ZyYWdtZW50fSBbZnJhZ10gLSBvd25lciBmcmFnbWVudFxuICovXG5cbmV4cG9ydHMuX2JpbmREaXIgPSBmdW5jdGlvbiAoZGVzY3JpcHRvciwgbm9kZSwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgdGhpcy5fZGlyZWN0aXZlcy5wdXNoKFxuICAgIG5ldyBEaXJlY3RpdmUoZGVzY3JpcHRvciwgdGhpcywgbm9kZSwgaG9zdCwgc2NvcGUsIGZyYWcpXG4gIClcbn1cblxuLyoqXG4gKiBUZWFyZG93biBhbiBpbnN0YW5jZSwgdW5vYnNlcnZlcyB0aGUgZGF0YSwgdW5iaW5kIGFsbCB0aGVcbiAqIGRpcmVjdGl2ZXMsIHR1cm4gb2ZmIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzLCBldGMuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSByZW1vdmUgLSB3aGV0aGVyIHRvIHJlbW92ZSB0aGUgRE9NIG5vZGUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmVyQ2xlYW51cCAtIGlmIHRydWUsIGRlZmVyIGNsZWFudXAgdG9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgY2FsbGVkIGxhdGVyXG4gKi9cblxuZXhwb3J0cy5fZGVzdHJveSA9IGZ1bmN0aW9uIChyZW1vdmUsIGRlZmVyQ2xlYW51cCkge1xuICBpZiAodGhpcy5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgIGlmICghZGVmZXJDbGVhbnVwKSB7XG4gICAgICB0aGlzLl9jbGVhbnVwKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fY2FsbEhvb2soJ2JlZm9yZURlc3Ryb3knKVxuICB0aGlzLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZVxuICB2YXIgaVxuICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudC4gb25seSBuZWNlc3NhcnlcbiAgLy8gaWYgcGFyZW50IGlzIG5vdCBiZWluZyBkZXN0cm95ZWQgYXMgd2VsbC5cbiAgdmFyIHBhcmVudCA9IHRoaXMuJHBhcmVudFxuICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICBwYXJlbnQuJGNoaWxkcmVuLiRyZW1vdmUodGhpcylcbiAgICAvLyB1bnJlZ2lzdGVyIHJlZiAocmVtb3ZlOiB0cnVlKVxuICAgIHRoaXMuX3VwZGF0ZVJlZih0cnVlKVxuICB9XG4gIC8vIGRlc3Ryb3kgYWxsIGNoaWxkcmVuLlxuICBpID0gdGhpcy4kY2hpbGRyZW4ubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLiRjaGlsZHJlbltpXS4kZGVzdHJveSgpXG4gIH1cbiAgLy8gdGVhcmRvd24gcHJvcHNcbiAgaWYgKHRoaXMuX3Byb3BzVW5saW5rRm4pIHtcbiAgICB0aGlzLl9wcm9wc1VubGlua0ZuKClcbiAgfVxuICAvLyB0ZWFyZG93biBhbGwgZGlyZWN0aXZlcy4gdGhpcyBhbHNvIHRlYXJzZG93biBhbGxcbiAgLy8gZGlyZWN0aXZlLW93bmVkIHdhdGNoZXJzLlxuICBpZiAodGhpcy5fdW5saW5rRm4pIHtcbiAgICB0aGlzLl91bmxpbmtGbigpXG4gIH1cbiAgaSA9IHRoaXMuX3dhdGNoZXJzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKVxuICB9XG4gIC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gc2VsZiBvbiAkZWxcbiAgaWYgKHRoaXMuJGVsKSB7XG4gICAgdGhpcy4kZWwuX192dWVfXyA9IG51bGxcbiAgfVxuICAvLyByZW1vdmUgRE9NIGVsZW1lbnRcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChyZW1vdmUgJiYgdGhpcy4kZWwpIHtcbiAgICB0aGlzLiRyZW1vdmUoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fY2xlYW51cCgpXG4gICAgfSlcbiAgfSBlbHNlIGlmICghZGVmZXJDbGVhbnVwKSB7XG4gICAgdGhpcy5fY2xlYW51cCgpXG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCB0byBlbnN1cmUgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICogVGhpcyBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGxlYXZlIHRyYW5zaXRpb24gaWYgdGhlcmVcbiAqIGlzIGFueS5cbiAqL1xuXG5leHBvcnRzLl9jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvLyByZW1vdmUgc2VsZiBmcm9tIG93bmVyIGZyYWdtZW50XG4gIC8vIGRvIGl0IGluIGNsZWFudXAgc28gdGhhdCB3ZSBjYW4gY2FsbCAkZGVzdHJveSB3aXRoXG4gIC8vIGRlZmVyIHJpZ2h0IHdoZW4gYSBmcmFnbWVudCBpcyBhYm91dCB0byBiZSByZW1vdmVkLlxuICBpZiAodGhpcy5fZnJhZykge1xuICAgIHRoaXMuX2ZyYWcuY2hpbGRyZW4uJHJlbW92ZSh0aGlzKVxuICB9XG4gIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICBpZiAodGhpcy5fZGF0YS5fX29iX18pIHtcbiAgICB0aGlzLl9kYXRhLl9fb2JfXy5yZW1vdmVWbSh0aGlzKVxuICB9XG4gIC8vIENsZWFuIHVwIHJlZmVyZW5jZXMgdG8gcHJpdmF0ZSBwcm9wZXJ0aWVzIGFuZCBvdGhlclxuICAvLyBpbnN0YW5jZXMuIHByZXNlcnZlIHJlZmVyZW5jZSB0byBfZGF0YSBzbyB0aGF0IHByb3h5XG4gIC8vIGFjY2Vzc29ycyBzdGlsbCB3b3JrLiBUaGUgb25seSBwb3RlbnRpYWwgc2lkZSBlZmZlY3RcbiAgLy8gaGVyZSBpcyB0aGF0IG11dGF0aW5nIHRoZSBpbnN0YW5jZSBhZnRlciBpdCdzIGRlc3Ryb3llZFxuICAvLyBtYXkgYWZmZWN0IHRoZSBzdGF0ZSBvZiBvdGhlciBjb21wb25lbnRzIHRoYXQgYXJlIHN0aWxsXG4gIC8vIG9ic2VydmluZyB0aGUgc2FtZSBvYmplY3QsIGJ1dCB0aGF0IHNlZW1zIHRvIGJlIGFcbiAgLy8gcmVhc29uYWJsZSByZXNwb25zaWJpbGl0eSBmb3IgdGhlIHVzZXIgcmF0aGVyIHRoYW5cbiAgLy8gYWx3YXlzIHRocm93aW5nIGFuIGVycm9yIG9uIHRoZW0uXG4gIHRoaXMuJGVsID1cbiAgdGhpcy4kcGFyZW50ID1cbiAgdGhpcy4kcm9vdCA9XG4gIHRoaXMuJGNoaWxkcmVuID1cbiAgdGhpcy5fd2F0Y2hlcnMgPVxuICB0aGlzLl9jb250ZXh0ID1cbiAgdGhpcy5fc2NvcGUgPVxuICB0aGlzLl9kaXJlY3RpdmVzID0gbnVsbFxuICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cbiAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlXG4gIHRoaXMuX2NhbGxIb29rKCdkZXN0cm95ZWQnKVxuICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICB0aGlzLiRvZmYoKVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxuLyoqXG4gKiBBcHBseSBhIGxpc3Qgb2YgZmlsdGVyIChkZXNjcmlwdG9ycykgdG8gYSB2YWx1ZS5cbiAqIFVzaW5nIHBsYWluIGZvciBsb29wcyBoZXJlIGJlY2F1c2UgdGhpcyB3aWxsIGJlIGNhbGxlZCBpblxuICogdGhlIGdldHRlciBvZiBhbnkgd2F0Y2hlciB3aXRoIGZpbHRlcnMgc28gaXQgaXMgdmVyeVxuICogcGVyZm9ybWFuY2Ugc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Kn0gW29sZFZhbHVlXVxuICogQHBhcmFtIHtBcnJheX0gZmlsdGVyc1xuICogQHBhcmFtIHtCb29sZWFufSB3cml0ZVxuICogQHJldHVybiB7Kn1cbiAqL1xuXG5leHBvcnRzLl9hcHBseUZpbHRlcnMgPSBmdW5jdGlvbiAodmFsdWUsIG9sZFZhbHVlLCBmaWx0ZXJzLCB3cml0ZSkge1xuICB2YXIgZmlsdGVyLCBmbiwgYXJncywgYXJnLCBvZmZzZXQsIGksIGwsIGosIGtcbiAgZm9yIChpID0gMCwgbCA9IGZpbHRlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZmlsdGVyID0gZmlsdGVyc1tpXVxuICAgIGZuID0gXy5yZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBmaWx0ZXIubmFtZSlcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgXy5hc3NlcnRBc3NldChmbiwgJ2ZpbHRlcicsIGZpbHRlci5uYW1lKVxuICAgIH1cbiAgICBpZiAoIWZuKSBjb250aW51ZVxuICAgIGZuID0gd3JpdGUgPyBmbi53cml0ZSA6IChmbi5yZWFkIHx8IGZuKVxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIGNvbnRpbnVlXG4gICAgYXJncyA9IHdyaXRlID8gW3ZhbHVlLCBvbGRWYWx1ZV0gOiBbdmFsdWVdXG4gICAgb2Zmc2V0ID0gd3JpdGUgPyAyIDogMVxuICAgIGlmIChmaWx0ZXIuYXJncykge1xuICAgICAgZm9yIChqID0gMCwgayA9IGZpbHRlci5hcmdzLmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICBhcmcgPSBmaWx0ZXIuYXJnc1tqXVxuICAgICAgICBhcmdzW2ogKyBvZmZzZXRdID0gYXJnLmR5bmFtaWNcbiAgICAgICAgICA/IHRoaXMuJGdldChhcmcudmFsdWUpXG4gICAgICAgICAgOiBhcmcudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIFJlc29sdmUgYSBjb21wb25lbnQsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBjb21wb25lbnRcbiAqIGlzIGRlZmluZWQgbm9ybWFsbHkgb3IgdXNpbmcgYW4gYXN5bmMgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIFJlc29sdmVzIHN5bmNocm9ub3VzbHkgaWYgYWxyZWFkeSByZXNvbHZlZCwgb3RoZXJ3aXNlXG4gKiByZXNvbHZlcyBhc3luY2hyb25vdXNseSBhbmQgY2FjaGVzIHRoZSByZXNvbHZlZFxuICogY29uc3RydWN0b3Igb24gdGhlIGZhY3RvcnkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmV4cG9ydHMuX3Jlc29sdmVDb21wb25lbnQgPSBmdW5jdGlvbiAoaWQsIGNiKSB7XG4gIHZhciBmYWN0b3J5ID0gXy5yZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCBpZClcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBfLmFzc2VydEFzc2V0KGZhY3RvcnksICdjb21wb25lbnQnLCBpZClcbiAgfVxuICBpZiAoIWZhY3RvcnkpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvLyBhc3luYyBjb21wb25lbnQgZmFjdG9yeVxuICBpZiAoIWZhY3Rvcnkub3B0aW9ucykge1xuICAgIGlmIChmYWN0b3J5LnJlc29sdmVkKSB7XG4gICAgICAvLyBjYWNoZWRcbiAgICAgIGNiKGZhY3RvcnkucmVzb2x2ZWQpXG4gICAgfSBlbHNlIGlmIChmYWN0b3J5LnJlcXVlc3RlZCkge1xuICAgICAgLy8gcG9vbCBjYWxsYmFja3NcbiAgICAgIGZhY3RvcnkucGVuZGluZ0NhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH0gZWxzZSB7XG4gICAgICBmYWN0b3J5LnJlcXVlc3RlZCA9IHRydWVcbiAgICAgIHZhciBjYnMgPSBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MgPSBbY2JdXG4gICAgICBmYWN0b3J5KGZ1bmN0aW9uIHJlc29sdmUgKHJlcykge1xuICAgICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHJlcykpIHtcbiAgICAgICAgICByZXMgPSBfLlZ1ZS5leHRlbmQocmVzKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSByZXNcbiAgICAgICAgLy8gaW52b2tlIGNhbGxiYWNrc1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjYnNbaV0ocmVzKVxuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiByZWplY3QgKHJlYXNvbikge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50OiAnICsgaWQgKyAnLiAnICtcbiAgICAgICAgICAocmVhc29uID8gJ1xcblJlYXNvbjogJyArIHJlYXNvbiA6ICcnKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBub3JtYWwgY29tcG9uZW50XG4gICAgY2IoZmFjdG9yeSlcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcbnZhciBPYnNlcnZlciA9IHJlcXVpcmUoJy4uL29ic2VydmVyJylcbnZhciBEZXAgPSByZXF1aXJlKCcuLi9vYnNlcnZlci9kZXAnKVxudmFyIFdhdGNoZXIgPSByZXF1aXJlKCcuLi93YXRjaGVyJylcblxuLyoqXG4gKiBTZXR1cCB0aGUgc2NvcGUgb2YgYW4gaW5zdGFuY2UsIHdoaWNoIGNvbnRhaW5zOlxuICogLSBvYnNlcnZlZCBkYXRhXG4gKiAtIGNvbXB1dGVkIHByb3BlcnRpZXNcbiAqIC0gdXNlciBtZXRob2RzXG4gKiAtIG1ldGEgcHJvcGVydGllc1xuICovXG5cbmV4cG9ydHMuX2luaXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5faW5pdFByb3BzKClcbiAgdGhpcy5faW5pdE1ldGEoKVxuICB0aGlzLl9pbml0TWV0aG9kcygpXG4gIHRoaXMuX2luaXREYXRhKClcbiAgdGhpcy5faW5pdENvbXB1dGVkKClcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHByb3BzLlxuICovXG5cbmV4cG9ydHMuX2luaXRQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zXG4gIHZhciBlbCA9IG9wdGlvbnMuZWxcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wc1xuICBpZiAocHJvcHMgJiYgIWVsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnUHJvcHMgd2lsbCBub3QgYmUgY29tcGlsZWQgaWYgbm8gYGVsYCBvcHRpb24gaXMgJyArXG4gICAgICAncHJvdmlkZWQgYXQgaW5zdGFudGlhdGlvbi4nXG4gICAgKVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHN0cmluZyBzZWxlY3RvcnMgaW50byBlbGVtZW50IG5vd1xuICBlbCA9IG9wdGlvbnMuZWwgPSBfLnF1ZXJ5KGVsKVxuICB0aGlzLl9wcm9wc1VubGlua0ZuID0gZWwgJiYgZWwubm9kZVR5cGUgPT09IDEgJiYgcHJvcHNcbiAgICAvLyBwcm9wcyBtdXN0IGJlIGxpbmtlZCBpbiBwcm9wZXIgc2NvcGUgaWYgaW5zaWRlIHYtZm9yXG4gICAgPyBjb21waWxlci5jb21waWxlQW5kTGlua1Byb3BzKHRoaXMsIGVsLCBwcm9wcywgdGhpcy5fc2NvcGUpXG4gICAgOiBudWxsXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZGF0YS5cbiAqL1xuXG5leHBvcnRzLl9pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHRoaXMuX2RhdGFcbiAgdmFyIG9wdGlvbnNEYXRhRm4gPSB0aGlzLiRvcHRpb25zLmRhdGFcbiAgdmFyIG9wdGlvbnNEYXRhID0gb3B0aW9uc0RhdGFGbiAmJiBvcHRpb25zRGF0YUZuKClcbiAgaWYgKG9wdGlvbnNEYXRhKSB7XG4gICAgdGhpcy5fZGF0YSA9IG9wdGlvbnNEYXRhXG4gICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wc0RhdGEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgb3B0aW9uc0RhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgXy53YXJuKFxuICAgICAgICAgICdEYXRhIGZpZWxkIFwiJyArIHByb3AgKyAnXCIgaXMgYWxyZWFkeSBkZWZpbmVkICcgK1xuICAgICAgICAgICdhcyBhIHByb3AuIFVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC4nXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9wcm9wc1twcm9wXS5yYXcgIT09IG51bGwgfHxcbiAgICAgICAgICAhb3B0aW9uc0RhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgXy5zZXQob3B0aW9uc0RhdGEsIHByb3AsIHByb3BzRGF0YVtwcm9wXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhXG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICB2YXIgaSwga2V5XG4gIGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAga2V5ID0ga2V5c1tpXVxuICAgIHRoaXMuX3Byb3h5KGtleSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgT2JzZXJ2ZXIuY3JlYXRlKGRhdGEsIHRoaXMpXG59XG5cbi8qKlxuICogU3dhcCB0aGUgaXNudGFuY2UncyAkZGF0YS4gQ2FsbGVkIGluICRkYXRhJ3Mgc2V0dGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdEYXRhXG4gKi9cblxuZXhwb3J0cy5fc2V0RGF0YSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gIG5ld0RhdGEgPSBuZXdEYXRhIHx8IHt9XG4gIHZhciBvbGREYXRhID0gdGhpcy5fZGF0YVxuICB0aGlzLl9kYXRhID0gbmV3RGF0YVxuICB2YXIga2V5cywga2V5LCBpXG4gIC8vIHVucHJveHkga2V5cyBub3QgcHJlc2VudCBpbiBuZXcgZGF0YVxuICBrZXlzID0gT2JqZWN0LmtleXMob2xkRGF0YSlcbiAgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBrZXlzW2ldXG4gICAgaWYgKCEoa2V5IGluIG5ld0RhdGEpKSB7XG4gICAgICB0aGlzLl91bnByb3h5KGtleSlcbiAgICB9XG4gIH1cbiAgLy8gcHJveHkga2V5cyBub3QgYWxyZWFkeSBwcm94aWVkLFxuICAvLyBhbmQgdHJpZ2dlciBjaGFuZ2UgZm9yIGNoYW5nZWQgdmFsdWVzXG4gIGtleXMgPSBPYmplY3Qua2V5cyhuZXdEYXRhKVxuICBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGtleSA9IGtleXNbaV1cbiAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgLy8gbmV3IHByb3BlcnR5XG4gICAgICB0aGlzLl9wcm94eShrZXkpXG4gICAgfVxuICB9XG4gIG9sZERhdGEuX19vYl9fLnJlbW92ZVZtKHRoaXMpXG4gIE9ic2VydmVyLmNyZWF0ZShuZXdEYXRhLCB0aGlzKVxuICB0aGlzLl9kaWdlc3QoKVxufVxuXG4vKipcbiAqIFByb3h5IGEgcHJvcGVydHksIHNvIHRoYXRcbiAqIHZtLnByb3AgPT09IHZtLl9kYXRhLnByb3BcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0cy5fcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICghXy5pc1Jlc2VydmVkKGtleSkpIHtcbiAgICAvLyBuZWVkIHRvIHN0b3JlIHJlZiB0byBzZWxmIGhlcmVcbiAgICAvLyBiZWNhdXNlIHRoZXNlIGdldHRlci9zZXR0ZXJzIG1pZ2h0XG4gICAgLy8gYmUgY2FsbGVkIGJ5IGNoaWxkIHNjb3BlcyB2aWFcbiAgICAvLyBwcm90b3R5cGUgaW5oZXJpdGFuY2UuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5fZGF0YVtrZXldXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgICAgIHNlbGYuX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBVbnByb3h5IGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydHMuX3VucHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICghXy5pc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdGhpc1trZXldXG4gIH1cbn1cblxuLyoqXG4gKiBGb3JjZSB1cGRhdGUgb24gZXZlcnkgd2F0Y2hlciBpbiBzY29wZS5cbiAqL1xuXG5leHBvcnRzLl9kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5fd2F0Y2hlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5fd2F0Y2hlcnNbaV0udXBkYXRlKHRydWUpIC8vIHNoYWxsb3cgdXBkYXRlc1xuICB9XG59XG5cbi8qKlxuICogU2V0dXAgY29tcHV0ZWQgcHJvcGVydGllcy4gVGhleSBhcmUgZXNzZW50aWFsbHlcbiAqIHNwZWNpYWwgZ2V0dGVyL3NldHRlcnNcbiAqL1xuXG5mdW5jdGlvbiBub29wICgpIHt9XG5leHBvcnRzLl9pbml0Q29tcHV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21wdXRlZCA9IHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRcbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIHZhciBkZWYgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRlZi5nZXQgPSBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZiwgdGhpcylcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB0aGlzKVxuICAgICAgICAgICAgOiBfLmJpbmQodXNlckRlZi5nZXQsIHRoaXMpXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gXy5iaW5kKHVzZXJEZWYuc2V0LCB0aGlzKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvd25lciwgZ2V0dGVyLCBudWxsLCB7XG4gICAgbGF6eTogdHJ1ZVxuICB9KVxuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICB3YXRjaGVyLmV2YWx1YXRlKClcbiAgICB9XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIHdhdGNoZXIuZGVwZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFNldHVwIGluc3RhbmNlIG1ldGhvZHMuIE1ldGhvZHMgbXVzdCBiZSBib3VuZCB0byB0aGVcbiAqIGluc3RhbmNlIHNpbmNlIHRoZXkgbWlnaHQgYmUgcGFzc2VkIGRvd24gYXMgYSBwcm9wIHRvXG4gKiBjaGlsZCBjb21wb25lbnRzLlxuICovXG5cbmV4cG9ydHMuX2luaXRNZXRob2RzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWV0aG9kcyA9IHRoaXMuJG9wdGlvbnMubWV0aG9kc1xuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB0aGlzW2tleV0gPSBfLmJpbmQobWV0aG9kc1trZXldLCB0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgbWV0YSBpbmZvcm1hdGlvbiBsaWtlICRpbmRleCwgJGtleSAmICR2YWx1ZS5cbiAqL1xuXG5leHBvcnRzLl9pbml0TWV0YSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1ldGFzID0gdGhpcy4kb3B0aW9ucy5fbWV0YVxuICBpZiAobWV0YXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWV0YXMpIHtcbiAgICAgIF8uZGVmaW5lUmVhY3RpdmUodGhpcywga2V5LCBtZXRhc1trZXldKVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgXy5kZWZpbmUoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShpKVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgdmFyIG9iID0gdGhpcy5fX29iX19cbiAgICB2YXIgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbl8uZGVmaW5lKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuXy5kZWZpbmUoXG4gIGFycmF5UHJvdG8sXG4gICckcmVtb3ZlJyxcbiAgZnVuY3Rpb24gJHJlbW92ZSAoaXRlbSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIHZhciBpbmRleCA9IF8uaW5kZXhPZih0aGlzLCBpdGVtKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNZXRob2RzXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHVpZCA9IDBcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gRGVwICgpIHtcbiAgdGhpcy5pZCA9IHVpZCsrXG4gIHRoaXMuc3VicyA9IFtdXG59XG5cbi8vIHRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIHRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb25seSBvbmVcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGxcblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy4kcmVtb3ZlKHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKVxufVxuXG4vKipcbiAqIE5vdGlmeSBhbGwgc3Vic2NyaWJlcnMgb2YgYSBuZXcgdmFsdWUuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHN0YWJsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSBfLnRvQXJyYXkodGhpcy5zdWJzKVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVwXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIERlcCA9IHJlcXVpcmUoJy4vZGVwJylcbnZhciBhcnJheU1ldGhvZHMgPSByZXF1aXJlKCcuL2FycmF5JylcbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKClcbiAgXy5kZWZpbmUodmFsdWUsICdfX29iX18nLCB0aGlzKVxuICBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhciBhdWdtZW50ID0gXy5oYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gU3RhdGljIG1ldGhvZHNcblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7T2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICogQHN0YXRpY1xuICovXG5cbk9ic2VydmVyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgdm0pIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iXG4gIGlmIChcbiAgICB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnX19vYl9fJykgJiZcbiAgICB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlclxuICApIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICB9IGVsc2UgaWYgKFxuICAgIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgIU9iamVjdC5pc0Zyb3plbih2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKVxuICB9XG4gIGlmIChvYiAmJiB2bSkge1xuICAgIG9iLmFkZFZtKHZtKVxuICB9XG4gIHJldHVybiBvYlxufVxuXG4vLyBJbnN0YW5jZSBtZXRob2RzXG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopXG4gIHZhciBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuY29udmVydChrZXlzW2ldLCBvYmpba2V5c1tpXV0pXG4gIH1cbn1cblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgdmFyIGkgPSBpdGVtcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIE9ic2VydmVyLmNyZWF0ZShpdGVtc1tpXSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGRlZmluZVJlYWN0aXZlKHRoaXMudmFsdWUsIGtleSwgdmFsKVxufVxuXG4vKipcbiAqIEFkZCBhbiBvd25lciB2bSwgc28gdGhhdCB3aGVuICRzZXQvJGRlbGV0ZSBtdXRhdGlvbnNcbiAqIGhhcHBlbiB3ZSBjYW4gbm90aWZ5IG93bmVyIHZtcyB0byBwcm94eSB0aGUga2V5cyBhbmRcbiAqIGRpZ2VzdCB0aGUgd2F0Y2hlcnMuIFRoaXMgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0XG4gKiBpcyBvYnNlcnZlZCBhcyBhbiBpbnN0YW5jZSdzIHJvb3QgJGRhdGEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmFkZFZtID0gZnVuY3Rpb24gKHZtKSB7XG4gICh0aGlzLnZtcyB8fCAodGhpcy52bXMgPSBbXSkpLnB1c2godm0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIG93bmVyIHZtLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBvYmplY3QgaXNcbiAqIHN3YXBwZWQgb3V0IGFzIGFuIGluc3RhbmNlJ3MgJGRhdGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVWbSA9IGZ1bmN0aW9uICh2bSkge1xuICB0aGlzLnZtcy4kcmVtb3ZlKHZtKVxufVxuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmNcbn1cblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1xuICovXG5cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICB2YXIgaSA9IGtleXMubGVuZ3RoXG4gIHZhciBrZXlcbiAgd2hpbGUgKGktLSkge1xuICAgIGtleSA9IGtleXNbaV1cbiAgICBfLmRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSAob2JqLCBrZXksIHZhbCkge1xuICB2YXIgZGVwID0gbmV3IERlcCgpXG4gIHZhciBjaGlsZE9iID0gT2JzZXJ2ZXIuY3JlYXRlKHZhbClcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBtZXRhR2V0dGVyICgpIHtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKVxuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSwgaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlID0gdmFsW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBtZXRhU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbCkgcmV0dXJuXG4gICAgICB2YWwgPSBuZXdWYWxcbiAgICAgIGNoaWxkT2IgPSBPYnNlcnZlci5jcmVhdGUobmV3VmFsKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vLyBBdHRhY2ggdG8gdGhlIHV0aWwgb2JqZWN0IHNvIGl0IGNhbiBiZSB1c2VkIGVsc2V3aGVyZS5cbl8uZGVmaW5lUmVhY3RpdmUgPSBkZWZpbmVSZWFjdGl2ZVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9ic2VydmVyXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIGNhY2hlID0gbmV3IENhY2hlKDEwMDApXG52YXIgZmlsdGVyVG9rZW5SRSA9IC9bXlxccydcIl0rfCdbXiddKid8XCJbXlwiXSpcIi9nXG52YXIgcmVzZXJ2ZWRBcmdSRSA9IC9eaW4kfF4tP1xcZCsvXG5cbi8qKlxuICogUGFyc2VyIHN0YXRlXG4gKi9cblxudmFyIHN0ciwgZGlyXG52YXIgYywgaSwgbCwgbGFzdEZpbHRlckluZGV4XG52YXIgaW5TaW5nbGUsIGluRG91YmxlLCBjdXJseSwgc3F1YXJlLCBwYXJlblxuXG4vKipcbiAqIFB1c2ggYSBmaWx0ZXIgdG8gdGhlIGN1cnJlbnQgZGlyZWN0aXZlIG9iamVjdFxuICovXG5cbmZ1bmN0aW9uIHB1c2hGaWx0ZXIgKCkge1xuICB2YXIgZXhwID0gc3RyLnNsaWNlKGxhc3RGaWx0ZXJJbmRleCwgaSkudHJpbSgpXG4gIHZhciBmaWx0ZXJcbiAgaWYgKGV4cCkge1xuICAgIGZpbHRlciA9IHt9XG4gICAgdmFyIHRva2VucyA9IGV4cC5tYXRjaChmaWx0ZXJUb2tlblJFKVxuICAgIGZpbHRlci5uYW1lID0gdG9rZW5zWzBdXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPiAxKSB7XG4gICAgICBmaWx0ZXIuYXJncyA9IHRva2Vucy5zbGljZSgxKS5tYXAocHJvY2Vzc0ZpbHRlckFyZylcbiAgICB9XG4gIH1cbiAgaWYgKGZpbHRlcikge1xuICAgIChkaXIuZmlsdGVycyA9IGRpci5maWx0ZXJzIHx8IFtdKS5wdXNoKGZpbHRlcilcbiAgfVxuICBsYXN0RmlsdGVySW5kZXggPSBpICsgMVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFyZ3VtZW50IGlzIGR5bmFtaWMgYW5kIHN0cmlwIHF1b3Rlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJnXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gcHJvY2Vzc0ZpbHRlckFyZyAoYXJnKSB7XG4gIGlmIChyZXNlcnZlZEFyZ1JFLnRlc3QoYXJnKSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogXy50b051bWJlcihhcmcpLFxuICAgICAgZHluYW1pYzogZmFsc2VcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHN0cmlwcGVkID0gXy5zdHJpcFF1b3RlcyhhcmcpXG4gICAgdmFyIGR5bmFtaWMgPSBzdHJpcHBlZCA9PT0gYXJnXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBkeW5hbWljID8gYXJnIDogc3RyaXBwZWQsXG4gICAgICBkeW5hbWljOiBkeW5hbWljXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYSBkaXJlY3RpdmUgdmFsdWUgYW5kIGV4dHJhY3QgdGhlIGV4cHJlc3Npb25cbiAqIGFuZCBpdHMgZmlsdGVycyBpbnRvIGEgZGVzY3JpcHRvci5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIFwiYSArIDEgfCB1cHBlcmNhc2VcIiB3aWxsIHlpZWxkOlxuICoge1xuICogICBleHByZXNzaW9uOiAnYSArIDEnLFxuICogICBmaWx0ZXJzOiBbXG4gKiAgICAgeyBuYW1lOiAndXBwZXJjYXNlJywgYXJnczogbnVsbCB9XG4gKiAgIF1cbiAqIH1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChzKSB7XG5cbiAgdmFyIGhpdCA9IGNhY2hlLmdldChzKVxuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdFxuICB9XG5cbiAgLy8gcmVzZXQgcGFyc2VyIHN0YXRlXG4gIHN0ciA9IHNcbiAgaW5TaW5nbGUgPSBpbkRvdWJsZSA9IGZhbHNlXG4gIGN1cmx5ID0gc3F1YXJlID0gcGFyZW4gPSAwXG4gIGxhc3RGaWx0ZXJJbmRleCA9IDBcbiAgZGlyID0ge31cblxuICBmb3IgKGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChpblNpbmdsZSkge1xuICAgICAgLy8gY2hlY2sgc2luZ2xlIHF1b3RlXG4gICAgICBpZiAoYyA9PT0gMHgyNykgaW5TaW5nbGUgPSAhaW5TaW5nbGVcbiAgICB9IGVsc2UgaWYgKGluRG91YmxlKSB7XG4gICAgICAvLyBjaGVjayBkb3VibGUgcXVvdGVcbiAgICAgIGlmIChjID09PSAweDIyKSBpbkRvdWJsZSA9ICFpbkRvdWJsZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjID09PSAweDdDICYmIC8vIHBpcGVcbiAgICAgIHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAhPT0gMHg3QyAmJlxuICAgICAgc3RyLmNoYXJDb2RlQXQoaSAtIDEpICE9PSAweDdDXG4gICAgKSB7XG4gICAgICBpZiAoZGlyLmV4cHJlc3Npb24gPT0gbnVsbCkge1xuICAgICAgICAvLyBmaXJzdCBmaWx0ZXIsIGVuZCBvZiBleHByZXNzaW9uXG4gICAgICAgIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxXG4gICAgICAgIGRpci5leHByZXNzaW9uID0gc3RyLnNsaWNlKDAsIGkpLnRyaW0oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxyZWFkeSBoYXMgZmlsdGVyXG4gICAgICAgIHB1c2hGaWx0ZXIoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSAweDIyOiBpbkRvdWJsZSA9IHRydWU7IGJyZWFrIC8vIFwiXG4gICAgICAgIGNhc2UgMHgyNzogaW5TaW5nbGUgPSB0cnVlOyBicmVhayAvLyAnXG4gICAgICAgIGNhc2UgMHgyODogcGFyZW4rKzsgYnJlYWsgICAgICAgICAvLyAoXG4gICAgICAgIGNhc2UgMHgyOTogcGFyZW4tLTsgYnJlYWsgICAgICAgICAvLyApXG4gICAgICAgIGNhc2UgMHg1Qjogc3F1YXJlKys7IGJyZWFrICAgICAgICAvLyBbXG4gICAgICAgIGNhc2UgMHg1RDogc3F1YXJlLS07IGJyZWFrICAgICAgICAvLyBdXG4gICAgICAgIGNhc2UgMHg3QjogY3VybHkrKzsgYnJlYWsgICAgICAgICAvLyB7XG4gICAgICAgIGNhc2UgMHg3RDogY3VybHktLTsgYnJlYWsgICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpci5leHByZXNzaW9uID09IG51bGwpIHtcbiAgICBkaXIuZXhwcmVzc2lvbiA9IHN0ci5zbGljZSgwLCBpKS50cmltKClcbiAgfSBlbHNlIGlmIChsYXN0RmlsdGVySW5kZXggIT09IDApIHtcbiAgICBwdXNoRmlsdGVyKClcbiAgfVxuXG4gIGNhY2hlLnB1dChzLCBkaXIpXG4gIHJldHVybiBkaXJcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgUGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpXG52YXIgQ2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpXG52YXIgZXhwcmVzc2lvbkNhY2hlID0gbmV3IENhY2hlKDEwMDApXG5cbnZhciBhbGxvd2VkS2V5d29yZHMgPVxuICAnTWF0aCxEYXRlLHRoaXMsdHJ1ZSxmYWxzZSxudWxsLHVuZGVmaW5lZCxJbmZpbml0eSxOYU4sJyArXG4gICdpc05hTixpc0Zpbml0ZSxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSwnICtcbiAgJ2VuY29kZVVSSUNvbXBvbmVudCxwYXJzZUludCxwYXJzZUZsb2F0J1xudmFyIGFsbG93ZWRLZXl3b3Jkc1JFID1cbiAgbmV3IFJlZ0V4cCgnXignICsgYWxsb3dlZEtleXdvcmRzLnJlcGxhY2UoLywvZywgJ1xcXFxifCcpICsgJ1xcXFxiKScpXG5cbi8vIGtleXdvcmRzIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBpbnNpZGUgZXhwcmVzc2lvbnNcbnZhciBpbXByb3BlcktleXdvcmRzID1cbiAgJ2JyZWFrLGNhc2UsY2xhc3MsY2F0Y2gsY29uc3QsY29udGludWUsZGVidWdnZXIsZGVmYXVsdCwnICtcbiAgJ2RlbGV0ZSxkbyxlbHNlLGV4cG9ydCxleHRlbmRzLGZpbmFsbHksZm9yLGZ1bmN0aW9uLGlmLCcgK1xuICAnaW1wb3J0LGluLGluc3RhbmNlb2YsbGV0LHJldHVybixzdXBlcixzd2l0Y2gsdGhyb3csdHJ5LCcgK1xuICAndmFyLHdoaWxlLHdpdGgseWllbGQsZW51bSxhd2FpdCxpbXBsZW1lbnRzLHBhY2thZ2UsJyArXG4gICdwcm9jdGVjdGVkLHN0YXRpYyxpbnRlcmZhY2UscHJpdmF0ZSxwdWJsaWMnXG52YXIgaW1wcm9wZXJLZXl3b3Jkc1JFID1cbiAgbmV3IFJlZ0V4cCgnXignICsgaW1wcm9wZXJLZXl3b3Jkcy5yZXBsYWNlKC8sL2csICdcXFxcYnwnKSArICdcXFxcYiknKVxuXG52YXIgd3NSRSA9IC9cXHMvZ1xudmFyIG5ld2xpbmVSRSA9IC9cXG4vZ1xudmFyIHNhdmVSRSA9IC9bXFx7LF1cXHMqW1xcd1xcJF9dK1xccyo6fCgnW14nXSonfFwiW15cIl0qXCIpfG5ldyB8dHlwZW9mIHx2b2lkIC9nXG52YXIgcmVzdG9yZVJFID0gL1wiKFxcZCspXCIvZ1xudmFyIHBhdGhUZXN0UkUgPSAvXltBLVphLXpfJF1bXFx3JF0qKFxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXFxdfFxcW1wiLio/XCJcXF18XFxbXFxkK1xcXXxcXFtbQS1aYS16XyRdW1xcdyRdKlxcXSkqJC9cbnZhciBwYXRoUmVwbGFjZVJFID0gL1teXFx3JFxcLl0oW0EtWmEtel8kXVtcXHckXSooXFwuW0EtWmEtel8kXVtcXHckXSp8XFxbJy4qPydcXF18XFxbXCIuKj9cIlxcXSkqKS9nXG52YXIgYm9vbGVhbkxpdGVyYWxSRSA9IC9eKHRydWV8ZmFsc2UpJC9cblxuLyoqXG4gKiBTYXZlIC8gUmV3cml0ZSAvIFJlc3RvcmVcbiAqXG4gKiBXaGVuIHJld3JpdGluZyBwYXRocyBmb3VuZCBpbiBhbiBleHByZXNzaW9uLCBpdCBpc1xuICogcG9zc2libGUgZm9yIHRoZSBzYW1lIGxldHRlciBzZXF1ZW5jZXMgdG8gYmUgZm91bmQgaW5cbiAqIHN0cmluZ3MgYW5kIE9iamVjdCBsaXRlcmFsIHByb3BlcnR5IGtleXMuIFRoZXJlZm9yZSB3ZVxuICogcmVtb3ZlIGFuZCBzdG9yZSB0aGVzZSBwYXJ0cyBpbiBhIHRlbXBvcmFyeSBhcnJheSwgYW5kXG4gKiByZXN0b3JlIHRoZW0gYWZ0ZXIgdGhlIHBhdGggcmV3cml0ZS5cbiAqL1xuXG52YXIgc2F2ZWQgPSBbXVxuXG4vKipcbiAqIFNhdmUgcmVwbGFjZXJcbiAqXG4gKiBUaGUgc2F2ZSByZWdleCBjYW4gbWF0Y2ggdHdvIHBvc3NpYmxlIGNhc2VzOlxuICogMS4gQW4gb3BlbmluZyBvYmplY3QgbGl0ZXJhbFxuICogMi4gQSBzdHJpbmdcbiAqIElmIG1hdGNoZWQgYXMgYSBwbGFpbiBzdHJpbmcsIHdlIG5lZWQgdG8gZXNjYXBlIGl0c1xuICogbmV3bGluZXMsIHNpbmNlIHRoZSBzdHJpbmcgbmVlZHMgdG8gYmUgcHJlc2VydmVkIHdoZW5cbiAqIGdlbmVyYXRpbmcgdGhlIGZ1bmN0aW9uIGJvZHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IGlzU3RyaW5nIC0gc3RyIGlmIG1hdGNoZWQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gLSBwbGFjZWhvbGRlciB3aXRoIGluZGV4XG4gKi9cblxuZnVuY3Rpb24gc2F2ZSAoc3RyLCBpc1N0cmluZykge1xuICB2YXIgaSA9IHNhdmVkLmxlbmd0aFxuICBzYXZlZFtpXSA9IGlzU3RyaW5nXG4gICAgPyBzdHIucmVwbGFjZShuZXdsaW5lUkUsICdcXFxcbicpXG4gICAgOiBzdHJcbiAgcmV0dXJuICdcIicgKyBpICsgJ1wiJ1xufVxuXG4vKipcbiAqIFBhdGggcmV3cml0ZSByZXBsYWNlclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYXdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiByZXdyaXRlIChyYXcpIHtcbiAgdmFyIGMgPSByYXcuY2hhckF0KDApXG4gIHZhciBwYXRoID0gcmF3LnNsaWNlKDEpXG4gIGlmIChhbGxvd2VkS2V5d29yZHNSRS50ZXN0KHBhdGgpKSB7XG4gICAgcmV0dXJuIHJhd1xuICB9IGVsc2Uge1xuICAgIHBhdGggPSBwYXRoLmluZGV4T2YoJ1wiJykgPiAtMVxuICAgICAgPyBwYXRoLnJlcGxhY2UocmVzdG9yZVJFLCByZXN0b3JlKVxuICAgICAgOiBwYXRoXG4gICAgcmV0dXJuIGMgKyAnc2NvcGUuJyArIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIFJlc3RvcmUgcmVwbGFjZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gaSAtIG1hdGNoZWQgc2F2ZSBpbmRleFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHJlc3RvcmUgKHN0ciwgaSkge1xuICByZXR1cm4gc2F2ZWRbaV1cbn1cblxuLyoqXG4gKiBSZXdyaXRlIGFuIGV4cHJlc3Npb24sIHByZWZpeGluZyBhbGwgcGF0aCBhY2Nlc3NvcnMgd2l0aFxuICogYHNjb3BlLmAgYW5kIGdlbmVyYXRlIGdldHRlci9zZXR0ZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbmVlZFNldFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZUV4cEZucyAoZXhwLCBuZWVkU2V0KSB7XG4gIGlmIChpbXByb3BlcktleXdvcmRzUkUudGVzdChleHApKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnQXZvaWQgdXNpbmcgcmVzZXJ2ZWQga2V5d29yZHMgaW4gZXhwcmVzc2lvbjogJyArIGV4cFxuICAgIClcbiAgfVxuICAvLyByZXNldCBzdGF0ZVxuICBzYXZlZC5sZW5ndGggPSAwXG4gIC8vIHNhdmUgc3RyaW5ncyBhbmQgb2JqZWN0IGxpdGVyYWwga2V5c1xuICB2YXIgYm9keSA9IGV4cFxuICAgIC5yZXBsYWNlKHNhdmVSRSwgc2F2ZSlcbiAgICAucmVwbGFjZSh3c1JFLCAnJylcbiAgLy8gcmV3cml0ZSBhbGwgcGF0aHNcbiAgLy8gcGFkIDEgc3BhY2UgaGVyZSBiZWNhdWUgdGhlIHJlZ2V4IG1hdGNoZXMgMSBleHRyYSBjaGFyXG4gIGJvZHkgPSAoJyAnICsgYm9keSlcbiAgICAucmVwbGFjZShwYXRoUmVwbGFjZVJFLCByZXdyaXRlKVxuICAgIC5yZXBsYWNlKHJlc3RvcmVSRSwgcmVzdG9yZSlcbiAgdmFyIGdldHRlciA9IG1ha2VHZXR0ZXIoYm9keSlcbiAgaWYgKGdldHRlcikge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQ6IGdldHRlcixcbiAgICAgIGJvZHk6IGJvZHksXG4gICAgICBzZXQ6IG5lZWRTZXRcbiAgICAgICAgPyBtYWtlU2V0dGVyKGJvZHkpXG4gICAgICAgIDogbnVsbFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGUgZ2V0dGVyIHNldHRlcnMgZm9yIGEgc2ltcGxlIHBhdGguXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZVBhdGhGbnMgKGV4cCkge1xuICB2YXIgZ2V0dGVyLCBwYXRoXG4gIGlmIChleHAuaW5kZXhPZignWycpIDwgMCkge1xuICAgIC8vIHJlYWxseSBzaW1wbGUgcGF0aFxuICAgIHBhdGggPSBleHAuc3BsaXQoJy4nKVxuICAgIHBhdGgucmF3ID0gZXhwXG4gICAgZ2V0dGVyID0gUGF0aC5jb21waWxlR2V0dGVyKHBhdGgpXG4gIH0gZWxzZSB7XG4gICAgLy8gZG8gdGhlIHJlYWwgcGFyc2luZ1xuICAgIHBhdGggPSBQYXRoLnBhcnNlKGV4cClcbiAgICBnZXR0ZXIgPSBwYXRoLmdldFxuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0OiBnZXR0ZXIsXG4gICAgLy8gYWx3YXlzIGdlbmVyYXRlIHNldHRlciBmb3Igc2ltcGxlIHBhdGhzXG4gICAgc2V0OiBmdW5jdGlvbiAob2JqLCB2YWwpIHtcbiAgICAgIFBhdGguc2V0KG9iaiwgcGF0aCwgdmFsKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkIGEgZ2V0dGVyIGZ1bmN0aW9uLiBSZXF1aXJlcyBldmFsLlxuICpcbiAqIFdlIGlzb2xhdGUgdGhlIHRyeS9jYXRjaCBzbyBpdCBkb2Vzbid0IGFmZmVjdCB0aGVcbiAqIG9wdGltaXphdGlvbiBvZiB0aGUgcGFyc2UgZnVuY3Rpb24gd2hlbiBpdCBpcyBub3QgY2FsbGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5XG4gKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gbWFrZUdldHRlciAoYm9keSkge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ3Njb3BlJywgJ3JldHVybiAnICsgYm9keSArICc7JylcbiAgfSBjYXRjaCAoZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ0ludmFsaWQgZXhwcmVzc2lvbi4gJyArXG4gICAgICAnR2VuZXJhdGVkIGZ1bmN0aW9uIGJvZHk6ICcgKyBib2R5XG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogQnVpbGQgYSBzZXR0ZXIgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBpcyBvbmx5IG5lZWRlZCBpbiByYXJlIHNpdHVhdGlvbnMgbGlrZSBcImFbYl1cIiB3aGVyZVxuICogYSBzZXR0YWJsZSBwYXRoIHJlcXVpcmVzIGR5bmFtaWMgZXZhbHVhdGlvbi5cbiAqXG4gKiBUaGlzIHNldHRlciBmdW5jdGlvbiBtYXkgdGhyb3cgZXJyb3Igd2hlbiBjYWxsZWQgaWYgdGhlXG4gKiBleHByZXNzaW9uIGJvZHkgaXMgbm90IGEgdmFsaWQgbGVmdC1oYW5kIGV4cHJlc3Npb24gaW5cbiAqIGFzc2lnbm1lbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBtYWtlU2V0dGVyIChib2R5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbignc2NvcGUnLCAndmFsdWUnLCBib2R5ICsgJz12YWx1ZTsnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnSW52YWxpZCBzZXR0ZXIgZnVuY3Rpb24gYm9keTogJyArIGJvZHlcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBmb3Igc2V0dGVyIGV4aXN0ZW5jZSBvbiBhIGNhY2hlIGhpdC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoaXRcbiAqL1xuXG5mdW5jdGlvbiBjaGVja1NldHRlciAoaGl0KSB7XG4gIGlmICghaGl0LnNldCkge1xuICAgIGhpdC5zZXQgPSBtYWtlU2V0dGVyKGhpdC5ib2R5KVxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gZXhwcmVzc2lvbiBpbnRvIHJlLXdyaXR0ZW4gZ2V0dGVyL3NldHRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHBhcmFtIHtCb29sZWFufSBuZWVkU2V0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKGV4cCwgbmVlZFNldCkge1xuICBleHAgPSBleHAudHJpbSgpXG4gIC8vIHRyeSBjYWNoZVxuICB2YXIgaGl0ID0gZXhwcmVzc2lvbkNhY2hlLmdldChleHApXG4gIGlmIChoaXQpIHtcbiAgICBpZiAobmVlZFNldCkge1xuICAgICAgY2hlY2tTZXR0ZXIoaGl0KVxuICAgIH1cbiAgICByZXR1cm4gaGl0XG4gIH1cbiAgLy8gd2UgZG8gYSBzaW1wbGUgcGF0aCBjaGVjayB0byBvcHRpbWl6ZSBmb3IgdGhlbS5cbiAgLy8gdGhlIGNoZWNrIGZhaWxzIHZhbGlkIHBhdGhzIHdpdGggdW51c2FsIHdoaXRlc3BhY2VzLFxuICAvLyBidXQgdGhhdCdzIHRvbyByYXJlIGFuZCB3ZSBkb24ndCBjYXJlLlxuICAvLyBhbHNvIHNraXAgYm9vbGVhbiBsaXRlcmFscyBhbmQgcGF0aHMgdGhhdCBzdGFydCB3aXRoXG4gIC8vIGdsb2JhbCBcIk1hdGhcIlxuICB2YXIgcmVzID0gZXhwb3J0cy5pc1NpbXBsZVBhdGgoZXhwKVxuICAgID8gY29tcGlsZVBhdGhGbnMoZXhwKVxuICAgIDogY29tcGlsZUV4cEZucyhleHAsIG5lZWRTZXQpXG4gIGV4cHJlc3Npb25DYWNoZS5wdXQoZXhwLCByZXMpXG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBleHByZXNzaW9uIGlzIGEgc2ltcGxlIHBhdGguXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLmlzU2ltcGxlUGF0aCA9IGZ1bmN0aW9uIChleHApIHtcbiAgcmV0dXJuIHBhdGhUZXN0UkUudGVzdChleHApICYmXG4gICAgLy8gZG9uJ3QgdHJlYXQgdHJ1ZS9mYWxzZSBhcyBwYXRoc1xuICAgICFib29sZWFuTGl0ZXJhbFJFLnRlc3QoZXhwKSAmJlxuICAgIC8vIE1hdGggY29uc3RhbnRzIGUuZy4gTWF0aC5QSSwgTWF0aC5FIGV0Yy5cbiAgICBleHAuc2xpY2UoMCwgNSkgIT09ICdNYXRoLidcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgQ2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpXG52YXIgcGF0aENhY2hlID0gbmV3IENhY2hlKDEwMDApXG52YXIgaWRlbnRSRSA9IGV4cG9ydHMuaWRlbnRSRSA9IC9eWyRfYS16QS1aXStbXFx3JF0qJC9cblxuLy8gYWN0aW9uc1xudmFyIEFQUEVORCA9IDBcbnZhciBQVVNIID0gMVxuXG4vLyBzdGF0ZXNcbnZhciBCRUZPUkVfUEFUSCA9IDBcbnZhciBJTl9QQVRIID0gMVxudmFyIEJFRk9SRV9JREVOVCA9IDJcbnZhciBJTl9JREVOVCA9IDNcbnZhciBCRUZPUkVfRUxFTUVOVCA9IDRcbnZhciBBRlRFUl9aRVJPID0gNVxudmFyIElOX0lOREVYID0gNlxudmFyIElOX1NJTkdMRV9RVU9URSA9IDdcbnZhciBJTl9ET1VCTEVfUVVPVEUgPSA4XG52YXIgSU5fU1VCX1BBVEggPSA5XG52YXIgQUZURVJfRUxFTUVOVCA9IDEwXG52YXIgQUZURVJfUEFUSCA9IDExXG52YXIgRVJST1IgPSAxMlxuXG52YXIgcGF0aFN0YXRlTWFjaGluZSA9IFtdXG5cbnBhdGhTdGF0ZU1hY2hpbmVbQkVGT1JFX1BBVEhdID0ge1xuICAnd3MnOiBbQkVGT1JFX1BBVEhdLFxuICAnaWRlbnQnOiBbSU5fSURFTlQsIEFQUEVORF0sXG4gICdbJzogW0JFRk9SRV9FTEVNRU5UXSxcbiAgJ2VvZic6IFtBRlRFUl9QQVRIXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX1BBVEhdID0ge1xuICAnd3MnOiBbSU5fUEFUSF0sXG4gICcuJzogW0JFRk9SRV9JREVOVF0sXG4gICdbJzogW0JFRk9SRV9FTEVNRU5UXSxcbiAgJ2VvZic6IFtBRlRFUl9QQVRIXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0JFRk9SRV9JREVOVF0gPSB7XG4gICd3cyc6IFtCRUZPUkVfSURFTlRdLFxuICAnaWRlbnQnOiBbSU5fSURFTlQsIEFQUEVORF1cbn1cblxucGF0aFN0YXRlTWFjaGluZVtJTl9JREVOVF0gPSB7XG4gICdpZGVudCc6IFtJTl9JREVOVCwgQVBQRU5EXSxcbiAgJzAnOiBbSU5fSURFTlQsIEFQUEVORF0sXG4gICdudW1iZXInOiBbSU5fSURFTlQsIEFQUEVORF0sXG4gICd3cyc6IFtJTl9QQVRILCBQVVNIXSxcbiAgJy4nOiBbQkVGT1JFX0lERU5ULCBQVVNIXSxcbiAgJ1snOiBbQkVGT1JFX0VMRU1FTlQsIFBVU0hdLFxuICAnZW9mJzogW0FGVEVSX1BBVEgsIFBVU0hdXG59XG5cbnBhdGhTdGF0ZU1hY2hpbmVbQkVGT1JFX0VMRU1FTlRdID0ge1xuICAnd3MnOiBbQkVGT1JFX0VMRU1FTlRdLFxuICAnMCc6IFtBRlRFUl9aRVJPLCBBUFBFTkRdLFxuICAnbnVtYmVyJzogW0lOX0lOREVYLCBBUFBFTkRdLFxuICBcIidcIjogW0lOX1NJTkdMRV9RVU9URSwgQVBQRU5ELCAnJ10sXG4gICdcIic6IFtJTl9ET1VCTEVfUVVPVEUsIEFQUEVORCwgJyddLFxuICAnaWRlbnQnOiBbSU5fU1VCX1BBVEgsIEFQUEVORCwgJyonXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0FGVEVSX1pFUk9dID0ge1xuICAnd3MnOiBbQUZURVJfRUxFTUVOVCwgUFVTSF0sXG4gICddJzogW0lOX1BBVEgsIFBVU0hdXG59XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fSU5ERVhdID0ge1xuICAnMCc6IFtJTl9JTkRFWCwgQVBQRU5EXSxcbiAgJ251bWJlcic6IFtJTl9JTkRFWCwgQVBQRU5EXSxcbiAgJ3dzJzogW0FGVEVSX0VMRU1FTlRdLFxuICAnXSc6IFtJTl9QQVRILCBQVVNIXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX1NJTkdMRV9RVU9URV0gPSB7XG4gIFwiJ1wiOiBbQUZURVJfRUxFTUVOVF0sXG4gICdlb2YnOiBFUlJPUixcbiAgJ2Vsc2UnOiBbSU5fU0lOR0xFX1FVT1RFLCBBUFBFTkRdXG59XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fRE9VQkxFX1FVT1RFXSA9IHtcbiAgJ1wiJzogW0FGVEVSX0VMRU1FTlRdLFxuICAnZW9mJzogRVJST1IsXG4gICdlbHNlJzogW0lOX0RPVUJMRV9RVU9URSwgQVBQRU5EXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX1NVQl9QQVRIXSA9IHtcbiAgJ2lkZW50JzogW0lOX1NVQl9QQVRILCBBUFBFTkRdLFxuICAnMCc6IFtJTl9TVUJfUEFUSCwgQVBQRU5EXSxcbiAgJ251bWJlcic6IFtJTl9TVUJfUEFUSCwgQVBQRU5EXSxcbiAgJ3dzJzogW0FGVEVSX0VMRU1FTlRdLFxuICAnXSc6IFtJTl9QQVRILCBQVVNIXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0FGVEVSX0VMRU1FTlRdID0ge1xuICAnd3MnOiBbQUZURVJfRUxFTUVOVF0sXG4gICddJzogW0lOX1BBVEgsIFBVU0hdXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGEgY2hhcmFjdGVyIGluIGEga2V5cGF0aC5cbiAqXG4gKiBAcGFyYW0ge0NoYXJ9IGNoXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRQYXRoQ2hhclR5cGUgKGNoKSB7XG4gIGlmIChjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdlb2YnXG4gIH1cblxuICB2YXIgY29kZSA9IGNoLmNoYXJDb2RlQXQoMClcblxuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4NUI6IC8vIFtcbiAgICBjYXNlIDB4NUQ6IC8vIF1cbiAgICBjYXNlIDB4MkU6IC8vIC5cbiAgICBjYXNlIDB4MjI6IC8vIFwiXG4gICAgY2FzZSAweDI3OiAvLyAnXG4gICAgY2FzZSAweDMwOiAvLyAwXG4gICAgICByZXR1cm4gY2hcblxuICAgIGNhc2UgMHg1RjogLy8gX1xuICAgIGNhc2UgMHgyNDogLy8gJFxuICAgICAgcmV0dXJuICdpZGVudCdcblxuICAgIGNhc2UgMHgyMDogLy8gU3BhY2VcbiAgICBjYXNlIDB4MDk6IC8vIFRhYlxuICAgIGNhc2UgMHgwQTogLy8gTmV3bGluZVxuICAgIGNhc2UgMHgwRDogLy8gUmV0dXJuXG4gICAgY2FzZSAweEEwOiAgLy8gTm8tYnJlYWsgc3BhY2VcbiAgICBjYXNlIDB4RkVGRjogIC8vIEJ5dGUgT3JkZXIgTWFya1xuICAgIGNhc2UgMHgyMDI4OiAgLy8gTGluZSBTZXBhcmF0b3JcbiAgICBjYXNlIDB4MjAyOTogIC8vIFBhcmFncmFwaCBTZXBhcmF0b3JcbiAgICAgIHJldHVybiAnd3MnXG4gIH1cblxuICAvLyBhLXosIEEtWlxuICBpZiAoXG4gICAgKGNvZGUgPj0gMHg2MSAmJiBjb2RlIDw9IDB4N0EpIHx8XG4gICAgKGNvZGUgPj0gMHg0MSAmJiBjb2RlIDw9IDB4NUEpXG4gICkge1xuICAgIHJldHVybiAnaWRlbnQnXG4gIH1cblxuICAvLyAxLTlcbiAgaWYgKGNvZGUgPj0gMHgzMSAmJiBjb2RlIDw9IDB4MzkpIHtcbiAgICByZXR1cm4gJ251bWJlcidcbiAgfVxuXG4gIHJldHVybiAnZWxzZSdcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBwYXRoIGludG8gYW4gYXJyYXkgb2Ygc2VnbWVudHNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICB2YXIga2V5cyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBtb2RlID0gQkVGT1JFX1BBVEhcbiAgdmFyIGMsIG5ld0NoYXIsIGtleSwgdHlwZSwgdHJhbnNpdGlvbiwgYWN0aW9uLCB0eXBlTWFwXG5cbiAgdmFyIGFjdGlvbnMgPSBbXVxuICBhY3Rpb25zW1BVU0hdID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGtleXMucHVzaChrZXkpXG4gICAga2V5ID0gdW5kZWZpbmVkXG4gIH1cbiAgYWN0aW9uc1tBUFBFTkRdID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gbmV3Q2hhclxuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgKz0gbmV3Q2hhclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlVW5lc2NhcGVRdW90ZSAoKSB7XG4gICAgdmFyIG5leHRDaGFyID0gcGF0aFtpbmRleCArIDFdXG4gICAgaWYgKChtb2RlID09PSBJTl9TSU5HTEVfUVVPVEUgJiYgbmV4dENoYXIgPT09IFwiJ1wiKSB8fFxuICAgICAgICAobW9kZSA9PT0gSU5fRE9VQkxFX1FVT1RFICYmIG5leHRDaGFyID09PSAnXCInKSkge1xuICAgICAgaW5kZXgrK1xuICAgICAgbmV3Q2hhciA9IG5leHRDaGFyXG4gICAgICBhY3Rpb25zW0FQUEVORF0oKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICB3aGlsZSAobW9kZSAhPSBudWxsKSB7XG4gICAgaW5kZXgrK1xuICAgIGMgPSBwYXRoW2luZGV4XVxuXG4gICAgaWYgKGMgPT09ICdcXFxcJyAmJiBtYXliZVVuZXNjYXBlUXVvdGUoKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0eXBlID0gZ2V0UGF0aENoYXJUeXBlKGMpXG4gICAgdHlwZU1hcCA9IHBhdGhTdGF0ZU1hY2hpbmVbbW9kZV1cbiAgICB0cmFuc2l0aW9uID0gdHlwZU1hcFt0eXBlXSB8fCB0eXBlTWFwWydlbHNlJ10gfHwgRVJST1JcblxuICAgIGlmICh0cmFuc2l0aW9uID09PSBFUlJPUikge1xuICAgICAgcmV0dXJuIC8vIHBhcnNlIGVycm9yXG4gICAgfVxuXG4gICAgbW9kZSA9IHRyYW5zaXRpb25bMF1cbiAgICBhY3Rpb24gPSBhY3Rpb25zW3RyYW5zaXRpb25bMV1dXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgbmV3Q2hhciA9IHRyYW5zaXRpb25bMl1cbiAgICAgIG5ld0NoYXIgPSBuZXdDaGFyID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBjXG4gICAgICAgIDogbmV3Q2hhciA9PT0gJyonXG4gICAgICAgICAgPyBuZXdDaGFyICsgY1xuICAgICAgICAgIDogbmV3Q2hhclxuICAgICAgYWN0aW9uKClcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gQUZURVJfUEFUSCkge1xuICAgICAga2V5cy5yYXcgPSBwYXRoXG4gICAgICByZXR1cm4ga2V5c1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEZvcm1hdCBhIGFjY2Vzc29yIHNlZ21lbnQgYmFzZWQgb24gaXRzIHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBY2Nlc3NvciAoa2V5KSB7XG4gIGlmIChpZGVudFJFLnRlc3Qoa2V5KSkgeyAvLyBpZGVudGlmaWVyXG4gICAgcmV0dXJuICcuJyArIGtleVxuICB9IGVsc2UgaWYgKCtrZXkgPT09IGtleSA+Pj4gMCkgeyAvLyBicmFja2V0IGluZGV4XG4gICAgcmV0dXJuICdbJyArIGtleSArICddJ1xuICB9IGVsc2UgaWYgKGtleS5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgIHJldHVybiAnW28nICsgZm9ybWF0QWNjZXNzb3Ioa2V5LnNsaWNlKDEpKSArICddJ1xuICB9IGVsc2UgeyAvLyBicmFja2V0IHN0cmluZ1xuICAgIHJldHVybiAnW1wiJyArIGtleS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCJdJ1xuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSBnZXR0ZXIgZnVuY3Rpb24gd2l0aCBhIGZpeGVkIHBhdGguXG4gKiBUaGUgZml4ZWQgcGF0aCBnZXR0ZXIgc3VwcmVzc2VzIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGVHZXR0ZXIgPSBmdW5jdGlvbiAocGF0aCkge1xuICB2YXIgYm9keSA9ICdyZXR1cm4gbycgKyBwYXRoLm1hcChmb3JtYXRBY2Nlc3Nvcikuam9pbignJylcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignbycsIGJvZHkpXG59XG5cbi8qKlxuICogRXh0ZXJuYWwgcGFyc2UgdGhhdCBjaGVjayBmb3IgYSBjYWNoZSBoaXQgZmlyc3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl8dW5kZWZpbmVkfVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAocGF0aCkge1xuICB2YXIgaGl0ID0gcGF0aENhY2hlLmdldChwYXRoKVxuICBpZiAoIWhpdCkge1xuICAgIGhpdCA9IHBhcnNlUGF0aChwYXRoKVxuICAgIGlmIChoaXQpIHtcbiAgICAgIGhpdC5nZXQgPSBleHBvcnRzLmNvbXBpbGVHZXR0ZXIoaGl0KVxuICAgICAgcGF0aENhY2hlLnB1dChwYXRoLCBoaXQpXG4gICAgfVxuICB9XG4gIHJldHVybiBoaXRcbn1cblxuLyoqXG4gKiBHZXQgZnJvbSBhbiBvYmplY3QgZnJvbSBhIHBhdGggc3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqL1xuXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIChvYmosIHBhdGgpIHtcbiAgcGF0aCA9IGV4cG9ydHMucGFyc2UocGF0aClcbiAgaWYgKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5nZXQob2JqKVxuICB9XG59XG5cbi8qKlxuICogV2FybiBhZ2FpbnN0IHNldHRpbmcgbm9uLWV4aXN0ZW50IHJvb3QgcGF0aCBvbiBhIHZtLlxuICovXG5cbnZhciB3YXJuTm9uRXhpc3RlbnRcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Ob25FeGlzdGVudCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgXy53YXJuKFxuICAgICAgJ1lvdSBhcmUgc2V0dGluZyBhIG5vbi1leGlzdGVudCBwYXRoIFwiJyArIHBhdGgucmF3ICsgJ1wiICcgK1xuICAgICAgJ29uIGEgdm0gaW5zdGFuY2UuIENvbnNpZGVyIHByZS1pbml0aWFsaXppbmcgdGhlIHByb3BlcnR5ICcgK1xuICAgICAgJ3dpdGggdGhlIFwiZGF0YVwiIG9wdGlvbiBmb3IgbW9yZSByZWxpYWJsZSByZWFjdGl2aXR5ICcgK1xuICAgICAgJ2FuZCBiZXR0ZXIgcGVyZm9ybWFuY2UuJ1xuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIFNldCBvbiBhbiBvYmplY3QgZnJvbSBhIHBhdGhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZyB8IEFycmF5fSBwYXRoXG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmV4cG9ydHMuc2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsKSB7XG4gIHZhciBvcmlnaW5hbCA9IG9ialxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgcGF0aCA9IGV4cG9ydHMucGFyc2UocGF0aClcbiAgfVxuICBpZiAoIXBhdGggfHwgIV8uaXNPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBsYXN0LCBrZXlcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRoLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxhc3QgPSBvYmpcbiAgICBrZXkgPSBwYXRoW2ldXG4gICAgaWYgKGtleS5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgICAga2V5ID0gb3JpZ2luYWxba2V5LnNsaWNlKDEpXVxuICAgIH1cbiAgICBpZiAoaSA8IGwgLSAxKSB7XG4gICAgICBvYmogPSBvYmpba2V5XVxuICAgICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgb2JqID0ge31cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbGFzdC5faXNWdWUpIHtcbiAgICAgICAgICB3YXJuTm9uRXhpc3RlbnQocGF0aClcbiAgICAgICAgfVxuICAgICAgICBfLnNldChsYXN0LCBrZXksIG9iailcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKF8uaXNBcnJheShvYmopKSB7XG4gICAgICAgIG9iai4kc2V0KGtleSwgdmFsKVxuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBvYmouX2lzVnVlKSB7XG4gICAgICAgICAgd2Fybk5vbkV4aXN0ZW50KHBhdGgpXG4gICAgICAgIH1cbiAgICAgICAgXy5zZXQob2JqLCBrZXksIHZhbClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgQ2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpXG52YXIgdGVtcGxhdGVDYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxudmFyIGlkU2VsZWN0b3JDYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxuXG52YXIgbWFwID0ge1xuICBfZGVmYXVsdDogWzAsICcnLCAnJ10sXG4gIGxlZ2VuZDogWzEsICc8ZmllbGRzZXQ+JywgJzwvZmllbGRzZXQ+J10sXG4gIHRyOiBbMiwgJzx0YWJsZT48dGJvZHk+JywgJzwvdGJvZHk+PC90YWJsZT4nXSxcbiAgY29sOiBbXG4gICAgMixcbiAgICAnPHRhYmxlPjx0Ym9keT48L3Rib2R5Pjxjb2xncm91cD4nLFxuICAgICc8L2NvbGdyb3VwPjwvdGFibGU+J1xuICBdXG59XG5cbm1hcC50ZCA9XG5tYXAudGggPSBbXG4gIDMsXG4gICc8dGFibGU+PHRib2R5Pjx0cj4nLFxuICAnPC90cj48L3Rib2R5PjwvdGFibGU+J1xuXVxuXG5tYXAub3B0aW9uID1cbm1hcC5vcHRncm91cCA9IFtcbiAgMSxcbiAgJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsXG4gICc8L3NlbGVjdD4nXG5dXG5cbm1hcC50aGVhZCA9XG5tYXAudGJvZHkgPVxubWFwLmNvbGdyb3VwID1cbm1hcC5jYXB0aW9uID1cbm1hcC50Zm9vdCA9IFsxLCAnPHRhYmxlPicsICc8L3RhYmxlPiddXG5cbm1hcC5nID1cbm1hcC5kZWZzID1cbm1hcC5zeW1ib2wgPVxubWFwLnVzZSA9XG5tYXAuaW1hZ2UgPVxubWFwLnRleHQgPVxubWFwLmNpcmNsZSA9XG5tYXAuZWxsaXBzZSA9XG5tYXAubGluZSA9XG5tYXAucGF0aCA9XG5tYXAucG9seWdvbiA9XG5tYXAucG9seWxpbmUgPVxubWFwLnJlY3QgPSBbXG4gIDEsXG4gICc8c3ZnICcgK1xuICAgICd4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJyArXG4gICAgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiICcgK1xuICAgICd4bWxuczpldj1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEveG1sLWV2ZW50c1wiJyArXG4gICAgJ3ZlcnNpb249XCIxLjFcIj4nLFxuICAnPC9zdmc+J1xuXVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhIHN1cHBvcnRlZCB0ZW1wbGF0ZSBub2RlIHdpdGggYVxuICogRG9jdW1lbnRGcmFnbWVudCBjb250ZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1JlYWxUZW1wbGF0ZSAobm9kZSkge1xuICByZXR1cm4gXy5pc1RlbXBsYXRlKG5vZGUpICYmXG4gICAgbm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudFxufVxuXG52YXIgdGFnUkUgPSAvPChbXFx3Ol0rKS9cbnZhciBlbnRpdHlSRSA9IC8mXFx3Kzt8JiNcXGQrO3wmI3hbXFxkQS1GXSs7L1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdGVtcGxhdGUgdG8gYSBEb2N1bWVudEZyYWdtZW50LlxuICogRGV0ZXJtaW5lcyBjb3JyZWN0IHdyYXBwaW5nIGJ5IHRhZyB0eXBlcy4gV3JhcHBpbmdcbiAqIHN0cmF0ZWd5IGZvdW5kIGluIGpRdWVyeSAmIGNvbXBvbmVudC9kb21pZnkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRlbXBsYXRlU3RyaW5nXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZ1RvRnJhZ21lbnQgKHRlbXBsYXRlU3RyaW5nKSB7XG4gIC8vIHRyeSBhIGNhY2hlIGhpdCBmaXJzdFxuICB2YXIgaGl0ID0gdGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGVTdHJpbmcpXG4gIGlmIChoaXQpIHtcbiAgICByZXR1cm4gaGl0XG4gIH1cblxuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICB2YXIgdGFnTWF0Y2ggPSB0ZW1wbGF0ZVN0cmluZy5tYXRjaCh0YWdSRSlcbiAgdmFyIGVudGl0eU1hdGNoID0gZW50aXR5UkUudGVzdCh0ZW1wbGF0ZVN0cmluZylcblxuICBpZiAoIXRhZ01hdGNoICYmICFlbnRpdHlNYXRjaCkge1xuICAgIC8vIHRleHQgb25seSwgcmV0dXJuIGEgc2luZ2xlIHRleHQgbm9kZS5cbiAgICBmcmFnLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGVtcGxhdGVTdHJpbmcpXG4gICAgKVxuICB9IGVsc2Uge1xuXG4gICAgdmFyIHRhZyA9IHRhZ01hdGNoICYmIHRhZ01hdGNoWzFdXG4gICAgdmFyIHdyYXAgPSBtYXBbdGFnXSB8fCBtYXAuX2RlZmF1bHRcbiAgICB2YXIgZGVwdGggPSB3cmFwWzBdXG4gICAgdmFyIHByZWZpeCA9IHdyYXBbMV1cbiAgICB2YXIgc3VmZml4ID0gd3JhcFsyXVxuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIG5vZGUuaW5uZXJIVE1MID0gcHJlZml4ICsgdGVtcGxhdGVTdHJpbmcudHJpbSgpICsgc3VmZml4XG4gICAgd2hpbGUgKGRlcHRoLS0pIHtcbiAgICAgIG5vZGUgPSBub2RlLmxhc3RDaGlsZFxuICAgIH1cblxuICAgIHZhciBjaGlsZFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgd2hpbGUgKGNoaWxkID0gbm9kZS5maXJzdENoaWxkKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgICAgZnJhZy5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZVN0cmluZywgZnJhZylcbiAgcmV0dXJuIGZyYWdcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdGVtcGxhdGUgbm9kZSB0byBhIERvY3VtZW50RnJhZ21lbnQuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIG5vZGVUb0ZyYWdtZW50IChub2RlKSB7XG4gIC8vIGlmIGl0cyBhIHRlbXBsYXRlIHRhZyBhbmQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgaXQsXG4gIC8vIGl0cyBjb250ZW50IGlzIGFscmVhZHkgYSBkb2N1bWVudCBmcmFnbWVudC5cbiAgaWYgKGlzUmVhbFRlbXBsYXRlKG5vZGUpKSB7XG4gICAgXy50cmltTm9kZShub2RlLmNvbnRlbnQpXG4gICAgcmV0dXJuIG5vZGUuY29udGVudFxuICB9XG4gIC8vIHNjcmlwdCB0ZW1wbGF0ZVxuICBpZiAobm9kZS50YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgIHJldHVybiBzdHJpbmdUb0ZyYWdtZW50KG5vZGUudGV4dENvbnRlbnQpXG4gIH1cbiAgLy8gbm9ybWFsIG5vZGUsIGNsb25lIGl0IHRvIGF2b2lkIG11dGF0aW5nIHRoZSBvcmlnaW5hbFxuICB2YXIgY2xvbmUgPSBleHBvcnRzLmNsb25lKG5vZGUpXG4gIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gIHZhciBjaGlsZFxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICB3aGlsZSAoY2hpbGQgPSBjbG9uZS5maXJzdENoaWxkKSB7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICBmcmFnLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG4gIF8udHJpbU5vZGUoZnJhZylcbiAgcmV0dXJuIGZyYWdcbn1cblxuLy8gVGVzdCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBTYWZhcmkgdGVtcGxhdGUgY2xvbmluZyBidWdcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzc3NTVcbnZhciBoYXNCcm9rZW5UZW1wbGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfLmluQnJvd3Nlcikge1xuICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhLmlubmVySFRNTCA9ICc8dGVtcGxhdGU+MTwvdGVtcGxhdGU+J1xuICAgIHJldHVybiAhYS5jbG9uZU5vZGUodHJ1ZSkuZmlyc3RDaGlsZC5pbm5lckhUTUxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vLyBUZXN0IGZvciBJRTEwLzExIHRleHRhcmVhIHBsYWNlaG9sZGVyIGNsb25lIGJ1Z1xudmFyIGhhc1RleHRhcmVhQ2xvbmVCdWcgPSAoZnVuY3Rpb24gKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoXy5pbkJyb3dzZXIpIHtcbiAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0LnBsYWNlaG9sZGVyID0gJ3QnXG4gICAgcmV0dXJuIHQuY2xvbmVOb2RlKHRydWUpLnZhbHVlID09PSAndCdcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIDEuIERlYWwgd2l0aCBTYWZhcmkgY2xvbmluZyBuZXN0ZWQgPHRlbXBsYXRlPiBidWcgYnlcbiAqICAgIG1hbnVhbGx5IGNsb25pbmcgYWxsIHRlbXBsYXRlIGluc3RhbmNlcy5cbiAqIDIuIERlYWwgd2l0aCBJRTEwLzExIHRleHRhcmVhIHBsYWNlaG9sZGVyIGJ1ZyBieSBzZXR0aW5nXG4gKiAgICB0aGUgY29ycmVjdCB2YWx1ZSBhZnRlciBjbG9uaW5nLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0cy5jbG9uZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmICghbm9kZS5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgcmV0dXJuIG5vZGUuY2xvbmVOb2RlKClcbiAgfVxuICB2YXIgcmVzID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgdmFyIGksIG9yaWdpbmFsLCBjbG9uZWRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChoYXNCcm9rZW5UZW1wbGF0ZSkge1xuICAgIHZhciBjbG9uZSA9IHJlc1xuICAgIGlmIChpc1JlYWxUZW1wbGF0ZShub2RlKSkge1xuICAgICAgbm9kZSA9IG5vZGUuY29udGVudFxuICAgICAgY2xvbmUgPSByZXMuY29udGVudFxuICAgIH1cbiAgICBvcmlnaW5hbCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKVxuICAgIGlmIChvcmlnaW5hbC5sZW5ndGgpIHtcbiAgICAgIGNsb25lZCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RlbXBsYXRlJylcbiAgICAgIGkgPSBjbG9uZWQubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNsb25lZFtpXS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICAgICBleHBvcnRzLmNsb25lKG9yaWdpbmFsW2ldKSxcbiAgICAgICAgICBjbG9uZWRbaV1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGhhc1RleHRhcmVhQ2xvbmVCdWcpIHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICByZXMudmFsdWUgPSBub2RlLnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWdpbmFsID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXG4gICAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICAgIGNsb25lZCA9IHJlcy5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXG4gICAgICAgIGkgPSBjbG9uZWQubGVuZ3RoXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBjbG9uZWRbaV0udmFsdWUgPSBvcmlnaW5hbFtpXS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHRoZSB0ZW1wbGF0ZSBvcHRpb24gYW5kIG5vcm1hbGl6ZXMgaXQgaW50byBhXG4gKiBhIERvY3VtZW50RnJhZ21lbnQgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIHBhcnRpYWwgb3IgYVxuICogaW5zdGFuY2UgdGVtcGxhdGUuXG4gKlxuICogQHBhcmFtIHsqfSB0ZW1wbGF0ZVxuICogICAgUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6XG4gKiAgICAtIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0XG4gKiAgICAtIE5vZGUgb2JqZWN0IG9mIHR5cGUgVGVtcGxhdGVcbiAqICAgIC0gaWQgc2VsZWN0b3I6ICcjc29tZS10ZW1wbGF0ZS1pZCdcbiAqICAgIC0gdGVtcGxhdGUgc3RyaW5nOiAnPGRpdj48c3Bhbj57e21zZ319PC9zcGFuPjwvZGl2PidcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xvbmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbm9TZWxlY3RvclxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudHx1bmRlZmluZWR9XG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgY2xvbmUsIG5vU2VsZWN0b3IpIHtcbiAgdmFyIG5vZGUsIGZyYWdcblxuICAvLyBpZiB0aGUgdGVtcGxhdGUgaXMgYWxyZWFkeSBhIGRvY3VtZW50IGZyYWdtZW50LFxuICAvLyBkbyBub3RoaW5nXG4gIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICBfLnRyaW1Ob2RlKHRlbXBsYXRlKVxuICAgIHJldHVybiBjbG9uZVxuICAgICAgPyBleHBvcnRzLmNsb25lKHRlbXBsYXRlKVxuICAgICAgOiB0ZW1wbGF0ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBpZCBzZWxlY3RvclxuICAgIGlmICghbm9TZWxlY3RvciAmJiB0ZW1wbGF0ZS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgLy8gaWQgc2VsZWN0b3IgY2FuIGJlIGNhY2hlZCB0b29cbiAgICAgIGZyYWcgPSBpZFNlbGVjdG9yQ2FjaGUuZ2V0KHRlbXBsYXRlKVxuICAgICAgaWYgKCFmcmFnKSB7XG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZS5zbGljZSgxKSlcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICBmcmFnID0gbm9kZVRvRnJhZ21lbnQobm9kZSlcbiAgICAgICAgICAvLyBzYXZlIHNlbGVjdG9yIHRvIGNhY2hlXG4gICAgICAgICAgaWRTZWxlY3RvckNhY2hlLnB1dCh0ZW1wbGF0ZSwgZnJhZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3JtYWwgc3RyaW5nIHRlbXBsYXRlXG4gICAgICBmcmFnID0gc3RyaW5nVG9GcmFnbWVudCh0ZW1wbGF0ZSlcbiAgICB9XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUubm9kZVR5cGUpIHtcbiAgICAvLyBhIGRpcmVjdCBub2RlXG4gICAgZnJhZyA9IG5vZGVUb0ZyYWdtZW50KHRlbXBsYXRlKVxuICB9XG5cbiAgcmV0dXJuIGZyYWcgJiYgY2xvbmVcbiAgICA/IGV4cG9ydHMuY2xvbmUoZnJhZylcbiAgICA6IGZyYWdcbn1cbiIsInZhciBDYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxudmFyIGRpclBhcnNlciA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlJylcbnZhciByZWdleEVzY2FwZVJFID0gL1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZ1xudmFyIGNhY2hlLCB0YWdSRSwgaHRtbFJFXG5cbi8qKlxuICogRXNjYXBlIGEgc3RyaW5nIHNvIGl0IGNhbiBiZSB1c2VkIGluIGEgUmVnRXhwXG4gKiBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlUmVnZXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXhFc2NhcGVSRSwgJ1xcXFwkJicpXG59XG5cbmV4cG9ydHMuY29tcGlsZVJlZ2V4ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3BlbiA9IGVzY2FwZVJlZ2V4KGNvbmZpZy5kZWxpbWl0ZXJzWzBdKVxuICB2YXIgY2xvc2UgPSBlc2NhcGVSZWdleChjb25maWcuZGVsaW1pdGVyc1sxXSlcbiAgdmFyIHVuc2FmZU9wZW4gPSBlc2NhcGVSZWdleChjb25maWcudW5zYWZlRGVsaW1pdGVyc1swXSlcbiAgdmFyIHVuc2FmZUNsb3NlID0gZXNjYXBlUmVnZXgoY29uZmlnLnVuc2FmZURlbGltaXRlcnNbMV0pXG4gIHRhZ1JFID0gbmV3IFJlZ0V4cChcbiAgICB1bnNhZmVPcGVuICsgJyguKz8pJyArIHVuc2FmZUNsb3NlICsgJ3wnICtcbiAgICBvcGVuICsgJyguKz8pJyArIGNsb3NlLFxuICAgICdnJ1xuICApXG4gIGh0bWxSRSA9IG5ldyBSZWdFeHAoXG4gICAgJ14nICsgdW5zYWZlT3BlbiArICcuKicgKyB1bnNhZmVDbG9zZSArICckJ1xuICApXG4gIC8vIHJlc2V0IGNhY2hlXG4gIGNhY2hlID0gbmV3IENhY2hlKDEwMDApXG59XG5cbi8qKlxuICogUGFyc2UgYSB0ZW1wbGF0ZSB0ZXh0IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHRva2Vucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0PiB8IG51bGx9XG4gKiAgICAgICAgICAgICAgIC0ge1N0cmluZ30gdHlwZVxuICogICAgICAgICAgICAgICAtIHtTdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IFtodG1sXVxuICogICAgICAgICAgICAgICAtIHtCb29sZWFufSBbb25lVGltZV1cbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCFjYWNoZSkge1xuICAgIGV4cG9ydHMuY29tcGlsZVJlZ2V4KClcbiAgfVxuICB2YXIgaGl0ID0gY2FjaGUuZ2V0KHRleHQpXG4gIGlmIChoaXQpIHtcbiAgICByZXR1cm4gaGl0XG4gIH1cbiAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxuL2csICcnKVxuICBpZiAoIXRhZ1JFLnRlc3QodGV4dCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIgbGFzdEluZGV4ID0gdGFnUkUubGFzdEluZGV4ID0gMFxuICB2YXIgbWF0Y2gsIGluZGV4LCBodG1sLCB2YWx1ZSwgZmlyc3QsIG9uZVRpbWVcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKG1hdGNoID0gdGFnUkUuZXhlYyh0ZXh0KSkge1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgaW5kZXggPSBtYXRjaC5pbmRleFxuICAgIC8vIHB1c2ggdGV4dCB0b2tlblxuICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB2YWx1ZTogdGV4dC5zbGljZShsYXN0SW5kZXgsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gdGFnIHRva2VuXG4gICAgaHRtbCA9IGh0bWxSRS50ZXN0KG1hdGNoWzBdKVxuICAgIHZhbHVlID0gaHRtbCA/IG1hdGNoWzFdIDogbWF0Y2hbMl1cbiAgICBmaXJzdCA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgICBvbmVUaW1lID0gZmlyc3QgPT09IDQyIC8vICpcbiAgICB2YWx1ZSA9IG9uZVRpbWVcbiAgICAgID8gdmFsdWUuc2xpY2UoMSlcbiAgICAgIDogdmFsdWVcbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICB0YWc6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWUudHJpbSgpLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIG9uZVRpbWU6IG9uZVRpbWVcbiAgICB9KVxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gIH1cbiAgaWYgKGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgdmFsdWU6IHRleHQuc2xpY2UobGFzdEluZGV4KVxuICAgIH0pXG4gIH1cbiAgY2FjaGUucHV0KHRleHQsIHRva2VucylcbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIGxpc3Qgb2YgdG9rZW5zIGludG8gYW4gZXhwcmVzc2lvbi5cbiAqIGUuZy4gdG9rZW5zIHBhcnNlZCBmcm9tICdhIHt7Yn19IGMnIGNhbiBiZSBzZXJpYWxpemVkXG4gKiBpbnRvIG9uZSBzaW5nbGUgZXhwcmVzc2lvbiBhcyAnXCJhIFwiICsgYiArIFwiIGNcIicuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy50b2tlbnNUb0V4cCA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgaWYgKHRva2Vucy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICByZXR1cm4gZm9ybWF0VG9rZW4odG9rZW4pXG4gICAgfSkuam9pbignKycpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm1hdFRva2VuKHRva2Vuc1swXSwgdHJ1ZSlcbiAgfVxufVxuXG4vKipcbiAqIEZvcm1hdCBhIHNpbmdsZSB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9rZW5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2luZ2xlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0VG9rZW4gKHRva2VuLCBzaW5nbGUpIHtcbiAgcmV0dXJuIHRva2VuLnRhZ1xuICAgID8gaW5saW5lRmlsdGVycyh0b2tlbi52YWx1ZSwgc2luZ2xlKVxuICAgIDogJ1wiJyArIHRva2VuLnZhbHVlICsgJ1wiJ1xufVxuXG4vKipcbiAqIEZvciBhbiBhdHRyaWJ1dGUgd2l0aCBtdWx0aXBsZSBpbnRlcnBvbGF0aW9uIHRhZ3MsXG4gKiBlLmcuIGF0dHI9XCJzb21lLXt7dGhpbmcgfCBmaWx0ZXJ9fVwiLCBpbiBvcmRlciB0byBjb21iaW5lXG4gKiB0aGUgd2hvbGUgdGhpbmcgaW50byBhIHNpbmdsZSB3YXRjaGFibGUgZXhwcmVzc2lvbiwgd2VcbiAqIGhhdmUgdG8gaW5saW5lIHRob3NlIGZpbHRlcnMuIFRoaXMgZnVuY3Rpb24gZG9lcyBleGFjdGx5XG4gKiB0aGF0LiBUaGlzIGlzIGEgYml0IGhhY2t5IGJ1dCBpdCBhdm9pZHMgaGVhdnkgY2hhbmdlc1xuICogdG8gZGlyZWN0aXZlIHBhcnNlciBhbmQgd2F0Y2hlciBtZWNoYW5pc20uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHBhcmFtIHtCb29sZWFufSBzaW5nbGVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgZmlsdGVyUkUgPSAvW158XVxcfFtefF0vXG5mdW5jdGlvbiBpbmxpbmVGaWx0ZXJzIChleHAsIHNpbmdsZSkge1xuICBpZiAoIWZpbHRlclJFLnRlc3QoZXhwKSkge1xuICAgIHJldHVybiBzaW5nbGVcbiAgICAgID8gZXhwXG4gICAgICA6ICcoJyArIGV4cCArICcpJ1xuICB9IGVsc2Uge1xuICAgIHZhciBkaXIgPSBkaXJQYXJzZXIucGFyc2UoZXhwKVxuICAgIGlmICghZGlyLmZpbHRlcnMpIHtcbiAgICAgIHJldHVybiAnKCcgKyBleHAgKyAnKSdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd0aGlzLl9hcHBseUZpbHRlcnMoJyArXG4gICAgICAgIGRpci5leHByZXNzaW9uICsgLy8gdmFsdWVcbiAgICAgICAgJyxudWxsLCcgKyAgICAgICAvLyBvbGRWYWx1ZSAobnVsbCBmb3IgcmVhZClcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlyLmZpbHRlcnMpICsgLy8gZmlsdGVyIGRlc2NyaXB0b3JzXG4gICAgICAgICcsZmFsc2UpJyAgICAgICAgLy8gd3JpdGU/XG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxuXG4vKipcbiAqIEFwcGVuZCB3aXRoIHRyYW5zaXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmV4cG9ydHMuYXBwZW5kID0gZnVuY3Rpb24gKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICBhcHBseShlbCwgMSwgZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbClcbiAgfSwgdm0sIGNiKVxufVxuXG4vKipcbiAqIEluc2VydEJlZm9yZSB3aXRoIHRyYW5zaXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmV4cG9ydHMuYmVmb3JlID0gZnVuY3Rpb24gKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICBhcHBseShlbCwgMSwgZnVuY3Rpb24gKCkge1xuICAgIF8uYmVmb3JlKGVsLCB0YXJnZXQpXG4gIH0sIHZtLCBjYilcbn1cblxuLyoqXG4gKiBSZW1vdmUgd2l0aCB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKGVsLCB2bSwgY2IpIHtcbiAgYXBwbHkoZWwsIC0xLCBmdW5jdGlvbiAoKSB7XG4gICAgXy5yZW1vdmUoZWwpXG4gIH0sIHZtLCBjYilcbn1cblxuLyoqXG4gKiBBcHBseSB0cmFuc2l0aW9ucyB3aXRoIGFuIG9wZXJhdGlvbiBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge051bWJlcn0gZGlyZWN0aW9uXG4gKiAgICAgICAgICAgICAgICAgIDE6IGVudGVyXG4gKiAgICAgICAgICAgICAgICAgLTE6IGxlYXZlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcCAtIHRoZSBhY3R1YWwgRE9NIG9wZXJhdGlvblxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxudmFyIGFwcGx5ID0gZXhwb3J0cy5hcHBseSA9IGZ1bmN0aW9uIChlbCwgZGlyZWN0aW9uLCBvcCwgdm0sIGNiKSB7XG4gIHZhciB0cmFuc2l0aW9uID0gZWwuX192X3RyYW5zXG4gIGlmIChcbiAgICAhdHJhbnNpdGlvbiB8fFxuICAgIC8vIHNraXAgaWYgdGhlcmUgYXJlIG5vIGpzIGhvb2tzIGFuZCBDU1MgdHJhbnNpdGlvbiBpc1xuICAgIC8vIG5vdCBzdXBwb3J0ZWRcbiAgICAoIXRyYW5zaXRpb24uaG9va3MgJiYgIV8udHJhbnNpdGlvbkVuZEV2ZW50KSB8fFxuICAgIC8vIHNraXAgdHJhbnNpdGlvbnMgZm9yIGluaXRpYWwgY29tcGlsZVxuICAgICF2bS5faXNDb21waWxlZCB8fFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBtYW5pcHVsYXRlZCBieSBhIHBhcmVudCBkaXJlY3RpdmVcbiAgICAvLyBkdXJpbmcgdGhlIHBhcmVudCdzIGNvbXBpbGF0aW9uIHBoYXNlLCBza2lwIHRoZVxuICAgIC8vIGFuaW1hdGlvbi5cbiAgICAodm0uJHBhcmVudCAmJiAhdm0uJHBhcmVudC5faXNDb21waWxlZClcbiAgKSB7XG4gICAgb3AoKVxuICAgIGlmIChjYikgY2IoKVxuICAgIHJldHVyblxuICB9XG4gIHZhciBhY3Rpb24gPSBkaXJlY3Rpb24gPiAwID8gJ2VudGVyJyA6ICdsZWF2ZSdcbiAgdHJhbnNpdGlvblthY3Rpb25dKG9wLCBjYilcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgcXVldWUgPSBbXVxudmFyIHF1ZXVlZCA9IGZhbHNlXG5cbi8qKlxuICogUHVzaCBhIGpvYiBpbnRvIHRoZSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBqb2JcbiAqL1xuXG5leHBvcnRzLnB1c2ggPSBmdW5jdGlvbiAoam9iKSB7XG4gIHF1ZXVlLnB1c2goam9iKVxuICBpZiAoIXF1ZXVlZCkge1xuICAgIHF1ZXVlZCA9IHRydWVcbiAgICBfLm5leHRUaWNrKGZsdXNoKVxuICB9XG59XG5cbi8qKlxuICogRmx1c2ggdGhlIHF1ZXVlLCBhbmQgZG8gb25lIGZvcmNlZCByZWZsb3cgYmVmb3JlXG4gKiB0cmlnZ2VyaW5nIHRyYW5zaXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoICgpIHtcbiAgLy8gRm9yY2UgbGF5b3V0XG4gIHZhciBmID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKVxuICB9XG4gIHF1ZXVlID0gW11cbiAgcXVldWVkID0gZmFsc2VcbiAgLy8gZHVtbXkgcmV0dXJuLCBzbyBqcyBsaW50ZXJzIGRvbid0IGNvbXBsYWluIGFib3V0XG4gIC8vIHVudXNlZCB2YXJpYWJsZSBmXG4gIHJldHVybiBmXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHF1ZXVlID0gcmVxdWlyZSgnLi9xdWV1ZScpXG52YXIgYWRkQ2xhc3MgPSBfLmFkZENsYXNzXG52YXIgcmVtb3ZlQ2xhc3MgPSBfLnJlbW92ZUNsYXNzXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0gXy50cmFuc2l0aW9uRW5kRXZlbnRcbnZhciBhbmltYXRpb25FbmRFdmVudCA9IF8uYW5pbWF0aW9uRW5kRXZlbnRcbnZhciB0cmFuc0R1cmF0aW9uUHJvcCA9IF8udHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXG52YXIgYW5pbUR1cmF0aW9uUHJvcCA9IF8uYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbidcblxudmFyIFRZUEVfVFJBTlNJVElPTiA9IDFcbnZhciBUWVBFX0FOSU1BVElPTiA9IDJcblxuLyoqXG4gKiBBIFRyYW5zaXRpb24gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzdGF0ZSBhbmQgbG9naWNcbiAqIG9mIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IGhvb2tzXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5mdW5jdGlvbiBUcmFuc2l0aW9uIChlbCwgaWQsIGhvb2tzLCB2bSkge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5lbCA9IGVsXG4gIHRoaXMuZW50ZXJDbGFzcyA9IGlkICsgJy1lbnRlcidcbiAgdGhpcy5sZWF2ZUNsYXNzID0gaWQgKyAnLWxlYXZlJ1xuICB0aGlzLmhvb2tzID0gaG9va3NcbiAgdGhpcy52bSA9IHZtXG4gIC8vIGFzeW5jIHN0YXRlXG4gIHRoaXMucGVuZGluZ0Nzc0V2ZW50ID1cbiAgdGhpcy5wZW5kaW5nQ3NzQ2IgPVxuICB0aGlzLmNhbmNlbCA9XG4gIHRoaXMucGVuZGluZ0pzQ2IgPVxuICB0aGlzLm9wID1cbiAgdGhpcy5jYiA9IG51bGxcbiAgdGhpcy5qdXN0RW50ZXJlZCA9IGZhbHNlXG4gIHRoaXMuZW50ZXJlZCA9IHRoaXMubGVmdCA9IGZhbHNlXG4gIHRoaXMudHlwZUNhY2hlID0ge31cbiAgLy8gYmluZFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgO1snZW50ZXJOZXh0VGljaycsICdlbnRlckRvbmUnLCAnbGVhdmVOZXh0VGljaycsICdsZWF2ZURvbmUnXVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICBzZWxmW21dID0gXy5iaW5kKHNlbGZbbV0sIHNlbGYpXG4gICAgfSlcbn1cblxudmFyIHAgPSBUcmFuc2l0aW9uLnByb3RvdHlwZVxuXG4vKipcbiAqIFN0YXJ0IGFuIGVudGVyaW5nIHRyYW5zaXRpb24uXG4gKlxuICogMS4gZW50ZXIgdHJhbnNpdGlvbiB0cmlnZ2VyZWRcbiAqIDIuIGNhbGwgYmVmb3JlRW50ZXIgaG9va1xuICogMy4gYWRkIGVudGVyIGNsYXNzXG4gKiA0LiBpbnNlcnQvc2hvdyBlbGVtZW50XG4gKiA1LiBjYWxsIGVudGVyIGhvb2sgKHdpdGggcG9zc2libGUgZXhwbGljaXQganMgY2FsbGJhY2spXG4gKiA2LiByZWZsb3dcbiAqIDcuIGJhc2VkIG9uIHRyYW5zaXRpb24gdHlwZTpcbiAqICAgIC0gdHJhbnNpdGlvbjpcbiAqICAgICAgICByZW1vdmUgY2xhc3Mgbm93LCB3YWl0IGZvciB0cmFuc2l0aW9uZW5kLFxuICogICAgICAgIHRoZW4gZG9uZSBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogICAgLSBhbmltYXRpb246XG4gKiAgICAgICAgd2FpdCBmb3IgYW5pbWF0aW9uZW5kLCByZW1vdmUgY2xhc3MsXG4gKiAgICAgICAgdGhlbiBkb25lIGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiAgICAtIG5vIGNzcyB0cmFuc2l0aW9uOlxuICogICAgICAgIGRvbmUgbm93IGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiA4LiB3YWl0IGZvciBlaXRoZXIgZG9uZSBvciBqcyBjYWxsYmFjaywgdGhlbiBjYWxsXG4gKiAgICBhZnRlckVudGVyIGhvb2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSBpbnNlcnQvc2hvdyB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbnAuZW50ZXIgPSBmdW5jdGlvbiAob3AsIGNiKSB7XG4gIHRoaXMuY2FuY2VsUGVuZGluZygpXG4gIHRoaXMuY2FsbEhvb2soJ2JlZm9yZUVudGVyJylcbiAgdGhpcy5jYiA9IGNiXG4gIGFkZENsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcylcbiAgb3AoKVxuICB0aGlzLmVudGVyZWQgPSBmYWxzZVxuICB0aGlzLmNhbGxIb29rV2l0aENiKCdlbnRlcicpXG4gIGlmICh0aGlzLmVudGVyZWQpIHtcbiAgICByZXR1cm4gLy8gdXNlciBjYWxsZWQgZG9uZSBzeW5jaHJvbm91c2x5LlxuICB9XG4gIHRoaXMuY2FuY2VsID0gdGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzLmVudGVyQ2FuY2VsbGVkXG4gIHF1ZXVlLnB1c2godGhpcy5lbnRlck5leHRUaWNrKVxufVxuXG4vKipcbiAqIFRoZSBcIm5leHRUaWNrXCIgcGhhc2Ugb2YgYW4gZW50ZXJpbmcgdHJhbnNpdGlvbiwgd2hpY2ggaXNcbiAqIHRvIGJlIHB1c2hlZCBpbnRvIGEgcXVldWUgYW5kIGV4ZWN1dGVkIGFmdGVyIGEgcmVmbG93IHNvXG4gKiB0aGF0IHJlbW92aW5nIHRoZSBjbGFzcyBjYW4gdHJpZ2dlciBhIENTUyB0cmFuc2l0aW9uLlxuICovXG5cbnAuZW50ZXJOZXh0VGljayA9IGZ1bmN0aW9uICgpIHtcblxuICAvLyBJbXBvcnRhbnQgaGFjazpcbiAgLy8gaW4gQ2hyb21lLCBpZiBhIGp1c3QtZW50ZXJlZCBlbGVtZW50IGlzIGFwcGxpZWQgdGhlXG4gIC8vIGxlYXZlIGNsYXNzIHdoaWxlIGl0cyBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgc3RpbGwgaGFzXG4gIC8vIGEgdmVyeSBzbWFsbCB2YWx1ZSAod2l0aGluIG9uZSBmcmFtZSksIENocm9tZSB3aWxsXG4gIC8vIHNraXAgdGhlIGxlYXZlIHRyYW5zaXRpb24gZW50aXJlbHkgYW5kIG5vdCBmaXJpbmcgdGhlXG4gIC8vIHRyYW5zdGlvbmVuZCBldmVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG8gcHJvdGVjdGVkXG4gIC8vIGFnYWluc3Qgc3VjaCBjYXNlcyB1c2luZyBhIG9uZS1mcmFtZSB0aW1lb3V0LlxuICB0aGlzLmp1c3RFbnRlcmVkID0gdHJ1ZVxuICB2YXIgc2VsZiA9IHRoaXNcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5qdXN0RW50ZXJlZCA9IGZhbHNlXG4gIH0sIDE3KVxuXG4gIHZhciBlbnRlckRvbmUgPSB0aGlzLmVudGVyRG9uZVxuICB2YXIgdHlwZSA9IHRoaXMuZ2V0Q3NzVHJhbnNpdGlvblR5cGUodGhpcy5lbnRlckNsYXNzKVxuICBpZiAoIXRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICBpZiAodHlwZSA9PT0gVFlQRV9UUkFOU0lUSU9OKSB7XG4gICAgICAvLyB0cmlnZ2VyIHRyYW5zaXRpb24gYnkgcmVtb3ZpbmcgZW50ZXIgY2xhc3Mgbm93XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpXG4gICAgICB0aGlzLnNldHVwQ3NzQ2IodHJhbnNpdGlvbkVuZEV2ZW50LCBlbnRlckRvbmUpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBUWVBFX0FOSU1BVElPTikge1xuICAgICAgdGhpcy5zZXR1cENzc0NiKGFuaW1hdGlvbkVuZEV2ZW50LCBlbnRlckRvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyRG9uZSgpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFRZUEVfVFJBTlNJVElPTikge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcylcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBcImNsZWFudXBcIiBwaGFzZSBvZiBhbiBlbnRlcmluZyB0cmFuc2l0aW9uLlxuICovXG5cbnAuZW50ZXJEb25lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVudGVyZWQgPSB0cnVlXG4gIHRoaXMuY2FuY2VsID0gdGhpcy5wZW5kaW5nSnNDYiA9IG51bGxcbiAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKVxuICB0aGlzLmNhbGxIb29rKCdhZnRlckVudGVyJylcbiAgaWYgKHRoaXMuY2IpIHRoaXMuY2IoKVxufVxuXG4vKipcbiAqIFN0YXJ0IGEgbGVhdmluZyB0cmFuc2l0aW9uLlxuICpcbiAqIDEuIGxlYXZlIHRyYW5zaXRpb24gdHJpZ2dlcmVkLlxuICogMi4gY2FsbCBiZWZvcmVMZWF2ZSBob29rXG4gKiAzLiBhZGQgbGVhdmUgY2xhc3MgKHRyaWdnZXIgY3NzIHRyYW5zaXRpb24pXG4gKiA0LiBjYWxsIGxlYXZlIGhvb2sgKHdpdGggcG9zc2libGUgZXhwbGljaXQganMgY2FsbGJhY2spXG4gKiA1LiByZWZsb3cgaWYgbm8gZXhwbGljaXQganMgY2FsbGJhY2sgaXMgcHJvdmlkZWRcbiAqIDYuIGJhc2VkIG9uIHRyYW5zaXRpb24gdHlwZTpcbiAqICAgIC0gdHJhbnNpdGlvbiBvciBhbmltYXRpb246XG4gKiAgICAgICAgd2FpdCBmb3IgZW5kIGV2ZW50LCByZW1vdmUgY2xhc3MsIHRoZW4gZG9uZSBpZlxuICogICAgICAgIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiAgICAtIG5vIGNzcyB0cmFuc2l0aW9uOlxuICogICAgICAgIGRvbmUgaWYgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqIDcuIHdhaXQgZm9yIGVpdGhlciBkb25lIG9yIGpzIGNhbGxiYWNrLCB0aGVuIGNhbGxcbiAqICAgIGFmdGVyTGVhdmUgaG9vay5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcCAtIHJlbW92ZS9oaWRlIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxucC5sZWF2ZSA9IGZ1bmN0aW9uIChvcCwgY2IpIHtcbiAgdGhpcy5jYW5jZWxQZW5kaW5nKClcbiAgdGhpcy5jYWxsSG9vaygnYmVmb3JlTGVhdmUnKVxuICB0aGlzLm9wID0gb3BcbiAgdGhpcy5jYiA9IGNiXG4gIGFkZENsYXNzKHRoaXMuZWwsIHRoaXMubGVhdmVDbGFzcylcbiAgdGhpcy5sZWZ0ID0gZmFsc2VcbiAgdGhpcy5jYWxsSG9va1dpdGhDYignbGVhdmUnKVxuICBpZiAodGhpcy5sZWZ0KSB7XG4gICAgcmV0dXJuIC8vIHVzZXIgY2FsbGVkIGRvbmUgc3luY2hyb25vdXNseS5cbiAgfVxuICB0aGlzLmNhbmNlbCA9IHRoaXMuaG9va3MgJiYgdGhpcy5ob29rcy5sZWF2ZUNhbmNlbGxlZFxuICAvLyBvbmx5IG5lZWQgdG8gaGFuZGxlIGxlYXZlRG9uZSBpZlxuICAvLyAxLiB0aGUgdHJhbnNpdGlvbiBpcyBhbHJlYWR5IGRvbmUgKHN5bmNocm9ub3VzbHkgY2FsbGVkXG4gIC8vICAgIGJ5IHRoZSB1c2VyLCB3aGljaCBjYXVzZXMgdGhpcy5vcCBzZXQgdG8gbnVsbClcbiAgLy8gMi4gdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFja1xuICBpZiAodGhpcy5vcCAmJiAhdGhpcy5wZW5kaW5nSnNDYikge1xuICAgIC8vIGlmIGEgQ1NTIHRyYW5zaXRpb24gbGVhdmVzIGltbWVkaWF0ZWx5IGFmdGVyIGVudGVyLFxuICAgIC8vIHRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50IG5ldmVyIGZpcmVzLiB0aGVyZWZvcmUgd2VcbiAgICAvLyBkZXRlY3Qgc3VjaCBjYXNlcyBhbmQgZW5kIHRoZSBsZWF2ZSBpbW1lZGlhdGVseS5cbiAgICBpZiAodGhpcy5qdXN0RW50ZXJlZCkge1xuICAgICAgdGhpcy5sZWF2ZURvbmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZS5wdXNoKHRoaXMubGVhdmVOZXh0VGljaylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgXCJuZXh0VGlja1wiIHBoYXNlIG9mIGEgbGVhdmluZyB0cmFuc2l0aW9uLlxuICovXG5cbnAubGVhdmVOZXh0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldENzc1RyYW5zaXRpb25UeXBlKHRoaXMubGVhdmVDbGFzcylcbiAgaWYgKHR5cGUpIHtcbiAgICB2YXIgZXZlbnQgPSB0eXBlID09PSBUWVBFX1RSQU5TSVRJT05cbiAgICAgID8gdHJhbnNpdGlvbkVuZEV2ZW50XG4gICAgICA6IGFuaW1hdGlvbkVuZEV2ZW50XG4gICAgdGhpcy5zZXR1cENzc0NiKGV2ZW50LCB0aGlzLmxlYXZlRG9uZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxlYXZlRG9uZSgpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgXCJjbGVhbnVwXCIgcGhhc2Ugb2YgYSBsZWF2aW5nIHRyYW5zaXRpb24uXG4gKi9cblxucC5sZWF2ZURvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGVmdCA9IHRydWVcbiAgdGhpcy5jYW5jZWwgPSB0aGlzLnBlbmRpbmdKc0NiID0gbnVsbFxuICB0aGlzLm9wKClcbiAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5sZWF2ZUNsYXNzKVxuICB0aGlzLmNhbGxIb29rKCdhZnRlckxlYXZlJylcbiAgaWYgKHRoaXMuY2IpIHRoaXMuY2IoKVxuICB0aGlzLm9wID0gbnVsbFxufVxuXG4vKipcbiAqIENhbmNlbCBhbnkgcGVuZGluZyBjYWxsYmFja3MgZnJvbSBhIHByZXZpb3VzbHkgcnVubmluZ1xuICogYnV0IG5vdCBmaW5pc2hlZCB0cmFuc2l0aW9uLlxuICovXG5cbnAuY2FuY2VsUGVuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcCA9IHRoaXMuY2IgPSBudWxsXG4gIHZhciBoYXNQZW5kaW5nID0gZmFsc2VcbiAgaWYgKHRoaXMucGVuZGluZ0Nzc0NiKSB7XG4gICAgaGFzUGVuZGluZyA9IHRydWVcbiAgICBfLm9mZih0aGlzLmVsLCB0aGlzLnBlbmRpbmdDc3NFdmVudCwgdGhpcy5wZW5kaW5nQ3NzQ2IpXG4gICAgdGhpcy5wZW5kaW5nQ3NzRXZlbnQgPSB0aGlzLnBlbmRpbmdDc3NDYiA9IG51bGxcbiAgfVxuICBpZiAodGhpcy5wZW5kaW5nSnNDYikge1xuICAgIGhhc1BlbmRpbmcgPSB0cnVlXG4gICAgdGhpcy5wZW5kaW5nSnNDYi5jYW5jZWwoKVxuICAgIHRoaXMucGVuZGluZ0pzQ2IgPSBudWxsXG4gIH1cbiAgaWYgKGhhc1BlbmRpbmcpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5sZWF2ZUNsYXNzKVxuICB9XG4gIGlmICh0aGlzLmNhbmNlbCkge1xuICAgIHRoaXMuY2FuY2VsLmNhbGwodGhpcy52bSwgdGhpcy5lbClcbiAgICB0aGlzLmNhbmNlbCA9IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgYSB1c2VyLXByb3ZpZGVkIHN5bmNocm9ub3VzIGhvb2sgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5wLmNhbGxIb29rID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHRoaXMuaG9va3MgJiYgdGhpcy5ob29rc1t0eXBlXSkge1xuICAgIHRoaXMuaG9va3NbdHlwZV0uY2FsbCh0aGlzLnZtLCB0aGlzLmVsKVxuICB9XG59XG5cbi8qKlxuICogQ2FsbCBhIHVzZXItcHJvdmlkZWQsIHBvdGVudGlhbGx5LWFzeW5jIGhvb2sgZnVuY3Rpb24uXG4gKiBXZSBjaGVjayBmb3IgdGhlIGxlbmd0aCBvZiBhcmd1bWVudHMgdG8gc2VlIGlmIHRoZSBob29rXG4gKiBleHBlY3RzIGEgYGRvbmVgIGNhbGxiYWNrLiBJZiB0cnVlLCB0aGUgdHJhbnNpdGlvbidzIGVuZFxuICogd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHdoZW4gdGhlIHVzZXIgY2FsbHMgdGhhdCBjYWxsYmFjaztcbiAqIG90aGVyd2lzZSwgdGhlIGVuZCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBDU1MgdHJhbnNpdGlvbiBvclxuICogYW5pbWF0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cblxucC5jYWxsSG9va1dpdGhDYiA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHZhciBob29rID0gdGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzW3R5cGVdXG4gIGlmIChob29rKSB7XG4gICAgaWYgKGhvb2subGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5wZW5kaW5nSnNDYiA9IF8uY2FuY2VsbGFibGUodGhpc1t0eXBlICsgJ0RvbmUnXSlcbiAgICB9XG4gICAgaG9vay5jYWxsKHRoaXMudm0sIHRoaXMuZWwsIHRoaXMucGVuZGluZ0pzQ2IpXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYW4gZWxlbWVudCdzIHRyYW5zaXRpb24gdHlwZSBiYXNlZCBvbiB0aGVcbiAqIGNhbGN1bGF0ZWQgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG5wLmdldENzc1RyYW5zaXRpb25UeXBlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgICF0cmFuc2l0aW9uRW5kRXZlbnQgfHxcbiAgICAvLyBza2lwIENTUyB0cmFuc2l0aW9ucyBpZiBwYWdlIGlzIG5vdCB2aXNpYmxlIC1cbiAgICAvLyB0aGlzIHNvbHZlcyB0aGUgaXNzdWUgb2YgdHJhbnNpdGlvbmVuZCBldmVudHMgbm90XG4gICAgLy8gZmlyaW5nIHVudGlsIHRoZSBwYWdlIGlzIHZpc2libGUgYWdhaW4uXG4gICAgLy8gcGFnZVZpc2liaWxpdHkgQVBJIGlzIHN1cHBvcnRlZCBpbiBJRTEwKywgc2FtZSBhc1xuICAgIC8vIENTUyB0cmFuc2l0aW9ucy5cbiAgICBkb2N1bWVudC5oaWRkZW4gfHxcbiAgICAvLyBleHBsaWNpdCBqcy1vbmx5IHRyYW5zaXRpb25cbiAgICAodGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzLmNzcyA9PT0gZmFsc2UpIHx8XG4gICAgLy8gZWxlbWVudCBpcyBoaWRkZW5cbiAgICBpc0hpZGRlbih0aGlzLmVsKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHRoaXMudHlwZUNhY2hlW2NsYXNzTmFtZV1cbiAgaWYgKHR5cGUpIHJldHVybiB0eXBlXG4gIHZhciBpbmxpbmVTdHlsZXMgPSB0aGlzLmVsLnN0eWxlXG4gIHZhciBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpXG4gIHZhciB0cmFuc0R1cmF0aW9uID1cbiAgICBpbmxpbmVTdHlsZXNbdHJhbnNEdXJhdGlvblByb3BdIHx8XG4gICAgY29tcHV0ZWRTdHlsZXNbdHJhbnNEdXJhdGlvblByb3BdXG4gIGlmICh0cmFuc0R1cmF0aW9uICYmIHRyYW5zRHVyYXRpb24gIT09ICcwcycpIHtcbiAgICB0eXBlID0gVFlQRV9UUkFOU0lUSU9OXG4gIH0gZWxzZSB7XG4gICAgdmFyIGFuaW1EdXJhdGlvbiA9XG4gICAgICBpbmxpbmVTdHlsZXNbYW5pbUR1cmF0aW9uUHJvcF0gfHxcbiAgICAgIGNvbXB1dGVkU3R5bGVzW2FuaW1EdXJhdGlvblByb3BdXG4gICAgaWYgKGFuaW1EdXJhdGlvbiAmJiBhbmltRHVyYXRpb24gIT09ICcwcycpIHtcbiAgICAgIHR5cGUgPSBUWVBFX0FOSU1BVElPTlxuICAgIH1cbiAgfVxuICBpZiAodHlwZSkge1xuICAgIHRoaXMudHlwZUNhY2hlW2NsYXNzTmFtZV0gPSB0eXBlXG4gIH1cbiAgcmV0dXJuIHR5cGVcbn1cblxuLyoqXG4gKiBTZXR1cCBhIENTUyB0cmFuc2l0aW9uZW5kL2FuaW1hdGlvbmVuZCBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxucC5zZXR1cENzc0NiID0gZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICB0aGlzLnBlbmRpbmdDc3NFdmVudCA9IGV2ZW50XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZWwgPSB0aGlzLmVsXG4gIHZhciBvbkVuZCA9IHRoaXMucGVuZGluZ0Nzc0NiID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGVsKSB7XG4gICAgICBfLm9mZihlbCwgZXZlbnQsIG9uRW5kKVxuICAgICAgc2VsZi5wZW5kaW5nQ3NzRXZlbnQgPSBzZWxmLnBlbmRpbmdDc3NDYiA9IG51bGxcbiAgICAgIGlmICghc2VsZi5wZW5kaW5nSnNDYiAmJiBjYikge1xuICAgICAgICBjYigpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIF8ub24oZWwsIGV2ZW50LCBvbkVuZClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGhpZGRlbiAtIGluIHRoYXQgY2FzZSB3ZSBjYW4ganVzdFxuICogc2tpcCB0aGUgdHJhbnNpdGlvbiBhbGx0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzSGlkZGVuIChlbCkge1xuICByZXR1cm4gIShcbiAgICBlbC5vZmZzZXRXaWR0aCAmJlxuICAgIGVsLm9mZnNldEhlaWdodCAmJlxuICAgIGVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoXG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vaW5kZXgnKVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYSBjb21wb25lbnQsIGlmIHllcyByZXR1cm4gaXRzXG4gKiBjb21wb25lbnQgaWQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cblxuZXhwb3J0cy5jb21tb25UYWdSRSA9IC9eKGRpdnxwfHNwYW58aW1nfGF8YnxpfGJyfHVsfG9sfGxpfGgxfGgyfGgzfGg0fGg1fGg2fGNvZGV8cHJlfHRhYmxlfHRofHRkfHRyfGZvcm18bGFiZWx8aW5wdXR8c2VsZWN0fG9wdGlvbnxuYXZ8YXJ0aWNsZXxzZWN0aW9ufGhlYWRlcnxmb290ZXIpJC9cbmV4cG9ydHMuY2hlY2tDb21wb25lbnQgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICB2YXIgaGFzQXR0cnMgPSBlbC5oYXNBdHRyaWJ1dGVzKClcbiAgaWYgKCFleHBvcnRzLmNvbW1vblRhZ1JFLnRlc3QodGFnKSAmJiB0YWcgIT09ICdjb21wb25lbnQnKSB7XG4gICAgaWYgKF8ucmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkge1xuICAgICAgcmV0dXJuIHsgaWQ6IHRhZyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpcyA9IGhhc0F0dHJzICYmIGdldElzQmluZGluZyhlbClcbiAgICAgIGlmIChpcykge1xuICAgICAgICByZXR1cm4gaXNcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGFnLmluZGV4T2YoJy0nKSA+IC0xIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSAmJlxuICAgICAgICAgICAgLy8gQ2hyb21lIHJldHVybnMgdW5rbm93biBmb3Igc2V2ZXJhbCBIVE1MNSBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01NDA1MjZcbiAgICAgICAgICAgICEvXihkYXRhfHRpbWV8cnRjfHJiKSQvLnRlc3QodGFnKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgXy53YXJuKFxuICAgICAgICAgICAgJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSBkaWQgeW91ICcgK1xuICAgICAgICAgICAgJ3JlZ2lzdGVyIHRoZSBjb21wb25lbnQgY29ycmVjdGx5PydcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaGFzQXR0cnMpIHtcbiAgICByZXR1cm4gZ2V0SXNCaW5kaW5nKGVsKVxuICB9XG59XG5cbi8qKlxuICogR2V0IFwiaXNcIiBiaW5kaW5nIGZyb20gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGdldElzQmluZGluZyAoZWwpIHtcbiAgLy8gZHluYW1pYyBzeW50YXhcbiAgdmFyIGV4cCA9IF8uYXR0cihlbCwgJ2lzJylcbiAgaWYgKGV4cCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHsgaWQ6IGV4cCB9XG4gIH0gZWxzZSB7XG4gICAgZXhwID0gXy5nZXRCaW5kQXR0cihlbCwgJ2lzJylcbiAgICBpZiAoZXhwICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB7IGlkOiBleHAsIGR5bmFtaWM6IHRydWUgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNldCBhIHByb3AncyBpbml0aWFsIHZhbHVlIG9uIGEgdm0gYW5kIGl0cyBkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuZXhwb3J0cy5pbml0UHJvcCA9IGZ1bmN0aW9uICh2bSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKGV4cG9ydHMuYXNzZXJ0UHJvcChwcm9wLCB2YWx1ZSkpIHtcbiAgICB2YXIga2V5ID0gcHJvcC5wYXRoXG4gICAgdm1ba2V5XSA9IHZtLl9kYXRhW2tleV0gPSB2YWx1ZVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuZXhwb3J0cy5hc3NlcnRQcm9wID0gZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gIC8vIGlmIGEgcHJvcCBpcyBub3QgcHJvdmlkZWQgYW5kIGlzIG5vdCByZXF1aXJlZCxcbiAgLy8gc2tpcCB0aGUgY2hlY2suXG4gIGlmIChwcm9wLnJhdyA9PT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgdmFyIG9wdGlvbnMgPSBwcm9wLm9wdGlvbnNcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGVcbiAgdmFyIHZhbGlkID0gdHJ1ZVxuICB2YXIgZXhwZWN0ZWRUeXBlXG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IFN0cmluZykge1xuICAgICAgZXhwZWN0ZWRUeXBlID0gJ3N0cmluZydcbiAgICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSBleHBlY3RlZFR5cGVcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE51bWJlcikge1xuICAgICAgZXhwZWN0ZWRUeXBlID0gJ251bWJlcidcbiAgICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQm9vbGVhbikge1xuICAgICAgZXhwZWN0ZWRUeXBlID0gJ2Jvb2xlYW4nXG4gICAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBGdW5jdGlvbikge1xuICAgICAgZXhwZWN0ZWRUeXBlID0gJ2Z1bmN0aW9uJ1xuICAgICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE9iamVjdCkge1xuICAgICAgZXhwZWN0ZWRUeXBlID0gJ29iamVjdCdcbiAgICAgIHZhbGlkID0gXy5pc1BsYWluT2JqZWN0KHZhbHVlKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQXJyYXkpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdhcnJheSdcbiAgICAgIHZhbGlkID0gXy5pc0FycmF5KHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZVxuICAgIH1cbiAgfVxuICBpZiAoIXZhbGlkKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgJyArXG4gICAgICBwcm9wLnBhdGggKyAnPVwiJyArIHByb3AucmF3ICsgJ1wiLicgK1xuICAgICAgJyBFeHBlY3RlZCAnICsgZm9ybWF0VHlwZShleHBlY3RlZFR5cGUpICtcbiAgICAgICcsIGdvdCAnICsgZm9ybWF0VmFsdWUodmFsdWUpICsgJy4nXG4gICAgKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBvcHRpb25zLnZhbGlkYXRvclxuICBpZiAodmFsaWRhdG9yKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IuY2FsbChudWxsLCB2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgJyArXG4gICAgICAgIHByb3AucGF0aCArICc9XCInICsgcHJvcC5yYXcgKyAnXCInXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZm9ybWF0VHlwZSAodmFsKSB7XG4gIHJldHVybiB2YWxcbiAgICA/IHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKVxuICAgIDogJ2N1c3RvbSB0eXBlJ1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSAodmFsKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSlcbn1cbiIsIi8qKlxuICogRW5hYmxlIGRlYnVnIHV0aWxpdGllcy5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXG4gIHZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJ1xuXG4gIC8qKlxuICAgKiBMb2cgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gICAqL1xuXG4gIGV4cG9ydHMubG9nID0gZnVuY3Rpb24gKG1zZykge1xuICAgIGlmIChoYXNDb25zb2xlICYmIGNvbmZpZy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ1tWdWUgaW5mb106ICcgKyBtc2cpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdlJ3ZlIGdvdCBhIHByb2JsZW0gaGVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgKi9cblxuICBleHBvcnRzLndhcm4gPSBmdW5jdGlvbiAobXNnLCBlKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50IHx8IGNvbmZpZy5kZWJ1ZykpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1Z1ZSB3YXJuXTogJyArIG1zZylcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oKGUgfHwgbmV3IEVycm9yKCdXYXJuaW5nIFN0YWNrIFRyYWNlJykpLnN0YWNrKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnQgYXNzZXQgZXhpc3RzXG4gICAqL1xuXG4gIGV4cG9ydHMuYXNzZXJ0QXNzZXQgPSBmdW5jdGlvbiAodmFsLCB0eXBlLCBpZCkge1xuICAgIGlmICghdmFsKSB7XG4gICAgICBleHBvcnRzLndhcm4oJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlICsgJzogJyArIGlkKVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuL2luZGV4JylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxudmFyIHRyYW5zaXRpb24gPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uJylcblxuLyoqXG4gKiBRdWVyeSBhbiBlbGVtZW50IHNlbGVjdG9yIGlmIGl0J3Mgbm90IGFuIGVsZW1lbnQgYWxyZWFkeS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xFbGVtZW50fSBlbFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuXG5leHBvcnRzLnF1ZXJ5ID0gZnVuY3Rpb24gKGVsKSB7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gZWxcbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgaWYgKCFlbCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICdDYW5ub3QgZmluZCBlbGVtZW50OiAnICsgc2VsZWN0b3JcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGluIHRoZSBkb2N1bWVudC5cbiAqIE5vdGU6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyBzaG91bGQgd29yayBoZXJlXG4gKiBidXQgYWx3YXlzIHJldHVybnMgZmFsc2UgZm9yIGNvbW1lbnQgbm9kZXMgaW4gcGhhbnRvbWpzLFxuICogbWFraW5nIHVuaXQgdGVzdHMgZGlmZmljdWx0LiBUaGlzIGlzIGZpeGVkIGJ5IGRvaW5nIHRoZVxuICogY29udGFpbnMoKSBjaGVjayBvbiB0aGUgbm9kZSdzIHBhcmVudE5vZGUgaW5zdGVhZCBvZlxuICogdGhlIG5vZGUgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLmluRG9jID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICB2YXIgcGFyZW50ID0gbm9kZSAmJiBub2RlLnBhcmVudE5vZGVcbiAgcmV0dXJuIGRvYyA9PT0gbm9kZSB8fFxuICAgIGRvYyA9PT0gcGFyZW50IHx8XG4gICAgISEocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gMSAmJiAoZG9jLmNvbnRhaW5zKHBhcmVudCkpKVxufVxuXG4vKipcbiAqIEdldCBhbmQgcmVtb3ZlIGFuIGF0dHJpYnV0ZSBmcm9tIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyXG4gKi9cblxuZXhwb3J0cy5hdHRyID0gZnVuY3Rpb24gKG5vZGUsIGF0dHIpIHtcbiAgdmFyIHZhbCA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpXG4gIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBHZXQgYW4gYXR0cmlidXRlIHdpdGggY29sb24gb3Igdi1iaW5kOiBwcmVmaXguXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cblxuZXhwb3J0cy5nZXRCaW5kQXR0ciA9IGZ1bmN0aW9uIChub2RlLCBuYW1lKSB7XG4gIHZhciB2YWwgPSBleHBvcnRzLmF0dHIobm9kZSwgJzonICsgbmFtZSlcbiAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHZhbCA9IGV4cG9ydHMuYXR0cihub2RlLCAndi1iaW5kOicgKyBuYW1lKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBJbnNlcnQgZWwgYmVmb3JlIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKi9cblxuZXhwb3J0cy5iZWZvcmUgPSBmdW5jdGlvbiAoZWwsIHRhcmdldCkge1xuICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldClcbn1cblxuLyoqXG4gKiBJbnNlcnQgZWwgYWZ0ZXIgdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqL1xuXG5leHBvcnRzLmFmdGVyID0gZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5uZXh0U2libGluZykge1xuICAgIGV4cG9ydHMuYmVmb3JlKGVsLCB0YXJnZXQubmV4dFNpYmxpbmcpXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZWwgZnJvbSBET01cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKi9cblxuZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuLyoqXG4gKiBQcmVwZW5kIGVsIHRvIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKi9cblxuZXhwb3J0cy5wcmVwZW5kID0gZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5maXJzdENoaWxkKSB7XG4gICAgZXhwb3J0cy5iZWZvcmUoZWwsIHRhcmdldC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbClcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgdGFyZ2V0IHdpdGggZWxcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmV4cG9ydHMucmVwbGFjZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGVsKSB7XG4gIHZhciBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbCwgdGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyIHNob3J0aGFuZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxuZXhwb3J0cy5vbiA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIGNiKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lciBzaG9ydGhhbmQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmV4cG9ydHMub2ZmID0gZnVuY3Rpb24gKGVsLCBldmVudCwgY2IpIHtcbiAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpXG59XG5cbi8qKlxuICogQWRkIGNsYXNzIHdpdGggY29tcGF0aWJpbGl0eSBmb3IgSUUgJiBTVkdcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cm9uZ30gY2xzXG4gKi9cblxuZXhwb3J0cy5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xzKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNscylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gJyAnICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyAnICdcbiAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIHdpdGggY29tcGF0aWJpbGl0eSBmb3IgSUUgJiBTVkdcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cm9uZ30gY2xzXG4gKi9cblxuZXhwb3J0cy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xzKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gJyAnICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyAnICdcbiAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnXG4gICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpXG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIudHJpbSgpKVxuICB9XG4gIGlmICghZWwuY2xhc3NOYW1lKSB7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gIH1cbn1cblxuLyoqXG4gKiBFeHRyYWN0IHJhdyBjb250ZW50IGluc2lkZSBhbiBlbGVtZW50IGludG8gYSB0ZW1wb3JhcnlcbiAqIGNvbnRhaW5lciBkaXZcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFzRnJhZ21lbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cblxuZXhwb3J0cy5leHRyYWN0Q29udGVudCA9IGZ1bmN0aW9uIChlbCwgYXNGcmFnbWVudCkge1xuICB2YXIgY2hpbGRcbiAgdmFyIHJhd0NvbnRlbnRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBleHBvcnRzLmlzVGVtcGxhdGUoZWwpICYmXG4gICAgZWwuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnRcbiAgKSB7XG4gICAgZWwgPSBlbC5jb250ZW50XG4gIH1cbiAgaWYgKGVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGV4cG9ydHMudHJpbU5vZGUoZWwpXG4gICAgcmF3Q29udGVudCA9IGFzRnJhZ21lbnRcbiAgICAgID8gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICB3aGlsZSAoY2hpbGQgPSBlbC5maXJzdENoaWxkKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgICAgcmF3Q29udGVudC5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd0NvbnRlbnRcbn1cblxuLyoqXG4gKiBUcmltIHBvc3NpYmxlIGVtcHR5IGhlYWQvdGFpbCB0ZXh0Tm9kZXMgaW5zaWRlIGEgcGFyZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICovXG5cbmV4cG9ydHMudHJpbU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICB0cmltKG5vZGUsIG5vZGUuZmlyc3RDaGlsZClcbiAgdHJpbShub2RlLCBub2RlLmxhc3RDaGlsZClcbn1cblxuZnVuY3Rpb24gdHJpbSAocGFyZW50LCBub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDMgJiYgIW5vZGUuZGF0YS50cmltKCkpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSlcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYSB0ZW1wbGF0ZSB0YWcuXG4gKiBOb3RlIGlmIHRoZSB0ZW1wbGF0ZSBhcHBlYXJzIGluc2lkZSBhbiBTVkcgaXRzIHRhZ05hbWVcbiAqIHdpbGwgYmUgaW4gbG93ZXJjYXNlLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5leHBvcnRzLmlzVGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgcmV0dXJuIGVsLnRhZ05hbWUgJiZcbiAgICBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZW1wbGF0ZSdcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gXCJhbmNob3JcIiBmb3IgcGVyZm9ybWluZyBkb20gaW5zZXJ0aW9uL3JlbW92YWxzLlxuICogVGhpcyBpcyB1c2VkIGluIGEgbnVtYmVyIG9mIHNjZW5hcmlvczpcbiAqIC0gZnJhZ21lbnQgaW5zdGFuY2VcbiAqIC0gdi1odG1sXG4gKiAtIHYtaWZcbiAqIC0gdi1mb3JcbiAqIC0gY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGVyc2lzdCAtIElFIHRyYXNoZXMgZW1wdHkgdGV4dE5vZGVzIG9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZU5vZGUodHJ1ZSksIHNvIGluIGNlcnRhaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzIHRoZSBhbmNob3IgbmVlZHMgdG8gYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbi1lbXB0eSB0byBiZSBwZXJzaXN0ZWQgaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5cbiAqIEByZXR1cm4ge0NvbW1lbnR8VGV4dH1cbiAqL1xuXG5leHBvcnRzLmNyZWF0ZUFuY2hvciA9IGZ1bmN0aW9uIChjb250ZW50LCBwZXJzaXN0KSB7XG4gIHJldHVybiBjb25maWcuZGVidWdcbiAgICA/IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoY29udGVudClcbiAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBlcnNpc3QgPyAnICcgOiAnJylcbn1cblxuLyoqXG4gKiBGaW5kIGEgY29tcG9uZW50IHJlZiBhdHRyaWJ1dGUgdGhhdCBzdGFydHMgd2l0aCAkLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7U3RyaW5nfHVuZGVmaW5lZH1cbiAqL1xuXG52YXIgcmVmUkUgPSAvXnYtcmVmOi9cbmV4cG9ydHMuZmluZFJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgbmFtZSA9IGF0dHJzW2ldLm5hbWVcbiAgICAgIGlmIChyZWZSRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG4gICAgICAgIHJldHVybiBfLmNhbWVsaXplKG5hbWUucmVwbGFjZShyZWZSRSwgJycpKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIHRvIGEgcmFuZ2Ugb2Ygbm9kZXMgLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtOb2RlfSBlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wXG4gKi9cblxuZXhwb3J0cy5tYXBOb2RlUmFuZ2UgPSBmdW5jdGlvbiAobm9kZSwgZW5kLCBvcCkge1xuICB2YXIgbmV4dFxuICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgbmV4dCA9IG5vZGUubmV4dFNpYmxpbmdcbiAgICBvcChub2RlKVxuICAgIG5vZGUgPSBuZXh0XG4gIH1cbiAgb3AoZW5kKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIHJhbmdlIG9mIG5vZGVzIHdpdGggdHJhbnNpdGlvbiwgc3RvcmVcbiAqIHRoZSBub2RlcyBpbiBhIGZyYWdtZW50IHdpdGggY29ycmVjdCBvcmRlcmluZyxcbiAqIGFuZCBjYWxsIGNhbGxiYWNrIHdoZW4gZG9uZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHN0YXJ0XG4gKiBAcGFyYW0ge05vZGV9IGVuZFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxuZXhwb3J0cy5yZW1vdmVOb2RlUmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgdm0sIGZyYWcsIGNiKSB7XG4gIHZhciBkb25lID0gZmFsc2VcbiAgdmFyIHJlbW92ZWQgPSAwXG4gIHZhciBub2RlcyA9IFtdXG4gIGV4cG9ydHMubWFwTm9kZVJhbmdlKHN0YXJ0LCBlbmQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGVuZCkgZG9uZSA9IHRydWVcbiAgICBub2Rlcy5wdXNoKG5vZGUpXG4gICAgdHJhbnNpdGlvbi5yZW1vdmUobm9kZSwgdm0sIG9uUmVtb3ZlZClcbiAgfSlcbiAgZnVuY3Rpb24gb25SZW1vdmVkICgpIHtcbiAgICByZW1vdmVkKytcbiAgICBpZiAoZG9uZSAmJiByZW1vdmVkID49IG5vZGVzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKG5vZGVzW2ldKVxuICAgICAgfVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG5leHBvcnRzLmhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge31cblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IGV4cG9ydHMuaW5Ccm93c2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdykgIT09ICdbb2JqZWN0IE9iamVjdF0nXG5cbmV4cG9ydHMuaXNJRTkgPVxuICBpbkJyb3dzZXIgJiZcbiAgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwXG5cbmV4cG9ydHMuaXNBbmRyb2lkID1cbiAgaW5Ccm93c2VyICYmXG4gIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhbmRyb2lkJykgPiAwXG5cbi8vIFRyYW5zaXRpb24gcHJvcGVydHkvZXZlbnQgc25pZmZpbmdcbmlmIChpbkJyb3dzZXIgJiYgIWV4cG9ydHMuaXNJRTkpIHtcbiAgdmFyIGlzV2Via2l0VHJhbnMgPVxuICAgIHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICB2YXIgaXNXZWJraXRBbmltID1cbiAgICB3aW5kb3cub25hbmltYXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5vbndlYmtpdGFuaW1hdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3AgPSBpc1dlYmtpdFRyYW5zXG4gICAgPyAnV2Via2l0VHJhbnNpdGlvbidcbiAgICA6ICd0cmFuc2l0aW9uJ1xuICBleHBvcnRzLnRyYW5zaXRpb25FbmRFdmVudCA9IGlzV2Via2l0VHJhbnNcbiAgICA/ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gIGV4cG9ydHMuYW5pbWF0aW9uUHJvcCA9IGlzV2Via2l0QW5pbVxuICAgID8gJ1dlYmtpdEFuaW1hdGlvbidcbiAgICA6ICdhbmltYXRpb24nXG4gIGV4cG9ydHMuYW5pbWF0aW9uRW5kRXZlbnQgPSBpc1dlYmtpdEFuaW1cbiAgICA/ICd3ZWJraXRBbmltYXRpb25FbmQnXG4gICAgOiAnYW5pbWF0aW9uZW5kJ1xufVxuXG4vKipcbiAqIERlZmVyIGEgdGFzayB0byBleGVjdXRlIGl0IGFzeW5jaHJvbm91c2x5LiBJZGVhbGx5IHRoaXNcbiAqIHNob3VsZCBiZSBleGVjdXRlZCBhcyBhIG1pY3JvdGFzaywgc28gd2UgbGV2ZXJhZ2VcbiAqIE11dGF0aW9uT2JzZXJ2ZXIgaWYgaXQncyBhdmFpbGFibGUsIGFuZCBmYWxsYmFjayB0b1xuICogc2V0VGltZW91dCgwKS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICovXG5cbmV4cG9ydHMubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgY2FsbGJhY2tzID0gW11cbiAgdmFyIHBlbmRpbmcgPSBmYWxzZVxuICB2YXIgdGltZXJGdW5jXG4gIGZ1bmN0aW9uIG5leHRUaWNrSGFuZGxlciAoKSB7XG4gICAgcGVuZGluZyA9IGZhbHNlXG4gICAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKVxuICAgIGNhbGxiYWNrcyA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcGllc1tpXSgpXG4gICAgfVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGNvdW50ZXIgPSAxXG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobmV4dFRpY2tIYW5kbGVyKVxuICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvdW50ZXIpXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0Tm9kZSwge1xuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgIH0pXG4gICAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyXG4gICAgICB0ZXh0Tm9kZS5kYXRhID0gY291bnRlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aW1lckZ1bmMgPSBzZXRUaW1lb3V0XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChjYiwgY3R4KSB7XG4gICAgdmFyIGZ1bmMgPSBjdHhcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBjYi5jYWxsKGN0eCkgfVxuICAgICAgOiBjYlxuICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmMpXG4gICAgaWYgKHBlbmRpbmcpIHJldHVyblxuICAgIHBlbmRpbmcgPSB0cnVlXG4gICAgdGltZXJGdW5jKG5leHRUaWNrSGFuZGxlciwgMClcbiAgfVxufSkoKVxuIiwidmFyIGxhbmcgPSByZXF1aXJlKCcuL2xhbmcnKVxudmFyIGV4dGVuZCA9IGxhbmcuZXh0ZW5kXG5cbmV4dGVuZChleHBvcnRzLCBsYW5nKVxuZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vZW52JykpXG5leHRlbmQoZXhwb3J0cywgcmVxdWlyZSgnLi9kb20nKSlcbmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL29wdGlvbnMnKSlcbmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2NvbXBvbmVudCcpKVxuZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vZGVidWcnKSlcbiIsIi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5zZXQgPSBmdW5jdGlvbiBzZXQgKG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgIHNldChvYmouX2RhdGEsIGtleSwgdmFsKVxuICAgIHJldHVyblxuICB9XG4gIHZhciBvYiA9IG9iai5fX29iX19cbiAgaWYgKCFvYikge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbClcbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICB2YXIgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdm0gPSBvYi52bXNbaV1cbiAgICAgIHZtLl9wcm94eShrZXkpXG4gICAgICB2bS5fZGlnZXN0KClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5leHBvcnRzLmRlbGV0ZSA9IGZ1bmN0aW9uIChvYmosIGtleSkge1xuICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIHZhciBvYiA9IG9iai5fX29iX19cbiAgaWYgKCFvYikge1xuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgdmFyIGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHZtID0gb2Iudm1zW2ldXG4gICAgICB2bS5fdW5wcm94eShrZXkpXG4gICAgICB2bS5fZGlnZXN0KClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBleHByZXNzaW9uIGlzIGEgbGl0ZXJhbCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbnZhciBsaXRlcmFsVmFsdWVSRSA9IC9eXFxzPyh0cnVlfGZhbHNlfFtcXGRcXC5dK3wnW14nXSonfFwiW15cIl0qXCIpXFxzPyQvXG5leHBvcnRzLmlzTGl0ZXJhbCA9IGZ1bmN0aW9uIChleHApIHtcbiAgcmV0dXJuIGxpdGVyYWxWYWx1ZVJFLnRlc3QoZXhwKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pc1Jlc2VydmVkID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKVxuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogR3VhcmQgdGV4dCBvdXRwdXQsIG1ha2Ugc3VyZSB1bmRlZmluZWQgb3V0cHV0c1xuICogZW1wdHkgc3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMudG9TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGxcbiAgICA/ICcnXG4gICAgOiB2YWx1ZS50b1N0cmluZygpXG59XG5cbi8qKlxuICogQ2hlY2sgYW5kIGNvbnZlcnQgcG9zc2libGUgbnVtZXJpYyBzdHJpbmdzIHRvIG51bWJlcnNcbiAqIGJlZm9yZSBzZXR0aW5nIGJhY2sgdG8gZGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4geyp8TnVtYmVyfVxuICovXG5cbmV4cG9ydHMudG9OdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyc2VkID0gTnVtYmVyKHZhbHVlKVxuICAgIHJldHVybiBpc05hTihwYXJzZWQpXG4gICAgICA/IHZhbHVlXG4gICAgICA6IHBhcnNlZFxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBzdHJpbmcgYm9vbGVhbiBsaXRlcmFscyBpbnRvIHJlYWwgYm9vbGVhbnMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7KnxCb29sZWFufVxuICovXG5cbmV4cG9ydHMudG9Cb29sZWFuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnXG4gICAgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gJ2ZhbHNlJ1xuICAgICAgPyBmYWxzZVxuICAgICAgOiB2YWx1ZVxufVxuXG4vKipcbiAqIFN0cmlwIHF1b3RlcyBmcm9tIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nIHwgZmFsc2V9XG4gKi9cblxuZXhwb3J0cy5zdHJpcFF1b3RlcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGEgPSBzdHIuY2hhckNvZGVBdCgwKVxuICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KHN0ci5sZW5ndGggLSAxKVxuICByZXR1cm4gYSA9PT0gYiAmJiAoYSA9PT0gMHgyMiB8fCBhID09PSAweDI3KVxuICAgID8gc3RyLnNsaWNlKDEsIC0xKVxuICAgIDogc3RyXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZ1xuZXhwb3J0cy5jYW1lbGl6ZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnRzLmh5cGhlbmF0ZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogQ29udmVydHMgaHlwaGVuL3VuZGVyc2NvcmUvc2xhc2ggZGVsaW1pdGVyZWQgbmFtZXMgaW50b1xuICogY2FtZWxpemVkIGNsYXNzTmFtZXMuXG4gKlxuICogZS5nLiBteS1jb21wb25lbnQgPT4gTXlDb21wb25lbnRcbiAqICAgICAgc29tZV9lbHNlICAgID0+IFNvbWVFbHNlXG4gKiAgICAgIHNvbWUvY29tcCAgICA9PiBTb21lQ29tcFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgY2xhc3NpZnlSRSA9IC8oPzpefFstX1xcL10pKFxcdykvZ1xuZXhwb3J0cy5jbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNsYXNzaWZ5UkUsIHRvVXBwZXIpXG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmJpbmQgPSBmdW5jdGlvbiAoZm4sIGN0eCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZXhwb3J0cy50b0FycmF5ID0gZnVuY3Rpb24gKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnRcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tXG4gKi9cblxuZXhwb3J0cy5leHRlbmQgPSBmdW5jdGlvbiAodG8sIGZyb20pIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcm9tKVxuICB2YXIgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnRzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuLyoqXG4gKiBBcnJheSB0eXBlIGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydHMuaXNBcnJheSA9IEFycmF5LmlzQXJyYXlcblxuLyoqXG4gKiBEZWZpbmUgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnVtZXJhYmxlXVxuICovXG5cbmV4cG9ydHMuZGVmaW5lID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICogRGVib3VuY2UgYSBmdW5jdGlvbiBzbyBpdCBvbmx5IGdldHMgY2FsbGVkIGFmdGVyIHRoZVxuICogaW5wdXQgc3RvcHMgYXJyaXZpbmcgYWZ0ZXIgdGhlIGdpdmVuIHdhaXQgcGVyaW9kLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gLSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0cy5kZWJvdW5jZSA9IGZ1bmN0aW9uIChmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdFxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZXh0ID0gdGhpc1xuICAgIGFyZ3MgPSBhcmd1bWVudHNcbiAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbi8qKlxuICogTWFudWFsIGluZGV4T2YgYmVjYXVzZSBpdCdzIHNsaWdodGx5IGZhc3RlciB0aGFuXG4gKiBuYXRpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IG9ialxuICovXG5cbmV4cG9ydHMuaW5kZXhPZiA9IGZ1bmN0aW9uIChhcnIsIG9iaikge1xuICB2YXIgaSA9IGFyci5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGlcbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBNYWtlIGEgY2FuY2VsbGFibGUgdmVyc2lvbiBvZiBhbiBhc3luYyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5jYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgY2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG4gIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYi5jYW5jZWxsZWQgPSB0cnVlXG4gIH1cbiAgcmV0dXJuIGNiXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5sb29zZUVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gIHJldHVybiBhID09IGIgfHwgKFxuICAgIGV4cG9ydHMuaXNPYmplY3QoYSkgJiYgZXhwb3J0cy5pc09iamVjdChiKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgICAgIDogZmFsc2VcbiAgKVxuICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuL2luZGV4JylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxudmFyIGV4dGVuZCA9IF8uZXh0ZW5kXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICpcbiAqIEFsbCBzdHJhdGVneSBmdW5jdGlvbnMgZm9sbG93IHRoZSBzYW1lIHNpZ25hdHVyZTpcbiAqXG4gKiBAcGFyYW0geyp9IHBhcmVudFZhbFxuICogQHBhcmFtIHsqfSBjaGlsZFZhbFxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqL1xuXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLyoqXG4gKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsXG4gIGZvciAoa2V5IGluIGZyb20pIHtcbiAgICB0b1ZhbCA9IHRvW2tleV1cbiAgICBmcm9tVmFsID0gZnJvbVtrZXldXG4gICAgaWYgKCF0by5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBfLnNldCh0bywga2V5LCBmcm9tVmFsKVxuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdCh0b1ZhbCkgJiYgXy5pc09iamVjdChmcm9tVmFsKSkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJ1xuICAgICAgKVxuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgfVxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAvLyBpdCBoYXMgdG8gYmUgYSBmdW5jdGlvbiB0byBwYXNzIHByZXZpb3VzIG1lcmdlcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgIGNoaWxkVmFsLmNhbGwodGhpcyksXG4gICAgICAgIHBhcmVudFZhbC5jYWxsKHRoaXMpXG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKHBhcmVudFZhbCB8fCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0pXG4gICAgICAgIDogY2hpbGRWYWxcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSlcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRWxcbiAqL1xuXG5zdHJhdHMuZWwgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgaWYgKCF2bSAmJiBjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICdUaGUgXCJlbFwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgJ2RlZmluaXRpb25zLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHJldCA9IGNoaWxkVmFsIHx8IHBhcmVudFZhbFxuICAvLyBpbnZva2UgdGhlIGVsZW1lbnQgZmFjdG9yeSBpZiB0aGlzIGlzIGluc3RhbmNlIG1lcmdlXG4gIHJldHVybiB2bSAmJiB0eXBlb2YgcmV0ID09PSAnZnVuY3Rpb24nXG4gICAgPyByZXQuY2FsbCh2bSlcbiAgICA6IHJldFxufVxuXG4vKipcbiAqIEhvb2tzIGFuZCBwYXJhbSBhdHRyaWJ1dGVzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5cbnN0cmF0cy5pbml0ID1cbnN0cmF0cy5jcmVhdGVkID1cbnN0cmF0cy5yZWFkeSA9XG5zdHJhdHMuYXR0YWNoZWQgPVxuc3RyYXRzLmRldGFjaGVkID1cbnN0cmF0cy5iZWZvcmVDb21waWxlID1cbnN0cmF0cy5jb21waWxlZCA9XG5zdHJhdHMuYmVmb3JlRGVzdHJveSA9XG5zdHJhdHMuZGVzdHJveWVkID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogXy5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsXG59XG5cbi8qKlxuICogMC4xMSBkZXByZWNhdGlvbiB3YXJuaW5nXG4gKi9cblxuc3RyYXRzLnBhcmFtQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgJ1wicGFyYW1BdHRyaWJ1dGVzXCIgb3B0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gMC4xMi4gJyArXG4gICAgJ1VzZSBcInByb3BzXCIgaW5zdGVhZC4nXG4gIClcbn1cblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwpXG4gIHJldHVybiBjaGlsZFZhbFxuICAgID8gZXh0ZW5kKHJlcywgZ3VhcmRBcnJheUFzc2V0cyhjaGlsZFZhbCkpXG4gICAgOiByZXNcbn1cblxuY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHNcbn0pXG5cbi8qKlxuICogRXZlbnRzICYgV2F0Y2hlcnMuXG4gKlxuICogRXZlbnRzICYgd2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cblxuc3RyYXRzLndhdGNoID1cbnN0cmF0cy5ldmVudHMgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsXG4gIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWxcbiAgdmFyIHJldCA9IHt9XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbClcbiAgZm9yICh2YXIga2V5IGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXldXG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5XVxuICAgIGlmIChwYXJlbnQgJiYgIV8uaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XVxuICAgIH1cbiAgICByZXRba2V5XSA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxuICAgICAgOiBbY2hpbGRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cblxuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIGlmICghY2hpbGRWYWwpIHJldHVybiBwYXJlbnRWYWxcbiAgaWYgKCFwYXJlbnRWYWwpIHJldHVybiBjaGlsZFZhbFxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpXG4gIGV4dGVuZChyZXQsIGNoaWxkVmFsKVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xuXG52YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcbiAgICA/IHBhcmVudFZhbFxuICAgIDogY2hpbGRWYWxcbn1cblxuLyoqXG4gKiBNYWtlIHN1cmUgY29tcG9uZW50IG9wdGlvbnMgZ2V0IGNvbnZlcnRlZCB0byBhY3R1YWxcbiAqIGNvbnN0cnVjdG9ycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGd1YXJkQ29tcG9uZW50cyAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgdmFyIGNvbXBvbmVudHMgPSBvcHRpb25zLmNvbXBvbmVudHMgPVxuICAgICAgZ3VhcmRBcnJheUFzc2V0cyhvcHRpb25zLmNvbXBvbmVudHMpXG4gICAgdmFyIGRlZlxuICAgIHZhciBpZHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzKVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gaWRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGlkc1tpXVxuICAgICAgaWYgKF8uY29tbW9uVGFnUkUudGVzdChrZXkpKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgICAgICdpZDogJyArIGtleVxuICAgICAgICApXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBkZWYgPSBjb21wb25lbnRzW2tleV1cbiAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGVmKSkge1xuICAgICAgICBjb21wb25lbnRzW2tleV0gPSBfLlZ1ZS5leHRlbmQoZGVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGd1YXJkUHJvcHMgKG9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wc1xuICB2YXIgaVxuICBpZiAoXy5pc0FycmF5KHByb3BzKSkge1xuICAgIG9wdGlvbnMucHJvcHMgPSB7fVxuICAgIGkgPSBwcm9wcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBvcHRpb25zLnByb3BzW3Byb3BzW2ldXSA9IG51bGxcbiAgICB9XG4gIH0gZWxzZSBpZiAoXy5pc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpXG4gICAgaSA9IGtleXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHZhbCA9IHByb3BzW2tleXNbaV1dXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wc1trZXlzW2ldXSA9IHsgdHlwZTogdmFsIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHdWFyZCBhbiBBcnJheS1mb3JtYXQgYXNzZXRzIG9wdGlvbiBhbmQgY29udmVydGVkIGl0XG4gKiBpbnRvIHRoZSBrZXktdmFsdWUgT2JqZWN0IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gYXNzZXRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gZ3VhcmRBcnJheUFzc2V0cyAoYXNzZXRzKSB7XG4gIGlmIChfLmlzQXJyYXkoYXNzZXRzKSkge1xuICAgIHZhciByZXMgPSB7fVxuICAgIHZhciBpID0gYXNzZXRzLmxlbmd0aFxuICAgIHZhciBhc3NldFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFzc2V0ID0gYXNzZXRzW2ldXG4gICAgICB2YXIgaWQgPSB0eXBlb2YgYXNzZXQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAoKGFzc2V0Lm9wdGlvbnMgJiYgYXNzZXQub3B0aW9ucy5uYW1lKSB8fCBhc3NldC5pZClcbiAgICAgICAgOiAoYXNzZXQubmFtZSB8fCBhc3NldC5pZClcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICAgJ0FycmF5LXN5bnRheCBhc3NldHMgbXVzdCBwcm92aWRlIGEgXCJuYW1lXCIgb3IgXCJpZFwiIGZpZWxkLidcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzW2lkXSA9IGFzc2V0XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuICByZXR1cm4gYXNzZXRzXG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY2hpbGRcbiAqIEBwYXJhbSB7VnVlfSBbdm1dIC0gaWYgdm0gaXMgcHJlc2VudCwgaW5kaWNhdGVzIHRoaXMgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgYW4gaW5zdGFudGlhdGlvbiBtZXJnZS5cbiAqL1xuXG5leHBvcnRzLm1lcmdlT3B0aW9ucyA9IGZ1bmN0aW9uIG1lcmdlIChwYXJlbnQsIGNoaWxkLCB2bSkge1xuICBndWFyZENvbXBvbmVudHMoY2hpbGQpXG4gIGd1YXJkUHJvcHMoY2hpbGQpXG4gIHZhciBvcHRpb25zID0ge31cbiAgdmFyIGtleVxuICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZShwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pXG4gICAgfVxuICB9XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KVxuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCEocGFyZW50Lmhhc093blByb3BlcnR5KGtleSkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpXG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge09iamVjdHxGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLnJlc29sdmVBc3NldCA9IGZ1bmN0aW9uIHJlc29sdmUgKG9wdGlvbnMsIHR5cGUsIGlkKSB7XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdXG4gIHZhciBjYW1lbGl6ZWRJZFxuICByZXR1cm4gYXNzZXRzW2lkXSB8fFxuICAgIC8vIGNhbWVsQ2FzZSBJRFxuICAgIGFzc2V0c1tjYW1lbGl6ZWRJZCA9IF8uY2FtZWxpemUoaWQpXSB8fFxuICAgIC8vIFBhc2NhbCBDYXNlIElEXG4gICAgYXNzZXRzW2NhbWVsaXplZElkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxpemVkSWQuc2xpY2UoMSldXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpXG52YXIgZXh0ZW5kID0gXy5leHRlbmRcblxuLyoqXG4gKiBUaGUgZXhwb3NlZCBWdWUgY29uc3RydWN0b3IuXG4gKlxuICogQVBJIGNvbnZlbnRpb25zOlxuICogLSBwdWJsaWMgQVBJIG1ldGhvZHMvcHJvcGVydGllcyBhcmUgcHJlZmlleGVkIHdpdGggYCRgXG4gKiAtIGludGVybmFsIG1ldGhvZHMvcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCBgX2BcbiAqIC0gbm9uLXByZWZpeGVkIHByb3BlcnRpZXMgYXJlIGFzc3VtZWQgdG8gYmUgcHJveGllZCB1c2VyXG4gKiAgIGRhdGEuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIHRoaXMuX2luaXQob3B0aW9ucylcbn1cblxuLyoqXG4gKiBNaXhpbiBnbG9iYWwgQVBJXG4gKi9cblxuZXh0ZW5kKFZ1ZSwgcmVxdWlyZSgnLi9hcGkvZ2xvYmFsJykpXG5cbi8qKlxuICogVnVlIGFuZCBldmVyeSBjb25zdHJ1Y3RvciB0aGF0IGV4dGVuZHMgVnVlIGhhcyBhblxuICogYXNzb2NpYXRlZCBvcHRpb25zIG9iamVjdCwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIGR1cmluZ1xuICogY29tcGlsYXRpb24gc3RlcHMgYXMgYHRoaXMuY29uc3RydWN0b3Iub3B0aW9uc2AuXG4gKlxuICogVGhlc2UgY2FuIGJlIHNlZW4gYXMgdGhlIGRlZmF1bHQgb3B0aW9ucyBvZiBldmVyeVxuICogVnVlIGluc3RhbmNlLlxuICovXG5cblZ1ZS5vcHRpb25zID0ge1xuICByZXBsYWNlOiB0cnVlLFxuICBkaXJlY3RpdmVzOiByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvcHVibGljJyksXG4gIGVsZW1lbnREaXJlY3RpdmVzOiByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZWxlbWVudCcpLFxuICBmaWx0ZXJzOiByZXF1aXJlKCcuL2ZpbHRlcnMnKSxcbiAgdHJhbnNpdGlvbnM6IHt9LFxuICBjb21wb25lbnRzOiB7fSxcbiAgcGFydGlhbHM6IHt9XG59XG5cbi8qKlxuICogQnVpbGQgdXAgdGhlIHByb3RvdHlwZVxuICovXG5cbnZhciBwID0gVnVlLnByb3RvdHlwZVxuXG4vKipcbiAqICRkYXRhIGhhcyBhIHNldHRlciB3aGljaCBkb2VzIGEgYnVuY2ggb2ZcbiAqIHRlYXJkb3duL3NldHVwIHdvcmtcbiAqL1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocCwgJyRkYXRhJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVxuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgaWYgKG5ld0RhdGEgIT09IHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3NldERhdGEobmV3RGF0YSlcbiAgICB9XG4gIH1cbn0pXG5cbi8qKlxuICogTWl4aW4gaW50ZXJuYWwgaW5zdGFuY2UgbWV0aG9kc1xuICovXG5cbmV4dGVuZChwLCByZXF1aXJlKCcuL2luc3RhbmNlL2luaXQnKSlcbmV4dGVuZChwLCByZXF1aXJlKCcuL2luc3RhbmNlL2V2ZW50cycpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vaW5zdGFuY2Uvc3RhdGUnKSlcbmV4dGVuZChwLCByZXF1aXJlKCcuL2luc3RhbmNlL2xpZmVjeWNsZScpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vaW5zdGFuY2UvbWlzYycpKVxuXG4vKipcbiAqIE1peGluIHB1YmxpYyBBUEkgbWV0aG9kc1xuICovXG5cbmV4dGVuZChwLCByZXF1aXJlKCcuL2FwaS9kYXRhJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvZG9tJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvZXZlbnRzJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvbGlmZWN5Y2xlJykpXG5cblZ1ZS52ZXJzaW9uID0gJzEuMC43J1xubW9kdWxlLmV4cG9ydHMgPSBfLlZ1ZSA9IFZ1ZVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGlmIChfLmluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykge1xuICAgIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLmVtaXQoJ2luaXQnLCBWdWUpXG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi91dGlsJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG52YXIgRGVwID0gcmVxdWlyZSgnLi9vYnNlcnZlci9kZXAnKVxudmFyIGV4cFBhcnNlciA9IHJlcXVpcmUoJy4vcGFyc2Vycy9leHByZXNzaW9uJylcbnZhciBiYXRjaGVyID0gcmVxdWlyZSgnLi9iYXRjaGVyJylcbnZhciB1aWQgPSAwXG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwcmVzc2lvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBfLmV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIHZhciBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGlzRm4gPyBleHBPckZuLnRvU3RyaW5nKCkgOiBleHBPckZuXG4gIHRoaXMuY2IgPSBjYlxuICB0aGlzLmlkID0gKyt1aWQgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWVcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eSAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMubmV3RGVwcyA9IG51bGxcbiAgdGhpcy5wcmV2RXJyb3IgPSBudWxsIC8vIGZvciBhc3luYyBlcnJvciBzdGFja3NcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyL3NldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICAgIHRoaXMuc2V0dGVyID0gdW5kZWZpbmVkXG4gIH0gZWxzZSB7XG4gICAgdmFyIHJlcyA9IGV4cFBhcnNlci5wYXJzZShleHBPckZuLCB0aGlzLnR3b1dheSlcbiAgICB0aGlzLmdldHRlciA9IHJlcy5nZXRcbiAgICB0aGlzLnNldHRlciA9IHJlcy5zZXRcbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RGVwfSBkZXBcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiAoZGVwKSB7XG4gIHZhciBpZCA9IGRlcC5pZFxuICBpZiAoIXRoaXMubmV3RGVwc1tpZF0pIHtcbiAgICB0aGlzLm5ld0RlcHNbaWRdID0gZGVwXG4gICAgaWYgKCF0aGlzLmRlcHNbaWRdKSB7XG4gICAgICB0aGlzLmRlcHNbaWRdID0gZGVwXG4gICAgICBkZXAuYWRkU3ViKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iZWZvcmVHZXQoKVxuICB2YXIgc2NvcGUgPSB0aGlzLnNjb3BlIHx8IHRoaXMudm1cbiAgdmFyIHZhbHVlXG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHNjb3BlLCBzY29wZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIGNvbmZpZy53YXJuRXhwcmVzc2lvbkVycm9yc1xuICAgICkge1xuICAgICAgXy53YXJuKFxuICAgICAgICAnRXJyb3Igd2hlbiBldmFsdWF0aW5nIGV4cHJlc3Npb24gXCInICtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uICsgJ1wiLiAnICtcbiAgICAgICAgKGNvbmZpZy5kZWJ1Z1xuICAgICAgICAgID8gJydcbiAgICAgICAgICA6ICdUdXJuIG9uIGRlYnVnIG1vZGUgdG8gc2VlIHN0YWNrIHRyYWNlLidcbiAgICAgICAgKSwgZVxuICAgICAgKVxuICAgIH1cbiAgfVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICBpZiAodGhpcy5wcmVQcm9jZXNzKSB7XG4gICAgdmFsdWUgPSB0aGlzLnByZVByb2Nlc3ModmFsdWUpXG4gIH1cbiAgaWYgKHRoaXMuZmlsdGVycykge1xuICAgIHZhbHVlID0gc2NvcGUuX2FwcGx5RmlsdGVycyh2YWx1ZSwgbnVsbCwgdGhpcy5maWx0ZXJzLCBmYWxzZSlcbiAgfVxuICBpZiAodGhpcy5wb3N0UHJvY2Vzcykge1xuICAgIHZhbHVlID0gdGhpcy5wb3N0UHJvY2Vzcyh2YWx1ZSlcbiAgfVxuICB0aGlzLmFmdGVyR2V0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogU2V0IHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlIHdpdGggdGhlIHNldHRlci5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBzY29wZSA9IHRoaXMuc2NvcGUgfHwgdGhpcy52bVxuICBpZiAodGhpcy5maWx0ZXJzKSB7XG4gICAgdmFsdWUgPSBzY29wZS5fYXBwbHlGaWx0ZXJzKFxuICAgICAgdmFsdWUsIHRoaXMudmFsdWUsIHRoaXMuZmlsdGVycywgdHJ1ZSlcbiAgfVxuICB0cnkge1xuICAgIHRoaXMuc2V0dGVyLmNhbGwoc2NvcGUsIHNjb3BlLCB2YWx1ZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIGNvbmZpZy53YXJuRXhwcmVzc2lvbkVycm9yc1xuICAgICkge1xuICAgICAgXy53YXJuKFxuICAgICAgICAnRXJyb3Igd2hlbiBldmFsdWF0aW5nIHNldHRlciBcIicgK1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gKyAnXCInLCBlXG4gICAgICApXG4gICAgfVxuICB9XG4gIC8vIHR3by13YXkgc3luYyBmb3Igdi1mb3IgYWxpYXNcbiAgdmFyIGZvckNvbnRleHQgPSBzY29wZS4kZm9yQ29udGV4dFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChcbiAgICAgIGZvckNvbnRleHQgJiZcbiAgICAgIGZvckNvbnRleHQuZmlsdGVycyAmJlxuICAgICAgKG5ldyBSZWdFeHAoZm9yQ29udGV4dC5hbGlhcyArICdcXFxcYicpKS50ZXN0KHRoaXMuZXhwcmVzc2lvbilcbiAgICApIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0l0IHNlZW1zIHlvdSBhcmUgdXNpbmcgdHdvLXdheSBiaW5kaW5nIG9uICcgK1xuICAgICAgICAnYSB2LWZvciBhbGlhcyAoJyArIHRoaXMuZXhwcmVzc2lvbiArICcpLCBhbmQgdGhlICcgK1xuICAgICAgICAndi1mb3IgaGFzIGZpbHRlcnMuIFRoaXMgd2lsbCBub3Qgd29yayBwcm9wZXJseS4gJyArXG4gICAgICAgICdFaXRoZXIgcmVtb3ZlIHRoZSBmaWx0ZXJzIG9yIHVzZSBhbiBhcnJheSBvZiAnICtcbiAgICAgICAgJ29iamVjdHMgYW5kIGJpbmQgdG8gb2JqZWN0IHByb3BlcnRpZXMgaW5zdGVhZC4nXG4gICAgICApXG4gICAgfVxuICB9XG4gIGlmIChcbiAgICBmb3JDb250ZXh0ICYmXG4gICAgZm9yQ29udGV4dC5hbGlhcyA9PT0gdGhpcy5leHByZXNzaW9uICYmXG4gICAgIWZvckNvbnRleHQuZmlsdGVyc1xuICApIHtcbiAgICBpZiAoc2NvcGUuJGtleSkgeyAvLyBvcmlnaW5hbCBpcyBhbiBvYmplY3RcbiAgICAgIGZvckNvbnRleHQucmF3VmFsdWVbc2NvcGUuJGtleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3JDb250ZXh0LnJhd1ZhbHVlLiRzZXQoc2NvcGUuJGluZGV4LCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYmVmb3JlR2V0ID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0ID0gdGhpc1xuICB0aGlzLm5ld0RlcHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZnRlckdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IG51bGxcbiAgdmFyIGlkcyA9IE9iamVjdC5rZXlzKHRoaXMuZGVwcylcbiAgdmFyIGkgPSBpZHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgaWQgPSBpZHNbaV1cbiAgICBpZiAoIXRoaXMubmV3RGVwc1tpZF0pIHtcbiAgICAgIHRoaXMuZGVwc1tpZF0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICB9XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwc1xufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMgfHwgIWNvbmZpZy5hc3luYykge1xuICAgIHRoaXMucnVuKClcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBxdWV1ZWQsIG9ubHkgb3ZlcndyaXRlIHNoYWxsb3cgd2l0aCBub24tc2hhbGxvdyxcbiAgICAvLyBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAgIHRoaXMuc2hhbGxvdyA9IHRoaXMucXVldWVkXG4gICAgICA/IHNoYWxsb3dcbiAgICAgICAgPyB0aGlzLnNoYWxsb3dcbiAgICAgICAgOiBmYWxzZVxuICAgICAgOiAhIXNoYWxsb3dcbiAgICB0aGlzLnF1ZXVlZCA9IHRydWVcbiAgICAvLyByZWNvcmQgYmVmb3JlLXB1c2ggZXJyb3Igc3RhY2sgaW4gZGVidWcgbW9kZVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5kZWJ1Zykge1xuICAgICAgdGhpcy5wcmV2RXJyb3IgPSBuZXcgRXJyb3IoJ1t2dWVdIGFzeW5jIHN0YWNrIHRyYWNlJylcbiAgICB9XG4gICAgYmF0Y2hlci5wdXNoKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KClcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgQXJyYXkgd2F0Y2hlcnMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoXy5pc0FycmF5KHZhbHVlKSB8fCB0aGlzLmRlZXApICYmICF0aGlzLnNoYWxsb3cpXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgIC8vIGluIGRlYnVnICsgYXN5bmMgbW9kZSwgd2hlbiBhIHdhdGNoZXIgY2FsbGJhY2tzXG4gICAgICAvLyB0aHJvd3MsIHdlIGFsc28gdGhyb3cgdGhlIHNhdmVkIGJlZm9yZS1wdXNoIGVycm9yXG4gICAgICAvLyBzbyB0aGUgZnVsbCBjcm9zcy10aWNrIHN0YWNrIHRyYWNlIGlzIGF2YWlsYWJsZS5cbiAgICAgIHZhciBwcmV2RXJyb3IgPSB0aGlzLnByZXZFcnJvclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgIGNvbmZpZy5kZWJ1ZyAmJiBwcmV2RXJyb3IpIHtcbiAgICAgICAgdGhpcy5wcmV2RXJyb3IgPSBudWxsXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIF8ubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgcHJldkVycm9yXG4gICAgICAgICAgfSwgMClcbiAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gYXZvaWQgb3ZlcndyaXRpbmcgYW5vdGhlciB3YXRjaGVyIHRoYXQgaXMgYmVpbmdcbiAgLy8gY29sbGVjdGVkLlxuICB2YXIgY3VycmVudCA9IERlcC50YXJnZXRcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG4gIERlcC50YXJnZXQgPSBjdXJyZW50XG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGVwSWRzID0gT2JqZWN0LmtleXModGhpcy5kZXBzKVxuICB2YXIgaSA9IGRlcElkcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tkZXBJZHNbaV1dLmRlcGVuZCgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YmNyaWJlciBsaXN0LlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gd2UgY2FuIHNraXAgdGhpcyBpZiB0aGUgdm0gaWYgYmVpbmcgZGVzdHJveWVkXG4gICAgLy8gd2hpY2ggY2FuIGltcHJvdmUgdGVhcmRvd24gcGVyZm9ybWFuY2UuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICB0aGlzLnZtLl93YXRjaGVycy4kcmVtb3ZlKHRoaXMpXG4gICAgfVxuICAgIHZhciBkZXBJZHMgPSBPYmplY3Qua2V5cyh0aGlzLmRlcHMpXG4gICAgdmFyIGkgPSBkZXBJZHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2RlcElkc1tpXV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIHZhciBpLCBrZXlzXG4gIGlmIChfLmlzQXJyYXkodmFsKSkge1xuICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2ldKVxuICB9IGVsc2UgaWYgKF8uaXNPYmplY3QodmFsKSkge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgaSA9IGtleXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F0Y2hlclxuIl19
