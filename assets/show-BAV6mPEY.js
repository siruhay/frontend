import{_ as f,b as p,w as o,d as _,o as b,e,V as U,f as n,g as v,h as w,S as k,T as y,U as u,W as i}from"./App-B3jEyrGB.js";import{V as r}from"./VCombobox-Vef9EA5o.js";const $={name:"system-module-show"};function c(m,l,x,C,B,N){const V=_("form-show");return b(),p(V,{"with-helpdesk":"","with-activity-logs":""},{default:o(({combos:{modules:s,roles:d},record:a})=>[e(w,null,{default:o(()=>[e(U,{dense:""},{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(v,{label:"Name",modelValue:a.name,"onUpdate:modelValue":t=>a.name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:o(()=>[e(r,{items:s,label:"Module",modelValue:a.module_id,"onUpdate:modelValue":t=>a.module_id=t,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:o(()=>[e(r,{items:d,label:"Role",modelValue:a.role_id,"onUpdate:modelValue":t=>a.role_id=t,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:o(({theme:s})=>[l[4]||(l[4]=k("div",{class:"text-overline mt-4"},"Link",-1)),e(y),e(i,{class:"mt-3",color:s,block:"",variant:"flat",onClick:l[0]||(l[0]=d=>m.$router.push({name:"system-license"}))},{default:o(()=>l[2]||(l[2]=[u("BUKA USER")])),_:2},1032,["color"]),e(i,{class:"mt-3",color:s,block:"",variant:"flat",onClick:l[1]||(l[1]=d=>m.$router.push({name:"system-abilitypage"}))},{default:o(()=>l[3]||(l[3]=[u("BUKA PAGE")])),_:2},1032,["color"])]),_:1})}const A=f($,[["render",c]]);export{A as default};