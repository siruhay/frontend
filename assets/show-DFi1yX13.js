import{_ as p,c as _,w as l,r as b,o as c,a as e,V as u,b as d,e as m,d as v,f as U,g as w,h as n,i}from"./app-FUBSdQkH.js";import{V as f}from"./VCombobox-D0shFOal.js";const x={name:"mytraining-event-show"};function k(y,a,h,C,g,B){const r=b("form-show");return c(),_(r,{"hide-delete":"","hide-edit":"","with-helpdesk":""},{default:l(({combos:{subdistricts:s,villages:V},record:t,store:N})=>[e(v,null,{default:l(()=>[e(u,{dense:""},{default:l(()=>[e(u,{dense:""},{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(m,{label:"Name",modelValue:t.name,"onUpdate:modelValue":o=>t.name=o,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(m,{label:"Mulai",type:"date",modelValue:t.startdate,"onUpdate:modelValue":o=>t.startdate=o,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(m,{label:"Selesai",type:"date",modelValue:t.finishdate,"onUpdate:modelValue":o=>t.finishdate=o,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:l(()=>[e(f,{items:s,"return-object":!1,label:"Kecamatan",modelValue:t.subdistrict_id,"onUpdate:modelValue":o=>t.subdistrict_id=o,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:l(()=>[e(f,{items:V,"return-object":!1,label:"Kelurahan/Desa",modelValue:t.village_id,"onUpdate:modelValue":o=>t.village_id=o,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:l(({theme:s})=>[a[4]||(a[4]=U("div",{class:"text-overline mt-4"},"Aksi",-1)),e(w,{class:"mb-3"}),e(u,{dense:""},{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(n,{color:s,variant:"flat",block:""},{default:l(()=>a[0]||(a[0]=[i("absensi")])),_:2},1032,["color"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(n,{color:s,variant:"flat",block:""},{default:l(()=>a[1]||(a[1]=[i("rundown")])),_:2},1032,["color"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(n,{color:s,variant:"flat",block:""},{default:l(()=>a[2]||(a[2]=[i("pretest")])),_:2},1032,["color"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(n,{color:s,variant:"flat",block:""},{default:l(()=>a[3]||(a[3]=[i("postest")])),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:1})}const j=p(x,[["render",k]]);export{j as default};