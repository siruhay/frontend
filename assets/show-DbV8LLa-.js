import{_ as f,b as h,w as a,d as V,o as n,e as l,V as w,f as d,h as u,g as i,i as e,X as x,j as g,ao as r,ar as b,M as v,S as y,ap as m}from"./App-y7vJu5PU.js";const k={name:"system-role-show"},C={class:"py-0"},B={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$={class:"text-caption font-weight-bold"},U={class:"text-caption"};function N(D,s,F,S,T,j){const c=V("form-show");return n(),h(c,{"with-helpdesk":"","with-activity-logs":""},{default:a(({record:o,theme:p})=>[l(i,null,{default:a(()=>[l(w,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":t=>o.page_name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:a(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":t=>o.name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",C,[l(g,null,{default:a(()=>[l(x,{color:`${p}`,size:"small",variant:"flat"},{default:a(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:a(()=>[e("table",B,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(n(!0),r(v,null,b(o.permissions,(t,_)=>(n(),r("tr",{key:_},[e("td",null,[l(y,{"model-value":t.value,readonly:""},null,8,["model-value"])]),e("td",$,m(t.name),1),e("td",U,m(t.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const E=f(k,[["render",N]]);export{E as default};