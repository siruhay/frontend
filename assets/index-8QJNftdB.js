import{s as O,aD as J,az as pe,H as E,a,p as W,aE as se,aF as ye,aG as q,aH as oe,I as F,P as ue,Q as x,T as ie,aI as _e,av as Ve,aJ as we,aK as xe,aL as Ce,aM as Se,aN as Te,aO as Ae,aP as Pe,aQ as Ie,aR as Be,aS as $e,aT as Ue,aU as De,aV as be,ay as Le,aW as je,aX as Fe,aY as Oe,aZ as Ee,a_ as He,a$ as Ne,y as G,ac as Re,ad as Me,b0 as ze,b1 as Ke,d as w,b2 as Ge,K,l as We,b3 as Qe,A as Xe,t as re,h as y,b4 as ge,W as Ye,b5 as qe,b6 as Je,b7 as Ze,x as ea,b8 as aa,b9 as I,ba as ta,bb as ce,ah as la,bc as ke,bd as M,be as na,_ as ia,c as B,w as i,r as me,o as m,f as u,S as sa,al as L,g as H,aq as Y,V as ne,b as $,e as N,j as fe,au as R,i as h,ak as C,am as j,an as ve,ar as oa,aj as da}from"./app-FUBSdQkH.js";import{V as ua}from"./VOtpInput-sVS3wQC3.js";const ra=O()({name:"VCardActions",props:J(),setup(e,t){let{slots:o}=t;return pe({VBtn:{slim:!0,variant:"text"}}),E(()=>{var n;return a("div",{class:["v-card-actions",e.class],style:e.style},[(n=o.default)==null?void 0:n.call(o)])}),{}}}),ca=W({opacity:[Number,String],...J(),...se()},"VCardSubtitle"),ma=O()({name:"VCardSubtitle",props:ca(),setup(e,t){let{slots:o}=t;return E(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},o)),{}}}),fa=ye("v-card-title"),va=W({appendAvatar:String,appendIcon:q,prependAvatar:String,prependIcon:q,subtitle:[String,Number],title:[String,Number],...J(),...oe()},"VCardItem"),pa=O()({name:"VCardItem",props:va(),setup(e,t){let{slots:o}=t;return E(()=>{var s;const n=!!(e.prependAvatar||e.prependIcon),b=!!(n||o.prepend),c=!!(e.appendAvatar||e.appendIcon),p=!!(c||o.append),_=!!(e.title!=null||o.title),f=!!(e.subtitle!=null||o.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[b&&a("div",{key:"prepend",class:"v-card-item__prepend"},[o.prepend?a(ie,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},o.prepend):a(F,null,[e.prependAvatar&&a(ue,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(x,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[_&&a(fa,{key:"title"},{default:()=>{var r;return[((r=o.title)==null?void 0:r.call(o))??e.title]}}),f&&a(ma,{key:"subtitle"},{default:()=>{var r;return[((r=o.subtitle)==null?void 0:r.call(o))??e.subtitle]}}),(s=o.default)==null?void 0:s.call(o)]),p&&a("div",{key:"append",class:"v-card-item__append"},[o.append?a(ie,{key:"append-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},o.append):a(F,null,[e.appendIcon&&a(x,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(ue,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),ba=W({appendAvatar:String,appendIcon:q,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:q,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],..._e(),...J(),...oe(),...Ve(),...we(),...xe(),...Ce(),...Se(),...Te(),...Ae(),...se(),...Pe(),...Ie({variant:"elevated"})},"VCard"),ga=O()({name:"VCard",directives:{Ripple:Be},props:ba(),setup(e,t){let{attrs:o,slots:n}=t;const{themeClasses:b}=$e(e),{borderClasses:c}=Ue(e),{colorClasses:p,colorStyles:_,variantClasses:f}=De(e),{densityClasses:s}=be(e),{dimensionStyles:r}=Le(e),{elevationClasses:v}=je(e),{loaderClasses:l}=Fe(e),{locationStyles:d}=Oe(e),{positionClasses:V}=Ee(e),{roundedClasses:g}=He(e),S=Ne(e,o),Z=G(()=>e.link!==!1&&S.isLink.value),k=G(()=>!e.disabled&&e.link!==!1&&(e.link||S.isClickable.value));return E(()=>{const T=Z.value?"a":e.tag,U=!!(n.title||e.title!=null),D=!!(n.subtitle||e.subtitle!=null),Q=U||D,A=!!(n.append||e.appendAvatar||e.appendIcon),ee=!!(n.prepend||e.prependAvatar||e.prependIcon),ae=!!(n.image||e.image),P=Q||ee||A,te=!!(n.text||e.text!=null);return Re(a(T,K({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},b.value,c.value,p.value,s.value,v.value,l.value,V.value,g.value,f.value,e.class],style:[_.value,r.value,d.value,e.style],onClick:k.value&&S.navigate,tabindex:e.disabled?-1:void 0},S.linkProps),{default:()=>{var le;return[ae&&a("div",{key:"image",class:"v-card__image"},[n.image?a(ie,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):a(ze,{key:"image-img",cover:!0,src:e.image},null)]),a(Ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),P&&a(pa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),te&&a(w,{key:"text"},{default:()=>{var X;return[((X=n.text)==null?void 0:X.call(n))??e.text]}}),(le=n.default)==null?void 0:le.call(n),n.actions&&a(ra,null,{default:n.actions}),Ge(k.value,"v-card")]}}),[[Me("ripple"),k.value&&e.ripple]])}),{}}}),ka=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...We(Qe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),z=O()({name:"VTab",props:ka(),setup(e,t){let{slots:o,attrs:n}=t;const{textColorClasses:b,textColorStyles:c}=Xe(e,"sliderColor"),p=re(),_=re(),f=G(()=>e.direction==="horizontal"),s=G(()=>{var v,l;return((l=(v=p.value)==null?void 0:v.group)==null?void 0:l.isSelected.value)??!1});function r(v){var d,V;let{value:l}=v;if(l){const g=(V=(d=p.value)==null?void 0:d.$el.parentElement)==null?void 0:V.querySelector(".v-tab--selected .v-tab__slider"),S=_.value;if(!g||!S)return;const Z=getComputedStyle(g).color,k=g.getBoundingClientRect(),T=S.getBoundingClientRect(),U=f.value?"x":"y",D=f.value?"X":"Y",Q=f.value?"right":"bottom",A=f.value?"width":"height",ee=k[U],ae=T[U],P=ee>ae?k[Q]-T[Q]:k[U]-T[U],te=Math.sign(P)>0?f.value?"right":"bottom":Math.sign(P)<0?f.value?"left":"top":"center",X=(Math.abs(P)+(Math.sign(P)<0?k[A]:T[A]))/Math.max(k[A],T[A])||0,he=k[A]/T[A]||0,de=1.5;qe(S,{backgroundColor:[Z,"currentcolor"],transform:[`translate${D}(${P}px) scale${D}(${he})`,`translate${D}(${P/de}px) scale${D}(${(X-1)/de+1})`,"none"],transformOrigin:Array(3).fill(te)},{duration:225,easing:Je})}}return E(()=>{const v=y.filterProps(e);return a(y,K({symbol:ge,ref:p,class:["v-tab",e.class],style:e.style,tabindex:s.value?0:-1,role:"tab","aria-selected":String(s.value),active:!1},v,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":r}),{...o,default:()=>{var l;return a(F,null,[((l=o.default)==null?void 0:l.call(o))??e.text,!e.hideSlider&&a("div",{ref:_,class:["v-tab__slider",b.value],style:c.value},null)])}})}),Ye({},p)}});function ha(e){return e?e.map(t=>na(t)?t:{text:t,value:t}):[]}const ya=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ze({mandatory:"force",selectedClass:"v-tab-item--selected"}),...oe(),...se()},"VTabs"),_a=O()({name:"VTabs",props:ya(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:o,slots:n}=t;const b=ea(e,"modelValue"),c=G(()=>ha(e.items)),{densityClasses:p}=be(e),{backgroundColorClasses:_,backgroundColorStyles:f}=aa(I(e,"bgColor")),{scopeId:s}=ta();return pe({VTab:{color:I(e,"color"),direction:I(e,"direction"),stacked:I(e,"stacked"),fixed:I(e,"fixedTabs"),sliderColor:I(e,"sliderColor"),hideSlider:I(e,"hideSlider")}}),E(()=>{const r=ce.filterProps(e),v=!!(n.window||e.items.length>0);return a(F,null,[a(ce,K(r,{modelValue:b.value,"onUpdate:modelValue":l=>b.value=l,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},p.value,_.value,e.class],style:[{"--v-tabs-height":la(e.height)},f.value,e.style],role:"tablist",symbol:ge},s,o),{default:()=>{var l;return[((l=n.default)==null?void 0:l.call(n))??c.value.map(d=>{var V;return((V=n.tab)==null?void 0:V.call(n,{item:d}))??a(z,K(d,{key:d.text,value:d.value}),{default:n[`tab.${d.value}`]?()=>{var g;return(g=n[`tab.${d.value}`])==null?void 0:g.call(n,{item:d})}:void 0})})]}}),v&&a(ke,K({modelValue:b.value,"onUpdate:modelValue":l=>b.value=l,key:"tabs-window"},s),{default:()=>{var l;return[c.value.map(d=>{var V;return((V=n.item)==null?void 0:V.call(n,{item:d}))??a(M,{value:d.value},{default:()=>{var g;return(g=n[`item.${d.value}`])==null?void 0:g.call(n,{item:d})}})}),(l=n.window)==null?void 0:l.call(n)]}})])}),{}}}),Va={name:"account-setting",computed:{tabTitle:function(){switch(this.tabSelected){case"password":return"Katasandi";case"twofactor":return"Dua Faktor Otentikasi";case"sessions":return"Sesi Browser";default:return"Pengguna"}}},data:()=>({tabSelected:"account",svgQrCode:null,visible:!1}),methods:{confirmTwoFactorAuthentication:function(e){this.$http("account/api/setting/confirmed-factor-authentication",{method:"POST",params:{code:e.otp_two_factor}}).then(()=>{e.confirmed_two_factor=!0}).catch(()=>{e.otp_two_factor=null})},disableTwoFactorAuthentication:function(e){this.$http("account/api/setting/two-factor-authentication",{method:"DELETE"}).then(()=>{e.svg_two_factor=null,e.enabled_two_factor=!1,e.confirmed_two_factor=!1,e.url_two_factor=null})},enableTwoFactorAuthentication:function(e){this.$http("account/api/setting/two-factor-authentication",{method:"POST"}).then(({recovery:t,svg:o,url:n})=>{e.svg_two_factor=o,e.enabled_two_factor=!0,e.recovery_code_two_factor=t,e.url_two_factor=n})},logoutOtherDevices:function(e,t){typeof e=="function"&&e(),this.$http("account/api/setting/logout-other-devices",{method:"POST",params:{password:t.password}}).then(({sessions:o})=>{t.sessions=o})},updateHighlight:function(e,t){t.highlight=e},updatePassword:function(e){this.$http("account/api/setting/update-password",{method:"POST",params:{current_password:e.current_password,password:e.password,password_confirmation:e.password_confirmation}})},updateProfile:function(e){this.$http("account/api/setting/update-profile",{method:"POST",params:e}).then(({auth:t})=>{this.auth=t,this.$storage.setItem("auth",t),this.theme="theme"in this.auth?this.auth.theme:"teal"})},updateTheme:function(e,t){t.theme=e}}},wa={class:"d-flex align-center my-4"},xa={class:"font-weight-medium text-caption text-uppercase"},Ca={key:0,class:"text-grey-darken-1"},Sa={key:1,class:"text-grey-darken-1"},Ta=["innerHTML"],Aa={key:2,class:"text-grey-darken-1"},Pa={class:"d-flex mt-4 justify-center bg-yellow-lighten-5 py-4 rounded-lg"},Ia={class:"text-center"},Ba={class:"d-flex align-center w-100 pb-2"},$a={class:"d-block flex-grow-1 mx-2"},Ua={class:"text-caption font-weight-bold"},Da={class:"text-caption",style:{"font-size":"10px !important"}},La={key:0,class:"text-green"},ja={key:1},Fa={class:"d-flex px-6 pb-6"};function Oa(e,t,o,n,b,c){const p=me("page-paper"),_=me("page-blank");return m(),B(_,{"page-name":"account-setting","page-key":"setting",title:"setting","show-sidenav":""},{default:i(({combos:{colors:f},record:s,theme:r,store:v})=>[a(p,null,{default:i(()=>[u("div",wa,[a(sa,{color:`${r}`,class:"mx-auto",size:"small",variant:"flat"},{default:i(()=>[u("div",xa,L(c.tabTitle),1)]),_:2},1032,["color"])]),a(_a,{"align-tabs":"center",color:"primary",modelValue:e.tabSelected,"onUpdate:modelValue":t[0]||(t[0]=l=>e.tabSelected=l),stacked:""},{default:i(()=>[a(z,{value:"account"},{default:i(()=>[a(x,{icon:"person"})]),_:1}),a(z,{value:"password"},{default:i(()=>[a(x,{icon:"lock"})]),_:1}),a(z,{value:"twofactor"},{default:i(()=>[a(x,{icon:"encrypted"})]),_:1}),a(z,{value:"sessions"},{default:i(()=>[a(x,{icon:"settings_cinematic_blur"})]),_:1})]),_:1},8,["modelValue"]),a(H),a(ke,{modelValue:e.tabSelected,"onUpdate:modelValue":t[2]||(t[2]=l=>e.tabSelected=l)},{default:i(()=>[a(M,{value:"account"},{default:i(()=>[a(Y,{class:"mx-auto","max-width":"400"},{default:i(()=>[a(w,null,{default:i(()=>[a(ne,null,{default:i(()=>[a($,{cols:"12"},{default:i(()=>[a(N,{label:"Nama Pengguna",modelValue:s.username,"onUpdate:modelValue":l=>s.username=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a($,{cols:"12"},{default:i(()=>[a(fe,{items:f,label:"Thema",modelValue:s.theme,"onUpdate:modelValue":[l=>s.theme=l,l=>c.updateTheme(l,v)],"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a($,{cols:"12"},{default:i(()=>[a(fe,{items:f,label:"Highlight",modelValue:s.highlight,"onUpdate:modelValue":[l=>s.highlight=l,l=>c.updateHighlight(l,v)],"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(H),a(w,{class:"d-flex"},{default:i(()=>[a(R),a(y,{color:r,variant:"flat",onClick:l=>c.updateProfile(s)},{default:i(()=>t[3]||(t[3]=[h("update profile")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(M,{value:"password"},{default:i(()=>[a(Y,{class:"mx-auto","max-width":"400"},{default:i(()=>[a(w,null,{default:i(()=>[a(ne,null,{default:i(()=>[a($,{cols:"12"},{default:i(()=>[a(N,{label:"Saat ini",modelValue:s.current_password,"onUpdate:modelValue":l=>s.current_password=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a($,{cols:"12"},{default:i(()=>[a(N,{label:"Sandi Baru",modelValue:s.password,"onUpdate:modelValue":l=>s.password=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a($,{cols:"12"},{default:i(()=>[a(N,{label:"Konfirmasi",modelValue:s.password_confirmation,"onUpdate:modelValue":l=>s.password_confirmation=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(H),a(w,{class:"d-flex"},{default:i(()=>[a(R),a(y,{color:r,variant:"flat",onClick:l=>c.updatePassword(s)},{default:i(()=>t[4]||(t[4]=[h("update katasandi")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(M,{value:"twofactor"},{default:i(()=>[a(Y,{class:"mx-auto","max-width":"400"},{default:i(()=>[a(w,null,{default:i(()=>[!s.enabled_two_factor&&!s.confirmed_two_factor?(m(),C("div",Ca,t[5]||(t[5]=[u("p",{class:"text-justify"}," Anda belum mengaktifkan fitur otentifikasi dua langkah ",-1),u("p",{class:"mt-3 text-justify"}," Saat fitur otentifikasi dua langkah di aktifkan, Anda akan di minta untuk scan kode QR dan meng-input token keamanan. Anda akan mendapatkan token ini melalui aplikasi Google Authenticator di handphone. ",-1)]))):j("",!0),s.enabled_two_factor&&!s.confirmed_two_factor?(m(),C("div",Sa,[t[6]||(t[6]=u("p",{class:"text-justify"}," Silahkan scan QR code di bawah menggunakan aplikasi Google Authenticator di handphone Anda. ",-1)),u("div",{class:"d-flex align-center justify-center py-4",innerHTML:s.svg_two_factor},null,8,Ta),t[7]||(t[7]=u("p",{class:"text-justify"}," Silahkan masukan token dari aplikasi Google Authenticator untuk konfirmasi aktivasi fitur ini. ",-1)),t[8]||(t[8]=u("div",{class:"text-overline text-center"}," token konfirmasi ",-1)),a(ua,{label:"Konfirmasi",length:"6",modelValue:s.otp_two_factor,"onUpdate:modelValue":l=>s.otp_two_factor=l},null,8,["modelValue","onUpdate:modelValue"])])):j("",!0),s.enabled_two_factor&&s.confirmed_two_factor?(m(),C("div",Aa,[t[9]||(t[9]=u("p",null," Fitur otentifikasi dua langkah sekarang telah aktif. ",-1)),t[10]||(t[10]=u("p",{class:"mt-3 text-justify"}," Simpan kode pemulihan dibawah ini pada tempat yang aman. Kode ini dapat di gunakan untuk memulihkan kembali akses dua langkah otentifikasi akun Anda jika perangkat hilang. ",-1)),u("div",Pa,[u("code",Ia,[(m(!0),C(F,null,ve(s.recovery_code_two_factor,(l,d)=>(m(),C("p",{key:d},L(l),1))),128))])])])):j("",!0)]),_:2},1024),a(H),a(w,{class:"d-flex"},{default:i(()=>[a(R),s.enabled_two_factor&&!s.confirmed_two_factor?(m(),B(y,{key:0,color:r,variant:"flat",onClick:l=>c.confirmTwoFactorAuthentication(s)},{default:i(()=>t[11]||(t[11]=[h("konfirmasi")])),_:2},1032,["color","onClick"])):j("",!0),s.enabled_two_factor?(m(),B(y,{key:1,color:"deep-orange",class:"ml-2",variant:"flat",onClick:l=>c.disableTwoFactorAuthentication(s)},{default:i(()=>t[12]||(t[12]=[h("hapus")])),_:2},1032,["onClick"])):j("",!0),s.enabled_two_factor?j("",!0):(m(),B(y,{key:2,color:r,variant:"flat",onClick:l=>c.enableTwoFactorAuthentication(s)},{default:i(()=>t[13]||(t[13]=[h("Aktifkan Fitur")])),_:2},1032,["color","onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024),a(M,{value:"sessions"},{default:i(()=>[a(Y,{class:"mx-auto","max-width":"400"},{default:i(()=>[a(w,null,{default:i(()=>[t[18]||(t[18]=u("div",{class:"text-grey-darken-1 mb-4"},[u("p",null," Jika diperlukan, Anda dapat keluar dari semua sesi di semua device yang pernah terhubung. "),u("p",{class:"mt-3"}," list dibawah ini adalah beberapa sesi terbaru Anda. Daftar ini mungkin tidak lengkap, jika Anda merasa bahwa akun Anda telah disusupi. Anda juga harus meng-update Katasandi. ")],-1)),(m(!0),C(F,null,ve(s.sessions,(l,d)=>(m(),C("div",{key:d,class:da([{"mt-2":d>0},"d-block text-grey-darken-1"])},[u("div",Ba,[l.agent.is_mobile?(m(),B(x,{key:0},{default:i(()=>t[14]||(t[14]=[h("phone_iphone")])),_:1})):l.agent.is_tablet?(m(),B(x,{key:1},{default:i(()=>t[15]||(t[15]=[h("tablet_mac")])),_:1})):(m(),B(x,{key:2},{default:i(()=>t[16]||(t[16]=[h("computer")])),_:1})),u("div",$a,[u("div",Ua,L(l.agent.platform)+" - "+L(l.agent.browser),1),u("div",Da,[h(" IP: "+L(l.ip_address)+", ",1),l.is_current_device?(m(),C("span",La,"This device")):(m(),C("span",ja,"Last activity: "+L(l.last_active),1))])]),a(y,{color:r,density:"compact",variant:"flat",rounded:"lg",icon:""},{default:i(()=>[a(x,{size:"small"},{default:i(()=>t[17]||(t[17]=[h("map")])),_:1})]),_:2},1032,["color"])]),a(H)],2))),128))]),_:2},1024),a(w,{class:"d-flex pt-1"},{default:i(()=>[a(R),a(y,{color:r,variant:"flat"},{default:i(()=>[t[20]||(t[20]=h(" Hapus Sesi Lainnya ")),a(oa,{activator:"parent","max-width":"340"},{default:i(({isActive:l})=>[a(ga,{"prepend-icon":"delete",title:"Hapus Sesi Lainnya?"},{default:i(()=>[a(w,null,{default:i(()=>[t[19]||(t[19]=u("p",{class:"text-caption text-justify mb-4"}," Untuk menghapus sesi browser yang lain, silahkan masukan katasandi Anda pada input di bawah ini. ",-1)),a(ne,null,{default:i(()=>[a($,{cols:"12"},{default:i(()=>[a(N,{"append-inner-icon":e.visible?"visibility":"visibility_off",type:e.visible?"text":"password",label:"Katasandi",placeholder:"Masukan Katasandi",modelValue:s.password,"onUpdate:modelValue":d=>s.password=d,"hide-details":"","onClick:appendInner":t[1]||(t[1]=d=>e.visible=!e.visible)},null,8,["append-inner-icon","type","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),u("div",Fa,[a(R),a(y,{color:r,text:"Batal",onClick:d=>l.value=!1},null,8,["color","onClick"]),a(y,{color:"deep-orange",class:"ml-2",text:"Hapus",variant:"flat",onClick:d=>c.logoutOtherDevices(()=>l.value=!1,s)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:1})}const Na=ia(Va,[["render",Oa]]);export{Na as default};
