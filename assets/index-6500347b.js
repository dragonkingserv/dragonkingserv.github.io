import{T as u,E as t,B as r,D as h}from"./tab-700796f9.js";import{_ as m,s as f,a as v,o as d,c,d as g,b as s,n as p,t as o,F as b,i as y}from"./index-14c4359b.js";const T={data(){return{value:0,menu:1,leftTotal:0,myBalance:0,children:[],idoFlag:!1}},components:{Tab:u},computed:{},methods:{onChange(e){f({message:`当前值：${e}`,wordBreak:"break-all"}),console.log(e),this.value=e},menuChange(e){this.menu=e},async ido(){if(this.idoFlag){t.ido(1).then(e=>{alert("success")});return}t.usdtApproval(new r(100).mul(new r(10).pow(18))).then(e=>{this.idoFlag=!0}).catch(e=>{this.idoFlag=!1})},formatAddress(e){return e}},async mounted(){t.leftIDOTotal().then(e=>this.leftTotal=e),t.balance(h).then(e=>this.myBalance=e),t.getMyDirectChildren().then(e=>this.children=e),t.idoCheck().then(e=>{e&&(this.idoFlag=!0)})},setup(){}},k={class:"box-ido"},C={class:"content"},B={class:"background"},F={class:"boydey"},x={class:"menu"},D={class:"number"},w={class:"numberText"},A={style:{color:"#ff8063"}},N={class:"numberText"},$={style:{color:"#ff8063"}},E={class:"foot"},S={class:"background"},I={class:"boydey"},K={class:"footText"};function O(e,n,R,U,i,a){const _=v("Tab");return d(),c("div",k,[g(_),s("div",C,[s("div",B,[s("div",F,[s("div",x,[s("div",{class:p(`${this.menu===1?"menu1 menu2":"menu1"}`),onClick:n[0]||(n[0]=l=>a.menuChange(1))},"1U = 1000000 DK",2)]),s("div",D,[s("div",w,[s("div",null,o(e.$t("message.leftTotal"))+"：",1),s("div",A,o(`${this.leftTotal}`),1)]),s("div",N,[s("div",null,o(e.$t("message.balance"))+"：",1),s("div",$,o(`${Number(i.myBalance).toFixed(2)}`),1)])]),s("div",{class:"but",onClick:n[1]||(n[1]=(...l)=>a.ido&&a.ido(...l))},o(i.idoFlag?"100U":"approve"),1)])]),s("div",E,[s("div",S,[s("div",I,[s("div",K,[s("ol",null,[(d(!0),c(b,null,y(i.children,l=>(d(),c("li",{key:e.k,class:"reflection"},[s("span",null,o(a.formatAddress(l)),1)]))),128))])])])])])])])}const L=m(T,[["render",O],["__scopeId","data-v-028dea40"]]);export{L as default};
