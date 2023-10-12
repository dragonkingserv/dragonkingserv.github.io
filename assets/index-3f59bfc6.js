import{T as b,R,s as d,E as l,D as T,F as $,M as F,f as c,a as B,p as L}from"./tab-4c5d79b9.js";import{o as u,c as h,b as t,t as o,F as x,i as E,n as C,k as U,v as D,g as N,a as g,d as m,w as f}from"./index-83a21f82.js";import{_ as y}from"./plugin-vueexport-helper-c27b6911.js";const k=[{key:1,value:"500U"},{key:2,value:"1000U"}],P={data(){return{actions:k,menu:k[0].key,value:k[0].value,poolUSDT:0,needApprove:!0,needAmount:0,rate:75,canTakeAmount:0,leftTakeAmount:0,transferAddress:""}},components:{Tab:b},computed:{},methods:{menuChange(e,s){this.menu=e,this.value=s,this.init()},check(){window.location.href="https://bscscan.com/address/"+R},async pledge(){if(this.poolUSDT==0){d({message:this.$t("message.pledgePoolNoAmount")}).then(()=>{});return}if(this.needApprove){l.approval(T,$,F).then(e=>{this.needApprove=!1});return}l.pledge(this.menu,this.rate).then(e=>{d({message:e.message}).then(()=>{})}).catch(e=>{console.error(e)})},take(){this.canTakeAmount!=0&&l.take(this.rate).then(e=>d({message:e.message}).then(()=>{}))},transfer(){this.transferAddress!=""&&l.transfer(this.transferAddress,this.rate).then(e=>d({message:e.message}).then(()=>{}))},init(){l.balanceOfPledgeAmount(this.rate).then(e=>{this.poolUSDT=e}),l.pledgeCheck(this.menu).then(e=>{e==0?this.needApprove=!1:this.needApprove=!0}),l.getNeedAmount().then(e=>{this.needAmount=e}),l.getUserPledge(this.rate).then(e=>{if(e&&e.createAt>0){var s=e.lastTakeAt==0?e.createAt:e.lastTakeAt,_=Math.trunc((Math.round(new Date().getTime()/1e3)-Number(s))/60),i=c(e.releaseAmount)*_;i>=c(e.leftAmount)&&(i=e.leftAmount),this.leftTakeAmount=c(e.leftAmount),this.canTakeAmount=c(i)}})}},mounted(){this.init()}},V={class:"eco-content"},H={class:"background"},z={class:"boydey"},I={class:"number"},K={class:"numberText"},O={class:"numberRight"},j={style:{color:"#ff8063"}},q={class:"menu"},G=["value","onClick"],J={style:{"font-size":"12px"}},Q={class:"numberButton"},W={class:"numberText"},X=["placeholder"],Y={class:"numberText"},Z={style:{color:"#ff8063"}},ee={class:"numberRight"},te={style:{color:"black"}},se={style:{color:"#ff8063"}},ne={class:"foot"},oe={class:"footText"},ae=["innerHTML"];function re(e,s,_,i,r,a){return u(),h("div",V,[t("div",H,[t("div",z,[t("div",I,[t("div",K,[t("div",null,o(e.$t("message.textEcology_left1"))+"：",1),t("div",O,[t("div",j,o(`${Number(r.poolUSDT).toFixed(2)}`),1),t("div",{class:"button",onClick:s[0]||(s[0]=n=>a.check())},o(e.$t("message.textEcology_check")),1)])]),t("div",q,[(u(!0),h(x,null,E(r.actions,(n,v)=>(u(),h("div",{key:v,value:n.value,class:C(`${this.menu===n.key?"menu1 menu2":"menu1"}`),onClick:p=>a.menuChange(n.key,n.value)},o(n.value),11,G))),128))]),t("span",J," ≈ "+o(r.needAmount*this.menu)+" DragonKing",1),t("div",Q,[t("div",{class:"but_h",onClick:s[1]||(s[1]=(...n)=>a.pledge&&a.pledge(...n))},o(r.needApprove?e.$t("message.approve"):e.$t("message.textEcology_left2")),1)]),t("div",W,[U(t("input",{class:"input","onUpdate:modelValue":s[2]||(s[2]=n=>r.transferAddress=n),type:"text",placeholder:`${e.$t("message.textEcology_left4")}`},null,8,X),[[D,r.transferAddress]]),t("div",{class:"transferBut",onClick:s[3]||(s[3]=(...n)=>a.transfer&&a.transfer(...n))},o(e.$t("message.textEcology_ctransfer")),1)]),t("div",Y,[t("div",null,[N(o(e.$t("message.textEcology_left3"))+"： ",1),t("span",Z,o(this.leftTakeAmount)+" U",1)]),t("div",ee,[t("div",te,o(e.$t("message.textEcology_left5"))+"：",1),t("div",se,o(`${Number(this.canTakeAmount).toFixed(2)}`)+" U",1),t("div",{class:"buttonLing",onClick:s[4]||(s[4]=(...n)=>a.take&&a.take(...n))},o(e.$t("message.textEcology_down")),1)])])])])]),t("div",ne,[t("div",oe,[t("div",{innerHTML:e.$t("message.textEcology")},null,8,ae)])])])}const le=y(P,[["render",re],["__scopeId","data-v-45e359df"]]);const A=[{key:1,value:"500U"},{key:2,value:"1000U"}],ie={data(){return{actions:A,menu:A[0].key,value:A[0].value,poolUSDT:0,needApprove:!0,needAmount:0,rate:65,canTakeAmount:0,leftTakeAmount:0,transferAddress:""}},components:{Tab:b},computed:{},methods:{menuChange(e,s){this.menu=e,this.value=s,this.init()},check(){window.location.href="https://bscscan.com/address/"+B},async pledge(){if(this.poolUSDT==0){d({message:this.$t("message.pledgePoolNoAmount")}).then(()=>{});return}if(this.needApprove){l.approval(T,$,L((this.needAmount*this.menu).toString())).then(e=>{this.needApprove=!1});return}l.pledge(this.menu,this.rate).then(e=>{d({message:e.message}).then(()=>{})}).catch(e=>{console.error(e)})},take(){this.canTakeAmount!=0&&l.take().then(e=>d({message:e.message}).then(()=>{}))},transfer(){this.transferAddress!=""&&l.transfer(this.transferAddress,this.rate).then(e=>d({message:e.message}).then(()=>{}))},init(){l.balanceOfPledgeAmount(this.rate).then(e=>{this.poolUSDT=e}),l.pledgeCheck(this.menu).then(e=>{e==0?this.needApprove=!1:this.needApprove=!0}),l.getNeedAmount().then(e=>{this.needAmount=e}),l.getUserPledge(this.rate).then(e=>{if(e&&e.createAt>0){var s=e.lastTakeAt==0?e.createAt:e.lastTakeAt,_=Math.trunc((Math.round(new Date().getTime()/1e3)-Number(s))/60),i=c(e.orgAmount)*_;i>=c(e.leftAmount)&&(i=e.leftAmount),this.leftTakeAmount=c(e.leftAmount),this.canTakeAmount=c(i)}})}},mounted(){this.init()}},de={class:""},ce={class:"eco-content"},ue={class:"background"},he={class:"boydey"},_e={class:"number"},me={class:"numberText"},ve={class:"numberRight"},ge={style:{color:"#ff8063"}},pe={class:"menu"},fe=["value","onClick"],ke={class:"numberButton"},Ae={style:{"font-size":"12px"}},be={class:"numberText"},ye=["placeholder"],Te={class:"numberText"},$e={style:{color:"#ff8063"}},xe={class:"numberRight"},Ee={style:{color:"black"}},Ce={style:{color:"#ff8063"}},Ue={class:"foot"},De={class:"footText"},Ne=["innerHTML"];function we(e,s,_,i,r,a){return u(),h("div",de,[t("div",ce,[t("div",ue,[t("div",he,[t("div",_e,[t("div",me,[t("div",null,o(e.$t("message.textEcology_left1"))+"：",1),t("div",ve,[t("div",ge,o(`${Number(r.poolUSDT).toFixed(2)}`),1),t("div",{class:"button",onClick:s[0]||(s[0]=n=>a.check())},o(e.$t("message.textEcology_check")),1)])]),t("div",pe,[(u(!0),h(x,null,E(r.actions,(n,v)=>(u(),h("div",{key:v,value:n.value,class:C(`${this.menu===n.key?"menu1 menu2":"menu1"}`),onClick:p=>a.menuChange(n.key,n.value)},o(n.value),11,fe))),128))]),t("div",ke,[t("span",Ae," ≈ "+o(r.needAmount*this.menu)+" DragonKing",1),t("div",{class:"but_h",onClick:s[1]||(s[1]=(...n)=>a.pledge&&a.pledge(...n))},o(r.needApprove?e.$t("message.approve"):e.$t("message.textEcology_left2")),1)]),t("div",be,[U(t("input",{class:"input","onUpdate:modelValue":s[2]||(s[2]=n=>r.transferAddress=n),type:"text",placeholder:`${e.$t("message.textEcology_left4")}`},null,8,ye),[[D,r.transferAddress]]),t("div",{class:"transferBut",onClick:s[3]||(s[3]=(...n)=>a.transfer&&a.transfer(...n))},o(e.$t("message.textEcology_ctransfer")),1)]),t("div",Te,[t("div",null,[N(o(e.$t("message.textEcology_left3"))+"： ",1),t("span",$e,o(this.leftTakeAmount)+" U",1)]),t("div",xe,[t("div",Ee,o(e.$t("message.textEcology_left5"))+"：",1),t("div",Ce,o(`${Number(this.canTakeAmount).toFixed(2)}`)+" U",1),t("div",{class:"buttonLing",onClick:s[4]||(s[4]=(...n)=>a.take&&a.take(...n))},o(e.$t("message.textEcology_down")),1)])])])])]),t("div",Ue,[t("div",De,[t("div",{innerHTML:e.$t("message.textEcology")},null,8,Ne)])])])])}const Se=y(ie,[["render",we],["__scopeId","data-v-69a9e9cd"]]);const Me={data(){return{active:0}},components:{Tab:b,Tab1:le,Tab2:Se}},Re={class:"box-nft"},Fe={class:"content"},Be={class:"background"},Le={class:"boydey"},Pe={class:"logo"},Ve={class:"number"};function He(e,s,_,i,r,a){const n=g("Tab"),v=g("Tab1"),p=g("van-tab"),w=g("Tab2"),S=g("van-tabs");return u(),h("div",Re,[m(n),t("div",Fe,[t("div",Be,[t("div",Le,[t("div",Pe,o(e.$t("message.textEcology_title")),1),t("div",Ve,[m(S,{active:r.active,"onUpdate:active":s[0]||(s[0]=M=>r.active=M),color:"#f6b10b",type:"card"},{default:f(()=>[m(p,{title:e.$t("message.ecoTab1")},{default:f(()=>[m(v)]),_:1},8,["title"]),m(p,{title:e.$t("message.ecoTab2")},{default:f(()=>[m(w)]),_:1},8,["title"])]),_:1},8,["active"])])])])])])}const Oe=y(Me,[["render",He],["__scopeId","data-v-4b125e49"]]);export{Oe as default};
