webpackJsonp([1],{"+dQR":function(t,s){},"7ngf":function(t,s){},A1OG:function(t,s){},Fl10:function(t,s){},"H/Zu":function(t,s){},NHnr:function(t,s,e){"use strict";function i(t){e("QY+L")}function a(t){e("UneQ")}function n(t){e("A1OG")}function r(t){e("7ngf")}function o(t){e("+dQR")}function m(t){e("H/Zu")}function c(t){e("cfBe")}function d(t){e("Fl10")}Object.defineProperty(s,"__esModule",{value:!0});var u=e("7+uW"),h=e("NYxO"),l=e("/ocq"),g={name:"chat",computed:{lists:function(){return this.$store.state.list}},mounted:function(t){this.$store.commit("appear")},methods:{isEmpty:function(t){for(var s in t)return!1;return!0},toRouter:function(t){this.$router.push("/chatwith/"+t)},testone:function(){var t={data:{data:{chatContent:[{send_id:"333333333333",receive_id:"4444444444444",msg:"33333333333333333",date:"11:44"},{send_id:"4444444444444",receive_id:"333333333333",msg:"fsdfdfsdf",date:"11:54"}]}}};this.$store.commit("GETCHATCONTENT",t)},testTwo:function(){var t={data:{data:{friendsList:{333333333333:{userId:"333333333333",name:"许多鬼",img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2981322449,3391128927&fm=27&gp=0.jpg",imgtwo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2976782369,217827492&fm=27&gp=0.jpg",number:"333333333333",describe:"我叫许多鬼，来自中国,这里做个标识",sex:"男",location:"中国",num:0},4444444444444:{name:"我的名字",img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800022439,3896712026&fm=27&gp=0.jpg",imgtwo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2976782369,217827492&fm=27&gp=0.jpg",number:"1234567865433",describe:"我叫许多许多鬼，来自地球",sex:"男",location:"中国",userId:"4444444444444",num:0},"三大股东":{name:"三大股东",img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3843469615,2023233766&fm=27&gp=0.jpg",imgtwo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2976782369,217827492&fm=27&gp=0.jpg",number:"352345645645",describe:"我叫许多鬼，来自中国",sex:"男",location:"中国",userId:"三大股东",num:5},44444444444:{name:"如果",img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1633698864,662530431&fm=27&gp=0.jpg",imgtwo:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2976782369,217827492&fm=27&gp=0.jpg",number:"63457345234523",describe:"我叫没有鬼，来自火星sdkjfoas;djfoasdjfasdjf阿里肯定就发动反击阿喀琉斯",sex:"男",location:"中国",userId:"44444444444",num:0}},chatList:{}}}};this.$store.commit("GETFRIENDSDATA",t)}}},f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._l(t.lists,function(s,i){return e("div",{key:i,staticClass:"chatItem",on:{click:function(e){t.toRouter(s.aimUserId)}}},[e("mt-cell-swipe",{attrs:{right:[{content:"删除",style:{background:"red",color:"#fff"},handler:function(){t.$store.dispatch("deleteChatList",s.aimUserId)}}]}},[e("span",{staticClass:"myname",attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"lastmsg",attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.lastmsg))]),t._v(" "),e("img",{staticStyle:{float:"left","margin-right":"10px"},attrs:{slot:"icon",src:s.img,width:"40",height:"40"},slot:"icon"}),t._v(" "),e("div",[e("p",{staticClass:"msgtime"},[t._v(t._s(s.time))]),t._v(" "),e("mt-badge",{directives:[{name:"show",rawName:"v-show",value:s.num>0,expression:"list.num > 0"}],attrs:{size:"small"}},[t._v(t._s(s.num))])],1)])],1)}),t._v(" "),t.isEmpty(t.lists)?e("p",[t._v("你的消息空空如也")]):t._e()],2)},p=[],v={render:f,staticRenderFns:p},_=v,y=e("VU/8"),b=i,$=y(g,_,!1,b,null,null),I=$.exports,C={name:"friends",data:function(t){return{headlists:friendsHead}},computed:{lists:function(){return this.$store.state.friendsmsg}},methods:{isEmpty:function(t){for(var s in t)return!1;return!0}},mounted:function(t){this.$store.commit("appear")}},k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",t._l(t.headlists,function(s){return e("router-link",{key:s.name,staticClass:"friendsbus",attrs:{to:"wait"}},[e("img",{staticClass:"borderra",attrs:{src:s.img,width:"35",height:"35"}}),t._v(" "),e("span",[t._v(t._s(s.msg))])])})),t._v(" "),e("div",{staticStyle:{height:"20px"}}),t._v(" "),e("div",t._l(t.lists,function(s){return s.userId!=t.$store.state.mycookie&&"myowmid"!=s.userId?e("router-link",{key:s.name,staticClass:"friendsbus",attrs:{to:"/friendsmsg/"+s.userId}},[e("img",{staticClass:"borderra",attrs:{src:s.img,width:"35",height:"35"}}),t._v(" "),e("span",[t._v(t._s(s.name))])]):t._e()})),t._v(" "),t.isEmpty(t.lists)?e("div",[t._v("赶快打电话邀请好友吧~~")]):t._e()])},E=[],w={render:k,staticRenderFns:E},x=w,T=e("VU/8"),F=a,M=T(C,x,!1,F,null,null),H=M.exports,G={name:"more",data:function(t){return{lists:findMsg}},mounted:function(){this.$store.commit("appear")}},A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",t._l(t.lists,function(s,i){return e("router-link",{key:i,staticClass:"friendsbus",attrs:{to:"wait"}},[e("img",{staticClass:"borderra",attrs:{src:s.img,width:"35",height:"35"}}),t._v(" "),e("span",[t._v(t._s(s.ID))])])}))])},S=[],N={render:A,staticRenderFns:S},U=N,R=e("VU/8"),L=n,D=R(G,U,!1,L,null,null),O=D.exports,Y={name:"user",data:function(t){return{}},computed:{list:function(){return this.$store.state.usermsg.myid}},mounted:function(){this.$store.commit("appear"),this.$store.commit("CHANGEMYMSG")}},j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("router-link",{staticClass:"chatout",staticStyle:{margin:"10px 0","border-radius":"8px"},attrs:{to:"/friendsmsg/"+t.list.userId}},[e("div",{staticClass:"chatOutUser addInformation"},[e("img",{staticClass:"borderra",attrs:{src:t.list.img,width:"50",height:"50"}}),t._v(" "),e("div",[e("p",[t._v(t._s(t.list.name))]),t._v(" "),e("span",{staticClass:"chatOutMsg"},[t._v("代号："+t._s(t.list.number))])])]),t._v(" "),e("img",{staticStyle:{"margin-right":"10px"},attrs:{src:t.list.imgtwo,width:"20",height:"20"}})])],1)])},Q=[],K={render:j,staticRenderFns:Q},W=K,V=e("VU/8"),B=r,X=V(Y,W,!1,B,null,null),z=X.exports,q={name:"chatwith",data:function(t){return{lists:this.$store.state.chatcontent[this.$route.params.id]}},mounted:function(){this.$store.commit("disappear"),this.$store.commit("CHANGECHATTO",this.$route.params.id),this.flowbutton(),this.getDate()},beforeRouteLeave:function(t,s,e){var i=this.$store.state;i.chatcontent[this.$route.params.id]&&!i.list[this.$route.params.id]&&(this.$store.dispatch("sendChatList",{user_id:i.mycookie,friend_id:i.friendsmsg[this.$route.params.id].userId}),this.$store.commit("addData",this.$route.params.id)),this.$store.dispatch("clearNum",{user_id:i.mycookie,friend_id:i.friendsmsg[this.$route.params.id].userId,name:this.$route.params.id}),this.$store.commit("CHANGELASTMSG"),e()},methods:{input:function(){this.$store.commit("CHANGEMYMSG"),this.lists=this.$store.state.chatcontent[this.$route.params.id];var t,s=new Date;t=s.getMinutes()>9?s.getMinutes():"0"+s.getMinutes();var e=s.getHours()+":"+t,i={hrf:this.$store.state.usermsg.myid.img,chatwith:this.$route.params.id,msg:"这是我发的一条信息",time:e,userId:this.$store.state.mycookie,aimUserId:this.$store.state.friendsmsg[this.$route.params.id].userId},a=document.getElementsByTagName("textarea")[0];if(i.msg=a.value,0!=a.value.length&&"\n"!=a.value){var n=this.$route.params.id;this.$store.commit("TACKCHAT",{id:n,msg:i}),"robotFriend"!=i.aimUserId?this.$store.dispatch("sendMyMsg",{msg:i.msg,userId:i.userId,aimUserId:i.aimUserId}):this.$store.dispatch("sendMyMsgToRobot",{msg:i.msg}),a.value=null}else a.value=null},getDate:function(){var t=0,s=this.$route.params.id;for(var e in this.$store.state.list)e==s&&t++;0==t&&this.$store.commit("ADDCHATCONTENT",s)},flowbutton:function(){var t=document.getElementsByClassName("input-box")[0];document.getElementById("btview");t.scrollIntoView(!1)}},watch:{lists:function(){this.flowbutton()}}},Z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"input-box"},[t._l(t.lists,function(s,i){return e("div",{key:i,staticClass:"msgbox",class:{rightmsg:s.chatwith==t.$route.params.id,leftmsg:s.chatwith!=t.$route.params.id}},[s.chatwith!=t.$route.params.id?e("div",[e("img",{attrs:{src:s.hrf,alt:"头像",width:"30",height:"30"}})]):t._e(),t._v(" "),e("p",{staticClass:"msg"},[t._v(t._s(s.msg))]),t._v(" "),s.chatwith==t.$route.params.id?e("div",[e("img",{attrs:{src:s.hrf,alt:"头像",width:"30",height:"30"}})]):t._e()])}),t._v(" "),e("div",{attrs:{id:"btview"}}),t._v(" "),e("div",{staticClass:"text-input"},[e("textarea",{attrs:{type:"text",name:"myipt"},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key))return null;t.input(s)}}}),t._v(" "),e("mt-button",{staticClass:"my-send-bt",attrs:{type:"default"},on:{click:t.input}},[t._v("发送")])],1)],2)},J=[],P={render:Z,staticRenderFns:J},tt=P,st=e("VU/8"),et=o,it=st(q,tt,!1,et,"data-v-72ceed66",null),at=it.exports,nt={name:"friendsmsg",data:function(t){return{mymsg:this.$store.state.usermsg.myid}},mounted:function(){this.$store.commit("disappear"),this.$store.commit("CHANGECHATTO",this.$route.params.id);for(var t in this.$store.state.friendsmsg)t==this.$route.params.id&&(this.mymsg=this.$store.state.friendsmsg[t])}},rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"myfriendmsg"},[e("div",{staticClass:"headimg"},[e("span",[t._v("头像")]),t._v(" "),e("img",{attrs:{src:t.mymsg.img,width:"50",height:"50"}})]),t._v(" "),e("div",[e("span",[t._v("昵称")]),t._v(" "),e("span",[t._v(t._s(t.mymsg.name))])]),t._v(" "),e("div",[e("span",[t._v("代号")]),t._v(" "),e("span",[t._v(t._s(t.mymsg.number))])]),t._v(" "),e("div",{staticStyle:{height:"30px",background:"transparent"}}),t._v(" "),e("div",[e("span",[t._v("性别")]),t._v(" "),e("span",[t._v(t._s(t.mymsg.sex))])]),t._v(" "),e("div",[e("span",[t._v("地区")]),t._v(" "),e("span",[t._v(t._s(t.mymsg.location))])]),t._v(" "),e("div",[e("span",[t._v("个性签名")]),t._v(" "),e("span",[t._v(t._s(t.mymsg.describe))])]),t._v(" "),t.mymsg.userId!=t.$store.state.usermsg.myid.userId&&"myid"!=t.$store.state.usermsg.myid.userId?e("div",{staticClass:"gochat"},[e("p",[e("router-link",{attrs:{to:"/chatwith/"+t.mymsg.userId}},[t._v("\n\t\t\t\t发起聊天\n\t\t\t")])],1)]):t._e(),t._v(" "),t.mymsg.userId==t.$store.state.usermsg.myid.userId&&"myid"!=t.$store.state.usermsg.myid.userId?e("div",{staticClass:"gochat"},[e("p",[e("router-link",{attrs:{to:"/changeMyMsg"}},[t._v("\n\t\t\t\t修改资料\n\t\t\t")])],1)]):t._e(),t._v(" "),"myid"==t.$store.state.usermsg.myid.userId?e("div",{staticClass:"gochat"},[e("p",[t._v("登录")])]):t._e()])},ot=[],mt={render:rt,staticRenderFns:ot},ct=mt,dt=e("VU/8"),ut=m,ht=dt(nt,ct,!1,ut,null,null),lt=ht.exports,gt={data:function(){return{msg:{name:"",describe:"",sex:"",location:""}}},mounted:function(){this.$store.commit("disappear")},methods:{submitMyMsg:function(){this.$messagebox.confirm("暂时未写后台修改信息模块","提示").then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},ft=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("mt-field",{staticClass:"list-item",attrs:{label:"用户名",placeholder:t.$store.state.usermsg.myid.name},model:{value:t.msg.name,callback:function(s){t.$set(t.msg,"name",s)},expression:"msg.name"}}),t._v(" "),e("mt-field",{attrs:{label:"性别",placeholder:t.$store.state.usermsg.myid.sex},model:{value:t.msg.sex,callback:function(s){t.$set(t.msg,"sex",s)},expression:"msg.sex"}}),t._v(" "),e("mt-field",{attrs:{label:"地址",placeholder:t.$store.state.usermsg.myid.location},model:{value:t.msg.location,callback:function(s){t.$set(t.msg,"location",s)},expression:"msg.location"}}),t._v(" "),e("mt-field",{staticClass:"list-item",attrs:{label:"个性签名",placeholder:t.$store.state.usermsg.myid.describe,type:"textarea",rows:"3"},model:{value:t.msg.describe,callback:function(s){t.$set(t.msg,"describe",s)},expression:"msg.describe"}}),t._v(" "),e("mt-button",{staticClass:"submitBt",attrs:{type:"primary",size:"large"},on:{click:t.submitMyMsg}},[t._v("确 认")])],1)},pt=[],vt={render:ft,staticRenderFns:pt},_t=vt,yt=e("VU/8"),bt=c,$t=yt(gt,_t,!1,bt,null,null),It=$t.exports,Ct={name:"wait",data:function(t){return{}},mounted:function(){this.$store.commit("disappear")}},kt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},Et=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[t._v("该功能尚未开放")])])}],wt={render:kt,staticRenderFns:Et},xt=wt,Tt=e("VU/8"),Ft=Tt(Ct,xt,!1,null,null,null),Mt=Ft.exports;u.default.use(l.a);var Ht=new l.a({routes:[{path:"/",component:I},{path:"/chat",name:"chat",component:I},{path:"/friends",name:"friends",component:H},{path:"/more",name:"more",component:O},{path:"/user",name:"user",component:z},{path:"/chatwith/:id",name:"chatwith",component:at},{path:"/friendsmsg/:id",name:"friendsmsg",component:lt},{path:"/wait",name:Mt,component:Mt},{path:"/changeMyMsg",name:"changeMyMsg",component:It}]}),Gt=e("mtWM"),At=e.n(Gt),St={name:"app",mounted:function(){var t=document.documentElement.clientHeight,s=document.getElementById("routerHeight"),e=document.getElementById("app"),i=document.getElementById("apphead"),a=(document.getElementsByClassName("allIndex")[0],t-.16*t);i.style.height=.08*t+"px",s.style.height=a+"px",e.style.height=t+"px",this.$store.commit("GETCOOKIE"),this.$store.dispatch("getChatData"),this.$store.dispatch("receiveMsg")}},Nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"apphead"}},[t.$store.state.isappear?t._e():e("mt-header",{staticStyle:{height:"100%",background:"#444"},attrs:{title:t.$store.state.chatname}},[e("router-link",{attrs:{slot:"left",to:"/chat"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1),t._v(" "),e("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),t.$store.state.isappear?e("mt-header",{staticStyle:{height:"100%",background:"#444"}},[e("span",{staticClass:"headLog",attrs:{slot:"left"},slot:"left"},[t._v("柒 零")]),t._v(" "),e("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1):t._e()],1),t._v(" "),e("div",{attrs:{id:"routerHeight"}},[e("router-view")],1),t._v(" "),t.$store.state.isappear?e("div",{staticClass:"allIndex"},[e("router-link",{attrs:{to:"/chat"}},[e("img",{attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105922480,1672123235&fm=27&gp=0.jpg",width:"40",height:"40"}})]),t._v(" "),e("router-link",{attrs:{to:"/friends"}},[e("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511003826222&di=c482483d746ba5c8422e83d3b86a87e8&imgtype=0&src=http%3A%2F%2Fimage5.huangye88.com%2F2013%2F03%2F21%2F5f2bd87a90a70229.jpg",width:"40",height:"40"}})]),t._v(" "),e("router-link",{attrs:{to:"/more"}},[e("img",{attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3572258698,3789554449&fm=27&gp=0.jpg",width:"40",height:"40"}})]),t._v(" "),e("router-link",{attrs:{to:"/user"}},[e("img",{attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1608661816,3207861660&fm=27&gp=0.jpg",width:"40",height:"40"}})])],1):t._e()])},Ut=[],Rt={render:Nt,staticRenderFns:Ut},Lt=Rt,Dt=e("VU/8"),Ot=d,Yt=Dt(St,Lt,!1,Ot,null,null),jt=Yt.exports,Qt=e("woOf"),Kt=e.n(Qt),Wt={isappear:!0,chatname:"对方的名字",list:{},usermsg:{myid:{name:"登录错误，请重新登录",img:"",imgtwo:"",number:"",hrf:"link",describe:"我叫许多鬼，来自中国",sex:"男",location:"中国",userId:"myid"}},friendsmsg:{robotFriend:{userId:"robotFriend",name:"小强-robot",img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3120358098,62815893&fm=27&gp=0.jpg",describe:"我是小强，一个聪明的机器人",sex:"男",location:"你电脑的某一个隐秘的地方",num:0},myowmid:{userId:"myowmid",name:"模拟的登录",img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3843743666,3385530918&fm=27&gp=0.jpg",describe:"我就是你，一个奇怪的人",sex:"男",location:"你的椅子上",num:0}},chatcontent:{},mycookie:"myowmid"},Vt={CHANGECHATTO:function(t,s){t.chatname=t.friendsmsg[s].name},disappear:function(t){t.isappear=!1},appear:function(t){t.isappear=!0},addData:function(t,s){t.list[s]=Kt()({},t.list[s],t.friendsmsg[s]),t.list[s].userId=t.mycookie,t.list[s]=Kt()({},t.list[s],{aimUserId:t.friendsmsg[s].userId,num:0}),t.list=Kt()({},t.list,{})},DELETELIST:function(t,s){u.default.delete(t.list,s)},ADDCHATCONTENT:function(t,s){t.chatcontent[s]||(t.chatcontent[s]=Kt()({},t.chatcontent[s],s),t.chatcontent[s]=[])},TACKCHAT:function(t,s){t.chatcontent[s.id].push(s.msg)},CHANGELASTMSG:function(t){for(var s in t.list)if(t.chatcontent[s]){var e=t.chatcontent[s].length;t.chatcontent[s].length>0?(t.friendsmsg[s]=Kt()({},t.friendsmsg[s],{lastmsg:t.chatcontent[s][e-1].msg}),t.list[s]=Kt()({},t.list[s],{lastmsg:t.chatcontent[s][e-1].msg}),t.list[s]=Kt()({},t.list[s],{time:t.chatcontent[s][e-1].time})):t.list[s]=Kt()({},t.list[s],{lastmsg:"暂无新消息"})}},CLEARNUM:function(t,s){t.list[s]&&(t.list[s].num=0)},GETFRIENDSDATA:function(t,s){t.friendsmsg=Kt()({},t.friendsmsg,s.data.data.friendsList),t.list=Kt()({},t.list,s.data.data.chatList);for(var e in t.list)t.friendsmsg[e]&&(t.list[e]=Kt()({},t.list[e],{time:"",lastmsg:"无新消息",aimUserId:t.friendsmsg[e].userId,userId:t.mycookie}),t.chatcontent[e]=Kt()({},t.chatcontent[e],e),t.chatcontent[e]=[])},GETCHATCONTENT:function(t,s){if(s.data.data.chatContent)for(var e=s.data.data.chatContent,i=0;i<e.length;i++)for(var a in t.friendsmsg)e[i].send_id!=t.friendsmsg[a].userId&&e[i].receive_id!=t.friendsmsg[a].userId||t.friendsmsg[a].userId==t.mycookie||(t.chatcontent[a]?e[i].send_id==t.mycookie?t.chatcontent[a].push({msg:e[i].msg,time:e[i].date,hrf:t.usermsg.myid.img,chatwith:t.friendsmsg[a].userId,userId:t.mycookie,aimUserId:e[i].receive_id}):t.chatcontent[a].push({msg:e[i].msg,time:e[i].date,hrf:t.friendsmsg[a].img,chatwith:t.usermsg.myid.userId,userId:e[i].receive_id,aimUserId:t.mycookie}):(t.chatcontent[a]=Kt()({},t.chatcontent[a],a),t.chatcontent[a]=[],e[i].send_id==t.mycookie?t.chatcontent[a].push({msg:e[i].msg,time:e[i].date,hrf:t.usermsg.myid.img,chatwith:t.friendsmsg[a].userId,userId:t.mycookie,aimUserId:e[i].receive_id}):t.chatcontent[a].push({msg:e[i].msg,time:e[i].date,hrf:t.friendsmsg[a].img,chatwith:t.usermsg.myid.userId,userId:e[i].receive_id,aimUserId:t.mycookie})))},RECEIVEMSG:function(t,s){var e=0;for(var i in t.list)t.list[i].aimUserId==s.data.data.send_id&&(t.list[i]=Kt()({},t.list[i],{lastmsg:s.data.data.msg,time:s.data.data.date,num:s.data.data.num}),t.chatcontent[i].push({aimUserId:s.data.data.send_id,chatwith:t.usermsg.myid.name,hrf:t.list[i].img,msg:s.data.data.msg,time:s.data.data.date,userId:t.mycookie}),e++);if(0==e)for(var a in t.friendsmsg)s.data.data.send_id==t.friendsmsg[a].userId&&(t.list[a]=Kt()({},t.list[a],t.friendsmsg[a]),t.list[a]=Kt()({},t.list[a],{aimUserId:t.friendsmsg[a].userId,lastmsg:s.data.data.msg,time:s.data.data.date,userId:t.mycookie,num:s.data.data.num}),t.list=Kt()({},t.list,{}),t.chatcontent[a]=Kt()({},t.chatcontent[a],a),t.chatcontent[a]=[],t.chatcontent[a].push({hrf:t.friendsmsg[a].img,chatwith:t.usermsg.myid.name,msg:s.data.data.msg,time:s.data.data.date,userId:t.mycookie,aimUserId:s.data.data.send_id}),e++);0==e&&alert("有一条消息来自陌生人，但是我就是不收")},GETCOOKIE:function(t,s){if(document.cookie){var e=document.cookie.indexOf("=");t.mycookie=decodeURIComponent(document.cookie.substring(e+1))}},CHANGEMYMSG:function(t){for(var s in t.friendsmsg)t.friendsmsg[s].userId==t.mycookie&&(t.usermsg.myid=t.friendsmsg[s])}},Bt={deleteChatList:function(t,s){At()({method:"post",url:"chatOut.action",data:{user_id:Wt.mycookie,friend_id:Wt.friendsmsg[s].userId}}).then(function(e){t.commit("DELETELIST",s)}).catch(function(e){t.commit("DELETELIST",s)})},clearNum:function(t,s){At()({method:"post",url:"clearNum.action",data:{user_id:s.user_id,friend_id:s.friend_id}}).then(function(e){t.commit("CLEARNUM",s.name)}).catch(function(e){t.commit("CLEARNUM",s.name)})},getChatData:function(t){At()({method:"post",url:"load.action",data:{userId:Wt.mycookie}}).then(function(s){t.commit("GETFRIENDSDATA",s),t.commit("CHANGEMYMSG"),t.commit("GETCHATCONTENT",s),t.commit("CHANGELASTMSG")}).catch(function(s){t.commit("CHANGEMYMSG"),alert("服务器获取数据失败")})},receiveMsg:function(t){At()({method:"post",url:"receive.action",data:{userId:Wt.mycookie}}).then(function(s){7==s.data.status?t.dispatch("receiveMsg"):(t.commit("RECEIVEMSG",s),t.dispatch("receiveMsg"))}).catch(function(t){alert("聊天消息的一次重大失败")})},sendMyMsg:function(t,s){At()({method:"post",url:"send.action",data:s}).then(function(t){}).catch(function(t){})},sendChatList:function(t,s){At()({method:"post",url:"chatIn.action",data:s}).then(function(){}).catch(function(){})},sendMyMsgToRobot:function(t,s){At.a.get("robot/tohome/"+s.msg).then(function(s){var e=s.msg;console.log(e),console.log("来自机器人的消息:"+s.msg);var i={data:{data:{msg:s.msg,date:"00:00",send_id:"robotFriend",num:0}}};t.commit("RECEIVEMSG",i)}).catch(function(t){return console.log("出错了"+t)})}},Xt={isMyTest:function(){alert("使用了mixins,失败，改用对象混合")}};u.default.use(h.a);var zt=Kt()(Bt,Xt),qt=new h.a.Store({state:Wt,mutations:Vt,actions:zt}),Zt=e("Au9i"),Jt=e.n(Zt);e("d8/S");u.default.config.devtools=!0,u.default.config.productionTip=!1,u.default.prototype.$http=At.a,u.default.use(Jt.a),new u.default({el:"#app",store:qt,router:Ht,template:"<App/>",components:{App:jt}})},"QY+L":function(t,s){},UneQ:function(t,s){},cfBe:function(t,s){},"d8/S":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.f9329bcce14f81db73dc.js.map