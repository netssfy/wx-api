(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17a99408","chunk-2d0e95a3"],{"8cbd":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"媒体文件"}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 选择文件 "),a("input",{staticStyle:{opacity:"0",height:"100%",position:"absolute",left:"0",top:"0"},attrs:{type:"file"},on:{change:e.onFileChange}})]),a("div",[e._v(e._s(e.dataForm.file.name))])],1),a("el-form-item",{attrs:{label:"媒体类型",prop:"mediaType"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"媒体类型"},model:{value:e.dataForm.mediaType,callback:function(t){e.$set(e.dataForm,"mediaType",t)},expression:"dataForm.mediaType"}},[a("el-option",{attrs:{label:"图片（2M以内，支持PNG\\JPEG\\JPG\\GIF）",value:"image"}}),a("el-option",{attrs:{label:"视频（10M以内，只支持MP4）",value:"video"}}),a("el-option",{attrs:{label:"语音（2M、60s以内，支持AMR\\MP3）",value:"voice"}}),a("el-option",{attrs:{label:"缩略图（64K以内JPG）",value:"thumb"}})],1)],1),a("el-form-item",{attrs:{label:"素材名称",prop:"fileName"}},[a("el-input",{attrs:{placeholder:"为便于管理建议按用途分类+素材内容命名"},model:{value:e.dataForm.fileName,callback:function(t){e.$set(e.dataForm,"fileName",t)},expression:"dataForm.fileName"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",disabled:e.uploading},on:{click:function(t){return e.dataFormSubmit()}}},[e._v(e._s(e.uploading?"提交中...":"提交"))])],1)],1)},n=[],s=(a("b0c0"),{data:function(){return{visible:!1,uploading:!1,dataForm:{mediaId:"",file:"",fileName:"",mediaType:"image"},dataRule:{fileName:[{required:!0,message:"素材名称不能为空",trigger:"blur"}],mediaType:[{required:!0,message:"素材类型不能为空",trigger:"blur"}]}}},methods:{init:function(e){e&&(this.dataForm.mediaType=e),this.visible=!0},dataFormSubmit:function(){var e=this;this.uploading||this.$refs["dataForm"].validate((function(t){if(t){e.uploading=!0,console.log(e.dataForm);var a=new FormData;a.append("mediaId",e.dataForm.mediaId||""),a.append("file",e.dataForm.file),a.append("fileName",e.dataForm.fileName),a.append("mediaType",e.dataForm.mediaType),e.$http({url:e.$http.adornUrl("/manage/wxAssets/materialFileUpload"),method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var a=t.data;a&&200===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg),e.uploading=!1}))}}))},onFileChange:function(e){var t=event.currentTarget.files[0];this.dataForm.file=t,this.dataForm.fileName=t.name.substring(0,t.name.lastIndexOf("."));var a=t.type.substring(0,t.type.lastIndexOf("/"));"audio"==a&&(a="voice"),this.dataForm.mediaType=a}}}),o=s,r=a("2877"),d=Object(r["a"])(o,i,n,!1,null,null,null);t["default"]=d.exports},ab26:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-menu"},[a("el-form",{attrs:{inline:!0,model:e.dataForm}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.selectMode,expression:"!selectMode"}]},[e.isAuth("wx:wxassets:save")?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")]):e._e()],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}]},e._l(e.dataList,(function(t){return a("div",{key:t.mediaId,staticClass:"card",on:{click:function(a){return e.onSelect(t)}}},["image"==e.fileType?a("el-image",{staticClass:"card-image",attrs:{src:t.url,fit:"contain",lazy:""}}):a("div",{staticClass:"card-preview"},["voice"==e.fileType?a("div",{staticClass:"card-preview-icon el-icon-microphone"}):e._e(),"video"==e.fileType?a("div",{staticClass:"card-preview-icon el-icon-video-camera-solid"}):e._e(),a("div",{staticClass:"card-preview-text"},[e._v("管理后台不支持预览"),a("br"),e._v("微信中可正常播放")])]),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"text-cut-name"},[e._v(e._s(t.name))]),a("div",[e._v(e._s(e.$moment(t.updateTime).calendar()))]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.selectMode,expression:"!selectMode"}],staticClass:"flex justify-between align-center"},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.mediaId,expression:"item.mediaId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}],attrs:{size:"mini",type:"text",icon:"el-icon-copy-document"}},[e._v("复制media_id")]),a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.deleteHandle(t.mediaId)}}},[e._v("删除")])],1)])],1)})),0),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[20],"page-size":20,total:e.totalCount,layout:"total, prev,pager, next, jumper"},on:{"current-change":e.currentChangeHandle}}),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.onChange}}):e._e()],1)},n=[],s=a("8cbd"),o={name:"material-file",props:{fileType:{type:String,default:"image"},selectMode:{type:Boolean,default:!1}},components:{AddOrUpdate:s["default"]},data:function(){return{dataForm:{},addOrUpdateVisible:!1,dataList:[],pageIndex:1,pageSize:20,totalCount:0,dataListLoading:!1}},mounted:function(){this.init()},methods:{init:function(){this.dataList.length||this.getDataList()},getDataList:function(){var e=this;this.dataListLoading||(this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/manage/wxAssets/materialFileBatchGet"),params:this.$http.adornParams({page:this.pageIndex,type:this.fileType})}).then((function(t){var a=t.data;a&&200==a.code?(e.dataList=a.data.items,e.totalCount=a.data.totalCount,e.pageIndex++):e.$message.error(a.msg),e.dataListLoading=!1})))},addOrUpdateHandle:function(){var e=this;this.addOrUpdateVisible=!0,this.$nextTick((function(){e.$refs.addOrUpdate.init(e.fileType)}))},onSelect:function(e){this.selectMode&&this.$emit("selected",e)},deleteHandle:function(e){var t=this;this.$confirm("确定对[mediaId=".concat(e,"]进行删除操作?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http({url:t.$http.adornUrl("/manage/wxAssets/materialDelete"),method:"post",data:{mediaId:e}}).then((function(e){var a=e.data;a&&200===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){return t.onChange()}}):t.$message.error(a.msg)}))}))},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},onCopySuccess:function(){this.$message.success("已复制")},onCopyError:function(e){this.$message.error("复制失败,可能是此浏览器不支持复制")},onChange:function(){this.pageIndex=1,this.getDataList(),this.$emit("change")}}},r=o,d=(a("f702"),a("2877")),l=Object(d["a"])(r,i,n,!1,null,"2ad7a327",null);t["default"]=l.exports},d269:function(e,t,a){},f702:function(e,t,a){"use strict";a("d269")}}]);