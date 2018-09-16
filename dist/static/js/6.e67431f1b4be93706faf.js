webpackJsonp([6],{h3ij:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={name:"Alert",data:function(){return{pagination:{},coupon:{title:"testCoupon",is_enabled:1,percent:75,due_date:9999999999,code:"5566"},coupons:[]}},methods:{addCoupon:function(){var a=this;a.isLoading=!0;console.log("vm.coupon: ",a.coupon),a.axios.post("https://vue-course-api.hexschool.io/api/chris2012/admin/coupon",{data:a.coupon}).then(function(t){t.data.success?console.log("response.data: ",t.data):(console.log("新增優惠券失敗"),console.log("response.data: ",t.data),a.$bus.$emit("message:push","新增優惠券失敗","danger")),a.isLoading=!1}).catch(function(t){console.log(t),a.$bus.$emit("message:push","伺服器內部錯誤!!!","danger"),a.isLoading=!1})},getCoupon:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this;t.isLoading=!0;var s="https://vue-course-api.hexschool.io/api/chris2012/admin/coupons?page="+a;t.axios.get(s).then(function(a){a.data.success?(console.log("response.data: ",a.data),t.coupons=a.data.coupons,t.pagination=a.data.pagination):(console.log("取得優惠券列表失敗"),t.$bus.$emit("message:push","取得優惠券列表失敗","danger")),t.isLoading=!1}).catch(function(a){console.log(a),t.$bus.$emit("message:push","伺服器內部錯誤!!!","danger"),t.isLoading=!1})}},created:function(){this.getCoupon()}},i={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[s("h4",{staticClass:"my-0 mr-md-auto font-weight-normal mt-2"},[a._v("優惠券管理")]),a._v(" "),s("button",{staticClass:"btn btn-outline-primary mt-2",on:{click:function(t){a.addCoupon()}}},[a._v("新增優惠券")])]),a._v(" "),a._m(0),a._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row card-deck mb-3 text-center"},a._l(a.coupons,function(t){return s("div",{key:t.id,staticClass:"col-5 card mb-4 box-shadow coupon"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"my-0 font-weight-normal"},[a._v(a._s(t.title))])]),a._v(" "),s("div",{staticClass:"card-body",staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url(https://storage.googleapis.com/vue-course-api.appspot.com/chris2012%2F1537107515811.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hFfxlDytb%2ByFPlyXsKpDGwB%2BC3OoMpilVVWXe33hKvJ0r0J9Uj7VMvSx2zVRHcGE6iwT1%2B86%2BnL5qC6uaM6s7P5OFlvM9FNkRCE44B646qpEolxcCt%2B4zMxkigfsxjnpmmBaTsNgaDsanvvCAygipWAwan6HVWW44sw%2B%2FfbUgK6q4AKTnb9PEwtGXaMyW0AEFkiM%2BeWTcLfTkiuFw3xVhINbIdjweaZDlW5HPD3EzEn2QJkUzym%2BVTfw3UKQ35HDbDRm7k8WHRhk0W82GiThFzrmd9QhodwIH2RMELLSxRzPmuxaA99Ha76ntP8JY1R5ja%2Fg1EpwOlOUngIp2jK%2Bgw%3D%3D)"}},[s("h1",{staticClass:"card-title pricing-card-title"},[a._v("$"+a._s(t.percent/10)+"%"),s("small",{staticClass:"text-muted"},[a._v(" off")])]),a._v(" "),s("ul",{staticClass:"list-unstyled mt-3 mb-4"},[s("li",[a._v("是否有效: "+a._s(t.is_enabled?"可用":"不可用"))]),a._v(" "),s("li",[a._v("優惠券代碼: "+a._s(t.code))])])])])}))]),a._v(" "),s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination mt-2"},[s("li",{staticClass:"page-item",class:{disabled:!a.pagination.has_pre}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){t.preventDefault(),a.getCoupon(a.pagination.current_page-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[a._v("«")]),a._v(" "),s("span",{staticClass:"sr-only"},[a._v("Previous")])])]),a._v(" "),a._l(a.pagination.total_pages,function(t){return s("li",{key:t,staticClass:"page-item",class:{active:a.pagination.current_page===t}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),a.getCoupon(t)}}},[a._v(a._s(t))])])}),a._v(" "),s("li",{staticClass:"page-item",class:{disabled:!a.pagination.has_next}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(t){t.preventDefault(),a.getCoupon(a.pagination.current_page+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[a._v("»")]),a._v(" "),s("span",{staticClass:"sr-only"},[a._v("Next")])])])],2)])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[t("h5",{staticClass:"display-6"},[this._v("優惠券清單")])])}]};var n=s("VU/8")(e,i,!1,function(a){s("iwqO")},null,null);t.default=n.exports},iwqO:function(a,t){}});
//# sourceMappingURL=6.e67431f1b4be93706faf.js.map