webpackJsonp([21],{Gxjg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),i=a.n(r),s=a("Xxa5"),n=a.n(s),l=a("exGp"),o=a.n(l),c=a("2CGT"),u=a("SJI6"),d={props:[],methods:{handleSizeChange:function(e){this.queryParam.pageSize=e,this.init()},handleCurrentChange:function(e){this.queryParam.page=e,this.init()},init:function(){var e=this;return o()(n.a.mark(function t(){var a,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.Req.get(c.a.articleClassList,e.queryParam);case 3:a=t.sent,r=a.data,200===a.code&&(e.tableData=r),e.loading=!1;case 8:case"end":return t.stop()}},t,e)}))()},actionEvents:function(e){this.currRow=e},checksEdit:function(e){this.isRoleCheck=!0,this.dialogVisiblerole=!0,this.roleValidateForm={class_name:e.class_name,id:e.id}},deleteClass:function(e){var t=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o()(n.a.mark(function a(){var r,i,s;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.Req.delete(c.a.deleteClassList,{data:{id:e.id}});case 2:r=a.sent,i=r.code,s=r.msg,200===i&&(t.init(),t.$message({type:"success",message:s}));case 6:case"end":return a.stop()}},a,t)}))).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getroleList:function(){var e=this;return o()(n.a.mark(function t(){var a,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Req.get(c.a.getAllRole);case 2:a=t.sent,r=a.data,200===a.code&&(e.roleList=r.roleList);case 6:case"end":return t.stop()}},t,e)}))()},updateClassList:function(){var e=this;return o()(n.a.mark(function t(){var a,r,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Req.put(c.a.updateClassList,e.roleValidateForm);case 2:a=t.sent,r=a.code,i=a.msg,200===r?(e.init(),e.$message({message:i,type:"success"}),e.dialogVisiblerole=!1):(e.dialogVisiblerole=!1,e.resetForm("roleValidateForm"));case 6:case"end":return t.stop()}},t,e)}))()},createDialog:function(){this.dialogVisiblerole=!0,this.isRoleCheck=!1,this.resetForm("roleValidateForm")},resetForm:function(e){var t=this;this.$nextTick(function(){t.$refs[e].resetFields()})},createArticleClass:function(){var e=this;return o()(n.a.mark(function t(){var a,r,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Req.post(c.a.createClassList,e.roleValidateForm);case 2:a=t.sent,r=a.code,i=a.msg,200===r?(e.init(),e.$message({message:i,type:"success"}),e.dialogVisiblerole=!1):(e.dialogVisiblerole=!1,e.$message({message:i,type:"success"}),e.resetForm("roleValidateForm"));case 6:case"end":return t.stop()}},t,e)}))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.isRoleCheck?t.updateClassList():t.createArticleClass()})}},data:function(){return{tableData:[],roleList:[],isRoleCheck:!1,dialogVisiblerole:!1,defaultProps:{children:"children",label:"res_name"},queryParam:{page:1,pageSize:10,currentPage:1},currRow:null,roleValidateForm:{id:"",class_name:""}}},filters:{},computed:i()({},Object(u.mapGetters)("app",["winH"])),created:function(){this.init()}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.isRoleCheck?"编辑分类":"新增分类",visible:e.dialogVisiblerole,width:"25%"},on:{"update:visible":function(t){e.dialogVisiblerole=t}}},[a("el-form",{ref:"roleValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.roleValidateForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"分类名",prop:"class_name",rules:[{required:!0,message:"分类名不能为空"}]}},[a("el-input",{attrs:{type:"input",autocomplete:"off"},model:{value:e.roleValidateForm.class_name,callback:function(t){e.$set(e.roleValidateForm,"class_name",t)},expression:"roleValidateForm.class_name"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("roleValidateForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("roleValidateForm")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"btn-box"},[a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"primary",size:"mini"},on:{click:e.createDialog}},[e._v("新建")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{height:e.$tableHeight(),data:e.tableData.list,size:"small",border:"",stripe:"",fit:"","highlight-current-row":""},on:{"row-click":e.actionEvents}},[a("el-table-column",{attrs:{align:"center",fixed:"",prop:"id",label:"ID",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"class_name",label:"分类名"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",effect:"dark",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.checksEdit(t.row,!1)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",effect:"dark",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.deleteClass(t.row,!1)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"page-bottom"},[a("el-pagination",{attrs:{"current-page":e.queryParam.currentPage,"page-sizes":[10,20,30,40],"page-size":e.queryParam.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]},p=a("VU/8")(d,m,!1,null,null,null);t.default=p.exports}});
//# sourceMappingURL=21.079feef933132f7d78cf.js.map