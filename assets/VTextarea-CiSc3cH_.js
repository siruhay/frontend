import{p,a5 as ee,a6 as te,v as ae,a7 as ne,B as le,a8 as oe,C as y,y as v,z as ue,a9 as ie,aa as re,H as x,ab as se,L as ce,ac as de,ad as _,ae as fe,e as l,af as ve,O as R,M as b,ag as G,ah as xe,ai as me,aj as ge,$ as he,K as S,ak as we,al as Ve,am as ye}from"./App-bu-TtOVK.js";const Ce=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:Ce(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:C,emit:M,slots:i}=D;const o=le(e,"modelValue"),{isFocused:f,focus:E,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=v(),m=v(),H=ue(""),g=v(),K=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function L(t){F(),M("click:control",t)}function q(t){M("mousedown:control",t)}function J(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function Q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),I=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,k,I);h.value=Math.floor((s-a)/w),H.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(C),{modelValue:w,...k}=_.filterProps(e),I=fe(e);return l(_,R({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,k,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:z,isDirty:N,isReadonly:W,isValid:X}=s;return l(ve,R({ref:m,style:{"--v-textarea-control-height":H.value},onClick:L,onMousedown:q,"onClick:clear":J,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},I,{id:V.value,active:K.value||N.value,centerAffix:h.value===1&&!P.value,dirty:N.value||e.dirty,disabled:z.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:A,...T}}=Y;return l(b,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),G(l("textarea",R({ref:g,class:A,value:o.value,onInput:Q,autofocus:e.autofocus,readonly:W.value,disabled:z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},T,u),null),[[xe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&G(l("textarea",{class:[A,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(b,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(b,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},B,m,g)}});export{Pe as V};
