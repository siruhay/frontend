import{_ as U,c as r,w as t,r as g,o as x,a as e,V as v,b as o,e as d,j as n,d as C}from"./app-iozbaKy5.js";import{V as m}from"./VCombobox-BNBg78i_.js";const $={name:"foundation-official-create",methods:{updateSubdistrict:function(s,i){this.$http(`foundation/api/subdistrict/${s}/villages`).then(u=>{i.combos.villages=u})}}};function w(s,i,u,N,j,V){const p=g("form-create");return x(),r(p,{"with-helpdesk":""},{default:t(({combos:{genders:_,positions:c,subdistricts:f,villages:b},record:a,store:h})=>[e(C,null,{default:t(()=>[e(v,{dense:""},{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(d,{label:"Nama",modelValue:a.name,"onUpdate:modelValue":l=>a.name=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:t(()=>[e(d,{label:"N.I.K",modelValue:a.slug,"onUpdate:modelValue":l=>a.slug=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:t(()=>[e(d,{label:"Nomor HP",modelValue:a.phone,"onUpdate:modelValue":l=>a.phone=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(n,{items:c,label:"Jabatan",modelValue:a.position_id,"onUpdate:modelValue":l=>a.position_id=l,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(n,{items:_,label:"Jenis Kelamin",modelValue:a.gender_id,"onUpdate:modelValue":l=>a.gender_id=l,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(m,{items:f,"return-object":!1,label:"Kecamatan",modelValue:a.subdistrict_id,"onUpdate:modelValue":[l=>a.subdistrict_id=l,l=>V.updateSubdistrict(l,h)],"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:t(()=>[e(m,{items:b,"return-object":!1,label:"Desa",modelValue:a.village_id,"onUpdate:modelValue":l=>a.village_id=l,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const S=U($,[["render",w]]);export{S as default};
