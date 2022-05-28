(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213391"],{ac81:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}]},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,size:"mini","label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章标题",prop:"title",required:""}},[a("el-input",{attrs:{maxlength:1024,placeholder:"标题"},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章类型",prop:"type",required:""}},[a("el-select",{attrs:{placeholder:"选择文章类型"},model:{value:t.dataForm.type,callback:function(e){t.$set(t.dataForm,"type",e)},expression:"dataForm.type"}},t._l(t.ARTICLE_TYPES,(function(t,e){return a("el-option",{key:t,attrs:{label:t,value:e,"allow-create":""}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"一级目录",prop:"category"}},[a("el-input",{attrs:{maxlength:50,placeholder:"一级目录"},model:{value:t.dataForm.category,callback:function(e){t.$set(t.dataForm,"category",e)},expression:"dataForm.category"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"二级分类",prop:"subCategory"}},[a("el-input",{attrs:{maxlength:50,placeholder:"二级目录"},model:{value:t.dataForm.subCategory,callback:function(e){t.$set(t.dataForm,"subCategory",e)},expression:"dataForm.subCategory"}})],1)],1)],1),a("el-form-item",{attrs:{label:"指向外链",prop:"targetLink"}},[a("el-input",{attrs:{placeholder:"指向外链"},model:{value:t.dataForm.targetLink,callback:function(e){t.$set(t.dataForm,"targetLink",e)},expression:"dataForm.targetLink"}})],1),a("el-form-item",{attrs:{label:"摘要",prop:"summary"}},[a("el-input",{attrs:{placeholder:"摘要",type:"textarea",rows:"3",maxlength:"512","show-word-limit":""},model:{value:t.dataForm.summary,callback:function(e){t.$set(t.dataForm,"summary",e)},expression:"dataForm.summary"}})],1),a("el-form-item",{attrs:{label:"标签",prop:"tags"}},[a("tags-editor",{model:{value:t.dataForm.tags,callback:function(e){t.$set(t.dataForm,"tags",e)},expression:"dataForm.tags"}})],1),a("el-form-item",{attrs:{label:"封面图",prop:"image"}},[a("el-input",{attrs:{placeholder:"图片链接"},model:{value:t.dataForm.image,callback:function(e){t.$set(t.dataForm,"image",e)},expression:"dataForm.image"}},[a("OssUploader",{attrs:{slot:"append"},on:{uploaded:function(e){t.dataForm.image=e}},slot:"append"})],1)],1),a("tinymce-editor",{ref:"editor",model:{value:t.dataForm.content,callback:function(e){t.$set(t.dataForm,"content",e)},expression:"dataForm.content"}})],1),a("div",{staticClass:"margin-top text-right"},[a("el-button",{on:{click:function(e){return t.$emit("hide")}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},o=[],l=(a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),n={name:"article-add-or-update",components:{TinymceEditor:function(){return a.e("chunk-ffc0e5ba").then(a.bind(null,"26dc"))},tagsEditor:function(){return a.e("chunk-5a860c27").then(a.bind(null,"a55c"))},OssUploader:function(){return a.e("chunk-2d0e97b1").then(a.bind(null,"8e5c"))}},props:{visible:{type:Boolean,default:!1}},data:function(){return{dataForm:{id:"",type:"1",title:"",content:"",category:"",subCategory:"",summary:"",tags:"",openCount:0,targetLink:location.origin+"/client/#/article/${articleId}",image:""},dataRule:{type:[{required:!0,message:"文章类型不能为空",trigger:"blur"}],title:[{required:!0,message:"标题不能为空",trigger:"blur"}],category:[{required:!0,message:"分类不能为空",trigger:"blur"}]}}},computed:Object(l["b"])({ARTICLE_TYPES:function(t){return t.article.ARTICLE_TYPES}}),methods:{init:function(t){var e=this;this.dataForm.id=t||"",this.$nextTick((function(){e.$refs["dataForm"].resetFields(),t>0&&e.$http({url:e.$http.adornUrl("/manage/article/info/".concat(e.dataForm.id)),method:"get",params:e.$http.adornParams()}).then((function(t){var a=t.data;a&&200===a.code&&(e.dataForm=a.article,e.dataForm.type=a.article.type+"")}))}))},dataFormSubmit:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&t.$http({url:t.$http.adornUrl("/manage/article/save"),method:"post",data:t.$http.adornData(t.dataForm)}).then((function(e){var a=e.data;a&&200===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.$emit("refreshDataList"),t.$emit("hide")}}):t.$message.error(a.msg)}))}))},imgUploadSuccess:function(t,e,a){console.log(t),200==t.code?(this.dataForm.image=t.data,console.log("this.article",this.article)):this.$message.warning(t.msg)}}},i=n,s=a("2877"),d=Object(s["a"])(i,r,o,!1,null,null,null);e["default"]=d.exports}}]);