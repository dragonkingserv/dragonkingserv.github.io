import{T as _,E as d,D as m}from"./tab-5df051b5.js";import{_ as u,s as h,a as f,o as l,c as i,d as v,b as e,n as b,t,F as y,i as T}from"./index-bb3fa0f9.js";const p={data(){return{value:0,menu:1,leftTotal:0,myBalance:0,children:[]}},components:{Tab:_},computed:{},methods:{onChange(s){h({message:`当前值：${s}`,wordBreak:"break-all"}),console.log(s),this.value=s},menuChange(s){this.menu=s},async ido(){d.ido(this.menu).then(s=>{alert("success")})},formatAddress(s){return s}},async mounted(){d.leftIDOTotal().then(s=>this.leftTotal=s),d.balance(m).then(s=>this.myBalance=s),d.getMyDirectChildren().then(s=>this.children=s)},setup(){}},g={class:"box-ido"},k={class:"content"},C={class:"background"},x={class:"boydey"},D={class:"menu"},B={class:"number"},$={class:"numberText"},A={style:{color:"#ff8063"}},E={class:"numberText"},N={style:{color:"#ff8063"}},F={class:"foot"},S={class:"background"},w={class:"boydey"},I={class:"footText"};function K(s,o,O,R,c,n){const r=f("Tab");return l(),i("div",g,[v(r),e("div",k,[e("div",C,[e("div",x,[e("div",D,[e("div",{class:b(`${this.menu===1?"menu1 menu2":"menu1"}`),onClick:o[0]||(o[0]=a=>n.menuChange(1))},"1U = 1000000 DK",2)]),e("div",B,[e("div",$,[e("div",null,t(s.$t("message.leftTotal"))+"：",1),e("div",A,t(`${this.leftTotal}`),1)]),e("div",E,[e("div",null,t(s.$t("message.balance"))+"：",1),e("div",N,t(`${Number(c.myBalance).toFixed(2)}`),1)])]),e("div",{class:"but",onClick:o[1]||(o[1]=(...a)=>n.ido&&n.ido(...a))},"100U")])]),e("div",F,[e("div",S,[e("div",w,[e("div",I,[e("ol",null,[(l(!0),i(y,null,T(c.children,a=>(l(),i("li",{key:s.k,class:"reflection"},[e("span",null,t(n.formatAddress(a)),1)]))),128))])])])])])])])}const z=u(p,[["render",K],["__scopeId","data-v-5f0567d5"]]);export{z as default};
