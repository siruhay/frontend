import{_ as f,c as x,w as t,r as h,o as d,a as l,V as w,b as n,e as u,d as i,f as e,U as b,g,ak as m,an as v,K as y,Q as k,al as r}from"./app-iozbaKy5.js";const U={name:"system-role-edit"},C={class:"py-0"},B={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$={class:"text-caption font-weight-bold"},N={class:"text-caption"};function D(F,s,T,z,E,K){const c=h("form-edit");return d(),x(c,{"with-helpdesk":""},{default:t(({record:o,theme:p})=>[l(i,null,{default:t(()=>[l(w,{dense:""},{default:t(()=>[l(n,{cols:"12"},{default:t(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":a=>o.page_name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"12"},{default:t(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":a=>o.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",C,[l(g,null,{default:t(()=>[l(b,{color:`${p}`,size:"small",variant:"flat"},{default:t(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:t(()=>[e("table",B,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(d(!0),m(y,null,v(o.permissions,(a,_)=>(d(),m("tr",{key:_},[e("td",null,[l(k,{modelValue:a.value,"onUpdate:modelValue":V=>a.value=V},null,8,["modelValue","onUpdate:modelValue"])]),e("td",$,r(a.name),1),e("td",N,r(a.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const P=f(U,[["render",D]]);export{P as default};
