import{_ as b,b as v,w as l,d as k,o as _,e,V as r,f as d,h as f,g as $,i as w,j as U,k as u,l as m}from"./App-COHusd0t.js";import{V}from"./VCombobox-CJGLgmhN.js";const C={name:"training-event-show"};function g(i,a,y,x,B,N){const p=k("form-show");return _(),v(p,{"with-helpdesk":""},{default:l(({combos:{subdistricts:n,villages:s},record:o,store:T})=>[e($,null,{default:l(()=>[e(r,{dense:""},{default:l(()=>[e(r,{dense:""},{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(f,{label:"Name",modelValue:o.name,"onUpdate:modelValue":t=>o.name=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(f,{label:"Mulai",type:"date",modelValue:o.startdate,"onUpdate:modelValue":t=>o.startdate=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(f,{label:"Selesai",type:"date",modelValue:o.finishdate,"onUpdate:modelValue":t=>o.finishdate=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:l(()=>[e(V,{items:n,label:"Kecamatan",modelValue:o.subdistrict_id,"onUpdate:modelValue":t=>o.subdistrict_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:l(()=>[e(V,{items:s,label:"Kelurahan/Desa",modelValue:o.village_id,"onUpdate:modelValue":t=>o.village_id=t,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:l(({theme:n})=>[a[8]||(a[8]=w("div",{class:"text-overline mt-4"},"Aksi",-1)),e(U,{class:"mb-3"}),e(r,{dense:""},{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(u,{color:n,variant:"flat",block:"",onClick:a[0]||(a[0]=s=>i.$router.push({name:"training-committee"}))},{default:l(()=>a[4]||(a[4]=[m("komite")])),_:2},1032,["color"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(u,{color:n,variant:"flat",block:"",onClick:a[1]||(a[1]=s=>i.$router.push({name:"training-participant"}))},{default:l(()=>a[5]||(a[5]=[m("Peserta")])),_:2},1032,["color"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(u,{color:n,variant:"flat",block:"",onClick:a[2]||(a[2]=s=>i.$router.push({name:"training-presence"}))},{default:l(()=>a[6]||(a[6]=[m("absensi")])),_:2},1032,["color"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(u,{color:n,variant:"flat",block:"",onClick:a[3]||(a[3]=s=>i.$router.push({name:"training-rundown"}))},{default:l(()=>a[7]||(a[7]=[m("rundown")])),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:1})}const K=b(C,[["render",g]]);export{K as default};
