import{_ as f,b as h,w as t,d as x,o as d,e as l,V as g,f as n,g as u,h as i,S as e,ak as w,T as b,Y as m,ar as v,H as y,ag as k,Z as r}from"./App-B3jEyrGB.js";const C={name:"system-role-edit"},U={class:"py-0"},B={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$={class:"text-caption font-weight-bold"},N={class:"text-caption"};function T(D,s,F,S,z,E){const p=x("form-edit");return d(),h(p,{"with-helpdesk":""},{default:t(({record:o,theme:c})=>[l(i,null,{default:t(()=>[l(g,{dense:""},{default:t(()=>[l(n,{cols:"12"},{default:t(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":a=>o.page_name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,{cols:"12"},{default:t(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":a=>o.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",U,[l(b,null,{default:t(()=>[l(w,{color:`${c}`,size:"small",variant:"flat"},{default:t(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:t(()=>[e("table",B,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(d(!0),m(y,null,v(o.permissions,(a,_)=>(d(),m("tr",{key:_},[e("td",null,[l(k,{modelValue:a.value,"onUpdate:modelValue":V=>a.value=V},null,8,["modelValue","onUpdate:modelValue"])]),e("td",$,r(a.name),1),e("td",N,r(a.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const L=f(C,[["render",T]]);export{L as default};