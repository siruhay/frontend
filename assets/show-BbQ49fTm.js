import{_ as V,c as p,w as a,r as _,o as c,a as e,V as m,b as d,d as b,f as h,g as v,h as w,i as y}from"./app-FUBSdQkH.js";import{V as i}from"./VCombobox-D0shFOal.js";const x={name:"myfoundation-community-show"};function k(u,l,C,U,$,g){const r=_("form-show");return c(),p(r,{"hide-delete":"","hide-edit":"","with-helpdesk":""},{default:a(({combos:{communitymaps:s,subdistricts:n,villages:f},record:o})=>[e(b,null,{default:a(()=>[e(m,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(i,{items:s,label:"Tipe",modelValue:o.communitymap_id,"onUpdate:modelValue":t=>o.communitymap_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(i,{items:n,label:"Kecamatan",modelValue:o.subdistrict_id,"onUpdate:modelValue":t=>o.subdistrict_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(i,{items:f,label:"Desa",modelValue:o.village_id,"onUpdate:modelValue":t=>o.village_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:a(({theme:s})=>[l[2]||(l[2]=h("div",{class:"text-overline mt-4"},"Aksi",-1)),e(v,{class:"mb-3"}),e(m,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(w,{color:s,variant:"flat",block:"",onClick:l[0]||(l[0]=n=>u.$router.push({name:"myfoundation-member"}))},{default:a(()=>l[1]||(l[1]=[y("daftar anggota")])),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:1})}const T=V(x,[["render",k]]);export{T as default};