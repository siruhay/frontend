import{_ as f,b as V,w as l,d as b,o as h,e,V as x,f as o,g as U}from"./App-bu-TtOVK.js";import{V as s}from"./VCombobox-DFOqMSx9.js";const g={name:"foundation-community-create",methods:{updateSubdistrict:function(d,i){this.$http(`foundation/api/subdistrict/${d}/villages`).then(u=>{i.combos.villages=u})}}};function v(d,i,u,C,$,m){const n=b("form-create");return h(),V(n,{"with-helpdesk":""},{default:l(({combos:{communitymaps:c,subdistricts:p,villages:r},record:a,store:_})=>[e(U,null,{default:l(()=>[e(x,{dense:""},{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(s,{items:c,"return-object":!1,label:"Tipe",modelValue:a.communitymap_id,"onUpdate:modelValue":t=>a.communitymap_id=t,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:l(()=>[e(s,{items:p,"return-object":!1,label:"Kecamatan",modelValue:a.subdistrict_id,"onUpdate:modelValue":[t=>a.subdistrict_id=t,t=>m.updateSubdistrict(t,_)],"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:l(()=>[e(s,{items:r,"return-object":!1,label:"Desa",modelValue:a.village_id,"onUpdate:modelValue":t=>a.village_id=t,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const k=f(g,[["render",v]]);export{k as default};
