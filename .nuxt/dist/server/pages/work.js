exports.ids = [4];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tag.vue?vue&type=template&id=2e0258e1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button data-v-2e0258e1>"+_vm._ssrEscape(_vm._s(_vm.tag))+"</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tag.vue?vue&type=template&id=2e0258e1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tag.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  props: {
    tag: String
  },
  methods: {
    sendDataToParent() {
      this.$emit('filterChange', this.tag);
    }

  }
});
// CONCATENATED MODULE: ./components/Tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Tag.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e0258e1",
  "8ca173ce"
  
)

/* harmony default export */ var Tag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=13a0c9bd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NuxtLink',{attrs:{"to":'/artworks/'+ _vm.block.uid}},[(_vm.block.data.main)?_c('img',{attrs:{"src":_vm.f_url}}):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"flex"},[_vm._v("\n      "+_vm._s(_vm.block.data.title[0].text)+"\n    ")]),_vm._v(" "),(_vm.block.data.subtitle)?_c('h2',[_vm._v("\n      "+_vm._s(_vm.f_subtitle)+"\n    ")]):_vm._e(),_vm._v(" "),_c('p',[_vm._v("#"+_vm._s(_vm.block.tags))])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=13a0c9bd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: {
    block: Object
  },

  data() {
    return {
      subtitle: '',
      url: ''
    };
  },

  computed: {
    f_subtitle() {
      return this.block.data.subtitle[0].text;
    },

    f_url() {
      return this.block.data.main.url;
    }

  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13a0c9bd",
  "a839dcbe"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/work.vue?vue&type=template&id=b243a13a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col items-center"},[_vm._ssrNode("<p class=\"text-xl w-screen h-40 flex items-center p-3\" data-v-b243a13a>Hello I am an Animator who love to make some creative coding magic combined with Theatre vibe\n    </p> "),_vm._ssrNode("<div class=\"flex justify-around w-screen h-5 text-sm\" data-v-b243a13a>","</div>",[_vm._ssrNode("<button data-v-b243a13a>all</button> "),_vm._l((_vm.tags),function(t,index){return _c('tag',{key:index,attrs:{"tag":t},on:{"filterChange":_vm.changeFilter}})})],2),_vm._ssrNode(" <input type=\"text\" placeholder=\"search projects\""+(_vm._ssrAttr("value",(_vm.search)))+" data-v-b243a13a> "),_vm._ssrNode("<div class=\"  bg-blue text-xs flex justify-around h-screen w-screen p-5\" data-v-b243a13a>","</div>",_vm._l((_vm.searchProjects),function(b,index){return _c('card',{key:index,staticClass:"w-80 p-5",attrs:{"block":b,"reset":_vm.resetTheTag}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/work.vue?vue&type=template&id=b243a13a&scoped=true&

// EXTERNAL MODULE: external "@prismicio/client"
var client_ = __webpack_require__(26);
var client_default = /*#__PURE__*/__webpack_require__.n(client_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/work.vue?vue&type=script&lang=js&
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

/* harmony default export */ var workvue_type_script_lang_js_ = ({
  data() {
    return {
      blocks: [],
      tags: [],
      test: [],
      resetTheTag: [],
      selectedTag: "",
      search: ""
    };
  },

  methods: {
    resetTag() {
      this.selectedTag = "";
    },

    changeFilter(newTag) {
      this.selectedTag = newTag;
    }

  },
  computed: {
    filteredProjects() {
      //if user didn't click any tag then display all projects
      if (!this.selectedTag == "") {
        let projects = []; //display only what user selected by tags

        for (let project of this.blocks) {
          if (project.tags.includes(this.selectedTag)) {
            projects.push(project);
          }
        } //.type==="project"


        return projects;
      } else {
        return this.blocks; // let f_projects = [];
        // for (let project of this.blocks) {
        //   if (project.type === "project") {
        //     f_projects.push(project);
        //     return f_projects
        //   }
        // }
      }
    },

    //searchbar
    searchProjects() {
      if (this.search) {
        return this.filteredProjects.filter(project => {
          console.log(project.data.title[0].text); //return any project matched with the title

          const s_title = project.data.title[0].text; //         const s_subtitle =''
          //         if(project.type==="project"){
          // return s_subtitle=project.data.subtitle[0].text
          // }
          //manage the input into same lowercase

          return s_title.toLowerCase().match(this.search.toLowerCase());
        });
      } else {
        return this.filteredProjects;
      }
    }

  },

  mounted() {
    const client = client_default.a.client("https://sourrain-site.cdn.prismic.io/api/v2");
    client.query("").then(res => {
      console.log(res); //take a look at Prismic api structure

      this.blocks = res.results;
      const tagObject = res.results.reduce((a, c) => {
        a[c.tags] = c.tags;
        return a;
      }, {}); //keep the tags object only

      const tagList = Object.values(tagObject).flat(); //flatten array

      const tagCat = tagList.reduce((a, c) => {
        a[c] = c;
        return a;
      }, {}); //overwrite the duplicates by turn array into a new object with the value

      this.tags = Object.values(tagCat);
      console.log(tags);
      return this.tags; //return the tags
    });
  }

});
// CONCATENATED MODULE: ./pages/work.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_workvue_type_script_lang_js_ = (workvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/work.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_workvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b243a13a",
  "133356e4"
  
)

/* harmony default export */ var work = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Tag: __webpack_require__(29).default,Card: __webpack_require__(30).default})


/***/ })

};;
//# sourceMappingURL=work.js.map