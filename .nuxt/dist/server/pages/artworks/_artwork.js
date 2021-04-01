exports.ids = [2];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/artworks/_artwork.vue?vue&type=template&id=69ac1db8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._ssrNode("<button data-v-69ac1db8>Go Back</button> <h1 data-v-69ac1db8>"+_vm._ssrEscape(_vm._s(_vm.artworks.title[0].text))+"</h1> <h2 data-v-69ac1db8>"+_vm._ssrEscape(_vm._s(_vm.artworks.subtitle[0].text))+"</h2> <img"+(_vm._ssrAttr("src",_vm.artworks.main.url))+" data-v-69ac1db8> "+((_vm.artworks.video)?("<div data-v-69ac1db8>video is here!</div>"):"<!---->")+" "+(_vm._ssrList((_vm.artworks.content),function(item,index){return ("<div data-v-69ac1db8>"+((item.type === 'paragraph')?("<div data-v-69ac1db8><p data-v-69ac1db8>"+_vm._ssrEscape(_vm._s(item.text))+"</p></div>"):(item.type === 'image')?("<div data-v-69ac1db8><img"+(_vm._ssrAttr("src",item.url))+" data-v-69ac1db8></div>"):"<!---->")+"</div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/artworks/_artwork.vue?vue&type=template&id=69ac1db8&scoped=true&

// EXTERNAL MODULE: external "@prismicio/client"
var client_ = __webpack_require__(26);
var client_default = /*#__PURE__*/__webpack_require__.n(client_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/artworks/_artwork.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _artworkvue_type_script_lang_js_ = ({
  methods: {
    goBack() {
      this.$router.go(-1);
    }

  },

  async asyncData({
    params
  }) {
    console.log(params);
    const api = await client_default.a.client("https://sourrain-site.cdn.prismic.io/api/v2");
    const res = await api.getByUID("project", params.artwork);
    console.log(res);
    return {
      artworks: res.data
    };
  }

});
// CONCATENATED MODULE: ./pages/artworks/_artwork.vue?vue&type=script&lang=js&
 /* harmony default export */ var artworks_artworkvue_type_script_lang_js_ = (_artworkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/artworks/_artwork.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  artworks_artworkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69ac1db8",
  "65403545"
  
)

/* harmony default export */ var _artwork = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_artwork.js.map