(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aa2b670","chunk-2dddbcb1"],{"466d":function(t,e,a){"use strict";var r=a("c65b"),n=a("d784"),i=a("825a"),o=a("50c4"),s=a("577e"),l=a("1d80"),c=a("dc4a"),u=a("8aa5"),d=a("14c3");n("match",(function(t,e,a){return[function(e){var a=l(this),n=void 0==e?void 0:c(e,t);return n?r(n,e,a):new RegExp(e)[t](s(a))},function(t){var r=i(this),n=s(t),l=a(e,r,n);if(l.done)return l.value;if(!r.global)return d(r,n);var c=r.unicode;r.lastIndex=0;var m,p=[],h=0;while(null!==(m=d(r,n))){var f=s(m[0]);p[h]=f,""===f&&(r.lastIndex=u(n,o(r.lastIndex),c)),h++}return 0===h?null:p}]}))},"637e":function(t,e,a){},"7db0":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").find,i=a("44d2"),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},8034:function(t,e,a){},"8c63":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"模板配置","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"100px",size:"mini"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"标题"},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1),a("el-form-item",{attrs:{label:"链接",prop:"url"}},[a("el-input",{attrs:{placeholder:"跳转链接"},model:{value:t.dataForm.url,callback:function(e){t.$set(t.dataForm,"url",e)},expression:"dataForm.url"}})],1),a("div",[a("el-form-item",{attrs:{label:"小程序appid",prop:"miniprogram.appid"}},[a("el-input",{attrs:{placeholder:"小程序appid"},model:{value:t.dataForm.miniprogram.appid,callback:function(e){t.$set(t.dataForm.miniprogram,"appid",e)},expression:"dataForm.miniprogram.appid"}})],1),a("el-form-item",{attrs:{label:"小程序路径",prop:"miniprogram.pagePath"}},[a("el-input",{attrs:{placeholder:"小程序pagePath"},model:{value:t.dataForm.miniprogram.pagePath,callback:function(e){t.$set(t.dataForm.miniprogram,"pagePath",e)},expression:"dataForm.miniprogram.pagePath"}})],1)],1),a("el-row",[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"模版名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"模版名称"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"有效",prop:"status"}},[a("el-switch",{attrs:{placeholder:"是否有效","active-value":!0,"inactive-value":!1},model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}})],1)],1)],1),a("div",{staticClass:"form-group-area"},[a("el-form-item",{staticClass:"form-group-title"},[t._v("消息填充数据，请对照模板内容填写")]),a("el-form-item",[a("el-input",{attrs:{type:"textarea",disabled:"",autosize:"",placeholder:"模版"},model:{value:t.dataForm.content,callback:function(e){t.$set(t.dataForm,"content",e)},expression:"dataForm.content"}})],1),t._l(t.dataForm.data,(function(e,r){return a("el-row",{key:e.name},[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:e.name,prop:"data."+r+".value",rules:[{required:!0,message:"填充内容不得为空",trigger:"blur"}]}},[a("el-input",{attrs:{type:"textarea",autosize:"",rows:"1",placeholder:"填充内容"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"颜色"}},[a("el-input",{attrs:{type:"color",placeholder:"颜色"},model:{value:e.color,callback:function(a){t.$set(e,"color",a)},expression:"item.color"}})],1)],1)],1)}))],2)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},n=[],i=(a("ac1f"),a("466d"),a("d81d"),a("5319"),{data:function(){return{visible:!1,dataForm:{id:0,templateId:"",title:"",data:[],url:"",miniprogram:{appid:"",pagePath:""},content:"",status:!0,name:""},dataRule:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],data:[{required:!0,message:"内容不能为空",trigger:"blur"}],name:[{required:!0,message:"模版名称不能为空",trigger:"blur"}]}}},methods:{init:function(t){var e=this;console.log("init",t),this.dataForm.id=t||0,this.visible=!0,this.$nextTick((function(){e.$refs["dataForm"].resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/manage/msgTemplate/info/".concat(e.dataForm.id)),method:"get",params:e.$http.adornParams()}).then((function(t){var a=t.data;a&&200===a.code?e.transformTemplate(a.msgTemplate):e.$message.error(a.msg)}))}))},transformTemplate:function(t){if(t.miniprogram||(t.miniprogram={appid:"",pagePath:""}),t.data instanceof Array)this.dataForm=t;else{t.data=[];var e=t.content.match(/\{\{(\w*)\.DATA\}\}/g)||[];e.map((function(e){name=e.replace("{{","").replace(".DATA}}",""),t.data.push({name:name,value:"",color:"#000000"})})),this.dataForm=t}},dataFormSubmit:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&t.$http({url:t.$http.adornUrl("/manage/msgTemplate/".concat(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData(t.dataForm)}).then((function(e){var a=e.data;a&&200===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)}))}))}}}),o=i,s=(a("d6e1"),a("2877")),l=Object(s["a"])(o,r,n,!1,null,"14548673",null);e["default"]=l.exports},"96cf":function(t,e,a){var r=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,a){return t[e]=a}}function c(t,e,a,r){var n=e&&e.prototype instanceof g?e:g,i=Object.create(n.prototype),o=new C(r||[]);return i._invoke=$(t,a,o),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(S){return{type:"throw",arg:S}}}t.wrap=c;var d="suspendedStart",m="suspendedYield",p="executing",h="completed",f={};function g(){}function v(){}function b(){}var y={};l(y,i,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(E([])));w&&w!==a&&r.call(w,i)&&(y=w);var k=b.prototype=g.prototype=Object.create(y);function F(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function a(n,i,o,s){var l=u(t[n],t,i);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,o,s)}),(function(t){a("throw",t,o,s)})):e.resolve(d).then((function(t){c.value=t,o(c)}),(function(t){return a("throw",t,o,s)}))}s(l.arg)}var n;function i(t,r){function i(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(i,i):i()}this._invoke=i}function $(t,e,a){var r=d;return function(n,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===n)throw i;return O()}a.method=n,a.arg=i;while(1){var o=a.delegate;if(o){var s=T(o,a);if(s){if(s===f)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var l=u(t,e,a);if("normal"===l.type){if(r=a.done?h:m,l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=h,a.method="throw",a.arg=l.arg)}}}function T(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,T(t,a),"throw"===a.method))return f;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,f;var i=n.arg;return i?i.done?(a[t.resultName]=i.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var a=t[i];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function a(){while(++n<t.length)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=b,l(k,"constructor",b),l(b,"constructor",v),v.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},F(L.prototype),l(L.prototype,o,(function(){return this})),t.AsyncIterator=L,t.async=function(e,a,r,n,i){void 0===i&&(i=Promise);var o=new L(c(e,a,r,n),i);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},F(k),l(k,s,"Generator"),l(k,i,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=E,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(U),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return s.type="throw",s.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),U(a),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;U(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:E(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=r}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},a15b:function(t,e,a){"use strict";var r=a("23e7"),n=a("e330"),i=a("44ad"),o=a("fc6a"),s=a("a640"),l=n([].join),c=i!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(t){return l(o(this),void 0===t?",":t)}})},d6e1:function(t,e,a){"use strict";a("8034")},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,i=a("1dde"),o=i("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},eda54:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"标题",clearable:""},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1),a("el-form-item",[a("el-button",{on:{click:function(e){return t.getDataList()}}},[t._v("查询")]),t.isAuth("wx:msgtemplate:save")?a("el-button",{attrs:{type:"success",disabled:t.dataListSelections.length<=0},on:{click:function(e){return t.copyHandle()}}},[t._v("批量复制")]):t._e(),t.isAuth("wx:msgtemplate:save")?a("el-button",{attrs:{type:"success",disabled:1!=t.dataListSelections.length},on:{click:function(e){return t.templateMsgTaskHandle()}}},[t._v("推送消息")]):t._e(),t.isAuth("wx:msgtemplate:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){return t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1),a("el-form-item",{staticClass:"fr"},[t.isAuth("wx:msgtemplate:save")?a("el-button",{attrs:{icon:"el-icon-sort",type:"success",disabled:t.synchonizingWxTemplate},on:{click:function(e){return t.syncWxTemplate()}}},[t._v(t._s(t.synchonizingWxTemplate?"同步中...":"同步公众号模板"))]):t._e(),a("el-button",[a("el-link",{attrs:{type:"primary",icon:"el-icon-link",target:"_blank",href:"https://kf.qq.com/faq/170209E3InyI170209nIF7RJ.html"}},[t._v("模板管理指引")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"templateId","show-overflow-tooltip":"","header-align":"center",align:"center",label:"模板ID"}}),a("el-table-column",{attrs:{prop:"title","header-align":"center",align:"center",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return a("a",{attrs:{href:e.row.url}},[t._v(t._s(e.row.title))])}}])}),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"模版名称"}}),a("el-table-column",{attrs:{prop:"content","show-overflow-tooltip":"","header-align":"center",align:"center",label:"模版字段",width:"200"}}),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"是否有效"},scopedSlots:t._u([{key:"default",fn:function(e){return a("span",{},[t._v(t._s(e.row.status?"是":"否"))])}}])}),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.addOrUpdateHandle(e.row.id)}}},[t._v("配置")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalCount,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t.templateMsgTaskVisible?a("template-msg-task",{ref:"templateMsgTask"}):t._e()],1)},n=[];a("d3b7");function i(t,e,a,r,n,i,o){try{var s=t[i](o),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(r,n)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function s(t){i(o,r,n,s,l,"next",t)}function l(t){i(o,r,n,s,l,"throw",t)}s(void 0)}))}}a("96cf"),a("d81d"),a("99af"),a("a15b"),a("b0c0");var s=a("8c63"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"筛选模板消息目标用户","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{inline:!0,model:t.dataForm,clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getWxUsers()}}},[a("el-form-item",[a("el-select",{attrs:{filterable:"",placeholder:"用户标签"},on:{change:function(e){return t.getWxUsers()}},model:{value:t.dataForm.tagid,callback:function(e){t.$set(t.dataForm,"tagid",e)},expression:"dataForm.tagid"}},t._l(t.wxUserTags,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id+""}})})),1)],1),a("el-form-item",[a("el-input",{attrs:{placeholder:"昵称",clearable:""},on:{change:function(e){return t.getWxUsers()}},model:{value:t.dataForm.nickname,callback:function(e){t.$set(t.dataForm,"nickname",e)},expression:"dataForm.nickname"}})],1),a("el-form-item",[a("el-input",{attrs:{placeholder:"省份",clearable:""},on:{change:function(e){return t.getWxUsers()}},model:{value:t.dataForm.province,callback:function(e){t.$set(t.dataForm,"province",e)},expression:"dataForm.province"}})],1),a("el-form-item",[a("el-input",{attrs:{placeholder:"城市",clearable:""},on:{change:function(e){return t.getWxUsers()}},model:{value:t.dataForm.city,callback:function(e){t.$set(t.dataForm,"city",e)},expression:"dataForm.city"}})],1),a("el-form-item",[a("el-input",{attrs:{placeholder:"备注",clearable:""},on:{change:function(e){return t.getWxUsers()}},model:{value:t.dataForm.remark,callback:function(e){t.$set(t.dataForm,"remark",e)},expression:"dataForm.remark"}})],1),a("el-form-item",[a("el-input",{attrs:{placeholder:"扫码场景值",clearable:""},on:{change:function(e){return t.getWxUsers()}},model:{value:t.dataForm.qrScene,callback:function(e){t.$set(t.dataForm,"qrScene",e)},expression:"dataForm.qrScene"}})],1)],1),a("div",{staticClass:"text-bold"},[t._v("本消息将发送给：")]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.wxUsersLoading,expression:"wxUsersLoading"}],staticClass:"user-list"},[t._l(t.wxUserList,(function(e){return a("div",{key:e.openid,staticClass:"user-card"},[a("el-avatar",{attrs:{src:e.headimgurl}}),a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))])],1)})),a("div",{staticClass:"text-bold"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>10,expression:"totalCount>10"}]},[t._v("...")]),t._v(" 等共"),a("span",{staticClass:"text-success"},[t._v(t._s(t.totalCount))]),t._v("个用户 ")])],2),a("div",{staticClass:"margin-top text-bold"},[t._v("消息预览：")]),a("div",{staticClass:"margin-top-xs"},[a("el-input",{attrs:{type:"textarea",disabled:"",autosize:"",placeholder:"模版"},model:{value:t.msgReview,callback:function(e){t.msgReview=e},expression:"msgReview"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success",disabled:t.totalCount<=0||t.sending},on:{click:t.send}},[t._v(t._s(t.sending?"发送中...":"发送"))]),a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("关闭")])],1)],1)},c=[],u=(a("159b"),a("ac1f"),a("5319"),a("7db0"),a("2f62")),d={name:"template-msg-task",props:{wxUserTagName:{type:String,required:!1}},data:function(){return{visible:!1,wxUsersLoading:!1,sending:!1,msgTemplate:{},dataForm:{page:1,sidx:"subscribe_time",order:"desc",tagid:"",nickname:"",city:"",province:"",remark:"",qrScene:""},wxUserList:[],totalCount:0}},computed:Object(u["b"])({wxUserTags:function(t){return t.wxUserTags.tags},msgReview:function(){if(!this.msgTemplate.data)return"";var t=this.msgTemplate.content;return this.msgTemplate.data.forEach((function(e){t=t.replace("{{"+e.name+".DATA}}",e.value)})),t}}),mounted:function(){var t=this;this.getWxUserTags().then((function(e){if(t.wxUserTagName){var a=e.find((function(e){return e.name==t.wxUserTagName}));console.log(a),a&&(t.dataForm.tagid=a.id+"")}t.getWxUsers()}))},methods:{init:function(t){t&&t.templateId?t.data&&t.data instanceof Array?(this.msgTemplate=t,this.visible=!0):this.$message.error("请现配置此模板填充数据"):this.$message.error("消息模板无效")},getWxUserTags:function(){var t=this;return new Promise((function(e,a){t.$http({url:t.$http.adornUrl("/manage/wxUserTags/list"),method:"get"}).then((function(r){var n=r.data;n&&200===n.code?(t.$store.commit("wxUserTags/updateTags",n.list),e(n.list)):(t.$message.error(n.msg),a(n.msg))})).catch((function(t){return a(t)}))}))},getWxUsers:function(){var t=this;this.wxUsersLoading=!0,this.$http({url:this.$http.adornUrl("/manage/wxUser/list"),method:"get",params:this.$http.adornParams(this.dataForm)}).then((function(e){var a=e.data;a&&200===a.code?(t.wxUserList=a.page.list,t.totalCount=a.page.totalCount):t.$message.error(a.msg),t.wxUsersLoading=!1}))},send:function(){var t=this;this.sending||(this.sending=!0,this.$http({url:this.$http.adornUrl("/manage/msgTemplate/sendMsgBatch"),method:"post",data:this.$http.adornData({wxUserFilterParams:this.dataForm,templateId:this.msgTemplate.templateId,url:this.msgTemplate.url,miniprogram:this.msgTemplate.miniprogram,data:this.msgTemplate.data})}).then((function(e){var a=e.data;t.sending=!1,a&&200===a.code?(t.$message.success("消息将在后台发送"),t.visible=!1):t.$message.error(a.msg)})))}}},m=d,p=(a("fd0f"),a("2877")),h=Object(p["a"])(m,l,c,!1,null,"591117ec",null),f=h.exports,g={data:function(){return{dataForm:{title:""},dataList:[],pageIndex:1,pageSize:10,totalCount:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,templateMsgTaskVisible:!1,synchonizingWxTemplate:!1}},components:{AddOrUpdate:s["default"],TemplateMsgTask:f},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/manage/msgTemplate/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,title:this.dataForm.title,sidx:"id",order:"desc"})}).then((function(e){var a=e.data;a&&200===a.code?(t.dataList=a.page.list,t.totalCount=a.page.totalCount):(t.dataList=[],t.totalCount=0),t.dataListLoading=!1}))},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick((function(){e.$refs.addOrUpdate.init(t)}))},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map((function(t){return t.id}));this.$confirm("确定对[id=".concat(a.join(","),"]进行[").concat(t?"删除":"批量删除","]操作?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$http({url:e.$http.adornUrl("/manage/msgTemplate/delete"),method:"post",data:e.$http.adornData(a,!1)}).then((function(t){var a=t.data;a&&200===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)}))}))},syncWxTemplate:function(){var t=this;this.synchonizingWxTemplate||(this.synchonizingWxTemplate=!0,this.$http({url:this.$http.adornUrl("/manage/msgTemplate/syncWxTemplate"),method:"post"}).then((function(e){var a=e.data;t.synchonizingWxTemplate=!1,a&&200===a.code?t.$message({message:"同步完成",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})).catch((function(){return t.synchonizingWxTemplate=!1})))},templateMsgTaskHandle:function(){var t=this;this.templateMsgTaskVisible=!0,this.$nextTick((function(){t.$refs.templateMsgTask.init(t.dataListSelections[0])}))},copyHandle:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.dataListSelections.length)){e.next=13;break}return n=t.dataListSelections[r],a=t.$loading({lock:!0,text:"复制模板："+n.title,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n.id="",n.updateTime=new Date,n.name+="_COPY",e.next=9,t.addMsgTemplate(n).catch((function(){return a.close()}));case 9:a.close();case 10:r++,e.next=1;break;case 13:a.close(),t.getDataList();case 15:case"end":return e.stop()}}),e)})))()},addMsgTemplate:function(t){var e=this;return new Promise((function(a,r){e.$http({url:e.$http.adornUrl("/manage/msgTemplate/save"),method:"post",data:e.$http.adornData(t)}).then((function(t){var n=t.data;n&&200===n.code?a():(e.$message.error(n.msg),r(n.msg))})).catch((function(t){return r(t)}))}))}}},v=g,b=Object(p["a"])(v,r,n,!1,null,null,null);e["default"]=b.exports},fd0f:function(t,e,a){"use strict";a("637e")}}]);