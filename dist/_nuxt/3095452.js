(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(t,e,r){var n=r(6),o=r(114)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},167:function(t,e,r){"use strict";r.r(e);var n={props:{tag:String},methods:{sendDataToParent:function(){this.$emit("filterChange",this.tag)}}},o=r(15),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{on:{click:this.sendDataToParent}},[this._v(this._s(this.tag))])])}),[],!1,null,"2e0258e1",null);e.default=component.exports},168:function(t,e,r){"use strict";r.r(e);var n={props:{block:Object},data:function(){return{subtitle:"",url:""}},computed:{f_subtitle:function(){return this.block.data.subtitle[0].text},f_url:function(){return this.block.data.main.url}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{attrs:{to:"/artworks/"+t.block.uid}},[t.block.data.main?r("img",{attrs:{src:t.f_url}}):t._e(),t._v(" "),r("h1",{staticClass:"flex"},[t._v("\n      "+t._s(t.block.data.title[0].text)+"\n    ")]),t._v(" "),t.block.data.subtitle?r("h2",[t._v("\n      "+t._s(t.f_subtitle)+"\n    ")]):t._e(),t._v(" "),r("p",[t._v("#"+t._s(t.block.tags))])])],1)}),[],!1,null,"13a0c9bd",null);e.default=component.exports},172:function(t,e,r){"use strict";r.r(e);r(35),r(23),r(37),r(36),r(27),r(24),r(25),r(26),r(13),r(166),r(77),r(78),r(60),r(61);var n=r(162);function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={data:function(){return{blocks:[],tags:[],test:[],resetTheTag:[],selectedTag:"",search:""}},methods:{resetTag:function(){this.selectedTag=""},changeFilter:function(t){this.selectedTag=t}},computed:{filteredProjects:function(){if(""==!this.selectedTag){var t,e=[],r=o(this.blocks);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.tags.includes(this.selectedTag)&&e.push(n)}}catch(t){r.e(t)}finally{r.f()}return e}return this.blocks},searchProjects:function(){var t=this;return this.search?this.filteredProjects.filter((function(e){return console.log(e.data.title[0].text),e.data.title[0].text.toLowerCase().match(t.search.toLowerCase())})):this.filteredProjects}},mounted:function(){var t=this;n.a.client("https://sourrain-site.cdn.prismic.io/api/v2").query("").then((function(e){console.log(e),t.blocks=e.results;var r=e.results.reduce((function(a,t){return a[t.tags]=t.tags,a}),{}),n=Object.values(r).flat().reduce((function(a,t){return a[t]=t,a}),{});return t.tags=Object.values(n),console.log(tags),t.tags}))}},f=r(15),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col items-center"},[r("p",{staticClass:"text-xl w-screen h-40 flex items-center p-3"},[t._v("Hello I am an Animator who love to make some creative coding magic combined with Theatre vibe\n    ")]),t._v(" "),r("div",{staticClass:"flex justify-around w-screen h-5 text-sm"},[r("button",{on:{click:t.resetTag}},[t._v("all")]),t._v(" "),t._l(t.tags,(function(e,n){return r("tag",{key:n,attrs:{tag:e},on:{filterChange:t.changeFilter}})}))],2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"search projects"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),r("div",{staticClass:"  bg-blue text-xs flex justify-around h-screen w-screen p-5"},t._l(t.searchProjects,(function(b,e){return r("card",{key:e,staticClass:"w-80 p-5",attrs:{block:b,reset:t.resetTheTag}})})),1)])}),[],!1,null,"b243a13a",null);e.default=component.exports;installComponents(component,{Tag:r(167).default,Card:r(168).default})}}]);