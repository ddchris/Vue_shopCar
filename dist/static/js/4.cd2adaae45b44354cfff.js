webpackJsonp([4],{"+YtO":function(t,a,s){t.exports=s.p+"static/img/banner1.0796338.jpg"},"/sAh":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("elsE"),i=s("PmVp"),r={name:"Login",components:{Alert:e.a,SideBar:i.a},data:function(){return{products:[],pagination:{},tempProduct:{title:"",category:"",origin_price:"",price:"",unit:"",image:"",description:"",content:"",is_enabled:0,imageUrl:"",isNew:!0,num:1},isLoading:!1,status:{loadingItem:"",addItem:""},carts:[],finalTotal:0,showOrder:!1}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this;t.isLoading=!0;t.axios.get("https://vue-course-api.hexschool.io/api/chris2012/products/all").then(function(a){a.data.success?(t.products=a.data.products,t.pagination=a.data.pagination):(console.log("取得產品失敗"),t.$bus.$emit("message:push","取得產品失敗","danger")),t.isLoading=!1}).catch(function(a){console.log(a),t.$bus.$emit("message:push","伺服器內部錯誤!","danger"),t.isLoading=!1})}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),t._v(" "),s("main",{attrs:{role:"main"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-2"},[s("SideBar")],1),t._v(" "),s("div",{staticClass:"col-10"},[t._m(1),t._v(" "),s("div",{staticClass:"container marketing"},[s("div",{staticClass:"row"},t._l(t.products,function(a){return s("div",{key:a.id,staticClass:"col-lg-4"},[s("img",{staticClass:"products",attrs:{src:a.imageUrl,alt:"Generic placeholder image",width:"270",height:"170"}}),t._v(" "),s("h5",{staticClass:"mt-2"},[s("strong",[t._v(t._s(a.title))])]),t._v(" "),s("p",[t._v(t._s(a.description))]),t._v(" "),t._m(2,!0)])})),t._v(" "),s("hr",{staticClass:"featurette-divider"}),t._v(" "),t._m(3),t._v(" "),s("hr",{staticClass:"featurette-divider"}),t._v(" "),t._m(4),t._v(" "),s("hr",{staticClass:"featurette-divider"}),t._v(" "),t._m(5),t._v(" "),s("hr",{staticClass:"featurette-divider"})]),t._v(" "),t._m(6)])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Carousel")]),t._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])]),t._v(" "),s("form",{staticClass:"form-inline mt-2 mt-md-0"},[s("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),t._v(" "),s("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"carousel slide",attrs:{id:"myCarousel","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"first-slide",attrs:{src:s("+YtO"),alt:"First slide"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"carousel-caption text-left"},[e("h1",[t._v("Example headline.")]),t._v(" "),e("p",[t._v("Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.")]),t._v(" "),e("p",[e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#",role:"button"}},[t._v("Sign up today")])])])])]),t._v(" "),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"second-slide",attrs:{src:s("x08x"),alt:"Second slide"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"carousel-caption"},[e("h1",[t._v("Another example headline.")]),t._v(" "),e("p",[t._v("Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.")]),t._v(" "),e("p",[e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#",role:"button"}},[t._v("Learn more")])])])])]),t._v(" "),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"third-slide",attrs:{src:s("K/9N"),alt:"Third slide"}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"carousel-caption text-right"},[e("h1",[t._v("One more for good measure.")]),t._v(" "),e("p",[t._v("Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.")]),t._v(" "),e("p",[e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#",role:"button"}},[t._v("Browse gallery")])])])])])]),t._v(" "),e("a",{staticClass:"carousel-control-prev",attrs:{href:"#myCarousel",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),e("a",{staticClass:"carousel-control-next",attrs:{href:"#myCarousel",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Next")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("a",{staticClass:"btn btn-secondary",attrs:{href:"#",role:"button"}},[this._v("View details »")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row featurette"},[a("div",{staticClass:"col-md-7"},[a("h2",{staticClass:"featurette-heading"},[this._v("First featurette heading. "),a("span",{staticClass:"text-muted"},[this._v("It'll blow your mind.")])]),this._v(" "),a("p",{staticClass:"lead"},[this._v("Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.")])]),this._v(" "),a("div",{staticClass:"col-md-5"},[a("img",{staticClass:"featurette-image img-fluid mx-auto",attrs:{"data-src":"holder.js/500x500/auto",alt:"Generic placeholder image"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row featurette"},[a("div",{staticClass:"col-md-7 order-md-2"},[a("h2",{staticClass:"featurette-heading"},[this._v("Oh yeah, it's that good. "),a("span",{staticClass:"text-muted"},[this._v("See for yourself.")])]),this._v(" "),a("p",{staticClass:"lead"},[this._v("Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.")])]),this._v(" "),a("div",{staticClass:"col-md-5 order-md-1"},[a("img",{staticClass:"featurette-image img-fluid mx-auto",attrs:{"data-src":"holder.js/500x500/auto",alt:"Generic placeholder image"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row featurette"},[a("div",{staticClass:"col-md-7"},[a("h2",{staticClass:"featurette-heading"},[this._v("And lastly, this one. "),a("span",{staticClass:"text-muted"},[this._v("Checkmate.")])]),this._v(" "),a("p",{staticClass:"lead"},[this._v("Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.")])]),this._v(" "),a("div",{staticClass:"col-md-5"},[a("img",{staticClass:"featurette-image img-fluid mx-auto",attrs:{"data-src":"holder.js/500x500/auto",alt:"Generic placeholder image"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"container"},[a("p",{staticClass:"float-right"},[a("a",{attrs:{href:"#"}},[this._v("Back to top")])]),this._v(" "),a("p",[this._v("© 2017-2018 Company, Inc. · "),a("a",{attrs:{href:"#"}},[this._v("Privacy")]),this._v(" · "),a("a",{attrs:{href:"#"}},[this._v("Terms")])])])}]};var n=s("VU/8")(r,l,!1,function(t){s("mLW2")},"data-v-07d6fd6a",null);a.default=n.exports},DGer:function(t,a){},"K/9N":function(t,a,s){t.exports=s.p+"static/img/banner3.2561b85.jpg"},PmVp:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),t._v(" "),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[s("i",{staticClass:"fas fa-box-open"}),t._v("\n          產品列表\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[s("i",{staticClass:"far fa-list-alt mr-1"}),t._v("\n          訂單列表\n        ")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[s("i",{staticClass:"fas fa-money-check-alt"}),t._v("\n          優惠券\n        ")])],1)]),t._v(" "),t._m(1),t._v(" "),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/customer_orders"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v("\n          模擬訂單\n        ")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[this._v("管理員")]),this._v(" "),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[this._v("模擬功能")]),this._v(" "),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}]};var i=s("VU/8")({name:"SideBar",data:function(){return{}}},e,!1,function(t){s("DGer")},"data-v-75527aee",null);a.a=i.exports},mLW2:function(t,a){},x08x:function(t,a,s){t.exports=s.p+"static/img/banner2.8641a5d.jpg"}});
//# sourceMappingURL=4.cd2adaae45b44354cfff.js.map