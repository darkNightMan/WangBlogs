webpackJsonp([12],{S24r:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),r=n.n(o),a=n("Xxa5"),i=n.n(a),s=n("exGp"),c=n.n(s),m=n("2CGT"),l=n("NYxO"),u={props:[],methods:{handleSizeChange:function(e){this.queryParam.pageSize=e,this.init()},handleCurrentChange:function(e){this.queryParam.page=e,this.init()},init:function(){var e=this;return c()(i.a.mark(function t(){var n,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.Req.get(m.a.msgCommentsList,e.queryParam);case 3:n=t.sent,o=n.data,200===n.code&&(e.tableData=o),e.loading=!1;case 8:case"end":return t.stop()}},t,e)}))()},linkArticle:function(e){this.$addView({view:{component:"blogMsgDetail",res_name:"留言详情",params:{comment_id:e.comment_id}}})},checksEdit:function(e,t){this.isRoleCheck=t,this.dialogVisiblerole=!0,this.commentsForm.parent_id=e.comment_id,this.commentsForm.user_id=this.$userInfo().nick_name,this.commentsForm.article_id=e.article_id,this.commentsForm.comment_content=t?e.comment_content:"@"+e.comment_author,this.commentsForm.comment_author_email=this.$userInfo().email,this.commentsForm.comment_author=this.$userInfo().nick_name},updateClassList:function(){var e=this;return c()(i.a.mark(function t(){var n,o,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Req.put(m.a.updateMsgCommentsList,e.commentsForm);case 2:n=t.sent,o=n.code,r=n.msg,200===o?(e.init(),e.$message({message:r,type:"success"}),e.dialogVisiblerole=!1):(e.dialogVisiblerole=!1,e.resetForm("roleValidateForm"));case 6:case"end":return t.stop()}},t,e)}))()},resetForm:function(e){var t=this;this.$nextTick(function(){t.$refs[e].resetFields()})},createComments:function(){var e=this;return c()(i.a.mark(function t(){var n,o,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Req.post(m.a.createMsgCommentsList,e.commentsForm);case 2:n=t.sent,o=n.code,r=n.msg,200===o?(e.init(),e.$message({message:r,type:"success"}),e.dialogVisiblerole=!1):(e.dialogVisiblerole=!1,e.$message({message:r,type:"success"}),e.resetForm("commentsForm")),e.init();case 7:case"end":return t.stop()}},t,e)}))()},deleteComments:function(e){var t=this;this.$confirm("此操作将永久删除该评论吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c()(i.a.mark(function n(){var o,r,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.Req.delete(m.a.deleteMsgCommentsList,{data:{commentId:e.comment_id}});case 2:o=n.sent,r=o.code,a=o.msg,200===r&&(t.init(),t.$message({type:"success",message:a}));case 6:case"end":return n.stop()}},n,t)}))).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleSelectionChange:function(e){this.currRow=e},deleteBatchComments:function(){var e=this;this.$confirm("批量删除这些评论吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c()(i.a.mark(function t(){var n,o,r,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],e.currRow.map(function(e){n.push(e.comment_id)}),t.next=4,e.Req.delete(m.a.deleteMsgCommentsList,{data:{commentId:n}});case 4:o=t.sent,r=o.code,a=o.msg,200===r&&(e.init(),e.$message({type:"success",message:a}));case 8:case"end":return t.stop()}},t,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.isRoleCheck?t.updateClassList():t.createComments()})}},data:function(){return{tableData:[],roleList:[],isRoleCheck:!1,dialogVisiblerole:!1,defaultProps:{children:"children",label:"res_name"},queryParam:{page:1,pageSize:10,currentPage:1},currRow:null,commentsForm:{parent_id:"",user_id:"",article_id:"",comment_content:"",comment_author_email:"",comment_author:""}}},filters:{},computed:r()({},Object(l.c)("app",["winH"])),created:function(){this.init()}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:(e.isRoleCheck,"回复评论"),visible:e.dialogVisiblerole,width:"25%"},on:{"update:visible":function(t){e.dialogVisiblerole=t}}},[n("el-form",{ref:"commentsForm",staticClass:"demo-ruleForm",attrs:{model:e.commentsForm,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"评论内容",prop:"comment_content",rules:[{required:!0,message:"评论不能为空"}]}},[n("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",resize:"none",rows:3},model:{value:e.commentsForm.comment_content,callback:function(t){e.$set(e.commentsForm,"comment_content",t)},expression:"commentsForm.comment_content"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("commentsForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:function(t){return e.resetForm("commentsForm")}}},[e._v("重置")])],1)],1),e._v(" "),n("div",{staticClass:"btn-box"},[n("el-button",{attrs:{icon:"el-icon-delete",type:"danger",size:"mini"},on:{click:e.deleteBatchComments}},[e._v("批量删除")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{height:e.$tableHeight(),data:e.tableData.list,size:"small",border:"",stripe:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"comment_id",label:"评论ID",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"留言内容","show-overflow-tooltip":!0,width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{type:"primary"},on:{click:function(n){return e.linkArticle(t.row)}}},[e._v("\n          "+e._s(t.row.comment_content)+"\n        ")])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"comment_author",label:"匿名用户"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"comment_author_email",label:"匿名评论邮箱"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"comment_time",label:"评论时间"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",effect:"dark",icon:"el-icon-chat-dot-round",size:"mini"},on:{click:function(n){return e.checksEdit(t.row,!1)}}},[e._v("回复")]),e._v(" "),n("el-button",{attrs:{type:"primary",effect:"dark",icon:"el-icon-edit",size:"mini"},on:{click:function(n){return e.checksEdit(t.row,!0)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger",effect:"dark",icon:"el-icon-delete",size:"mini"},on:{click:function(n){return e.deleteComments(t.row,!1)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"page-bottom"},[n("el-pagination",{attrs:{"current-page":e.queryParam.currentPage,"page-sizes":[10,20,30,40],"page-size":e.queryParam.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]},p=n("VU/8")(u,d,!1,null,null,null);t.default=p.exports}});
//# sourceMappingURL=12.6af24649a62b52cd2c91.js.map