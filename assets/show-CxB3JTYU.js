import{_ as p}from"./App-yS8o9LMX.js";import{v as n,w as d,U as i,g as V,f as _,c}from"./vuetify-CGQDu4yV.js";import{_ as b,$ as a,Y as v,Z as h,q as e,a1 as w,Q as y}from"./vendor-CVOH1yJd.js";import"./pdfjs-dist-cWKSalIg.js";import"./charts-CnSHDhrA.js";const x={name:"myfoundation-community-show"};function U(u,l,$,k,C,g){const r=v("form-show");return h(),b(r,{"hide-delete":"","hide-edit":"","with-helpdesk":""},{default:a(({combos:{communitymaps:s,subdistricts:m,villages:f},record:o})=>[e(V,null,{default:a(()=>[e(n,{dense:""},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(i,{items:s,label:"Tipe",modelValue:o.communitymap_id,"onUpdate:modelValue":t=>o.communitymap_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(i,{items:m,label:"Kecamatan",modelValue:o.subdistrict_id,"onUpdate:modelValue":t=>o.subdistrict_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:a(()=>[e(i,{items:f,label:"Desa",modelValue:o.village_id,"onUpdate:modelValue":t=>o.village_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:a(({theme:s})=>[l[2]||(l[2]=w("div",{class:"text-overline mt-4"},"Aksi",-1)),e(_,{class:"mb-3"}),e(n,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(c,{color:s,variant:"flat",block:"",onClick:l[0]||(l[0]=m=>u.$router.push({name:"myfoundation-member"}))},{default:a(()=>l[1]||(l[1]=[y("daftar anggota")])),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:1})}const A=p(x,[["render",U]]);export{A as default};