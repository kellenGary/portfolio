var jb=Object.defineProperty;var Qb=(s,e,t)=>e in s?jb(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var un=(s,e,t)=>Qb(s,typeof e!="symbol"?e+"":e,t);import{q as eM,b as Lx,l as Ne,Z as tM,L as Nx,c as Om,p as nM,au as Ux,ai as Ox,aa as iM,av as Wd,O as rM,t as w_,y as Xd,aw as sM,P as aM,ax as Kp,h as rs,ay as Fm,az as Bm,aA as T_,aB as oM,ah as lM,aC as cM,aD as hM,aE as Fx,v as uM,a as fM,I as dM,J as E_,K as Yd,d as hl,ae as pM,ac as mM,E as gM,D as uh,Q as Jp,aF as Bx,N as _M,j as zm,am as zx,aG as Lr,aH as zi,u as si,g as Oc,an as gi,z as Gf,A as fh,C as Hf,e as A_,al as C_,r as R_}from"./DQNzXHg4.js";import"./Bzak7iHL.js";import{c as dh,a as bl,t as xM}from"./D6HNNXJi.js";import{r as ph,i as vM,b as P_,s as km,p as Cr,a as yM,c as bM}from"./B0LpRFNQ.js";import{g as MM,d as Wf,a as Bl,w as Ml,o as SM,r as Vm}from"./DOXkU1a2.js";function M3(s,e){return e}function wM(s,e,t,n){for(var i=[],r=e.length,a=0;a<r;a++)oM(e[a].e,i,!0);var o=r>0&&i.length===0&&t!==null;if(o){var l=t.parentNode;lM(l),l.append(t),n.clear(),ca(s,e[0].prev,e[r-1].next)}cM(i,()=>{for(var c=0;c<r;c++){var h=e[c];o||(n.delete(h.k),ca(s,h.prev,h.next)),Fx(h.e,!o)}})}function S3(s,e,t,n,i,r=null){var a=s,o={flags:e,items:new Map,first:null},l=(e&Ux)!==0;if(l){var c=s;a=rs?Xd(uM(c)):c.appendChild(eM())}rs&&fM();var h=null,u=!1,f=tM(()=>{var d=t();return iM(d)?d:d==null?[]:Ox(d)});Lx(()=>{var d=Ne(f),p=d.length;if(u&&p===0)return;u=p===0;let _=!1;if(rs){var m=a.data===dM;m!==(p===0)&&(a=E_(),Xd(a),Yd(!1),_=!0)}if(rs){for(var g=null,y,x=0;x<p;x++){if(hl.nodeType===8&&hl.data===pM){a=hl,_=!0,Yd(!1);break}var v=d[x],b=n(v,x);y=kx(hl,o,g,null,v,b,x,i,e,t),o.items.set(b,y),g=y}p>0&&Xd(E_())}rs||TM(d,o,a,i,e,n,t),r!==null&&(p===0?h?Nx(h):h=Om(()=>r(a)):h!==null&&nM(h,()=>{h=null})),_&&Yd(!0),Ne(f)}),rs&&(a=hl)}function TM(s,e,t,n,i,r,a){var q,$,W,Y;var o=(i&sM)!==0,l=(i&(Fm|Bm))!==0,c=s.length,h=e.items,u=e.first,f=u,d,p=null,_,m=[],g=[],y,x,v,b;if(o)for(b=0;b<c;b+=1)y=s[b],x=r(y,b),v=h.get(x),v!==void 0&&((q=v.a)==null||q.measure(),(_??(_=new Set)).add(v));for(b=0;b<c;b+=1){if(y=s[b],x=r(y,b),v=h.get(x),v===void 0){var w=f?f.e.nodes_start:t;p=kx(w,e,p,p===null?e.first:p.next,y,x,b,n,i,a),h.set(x,p),m=[],g=[],f=p.next;continue}if(l&&EM(v,y,b,i),(v.e.f&Wd)!==0&&(Nx(v.e),o&&(($=v.a)==null||$.unfix(),(_??(_=new Set)).delete(v))),v!==f){if(d!==void 0&&d.has(v)){if(m.length<g.length){var A=g[0],R;p=A.prev;var M=m[0],T=m[m.length-1];for(R=0;R<m.length;R+=1)I_(m[R],A,t);for(R=0;R<g.length;R+=1)d.delete(g[R]);ca(e,M.prev,T.next),ca(e,p,M),ca(e,T,A),f=A,p=T,b-=1,m=[],g=[]}else d.delete(v),I_(v,f,t),ca(e,v.prev,v.next),ca(e,v,p===null?e.first:p.next),ca(e,p,v),p=v;continue}for(m=[],g=[];f!==null&&f.k!==x;)(f.e.f&Wd)===0&&(d??(d=new Set)).add(f),g.push(f),f=f.next;if(f===null)continue;v=f}m.push(v),p=v,f=v.next}if(f!==null||d!==void 0){for(var U=d===void 0?[]:Ox(d);f!==null;)(f.e.f&Wd)===0&&U.push(f),f=f.next;var F=U.length;if(F>0){var B=(i&Ux)!==0&&c===0?t:null;if(o){for(b=0;b<F;b+=1)(W=U[b].a)==null||W.measure();for(b=0;b<F;b+=1)(Y=U[b].a)==null||Y.fix()}wM(e,U,B,h)}}o&&rM(()=>{var te;if(_!==void 0)for(v of _)(te=v.a)==null||te.apply()}),w_.first=e.first&&e.first.e,w_.last=p&&p.e}function EM(s,e,t,n){(n&Fm)!==0&&T_(s.v,e),(n&Bm)!==0?T_(s.i,t):s.i=t}function kx(s,e,t,n,i,r,a,o,l,c){var h=(l&Fm)!==0,u=(l&hM)===0,f=h?u?aM(i):Kp(i):i,d=(l&Bm)===0?a:Kp(a),p={i:d,v:f,k:r,a:null,e:null,prev:t,next:n};try{return p.e=Om(()=>o(s,f,d,c),rs),p.e.prev=t&&t.e,p.e.next=n&&n.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function I_(s,e,t){for(var n=s.next?s.next.e.nodes_start:t,i=e?e.e.nodes_start:t,r=s.e.nodes_start;r!==n;){var a=mM(r);i.before(r),r=a}}function ca(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function mh(s,e,...t){var n=s,i=uh,r;Lx(()=>{i!==(i=e())&&(r&&(Fx(r),r=null),r=Om(()=>i(n,...t)))},gM),rs&&(n=hl)}const D_=[...` 	
\r\f \v\uFEFF`];function w3(s,e,t){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),t){for(var i in t)if(t[i])n=n?n+" "+i:i;else if(n.length)for(var r=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+r;(a===0||D_.includes(n[a-1]))&&(o===n.length||D_.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function AM(s,e){return s==null?null:String(s)}function T3(s,e,t,n){var i=s.__style;if(rs||i!==e){var r=AM(e);(!rs||r!==s.getAttribute("style"))&&(r==null?s.removeAttribute("style"):s.style.cssText=r),s.__style=e}return n}function CM(s){Jp(s,s.v+1)}function RM(s){let e=0,t=Kp(0),n;return()=>{Bx()&&(Ne(t),_M(()=>(e===0&&(n=zm(()=>s(()=>CM(t)))),e+=1,()=>{zx().then(()=>{e-=1,e===0&&(n==null||n(),n=void 0)})})))}}function ku(s){let e;const t=RM(i=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&i()});return r=!0,a});function n(){return Bx()?(t(),e):MM(s)}return"set"in s?{get current(){return n()},set current(i){s.set(i)}}:{get current(){return n()}}}const L_=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},PM=()=>{const s=[],n={items:s,remember:(i,r)=>{for(let o=0;o<s.length;o++){const l=s[o];if(L_(r,l.keys)&&l.promise)return l.promise}const a={promise:i(),keys:r};return s.push(a),a.promise},clear:i=>{for(let r=0;r<s.length;r++){const a=s[r];if(L_(i,a.keys)){s.splice(r,1);return}}}};return Lr("threlte-cache",n),n},E3=()=>{const s=zi("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return s};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="182",go={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,jp=1,Gx=2,IM=3,DM=0,Mc=1,Sc=2,ul=3,Vs=0,Bi=1,ss=2,hs=0,_o=1,Qp=2,em=3,tm=4,Hx=5,ua=100,Wx=101,Xx=102,Yx=103,qx=104,Zx=200,$x=201,Kx=202,Jx=203,Vu=204,Gu=205,jx=206,Qx=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,av=214,Hu=0,Wu=1,Xu=2,wo=3,Yu=4,qu=5,Zu=6,$u=7,gh=0,ov=1,lv=2,Yr=0,Gm=1,Hm=2,Wm=3,Xm=4,Ym=5,Fc=6,qm=7,nm="attached",cv="detached",Yf=300,fs=301,ba=302,Bc=303,zc=304,zl=306,kc=1e3,Ki=1001,Vc=1002,Cn=1003,Zm=1004,LM=1004,fl=1005,NM=1005,rn=1006,wc=1007,UM=1007,os=1008,OM=1008,Zi=1009,$m=1010,Km=1011,Sl=1012,qf=1013,Ir=1014,Oi=1015,ds=1016,Zf=1017,$f=1018,wl=1020,Jm=35902,jm=35899,Qm=1021,eg=1022,Fi=1023,ps=1026,fa=1027,Kf=1028,_h=1029,To=1030,Jf=1031,FM=1032,jf=1033,Tc=33776,Ec=33777,Ac=33778,Cc=33779,Ku=35840,Ju=35841,ju=35842,Qu=35843,ef=36196,tf=37492,nf=37496,rf=37488,sf=37489,af=37490,of=37491,lf=37808,cf=37809,hf=37810,uf=37811,ff=37812,df=37813,pf=37814,mf=37815,gf=37816,_f=37817,xf=37818,vf=37819,yf=37820,bf=37821,Mf=36492,Sf=36494,wf=36495,Tf=36283,Ef=36284,Af=36285,Cf=36286,hv=2200,uv=2201,fv=2202,Gc=2300,Rf=2301,Nu=2302,uo=2400,fo=2401,Hc=2402,Qf=2500,tg=2501,BM=0,zM=1,kM=2,dv=3200,VM=3201,GM=3202,HM=3203,Aa=0,pv=1,Bs="",qi="srgb",Eo="srgb-linear",Wc="linear",Kt="srgb",WM="",XM="rg",YM="ga",qM=0,oo=7680,ZM=7681,$M=7682,KM=7683,JM=34055,jM=34056,QM=5386,eS=512,tS=513,nS=514,iS=515,rS=516,sS=517,aS=518,im=519,mv=512,gv=513,_v=514,ed=515,xv=516,vv=517,td=518,yv=519,Xc=35044,oS=35048,lS=35040,cS=35045,hS=35049,uS=35041,fS=35046,dS=35050,pS=35042,mS="100",rm="300 es",dr=2e3,Tl=2001,gS={COMPUTE:"compute",RENDER:"render"},_S={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},xS={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function bv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const vS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function dl(s,e){return new vS[s](e)}function Mv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sv(){const s=Yc("canvas");return s.style.display="block",s}const N_={};let Ma=null;function yS(s){Ma=s}function bS(){return Ma}function qc(...s){const e="THREE."+s.shift();Ma?Ma("log",e,...s):console.log(e,...s)}function Le(...s){const e="THREE."+s.shift();Ma?Ma("warn",e,...s):console.warn(e,...s)}function et(...s){const e="THREE."+s.shift();Ma?Ma("error",e,...s):console.error(e,...s)}function El(...s){const e=s.join(" ");e in N_||(N_[e]=!0,Le(...s))}function MS(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let U_=1234567;const xo=Math.PI/180,Al=180/Math.PI;function gr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(di[s&255]+di[s>>8&255]+di[s>>16&255]+di[s>>24&255]+"-"+di[e&255]+di[e>>8&255]+"-"+di[e>>16&15|64]+di[e>>24&255]+"-"+di[t&63|128]+di[t>>8&255]+"-"+di[t>>16&255]+di[t>>24&255]+di[n&255]+di[n>>8&255]+di[n>>16&255]+di[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function ng(s,e){return(s%e+e)%e}function SS(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function wS(s,e,t){return s!==e?(t-s)/(e-s):0}function Rc(s,e,t){return(1-t)*s+t*e}function TS(s,e,t,n){return Rc(s,e,1-Math.exp(-t*n))}function ES(s,e=1){return e-Math.abs(ng(s,e*2)-e)}function AS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function CS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function RS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function PS(s,e){return s+Math.random()*(e-s)}function IS(s){return s*(.5-Math.random())}function DS(s){s!==void 0&&(U_=s);let e=U_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LS(s){return s*xo}function NS(s){return s*Al}function US(s){return(s&s-1)===0&&s!==0}function OS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function FS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function BS(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ig={DEG2RAD:xo,RAD2DEG:Al,generateUUID:gr,clamp:dt,euclideanModulo:ng,mapLinear:SS,inverseLerp:wS,lerp:Rc,damp:TS,pingpong:ES,smoothstep:AS,smootherstep:CS,randInt:RS,randFloat:PS,randFloatSpread:IS,seededRandom:DS,degToRad:LS,radToDeg:NS,isPowerOfTwo:US,ceilPowerOfTwo:OS,floorPowerOfTwo:FS,setQuaternionFromProperEuler:BS,normalize:At,denormalize:Ni};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const y=Math.acos(m),x=Math.sin(y);g=Math.sin(g*y)/x,o=Math.sin(o*y)/x,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(O_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(O_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qd.copy(this).projectOnVector(e),this.sub(qd)}reflect(e){return this.sub(qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qd=new D,O_=new vi;class wt{constructor(e,t,n,i,r,a,o,l,c){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],x=i[4],v=i[7],b=i[2],w=i[5],A=i[8];return r[0]=a*_+o*y+l*b,r[3]=a*m+o*x+l*w,r[6]=a*g+o*v+l*A,r[1]=c*_+h*y+u*b,r[4]=c*m+h*x+u*w,r[7]=c*g+h*v+u*A,r[2]=f*_+d*y+p*b,r[5]=f*m+d*x+p*w,r[8]=f*g+d*v+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zd.makeScale(e,t)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new wt,F_=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B_=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zS(){const s={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(i.r=_l(i.r),i.g=_l(i.g),i.b=_l(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bs?Wc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return El("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return El("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Eo]:{primaries:e,whitePoint:n,transfer:Wc,toXYZ:F_,fromXYZ:B_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qi},outputColorSpaceConfig:{drawingBufferColorSpace:qi}},[qi]:{primaries:e,whitePoint:n,transfer:Kt,toXYZ:F_,fromXYZ:B_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qi}}}),s}const Nt=zS();function ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _l(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Go;class wv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Go===void 0&&(Go=Yc("canvas")),Go.width=e.width,Go.height=e.height;const i=Go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Go}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ks(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ks(t[n]/255)*255):t[n]=ks(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kS=0;class da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($d(i[a].image)):r.push($d(i[a]))}else r=$d(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function $d(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let VS=0;const Kd=new D;class Mn extends gs{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Ki,i=Ki,r=rn,a=os,o=Fi,l=Zi,c=Mn.DEFAULT_ANISOTROPY,h=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=gr(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Yf;Mn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,b=(g+1)/2,w=(h+f)/4,A=(u+_)/4,R=(p+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=A/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=R/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=R/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rg extends gs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Mn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new da(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends rg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class nd extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends _r{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new nd(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class id extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HS extends _r{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new id(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class On{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vr):Vr.fromBufferAttribute(r,a),Vr.applyMatrix4(e.matrixWorld),this.expandByPoint(Vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kh.copy(n.boundingBox)),kh.applyMatrix4(e.matrixWorld),this.union(kh)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vr),Vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nc),Vh.subVectors(this.max,nc),Ho.subVectors(e.a,nc),Wo.subVectors(e.b,nc),Xo.subVectors(e.c,nc),na.subVectors(Wo,Ho),ia.subVectors(Xo,Wo),Wa.subVectors(Ho,Xo);let t=[0,-na.z,na.y,0,-ia.z,ia.y,0,-Wa.z,Wa.y,na.z,0,-na.x,ia.z,0,-ia.x,Wa.z,0,-Wa.x,-na.y,na.x,0,-ia.y,ia.x,0,-Wa.y,Wa.x,0];return!Jd(t,Ho,Wo,Xo,Vh)||(t=[1,0,0,0,1,0,0,0,1],!Jd(t,Ho,Wo,Xo,Vh))?!1:(Gh.crossVectors(na,ia),t=[Gh.x,Gh.y,Gh.z],Jd(t,Ho,Wo,Xo,Vh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cs=[new D,new D,new D,new D,new D,new D,new D,new D],Vr=new D,kh=new On,Ho=new D,Wo=new D,Xo=new D,na=new D,ia=new D,Wa=new D,nc=new D,Vh=new D,Gh=new D,Xa=new D;function Jd(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xa.fromArray(s,r);const o=i.x*Math.abs(Xa.x)+i.y*Math.abs(Xa.y)+i.z*Math.abs(Xa.z),l=e.dot(Xa),c=t.dot(Xa),h=n.dot(Xa);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const WS=new On,ic=new D,jd=new D;class Fn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):WS.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ic.subVectors(e,this.center);const t=ic.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ic,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ic.copy(e.center).add(jd)),this.expandByPoint(ic.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rs=new D,Qd=new D,Hh=new D,ra=new D,ep=new D,Wh=new D,tp=new D;class Xs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rs.copy(this.origin).addScaledVector(this.direction,t),Rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qd.copy(e).add(t).multiplyScalar(.5),Hh.copy(t).sub(e).normalize(),ra.copy(this.origin).sub(Qd);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Hh),o=ra.dot(this.direction),l=-ra.dot(Hh),c=ra.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qd).addScaledVector(Hh,f),d}intersectSphere(e,t){Rs.subVectors(e.center,this.origin);const n=Rs.dot(this.direction),i=Rs.dot(Rs)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rs)!==null}intersectTriangle(e,t,n,i,r){ep.subVectors(t,e),Wh.subVectors(n,e),tp.crossVectors(ep,Wh);let a=this.direction.dot(tp),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ra.subVectors(this.origin,e);const l=o*this.direction.dot(Wh.crossVectors(ra,Wh));if(l<0)return null;const c=o*this.direction.dot(ep.cross(ra));if(c<0||l+c>a)return null;const h=-o*ra.dot(tp);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Yo.setFromMatrixColumn(e,0).length(),r=1/Yo.setFromMatrixColumn(e,1).length(),a=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XS,e,YS)}lookAt(e,t,n){const i=this.elements;return cr.subVectors(e,t),cr.lengthSq()===0&&(cr.z=1),cr.normalize(),sa.crossVectors(n,cr),sa.lengthSq()===0&&(Math.abs(n.z)===1?cr.x+=1e-4:cr.z+=1e-4,cr.normalize(),sa.crossVectors(n,cr)),sa.normalize(),Xh.crossVectors(cr,sa),i[0]=sa.x,i[4]=Xh.x,i[8]=cr.x,i[1]=sa.y,i[5]=Xh.y,i[9]=cr.y,i[2]=sa.z,i[6]=Xh.z,i[10]=cr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],x=n[7],v=n[11],b=n[15],w=i[0],A=i[4],R=i[8],M=i[12],T=i[1],U=i[5],F=i[9],B=i[13],q=i[2],$=i[6],W=i[10],Y=i[14],te=i[3],de=i[7],pe=i[11],be=i[15];return r[0]=a*w+o*T+l*q+c*te,r[4]=a*A+o*U+l*$+c*de,r[8]=a*R+o*F+l*W+c*pe,r[12]=a*M+o*B+l*Y+c*be,r[1]=h*w+u*T+f*q+d*te,r[5]=h*A+u*U+f*$+d*de,r[9]=h*R+u*F+f*W+d*pe,r[13]=h*M+u*B+f*Y+d*be,r[2]=p*w+_*T+m*q+g*te,r[6]=p*A+_*U+m*$+g*de,r[10]=p*R+_*F+m*W+g*pe,r[14]=p*M+_*B+m*Y+g*be,r[3]=y*w+x*T+v*q+b*te,r[7]=y*A+x*U+v*$+b*de,r[11]=y*R+x*F+v*W+b*pe,r[15]=y*M+x*B+v*Y+b*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*f,x=o*d-c*u,v=o*f-l*u,b=a*d-c*h,w=a*f-l*h,A=a*u-o*h;return t*(_*y-m*x+g*v)-n*(p*y-m*b+g*w)+i*(p*x-_*b+g*A)-r*(p*v-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=u*m*c-_*f*c+_*l*d-o*m*d-u*l*g+o*f*g,x=p*f*c-h*m*c-p*l*d+a*m*d+h*l*g-a*f*g,v=h*_*c-p*u*c+p*o*d-a*_*d-h*o*g+a*u*g,b=p*u*l-h*_*l-p*o*f+a*_*f+h*o*m-a*u*m,w=t*y+n*x+i*v+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*g-n*f*g)*A,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*g+n*l*g)*A,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=x*A,e[5]=(h*m*r-p*f*r+p*i*d-t*m*d-h*i*g+t*f*g)*A,e[6]=(p*l*r-a*m*r-p*i*c+t*m*c+a*i*g-t*l*g)*A,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*A,e[8]=v*A,e[9]=(p*u*r-h*_*r-p*n*d+t*_*d+h*n*g-t*u*g)*A,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*A,e[12]=b*A,e[13]=(h*_*i-p*u*i+p*n*f-t*_*f-h*n*m+t*u*m)*A,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,_=a*h,m=a*u,g=o*u,y=l*c,x=l*h,v=l*u,b=n.x,w=n.y,A=n.z;return i[0]=(1-(_+g))*b,i[1]=(d+v)*b,i[2]=(p-x)*b,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+g))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(p+x)*A,i[9]=(m-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Yo.set(i[0],i[1],i[2]).length();const a=Yo.set(i[4],i[5],i[6]).length(),o=Yo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Gr.copy(this);const c=1/r,h=1/a,u=1/o;return Gr.elements[0]*=c,Gr.elements[1]*=c,Gr.elements[2]*=c,Gr.elements[4]*=h,Gr.elements[5]*=h,Gr.elements[6]*=h,Gr.elements[8]*=u,Gr.elements[9]*=u,Gr.elements[10]*=u,t.setFromRotationMatrix(Gr),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=dr,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===dr)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Tl)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=dr,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===dr)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Tl)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yo=new D,Gr=new ot,XS=new D(0,0,0),YS=new D(1,1,1),sa=new D,Xh=new D,cr=new D,z_=new ot,k_=new vi;class vr{constructor(e=0,t=0,n=0,i=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k_.setFromEuler(this),this.setFromQuaternion(k_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qS=0;const V_=new D,qo=new vi,Ps=new ot,Yh=new D,rc=new D,ZS=new D,$S=new vi,G_=new D(1,0,0),H_=new D(0,1,0),W_=new D(0,0,1),X_={type:"added"},KS={type:"removed"},Zo={type:"childadded",child:null},np={type:"childremoved",child:null};class kt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new D,t=new vr,n=new vi,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new wt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(G_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(W_,e)}translateOnAxis(e,t){return V_.copy(e).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(G_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(W_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yh.copy(e):Yh.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(rc,Yh,this.up):Ps.lookAt(Yh,rc,this.up),this.quaternion.setFromRotationMatrix(Ps),i&&(Ps.extractRotation(i.matrixWorld),qo.setFromRotationMatrix(Ps),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X_),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(KS),np.child=e,this.dispatchEvent(np),np.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X_),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new D(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hr=new D,Is=new D,ip=new D,Ds=new D,$o=new D,Ko=new D,Y_=new D,rp=new D,sp=new D,ap=new D,op=new Yt,lp=new Yt,cp=new Yt;class $i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hr.subVectors(e,t),i.cross(Hr);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Hr.subVectors(i,t),Is.subVectors(n,t),ip.subVectors(e,t);const a=Hr.dot(Hr),o=Hr.dot(Is),l=Hr.dot(ip),c=Is.dot(Is),h=Is.dot(ip),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ds.x),l.addScaledVector(a,Ds.y),l.addScaledVector(o,Ds.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return op.setScalar(0),lp.setScalar(0),cp.setScalar(0),op.fromBufferAttribute(e,t),lp.fromBufferAttribute(e,n),cp.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(op,r.x),a.addScaledVector(lp,r.y),a.addScaledVector(cp,r.z),a}static isFrontFacing(e,t,n,i){return Hr.subVectors(n,t),Is.subVectors(e,t),Hr.cross(Is).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hr.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),Hr.cross(Is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return $i.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;$o.subVectors(i,n),Ko.subVectors(r,n),rp.subVectors(e,n);const l=$o.dot(rp),c=Ko.dot(rp);if(l<=0&&c<=0)return t.copy(n);sp.subVectors(e,i);const h=$o.dot(sp),u=Ko.dot(sp);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector($o,a);ap.subVectors(e,r);const d=$o.dot(ap),p=Ko.dot(ap);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ko,o);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Y_.subVectors(r,i),o=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Y_,o);const g=1/(m+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector($o,a).addScaledVector(Ko,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},aa={h:0,s:0,l:0},qh={h:0,s:0,l:0};function hp(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=ng(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hp(a,r,e+1/3),this.g=hp(a,r,e),this.b=hp(a,r,e-1/3)}return Nt.colorSpaceToWorking(this,i),this}setStyle(e,t=qi){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qi){const n=Tv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qi){return Nt.workingToColorSpace(pi.copy(this),e),Math.round(dt(pi.r*255,0,255))*65536+Math.round(dt(pi.g*255,0,255))*256+Math.round(dt(pi.b*255,0,255))}getHexString(e=qi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(pi.copy(this),t);const n=pi.r,i=pi.g,r=pi.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(pi.copy(this),t),e.r=pi.r,e.g=pi.g,e.b=pi.b,e}getStyle(e=qi){Nt.workingToColorSpace(pi.copy(this),e);const t=pi.r,n=pi.g,i=pi.b;return e!==qi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(aa),this.setHSL(aa.h+e,aa.s+t,aa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(aa),e.getHSL(qh);const n=Rc(aa.h,qh.h,t),i=Rc(aa.s,qh.s,t),r=Rc(aa.l,qh.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pi=new We;We.NAMES=Tv;let JS=0;class bi extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=_o,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(n.blending=this.blending),this.side!==Vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vu&&(n.blendSrc=this.blendSrc),this.blendDst!==Gu&&(n.blendDst=this.blendDst),this.blendEquation!==ua&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ys extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zs=jS();function jS(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Yi(s){Math.abs(s)>65504&&Le("DataUtils.toHalfFloat(): Value out of range."),s=dt(s,-65504,65504),zs.floatView[0]=s;const e=zs.uint32View[0],t=e>>23&511;return zs.baseTable[t]+((e&8388607)>>zs.shiftTable[t])}function gc(s){const e=s>>10;return zs.uint32View[0]=zs.mantissaTable[zs.offsetTable[e]+(s&1023)]+zs.exponentTable[e],zs.floatView[0]}class QS{static toHalfFloat(e){return Yi(e)}static fromHalfFloat(e){return gc(e)}}const Nn=new D,Zh=new ae;let e1=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zh.fromBufferAttribute(this,t),Zh.applyMatrix3(e),this.setXY(t,Zh.x,Zh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}}class t1 extends jt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class n1 extends jt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class i1 extends jt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class r1 extends jt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class sg extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class s1 extends jt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class ag extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class a1 extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=gc(this.array[e*this.itemSize]);return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=Yi(t),this}getY(e){let t=gc(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=Yi(t),this}getZ(e){let t=gc(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=Yi(t),this}getW(e){let t=gc(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=Yi(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=Yi(t),this.array[e+1]=Yi(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=Yi(t),this.array[e+1]=Yi(n),this.array[e+2]=Yi(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=Yi(t),this.array[e+1]=Yi(n),this.array[e+2]=Yi(i),this.array[e+3]=Yi(r),this}}class Ye extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let o1=0;const Er=new ot,up=new kt,Jo=new D,hr=new On,sc=new On,Jn=new D;class yt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bv(e)?ag:sg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,n){return Er.makeTranslation(e,t,n),this.applyMatrix4(Er),this}scale(e,t,n){return Er.makeScale(e,t,n),this.applyMatrix4(Er),this}lookAt(e){return up.lookAt(e),up.updateMatrix(),this.applyMatrix4(up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hr.setFromBufferAttribute(r),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,hr.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,hr.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(hr.min),this.boundingBox.expandByPoint(hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(hr.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sc.setFromBufferAttribute(o),this.morphTargetsRelative?(Jn.addVectors(hr.min,sc.min),hr.expandByPoint(Jn),Jn.addVectors(hr.max,sc.max),hr.expandByPoint(Jn)):(hr.expandByPoint(sc.min),hr.expandByPoint(sc.max))}hr.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Jn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jn.fromBufferAttribute(o,c),l&&(Jo.fromBufferAttribute(e,c),Jn.add(Jo)),i=Math.max(i,n.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,u=new D,f=new ae,d=new ae,p=new ae,_=new D,m=new D;function g(R,M,T){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(U),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(U),o[R].add(_),o[M].add(_),o[T].add(_),l[R].add(m),l[M].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,M=y.length;R<M;++R){const T=y[R],U=T.start,F=T.count;for(let B=U,q=U+F;B<q;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new D,v=new D,b=new D,w=new D;function A(R){b.fromBufferAttribute(i,R),w.copy(b);const M=o[R];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),v.crossVectors(w,M);const U=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,U)}for(let R=0,M=y.length;R<M;++R){const T=y[R],U=T.start,F=T.count;for(let B=U,q=U+F;B<q;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jn.fromBufferAttribute(e,t),Jn.normalize(),e.setXYZ(t,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new jt(f,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q_=new ot,Ya=new Xs,$h=new Fn,Z_=new D,Kh=new D,Jh=new D,jh=new D,fp=new D,Qh=new D,$_=new D,eu=new D;class Rn extends kt{constructor(e=new yt,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(fp.fromBufferAttribute(u,e),a?Qh.addScaledVector(fp,h):Qh.addScaledVector(fp.sub(t),h))}t.add(Qh)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$h.copy(n.boundingSphere),$h.applyMatrix4(r),Ya.copy(e.ray).recast(e.near),!($h.containsPoint(Ya.origin)===!1&&(Ya.intersectSphere($h,Z_)===null||Ya.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(q_.copy(r).invert(),Ya.copy(e.ray).applyMatrix4(q_),!(n.boundingBox!==null&&Ya.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ya)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=x;v<b;v+=3){const w=o.getX(v),A=o.getX(v+1),R=o.getX(v+2);i=tu(this,g,e,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=tu(this,a,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=x;v<b;v+=3){const w=v,A=v+1,R=v+2;i=tu(this,g,e,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const y=m,x=m+1,v=m+2;i=tu(this,a,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function l1(s,e,t,n,i,r,a,o){let l;if(e.side===Bi?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Vs,o),l===null)return null;eu.copy(o),eu.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(eu);return c<t.near||c>t.far?null:{distance:c,point:eu.clone(),object:s}}function tu(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Kh),s.getVertexPosition(l,Jh),s.getVertexPosition(c,jh);const h=l1(s,e,t,n,Kh,Jh,jh,$_);if(h){const u=new D;$i.getBarycoord($_,Kh,Jh,jh,u),i&&(h.uv=$i.getInterpolatedAttribute(i,o,l,c,u,new ae)),r&&(h.uv1=$i.getInterpolatedAttribute(r,o,l,c,u,new ae)),a&&(h.normal=$i.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};$i.getNormal(Kh,Jh,jh,f.normal),h.face=f,h.barycoord=u}return h}class Po extends yt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function p(_,m,g,y,x,v,b,w,A,R,M){const T=v/A,U=b/R,F=v/2,B=b/2,q=w/2,$=A+1,W=R+1;let Y=0,te=0;const de=new D;for(let pe=0;pe<W;pe++){const be=pe*U-B;for(let Je=0;Je<$;Je++){const rt=Je*T-F;de[_]=rt*y,de[m]=be*x,de[g]=q,c.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[g]=w>0?1:-1,h.push(de.x,de.y,de.z),u.push(Je/A),u.push(1-pe/R),Y+=1}}for(let pe=0;pe<R;pe++)for(let be=0;be<A;be++){const Je=f+be+$*pe,rt=f+be+$*(pe+1),bt=f+(be+1)+$*(pe+1),Rt=f+(be+1)+$*pe;l.push(Je,rt,Rt),l.push(rt,bt,Rt),te+=6}o.addGroup(d,te,M),d+=te,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cl(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Li(s){const e={};for(let t=0;t<s.length;t++){const n=Cl(s[t]);for(const i in n)e[i]=n[i]}return e}function c1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ev(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const og={clone:Cl,merge:Li};var h1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cl(e.uniforms),this.uniformsGroups=c1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=dr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oa=new D,K_=new ae,J_=new ae;class jn extends sd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oa.x,oa.y).multiplyScalar(-e/oa.z),oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oa.x,oa.y).multiplyScalar(-e/oa.z)}getViewSize(e,t){return this.getViewBounds(e,K_,J_),t.subVectors(J_,K_)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jo=-90,Qo=1;class Av extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jn(jo,Qo,e,t);i.layers=this.layers,this.add(i);const r=new jn(jo,Qo,e,t);r.layers=this.layers,this.add(r);const a=new jn(jo,Qo,e,t);a.layers=this.layers,this.add(a);const o=new jn(jo,Qo,e,t);o.layers=this.layers,this.add(o);const l=new jn(jo,Qo,e,t);l.layers=this.layers,this.add(l);const c=new jn(jo,Qo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class xh extends Mn{constructor(e=[],t=fs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lg extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Po(5,5,5),r=new Dr({name:"CubemapFromEquirect",uniforms:Cl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bi,blending:hs});r.uniforms.tEquirect.value=t;const a=new Rn(i,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=rn),new Av(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class pa extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f1={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ad{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new ad(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class od{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new od(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cg extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ld{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this.updateRanges=[],this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Di=new D;class Ao{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix4(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyNormalMatrix(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.transformDirection(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){qc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hg extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let el;const ac=new D,tl=new D,nl=new D,il=new ae,oc=new ae,Cv=new ot,nu=new D,lc=new D,iu=new D,j_=new ae,dp=new ae,Q_=new ae;class Rv extends kt{constructor(e=new hg){if(super(),this.isSprite=!0,this.type="Sprite",el===void 0){el=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ld(t,5);el.setIndex([0,1,2,0,2,3]),el.setAttribute("position",new Ao(n,3,0,!1)),el.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=el,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tl.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tl.multiplyScalar(-nl.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ru(nu.set(-.5,-.5,0),nl,a,tl,i,r),ru(lc.set(.5,-.5,0),nl,a,tl,i,r),ru(iu.set(.5,.5,0),nl,a,tl,i,r),j_.set(0,0),dp.set(1,0),Q_.set(1,1);let o=e.ray.intersectTriangle(nu,lc,iu,!1,ac);if(o===null&&(ru(lc.set(-.5,.5,0),nl,a,tl,i,r),dp.set(0,1),o=e.ray.intersectTriangle(nu,iu,lc,!1,ac),o===null))return;const l=e.ray.origin.distanceTo(ac);l<e.near||l>e.far||t.push({distance:l,point:ac.clone(),uv:$i.getInterpolation(ac,nu,lc,iu,j_,dp,Q_,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ru(s,e,t,n,i,r){il.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(oc.x=r*il.x-i*il.y,oc.y=i*il.x+r*il.y):oc.copy(il),s.copy(e),s.x+=oc.x,s.y+=oc.y,s.applyMatrix4(Cv)}const su=new D,e0=new D;class Pv extends kt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){su.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(su);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){su.setFromMatrixPosition(e.matrixWorld),e0.setFromMatrixPosition(this.matrixWorld);const n=su.distanceTo(e0)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const t0=new D,n0=new Yt,i0=new Yt,d1=new D,r0=new ot,au=new D,pp=new Fn,s0=new ot,mp=new Xs;class Iv extends Rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nm,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,au),this.boundingBox.expandByPoint(au)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,au),this.boundingSphere.expandByPoint(au)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pp.copy(this.boundingSphere),pp.applyMatrix4(i),e.ray.intersectsSphere(pp)!==!1&&(s0.copy(i).invert(),mp.copy(e.ray).applyMatrix4(s0),!(this.boundingBox!==null&&mp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;n0.fromBufferAttribute(i.attributes.skinIndex,e),i0.fromBufferAttribute(i.attributes.skinWeight,e),t0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=i0.getComponent(r);if(a!==0){const o=n0.getComponent(r);r0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(d1.copy(t0).applyMatrix4(r0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ug extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qr extends Mn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Cn,h=Cn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const a0=new ot,p1=new ot;class cd{constructor(e=[],t=[]){this.uuid=gr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:p1;a0.multiplyMatrices(o,t[r]),a0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qr(t,e,e,Fi,Oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new ug),this.bones.push(a),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Rl extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rl=new ot,o0=new ot,ou=[],l0=new On,m1=new ot,cc=new Rn,hc=new Fn;class Dv extends Rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rl),l0.copy(e.boundingBox).applyMatrix4(rl),this.boundingBox.union(l0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rl),hc.copy(e.boundingSphere).applyMatrix4(rl),this.boundingSphere.union(hc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(cc.geometry=this.geometry,cc.material=this.material,cc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hc.copy(this.boundingSphere),hc.applyMatrix4(n),e.ray.intersectsSphere(hc)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rl),o0.multiplyMatrices(n,rl),cc.matrixWorld=o0,cc.raycast(e,ou);for(let a=0,o=ou.length;a<o;a++){const l=ou[a];l.instanceId=r,l.object=this,t.push(l)}ou.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qr(new Float32Array(i*this.count),i,this.count,Kf,Oi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gp=new D,g1=new D,_1=new wt;class Os{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gp.subVectors(n,t).cross(g1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gp),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_1.getNormalMatrix(e),i=this.coplanarPoint(gp).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qa=new Fn,x1=new ae(.5,.5),lu=new D;class kl{constructor(e=new Os,t=new Os,n=new Os,i=new Os,r=new Os,a=new Os){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],x=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,g-p,b-y).normalize(),i[1].setComponents(c+a,d+h,g+p,b+y).normalize(),i[2].setComponents(c+o,d+u,g+_,b+x).normalize(),i[3].setComponents(c-o,d-u,g-_,b-x).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,g-m,b-v).normalize();else if(i[4].setComponents(c-l,d-f,g-m,b-v).normalize(),t===dr)i[5].setComponents(c+l,d+f,g+m,b+v).normalize();else if(t===Tl)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qa)}intersectsSprite(e){qa.center.set(0,0,0);const t=x1.distanceTo(e.center);return qa.radius=.7071067811865476+t,qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(qa)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lu.x=i.normal.x>0?e.max.x:e.min.x,lu.y=i.normal.y>0?e.max.y:e.min.y,lu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const es=new ot,ts=new kl;class hd{constructor(){this.coordinateSystem=dr}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(es.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ts.setFromProjectionMatrix(es,i.coordinateSystem,i.reversedDepth),ts.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(es.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ts.setFromProjectionMatrix(es,i.coordinateSystem,i.reversedDepth),ts.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(es.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ts.setFromProjectionMatrix(es,i.coordinateSystem,i.reversedDepth),ts.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(es.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ts.setFromProjectionMatrix(es,i.coordinateSystem,i.reversedDepth),ts.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(es.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),ts.setFromProjectionMatrix(es,i.coordinateSystem,i.reversedDepth),ts.containsPoint(e))return!0}return!1}clone(){return new hd}}function _p(s,e){return s-e}function v1(s,e){return s.z-e.z}function y1(s,e){return e.z-s.z}class b1{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const Wi=new ot,M1=new We(1,1,1),c0=new kl,S1=new hd,cu=new On,Za=new Fn,uc=new D,h0=new D,w1=new D,xp=new b1,mi=new Rn,hu=[];function T1(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function $a(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Lv extends Rn{constructor(e,t,n=t*2,i){super(new yt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new qr(t,e,e,Fi,Oi);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new qr(t,e,e,_h,Ir);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new qr(t,e,e,Fi,Oi);n.colorSpace=Nt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new jt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new jt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Wi),this.getBoundingBoxAt(r,cu).applyMatrix4(Wi),e.union(cu)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Wi),this.getBoundingSphereAt(r,Za).applyMatrix4(Wi),e.union(Za)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(_p),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Wi.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(M1.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(_p),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),f=n.getAttribute(h);T1(u,f,l);const d=u.itemSize;for(let p=u.count,_=c;p<_;p++){const m=l+p;for(let g=0;g<d;g++)f.setComponent(m,g,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<a.count;f++)r.setX(h+f,l+a.getX(f));for(let f=a.count,d=u;f<d;f++)r.setX(h+f,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:f}=c,d=r.index,p=d.array,_=e-u;for(let m=h;m<h+f;m++)p[m]=p[m]+_;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,f=r.attributes;for(const d in f){const p=f[d],{array:_,itemSize:m}=p;_.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new On,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(uc.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Fn;this.getBoundingBoxAt(e,cu),cu.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),uc.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(uc))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(_p);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);$a(this._multiDrawCounts,i),$a(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),$a(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),$a(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),$a(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new yt,this._initializeGeometry(r));const a=this.geometry;r.index&&$a(r.index.array,a.index.array);for(const o in r.attributes)$a(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;mi.material=this.material,mi.geometry.index=a.index,mi.geometry.attributes=a.attributes,mi.geometry.boundingBox===null&&(mi.geometry.boundingBox=new On),mi.geometry.boundingSphere===null&&(mi.geometry.boundingSphere=new Fn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];mi.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,mi.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,mi.geometry.boundingBox),this.getBoundingSphereAt(c,mi.geometry.boundingSphere),mi.raycast(e,hu);for(let u=0,f=hu.length;u<f;u++){const d=hu[u];d.object=this,d.batchId=o,t.push(d)}hu.length=0}mi.material=null,mi.geometry.index=null,mi.geometry.attributes={},mi.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data,_=n.isArrayCamera?S1:c0;f&&!n.isArrayCamera&&(Wi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),c0.setFromProjectionMatrix(Wi,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){Wi.copy(this.matrixWorld).invert(),uc.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Wi),h0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Wi);for(let x=0,v=l.length;x<v;x++)if(l[x].visible&&l[x].active){const b=l[x].geometryIndex;this.getMatrixAt(x,Wi),this.getBoundingSphereAt(b,Za).applyMatrix4(Wi);let w=!1;if(f&&(w=!_.intersectsSphere(Za,n)),!w){const A=u[b],R=w1.subVectors(Za.center,uc).dot(h0);xp.push(A.start,A.count,R,x)}}const g=xp.list,y=this.customSort;y===null?g.sort(r.transparent?y1:v1):y.call(this,g,n);for(let x=0,v=g.length;x<v;x++){const b=g[x];c[m]=b.start*o,h[m]=b.count,p[m]=b.index,m++}xp.reset()}else for(let g=0,y=l.length;g<y;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let v=!1;if(f&&(this.getMatrixAt(g,Wi),this.getBoundingSphereAt(x,Za).applyMatrix4(Wi),v=!_.intersectsSphere(Za,n)),!v){const b=u[x];c[m]=b.start*o,h[m]=b.count,p[m]=g,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class ki extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pf=new D,If=new D,u0=new ot,fc=new Xs,uu=new Fn,vp=new D,f0=new D;class Sa extends kt{constructor(e=new yt,t=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Pf.fromBufferAttribute(t,i-1),If.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pf.distanceTo(If);e.setAttribute("lineDistance",new Ye(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uu.copy(n.boundingSphere),uu.applyMatrix4(i),uu.radius+=r,e.ray.intersectsSphere(uu)===!1)return;u0.copy(i).invert(),fc.copy(e.ray).applyMatrix4(u0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=h.getX(_),y=h.getX(_+1),x=fu(this,e,fc,l,g,y,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=fu(this,e,fc,l,_,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=fu(this,e,fc,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=fu(this,e,fc,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fu(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Pf.fromBufferAttribute(o,i),If.fromBufferAttribute(o,r),t.distanceSqToSegment(Pf,If,vp,f0)>n)return;vp.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(vp);if(!(c<e.near||c>e.far))return{distance:c,point:f0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const d0=new D,p0=new D;class _s extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)d0.fromBufferAttribute(t,i),p0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+d0.distanceTo(p0);e.setAttribute("lineDistance",new Ye(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let fg=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const m0=new ot,sm=new Xs,du=new Fn,pu=new D;class Uv extends kt{constructor(e=new yt,t=new fg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),du.copy(n.boundingSphere),du.applyMatrix4(i),du.radius+=r,e.ray.intersectsSphere(du)===!1)return;m0.copy(i).invert(),sm.copy(e.ray).applyMatrix4(m0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const m=c.getX(p);pu.fromBufferAttribute(u,m),g0(pu,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)pu.fromBufferAttribute(u,p),g0(pu,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function g0(s,e,t,n,i,r,a){const o=sm.distanceSqToPoint(s);if(o<t){const l=new D;sm.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ov extends Mn{constructor(e,t,n,i,r=rn,a=rn,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class E1 extends Ov{constructor(e,t,n,i,r,a,o,l){super({},e,t,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class A1 extends Mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Cn,this.minFilter=Cn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ud extends Mn{constructor(e,t,n,i,r,a,o,l,c,h,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class C1 extends ud{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ki,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R1 extends ud{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,fs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class P1 extends Mn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pl extends Mn{constructor(e,t,n=Ir,i,r,a,o=Cn,l=Cn,c,h=ps,u=1){if(h!==ps&&h!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fv extends Pl{constructor(e,t=Ir,n=fs,i,r,a=Cn,o=Cn,l,c=ps){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dg extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fd extends yt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,_=i+1,m=new D,g=new D;for(let y=0;y<=p;y++){let x=0,v=0,b=0,w=0;if(y<=n){const M=y/n,T=M*Math.PI/2;v=-h-e*Math.cos(T),b=e*Math.sin(T),w=-e*Math.cos(T),x=M*u}else if(y<=n+r){const M=(y-n)/r;v=-h+M*t,b=e,w=0,x=u+M*f}else{const M=(y-n-r)/n,T=M*Math.PI/2;v=h+e*Math.sin(T),b=e*Math.cos(T),w=e*Math.sin(T),x=u+f+M*u}const A=Math.max(0,Math.min(1,x/d));let R=0;y===0?R=.5/i:y===p&&(R=-.5/i);for(let M=0;M<=i;M++){const T=M/i,U=T*Math.PI*2,F=Math.sin(U),B=Math.cos(U);g.x=-b*B,g.y=v,g.z=b*F,o.push(g.x,g.y,g.z),m.set(-b*B,w,b*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+R,A)}if(y>0){const M=(y-1)*_;for(let T=0;T<i;T++){const U=M+T,F=M+T+1,B=y*_+T,q=y*_+T+1;a.push(U,F,B),a.push(F,q,B)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class dd extends yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vh extends yt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function y(){const v=new D,b=new D;let w=0;const A=(t-e)/n;for(let R=0;R<=r;R++){const M=[],T=R/r,U=T*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,q=B*l+o,$=Math.sin(q),W=Math.cos(q);b.x=U*$,b.y=-T*n+m,b.z=U*W,u.push(b.x,b.y,b.z),v.set($,A,W).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-T),M.push(p++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){const T=_[M][R],U=_[M+1][R],F=_[M+1][R+1],B=_[M][R+1];(e>0||M!==0)&&(h.push(T,U,B),w+=3),(t>0||M!==r-1)&&(h.push(U,F,B),w+=3)}c.addGroup(g,w,0),g+=w}function x(v){const b=p,w=new ae,A=new D;let R=0;const M=v===!0?e:t,T=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),p++;const U=p;for(let F=0;F<=i;F++){const q=F/i*l+o,$=Math.cos(q),W=Math.sin(q);A.x=M*W,A.y=m*T,A.z=M*$,u.push(A.x,A.y,A.z),f.push(0,T,0),w.x=$*.5+.5,w.y=W*.5*T+.5,d.push(w.x,w.y),p++}for(let F=0;F<i;F++){const B=b+F,q=U+F;v===!0?h.push(q,q+1,B):h.push(q+1,q,B),R+=3}c.addGroup(g,R,v===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yh extends vh{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new D,v=new D,b=new D;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],v),d(t[w+2],b),l(x,v,b,y)}function l(y,x,v,b){const w=b+1,A=[];for(let R=0;R<=w;R++){A[R]=[];const M=y.clone().lerp(v,R/w),T=x.clone().lerp(v,R/w),U=w-R;for(let F=0;F<=U;F++)F===0&&R===w?A[R][F]=M:A[R][F]=M.clone().lerp(T,F/U)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){const T=Math.floor(M/2);M%2===0?(f(A[R][T+1]),f(A[R+1][T]),f(A[R][T])):(f(A[R][T+1]),f(A[R+1][T+1]),f(A[R+1][T]))}}function c(y){const x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;a.push(v,1-b)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],b=a[y+4],w=Math.max(x,v,b),A=Math.min(x,v,b);w>.9&&A<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function p(){const y=new D,x=new D,v=new D,b=new D,w=new ae,A=new ae,R=new ae;for(let M=0,T=0;M<r.length;M+=9,T+=6){y.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(a[T+0],a[T+1]),A.set(a[T+2],a[T+3]),R.set(a[T+4],a[T+5]),b.copy(y).add(x).add(v).divideScalar(3);const U=m(b);_(w,T+0,y,U),_(A,T+2,x,U),_(R,T+4,v,U)}}function _(y,x,v,b){b<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.vertices,e.indices,e.radius,e.detail)}}class pd extends Ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pd(e.radius,e.detail)}}const mu=new D,gu=new D,yp=new D,_u=new $i;class Bv extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(xo*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=_u;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),_u.getNormal(yp),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],b=u[x],w=_u[h[y]],A=_u[h[x]],R=`${v}_${b}`,M=`${b}_${v}`;M in f&&f[M]?(yp.dot(f[M].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(A.x,A.y,A.z)),f[M]=null):R in f||(f[R]={index0:c[y],index1:c[x],normal:yp.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];mu.fromBufferAttribute(o,_),gu.fromBufferAttribute(o,m),d.push(mu.x,mu.y,mu.z),d.push(gu.x,gu.y,gu.z)}this.setAttribute("position",new Ye(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ae:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,i=[],r=[],a=[],o=new D,l=new ot;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(dt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(dt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class md extends Zr{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zv extends md{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pg(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const xu=new D,bp=new pg,Mp=new pg,Sp=new pg;class kv extends Zr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(xu.subVectors(i[0],i[1]).add(i[0]),c=xu);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(xu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),bp.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,m),Mp.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,m),Sp.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(bp.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Mp.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Sp.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(bp.calc(l),Mp.calc(l),Sp.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _0(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function I1(s,e){const t=1-s;return t*t*e}function D1(s,e){return 2*(1-s)*s*e}function L1(s,e){return s*s*e}function Pc(s,e,t,n){return I1(s,e)+D1(s,t)+L1(s,n)}function N1(s,e){const t=1-s;return t*t*t*e}function U1(s,e){const t=1-s;return 3*t*t*s*e}function O1(s,e){return 3*(1-s)*s*s*e}function F1(s,e){return s*s*s*e}function Ic(s,e,t,n,i){return N1(s,e)+U1(s,t)+O1(s,n)+F1(s,i)}class mg extends Zr{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ic(e,i.x,r.x,a.x,o.x),Ic(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vv extends Zr{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ic(e,i.x,r.x,a.x,o.x),Ic(e,i.y,r.y,a.y,o.y),Ic(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gg extends Zr{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gv extends Zr{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _g extends Zr{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pc(e,i.x,r.x,a.x),Pc(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xg extends Zr{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pc(e,i.x,r.x,a.x),Pc(e,i.y,r.y,a.y),Pc(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vg extends Zr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(_0(o,l.x,c.x,h.x,u.x),_0(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var Df=Object.freeze({__proto__:null,ArcCurve:zv,CatmullRomCurve3:kv,CubicBezierCurve:mg,CubicBezierCurve3:Vv,EllipseCurve:md,LineCurve:gg,LineCurve3:Gv,QuadraticBezierCurve:_g,QuadraticBezierCurve3:xg,SplineCurve:vg});class Hv extends Zr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Df[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Df[i.type]().fromJSON(i))}return this}}class Lf extends Hv{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gg(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new _g(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new mg(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new md(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vo extends Lf{constructor(e){super(e),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Lf().fromJSON(i))}return this}}function B1(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Wv(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=H1(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let f=t;f<i;f+=t){const d=s[f],p=s[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Zc(r,a,t,o,l,c,0),a}function Wv(s,e,t,n,i){let r;if(i===ew(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=x0(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=x0(a/n|0,s[a],s[a+1],r);return r&&Il(r,r.next)&&(Kc(r),r=r.next),r}function Co(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Il(t,t.next)||pn(t.prev,t,t.next)===0)){if(Kc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zc(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Z1(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?k1(s,n,i,r):z1(s)){e.push(l.i,s.i,c.i),Kc(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=V1(Co(s),e),Zc(s,e,t,n,i,r,2)):a===2&&G1(s,e,t,n,i,r):Zc(Co(s),e,t,n,i,r,1);break}}}function z1(s){const e=s.prev,t=s,n=s.next;if(pn(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),f=Math.max(i,r,a),d=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&_c(i,o,r,l,a,c,p.x,p.y)&&pn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function k1(s,e,t,n){const i=s.prev,r=s,a=s.next;if(pn(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),g=am(d,p,e,t,n),y=am(_,m,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=g&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&_c(o,h,l,u,c,f,x.x,x.y)&&pn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&_c(o,h,l,u,c,f,v.x,v.y)&&pn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&_c(o,h,l,u,c,f,x.x,x.y)&&pn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&_c(o,h,l,u,c,f,v.x,v.y)&&pn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function V1(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Il(n,i)&&Yv(n,t,t.next,i)&&$c(n,i)&&$c(i,n)&&(e.push(n.i,t.i,i.i),Kc(t),Kc(t.next),t=s=i),t=t.next}while(t!==s);return Co(t)}function G1(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J1(a,o)){let l=qv(a,o);a=Co(a,a.next),l=Co(l,l.next),Zc(a,e,t,n,i,r,0),Zc(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function H1(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Wv(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(K1(c))}i.sort(W1);for(let r=0;r<i.length;r++)t=X1(i[r],t);return t}function W1(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function X1(s,e){const t=Y1(s,e);if(!t)return e;const n=qv(t,s);return Co(n,n.next),Co(t,t.next)}function Y1(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(Il(s,t))return t;do{if(Il(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xv(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);$c(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&q1(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function q1(s,e){return pn(s.prev,s,e.prev)<0&&pn(e.next,s,s.next)<0}function Z1(s,e,t,n){let i=s;do i.z===0&&(i.z=am(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$1(i)}function $1(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function am(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function K1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Xv(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function _c(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Xv(s,e,t,n,i,r,a,o)}function J1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!j1(s,e)&&($c(s,e)&&$c(e,s)&&Q1(s,e)&&(pn(s.prev,s,e.prev)||pn(s,e.prev,e))||Il(s,e)&&pn(s.prev,s,s.next)>0&&pn(e.prev,e,e.next)>0)}function pn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Il(s,e){return s.x===e.x&&s.y===e.y}function Yv(s,e,t,n){const i=yu(pn(s,e,t)),r=yu(pn(s,e,n)),a=yu(pn(t,n,s)),o=yu(pn(t,n,e));return!!(i!==r&&a!==o||i===0&&vu(s,t,e)||r===0&&vu(s,n,e)||a===0&&vu(t,s,n)||o===0&&vu(t,e,n))}function vu(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function yu(s){return s>0?1:s<0?-1:0}function j1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Yv(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function $c(s,e){return pn(s.prev,s,s.next)<0?pn(s,e,s.next)>=0&&pn(s,s.prev,e)>=0:pn(s,e,s.prev)<0||pn(s,s.next,e)<0}function Q1(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function qv(s,e){const t=om(s.i,s.x,s.y),n=om(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function x0(s,e,t,n){const i=om(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function om(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ew(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class tw{static triangulate(e,t,n=2){return B1(e,t,n)}}class Xr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Xr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];v0(e),y0(n,e);let a=e.length;t.forEach(v0);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,y0(n,t[l]);const o=tw.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function v0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function y0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class gd extends yt{constructor(e=new vo([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:nw;let x,v=!1,b,w,A,R;if(g){x=g.getSpacedPoints(h),v=!0,f=!1;const Q=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,Q),w=new D,A=new D,R=new D}f||(m=0,d=0,p=0,_=0);const M=o.extractPoints(c);let T=M.shape;const U=M.holes;if(!Xr.isClockWise(T)){T=T.reverse();for(let Q=0,_e=U.length;Q<_e;Q++){const he=U[Q];Xr.isClockWise(he)&&(U[Q]=he.reverse())}}function B(Q){const he=10000000000000001e-36;let Ee=Q[0];for(let N=1;N<=Q.length;N++){const je=N%Q.length,Ue=Q[je],Xe=Ue.x-Ee.x,ye=Ue.y-Ee.y,L=Xe*Xe+ye*ye,S=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ee.x),Math.abs(Ee.y)),k=he*S*S;if(L<=k){Q.splice(je,1),N--;continue}Ee=Ue}}B(T),U.forEach(B);const q=U.length,$=T;for(let Q=0;Q<q;Q++){const _e=U[Q];T=T.concat(_e)}function W(Q,_e,he){return _e||et("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(_e,he)}const Y=T.length;function te(Q,_e,he){let Ee,N,je;const Ue=Q.x-_e.x,Xe=Q.y-_e.y,ye=he.x-Q.x,L=he.y-Q.y,S=Ue*Ue+Xe*Xe,k=Ue*L-Xe*ye;if(Math.abs(k)>Number.EPSILON){const ee=Math.sqrt(S),ce=Math.sqrt(ye*ye+L*L),ne=_e.x-Xe/ee,qe=_e.y+Ue/ee,Me=he.x-L/ce,Pe=he.y+ye/ce,st=((Me-ne)*L-(Pe-qe)*ye)/(Ue*L-Xe*ye);Ee=ne+Ue*st-Q.x,N=qe+Xe*st-Q.y;const me=Ee*Ee+N*N;if(me<=2)return new ae(Ee,N);je=Math.sqrt(me/2)}else{let ee=!1;Ue>Number.EPSILON?ye>Number.EPSILON&&(ee=!0):Ue<-Number.EPSILON?ye<-Number.EPSILON&&(ee=!0):Math.sign(Xe)===Math.sign(L)&&(ee=!0),ee?(Ee=-Xe,N=Ue,je=Math.sqrt(S)):(Ee=Ue,N=Xe,je=Math.sqrt(S/2))}return new ae(Ee/je,N/je)}const de=[];for(let Q=0,_e=$.length,he=_e-1,Ee=Q+1;Q<_e;Q++,he++,Ee++)he===_e&&(he=0),Ee===_e&&(Ee=0),de[Q]=te($[Q],$[he],$[Ee]);const pe=[];let be,Je=de.concat();for(let Q=0,_e=q;Q<_e;Q++){const he=U[Q];be=[];for(let Ee=0,N=he.length,je=N-1,Ue=Ee+1;Ee<N;Ee++,je++,Ue++)je===N&&(je=0),Ue===N&&(Ue=0),be[Ee]=te(he[Ee],he[je],he[Ue]);pe.push(be),Je=Je.concat(be)}let rt;if(m===0)rt=Xr.triangulateShape($,U);else{const Q=[],_e=[];for(let he=0;he<m;he++){const Ee=he/m,N=d*Math.cos(Ee*Math.PI/2),je=p*Math.sin(Ee*Math.PI/2)+_;for(let Ue=0,Xe=$.length;Ue<Xe;Ue++){const ye=W($[Ue],de[Ue],je);le(ye.x,ye.y,-N),Ee===0&&Q.push(ye)}for(let Ue=0,Xe=q;Ue<Xe;Ue++){const ye=U[Ue];be=pe[Ue];const L=[];for(let S=0,k=ye.length;S<k;S++){const ee=W(ye[S],be[S],je);le(ee.x,ee.y,-N),Ee===0&&L.push(ee)}Ee===0&&_e.push(L)}}rt=Xr.triangulateShape(Q,_e)}const bt=rt.length,Rt=p+_;for(let Q=0;Q<Y;Q++){const _e=f?W(T[Q],Je[Q],Rt):T[Q];v?(A.copy(b.normals[0]).multiplyScalar(_e.x),w.copy(b.binormals[0]).multiplyScalar(_e.y),R.copy(x[0]).add(A).add(w),le(R.x,R.y,R.z)):le(_e.x,_e.y,0)}for(let Q=1;Q<=h;Q++)for(let _e=0;_e<Y;_e++){const he=f?W(T[_e],Je[_e],Rt):T[_e];v?(A.copy(b.normals[Q]).multiplyScalar(he.x),w.copy(b.binormals[Q]).multiplyScalar(he.y),R.copy(x[Q]).add(A).add(w),le(R.x,R.y,R.z)):le(he.x,he.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const _e=Q/m,he=d*Math.cos(_e*Math.PI/2),Ee=p*Math.sin(_e*Math.PI/2)+_;for(let N=0,je=$.length;N<je;N++){const Ue=W($[N],de[N],Ee);le(Ue.x,Ue.y,u+he)}for(let N=0,je=U.length;N<je;N++){const Ue=U[N];be=pe[N];for(let Xe=0,ye=Ue.length;Xe<ye;Xe++){const L=W(Ue[Xe],be[Xe],Ee);v?le(L.x,L.y+x[h-1].y,x[h-1].x+he):le(L.x,L.y,u+he)}}}oe(),ue();function oe(){const Q=i.length/3;if(f){let _e=0,he=Y*_e;for(let Ee=0;Ee<bt;Ee++){const N=rt[Ee];Be(N[2]+he,N[1]+he,N[0]+he)}_e=h+m*2,he=Y*_e;for(let Ee=0;Ee<bt;Ee++){const N=rt[Ee];Be(N[0]+he,N[1]+he,N[2]+he)}}else{for(let _e=0;_e<bt;_e++){const he=rt[_e];Be(he[2],he[1],he[0])}for(let _e=0;_e<bt;_e++){const he=rt[_e];Be(he[0]+Y*h,he[1]+Y*h,he[2]+Y*h)}}n.addGroup(Q,i.length/3-Q,0)}function ue(){const Q=i.length/3;let _e=0;ve($,_e),_e+=$.length;for(let he=0,Ee=U.length;he<Ee;he++){const N=U[he];ve(N,_e),_e+=N.length}n.addGroup(Q,i.length/3-Q,1)}function ve(Q,_e){let he=Q.length;for(;--he>=0;){const Ee=he;let N=he-1;N<0&&(N=Q.length-1);for(let je=0,Ue=h+m*2;je<Ue;je++){const Xe=Y*je,ye=Y*(je+1),L=_e+Ee+Xe,S=_e+N+Xe,k=_e+N+ye,ee=_e+Ee+ye;Oe(L,S,k,ee)}}}function le(Q,_e,he){l.push(Q),l.push(_e),l.push(he)}function Be(Q,_e,he){it(Q),it(_e),it(he);const Ee=i.length/3,N=y.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);tt(N[0]),tt(N[1]),tt(N[2])}function Oe(Q,_e,he,Ee){it(Q),it(_e),it(Ee),it(_e),it(he),it(Ee);const N=i.length/3,je=y.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);tt(je[0]),tt(je[1]),tt(je[3]),tt(je[1]),tt(je[2]),tt(je[3])}function it(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function tt(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return iw(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Df[i.type]().fromJSON(i)),new gd(n,e.options)}}const nw={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-u),new ae(f,1-p),new ae(_,1-g)]:[new ae(o,1-l),new ae(h,1-u),new ae(d,1-p),new ae(m,1-g)]}};function iw(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _d extends Ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _d(e.radius,e.detail)}}class xd extends yt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=dt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,f=new ae,d=new D,p=new D,_=new D;let m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=t;y++){const x=n+y*h*i,v=Math.sin(x),b=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*b,a.push(u.x,u.y,u.z),f.x=y/t,f.y=w/(e.length-1),o.push(f.x,f.y);const A=l[3*w+0]*v,R=l[3*w+1],M=l[3*w+0]*b;c.push(A,R,M)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,b=v,w=v+e.length,A=v+e.length+1,R=v+1;r.push(b,w,R),r.push(A,R,w)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.points,e.segments,e.phiStart,e.phiLength)}}class bh extends Ca{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bh(e.radius,e.detail)}}class Vl extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const y=g*f-a;for(let x=0;x<c;x++){const v=x*u-r;p.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const x=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),w=y+1+c*g;d.push(x,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class vd extends yt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new D,p=new ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const y=g+m,x=y,v=y+n+1,b=y+n+2,w=y+1;o.push(x,v,w),o.push(v,b,w)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yd extends yt{constructor(e=new vo([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;Xr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];Xr.isClockWise(y)===!0&&(p[m]=y.reverse())}const _=Xr.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){const y=d[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=_.length;m<g;m++){const y=_[m],x=y[0]+u,v=y[1]+u,b=y[2]+u;n.push(x,v,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return rw(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new yd(n,e.curveSegments)}}function rw(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Mh extends yt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const y=[],x=g/n;let v=0;g===0&&a===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const w=b/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const x=h[g][y+1],v=h[g][y],b=h[g+1][y],w=h[g+1][y+1];(g!==0||a>0)&&d.push(x,v,w),(g!==n-1||l<Math.PI)&&d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bd extends Ca{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bd(e.radius,e.detail)}}class Md extends yt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,y=(i+1)*d+p;a.push(_,m,y),a.push(m,g,y)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sd extends yt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new D,f=new D,d=new D,p=new D,_=new D,m=new D,g=new D;for(let x=0;x<=n;++x){const v=x/n*r*Math.PI*2;y(v,r,a,e,d),y(v+.01,r,a,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let b=0;b<=i;++b){const w=b/i*Math.PI*2,A=-t*Math.cos(w),R=t*Math.sin(w);u.x=d.x+(A*g.x+R*_.x),u.y=d.y+(A*g.y+R*_.y),u.z=d.z+(A*g.z+R*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(x/n),h.push(b/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){const b=(i+1)*(x-1)+(v-1),w=(i+1)*x+(v-1),A=(i+1)*x+v,R=(i+1)*(x-1)+v;o.push(b,w,R),o.push(w,A,R)}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2));function y(x,v,b,w,A){const R=Math.cos(x),M=Math.sin(x),T=b/v*x,U=Math.cos(T);A.x=w*(2+U)*.5*R,A.y=w*(2+U)*M*.5,A.z=w*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class wd extends yt{constructor(e=new xg(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new ae;let h=new D;const u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),g()}function m(x){h=e.getPointAt(x/t,h);const v=a.normals[x],b=a.binormals[x];for(let w=0;w<=i;w++){const A=w/i*Math.PI*2,R=Math.sin(A),M=-Math.cos(A);l.x=M*v.x+R*b.x,l.y=M*v.y+R*b.y,l.z=M*v.z+R*b.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){const b=(i+1)*(x-1)+(v-1),w=(i+1)*x+(v-1),A=(i+1)*x+v,R=(i+1)*(x-1)+v;p.push(b,w,R),p.push(w,A,R)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)c.x=x/t,c.y=v/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wd(new Df[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Zv extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),y=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),b0(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),b0(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function b0(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var M0=Object.freeze({__proto__:null,BoxGeometry:Po,CapsuleGeometry:fd,CircleGeometry:dd,ConeGeometry:yh,CylinderGeometry:vh,DodecahedronGeometry:pd,EdgesGeometry:Bv,ExtrudeGeometry:gd,IcosahedronGeometry:_d,LatheGeometry:xd,OctahedronGeometry:bh,PlaneGeometry:Vl,PolyhedronGeometry:Ca,RingGeometry:vd,ShapeGeometry:yd,SphereGeometry:Mh,TetrahedronGeometry:bd,TorusGeometry:Md,TorusKnotGeometry:Sd,TubeGeometry:wd,WireframeGeometry:Zv});class $v extends bi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class yg extends Dr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bg extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kv extends bg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jv extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends bi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new We(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Qv extends bi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ey extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mg extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ty extends bi{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new We(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends ki{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function po(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function iy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lm(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function wg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function sw(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*i;if(!(p<t||p>=n)){u.push(c.times[d]);for(let _=0;_<h;++_)f.push(c.values[d*h+_])}}u.length!==0&&(c.times=po(u,c.times.constructor),c.values=po(f,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function aw(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const g=h,y=u-h;_=o.values.slice(g,y)}else if(r>=o.times[p]){const g=p*u+h,y=g+u-h;_=o.values.slice(g,y)}else{const g=o.createInterpolant(),y=h,x=u-h;g.evaluate(r),_=g.resultBuffer.slice(y,x)}l==="quaternion"&&new vi().fromArray(_).normalize().conjugate().toArray(_);const m=c.times.length;for(let g=0;g<m;++g){const y=g*d+f;if(l==="quaternion")vi.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{const x=d-f*2;for(let v=0;v<x;++v)c.values[y+v]-=_[v]}}}return s.blendMode=tg,s}class ow{static convertArray(e,t){return po(e,t)}static isTypedArray(e){return Mv(e)}static getKeyframeOrder(e){return iy(e)}static sortedArray(e,t,n){return lm(e,t,n)}static flattenJSON(e,t,n,i){wg(e,t,n,i)}static subclip(e,t,n,i,r=30){return sw(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return aw(e,t,n,i)}}class Sh{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ry extends Sh{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uo,endingEnd:uo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fo:r=e,o=2*t-n;break;case Hc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fo:a=e,l=2*n-t;break;case Hc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,x=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let b=0;b!==o;++b)r[b]=g*a[h+b]+y*a[c+b]+x*a[l+b]+v*a[u+b];return r}}class Tg extends Sh{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class sy extends Sh{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ry(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gc:t=this.InterpolantFactoryMethodDiscrete;break;case Rf:t=this.InterpolantFactoryMethodLinear;break;case Nu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gc;case this.InterpolantFactoryMethodLinear:return Rf;case this.InterpolantFactoryMethodSmooth:return Nu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Mv(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nu,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nr.prototype.ValueTypeName="";Nr.prototype.TimeBufferType=Float32Array;Nr.prototype.ValueBufferType=Float32Array;Nr.prototype.DefaultInterpolation=Rf;class Io extends Nr{constructor(e,t,n){super(e,t,n)}}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=Gc;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Eg extends Nr{constructor(e,t,n,i){super(e,t,n,i)}}Eg.prototype.ValueTypeName="color";class Jc extends Nr{constructor(e,t,n,i){super(e,t,n,i)}}Jc.prototype.ValueTypeName="number";class ay extends Sh{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class wh extends Nr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ay(this.times,this.values,this.getValueSize(),e)}}wh.prototype.ValueTypeName="quaternion";wh.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Nr{constructor(e,t,n){super(e,t,n)}}Do.prototype.ValueTypeName="string";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Gc;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class jc extends Nr{constructor(e,t,n,i){super(e,t,n,i)}}jc.prototype.ValueTypeName="vector";class Qc{constructor(e="",t=-1,n=[],i=Qf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cw(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Nr.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=iy(l);l=lm(l,1,h),c=lm(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Jc(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Le("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return et("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const m=[],g=[];wg(d,m,g,p),m.length!==0&&_.push(new u(f,m,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let y=0;y!==f[p].morphTargets.length;++y){const x=f[p];m.push(x.time),g.push(x.morphTarget===_?1:0)}i.push(new Jc(".morphTargetInfluence["+_+"]",m,g))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(jc,d+".position",f,"pos",i),n(wh,d+".quaternion",f,"rot",i),n(jc,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function lw(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jc;case"vector":case"vector2":case"vector3":case"vector4":return jc;case"color":return Eg;case"quaternion":return wh;case"bool":case"boolean":return Io;case"string":return Do}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cw(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lw(s.type);if(s.times===void 0){const t=[],n=[];wg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ls={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ag{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Lo=new Ag;class nr{constructor(e){this.manager=e!==void 0?e:Lo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ls={};class hw extends Error{constructor(e,t){super(e),this.response=t}}class Gs extends nr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ls.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ls[e]!==void 0){Ls[e].push({onLoad:t,onProgress:n,onError:i});return}Ls[e]=[],Ls[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ls[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){y();function y(){u.read().then(({done:x,value:v})=>{if(x)g.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let w=0,A=h.length;w<A;w++){const R=h[w];R.onProgress&&R.onProgress(b)}g.enqueue(v),y()}},x=>{g.error(x)})}}});return new Response(m)}else throw new hw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ls.add(`file:${e}`,c);const h=Ls[e];delete Ls[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Ls[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ls[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class uw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Gs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):et(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Qc.parse(e[n]);t.push(i)}return t}}class fw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new ud,l=new Gs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(f){const d=r.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=rn),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)a[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),a[p].format=f.format,a[p].width=f.width,a[p].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=rn),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}const sl=new WeakMap;class eh extends nr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ls.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=sl.get(a);u===void 0&&(u=[],sl.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Yc("img");function l(){h(),t&&t(this);const u=sl.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}sl.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ls.remove(`image:${e}`);const f=sl.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}sl.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ls.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class dw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=new xh;r.colorSpace=qi;const a=new eh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class pw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new qr,o=new Gs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{h(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ki,a.wrapT=c.wrapT!==void 0?c.wrapT:Ki,a.magFilter=c.magFilter!==void 0?c.magFilter:rn,a.minFilter=c.minFilter!==void 0?c.minFilter:rn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=os),c.mipmapCount===1&&(a.minFilter=rn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class mw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=new Mn,a=new eh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ra extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class oy extends Ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wp=new ot,S0=new D,w0=new D;class Cg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;S0.setFromMatrixPosition(e.matrixWorld),t.position.copy(S0),w0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(w0),t.updateMatrixWorld(),wp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gw extends Cg{constructor(){super(new jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Al*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ly extends Ra{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _w extends Cg{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0}}class cy extends Ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _w}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gl extends sd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xw extends Cg{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hy extends Ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new xw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class uy extends Ra{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fy extends Ra{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Rg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class dy extends Ra{constructor(e=new Rg,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Td extends nr{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new Gs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):et(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&Le("MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new We().setHex(a.value);break;case"v2":i.uniforms[r].value=new ae().fromArray(a.value);break;case"v3":i.uniforms[r].value=new D().fromArray(a.value);break;case"v4":i.uniforms[r].value=new Yt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new wt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new ot().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ae().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Td.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:$v,SpriteMaterial:hg,RawShaderMaterial:yg,ShaderMaterial:Dr,PointsMaterial:fg,MeshPhysicalMaterial:Kv,MeshStandardMaterial:bg,MeshPhongMaterial:Jv,MeshToonMaterial:jv,MeshNormalMaterial:Qv,MeshLambertMaterial:ey,MeshDepthMaterial:Mg,MeshDistanceMaterial:Sg,MeshBasicMaterial:Ys,MeshMatcapMaterial:ty,LineDashedMaterial:ny,LineBasicMaterial:ki,Material:bi};return new t[e]}}class cm{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class py extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class my extends nr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Gs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):et(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=r(d,m.buffer),y=dl(m.type,g),x=new ld(y,m.stride);return x.uuid=m.uuid,t[p]=x,x}function r(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const a=e.isInstancedBufferGeometry?new py:new yt,o=e.data.index;if(o!==void 0){const d=dl(o.type,o.array);a.setIndex(new jt(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Ao(m,p.itemSize,p.offset,p.normalized)}else{const m=dl(p.type,p.array),g=p.isInstancedBufferAttribute?Rl:jt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],_=[];for(let m=0,g=p.length;m<g;m++){const y=p[m];let x;if(y.isInterleavedBufferAttribute){const v=i(e.data,y.data);x=new Ao(v,y.itemSize,y.offset,y.normalized)}else{const v=dl(y.type,y.array);x=new jt(v,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),_.push(x)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const _=u[d];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;return f!==void 0&&(a.boundingSphere=new Fn().fromJSON(f)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class vw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?cm.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Gs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),et("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?cm.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Gs(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new vo().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new cd().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new my;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in M0?o=M0[l.type].fromJSON(l,t):Le(`ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Td;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Qc.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:dl(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Ag(t);r=new eh(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new qr(g.data,g.width,g.height)))}i[u.uuid]=new da(d)}else{const d=o(u.url);i[u.uuid]=new da(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:dl(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new eh(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new qr(p.data,p.width,p.height)))}n[l.uuid]=new da(h)}else{const h=await r(l.url);n[l.uuid]=new da(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(Le("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&Le('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&Le("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new xh,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new qr:h=new Mn,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,yw)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],T0),h.wrapT=n(o.wrap[1],T0)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,E0)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,E0)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(f){return t[f]===void 0&&Le("ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];n[m]===void 0&&Le("ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&Le("ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&Le("ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":a=new cg,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new We(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new od(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ad(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new jn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Gl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new uy(e.color,e.intensity);break;case"DirectionalLight":a=new hy(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new cy(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new fy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ly(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new oy(e.color,e.groundColor,e.intensity);break;case"LightProbe":const f=new Rg().fromArray(e.sh);a=new dy(f,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Iv(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Rn(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const d=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new Dv(h,u,d),a.instanceMatrix=new Rl(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Rl(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Lv(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,y=null;return m.boundingBox!==void 0&&(g=new On().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(y=new Fn().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:y}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Fn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new On().fromJSON(e.boundingBox));break;case"LOD":a=new Pv;break;case"Line":a=new Sa(o(e.geometry),l(e.material));break;case"LineLoop":a=new Nv(o(e.geometry),l(e.material));break;case"LineSegments":a=new _s(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Uv(o(e.geometry),l(e.material));break;case"Sprite":a=new Rv(l(e.material));break;case"Group":a=new pa;break;case"Bone":a=new ug;break;default:a=new kt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,i,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?Le("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new kt}})}}const yw={UVMapping:Yf,CubeReflectionMapping:fs,CubeRefractionMapping:ba,EquirectangularReflectionMapping:Bc,EquirectangularRefractionMapping:zc,CubeUVReflectionMapping:zl},T0={RepeatWrapping:kc,ClampToEdgeWrapping:Ki,MirroredRepeatWrapping:Vc},E0={NearestFilter:Cn,NearestMipmapNearestFilter:Zm,NearestMipmapLinearFilter:fl,LinearFilter:rn,LinearMipmapNearestFilter:wc,LinearMipmapLinearFilter:os},Tp=new WeakMap;class bw extends nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ls.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Tp.has(a)===!0)i&&i(Tp.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Tp.set(l,c),ls.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ls.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let bu;class Pg{static getContext(){return bu===void 0&&(bu=new(window.AudioContext||window.webkitAudioContext)),bu}static setContext(e){bu=e}}class Mw extends nr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Gs(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Pg.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):et(l),r.manager.itemError(e)}}}const A0=new ot,C0=new ot,Ka=new ot;class Sw{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new jn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new jn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ka.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(xo*t.fov*.5)/t.zoom;let o,l;C0.elements[12]=-i,A0.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Ka.elements[0]=2*t.near/(l-o),Ka.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Ka),o=-a*t.aspect-r,l=a*t.aspect-r,Ka.elements[0]=2*t.near/(l-o),Ka.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Ka)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(C0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(A0)}}class gy extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _y{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ja=new D,Ep=new vi,ww=new D,ja=new D,Qa=new D;class Tw extends kt{constructor(){super(),this.type="AudioListener",this.context=Pg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _y}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ja,Ep,ww),ja.set(0,0,-1).applyQuaternion(Ep),Qa.set(0,1,0).applyQuaternion(Ep),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ja.x,n),t.positionY.linearRampToValueAtTime(Ja.y,n),t.positionZ.linearRampToValueAtTime(Ja.z,n),t.forwardX.linearRampToValueAtTime(ja.x,n),t.forwardY.linearRampToValueAtTime(ja.y,n),t.forwardZ.linearRampToValueAtTime(ja.z,n),t.upX.linearRampToValueAtTime(Qa.x,n),t.upY.linearRampToValueAtTime(Qa.y,n),t.upZ.linearRampToValueAtTime(Qa.z,n)}else t.setPosition(Ja.x,Ja.y,Ja.z),t.setOrientation(ja.x,ja.y,ja.z,Qa.x,Qa.y,Qa.z)}}class xy extends kt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Le("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Le("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Le("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Le("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const eo=new D,R0=new vi,Ew=new D,to=new D;class Aw extends xy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(eo,R0,Ew),to.set(0,0,1).applyQuaternion(R0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(eo.x,n),t.positionY.linearRampToValueAtTime(eo.y,n),t.positionZ.linearRampToValueAtTime(eo.z,n),t.orientationX.linearRampToValueAtTime(to.x,n),t.orientationY.linearRampToValueAtTime(to.y,n),t.orientationZ.linearRampToValueAtTime(to.z,n)}else t.setPosition(eo.x,eo.y,eo.z),t.setOrientation(to.x,to.y,to.z)}}class Cw{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class vy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){vi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;vi.multiplyQuaternionsFlat(e,a,e,t,e,n),vi.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ig="\\[\\]\\.:\\/",Rw=new RegExp("["+Ig+"]","g"),Dg="[^"+Ig+"]",Pw="[^"+Ig.replace("\\.","")+"]",Iw=/((?:WC+[\/:])*)/.source.replace("WC",Dg),Dw=/(WCOD+)?/.source.replace("WCOD",Pw),Lw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dg),Nw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dg),Uw=new RegExp("^"+Iw+Dw+Lw+Nw+"$"),Ow=["material","materials","bones","map"];class Fw{constructor(e,t,n){const i=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ht{constructor(e,t,n){this.path=t,this.parsedPath=n||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,t,n):new Ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rw,"")}static parseTrackName(e){const t=Uw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ow.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=Fw;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bw{constructor(){this.isAnimationObjectGroup=!0,this.uuid=gr(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(f);for(let _=0,m=a;_!==m;++_)r[_].push(new Ht(f,n[_],i[_]))}else if(p<c){o=e[p];const _=--c,m=e[_];t[m.uuid]=p,e[p]=m,t[d]=_,e[_]=f;for(let g=0,y=a;g!==y;++g){const x=r[g],v=x[_];let b=x[p];x[p]=v,b===void 0&&(b=new Ht(f,n[g],i[g])),x[_]=b}}else e[p]!==o&&et("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let d=0,p=i;d!==p;++d){const _=n[d],m=_[u],g=_[h];_[h]=m,_[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],p=--a,_=e[p];t[d.uuid]=u,e[u]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let m=0,g=i;m!==g;++m){const y=n[m],x=y[f],v=y[p];y[u]=x,y[f]=v,y.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[u]=m[f],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let f=h,d=l.length;f!==d;++f){const p=l[f];u[f]=new Ht(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class yy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:uo,endingEnd:uo};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case tg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Qf:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===fv;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===hv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=fo,i.endingEnd=fo):(e?i.endingStart=this.zeroSlopeAtStart?fo:uo:i.endingStart=Hc,t?i.endingEnd=this.zeroSlopeAtEnd?fo:uo:i.endingEnd=Hc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const zw=new Float32Array(1);class kw extends gs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new vy(Ht.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Tg(new Float32Array(2),new Float32Array(2),1,zw),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Qc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Qf),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new yy(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Qc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Vw extends rg{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new id(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Lg{constructor(e){this.value=e}clone(){return new Lg(this.value.clone===void 0?this.value:this.value.clone())}}let Gw=0;class Hw extends gs{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Gw++}),this.name="",this.usage=Xc,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ww extends ld{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Xw{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const P0=new ot;class Yw{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return P0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(P0),this}intersectObject(e,t=!0,n=[]){return hm(e,this,n,t),n.sort(I0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)hm(e[i],this,n,t);return n.sort(I0),n}}function I0(s,e){return s.distance-e.distance}function hm(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)hm(r[a],e,t,!0)}}class qw{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zw.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Zw(){this._document.hidden===!1&&this.reset()}class um{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $w{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Ng{constructor(e,t,n,i){Ng.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const D0=new ae;class Kw{constructor(e=new ae(1/0,1/0),t=new ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=D0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,D0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const L0=new D,Mu=new D,al=new D,ol=new D,Ap=new D,Jw=new D,jw=new D;class by{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){L0.subVectors(e,this.start),Mu.subVectors(this.end,this.start);const n=Mu.dot(Mu);let r=Mu.dot(L0)/n;return t&&(r=dt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Jw,n=jw){const i=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,h=e.end;al.subVectors(c,o),ol.subVectors(h,l),Ap.subVectors(o,l);const u=al.dot(al),f=ol.dot(ol),d=ol.dot(Ap);if(u<=i&&f<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(u<=i)r=0,a=d/f,a=dt(a,0,1);else{const p=al.dot(Ap);if(f<=i)a=0,r=dt(-p/u,0,1);else{const _=al.dot(ol),m=u*f-_*_;m!==0?r=dt((_*d-p*f)/m,0,1):r=0,a=(_*r+d)/f,a<0?(a=0,r=dt(-p/u,0,1)):a>1&&(a=1,r=dt((_-p)/u,0,1))}}return t.copy(o).add(al.multiplyScalar(r)),n.copy(l).add(ol.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const N0=new D;class Qw extends kt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new yt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ye(i,3));const r=new ki({fog:!1,toneMapped:!1});this.cone=new _s(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),N0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(N0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const la=new D,Su=new ot,Cp=new ot;class eT extends _s{constructor(e){const t=My(e),n=new yt,i=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ye(i,3)),n.setAttribute("color",new Ye(r,3));const a=new ki({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new We(255),l=new We(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Cp.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Su.multiplyMatrices(Cp,o.matrixWorld),la.setFromMatrixPosition(Su),i.setXYZ(a,la.x,la.y,la.z),Su.multiplyMatrices(Cp,o.parent.matrixWorld),la.setFromMatrixPosition(Su),i.setXYZ(a+1,la.x,la.y,la.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function My(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...My(s.children[t]));return e}class tT extends Rn{constructor(e,t,n){const i=new Mh(t,4,2),r=new Ys({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const nT=new D,U0=new We,O0=new We;class iT extends kt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new bh(t);i.rotateY(Math.PI*.5),this.material=new Ys({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new jt(a,3)),this.add(new Rn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");U0.copy(this.light.color),O0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?U0:O0;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(nT.setFromMatrixPosition(this.light.matrixWorld).negate())}}class rT extends _s{constructor(e=10,t=10,n=4473924,i=8947848){n=new We(n),i=new We(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=f===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new yt;h.setAttribute("position",new Ye(l,3)),h.setAttribute("color",new Ye(c,3));const u=new ki({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sT extends _s{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new We(r),a=new We(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,p);const _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const f=u&1?r:a,d=e-e/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d;o.push(m,0,g),l.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d,o.push(m,0,g),l.push(f.r,f.g,f.b)}}const c=new yt;c.setAttribute("position",new Ye(o,3)),c.setAttribute("color",new Ye(l,3));const h=new ki({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const F0=new D,wu=new D,B0=new D;class aT extends kt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new yt;i.setAttribute("position",new Ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new ki({fog:!1,toneMapped:!1});this.lightPlane=new Sa(i,r),this.add(this.lightPlane),i=new yt,i.setAttribute("position",new Ye([0,0,0,0,0,1],3)),this.targetLine=new Sa(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),F0.setFromMatrixPosition(this.light.matrixWorld),wu.setFromMatrixPosition(this.light.target.matrixWorld),B0.subVectors(wu,F0),this.lightPlane.lookAt(wu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(wu),this.targetLine.scale.z=B0.length()}}const Tu=new D,yn=new sd;class oT extends _s{constructor(e){const t=new yt,n=new ki({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Ye(i,3)),t.setAttribute("color",new Ye(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new We(16755200),h=new We(16711680),u=new We(43775),f=new We(16777215),d=new We(3355443);this.setColors(c,h,u,f,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let r,a;if(yn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===dr)r=-1,a=1;else if(this.camera.coordinateSystem===Tl)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);En("c",t,e,yn,0,0,r),En("t",t,e,yn,0,0,a),En("n1",t,e,yn,-1,-1,r),En("n2",t,e,yn,n,-1,r),En("n3",t,e,yn,-1,i,r),En("n4",t,e,yn,n,i,r),En("f1",t,e,yn,-1,-1,a),En("f2",t,e,yn,n,-1,a),En("f3",t,e,yn,-1,i,a),En("f4",t,e,yn,n,i,a),En("u1",t,e,yn,n*.7,i*1.1,r),En("u2",t,e,yn,-1*.7,i*1.1,r),En("u3",t,e,yn,0,i*2,r),En("cf1",t,e,yn,-1,0,a),En("cf2",t,e,yn,n,0,a),En("cf3",t,e,yn,0,-1,a),En("cf4",t,e,yn,0,i,a),En("cn1",t,e,yn,-1,0,r),En("cn2",t,e,yn,n,0,r),En("cn3",t,e,yn,0,-1,r),En("cn4",t,e,yn,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function En(s,e,t,n,i,r,a){Tu.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Tu.x,Tu.y,Tu.z)}}const Eu=new On;class lT extends _s{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new yt;r.setIndex(new jt(n,1)),r.setAttribute("position",new jt(i,3)),super(r,new ki({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Eu.setFromObject(this.object),Eu.isEmpty())return;const e=Eu.min,t=Eu.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class cT extends _s{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new yt;r.setIndex(new jt(n,1)),r.setAttribute("position",new Ye(i,3)),super(r,new ki({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class hT extends Sa{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new yt;a.setAttribute("position",new Ye(r,3)),a.computeBoundingSphere(),super(a,new ki({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new yt;l.setAttribute("position",new Ye(o,3)),l.computeBoundingSphere(),this.add(new Rn(l,new Ys({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const z0=new D;let Au,Rp;class uT extends kt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Au===void 0&&(Au=new yt,Au.setAttribute("position",new Ye([0,0,0,0,1,0],3)),Rp=new yh(.5,1,5,1),Rp.translate(0,-.5,0)),this.position.copy(t),this.line=new Sa(Au,new ki({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Rn(Rp,new Ys({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{z0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(z0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class fT extends _s{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new yt;i.setAttribute("position",new Ye(t,3)),i.setAttribute("color",new Ye(n,3));const r=new ki({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new We,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dT{constructor(){this.type="ShapePath",this.color=new We,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Lf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const y=[];for(let x=0,v=g.length;x<v;x++){const b=g[x],w=new vo;w.curves=b.curves,y.push(w)}return y}function n(g,y){const x=y.length;let v=!1;for(let b=x-1,w=0;w<x;b=w++){let A=y[b],R=y[w],M=R.x-A.x,T=R.y-A.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(A=y[w],M=-M,R=y[b],T=-T),g.y<A.y||g.y>R.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const U=T*(g.x-A.x)-M*(g.y-A.y);if(U===0)return!0;if(U<0)continue;v=!v}}else{if(g.y!==A.y)continue;if(R.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=R.x)return!0}}return v}const i=Xr.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new vo,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let g=0,y=r.length;g<y;g++)o=r[g],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&f[p]&&p++,f[p]={s:new vo,p:_},f[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let g=!1,y=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){const b=d[x];for(let w=0;w<b.length;w++){const A=b[w];let R=!0;for(let M=0;M<f.length;M++)n(A.p,f[M].p)&&(x!==M&&y++,R?(R=!1,u[M].push(A)):g=!0);R&&u[x].push(A)}}y>0&&g===!1&&(d=u)}let m;for(let g=0,y=f.length;g<y;g++){l=f[g].s,c.push(l),m=d[g];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}class Sy extends gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function pT(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function mT(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function gT(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function fm(s,e,t,n){const i=_T(n);switch(t){case Qm:return s*e;case Kf:return s*e/i.components*i.byteLength;case _h:return s*e/i.components*i.byteLength;case To:return s*e*2/i.components*i.byteLength;case Jf:return s*e*2/i.components*i.byteLength;case eg:return s*e*3/i.components*i.byteLength;case Fi:return s*e*4/i.components*i.byteLength;case jf:return s*e*4/i.components*i.byteLength;case Tc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ju:case Qu:return Math.max(s,16)*Math.max(e,8)/4;case Ku:case ju:return Math.max(s,8)*Math.max(e,8)/2;case ef:case tf:case rf:case sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nf:case af:case of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mf:case Sf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Af:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _T(s){switch(s){case Zi:case $m:return{byteLength:1,components:1};case Sl:case Km:case ds:return{byteLength:2,components:1};case Zf:case $f:return{byteLength:2,components:4};case Ir:case qf:case Oi:return{byteLength:4,components:1};case Jm:case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class xT{static contain(e,t){return pT(e,t)}static cover(e,t){return mT(e,t)}static fill(e){return gT(e)}static getByteLength(e,t,n,i){return fm(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wy(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vT(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var yT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ET=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",JT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$A=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:yT,alphahash_pars_fragment:bT,alphamap_fragment:MT,alphamap_pars_fragment:ST,alphatest_fragment:wT,alphatest_pars_fragment:TT,aomap_fragment:ET,aomap_pars_fragment:AT,batching_pars_vertex:CT,batching_vertex:RT,begin_vertex:PT,beginnormal_vertex:IT,bsdfs:DT,iridescence_fragment:LT,bumpmap_pars_fragment:NT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:OT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:BT,color_fragment:zT,color_pars_fragment:kT,color_pars_vertex:VT,color_vertex:GT,common:HT,cube_uv_reflection_fragment:WT,defaultnormal_vertex:XT,displacementmap_pars_vertex:YT,displacementmap_vertex:qT,emissivemap_fragment:ZT,emissivemap_pars_fragment:$T,colorspace_fragment:KT,colorspace_pars_fragment:JT,envmap_fragment:jT,envmap_common_pars_fragment:QT,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:fE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:aE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:hE,lights_pars_begin:uE,lights_toon_fragment:dE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:_E,lights_physical_pars_fragment:xE,lights_fragment_begin:vE,lights_fragment_maps:yE,lights_fragment_end:bE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:TE,map_fragment:EE,map_pars_fragment:AE,map_particle_fragment:CE,map_particle_pars_fragment:RE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:IE,morphinstance_vertex:DE,morphcolor_vertex:LE,morphnormal_vertex:NE,morphtarget_pars_vertex:UE,morphtarget_vertex:OE,normal_fragment_begin:FE,normal_fragment_maps:BE,normal_pars_fragment:zE,normal_pars_vertex:kE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:YE,opaque_fragment:qE,packing:ZE,premultiplied_alpha_fragment:$E,project_vertex:KE,dithering_fragment:JE,dithering_pars_fragment:jE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:tA,shadowmap_pars_vertex:nA,shadowmap_vertex:iA,shadowmask_pars_fragment:rA,skinbase_vertex:sA,skinning_pars_vertex:aA,skinning_vertex:oA,skinnormal_vertex:lA,specularmap_fragment:cA,specularmap_pars_fragment:hA,tonemapping_fragment:uA,tonemapping_pars_fragment:fA,transmission_fragment:dA,transmission_pars_fragment:pA,uv_pars_fragment:mA,uv_pars_vertex:gA,uv_vertex:_A,worldpos_vertex:xA,background_vert:vA,background_frag:yA,backgroundCube_vert:bA,backgroundCube_frag:MA,cube_vert:SA,cube_frag:wA,depth_vert:TA,depth_frag:EA,distance_vert:AA,distance_frag:CA,equirect_vert:RA,equirect_frag:PA,linedashed_vert:IA,linedashed_frag:DA,meshbasic_vert:LA,meshbasic_frag:NA,meshlambert_vert:UA,meshlambert_frag:OA,meshmatcap_vert:FA,meshmatcap_frag:BA,meshnormal_vert:zA,meshnormal_frag:kA,meshphong_vert:VA,meshphong_frag:GA,meshphysical_vert:HA,meshphysical_frag:WA,meshtoon_vert:XA,meshtoon_frag:YA,points_vert:qA,points_frag:ZA,shadow_vert:$A,shadow_frag:KA,sprite_vert:JA,sprite_frag:jA},Ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Rr={basic:{uniforms:Li([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Li([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Li([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Li([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Li([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Li([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Li([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Li([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Li([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Li([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Li([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Li([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Li([Ce.lights,Ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Rr.physical={uniforms:Li([Rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Cu={r:0,b:0,g:0},no=new vr,QA=new ot;function eC(s,e,t,n,i,r,a){const o=new We(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const b=p(x);b===null?g(o,l):b&&b.isColor&&(g(b,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const b=p(v);b&&(b.isCubeTexture||b.mapping===zl)?(h===void 0&&(h=new Rn(new Po(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Cl(Rr.backgroundCube.uniforms),vertexShader:Rr.backgroundCube.vertexShader,fragmentShader:Rr.backgroundCube.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),no.copy(v.backgroundRotation),no.x*=-1,no.y*=-1,no.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(no)),h.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Kt,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Rn(new Vl(2,2),new Dr({name:"BackgroundMaterial",uniforms:Cl(Rr.background.uniforms),vertexShader:Rr.background.vertexShader,fragmentShader:Rr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(Cu,Ev(s)),n.buffers.color.setClear(Cu.r,Cu.g,Cu.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:_,addToRenderList:m,dispose:y}}function tC(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(T,U,F,B,q){let $=!1;const W=u(B,F,U);r!==W&&(r=W,c(r.object)),$=d(T,B,F,q),$&&p(T,B,F,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(T,U,F,B),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function h(T){return s.deleteVertexArray(T)}function u(T,U,F){const B=F.wireframe===!0;let q=n[T.id];q===void 0&&(q={},n[T.id]=q);let $=q[U.id];$===void 0&&($={},q[U.id]=$);let W=$[B];return W===void 0&&(W=f(l()),$[B]=W),W}function f(T){const U=[],F=[],B=[];for(let q=0;q<t;q++)U[q]=0,F[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:B,object:T,attributes:{},index:null}}function d(T,U,F,B){const q=r.attributes,$=U.attributes;let W=0;const Y=F.getAttributes();for(const te in Y)if(Y[te].location>=0){const pe=q[te];let be=$[te];if(be===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(be=T.instanceColor)),pe===void 0||pe.attribute!==be||be&&pe.data!==be.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function p(T,U,F,B){const q={},$=U.attributes;let W=0;const Y=F.getAttributes();for(const te in Y)if(Y[te].location>=0){let pe=$[te];pe===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor));const be={};be.attribute=pe,pe&&pe.data&&(be.data=pe.data),q[te]=be,W++}r.attributes=q,r.attributesNum=W,r.index=B}function _(){const T=r.newAttributes;for(let U=0,F=T.length;U<F;U++)T[U]=0}function m(T){g(T,0)}function g(T,U){const F=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;F[T]=1,B[T]===0&&(s.enableVertexAttribArray(T),B[T]=1),q[T]!==U&&(s.vertexAttribDivisor(T,U),q[T]=U)}function y(){const T=r.newAttributes,U=r.enabledAttributes;for(let F=0,B=U.length;F<B;F++)U[F]!==T[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function x(T,U,F,B,q,$,W){W===!0?s.vertexAttribIPointer(T,U,F,q,$):s.vertexAttribPointer(T,U,F,B,q,$)}function v(T,U,F,B){_();const q=B.attributes,$=F.getAttributes(),W=U.defaultAttributeValues;for(const Y in $){const te=$[Y];if(te.location>=0){let de=q[Y];if(de===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),de!==void 0){const pe=de.normalized,be=de.itemSize,Je=e.get(de);if(Je===void 0)continue;const rt=Je.buffer,bt=Je.type,Rt=Je.bytesPerElement,oe=bt===s.INT||bt===s.UNSIGNED_INT||de.gpuType===qf;if(de.isInterleavedBufferAttribute){const ue=de.data,ve=ue.stride,le=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<te.locationSize;Be++)g(te.location+Be,ue.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<te.locationSize;Be++)m(te.location+Be);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Be=0;Be<te.locationSize;Be++)x(te.location+Be,be/te.locationSize,bt,pe,ve*Rt,(le+be/te.locationSize*Be)*Rt,oe)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)g(te.location+ue,de.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<te.locationSize;ue++)m(te.location+ue);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ue=0;ue<te.locationSize;ue++)x(te.location+ue,be/te.locationSize,bt,pe,be*Rt,be/te.locationSize*ue*Rt,oe)}}else if(W!==void 0){const pe=W[Y];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(te.location,pe);break;case 3:s.vertexAttrib3fv(te.location,pe);break;case 4:s.vertexAttrib4fv(te.location,pe);break;default:s.vertexAttrib1fv(te.location,pe)}}}}y()}function b(){R();for(const T in n){const U=n[T];for(const F in U){const B=U[F];for(const q in B)h(B[q].object),delete B[q];delete U[F]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const U=n[T.id];for(const F in U){const B=U[F];for(const q in B)h(B[q].object),delete B[q];delete U[F]}delete n[T.id]}function A(T){for(const U in n){const F=n[U];if(F[T.id]===void 0)continue;const B=F[T.id];for(const q in B)h(B[q].object),delete B[q];delete F[T.id]}}function R(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function nC(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iC(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Fi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Oi&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,maxSamples:b,samples:w}}function rC(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Os,o=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let v=g.clippingState||null;l.value=v,v=h(p,f,x,d);for(let b=0;b!==x;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sC(s){let e=new WeakMap;function t(a,o){return o===Bc?a.mapping=fs:o===zc&&(a.mapping=ba),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bc||o===zc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lg(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ma=4,k0=[.125,.215,.35,.446,.526,.582],co=20,aC=256,dc=new Gl,V0=new We;let Pp=null,Ip=0,Dp=0,Lp=!1;const oC=new D;class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=oC}=r;Pp=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pp,Ip,Dp),this._renderer.xr.enabled=Lp,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pp=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ds,format:Fi,colorSpace:Eo,depthBuffer:!1},i=G0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G0(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lC(r)),this._blurMaterial=hC(r,e,t),this._ggxMaterial=cC(r,e,t)}return i}_compileMaterial(e){const t=new Rn(new yt,e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,i,r){const l=new jn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(V0),u.toneMapping=Yr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new Po,new Ys({name:"PMREM.Background",side:Bi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(V0),g=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const b=this._cubeSize;ll(i,v*b,x>2?b:0,b,b),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fs||e.mapping===ba;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=W0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ll(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ma?n-p+ma:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ll(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(o,dc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ll(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,dc)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*co-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):co;m>co&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${co}`);const g=[];let y=0;for(let A=0;A<co;++A){const R=A/_,M=Math.exp(-R*R/2);g.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-ma?i-x+ma:0),w=4*(this._cubeSize-v);ll(t,b,w,3*v,2*v),l.setRenderTarget(t),l.render(u,dc)}}function lC(s){const e=[],t=[],n=[];let i=s;const r=s-ma+1+k0.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ma?l=k0[a-s+ma-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,m=2,g=1,y=new Float32Array(_*p*d),x=new Float32Array(m*p*d),v=new Float32Array(g*p*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,R=w>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(M,_*p*w),x.set(f,m*p*w);const T=[w,w,w,w,w,w];v.set(T,g*p*w)}const b=new yt;b.setAttribute("position",new jt(y,_)),b.setAttribute("uv",new jt(x,m)),b.setAttribute("faceIndex",new jt(v,g)),n.push(new Rn(b,null)),i>ma&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function G0(s,e,t){const n=new _r(s,e,t);return n.texture.mapping=zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ll(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function cC(s,e,t){return new Dr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ed(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function hC(s,e,t){const n=new Float32Array(co),i=new D(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function H0(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function W0(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uC(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bc||l===zc,h=l===fs||l===ba;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new dm(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new dm(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fC(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&El("WebGLRenderer: "+n+" extension not supported."),i}}}function dC(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const b=y[x+0],w=y[x+1],A=y[x+2];f.push(b,w,w,A,A,b)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const b=x+0,w=x+1,A=x+2;f.push(b,w,w,A,A,b)}}else return;const m=new(bv(f)?ag:sg)(f,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function pC(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function u(f,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/a,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let g=0;for(let y=0;y<p;y++)g+=d[y]*_[y];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mC(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gC(s,e,t){const n=new WeakMap,i=new Yt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*b*4*u),A=new nd(w,v,b,u);A.type=Oi,A.needsUpdate=!0;const R=x*4;for(let T=0;T<u;T++){const U=m[T],F=g[T],B=y[T],q=v*b*4*T;for(let $=0;$<U.count;$++){const W=$*R;d===!0&&(i.fromBufferAttribute(U,$),w[q+W+0]=i.x,w[q+W+1]=i.y,w[q+W+2]=i.z,w[q+W+3]=0),p===!0&&(i.fromBufferAttribute(F,$),w[q+W+4]=i.x,w[q+W+5]=i.y,w[q+W+6]=i.z,w[q+W+7]=0),_===!0&&(i.fromBufferAttribute(B,$),w[q+W+8]=i.x,w[q+W+9]=i.y,w[q+W+10]=i.z,w[q+W+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new ae(v,b)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function _C(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const xC={[Gm]:"LINEAR_TONE_MAPPING",[Hm]:"REINHARD_TONE_MAPPING",[Wm]:"CINEON_TONE_MAPPING",[Xm]:"ACES_FILMIC_TONE_MAPPING",[Fc]:"AGX_TONE_MAPPING",[qm]:"NEUTRAL_TONE_MAPPING",[Ym]:"CUSTOM_TONE_MAPPING"};function vC(s,e,t,n,i){const r=new _r(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new _r(e,t,{type:ds,depthBuffer:!1,stencilBuffer:!1}),o=new yt;o.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const l=new yg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Rn(o,l),h=new Gl(-1,1,1,-1,0,1);let u=null,f=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(y,x){r.setSize(y,x),a.setSize(y,x);for(let v=0;v<m.length;v++){const b=m[v];b.setSize&&b.setSize(y,x)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;const x=r.width,v=r.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(x,v)}},this.begin=function(y,x){if(d||y.toneMapping===Yr&&m.length===0)return!1;if(_=x,x!==null){const v=x.width,b=x.height;(r.width!==v||r.height!==b)&&this.setSize(v,b)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=Yr,!0},this.hasRenderPass=function(){return g},this.end=function(y,x){y.toneMapping=p,d=!0;let v=r,b=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,b,v,x),A.needsSwap!==!1)){const R=v;v=b,b=R}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},Nt.getTransfer(u)===Kt&&(l.defines.SRGB_TRANSFER="");const w=xC[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(_),y.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ty=new Mn,pm=new Pl(1,1),Ey=new nd,Ay=new id,Cy=new xh,X0=[],Y0=[],q0=new Float32Array(16),Z0=new Float32Array(9),$0=new Float32Array(4);function Hl(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=X0[i];if(r===void 0&&(r=new Float32Array(i),X0[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Xn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ad(s,e){let t=Y0[e];t===void 0&&(t=new Int32Array(e),Y0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yC(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;s.uniform2fv(this.addr,e),Yn(t,e)}}function MC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xn(t,e))return;s.uniform3fv(this.addr,e),Yn(t,e)}}function SC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;s.uniform4fv(this.addr,e),Yn(t,e)}}function wC(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yn(t,e)}else{if(Xn(t,n))return;$0.set(n),s.uniformMatrix2fv(this.addr,!1,$0),Yn(t,n)}}function TC(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yn(t,e)}else{if(Xn(t,n))return;Z0.set(n),s.uniformMatrix3fv(this.addr,!1,Z0),Yn(t,n)}}function EC(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yn(t,e)}else{if(Xn(t,n))return;q0.set(n),s.uniformMatrix4fv(this.addr,!1,q0),Yn(t,n)}}function AC(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function CC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;s.uniform2iv(this.addr,e),Yn(t,e)}}function RC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xn(t,e))return;s.uniform3iv(this.addr,e),Yn(t,e)}}function PC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;s.uniform4iv(this.addr,e),Yn(t,e)}}function IC(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function DC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;s.uniform2uiv(this.addr,e),Yn(t,e)}}function LC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xn(t,e))return;s.uniform3uiv(this.addr,e),Yn(t,e)}}function NC(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;s.uniform4uiv(this.addr,e),Yn(t,e)}}function UC(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pm.compareFunction=t.isReversedDepthBuffer()?td:ed,r=pm):r=Ty,t.setTexture2D(e||r,i)}function OC(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ay,i)}function FC(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cy,i)}function BC(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ey,i)}function zC(s){switch(s){case 5126:return yC;case 35664:return bC;case 35665:return MC;case 35666:return SC;case 35674:return wC;case 35675:return TC;case 35676:return EC;case 5124:case 35670:return AC;case 35667:case 35671:return CC;case 35668:case 35672:return RC;case 35669:case 35673:return PC;case 5125:return IC;case 36294:return DC;case 36295:return LC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return BC}}function kC(s,e){s.uniform1fv(this.addr,e)}function VC(s,e){const t=Hl(e,this.size,2);s.uniform2fv(this.addr,t)}function GC(s,e){const t=Hl(e,this.size,3);s.uniform3fv(this.addr,t)}function HC(s,e){const t=Hl(e,this.size,4);s.uniform4fv(this.addr,t)}function WC(s,e){const t=Hl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function XC(s,e){const t=Hl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function YC(s,e){const t=Hl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qC(s,e){s.uniform1iv(this.addr,e)}function ZC(s,e){s.uniform2iv(this.addr,e)}function $C(s,e){s.uniform3iv(this.addr,e)}function KC(s,e){s.uniform4iv(this.addr,e)}function JC(s,e){s.uniform1uiv(this.addr,e)}function jC(s,e){s.uniform2uiv(this.addr,e)}function QC(s,e){s.uniform3uiv(this.addr,e)}function eR(s,e){s.uniform4uiv(this.addr,e)}function tR(s,e,t){const n=this.cache,i=e.length,r=Ad(t,i);Xn(n,r)||(s.uniform1iv(this.addr,r),Yn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=pm:a=Ty;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function nR(s,e,t){const n=this.cache,i=e.length,r=Ad(t,i);Xn(n,r)||(s.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ay,r[a])}function iR(s,e,t){const n=this.cache,i=e.length,r=Ad(t,i);Xn(n,r)||(s.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cy,r[a])}function rR(s,e,t){const n=this.cache,i=e.length,r=Ad(t,i);Xn(n,r)||(s.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ey,r[a])}function sR(s){switch(s){case 5126:return kC;case 35664:return VC;case 35665:return GC;case 35666:return HC;case 35674:return WC;case 35675:return XC;case 35676:return YC;case 5124:case 35670:return qC;case 35667:case 35671:return ZC;case 35668:case 35672:return $C;case 35669:case 35673:return KC;case 5125:return JC;case 36294:return jC;case 36295:return QC;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return rR}}class aR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zC(t.type)}}class oR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sR(t.type)}}class lR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Np=/(\w+)(\])?(\[|\.)?/g;function K0(s,e){s.seq.push(e),s.map[e.id]=e}function cR(s,e,t){const n=s.name,i=n.length;for(Np.lastIndex=0;;){const r=Np.exec(n),a=Np.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){K0(t,c===void 0?new aR(o,s,e):new oR(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new lR(o),K0(t,u)),t=u}}}class Ou{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);cR(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function J0(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const hR=37297;let uR=0;function fR(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const j0=new wt;function dR(s){Nt._getMatrix(j0,Nt.workingColorSpace,s);const e=`mat3( ${j0.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case Wc:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Q0(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fR(s.getShaderSource(e),o)}else return r}function pR(s,e){const t=dR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mR={[Gm]:"Linear",[Hm]:"Reinhard",[Wm]:"Cineon",[Xm]:"ACESFilmic",[Fc]:"AgX",[qm]:"Neutral",[Ym]:"Custom"};function gR(s,e){const t=mR[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ru=new D;function _R(){Nt.getLuminanceCoefficients(Ru);const s=Ru.x.toFixed(4),e=Ru.y.toFixed(4),t=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xc).join(`
`)}function vR(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yR(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xc(s){return s!==""}function ex(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bR=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(s){return s.replace(bR,SR)}const MR=new Map;function SR(s,e){let t=ut[e];if(t===void 0){const n=MR.get(e);if(n!==void 0)t=ut[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mm(t)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(s){return s.replace(wR,TR)}function TR(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ix(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ER={[Mc]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function AR(s){return ER[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CR={[fs]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE",[zl]:"ENVMAP_TYPE_CUBE_UV"};function RR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":CR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const PR={[ba]:"ENVMAP_MODE_REFRACTION"};function IR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":PR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DR={[gh]:"ENVMAP_BLENDING_MULTIPLY",[ov]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function LR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DR[s.combine]||"ENVMAP_BLENDING_NONE"}function NR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function UR(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=AR(t),c=RR(t),h=IR(t),u=LR(t),f=NR(t),d=xR(t),p=vR(r),_=i.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xc).join(`
`),g.length>0&&(g+=`
`)):(m=[ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xc).join(`
`),g=[ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Yr?gR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,pR("linearToOutputTexel",t.outputColorSpace),_R(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xc).join(`
`)),a=mm(a),a=ex(a,t),a=tx(a,t),o=mm(o),o=ex(o,t),o=tx(o,t),a=nx(a),o=nx(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+m+a,v=y+g+o,b=J0(i,i.VERTEX_SHADER,x),w=J0(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(U){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(b)||"",q=i.getShaderInfoLog(w)||"",$=F.trim(),W=B.trim(),Y=q.trim();let te=!0,de=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,w);else{const pe=Q0(i,b,"vertex"),be=Q0(i,w,"fragment");et("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+pe+`
`+be)}else $!==""?Le("WebGLProgram: Program Info Log:",$):(W===""||Y==="")&&(de=!1);de&&(U.diagnostics={runnable:te,programLog:$,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(b),i.deleteShader(w),R=new Ou(i,_),M=yR(i,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,hR)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let OR=0;class FR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new BR(e),t.set(e,n)),n}}class BR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function zR(s,e,t,n,i,r,a){const o=new rd,l=new FR,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,U,F,B){const q=F.fog,$=B.geometry,W=M.isMeshStandardMaterial?F.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),te=Y&&Y.mapping===zl?Y.image.height:null,de=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&Le("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=pe!==void 0?pe.length:0;let Je=0;$.morphAttributes.position!==void 0&&(Je=1),$.morphAttributes.normal!==void 0&&(Je=2),$.morphAttributes.color!==void 0&&(Je=3);let rt,bt,Rt,oe;if(de){const Xt=Rr[de];rt=Xt.vertexShader,bt=Xt.fragmentShader}else rt=M.vertexShader,bt=M.fragmentShader,l.update(M),Rt=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const ue=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),le=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,Oe=!!M.map,it=!!M.matcap,tt=!!Y,Q=!!M.aoMap,_e=!!M.lightMap,he=!!M.bumpMap,Ee=!!M.normalMap,N=!!M.displacementMap,je=!!M.emissiveMap,Ue=!!M.metalnessMap,Xe=!!M.roughnessMap,ye=M.anisotropy>0,L=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,ee=M.sheen>0,ce=M.transmission>0,ne=ye&&!!M.anisotropyMap,qe=L&&!!M.clearcoatMap,Me=L&&!!M.clearcoatNormalMap,Pe=L&&!!M.clearcoatRoughnessMap,st=k&&!!M.iridescenceMap,me=k&&!!M.iridescenceThicknessMap,Ae=ee&&!!M.sheenColorMap,Ve=ee&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,we=!!M.specularColorMap,gt=!!M.specularIntensityMap,z=ce&&!!M.transmissionMap,Ie=ce&&!!M.thicknessMap,xe=!!M.gradientMap,ze=!!M.alphaMap,ge=M.alphaTest>0,se=!!M.alphaHash,Se=!!M.extensions;let nt=Yr;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Wt={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:bt,defines:M.defines,customVertexShaderID:Rt,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:le,instancingColor:le&&B.instanceColor!==null,instancingMorph:le&&B.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Eo,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:it,envMap:tt,envMapMode:tt&&Y.mapping,envMapCubeUVHeight:te,aoMap:Q,lightMap:_e,bumpMap:he,normalMap:Ee,displacementMap:N,emissiveMap:je,normalMapObjectSpace:Ee&&M.normalMapType===pv,normalMapTangentSpace:Ee&&M.normalMapType===Aa,metalnessMap:Ue,roughnessMap:Xe,anisotropy:ye,anisotropyMap:ne,clearcoat:L,clearcoatMap:qe,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:k,iridescenceMap:st,iridescenceThicknessMap:me,sheen:ee,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:Ze,specularColorMap:we,specularIntensityMap:gt,transmission:ce,transmissionMap:z,thicknessMap:Ie,gradientMap:xe,opaque:M.transparent===!1&&M.blending===_o&&M.alphaToCoverage===!1,alphaMap:ze,alphaTest:ge,alphaHash:se,combine:M.combine,mapUv:Oe&&_(M.map.channel),aoMapUv:Q&&_(M.aoMap.channel),lightMapUv:_e&&_(M.lightMap.channel),bumpMapUv:he&&_(M.bumpMap.channel),normalMapUv:Ee&&_(M.normalMap.channel),displacementMapUv:N&&_(M.displacementMap.channel),emissiveMapUv:je&&_(M.emissiveMap.channel),metalnessMapUv:Ue&&_(M.metalnessMap.channel),roughnessMapUv:Xe&&_(M.roughnessMap.channel),anisotropyMapUv:ne&&_(M.anisotropyMap.channel),clearcoatMapUv:qe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(M.sheenRoughnessMap.channel),specularMapUv:Ze&&_(M.specularMap.channel),specularColorMapUv:we&&_(M.specularColorMap.channel),specularIntensityMapUv:gt&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:Ie&&_(M.thicknessMap.channel),alphaMapUv:ze&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ee||ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Oe||ze),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&Nt.getTransfer(M.map.colorSpace)===Kt,decodeVideoTextureEmissive:je&&M.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(M.emissiveMap.colorSpace)===Kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ss,flipSided:M.side===Bi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function g(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(y(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const T=p[M.type];let U;if(T){const F=Rr[T];U=og.clone(F.uniforms)}else U=M.uniforms;return U}function b(M,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new UR(s,T,M,r),h.push(U),u.set(T,U)),U}function w(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function kR(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function VR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sx(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,p,_,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function o(u,f,d,p,_,m){const g=a(u,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function l(u,f,d,p,_,m){const g=a(u,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||VR),n.length>1&&n.sort(f||rx),i.length>1&&i.sort(f||rx)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function GR(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new sx,s.set(n,[a])):i>=r.length?(a=new sx,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function HR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function WR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let XR=0;function YR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qR(s){const e=new HR,t=WR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ot,a=new ot;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,x=0,v=0,b=0,w=0,A=0;c.sort(YR);for(let M=0,T=c.length;M<T;M++){const U=c[M],F=U.color,B=U.intensity,q=U.distance;let $=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===To?$=U.shadow.map.texture:$=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*B,u+=F.g*B,f+=F.b*B;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],B);A++}else if(U.isDirectionalLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Y=U.shadow,te=t.get(U);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.directionalShadow[d]=te,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=U.shadow.matrix,y++}n.directional[d]=W,d++}else if(U.isSpotLight){const W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=q,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[_]=W;const Y=U.shadow;if(U.map&&(n.spotLightMap[b]=U.map,b++,Y.updateMatrices(U),U.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,U.castShadow){const te=t.get(U);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.spotShadow[_]=te,n.spotShadowMap[_]=$,v++}_++}else if(U.isRectAreaLight){const W=e.get(U);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=W,m++}else if(U.isPointLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Y=U.shadow,te=t.get(U);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,te.shadowCameraNear=Y.camera.near,te.shadowCameraFar=Y.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=U.shadow.matrix,x++}n.point[p]=W,p++}else if(U.isHemisphereLight){const W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(B),W.groundColor.copy(U.groundColor).multiplyScalar(B),n.hemi[g]=W,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==b||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=b,R.numLightProbes=A,n.version=XR++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ax(s){const e=new qR(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ZR(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ax(s),e.set(i,[o])):r>=a.length?(o=new ax(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const $R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JR=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],jR=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ox=new ot,pc=new D,Up=new D;function QR(s,e,t){let n=new kl;const i=new ae,r=new ae,a=new Yt,o=new Mg,l=new Sg,c={},h=t.maxTextureSize,u={[Vs]:Bi,[Bi]:Vs,[ss]:ss},f=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:$R,fragmentShader:KR}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new yt;p.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rn(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let g=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Sc&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Mc);const M=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),F=s.state;F.setBlending(hs),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=g!==this.type;B&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach($=>$.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,$=w.length;q<$;q++){const W=w[q],Y=W.shadow;if(Y===void 0){Le("WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const te=Y.getFrameExtents();if(i.multiply(te),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,Y.mapSize.y=r.y)),Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ul){if(W.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new _r(i.x,i.y,{format:To,type:ds,minFilter:rn,magFilter:rn,generateMipmaps:!1}),Y.map.texture.name=W.name+".shadowMap",Y.map.depthTexture=new Pl(i.x,i.y,Oi),Y.map.depthTexture.name=W.name+".shadowMapDepth",Y.map.depthTexture.format=ps,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Cn,Y.map.depthTexture.magFilter=Cn}else{W.isPointLight?(Y.map=new lg(i.x),Y.map.depthTexture=new Fv(i.x,Ir)):(Y.map=new _r(i.x,i.y),Y.map.depthTexture=new Pl(i.x,i.y,Ir)),Y.map.depthTexture.name=W.name+".shadowMap",Y.map.depthTexture.format=ps;const pe=s.state.buffers.depth.getReversed();this.type===Mc?(Y.map.depthTexture.compareFunction=pe?td:ed,Y.map.depthTexture.minFilter=rn,Y.map.depthTexture.magFilter=rn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Cn,Y.map.depthTexture.magFilter=Cn)}Y.camera.updateProjectionMatrix()}const de=Y.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<de;pe++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(Y.map),s.clear());const be=Y.getViewport(pe);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),F.viewport(a)}if(W.isPointLight){const be=Y.camera,Je=Y.matrix,rt=W.distance||be.far;rt!==be.far&&(be.far=rt,be.updateProjectionMatrix()),pc.setFromMatrixPosition(W.matrixWorld),be.position.copy(pc),Up.copy(be.position),Up.add(JR[pe]),be.up.copy(jR[pe]),be.lookAt(Up),be.updateMatrixWorld(),Je.makeTranslation(-pc.x,-pc.y,-pc.z),ox.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ox,be.coordinateSystem,be.reversedDepth)}else Y.updateMatrices(W);n=Y.getFrustum(),v(A,R,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===ul&&y(Y,R),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(M,T,U)};function y(w,A){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _r(i.x,i.y,{format:To,type:ds})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,R,d,_,null)}function x(w,A,R,M){let T=null;const U=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)T=U;else if(T=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=T.uuid,B=A.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let $=q[B];$===void 0&&($=T.clone(),q[B]=$,A.addEventListener("dispose",b)),T=$}if(T.visible=A.visible,T.wireframe=A.wireframe,M===ul?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=s.properties.get(T);F.light=R}return T}function v(w,A,R,M,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===ul)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),q=w.material;if(Array.isArray(q)){const $=B.groups;for(let W=0,Y=$.length;W<Y;W++){const te=$[W],de=q[te.materialIndex];if(de&&de.visible){const pe=x(w,de,M,T);w.onBeforeShadow(s,w,A,R,B,pe,te),s.renderBufferDirect(R,null,B,pe,w,te),w.onAfterShadow(s,w,A,R,B,pe,te)}}}else if(q.visible){const $=x(w,q,M,T);w.onBeforeShadow(s,w,A,R,B,$,null),s.renderBufferDirect(R,null,B,$,w,null),w.onAfterShadow(s,w,A,R,B,$,null)}}const F=w.children;for(let B=0,q=F.length;B<q;B++)v(F[B],A,R,M,T)}function b(w){w.target.removeEventListener("dispose",b);for(const R in c){const M=c[R],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const eP={[Hu]:Wu,[Xu]:Zu,[Yu]:$u,[wo]:qu,[Wu]:Hu,[Zu]:Xu,[$u]:Yu,[qu]:wo};function tP(s,e){function t(){let z=!1;const Ie=new Yt;let xe=null;const ze=new Yt(0,0,0,0);return{setMask:function(ge){xe!==ge&&!z&&(s.colorMask(ge,ge,ge,ge),xe=ge)},setLocked:function(ge){z=ge},setClear:function(ge,se,Se,nt,Wt){Wt===!0&&(ge*=nt,se*=nt,Se*=nt),Ie.set(ge,se,Se,nt),ze.equals(Ie)===!1&&(s.clearColor(ge,se,Se,nt),ze.copy(Ie))},reset:function(){z=!1,xe=null,ze.set(-1,0,0,0)}}}function n(){let z=!1,Ie=!1,xe=null,ze=null,ge=null;return{setReversed:function(se){if(Ie!==se){const Se=e.get("EXT_clip_control");se?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Ie=se;const nt=ge;ge=null,this.setClear(nt)}},getReversed:function(){return Ie},setTest:function(se){se?ue(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(se){xe!==se&&!z&&(s.depthMask(se),xe=se)},setFunc:function(se){if(Ie&&(se=eP[se]),ze!==se){switch(se){case Hu:s.depthFunc(s.NEVER);break;case Wu:s.depthFunc(s.ALWAYS);break;case Xu:s.depthFunc(s.LESS);break;case wo:s.depthFunc(s.LEQUAL);break;case Yu:s.depthFunc(s.EQUAL);break;case qu:s.depthFunc(s.GEQUAL);break;case Zu:s.depthFunc(s.GREATER);break;case $u:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=se}},setLocked:function(se){z=se},setClear:function(se){ge!==se&&(Ie&&(se=1-se),s.clearDepth(se),ge=se)},reset:function(){z=!1,xe=null,ze=null,ge=null,Ie=!1}}}function i(){let z=!1,Ie=null,xe=null,ze=null,ge=null,se=null,Se=null,nt=null,Wt=null;return{setTest:function(Xt){z||(Xt?ue(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Xt){Ie!==Xt&&!z&&(s.stencilMask(Xt),Ie=Xt)},setFunc:function(Xt,ir,Ur){(xe!==Xt||ze!==ir||ge!==Ur)&&(s.stencilFunc(Xt,ir,Ur),xe=Xt,ze=ir,ge=Ur)},setOp:function(Xt,ir,Ur){(se!==Xt||Se!==ir||nt!==Ur)&&(s.stencilOp(Xt,ir,Ur),se=Xt,Se=ir,nt=Ur)},setLocked:function(Xt){z=Xt},setClear:function(Xt){Wt!==Xt&&(s.clearStencil(Xt),Wt=Xt)},reset:function(){z=!1,Ie=null,xe=null,ze=null,ge=null,se=null,Se=null,nt=null,Wt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,y=null,x=null,v=null,b=null,w=null,A=new We(0,0,0),R=0,M=!1,T=null,U=null,F=null,B=null,q=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(te)[1]),W=Y>=1):te.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),W=Y>=2);let de=null,pe={};const be=s.getParameter(s.SCISSOR_BOX),Je=s.getParameter(s.VIEWPORT),rt=new Yt().fromArray(be),bt=new Yt().fromArray(Je);function Rt(z,Ie,xe,ze){const ge=new Uint8Array(4),se=s.createTexture();s.bindTexture(z,se),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<xe;Se++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(Ie+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return se}const oe={};oe[s.TEXTURE_2D]=Rt(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=Rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=Rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=Rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(s.DEPTH_TEST),a.setFunc(wo),he(!1),Ee(jp),ue(s.CULL_FACE),Q(hs);function ue(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function ve(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function le(z,Ie){return u[z]!==Ie?(s.bindFramebuffer(z,Ie),u[z]=Ie,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ie),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Be(z,Ie){let xe=d,ze=!1;if(z){xe=f.get(Ie),xe===void 0&&(xe=[],f.set(Ie,xe));const ge=z.textures;if(xe.length!==ge.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Se=ge.length;se<Se;se++)xe[se]=s.COLOR_ATTACHMENT0+se;xe.length=ge.length,ze=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,ze=!0);ze&&s.drawBuffers(xe)}function Oe(z){return p!==z?(s.useProgram(z),p=z,!0):!1}const it={[ua]:s.FUNC_ADD,[Wx]:s.FUNC_SUBTRACT,[Xx]:s.FUNC_REVERSE_SUBTRACT};it[Yx]=s.MIN,it[qx]=s.MAX;const tt={[Zx]:s.ZERO,[$x]:s.ONE,[Kx]:s.SRC_COLOR,[Vu]:s.SRC_ALPHA,[nv]:s.SRC_ALPHA_SATURATE,[ev]:s.DST_COLOR,[jx]:s.DST_ALPHA,[Jx]:s.ONE_MINUS_SRC_COLOR,[Gu]:s.ONE_MINUS_SRC_ALPHA,[tv]:s.ONE_MINUS_DST_COLOR,[Qx]:s.ONE_MINUS_DST_ALPHA,[iv]:s.CONSTANT_COLOR,[rv]:s.ONE_MINUS_CONSTANT_COLOR,[sv]:s.CONSTANT_ALPHA,[av]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(z,Ie,xe,ze,ge,se,Se,nt,Wt,Xt){if(z===hs){_===!0&&(ve(s.BLEND),_=!1);return}if(_===!1&&(ue(s.BLEND),_=!0),z!==Hx){if(z!==m||Xt!==M){if((g!==ua||v!==ua)&&(s.blendEquation(s.FUNC_ADD),g=ua,v=ua),Xt)switch(z){case _o:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:et("WebGLState: Invalid blending: ",z);break}else switch(z){case _o:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case em:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tm:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",z);break}y=null,x=null,b=null,w=null,A.set(0,0,0),R=0,m=z,M=Xt}return}ge=ge||Ie,se=se||xe,Se=Se||ze,(Ie!==g||ge!==v)&&(s.blendEquationSeparate(it[Ie],it[ge]),g=Ie,v=ge),(xe!==y||ze!==x||se!==b||Se!==w)&&(s.blendFuncSeparate(tt[xe],tt[ze],tt[se],tt[Se]),y=xe,x=ze,b=se,w=Se),(nt.equals(A)===!1||Wt!==R)&&(s.blendColor(nt.r,nt.g,nt.b,Wt),A.copy(nt),R=Wt),m=z,M=!1}function _e(z,Ie){z.side===ss?ve(s.CULL_FACE):ue(s.CULL_FACE);let xe=z.side===Bi;Ie&&(xe=!xe),he(xe),z.blending===_o&&z.transparent===!1?Q(hs):Q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ze=z.stencilWrite;o.setTest(ze),ze&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),je(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(z){T!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),T=z)}function Ee(z){z!==Vx?(ue(s.CULL_FACE),z!==U&&(z===jp?s.cullFace(s.BACK):z===Gx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),U=z}function N(z){z!==F&&(W&&s.lineWidth(z),F=z)}function je(z,Ie,xe){z?(ue(s.POLYGON_OFFSET_FILL),(B!==Ie||q!==xe)&&(s.polygonOffset(Ie,xe),B=Ie,q=xe)):ve(s.POLYGON_OFFSET_FILL)}function Ue(z){z?ue(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Xe(z){z===void 0&&(z=s.TEXTURE0+$-1),de!==z&&(s.activeTexture(z),de=z)}function ye(z,Ie,xe){xe===void 0&&(de===null?xe=s.TEXTURE0+$-1:xe=de);let ze=pe[xe];ze===void 0&&(ze={type:void 0,texture:void 0},pe[xe]=ze),(ze.type!==z||ze.texture!==Ie)&&(de!==xe&&(s.activeTexture(xe),de=xe),s.bindTexture(z,Ie||oe[z]),ze.type=z,ze.texture=Ie)}function L(){const z=pe[de];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function ee(){try{s.texSubImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function ce(){try{s.texSubImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function ne(){try{s.compressedTexSubImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function Me(){try{s.texStorage2D(...arguments)}catch(z){et("WebGLState:",z)}}function Pe(){try{s.texStorage3D(...arguments)}catch(z){et("WebGLState:",z)}}function st(){try{s.texImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function me(){try{s.texImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function Ae(z){rt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),rt.copy(z))}function Ve(z){bt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),bt.copy(z))}function Ze(z,Ie){let xe=c.get(Ie);xe===void 0&&(xe=new WeakMap,c.set(Ie,xe));let ze=xe.get(z);ze===void 0&&(ze=s.getUniformBlockIndex(Ie,z.name),xe.set(z,ze))}function we(z,Ie){const ze=c.get(Ie).get(z);l.get(Ie)!==ze&&(s.uniformBlockBinding(Ie,ze,z.__bindingPointIndex),l.set(Ie,ze))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},de=null,pe={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,y=null,x=null,v=null,b=null,w=null,A=new We(0,0,0),R=0,M=!1,T=null,U=null,F=null,B=null,q=null,rt.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:ve,bindFramebuffer:le,drawBuffers:Be,useProgram:Oe,setBlending:Q,setMaterial:_e,setFlipSided:he,setCullFace:Ee,setLineWidth:N,setPolygonOffset:je,setScissorTest:Ue,activeTexture:Xe,bindTexture:ye,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:st,texImage3D:me,updateUBOMapping:Ze,uniformBlockBinding:we,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:ee,texSubImage3D:ce,compressedTexSubImage2D:ne,compressedTexSubImage3D:qe,scissor:Ae,viewport:Ve,reset:gt}}function nP(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,S){return d?new OffscreenCanvas(L,S):Yc("canvas")}function _(L,S,k){let ee=1;const ce=ye(L);if((ce.width>k||ce.height>k)&&(ee=k/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(ee*ce.width),qe=Math.floor(ee*ce.height);u===void 0&&(u=p(ne,qe));const Me=S?p(ne,qe):u;return Me.width=ne,Me.height=qe,Me.getContext("2d").drawImage(L,0,0,ne,qe),Le("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+qe+")."),Me}else return"data"in L&&Le("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function m(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,S,k,ee,ce=!1){if(L!==null){if(s[L]!==void 0)return s[L];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=S;if(S===s.RED&&(k===s.FLOAT&&(ne=s.R32F),k===s.HALF_FLOAT&&(ne=s.R16F),k===s.UNSIGNED_BYTE&&(ne=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.R8UI),k===s.UNSIGNED_SHORT&&(ne=s.R16UI),k===s.UNSIGNED_INT&&(ne=s.R32UI),k===s.BYTE&&(ne=s.R8I),k===s.SHORT&&(ne=s.R16I),k===s.INT&&(ne=s.R32I)),S===s.RG&&(k===s.FLOAT&&(ne=s.RG32F),k===s.HALF_FLOAT&&(ne=s.RG16F),k===s.UNSIGNED_BYTE&&(ne=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.RG8UI),k===s.UNSIGNED_SHORT&&(ne=s.RG16UI),k===s.UNSIGNED_INT&&(ne=s.RG32UI),k===s.BYTE&&(ne=s.RG8I),k===s.SHORT&&(ne=s.RG16I),k===s.INT&&(ne=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),k===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),k===s.UNSIGNED_INT&&(ne=s.RGB32UI),k===s.BYTE&&(ne=s.RGB8I),k===s.SHORT&&(ne=s.RGB16I),k===s.INT&&(ne=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),k===s.UNSIGNED_INT&&(ne=s.RGBA32UI),k===s.BYTE&&(ne=s.RGBA8I),k===s.SHORT&&(ne=s.RGBA16I),k===s.INT&&(ne=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),S===s.RGBA){const qe=ce?Wc:Nt.getTransfer(ee);k===s.FLOAT&&(ne=s.RGBA32F),k===s.HALF_FLOAT&&(ne=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ne=qe===Kt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(L,S){let k;return L?S===null||S===Ir||S===wl?k=s.DEPTH24_STENCIL8:S===Oi?k=s.DEPTH32F_STENCIL8:S===Sl&&(k=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ir||S===wl?k=s.DEPTH_COMPONENT24:S===Oi?k=s.DEPTH_COMPONENT32F:S===Sl&&(k=s.DEPTH_COMPONENT16),k}function b(L,S){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){const S=L.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&h.delete(S)}function A(L){const S=L.target;S.removeEventListener("dispose",A),T(S)}function R(L){const S=n.get(L);if(S.__webglInit===void 0)return;const k=L.source,ee=f.get(k);if(ee){const ce=ee[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&M(L),Object.keys(ee).length===0&&f.delete(k)}n.remove(L)}function M(L){const S=n.get(L);s.deleteTexture(S.__webglTexture);const k=L.source,ee=f.get(k);delete ee[S.__cacheKey],a.memory.textures--}function T(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let ce=0;ce<S.__webglFramebuffer[ee].length;ce++)s.deleteFramebuffer(S.__webglFramebuffer[ee][ce]);else s.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[ee]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=L.textures;for(let ee=0,ce=k.length;ee<ce;ee++){const ne=n.get(k[ee]);ne.__webglTexture&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(k[ee])}n.remove(L)}let U=0;function F(){U=0}function B(){const L=U;return L>=i.maxTextures&&Le("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),U+=1,L}function q(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function $(L,S){const k=n.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&k.__version!==L.version){const ee=L.image;if(ee===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,L,S);return}}else L.isExternalTexture&&(k.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function W(L,S){const k=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){oe(k,L,S);return}else L.isExternalTexture&&(k.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Y(L,S){const k=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){oe(k,L,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function te(L,S){const k=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&k.__version!==L.version){ue(k,L,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const de={[kc]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Vc]:s.MIRRORED_REPEAT},pe={[Cn]:s.NEAREST,[Zm]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},be={[mv]:s.NEVER,[yv]:s.ALWAYS,[gv]:s.LESS,[ed]:s.LEQUAL,[_v]:s.EQUAL,[td]:s.GEQUAL,[xv]:s.GREATER,[vv]:s.NOTEQUAL};function Je(L,S){if(S.type===Oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===wc||S.magFilter===fl||S.magFilter===os||S.minFilter===rn||S.minFilter===wc||S.minFilter===fl||S.minFilter===os)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,de[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,de[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,de[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,pe[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==fl&&S.minFilter!==os||S.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function rt(L,S){let k=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",w));const ee=S.source;let ce=f.get(ee);ce===void 0&&(ce={},f.set(ee,ce));const ne=q(S);if(ne!==L.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ce[ne].usedTimes++;const qe=ce[L.__cacheKey];qe!==void 0&&(ce[L.__cacheKey].usedTimes--,qe.usedTimes===0&&M(S)),L.__cacheKey=ne,L.__webglTexture=ce[ne].texture}return k}function bt(L,S,k){return Math.floor(Math.floor(L/k)/S)}function Rt(L,S,k,ee){const ne=L.updateRanges;if(ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,ee,S.data);else{ne.sort((me,Ae)=>me.start-Ae.start);let qe=0;for(let me=1;me<ne.length;me++){const Ae=ne[qe],Ve=ne[me],Ze=Ae.start+Ae.count,we=bt(Ve.start,S.width,4),gt=bt(Ae.start,S.width,4);Ve.start<=Ze+1&&we===gt&&bt(Ve.start+Ve.count-1,S.width,4)===we?Ae.count=Math.max(Ae.count,Ve.start+Ve.count-Ae.start):(++qe,ne[qe]=Ve)}ne.length=qe+1;const Me=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),st=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let me=0,Ae=ne.length;me<Ae;me++){const Ve=ne[me],Ze=Math.floor(Ve.start/4),we=Math.ceil(Ve.count/4),gt=Ze%S.width,z=Math.floor(Ze/S.width),Ie=we,xe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,gt,z,Ie,xe,k,ee,S.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Me),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,st)}}function oe(L,S,k){let ee=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=s.TEXTURE_3D);const ce=rt(L,S),ne=S.source;t.bindTexture(ee,L.__webglTexture,s.TEXTURE0+k);const qe=n.get(ne);if(ne.version!==qe.__version||ce===!0){t.activeTexture(s.TEXTURE0+k);const Me=Nt.getPrimaries(Nt.workingColorSpace),Pe=S.colorSpace===Bs?null:Nt.getPrimaries(S.colorSpace),st=S.colorSpace===Bs||Me===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let me=_(S.image,!1,i.maxTextureSize);me=Xe(S,me);const Ae=r.convert(S.format,S.colorSpace),Ve=r.convert(S.type);let Ze=x(S.internalFormat,Ae,Ve,S.colorSpace,S.isVideoTexture);Je(ee,S);let we;const gt=S.mipmaps,z=S.isVideoTexture!==!0,Ie=qe.__version===void 0||ce===!0,xe=ne.dataReady,ze=b(S,me);if(S.isDepthTexture)Ze=v(S.format===fa,S.type),Ie&&(z?t.texStorage2D(s.TEXTURE_2D,1,Ze,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Ze,me.width,me.height,0,Ae,Ve,null));else if(S.isDataTexture)if(gt.length>0){z&&Ie&&t.texStorage2D(s.TEXTURE_2D,ze,Ze,gt[0].width,gt[0].height);for(let ge=0,se=gt.length;ge<se;ge++)we=gt[ge],z?xe&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,we.width,we.height,Ae,Ve,we.data):t.texImage2D(s.TEXTURE_2D,ge,Ze,we.width,we.height,0,Ae,Ve,we.data);S.generateMipmaps=!1}else z?(Ie&&t.texStorage2D(s.TEXTURE_2D,ze,Ze,me.width,me.height),xe&&Rt(S,me,Ae,Ve)):t.texImage2D(s.TEXTURE_2D,0,Ze,me.width,me.height,0,Ae,Ve,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ze,gt[0].width,gt[0].height,me.depth);for(let ge=0,se=gt.length;ge<se;ge++)if(we=gt[ge],S.format!==Fi)if(Ae!==null)if(z){if(xe)if(S.layerUpdates.size>0){const Se=fm(we.width,we.height,S.format,S.type);for(const nt of S.layerUpdates){const Wt=we.data.subarray(nt*Se/we.data.BYTES_PER_ELEMENT,(nt+1)*Se/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,nt,we.width,we.height,1,Ae,Wt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,me.depth,Ae,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ze,we.width,we.height,me.depth,0,we.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,me.depth,Ae,Ve,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ze,we.width,we.height,me.depth,0,Ae,Ve,we.data)}else{z&&Ie&&t.texStorage2D(s.TEXTURE_2D,ze,Ze,gt[0].width,gt[0].height);for(let ge=0,se=gt.length;ge<se;ge++)we=gt[ge],S.format!==Fi?Ae!==null?z?xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ze,we.width,we.height,0,we.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xe&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,we.width,we.height,Ae,Ve,we.data):t.texImage2D(s.TEXTURE_2D,ge,Ze,we.width,we.height,0,Ae,Ve,we.data)}else if(S.isDataArrayTexture)if(z){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ze,me.width,me.height,me.depth),xe)if(S.layerUpdates.size>0){const ge=fm(me.width,me.height,S.format,S.type);for(const se of S.layerUpdates){const Se=me.data.subarray(se*ge/me.data.BYTES_PER_ELEMENT,(se+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,me.width,me.height,1,Ae,Ve,Se)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ae,Ve,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,me.width,me.height,me.depth,0,Ae,Ve,me.data);else if(S.isData3DTexture)z?(Ie&&t.texStorage3D(s.TEXTURE_3D,ze,Ze,me.width,me.height,me.depth),xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ae,Ve,me.data)):t.texImage3D(s.TEXTURE_3D,0,Ze,me.width,me.height,me.depth,0,Ae,Ve,me.data);else if(S.isFramebufferTexture){if(Ie)if(z)t.texStorage2D(s.TEXTURE_2D,ze,Ze,me.width,me.height);else{let ge=me.width,se=me.height;for(let Se=0;Se<ze;Se++)t.texImage2D(s.TEXTURE_2D,Se,Ze,ge,se,0,Ae,Ve,null),ge>>=1,se>>=1}}else if(gt.length>0){if(z&&Ie){const ge=ye(gt[0]);t.texStorage2D(s.TEXTURE_2D,ze,Ze,ge.width,ge.height)}for(let ge=0,se=gt.length;ge<se;ge++)we=gt[ge],z?xe&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ae,Ve,we):t.texImage2D(s.TEXTURE_2D,ge,Ze,Ae,Ve,we);S.generateMipmaps=!1}else if(z){if(Ie){const ge=ye(me);t.texStorage2D(s.TEXTURE_2D,ze,Ze,ge.width,ge.height)}xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ve,me)}else t.texImage2D(s.TEXTURE_2D,0,Ze,Ae,Ve,me);m(S)&&g(ee),qe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ue(L,S,k){if(S.image.length!==6)return;const ee=rt(L,S),ce=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+k);const ne=n.get(ce);if(ce.version!==ne.__version||ee===!0){t.activeTexture(s.TEXTURE0+k);const qe=Nt.getPrimaries(Nt.workingColorSpace),Me=S.colorSpace===Bs?null:Nt.getPrimaries(S.colorSpace),Pe=S.colorSpace===Bs||qe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const st=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let se=0;se<6;se++)!st&&!me?Ae[se]=_(S.image[se],!0,i.maxCubemapSize):Ae[se]=me?S.image[se].image:S.image[se],Ae[se]=Xe(S,Ae[se]);const Ve=Ae[0],Ze=r.convert(S.format,S.colorSpace),we=r.convert(S.type),gt=x(S.internalFormat,Ze,we,S.colorSpace),z=S.isVideoTexture!==!0,Ie=ne.__version===void 0||ee===!0,xe=ce.dataReady;let ze=b(S,Ve);Je(s.TEXTURE_CUBE_MAP,S);let ge;if(st){z&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,gt,Ve.width,Ve.height);for(let se=0;se<6;se++){ge=Ae[se].mipmaps;for(let Se=0;Se<ge.length;Se++){const nt=ge[Se];S.format!==Fi?Ze!==null?z?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,nt.width,nt.height,Ze,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,gt,nt.width,nt.height,0,nt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,nt.width,nt.height,Ze,we,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,gt,nt.width,nt.height,0,Ze,we,nt.data)}}}else{if(ge=S.mipmaps,z&&Ie){ge.length>0&&ze++;const se=ye(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,gt,se.width,se.height)}for(let se=0;se<6;se++)if(me){z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae[se].width,Ae[se].height,Ze,we,Ae[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,gt,Ae[se].width,Ae[se].height,0,Ze,we,Ae[se].data);for(let Se=0;Se<ge.length;Se++){const Wt=ge[Se].image[se].image;z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Wt.width,Wt.height,Ze,we,Wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,gt,Wt.width,Wt.height,0,Ze,we,Wt.data)}}else{z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ze,we,Ae[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,gt,Ze,we,Ae[se]);for(let Se=0;Se<ge.length;Se++){const nt=ge[Se];z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Ze,we,nt.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,gt,Ze,we,nt.image[se])}}}m(S)&&g(s.TEXTURE_CUBE_MAP),ne.__version=ce.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ve(L,S,k,ee,ce,ne){const qe=r.convert(k.format,k.colorSpace),Me=r.convert(k.type),Pe=x(k.internalFormat,qe,Me,k.colorSpace),st=n.get(S),me=n.get(k);if(me.__renderTarget=S,!st.__hasExternalTextures){const Ae=Math.max(1,S.width>>ne),Ve=Math.max(1,S.height>>ne);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,Pe,Ae,Ve,S.depth,0,qe,Me,null):t.texImage2D(ce,ne,Pe,Ae,Ve,0,qe,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ce,me.__webglTexture,0,N(S)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ce,me.__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(L,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer){const ee=S.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,ne=v(S.stencilBuffer,ce),qe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(S),ne,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(S),ne,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ne,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,L)}else{const ee=S.textures;for(let ce=0;ce<ee.length;ce++){const ne=ee[ce],qe=r.convert(ne.format,ne.colorSpace),Me=r.convert(ne.type),Pe=x(ne.internalFormat,qe,Me,ne.colorSpace);je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(S),Pe,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(S),Pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(L,S,k){const ee=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=n.get(S.depthTexture);if(ce.__renderTarget=S,(!ce.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),ce.__webglTexture===void 0){ce.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Je(s.TEXTURE_CUBE_MAP,S.depthTexture);const st=r.convert(S.depthTexture.format),me=r.convert(S.depthTexture.type);let Ae;S.depthTexture.format===ps?Ae=s.DEPTH_COMPONENT24:S.depthTexture.format===fa&&(Ae=s.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ae,S.width,S.height,0,st,me,null)}}else $(S.depthTexture,0);const ne=ce.__webglTexture,qe=N(S),Me=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Pe=S.depthTexture.format===fa?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ps)je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,Me,ne,0,qe):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,Me,ne,0);else if(S.depthTexture.format===fa)je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,Me,ne,0,qe):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,Me,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const S=n.get(L),k=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=ee}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let ee=0;ee<6;ee++)Be(S.__webglFramebuffer[ee],L,ee);else{const ee=L.texture.mipmaps;ee&&ee.length>0?Be(S.__webglFramebuffer[0],L,0):Be(S.__webglFramebuffer,L,0)}else if(k){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=s.createRenderbuffer(),le(S.__webglDepthbuffer[ee],L,!1);else{const ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ne)}}else{const ee=L.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),le(S.__webglDepthbuffer,L,!1);else{const ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,ne)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function it(L,S,k){const ee=n.get(L);S!==void 0&&ve(ee.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Oe(L)}function tt(L){const S=L.texture,k=n.get(L),ee=n.get(S);L.addEventListener("dispose",A);const ce=L.textures,ne=L.isWebGLCubeRenderTarget===!0,qe=ce.length>1;if(qe||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=S.version,a.memory.textures++),ne){k.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)k.__webglFramebuffer[Me][Pe]=s.createFramebuffer()}else k.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)k.__webglFramebuffer[Me]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Me=0,Pe=ce.length;Me<Pe;Me++){const st=n.get(ce[Me]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&je(L)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Me=0;Me<ce.length;Me++){const Pe=ce[Me];k.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Me]);const st=r.convert(Pe.format,Pe.colorSpace),me=r.convert(Pe.type),Ae=x(Pe.internalFormat,st,me,Pe.colorSpace,L.isXRRenderTarget===!0),Ve=N(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Ae,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,k.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),le(k.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Je(s.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ve(k.__webglFramebuffer[Me][Pe],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else ve(k.__webglFramebuffer[Me],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(S)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Me=0,Pe=ce.length;Me<Pe;Me++){const st=ce[Me],me=n.get(st);let Ae=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),Je(Ae,st),ve(k.__webglFramebuffer,L,st,s.COLOR_ATTACHMENT0+Me,Ae,0),m(st)&&g(Ae)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,ee.__webglTexture),Je(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ve(k.__webglFramebuffer[Pe],L,S,s.COLOR_ATTACHMENT0,Me,Pe);else ve(k.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,Me,0);m(S)&&g(Me),t.unbindTexture()}L.depthBuffer&&Oe(L)}function Q(L){const S=L.textures;for(let k=0,ee=S.length;k<ee;k++){const ce=S[k];if(m(ce)){const ne=y(L),qe=n.get(ce).__webglTexture;t.bindTexture(ne,qe),g(ne),t.unbindTexture()}}}const _e=[],he=[];function Ee(L){if(L.samples>0){if(je(L)===!1){const S=L.textures,k=L.width,ee=L.height;let ce=s.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=n.get(L),Me=S.length>1;if(Me)for(let st=0;st<S.length;st++)t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Pe=L.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let st=0;st<S.length;st++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[st]);const me=n.get(S[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,k,ee,0,0,k,ee,ce,s.NEAREST),l===!0&&(_e.length=0,he.length=0,_e.push(s.COLOR_ATTACHMENT0+st),L.depthBuffer&&L.resolveDepthBuffer===!1&&(_e.push(ne),he.push(ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let st=0;st<S.length;st++){t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,qe.__webglColorRenderbuffer[st]);const me=n.get(S[st]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function N(L){return Math.min(i.maxSamples,L.samples)}function je(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ue(L){const S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Xe(L,S){const k=L.colorSpace,ee=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||k!==Eo&&k!==Bs&&(Nt.getTransfer(k)===Kt?(ee!==Fi||ce!==Zi)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",k)),S}function ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=te,this.rebindTextures=it,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ry(s,e){function t(n,i=Bs){let r;const a=Nt.getTransfer(i);if(n===Zi)return s.UNSIGNED_BYTE;if(n===Zf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$f)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$m)return s.BYTE;if(n===Km)return s.SHORT;if(n===Sl)return s.UNSIGNED_SHORT;if(n===qf)return s.INT;if(n===Ir)return s.UNSIGNED_INT;if(n===Oi)return s.FLOAT;if(n===ds)return s.HALF_FLOAT;if(n===Qm)return s.ALPHA;if(n===eg)return s.RGB;if(n===Fi)return s.RGBA;if(n===ps)return s.DEPTH_COMPONENT;if(n===fa)return s.DEPTH_STENCIL;if(n===Kf)return s.RED;if(n===_h)return s.RED_INTEGER;if(n===To)return s.RG;if(n===Jf)return s.RG_INTEGER;if(n===jf)return s.RGBA_INTEGER;if(n===Tc||n===Ec||n===Ac||n===Cc)if(a===Kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ec)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ku||n===Ju||n===ju||n===Qu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ku)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ju)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ju)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ef||n===tf||n===nf||n===rf||n===sf||n===af||n===of)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ef||n===tf)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rf)return r.COMPRESSED_R11_EAC;if(n===sf)return r.COMPRESSED_SIGNED_R11_EAC;if(n===af)return r.COMPRESSED_RG11_EAC;if(n===of)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lf||n===cf||n===hf||n===uf||n===ff||n===df||n===pf||n===mf||n===gf||n===_f||n===xf||n===vf||n===yf||n===bf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ff)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===df)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_f)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bf)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mf||n===Sf||n===wf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mf)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tf||n===Ef||n===Af||n===Cf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tf)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ef)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Af)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wl?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const iP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dr({vertexShader:iP,fragmentShader:rP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new Vl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aP extends gs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new sP,g={},y=t.getContextAttributes();let x=null,v=null;const b=[],w=[],A=new ae;let R=null;const M=new jn;M.viewport=new Yt;const T=new jn;T.viewport=new Yt;const U=[M,T],F=new gy;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ue=b[oe];return ue===void 0&&(ue=new Uu,b[oe]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(oe){let ue=b[oe];return ue===void 0&&(ue=new Uu,b[oe]=ue),ue.getGripSpace()},this.getHand=function(oe){let ue=b[oe];return ue===void 0&&(ue=new Uu,b[oe]=ue),ue.getHandSpace()};function $(oe){const ue=w.indexOf(oe.inputSource);if(ue===-1)return;const ve=b[ue];ve!==void 0&&(ve.update(oe.inputSource,oe.frame,c||a),ve.dispatchEvent({type:oe.type,data:oe.inputSource}))}function W(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let oe=0;oe<b.length;oe++){const ue=w[oe];ue!==null&&(w[oe]=null,b[oe].disconnect(ue))}B=null,q=null,m.reset();for(const oe in g)delete g[oe];e.setRenderTarget(x),d=null,f=null,u=null,i=null,v=null,Rt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,le=null,Be=null;y.depth&&(Be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?fa:ps,le=y.stencil?wl:Ir);const Oe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new _r(f.textureWidth,f.textureHeight,{format:Fi,type:Zi,depthTexture:new Pl(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new _r(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(oe){for(let ue=0;ue<oe.removed.length;ue++){const ve=oe.removed[ue],le=w.indexOf(ve);le>=0&&(w[le]=null,b[le].disconnect(ve))}for(let ue=0;ue<oe.added.length;ue++){const ve=oe.added[ue];let le=w.indexOf(ve);if(le===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=w.length){w.push(ve),le=Oe;break}else if(w[Oe]===null){w[Oe]=ve,le=Oe;break}if(le===-1)break}const Be=b[le];Be&&Be.connect(ve)}}const te=new D,de=new D;function pe(oe,ue,ve){te.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);const le=te.distanceTo(de),Be=ue.projectionMatrix.elements,Oe=ve.projectionMatrix.elements,it=Be[14]/(Be[10]-1),tt=Be[14]/(Be[10]+1),Q=(Be[9]+1)/Be[5],_e=(Be[9]-1)/Be[5],he=(Be[8]-1)/Be[0],Ee=(Oe[8]+1)/Oe[0],N=it*he,je=it*Ee,Ue=le/(-he+Ee),Xe=Ue*-he;if(ue.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Xe),oe.translateZ(Ue),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Be[10]===-1)oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const ye=it+Ue,L=tt+Ue,S=N-Xe,k=je+(le-Xe),ee=Q*tt/L*ye,ce=_e*tt/L*ye;oe.projectionMatrix.makePerspective(S,k,ee,ce,ye,L),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function be(oe,ue){ue===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ue.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(i===null)return;let ue=oe.near,ve=oe.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),F.near=T.near=M.near=ue,F.far=T.far=M.far=ve,(B!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,q=F.far),F.layers.mask=oe.layers.mask|6,M.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;const le=oe.parent,Be=F.cameras;be(F,le);for(let Oe=0;Oe<Be.length;Oe++)be(Be[Oe],le);Be.length===2?pe(F,M,T):F.projectionMatrix.copy(M.projectionMatrix),Je(oe,F,le)};function Je(oe,ue,ve){ve===null?oe.matrix.copy(ue.matrixWorld):(oe.matrix.copy(ve.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ue.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Al*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(oe){return g[oe]};let rt=null;function bt(oe,ue){if(h=ue.getViewerPose(c||a),p=ue,h!==null){const ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let le=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,le=!0);for(let tt=0;tt<ve.length;tt++){const Q=ve[tt];let _e=null;if(d!==null)_e=d.getViewport(Q);else{const Ee=u.getViewSubImage(f,Q);_e=Ee.viewport,tt===0&&(e.setRenderTargetTextures(v,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(v))}let he=U[tt];he===void 0&&(he=new jn,he.layers.enable(tt),he.viewport=new Yt,U[tt]=he),he.matrix.fromArray(Q.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Q.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(_e.x,_e.y,_e.width,_e.height),tt===0&&(F.matrix.copy(he.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),le===!0&&F.cameras.push(he)}const Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const tt=u.getDepthInformation(ve[0]);tt&&tt.isValid&&tt.texture&&m.init(tt,i.renderState)}if(Be&&Be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let tt=0;tt<ve.length;tt++){const Q=ve[tt].camera;if(Q){let _e=g[Q];_e||(_e=new dg,g[Q]=_e);const he=u.getCameraImage(Q);_e.sourceTexture=he}}}}for(let ve=0;ve<b.length;ve++){const le=w[ve],Be=b[ve];le!==null&&Be!==void 0&&Be.update(le,ue,c||a)}rt&&rt(oe,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}const Rt=new wy;Rt.setAnimationLoop(bt),this.setAnimationLoop=function(oe){rt=oe},this.dispose=function(){}}}const io=new vr,oP=new ot;function lP(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ev(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,x,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Bi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Bi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,io.copy(v),io.x*=-1,io.y*=-1,io.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),m.envMapRotation.value.setFromMatrix4(oP.makeRotationFromEuler(io)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cP(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(p(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(y,b);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),b=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,A=v.length;w<A;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,T=R.length;M<T;M++){const U=R[M];if(d(U,w,M,b)===!0){const F=U.__offset,B=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let $=0;$<B.length;$++){const W=B[$],Y=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+q,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,v,b){const w=y.value,A=x+"_"+v;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const R=b[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function p(y){const x=y.uniforms;let v=0;const b=16;for(let A=0,R=x.length;A<R;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,U=M.length;T<U;T++){const F=M[T],B=Array.isArray(F.value)?F.value:[F.value];for(let q=0,$=B.length;q<$;q++){const W=B[q],Y=_(W),te=v%b,de=te%Y.boundary,pe=te+de;v+=de,pe!==0&&b-pe<Y.storage&&(v+=b-pe),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Y.storage}}}const w=v%b;return w>0&&(v+=b-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}const hP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ns=null;function uP(){return ns===null&&(ns=new qr(hP,16,16,To,ds),ns.name="DFG_LUT",ns.minFilter=rn,ns.magFilter=rn,ns.wrapS=Ki,ns.wrapT=Ki,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}class Py{constructor(e={}){const{canvas:t=Sv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Zi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,m=new Set([jf,Jf,_h]),g=new Set([Zi,Ir,Sl,wl,Zf,$f]),y=new Uint32Array(4),x=new Int32Array(4);let v=null,b=null;const w=[],A=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=qi;let U=0,F=0,B=null,q=-1,$=null;const W=new Yt,Y=new Yt;let te=null;const de=new We(0);let pe=0,be=t.width,Je=t.height,rt=1,bt=null,Rt=null;const oe=new Yt(0,0,be,Je),ue=new Yt(0,0,be,Je);let ve=!1;const le=new kl;let Be=!1,Oe=!1;const it=new ot,tt=new D,Q=new Yt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ee(){return B===null?rt:1}let N=n;function je(C,V){return t.getContext(C,V)}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xf}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Wt,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),N===null){const V="webgl2";if(N=je(V,C),N===null)throw je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw et("WebGLRenderer: "+C.message),C}let Ue,Xe,ye,L,S,k,ee,ce,ne,qe,Me,Pe,st,me,Ae,Ve,Ze,we,gt,z,Ie,xe,ze,ge;function se(){Ue=new fC(N),Ue.init(),xe=new Ry(N,Ue),Xe=new iC(N,Ue,e,xe),ye=new tP(N,Ue),Xe.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),L=new mC(N),S=new kR,k=new nP(N,Ue,ye,S,Xe,xe,L),ee=new sC(M),ce=new uC(M),ne=new vT(N),ze=new tC(N,ne),qe=new dC(N,ne,L,ze),Me=new _C(N,qe,ne,L),gt=new gC(N,Xe,k),Ve=new rC(S),Pe=new zR(M,ee,ce,Ue,Xe,ze,Ve),st=new lP(M,S),me=new GR,Ae=new ZR(Ue),we=new eC(M,ee,ce,ye,Me,p,l),Ze=new QR(M,Me,Xe),ge=new cP(N,L,Xe,ye),z=new nC(N,Ue,L),Ie=new pC(N,Ue,L),L.programs=Pe.programs,M.capabilities=Xe,M.extensions=Ue,M.properties=S,M.renderLists=me,M.shadowMap=Ze,M.state=ye,M.info=L}se(),_!==Zi&&(R=new vC(_,t.width,t.height,i,r));const Se=new aP(M,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(C){C!==void 0&&(rt=C,this.setSize(be,Je,!1))},this.getSize=function(C){return C.set(be,Je)},this.setSize=function(C,V,j=!0){if(Se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}be=C,Je=V,t.width=Math.floor(C*rt),t.height=Math.floor(V*rt),j===!0&&(t.style.width=C+"px",t.style.height=V+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(be*rt,Je*rt).floor()},this.setDrawingBufferSize=function(C,V,j){be=C,Je=V,rt=j,t.width=Math.floor(C*j),t.height=Math.floor(V*j),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(_===Zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,V,j,K){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,V,j,K),ye.viewport(W.copy(oe).multiplyScalar(rt).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,V,j,K){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,V,j,K),ye.scissor(Y.copy(ue).multiplyScalar(rt).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){ye.setScissorTest(ve=C)},this.setOpaqueSort=function(C){bt=C},this.setTransparentSort=function(C){Rt=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,j=!0){let K=0;if(C){let X=!1;if(B!==null){const Te=B.texture.format;X=m.has(Te)}if(X){const Te=B.texture.type,ke=g.has(Te),Re=we.getClearColor(),He=we.getClearAlpha(),De=Re.r,Ke=Re.g,Qe=Re.b;ke?(y[0]=De,y[1]=Ke,y[2]=Qe,y[3]=He,N.clearBufferuiv(N.COLOR,0,y)):(x[0]=De,x[1]=Ke,x[2]=Qe,x[3]=He,N.clearBufferiv(N.COLOR,0,x))}else K|=N.COLOR_BUFFER_BIT}V&&(K|=N.DEPTH_BUFFER_BIT),j&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Wt,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),we.dispose(),me.dispose(),Ae.dispose(),S.dispose(),ee.dispose(),ce.dispose(),Me.dispose(),ze.dispose(),ge.dispose(),Pe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Xl),Se.removeEventListener("sessionend",Yl),Mi.stop()};function nt(C){C.preventDefault(),qc("WebGLRenderer: Context Lost."),T=!0}function Wt(){qc("WebGLRenderer: Context Restored."),T=!1;const C=L.autoReset,V=Ze.enabled,j=Ze.autoUpdate,K=Ze.needsUpdate,X=Ze.type;se(),L.autoReset=C,Ze.enabled=V,Ze.autoUpdate=j,Ze.needsUpdate=K,Ze.type=X}function Xt(C){et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ir(C){const V=C.target;V.removeEventListener("dispose",ir),Ur(V)}function Ur(C){Eh(C),S.remove(C)}function Eh(C){const V=S.get(C).programs;V!==void 0&&(V.forEach(function(j){Pe.releaseProgram(j)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,j,K,X,Te){V===null&&(V=_e);const ke=X.isMesh&&X.matrixWorld.determinant()<0,Re=Da(C,V,j,K,X);ye.setMaterial(K,ke);let He=j.index,De=1;if(K.wireframe===!0){if(He=qe.getWireframeAttribute(j),He===void 0)return;De=2}const Ke=j.drawRange,Qe=j.attributes.position;let Tt=Ke.start*De,pt=(Ke.start+Ke.count)*De;Te!==null&&(Tt=Math.max(Tt,Te.start*De),pt=Math.min(pt,(Te.start+Te.count)*De)),He!==null?(Tt=Math.max(Tt,0),pt=Math.min(pt,He.count)):Qe!=null&&(Tt=Math.max(Tt,0),pt=Math.min(pt,Qe.count));const Ut=pt-Tt;if(Ut<0||Ut===1/0)return;ze.setup(X,K,Re,j,He);let sn,$t=z;if(He!==null&&(sn=ne.get(He),$t=Ie,$t.setIndex(sn)),X.isMesh)K.wireframe===!0?(ye.setLineWidth(K.wireframeLinewidth*Ee()),$t.setMode(N.LINES)):$t.setMode(N.TRIANGLES);else if(X.isLine){let $e=K.linewidth;$e===void 0&&($e=1),ye.setLineWidth($e*Ee()),X.isLineSegments?$t.setMode(N.LINES):X.isLineLoop?$t.setMode(N.LINE_LOOP):$t.setMode(N.LINE_STRIP)}else X.isPoints?$t.setMode(N.POINTS):X.isSprite&&$t.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)El("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))$t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,zt=X._multiDrawCounts,Ot=X._multiDrawCount,Si=He?ne.get(He).bytesPerElement:1,$r=S.get(K).currentProgram.getUniforms();for(let wi=0;wi<Ot;wi++)$r.setValue(N,"_gl_DrawID",wi),$t.render($e[wi]/Si,zt[wi])}else if(X.isInstancedMesh)$t.renderInstances(Tt,Ut,X.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zt=Math.min(j.instanceCount,$e);$t.renderInstances(Tt,Ut,zt)}else $t.render(Tt,Ut)};function Wl(C,V,j){C.transparent===!0&&C.side===ss&&C.forceSinglePass===!1?(C.side=Bi,C.needsUpdate=!0,xs(C,V,j),C.side=Vs,C.needsUpdate=!0,xs(C,V,j),C.side=ss):xs(C,V,j)}this.compile=function(C,V,j=null){j===null&&(j=C),b=Ae.get(j),b.init(V),A.push(b),j.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),C!==j&&C.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const K=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let ke=0;ke<Te.length;ke++){const Re=Te[ke];Wl(Re,j,X),K.add(Re)}else Wl(Te,j,X),K.add(Te)}),b=A.pop(),K},this.compileAsync=function(C,V,j=null){const K=this.compile(C,V,j);return new Promise(X=>{function Te(){if(K.forEach(function(ke){S.get(ke).currentProgram.isReady()&&K.delete(ke)}),K.size===0){X(C);return}setTimeout(Te,10)}Ue.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Vi=null;function Ia(C){Vi&&Vi(C)}function Xl(){Mi.stop()}function Yl(){Mi.start()}const Mi=new wy;Mi.setAnimationLoop(Ia),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){Vi=C,Se.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},Se.addEventListener("sessionstart",Xl),Se.addEventListener("sessionend",Yl),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const j=Se.enabled===!0&&Se.isPresenting===!0,K=R!==null&&(B===null||j)&&R.begin(M,B);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,V,B),b=Ae.get(C,A.length),b.init(V),A.push(b),it.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),le.setFromProjectionMatrix(it,dr,V.reversedDepth),Oe=this.localClippingEnabled,Be=Ve.init(this.clippingPlanes,Oe),v=me.get(C,w.length),v.init(),w.push(v),Se.enabled===!0&&Se.isPresenting===!0){const ke=M.xr.getDepthSensingMesh();ke!==null&&Uo(ke,V,-1/0,M.sortObjects)}Uo(C,V,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(bt,Rt),he=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,he&&we.addToRenderList(v,C),this.info.render.frame++,Be===!0&&Ve.beginShadows();const X=b.state.shadowsArray;if(Ze.render(X,C,V),Be===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&R.hasRenderPass())===!1){const ke=v.opaque,Re=v.transmissive;if(b.setupLights(),V.isArrayCamera){const He=V.cameras;if(Re.length>0)for(let De=0,Ke=He.length;De<Ke;De++){const Qe=He[De];Ah(ke,Re,C,Qe)}he&&we.render(C);for(let De=0,Ke=He.length;De<Ke;De++){const Qe=He[De];ql(v,C,Qe,Qe.viewport)}}else Re.length>0&&Ah(ke,Re,C,V),he&&we.render(C),ql(v,C,V)}B!==null&&F===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),K&&R.end(M),C.isScene===!0&&C.onAfterRender(M,C,V),ze.resetDefaultState(),q=-1,$=null,A.pop(),A.length>0?(b=A[A.length-1],Be===!0&&Ve.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function Uo(C,V,j,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){K&&Q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);const ke=Me.update(C),Re=C.material;Re.visible&&v.push(C,ke,Re,j,Q.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){const ke=Me.update(C),Re=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Q.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Q.copy(ke.boundingSphere.center)),Q.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(Re)){const He=ke.groups;for(let De=0,Ke=He.length;De<Ke;De++){const Qe=He[De],Tt=Re[Qe.materialIndex];Tt&&Tt.visible&&v.push(C,ke,Tt,j,Q.z,Qe)}}else Re.visible&&v.push(C,ke,Re,j,Q.z,null)}}const Te=C.children;for(let ke=0,Re=Te.length;ke<Re;ke++)Uo(Te[ke],V,j,K)}function ql(C,V,j,K){const{opaque:X,transmissive:Te,transparent:ke}=C;b.setupLightsView(j),Be===!0&&Ve.setGlobalState(M.clippingPlanes,j),K&&ye.viewport(W.copy(K)),X.length>0&&Oo(X,V,j),Te.length>0&&Oo(Te,V,j),ke.length>0&&Oo(ke,V,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ah(C,V,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[K.id]===void 0){const Tt=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[K.id]=new _r(1,1,{generateMipmaps:!0,type:Tt?ds:Zi,minFilter:os,samples:Xe.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Te=b.state.transmissionRenderTarget[K.id],ke=K.viewport||W;Te.setSize(ke.z*M.transmissionResolutionScale,ke.w*M.transmissionResolutionScale);const Re=M.getRenderTarget(),He=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(Te),M.getClearColor(de),pe=M.getClearAlpha(),pe<1&&M.setClearColor(16777215,.5),M.clear(),he&&we.render(j);const Ke=M.toneMapping;M.toneMapping=Yr;const Qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),b.setupLightsView(K),Be===!0&&Ve.setGlobalState(M.clippingPlanes,K),Oo(C,j,K),k.updateMultisampleRenderTarget(Te),k.updateRenderTargetMipmap(Te),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let pt=0,Ut=V.length;pt<Ut;pt++){const sn=V[pt],{object:$t,geometry:$e,material:zt,group:Ot}=sn;if(zt.side===ss&&$t.layers.test(K.layers)){const Si=zt.side;zt.side=Bi,zt.needsUpdate=!0,rr($t,j,K,$e,zt,Ot),zt.side=Si,zt.needsUpdate=!0,Tt=!0}}Tt===!0&&(k.updateMultisampleRenderTarget(Te),k.updateRenderTargetMipmap(Te))}M.setRenderTarget(Re,He,De),M.setClearColor(de,pe),Qe!==void 0&&(K.viewport=Qe),M.toneMapping=Ke}function Oo(C,V,j){const K=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Te=C.length;X<Te;X++){const ke=C[X],{object:Re,geometry:He,group:De}=ke;let Ke=ke.material;Ke.allowOverride===!0&&K!==null&&(Ke=K),Re.layers.test(j.layers)&&rr(Re,V,j,He,Ke,De)}}function rr(C,V,j,K,X,Te){C.onBeforeRender(M,V,j,K,X,Te),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(M,V,j,K,C,Te),X.transparent===!0&&X.side===ss&&X.forceSinglePass===!1?(X.side=Bi,X.needsUpdate=!0,M.renderBufferDirect(j,V,K,X,C,Te),X.side=Vs,X.needsUpdate=!0,M.renderBufferDirect(j,V,K,X,C,Te),X.side=ss):M.renderBufferDirect(j,V,K,X,C,Te),C.onAfterRender(M,V,j,K,X,Te)}function xs(C,V,j){V.isScene!==!0&&(V=_e);const K=S.get(C),X=b.state.lights,Te=b.state.shadowsArray,ke=X.state.version,Re=Pe.getParameters(C,X.state,Te,V,j),He=Pe.getProgramCacheKey(Re);let De=K.programs;K.environment=C.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(C.isMeshStandardMaterial?ce:ee).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",ir),De=new Map,K.programs=De);let Ke=De.get(He);if(Ke!==void 0){if(K.currentProgram===Ke&&K.lightsStateVersion===ke)return Bn(C,Re),Ke}else Re.uniforms=Pe.getUniforms(C),C.onBeforeCompile(Re,M),Ke=Pe.acquireProgram(Re,He),De.set(He,Ke),K.uniforms=Re.uniforms;const Qe=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ve.uniform),Bn(C,Re),K.needsLights=La(C),K.lightsStateVersion=ke,K.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ke,K.uniformsList=null,Ke}function oi(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Ou.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Bn(C,V){const j=S.get(C);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Da(C,V,j,K,X){V.isScene!==!0&&(V=_e),k.resetTextureUnits();const Te=V.fog,ke=K.isMeshStandardMaterial?V.environment:null,Re=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Eo,He=(K.isMeshStandardMaterial?ce:ee).get(K.envMap||ke),De=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ke=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Qe=!!j.morphAttributes.position,Tt=!!j.morphAttributes.normal,pt=!!j.morphAttributes.color;let Ut=Yr;K.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const sn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$t=sn!==void 0?sn.length:0,$e=S.get(K),zt=b.state.lights;if(Be===!0&&(Oe===!0||C!==$)){const qn=C===$&&K.id===q;Ve.setState(K,C,qn)}let Ot=!1;K.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==zt.state.version||$e.outputColorSpace!==Re||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==He||K.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ve.numPlanes||$e.numIntersection!==Ve.numIntersection)||$e.vertexAlphas!==De||$e.vertexTangents!==Ke||$e.morphTargets!==Qe||$e.morphNormals!==Tt||$e.morphColors!==pt||$e.toneMapping!==Ut||$e.morphTargetsCount!==$t)&&(Ot=!0):(Ot=!0,$e.__version=K.version);let Si=$e.currentProgram;Ot===!0&&(Si=xs(K,V,X));let $r=!1,wi=!1,Kr=!1;const xt=Si.getUniforms(),Vt=$e.uniforms;if(ye.useProgram(Si.program)&&($r=!0,wi=!0,Kr=!0),K.id!==q&&(q=K.id,wi=!0),$r||$!==C){ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(N,"projectionMatrix",C.projectionMatrix),xt.setValue(N,"viewMatrix",C.matrixWorldInverse);const zn=xt.map.cameraPosition;zn!==void 0&&zn.setValue(N,tt.setFromMatrixPosition(C.matrixWorld)),Xe.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,wi=!0,Kr=!0)}if($e.needsLights&&(zt.state.directionalShadowMap.length>0&&xt.setValue(N,"directionalShadowMap",zt.state.directionalShadowMap,k),zt.state.spotShadowMap.length>0&&xt.setValue(N,"spotShadowMap",zt.state.spotShadowMap,k),zt.state.pointShadowMap.length>0&&xt.setValue(N,"pointShadowMap",zt.state.pointShadowMap,k)),X.isSkinnedMesh){xt.setOptional(N,X,"bindMatrix"),xt.setOptional(N,X,"bindMatrixInverse");const qn=X.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),xt.setValue(N,"boneTexture",qn.boneTexture,k))}X.isBatchedMesh&&(xt.setOptional(N,X,"batchingTexture"),xt.setValue(N,"batchingTexture",X._matricesTexture,k),xt.setOptional(N,X,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",X._indirectTexture,k),xt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",X._colorsTexture,k));const ti=j.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&gt.update(X,j,Si),(wi||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,xt.setValue(N,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Vt.envMap.value=He,Vt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Vt.envMapIntensity.value=V.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=uP()),wi&&(xt.setValue(N,"toneMappingExposure",M.toneMappingExposure),$e.needsLights&&vs(Vt,Kr),Te&&K.fog===!0&&st.refreshFogUniforms(Vt,Te),st.refreshMaterialUniforms(Vt,K,rt,Je,b.state.transmissionRenderTarget[C.id]),Ou.upload(N,oi($e),Vt,k)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ou.upload(N,oi($e),Vt,k),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(N,"center",X.center),xt.setValue(N,"modelViewMatrix",X.modelViewMatrix),xt.setValue(N,"normalMatrix",X.normalMatrix),xt.setValue(N,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const qn=K.uniformsGroups;for(let zn=0,Zs=qn.length;zn<Zs;zn++){const Mr=qn[zn];ge.update(Mr,Si),ge.bind(Mr,Si)}}return Si}function vs(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function La(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,V,j){const K=S.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),S.get(C.texture).__webglTexture=V,S.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const j=S.get(C);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0};const Zl=N.createFramebuffer();this.setRenderTarget=function(C,V=0,j=0){B=C,U=V,F=j;let K=null,X=!1,Te=!1;if(C){const Re=S.get(C);if(Re.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(N.FRAMEBUFFER,Re.__webglFramebuffer),W.copy(C.viewport),Y.copy(C.scissor),te=C.scissorTest,ye.viewport(W),ye.scissor(Y),ye.setScissorTest(te),q=-1;return}else if(Re.__webglFramebuffer===void 0)k.setupRenderTarget(C);else if(Re.__hasExternalTextures)k.rebindTextures(C,S.get(C.texture).__webglTexture,S.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ke=C.depthTexture;if(Re.__boundDepthTexture!==Ke){if(Ke!==null&&S.has(Ke)&&(C.width!==Ke.image.width||C.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const De=S.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(De[V])?K=De[V][j]:K=De[V],X=!0):C.samples>0&&k.useMultisampledRTT(C)===!1?K=S.get(C).__webglMultisampledFramebuffer:Array.isArray(De)?K=De[j]:K=De,W.copy(C.viewport),Y.copy(C.scissor),te=C.scissorTest}else W.copy(oe).multiplyScalar(rt).floor(),Y.copy(ue).multiplyScalar(rt).floor(),te=ve;if(j!==0&&(K=Zl),ye.bindFramebuffer(N.FRAMEBUFFER,K)&&ye.drawBuffers(C,K),ye.viewport(W),ye.scissor(Y),ye.setScissorTest(te),X){const Re=S.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Re.__webglTexture,j)}else if(Te){const Re=V;for(let He=0;He<C.textures.length;He++){const De=S.get(C.textures[He]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+He,De.__webglTexture,j,Re)}}else if(C!==null&&j!==0){const Re=S.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,j)}q=-1},this.readRenderTargetPixels=function(C,V,j,K,X,Te,ke,Re=0){if(!(C&&C.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){ye.bindFramebuffer(N.FRAMEBUFFER,He);try{const De=C.textures[Re],Ke=De.format,Qe=De.type;if(!Xe.textureFormatReadable(Ke)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Qe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&j>=0&&j<=C.height-X&&(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Re),N.readPixels(V,j,K,X,xe.convert(Ke),xe.convert(Qe),Te))}finally{const De=B!==null?S.get(B).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(C,V,j,K,X,Te,ke,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He)if(V>=0&&V<=C.width-K&&j>=0&&j<=C.height-X){ye.bindFramebuffer(N.FRAMEBUFFER,He);const De=C.textures[Re],Ke=De.format,Qe=De.type;if(!Xe.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.bufferData(N.PIXEL_PACK_BUFFER,Te.byteLength,N.STREAM_READ),C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Re),N.readPixels(V,j,K,X,xe.convert(Ke),xe.convert(Qe),0);const pt=B!==null?S.get(B).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,pt);const Ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await MS(N,Ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Te),N.deleteBuffer(Tt),N.deleteSync(Ut),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,j=0){const K=Math.pow(2,-j),X=Math.floor(C.image.width*K),Te=Math.floor(C.image.height*K),ke=V!==null?V.x:0,Re=V!==null?V.y:0;k.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,ke,Re,X,Te),ye.unbindTexture()};const qs=N.createFramebuffer(),Ch=N.createFramebuffer();this.copyTextureToTexture=function(C,V,j=null,K=null,X=0,Te=null){Te===null&&(X!==0?(El("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=X,X=0):Te=0);let ke,Re,He,De,Ke,Qe,Tt,pt,Ut;const sn=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(j!==null)ke=j.max.x-j.min.x,Re=j.max.y-j.min.y,He=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Ke=j.min.y,Qe=j.isBox3?j.min.z:0;else{const ti=Math.pow(2,-X);ke=Math.floor(sn.width*ti),Re=Math.floor(sn.height*ti),C.isDataArrayTexture?He=sn.depth:C.isData3DTexture?He=Math.floor(sn.depth*ti):He=1,De=0,Ke=0,Qe=0}K!==null?(Tt=K.x,pt=K.y,Ut=K.z):(Tt=0,pt=0,Ut=0);const $t=xe.convert(V.format),$e=xe.convert(V.type);let zt;V.isData3DTexture?(k.setTexture3D(V,0),zt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),zt=N.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),zt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const Ot=N.getParameter(N.UNPACK_ROW_LENGTH),Si=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$r=N.getParameter(N.UNPACK_SKIP_PIXELS),wi=N.getParameter(N.UNPACK_SKIP_ROWS),Kr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,sn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,sn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const xt=C.isDataArrayTexture||C.isData3DTexture,Vt=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const ti=S.get(C),qn=S.get(V),zn=S.get(ti.__renderTarget),Zs=S.get(qn.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,zn.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Mr=0;Mr<He;Mr++)xt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,S.get(C).__webglTexture,X,Qe+Mr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,S.get(V).__webglTexture,Te,Ut+Mr)),N.blitFramebuffer(De,Ke,ke,Re,Tt,pt,ke,Re,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||S.has(C)){const ti=S.get(C),qn=S.get(V);ye.bindFramebuffer(N.READ_FRAMEBUFFER,qs),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ch);for(let zn=0;zn<He;zn++)xt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ti.__webglTexture,X,Qe+zn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ti.__webglTexture,X),Vt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qn.__webglTexture,Te,Ut+zn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qn.__webglTexture,Te),X!==0?N.blitFramebuffer(De,Ke,ke,Re,Tt,pt,ke,Re,N.COLOR_BUFFER_BIT,N.NEAREST):Vt?N.copyTexSubImage3D(zt,Te,Tt,pt,Ut+zn,De,Ke,ke,Re):N.copyTexSubImage2D(zt,Te,Tt,pt,De,Ke,ke,Re);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(zt,Te,Tt,pt,Ut,ke,Re,He,$t,$e,sn.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,Te,Tt,pt,Ut,ke,Re,He,$t,sn.data):N.texSubImage3D(zt,Te,Tt,pt,Ut,ke,Re,He,$t,$e,sn):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Te,Tt,pt,ke,Re,$t,$e,sn.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Te,Tt,pt,sn.width,sn.height,$t,sn.data):N.texSubImage2D(N.TEXTURE_2D,Te,Tt,pt,ke,Re,$t,$e,sn);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Si),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$r),N.pixelStorei(N.UNPACK_SKIP_ROWS,wi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Kr),Te===0&&V.generateMipmaps&&N.generateMipmap(zt),ye.unbindTexture()},this.initRenderTarget=function(C){S.get(C).__webglFramebuffer===void 0&&k.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?k.setTextureCube(C,0):C.isData3DTexture?k.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?k.setTexture2DArray(C,0):k.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){U=0,F=0,B=null,ye.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const fP=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Xm,AddEquation:ua,AddOperation:lv,AdditiveAnimationBlendMode:tg,AdditiveBlending:Qp,AgXToneMapping:Fc,AlphaFormat:Qm,AlwaysCompare:yv,AlwaysDepth:Wu,AlwaysStencilFunc:im,AmbientLight:uy,AnimationAction:yy,AnimationClip:Qc,AnimationLoader:uw,AnimationMixer:kw,AnimationObjectGroup:Bw,AnimationUtils:ow,ArcCurve:zv,ArrayCamera:gy,ArrowHelper:uT,AttachedBindMode:nm,Audio:xy,AudioAnalyser:Cw,AudioContext:Pg,AudioListener:Tw,AudioLoader:Mw,AxesHelper:fT,BackSide:Bi,BasicDepthPacking:dv,BasicShadowMap:DM,BatchedMesh:Lv,Bone:ug,BooleanKeyframeTrack:Io,Box2:Kw,Box3:On,Box3Helper:cT,BoxGeometry:Po,BoxHelper:lT,BufferAttribute:jt,BufferGeometry:yt,BufferGeometryLoader:my,ByteType:$m,Cache:ls,Camera:sd,CameraHelper:oT,CanvasTexture:P1,CapsuleGeometry:fd,CatmullRomCurve3:kv,CineonToneMapping:Wm,CircleGeometry:dd,ClampToEdgeWrapping:Ki,Clock:_y,Color:We,ColorKeyframeTrack:Eg,ColorManagement:Nt,CompressedArrayTexture:C1,CompressedCubeTexture:R1,CompressedTexture:ud,CompressedTextureLoader:fw,ConeGeometry:yh,ConstantAlphaFactor:sv,ConstantColorFactor:iv,Controls:Sy,CubeCamera:Av,CubeDepthTexture:Fv,CubeReflectionMapping:fs,CubeRefractionMapping:ba,CubeTexture:xh,CubeTextureLoader:dw,CubeUVReflectionMapping:zl,CubicBezierCurve:mg,CubicBezierCurve3:Vv,CubicInterpolant:ry,CullFaceBack:jp,CullFaceFront:Gx,CullFaceFrontBack:IM,CullFaceNone:Vx,Curve:Zr,CurvePath:Hv,CustomBlending:Hx,CustomToneMapping:Ym,CylinderGeometry:vh,Cylindrical:$w,Data3DTexture:id,DataArrayTexture:nd,DataTexture:qr,DataTextureLoader:pw,DataUtils:QS,DecrementStencilOp:KM,DecrementWrapStencilOp:jM,DefaultLoadingManager:Lo,DepthFormat:ps,DepthStencilFormat:fa,DepthTexture:Pl,DetachedBindMode:cv,DirectionalLight:hy,DirectionalLightHelper:aT,DiscreteInterpolant:sy,DodecahedronGeometry:pd,DoubleSide:ss,DstAlphaFactor:jx,DstColorFactor:ev,DynamicCopyUsage:dS,DynamicDrawUsage:oS,DynamicReadUsage:hS,EdgesGeometry:Bv,EllipseCurve:md,EqualCompare:_v,EqualDepth:Yu,EqualStencilFunc:nS,EquirectangularReflectionMapping:Bc,EquirectangularRefractionMapping:zc,Euler:vr,EventDispatcher:gs,ExternalTexture:dg,ExtrudeGeometry:gd,FileLoader:Gs,Float16BufferAttribute:a1,Float32BufferAttribute:Ye,FloatType:Oi,Fog:od,FogExp2:ad,FramebufferTexture:A1,FrontSide:Vs,Frustum:kl,FrustumArray:hd,GLBufferAttribute:Xw,GLSL1:mS,GLSL3:rm,GreaterCompare:xv,GreaterDepth:Zu,GreaterEqualCompare:td,GreaterEqualDepth:qu,GreaterEqualStencilFunc:aS,GreaterStencilFunc:rS,GridHelper:rT,Group:pa,HalfFloatType:ds,HemisphereLight:oy,HemisphereLightHelper:iT,IcosahedronGeometry:_d,ImageBitmapLoader:bw,ImageLoader:eh,ImageUtils:wv,IncrementStencilOp:$M,IncrementWrapStencilOp:JM,InstancedBufferAttribute:Rl,InstancedBufferGeometry:py,InstancedInterleavedBuffer:Ww,InstancedMesh:Dv,Int16BufferAttribute:r1,Int32BufferAttribute:s1,Int8BufferAttribute:t1,IntType:qf,InterleavedBuffer:ld,InterleavedBufferAttribute:Ao,Interpolant:Sh,InterpolateDiscrete:Gc,InterpolateLinear:Rf,InterpolateSmooth:Nu,InterpolationSamplingMode:xS,InterpolationSamplingType:_S,InvertStencilOp:QM,KeepStencilOp:oo,KeyframeTrack:Nr,LOD:Pv,LatheGeometry:xd,Layers:rd,LessCompare:gv,LessDepth:Xu,LessEqualCompare:ed,LessEqualDepth:wo,LessEqualStencilFunc:iS,LessStencilFunc:tS,Light:Ra,LightProbe:dy,Line:Sa,Line3:by,LineBasicMaterial:ki,LineCurve:gg,LineCurve3:Gv,LineDashedMaterial:ny,LineLoop:Nv,LineSegments:_s,LinearFilter:rn,LinearInterpolant:Tg,LinearMipMapLinearFilter:OM,LinearMipMapNearestFilter:UM,LinearMipmapLinearFilter:os,LinearMipmapNearestFilter:wc,LinearSRGBColorSpace:Eo,LinearToneMapping:Gm,LinearTransfer:Wc,Loader:nr,LoaderUtils:cm,LoadingManager:Ag,LoopOnce:hv,LoopPingPong:fv,LoopRepeat:uv,MOUSE:go,Material:bi,MaterialLoader:Td,MathUtils:ig,Matrix2:Ng,Matrix3:wt,Matrix4:ot,MaxEquation:qx,Mesh:Rn,MeshBasicMaterial:Ys,MeshDepthMaterial:Mg,MeshDistanceMaterial:Sg,MeshLambertMaterial:ey,MeshMatcapMaterial:ty,MeshNormalMaterial:Qv,MeshPhongMaterial:Jv,MeshPhysicalMaterial:Kv,MeshStandardMaterial:bg,MeshToonMaterial:jv,MinEquation:Yx,MirroredRepeatWrapping:Vc,MixOperation:ov,MultiplyBlending:tm,MultiplyOperation:gh,NearestFilter:Cn,NearestMipMapLinearFilter:NM,NearestMipMapNearestFilter:LM,NearestMipmapLinearFilter:fl,NearestMipmapNearestFilter:Zm,NeutralToneMapping:qm,NeverCompare:mv,NeverDepth:Hu,NeverStencilFunc:eS,NoBlending:hs,NoColorSpace:Bs,NoNormalPacking:WM,NoToneMapping:Yr,NormalAnimationBlendMode:Qf,NormalBlending:_o,NormalGAPacking:YM,NormalRGPacking:XM,NotEqualCompare:vv,NotEqualDepth:$u,NotEqualStencilFunc:sS,NumberKeyframeTrack:Jc,Object3D:kt,ObjectLoader:vw,ObjectSpaceNormalMap:pv,OctahedronGeometry:bh,OneFactor:$x,OneMinusConstantAlphaFactor:av,OneMinusConstantColorFactor:rv,OneMinusDstAlphaFactor:Qx,OneMinusDstColorFactor:tv,OneMinusSrcAlphaFactor:Gu,OneMinusSrcColorFactor:Jx,OrthographicCamera:Gl,PCFShadowMap:Mc,PCFSoftShadowMap:Sc,PMREMGenerator:dm,Path:Lf,PerspectiveCamera:jn,Plane:Os,PlaneGeometry:Vl,PlaneHelper:hT,PointLight:cy,PointLightHelper:tT,Points:Uv,PointsMaterial:fg,PolarGridHelper:sT,PolyhedronGeometry:Ca,PositionalAudio:Aw,PropertyBinding:Ht,PropertyMixer:vy,QuadraticBezierCurve:_g,QuadraticBezierCurve3:xg,Quaternion:vi,QuaternionKeyframeTrack:wh,QuaternionLinearInterpolant:ay,R11_EAC_Format:rf,RED_GREEN_RGTC2_Format:Af,RED_RGTC1_Format:Tf,REVISION:Xf,RG11_EAC_Format:af,RGBADepthPacking:VM,RGBAFormat:Fi,RGBAIntegerFormat:jf,RGBA_ASTC_10x10_Format:vf,RGBA_ASTC_10x5_Format:gf,RGBA_ASTC_10x6_Format:_f,RGBA_ASTC_10x8_Format:xf,RGBA_ASTC_12x10_Format:yf,RGBA_ASTC_12x12_Format:bf,RGBA_ASTC_4x4_Format:lf,RGBA_ASTC_5x4_Format:cf,RGBA_ASTC_5x5_Format:hf,RGBA_ASTC_6x5_Format:uf,RGBA_ASTC_6x6_Format:ff,RGBA_ASTC_8x5_Format:df,RGBA_ASTC_8x6_Format:pf,RGBA_ASTC_8x8_Format:mf,RGBA_BPTC_Format:Mf,RGBA_ETC2_EAC_Format:nf,RGBA_PVRTC_2BPPV1_Format:Qu,RGBA_PVRTC_4BPPV1_Format:ju,RGBA_S3TC_DXT1_Format:Ec,RGBA_S3TC_DXT3_Format:Ac,RGBA_S3TC_DXT5_Format:Cc,RGBDepthPacking:GM,RGBFormat:eg,RGBIntegerFormat:FM,RGB_BPTC_SIGNED_Format:Sf,RGB_BPTC_UNSIGNED_Format:wf,RGB_ETC1_Format:ef,RGB_ETC2_Format:tf,RGB_PVRTC_2BPPV1_Format:Ju,RGB_PVRTC_4BPPV1_Format:Ku,RGB_S3TC_DXT1_Format:Tc,RGDepthPacking:HM,RGFormat:To,RGIntegerFormat:Jf,RawShaderMaterial:yg,Ray:Xs,Raycaster:Yw,RectAreaLight:fy,RedFormat:Kf,RedIntegerFormat:_h,ReinhardToneMapping:Hm,RenderTarget:rg,RenderTarget3D:Vw,RepeatWrapping:kc,ReplaceStencilOp:ZM,ReverseSubtractEquation:Xx,RingGeometry:vd,SIGNED_R11_EAC_Format:sf,SIGNED_RED_GREEN_RGTC2_Format:Cf,SIGNED_RED_RGTC1_Format:Ef,SIGNED_RG11_EAC_Format:of,SRGBColorSpace:qi,SRGBTransfer:Kt,Scene:cg,ShaderChunk:ut,ShaderLib:Rr,ShaderMaterial:Dr,ShadowMaterial:$v,Shape:vo,ShapeGeometry:yd,ShapePath:dT,ShapeUtils:Xr,ShortType:Km,Skeleton:cd,SkeletonHelper:eT,SkinnedMesh:Iv,Source:da,Sphere:Fn,SphereGeometry:Mh,Spherical:um,SphericalHarmonics3:Rg,SplineCurve:vg,SpotLight:ly,SpotLightHelper:Qw,Sprite:Rv,SpriteMaterial:hg,SrcAlphaFactor:Vu,SrcAlphaSaturateFactor:nv,SrcColorFactor:Kx,StaticCopyUsage:fS,StaticDrawUsage:Xc,StaticReadUsage:cS,StereoCamera:Sw,StreamCopyUsage:pS,StreamDrawUsage:lS,StreamReadUsage:uS,StringKeyframeTrack:Do,SubtractEquation:Wx,SubtractiveBlending:em,TOUCH:ho,TangentSpaceNormalMap:Aa,TetrahedronGeometry:bd,Texture:Mn,TextureLoader:mw,TextureUtils:xT,Timer:qw,TimestampQuery:gS,TorusGeometry:Md,TorusKnotGeometry:Sd,Triangle:$i,TriangleFanDrawMode:kM,TriangleStripDrawMode:zM,TrianglesDrawMode:BM,TubeGeometry:wd,UVMapping:Yf,Uint16BufferAttribute:sg,Uint32BufferAttribute:ag,Uint8BufferAttribute:n1,Uint8ClampedBufferAttribute:i1,Uniform:Lg,UniformsGroup:Hw,UniformsLib:Ce,UniformsUtils:og,UnsignedByteType:Zi,UnsignedInt101111Type:jm,UnsignedInt248Type:wl,UnsignedInt5999Type:Jm,UnsignedIntType:Ir,UnsignedShort4444Type:Zf,UnsignedShort5551Type:$f,UnsignedShortType:Sl,VSMShadowMap:ul,Vector2:ae,Vector3:D,Vector4:Yt,VectorKeyframeTrack:jc,VideoFrameTexture:E1,VideoTexture:Ov,WebGL3DRenderTarget:HS,WebGLArrayRenderTarget:GS,WebGLCoordinateSystem:dr,WebGLCubeRenderTarget:lg,WebGLRenderTarget:_r,WebGLRenderer:Py,WebGLUtils:Ry,WebGPUCoordinateSystem:Tl,WebXRController:Uu,WireframeGeometry:Zv,WrapAroundEnding:Hc,ZeroCurvatureEnding:uo,ZeroFactor:Zx,ZeroSlopeEnding:fo,ZeroStencilOp:qM,createCanvasElement:Sv,error:et,getConsoleFunction:bS,log:qc,setConsoleFunction:yS,warn:Le,warnOnce:El},Symbol.toStringTag,{value:"Module"})),lx=Symbol(),dP=s=>typeof(s==null?void 0:s.subscribe)=="function",Iy=(s,e,t)=>{const n=s().map(a=>dP(a)?ku(a):lx),i=gi(()=>s().map((a,o)=>n[o]===lx?a:n[o].current)),r=()=>{Ne(i);let a;return zm(()=>{a=e(Ne(i))}),a};t?si(r):Oc(r)},pP=(s,e)=>Iy(s,e,!1),mP=(s,e)=>Iy(s,e,!0),C3=Object.assign(pP,{pre:mP}),Wr=(s,e)=>(s==null?void 0:s[`is${e}`])===!0,gP=typeof window<"u",Ns=(s,e)=>{const t=Wf(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});Bl(()=>{i(),n&&n()})},Qn=s=>{const e=Ml(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},_P=s=>({subscribe:s.subscribe,get current(){return s.current}}),Dy=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},xP=s=>{const{dom:e,canvas:t}=s,n=Qn({width:e.offsetWidth,height:e.offsetHeight});SM(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:o}=e;(n.current.width!==a||n.current.height!==o)&&n.set({width:a,height:o})});return r.observe(e),()=>{r.disconnect()}});const i={dom:e,canvas:t,size:_P(n)};return Lr("threlte-dom-context",i),i},Ug=()=>{const s=zi("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function vP(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class ha{constructor(){un(this,"allVertices",{});un(this,"isolatedVertices",{});un(this,"connectedVertices",{});un(this,"sortedConnectedValues",[]);un(this,"needsSort",!1);un(this,"emitter",vP());un(this,"emit",this.emitter.emit.bind(this.emitter));un(this,"on",this.emitter.on.bind(this.emitter));un(this,"off",this.emitter.off.bind(this.emitter));un(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=i.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class yP{constructor(e,t,n){un(this,"key");un(this,"stage");un(this,"callback");un(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class bP extends ha{constructor(t,n,i){super();un(this,"key");un(this,"scheduler");un(this,"runTask",!0);un(this,"callback",(t,n)=>n());un(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,this.start=this.start.bind(this),this.stop=this.stop.bind(this),i&&(this.callback=i.bind(this))}stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new yP(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.runTask&&this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){if(!this.runTask)return{};const n={};return this.callback(t,i=>{this.forEachNode(r=>{const a=performance.now();r.run(i??t);const o=performance.now()-a;n[r.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class MP extends ha{constructor(t){super();un(this,"lastTime",performance.now());un(this,"clampDeltaTo",.1);un(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new bP(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;i[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const SP=s=>{const e=new MP,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Qn(s.autoRender??!0),renderMode:Qn(s.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,r){n.shouldRender()&&r()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return Oc(()=>{n.autoRender.set(s.autoRender??!0)}),Oc(()=>{n.renderMode.set(s.renderMode??"on-demand")}),Bl(()=>{n.scheduler.dispose()}),Lr("threlte-scheduler-context",n),n},Cd=()=>{const s=zi("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},wP=()=>{const{size:s}=Ug(),{invalidate:e}=Cd(),t=new jn(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Qn(t);Ns(s,r=>{if(n.current===t){const a=n.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}}),Ns(n,r=>{r===void 0&&n.set(t)});const i={camera:n};return Lr("threlte-camera-context",i),i},Ly=()=>{const s=zi("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},TP=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await zx(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,n)=>{var i;(t===0||e)&&((i=n==null?void 0:n.dispose)==null||i.call(n),s.disposableObjects.delete(n))}),s.shouldDispose=!1)}};return Bl(()=>{s.dispose(!0)}),Lr("threlte-disposal-context",s),s},Ny=()=>{const s=zi("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},Uy=Symbol("threlte-parent-context"),Oy=s=>{const e=Qn(s);return Lr(Uy,e),e},Fy=()=>zi(Uy),Nf=Symbol("threlte-parent-object3d-context"),EP=s=>{const e=Vm(s);return Lr(Nf,e),e},AP=s=>{const e=zi(Nf),t=Ml(s),n=Wf([t,e],([i,r])=>i??r);return Lr(Nf,n),t},CP=()=>zi(Nf);function Og(s,e,t){if(!gP)return{task:void 0,start:()=>{},stop:()=>{},started:Vm(!1)};let n,i,r;ha.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=Cd();let o=a.mainStage;if(r){if(r.stage)if(ha.isValue(r.stage))o=r.stage;else{const f=a.scheduler.getStage(r.stage);if(!f)throw new Error(`No stage found with key ${r.stage.toString()}`);o=f}else if(r.after)if(Array.isArray(r.after))for(let f=0;f<r.after.length;f++){const d=r.after[f];if(ha.isValue(d)){o=d.stage;break}}else ha.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let f=0;f<r.before.length;f++){const d=r.before[f];if(ha.isValue(d)){o=d.stage;break}}else ha.isValue(r.before)&&(o=r.before.stage)}const l=Ml(!1),c=o.createTask(n,i,r),h=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&a.autoInvalidations.add(i),c.start()},u=()=>{l.set(!1),((r==null?void 0:r.autoInvalidate)??!0)&&a.autoInvalidations.delete(i),c.stop()};return(r==null?void 0:r.autoStart)??!0?h():u(),Bl(()=>{u(),o.removeTask(n)}),{task:c,start:h,stop:u,started:{subscribe:l.subscribe}}}const RP=s=>{const e={scene:new cg};return Lr("threlte-scene-context",e),e},By=()=>{const s=zi("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},PP=s=>{const{dispose:e}=Ny(),{camera:t}=Ly(),{scene:n}=By(),{invalidate:i,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:l}=Cd(),{size:c,canvas:h}=Ug(),u=s.createRenderer?s.createRenderer(h):new Py({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),f=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(n,t.current)}),d={renderer:u,colorManagementEnabled:Qn(s.colorManagementEnabled??!0),colorSpace:Qn(s.colorSpace??"srgb"),dpr:Qn(s.dpr??window.devicePixelRatio),shadows:Qn(s.shadows??Sc),toneMapping:Qn(s.toneMapping??Fc),autoRenderTask:f};Lr("threlte-renderer-context",d),Ns([d.colorManagementEnabled],([m])=>{Nt.enabled=m}),Ns([d.colorSpace],([m])=>{"outputColorSpace"in u&&(u.outputColorSpace=m)}),Ns([d.dpr],([m])=>{"setPixelRatio"in u&&u.setPixelRatio(m)});const{start:p,stop:_}=Og(()=>{var m;!("xr"in u)||(m=u.xr)!=null&&m.isPresenting||(u.setSize(c.current.width,c.current.height),i(),_())},{before:f,autoStart:!1,autoInvalidate:!1});return Ns([c],()=>{p()}),Ns([d.shadows],([m])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!m,m&&m!==!0?u.shadowMap.type=m:m===!0&&(u.shadowMap.type=Sc))}),Ns([d.toneMapping],([m])=>{"toneMapping"in u&&(u.toneMapping=m)}),Ns([a],([m])=>(m?d.autoRenderTask.start():d.autoRenderTask.stop(),()=>{d.autoRenderTask.stop()})),"setAnimationLoop"in d.renderer&&d.renderer.setAnimationLoop(g=>{e(),o.run(g),l()}),Bl(()=>{if("dispose"in d.renderer){const m=d.renderer.dispose;m()}}),si(()=>{d.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),si(()=>{d.colorSpace.set(s.colorSpace??"srgb")}),si(()=>{d.toneMapping.set(s.toneMapping??Fc)}),si(()=>{d.shadows.set(s.shadows??Sc)}),si(()=>{d.dpr.set(s.dpr??window.devicePixelRatio)}),d},IP=()=>{const s=zi("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},DP=()=>{const s=Qn({});return Lr("threlte-user-context",s),s},LP=()=>{const s=zi("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},NP=s=>{const{scene:e}=RP();return{scene:e,...xP(s),...PM(),...Oy(e),...EP(e),...TP(),...SP(s),...wP(),...PP(s),...DP()}};function UP(s,e){Gf(e,!0);let t=ph(e,["$$slots","$$events","$$legacy","children"]);NP(t);var n=dh(),i=fh(n);mh(i,()=>e.children),bl(s,n),Hf()}var OP=xM('<div class="svelte-1osucwe"><canvas class="svelte-1osucwe"><!></canvas></div>');function R3(s,e){let t=ph(e,["$$slots","$$events","$$legacy","children"]),n=C_(void 0),i=C_(void 0);var r=OP(),a=A_(r),o=A_(a);{var l=c=>{UP(c,km({get dom(){return Ne(i)},get canvas(){return Ne(n)}},()=>t,{children:(h,u)=>{var f=dh(),d=fh(f);mh(d,()=>e.children??uh),bl(h,f)},$$slots:{default:!0}}))};vM(o,c=>{Ne(n)&&Ne(i)&&c(l)})}R_(a),P_(a,c=>Jp(n,c),()=>Ne(n)),R_(r),P_(r,c=>Jp(i,c),()=>Ne(i)),bl(s,r)}const Rd=()=>{const s=Cd(),e=IP(),t=Ly(),n=By(),i=Ug();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},FP=s=>typeof s=="object"&&s!==null,BP=(s,e)=>{const{invalidate:t}=Rd(),n=gi(s),i=gi(e),r=ku(Fy()),a=ku(CP()),o=Oy(),l=AP();si(()=>{o.set(Ne(n)),Wr(Ne(n),"Object3D")&&l.set(Ne(n)),t()}),si(()=>{var h;t();const c=Ne(n);if(Ne(i)===void 0&&Wr(c,"Object3D"))return(h=a.current)==null||h.add(c),()=>{var u;t(),(u=a.current)==null||u.remove(c)};if(Ne(i)===void 0&&FP(r.current)){const u=r.current;if(Wr(c,"Material")){const f=u.material;return u.material=c,()=>{t(),u.material=f}}else if(Wr(c,"BufferGeometry")){const f=u.geometry;return u.geometry=c,()=>{t(),u.geometry=f}}}if(Ne(i)===!1)return()=>{t()};if(typeof Ne(i)=="function"){const u=Ne(i)({ref:c,parent:r.current,parentObject3D:a.current});return()=>{t(),u==null||u()}}if(typeof Ne(i)=="string"){const{target:u,key:f}=Dy(r.current,Ne(i));if(f in u){const d=u[f];return u[f]=c,()=>{t(),u[f]=d}}else return u[f]=c,()=>{t(),delete u[f]}}if(Wr(Ne(i),"Object3D")&&Wr(c,"Object3D"))return Ne(i).add(c),()=>{t(),Ne(i).remove(c)}})},Op=new Set,zP=(s,e,t)=>{const{invalidate:n,size:i,camera:r}=Rd(),a=gi(s),o=ku(i);si(()=>{if(!t())return;const l=Ne(a);return Op.add(l),r.set(l),n(),()=>{Op.delete(l),Op.size===0&&(r.set(void 0),n())}}),si(()=>{if(e())return;const{width:l,height:c}=o.current;Wr(Ne(a),"PerspectiveCamera")?Ne(a).aspect=l/c:Wr(Ne(a),"OrthographicCamera")&&(Ne(a).left=l/-2,Ne(a).right=l/2,Ne(a).top=c/2,Ne(a).bottom=c/-2),Ne(a).updateProjectionMatrix(),Ne(a).updateMatrixWorld(),n()})},gm=Symbol("threlte-disposable-object-context"),kP=s=>typeof(s==null?void 0:s.dispose)=="function",VP=s=>{const e=zi(gm),t=gi(()=>s()??(e==null?void 0:e())??!0);Lr(gm,()=>Ne(t))},GP=s=>{const e=gi(s),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=Ny(),r=zi(gm),a=gi(()=>(r==null?void 0:r())??!0);Oc(()=>{if(Ne(a))return t(Ne(e)),()=>n(Ne(e));i(Ne(e))})},HP=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,WP=(s,e,t)=>{const n=gi(s);for(const i of e){const r=gi(()=>t[i]);i.startsWith("on")&&si(()=>{if(typeof Ne(r)!="function"||!HP(Ne(n)))return;const a=i.slice(2);return Ne(n).addEventListener(a,Ne(r)),()=>Ne(n).removeEventListener(a,Ne(r))})}};let _m;const XP=s=>{_m=s},YP=()=>{const s=_m;return _m=void 0,s},qP="threlte-plugin-context",ZP=s=>{const e=zi(qP);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=s();for(let r=0;r<n.length;r++){const a=n[r],o=a(i);o&&o.pluginProps&&t.push(...o.pluginProps)}}return{pluginsProps:t}},$P=new Set(["$$scope","$$slots","type","args","attach","instance"]),KP=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),JP=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,cx=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof s[e]=="object"&&s[e]!==null&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"&&typeof s[e]=="object"&&s[e]!==null?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},jP=()=>{const{invalidate:s}=Rd(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(JP(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=Dy(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const f=cx(h,c,o);t.set(a,f),f(h,c,o)}}else cx(h,c,o)(h,c,o);l||KP.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,a,o,l,c)=>{!$P.has(a)&&!(l!=null&&l.includes(a))&&n(r,a,o,c),s()}}},QP=s=>typeof s=="function"&&Function.prototype.toString.call(s).startsWith("class "),eI=(s,e)=>QP(s)?Array.isArray(e)?new s(...e):new s:s;function Fp(s,e){Gf(e,!0);let t=Cr(e,"is",19,YP),n=Cr(e,"manual",3,!1),i=Cr(e,"makeDefault",3,!1),r=Cr(e,"ref",15),a=ph(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const o=gi(()=>eI(t(),e.args));si(()=>{r()!==Ne(o)&&r(Ne(o))});const l=ZP(()=>({get ref(){return Ne(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return a}})),c=Object.keys(a),{updateProp:h}=jP();c.forEach(d=>{const p=gi(()=>a[d]);si(()=>{h(Ne(o),d,Ne(p),l==null?void 0:l.pluginsProps,n())})}),BP(()=>Ne(o),()=>e.attach),si(()=>{(Wr(Ne(o),"PerspectiveCamera")||Wr(Ne(o),"OrthographicCamera"))&&zP(()=>Ne(o),()=>n(),()=>i())}),VP(()=>e.dispose),si(()=>{kP(Ne(o))&&GP(()=>Ne(o))}),WP(()=>Ne(o),c,a),Oc(()=>{Ne(o);let d;return zm(()=>{var p;d=(p=e.oncreate)==null?void 0:p.call(e,Ne(o))}),d});var u=dh(),f=fh(u);mh(f,()=>e.children??uh,()=>({ref:Ne(o)})),bl(s,u),Hf()}const tI={},xm=new Proxy(Fp,{get(s,e){if(typeof e!="string")return Fp;const t=tI[e]||fP[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return XP(t),Fp}});function nI(s,e,t){const n=LP();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>{if(s in i)return i;const r=typeof e=="function"?e():e;return i[s]=r,i}),n.current[s]):Wf(n,i=>i[s])}const ro=s=>({subscribe:s.subscribe,get current(){return s.current}});let Dc=0;const Fg=Qn(!1),Pd=Qn(!1),Bg=Qn(void 0),zg=Qn(0),kg=Qn(0),zy=Qn([]),Vg=Qn(0),{onStart:Bp,onLoad:zp,onError:kp}=Lo;Lo.onStart=(s,e,t)=>{Bp==null||Bp(s,e,t),Pd.set(!0),Bg.set(s),zg.set(e),kg.set(t);const n=(e-Dc)/(t-Dc);Vg.set(n),n===1&&Fg.set(!0)};Lo.onLoad=()=>{zp==null||zp(),Pd.set(!1)};Lo.onError=s=>{kp==null||kp(s),zy.update(e=>[...e,s])};Lo.onProgress=(s,e,t)=>{e===t&&(Dc=t),Pd.set(!0),Bg.set(s),zg.set(e),kg.set(t);const n=(e-Dc)/(t-Dc)||1;Vg.set(n),n===1&&Fg.set(!0)};ro(Pd),ro(Bg),ro(zg),ro(kg),ro(zy),ro(Vg),ro(Fg);new D;new D;new D;new Fn;new ot;new Xs;new D;const iI=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),P3=()=>{const s=zi(iI),e=new Set,t=i=>(s&&(s.suspend(i),e.add(i)),i),n={suspended:Wf((s==null?void 0:s.suspended)??Vm(!1),i=>i)};return Bl(()=>{if(s){for(const i of e)s.onComponentDestroy(i);e.clear()}}),Object.assign(t,n)};new D;new ot;new D;new D;new kt;new D;new D;new D;new ae;function I3(s,e){Gf(e,!0);let t=Cr(e,"speed",3,1),n=Cr(e,"floatIntensity",3,1),i=Cr(e,"floatingRange",19,()=>[-.1,.1]),r=Cr(e,"rotationSpeed",3,0),a=Cr(e,"rotationIntensity",3,0),o=Cr(e,"seed",19,()=>1e4*Math.random()),l=Cr(e,"ref",15),c=ph(e,["$$slots","$$events","$$legacy","speed","floatIntensity","floatingRange","rotationSpeed","rotationIntensity","seed","ref","children"]);const h=new pa,u=new pa;let f=o();const d=ig.mapLinear;let p=gi(()=>Array.isArray(t())?t():[t(),t(),t()]),_=gi(()=>Array.isArray(n())?n():[n(),n(),n()]),m=gi(()=>i().length===3?i():[[0,0],i(),[0,0]]),g=gi(()=>Array.isArray(r())?r():[r(),r(),r()]),y=gi(()=>Array.isArray(a())?a():[a(),a(),a()]);Og(x=>{f+=x,u.position.x=d(Math.sin(f/4*Ne(p)[0])/10,-.1,.1,...Ne(m)[0])*Ne(_)[0],u.position.y=d(Math.sin(f/4*Ne(p)[1])/10,-.1,.1,...Ne(m)[1])*Ne(_)[1],u.position.z=d(Math.sin(f/4*Ne(p)[2])/10,-.1,.1,...Ne(m)[2])*Ne(_)[2],u.rotation.x=Math.cos(f/4*Ne(g)[0])/8*Ne(y)[0],u.rotation.y=Math.sin(f/4*Ne(g)[1])/8*Ne(y)[1],u.rotation.z=Math.sin(f/4*Ne(g)[2])/20*Ne(y)[2],u.updateMatrix()}),xm(s,km({is:h},()=>c,{get ref(){return l()},set ref(x){l(x)},children:(x,v)=>{xm(x,{is:u,matrixAutoUpdate:!1,children:(b,w)=>{var A=dh(),R=fh(A);mh(R,()=>e.children??uh,()=>({ref:u})),bl(b,A)},$$slots:{default:!0}})},$$slots:{default:!0}})),Hf()}const rI="Right",sI="Top",aI="Front",oI="Left",lI="Bottom",cI="Back";[rI,sI,aI,oI,lI,cI].map(s=>s.toLocaleLowerCase());new On;new D;Ce.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Rr.line={uniforms:og.merge([Ce.common,Ce.fog,Ce.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new Yt;new D;new D;new Yt;new Yt;new Yt;new D;new ot;new by;new D;new On;new Fn;new Yt;const hx={type:"change"},Gg={type:"start"},ky={type:"end"},Pu=new Xs,ux=new Os,hI=Math.cos(70*ig.DEG2RAD),Wn=new D,Xi=2*Math.PI,Jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vp=1e-6;let uI=class extends Sy{constructor(e,t=null){super(e,t),this.state=Jt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:go.ROTATE,MIDDLE:go.DOLLY,RIGHT:go.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new vi,this._lastTargetPosition=new D,this._quat=new vi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new um,this._sphericalDelta=new um,this._scale=1,this._panOffset=new D,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new D,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dI.bind(this),this._onPointerDown=fI.bind(this),this._onPointerUp=pI.bind(this),this._onContextMenu=bI.bind(this),this._onMouseWheel=_I.bind(this),this._onKeyDown=xI.bind(this),this._onTouchStart=vI.bind(this),this._onTouchMove=yI.bind(this),this._onMouseDown=mI.bind(this),this._onMouseMove=gI.bind(this),this._interceptControlDown=MI.bind(this),this._interceptControlUp=SI.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hx),this.update(),this.state=Jt.NONE}update(e=null){const t=this.object.position;Wn.copy(t).sub(this.target),Wn.applyQuaternion(this._quat),this._spherical.setFromVector3(Wn),this.autoRotate&&this.state===Jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Xi:n>Math.PI&&(n-=Xi),i<-Math.PI?i+=Xi:i>Math.PI&&(i-=Xi),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Wn.setFromSpherical(this._spherical),Wn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Wn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pu.origin.copy(this.object.position),Pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pu.direction))<hI?this.object.lookAt(this.target):(ux.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pu.intersectPlane(ux,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vp||this._lastTargetPosition.distanceToSquared(this.target)>Vp?(this.dispatchEvent(hx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xi/60*this.autoRotateSpeed*e:Xi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wn.setFromMatrixColumn(t,0),Wn.multiplyScalar(-e),this._panOffset.add(Wn)}_panUp(e,t){this.screenSpacePanning===!0?Wn.setFromMatrixColumn(t,1):(Wn.setFromMatrixColumn(t,0),Wn.crossVectors(this.object.up,Wn)),Wn.multiplyScalar(e),this._panOffset.add(Wn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Wn.copy(i).sub(this.target);let r=Wn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xi*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xi*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function fI(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function dI(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function pI(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ky),this.state=Jt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mI(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case go.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Jt.DOLLY;break;case go.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Jt.ROTATE}break;case go.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Jt.PAN}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(Gg)}function gI(s){switch(this.state){case Jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _I(s){this.enabled===!1||this.enableZoom===!1||this.state!==Jt.NONE||(s.preventDefault(),this.dispatchEvent(Gg),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ky))}function xI(s){this.enabled!==!1&&this._handleKeyDown(s)}function vI(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Jt.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Jt.TOUCH_PAN;break;default:this.state=Jt.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Jt.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Jt.TOUCH_DOLLY_ROTATE;break;default:this.state=Jt.NONE}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(Gg)}function yI(s){switch(this._trackPointer(s),this.state){case Jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Jt.NONE}}function bI(s){this.enabled!==!1&&s.preventDefault()}function MI(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SI(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wI=()=>nI("threlte-controls",{orbitControls:Ml(void 0),trackballControls:Ml(void 0)});function L3(s,e){Gf(e,!0);const[t,n]=bM(),i=()=>yM(o,"$parent",t);let r=Cr(e,"ref",15),a=ph(e,["$$slots","$$events","$$legacy","ref","children"]);const o=Fy(),{dom:l,invalidate:c}=Rd();if(!Wr(i(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new uI(i(),l),{orbitControls:u}=wI(),{start:f,stop:d}=Og(()=>{h.update()},{autoStart:!1,autoInvalidate:!1});si(()=>{e.autoRotate||e.enableDamping?f():d()}),si(()=>{const p=_=>{var m;c(),(m=e.onchange)==null||m.call(e,_)};return u.set(h),h.addEventListener("change",p),()=>{u.set(void 0),h.removeEventListener("change",p)}}),xm(s,km({is:h},()=>a,{get ref(){return r()},set ref(p){r(p)},children:(p,_)=>{var m=dh(),g=fh(m);mh(g,()=>e.children??uh,()=>({ref:h})),bl(p,m)},$$slots:{default:!0}})),Hf(),n()}new ot;new ot;new Rn;`${ut.logdepthbuf_pars_vertex}${ut.fog_pars_vertex}${ut.logdepthbuf_vertex}${ut.fog_vertex}`;`${ut.tonemapping_fragment}${ut.colorspace_fragment}`;`${ut.tonemapping_fragment}${ut.colorspace_fragment}`;const TI=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,EI=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,AI=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,CI=AI,RI=`
	${TI}
	${EI}
`;`${CI}${RI}${ut.tonemapping_fragment}${ut.colorspace_fragment}`;new On;typeof window<"u"&&document.createElement("div");for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new Gl(-1,1,1,-1,0,1);class PI extends yt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}new PI;var Vy={exports:{}};Vy.exports=Id;Vy.exports.default=Id;function Id(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Gy(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,f,d;if(n&&(r=UI(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var p=t;p<i;p+=t)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return th(r,a,t,o,l,d,0),a}function Gy(s,e,t,n,i){var r,a;if(i===bm(s,e,t,n)>0)for(r=e;r<t;r+=n)a=fx(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=fx(r,s[r],s[r+1],a);return a&&Dd(a,a.next)&&(ih(a),a=a.next),a}function Ro(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Dd(t,t.next)||mn(t.prev,t,t.next)===0)){if(ih(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function th(s,e,t,n,i,r,a){if(s){!a&&r&&kI(s,n,i,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?DI(s,n,i,r):II(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ih(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=LI(Ro(s),e,t),th(s,e,t,n,i,r,2)):a===2&&NI(s,e,t,n,i,r):th(Ro(s),e,t,n,i,r,1);break}}}}function II(s){var e=s.prev,t=s,n=s.next;if(mn(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&pl(i,o,r,l,a,c,p.x,p.y)&&mn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function DI(s,e,t,n){var i=s.prev,r=s,a=s.next;if(mn(i,r,a)>=0)return!1;for(var o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=vm(d,p,e,t,n),y=vm(_,m,e,t,n),x=s.prevZ,v=s.nextZ;x&&x.z>=g&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&pl(o,h,l,u,c,f,x.x,x.y)&&mn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&pl(o,h,l,u,c,f,v.x,v.y)&&mn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&pl(o,h,l,u,c,f,x.x,x.y)&&mn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&pl(o,h,l,u,c,f,v.x,v.y)&&mn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function LI(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Dd(i,r)&&Hy(i,n,n.next,r)&&nh(i,r)&&nh(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ih(n),ih(n.next),n=s=r),n=n.next}while(n!==s);return Ro(n)}function NI(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&HI(a,o)){var l=Wy(a,o);a=Ro(a,a.next),l=Ro(l,l.next),th(a,e,t,n,i,r,0),th(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function UI(s,e,t,n){var i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Gy(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(GI(c));for(i.sort(OI),r=0;r<i.length;r++)t=FI(i[r],t);return t}function OI(s,e){return s.x-e.x}function FI(s,e){var t=BI(s,e);if(!t)return e;var n=Wy(t,s);return Ro(n,n.next),Ro(t,t.next)}function BI(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,f;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&pl(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),nh(t,s)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&zI(a,t)))&&(a=t,u=f)),t=t.next;while(t!==l);return a}function zI(s,e){return mn(s.prev,s,e.prev)<0&&mn(e.next,s,s.next)<0}function kI(s,e,t,n){var i=s;do i.z===0&&(i.z=vm(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,VI(i)}function VI(s){var e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function vm(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function GI(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function pl(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function HI(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!WI(s,e)&&(nh(s,e)&&nh(e,s)&&XI(s,e)&&(mn(s.prev,s,e.prev)||mn(s,e.prev,e))||Dd(s,e)&&mn(s.prev,s,s.next)>0&&mn(e.prev,e,e.next)>0)}function mn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Dd(s,e){return s.x===e.x&&s.y===e.y}function Hy(s,e,t,n){var i=Du(mn(s,e,t)),r=Du(mn(s,e,n)),a=Du(mn(t,n,s)),o=Du(mn(t,n,e));return!!(i!==r&&a!==o||i===0&&Iu(s,t,e)||r===0&&Iu(s,n,e)||a===0&&Iu(t,s,n)||o===0&&Iu(t,e,n))}function Iu(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Du(s){return s>0?1:s<0?-1:0}function WI(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Hy(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function nh(s,e){return mn(s.prev,s,s.next)<0?mn(s,e,s.next)>=0&&mn(s,s.prev,e)>=0:mn(s,e,s.prev)<0||mn(s,s.next,e)<0}function XI(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wy(s,e){var t=new ym(s.i,s.x,s.y),n=new ym(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fx(s,e,t,n){var i=new ym(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ih(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ym(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Id.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(bm(s,0,r,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(bm(s,c,h,t))}var u=0;for(o=0;o<n.length;o+=3){var f=n[o]*t,d=n[o+1]*t,p=n[o+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function bm(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}Id.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new ae;new ae;var dx;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const l=i[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(dx||(dx={}));new Ys;new D;new ot;new Xs;new Fn;new On;new D;new D;const YI="dark",qI=window.localStorage.getItem("theme")??YI,ZI=Ml(qI);ZI.subscribe(s=>{window.localStorage.setItem("theme",s),document.documentElement.setAttribute("data-theme",s)});function Us(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Xy(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Dl={duration:.5,overwrite:!1,delay:0},Hg,ai,ln,us=1e8,xi=1/us,Mm=Math.PI*2,$I=Mm/4,KI=0,Yy=Math.sqrt,JI=Math.cos,jI=Math.sin,ei=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},Hs=function(e){return typeof e=="number"},Wg=function(e){return typeof e>"u"},ms=function(e){return typeof e=="object"},Ji=function(e){return e!==!1},Xg=function(){return typeof window<"u"},Lu=function(e){return bn(e)||ei(e)},qy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yi=Array.isArray,QI=/random\([^)]+\)/g,eD=/,\s*/g,px=/(?:-?\.?\d|\.)+/gi,Zy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ml=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$y=/[+-]=-?[.\d]+/,tD=/[^,'"\[\]\s]+/gi,nD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dn,is,Sm,Yg,yr={},Uf={},Ky,Jy=function(e){return(Uf=Ll(e,yr))&&tr},qg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rh=function(e,t){return!t&&console.warn(e)},jy=function(e,t){return e&&(yr[e]=t)&&Uf&&(Uf[e]=t)||yr},sh=function(){return 0},iD={suppressEvents:!0,isStart:!0,kill:!1},Fu={suppressEvents:!0,kill:!1},rD={suppressEvents:!0},Zg={},va=[],wm={},Qy,ur={},Hp={},mx=30,Bu=[],$g="",Kg=function(e){var t=e[0],n,i;if(ms(t)||bn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Bu.length;i--&&!Bu[i].targetTest(t););n=Bu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sb(e[i],n)))||e.splice(i,1);return e},yo=function(e){return e._gsap||Kg(Pr(e))[0]._gsap},eb=function(e,t,n){return(n=e[t])&&bn(n)?e[t]():Wg(n)&&e.getAttribute&&e.getAttribute(t)||n},ji=function(e,t){return(e=e.split(",")).forEach(t)||e},An=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},xl=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},sD=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Of=function(){var e=va.length,t=va.slice(0),n,i;for(wm={},va.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jg=function(e){return!!(e._initted||e._startAt||e.add)},tb=function(e,t,n,i){va.length&&!ai&&Of(),e.render(t,n,!!(ai&&t<0&&Jg(e))),va.length&&!ai&&Of()},nb=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tD).length<2?t:ei(e)?e.trim():e},ib=function(e){return e},br=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},aD=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ll=function(e,t){for(var n in t)e[n]=t[n];return e},gx=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ms(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ff=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Lc=function(e){var t=e.parent||dn,n=e.keyframes?aD(yi(e.keyframes)):br;if(Ji(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},oD=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},rb=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ld=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},wa=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},lD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Tm=function(e,t,n,i){return e._startAt&&(ai?e._startAt.revert(Fu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},cD=function s(e){return!e||e._ts&&s(e.parent)},_x=function(e){return e._repeat?Nl(e._tTime,e=e.duration()+e._rDelay)*e:0},Nl=function(e,t){var n=Math.floor(e=fn(e/t));return e&&n===e?n-1:n},Bf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nd=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||xi)||0))},Ud=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=fn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nd(e),n._dirty||bo(n,e)),e},sb=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bf(e.rawTime(),t),(!t._dur||Th(0,t.totalDuration(),n)-t._tTime>xi)&&t.render(n,!0)),bo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},as=function(e,t,n,i){return t.parent&&wa(t),t._start=fn((Hs(n)?n:n||e!==dn?Ar(e,n,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rb(e,t,"_first","_last",e._sort?"_start":0),Em(t)||(e._recent=t),i||sb(e,t),e._ts<0&&Ud(e,e._tTime),e},ab=function(e,t){return(yr.ScrollTrigger||qg("scrollTrigger",t))&&yr.ScrollTrigger.create(t,e)},ob=function(e,t,n,i,r){if(Qg(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ai&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qy!==fr.frame)return va.push(e),e._lazy=[r,i],1},hD=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Em=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},uD=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&hD(e)&&!(!e._initted&&Em(e))||(e._ts<0||e._dp._ts<0)&&!Em(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Th(0,e._tDur,t),h=Nl(l,o),e._yoyo&&h&1&&(a=1-a),h!==Nl(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||ai||i||e._zTime===xi||!t&&e._zTime){if(!e._initted&&ob(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?xi:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Tm(e,t,n,!0),e._onUpdate&&!n&&pr(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&pr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&wa(e,1),!n&&!ai&&(pr(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fD=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ul=function(e,t,n,i){var r=e._repeat,a=fn(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:fn(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ud(e,e._tTime=e._tDur*o),e.parent&&Nd(e),n||bo(e.parent,e),e},xx=function(e){return e instanceof Ui?bo(e):Ul(e,e._dur)},dD={_start:0,endTime:sh,totalDuration:sh},Ar=function s(e,t,n){var i=e.labels,r=e._recent||dD,a=e.duration()>=us?r.endTime(!1):e._dur,o,l,c;return ei(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(yi(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Nc=function(e,t,n){var i=Hs(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ji(l.vars.inherit)&&l.parent;a.immediateRender=Ji(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Un(t[0],a,t[r+1])},Pa=function(e,t){return e||e===0?t(e):t},Th=function(e,t,n){return n<e?e:n>t?t:n},_i=function(e,t){return!ei(e)||!(t=nD.exec(e))?"":t[1]},pD=function(e,t,n){return Pa(n,function(i){return Th(e,t,i)})},Am=[].slice,lb=function(e,t){return e&&ms(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ms(e[0]))&&!e.nodeType&&e!==is},mD=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ei(i)&&!t||lb(i,1)?(r=n).push.apply(r,Pr(i)):n.push(i)})||n},Pr=function(e,t,n){return ln&&!t&&ln.selector?ln.selector(e):ei(e)&&!n&&(Sm||!Ol())?Am.call((t||Yg).querySelectorAll(e),0):yi(e)?mD(e,n):lb(e)?Am.call(e,0):e?[e]:[]},Cm=function(e){return e=Pr(e)[0]||rh("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Pr(t,n.querySelectorAll?n:n===e?rh("Invalid scope")||Yg.createElement("div"):e)}},cb=function(e){return e.sort(function(){return .5-Math.random()})},hb=function(e){if(bn(e))return e;var t=ms(e)?e:{each:e},n=Mo(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return ei(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,p){var _=(p||t).length,m=a[_],g,y,x,v,b,w,A,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,us])[1],!M){for(A=-1e8;A<(A=p[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],g=l?Math.min(M,_)*h-.5:i%M,y=M===us?0:l?_*u/M-.5:i/M|0,A=0,R=us,w=0;w<_;w++)x=w%M-g,v=y-(w/M|0),m[w]=b=c?Math.abs(c==="y"?v:x):Yy(x*x+v*v),b>A&&(A=b),b<R&&(R=b);i==="random"&&cb(m),m.max=A-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=_i(t.amount||t.each)||0,n=n&&_<0?yb(n):n}return _=(m[f]-m.min)/m.max||0,fn(m.b+(n?n(_):_)*m.v)+m.u}},Rm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=fn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Hs(n)?0:_i(n))}},ub=function(e,t){var n=yi(e),i,r;return!n&&ms(e)&&(i=n=e.radius||us,e.values?(e=Pr(e.values),(r=!Hs(e[0]))&&(i*=i)):e=Rm(e.increment)),Pa(t,n?bn(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=us,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,r||h===a||Hs(a)?h:h+_i(a)}:Rm(e))},fb=function(e,t,n,i){return Pa(yi(e)?!t:n===!0?!!(n=0):!i,function(){return yi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},gD=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},_D=function(e,t){return function(n){return e(parseFloat(n))+(t||_i(n))}},xD=function(e,t,n){return pb(e,t,0,1,n)},db=function(e,t,n){return Pa(n,function(i){return e[~~t(i)]})},vD=function s(e,t,n){var i=t-e;return yi(e)?db(e,s(0,e.length),t):Pa(n,function(r){return(i+(r-e)%i)%i+e})},yD=function s(e,t,n){var i=t-e,r=i*2;return yi(e)?db(e,s(0,e.length-1),t):Pa(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},ah=function(e){return e.replace(QI,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(eD);return fb(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},pb=function(e,t,n,i,r){var a=t-e,o=i-n;return Pa(r,function(l){return n+((l-e)/a*o||0)})},bD=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=ei(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(yi(e)&&!yi(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(p){p*=u;var _=Math.min(f,~~p);return h[_](p-_)},n=t}else i||(e=Ll(yi(e)?[]:{},e));if(!h){for(l in t)jg.call(o,e,l,"get",t[l]);r=function(p){return n_(p,o)||(a?e.p:e)}}}return Pa(n,r)},vx=function(e,t,n){var i=e.labels,r=us,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},pr=function(e,t,n){var i=e.vars,r=i[t],a=ln,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&va.length&&Of(),o&&(ln=o),h=l?r.apply(c,l):r.call(c),ln=a,h},vc=function(e){return wa(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ai),e.progress()<1&&pr(e,"onInterrupt"),e},gl,mb=[],gb=function(e){if(e)if(e=!e.name&&e.default||e,Xg()||e.headless){var t=e.name,n=bn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:sh,render:n_,add:jg,kill:FD,modifier:OD,rawVars:0},a={targetTest:0,get:0,getSetter:t_,aliases:{},register:0};if(Ol(),e!==i){if(ur[t])return;br(i,br(Ff(e,r),a)),Ll(i.prototype,Ll(r,Ff(e,a))),ur[i.prop=t]=i,e.targetTest&&(Bu.push(i),Zg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jy(t,i),e.register&&e.register(tr,i,Qi)}else mb.push(e)},tn=255,yc={aqua:[0,tn,tn],lime:[0,tn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tn],navy:[0,0,128],white:[tn,tn,tn],olive:[128,128,0],yellow:[tn,tn,0],orange:[tn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tn,0,0],pink:[tn,192,203],cyan:[0,tn,tn],transparent:[tn,tn,tn,0]},Wp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tn+.5|0},_b=function(e,t,n){var i=e?Hs(e)?[e>>16,e>>8&tn,e&tn]:0:yc.black,r,a,o,l,c,h,u,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yc[e])i=yc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tn,i&tn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tn,e&tn]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(px),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Wp(l+1/3,r,a),i[1]=Wp(l,r,a),i[2]=Wp(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Zy),n&&i.length<4&&(i[3]=1),i}else i=e.match(px)||yc.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/tn,a=i[1]/tn,o=i[2]/tn,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},xb=function(e){var t=[],n=[],i=-1;return e.split(ya).forEach(function(r){var a=r.match(ml)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yx=function(e,t,n){var i="",r=(e+i).match(ya),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=_b(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=xb(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ya,"1").split(ml),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(ya),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},ya=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),MD=/hsl[a]?\(/,vb=function(e){var t=e.join(" "),n;if(ya.lastIndex=0,ya.test(t))return n=MD.test(t),e[1]=yx(e[1],n),e[0]=yx(e[0],n,xb(e[1])),!0},oh,fr=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,d,p=function _(m){var g=s()-i,y=m===!0,x,v,b,w;if((g>e||g<0)&&(n+=g-t),i+=g,b=i-n,x=b-a,(x>0||y)&&(w=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,a+=x+(x>=r?4:r-x),v=1),y||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](b,f,w,m)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ky&&(!Sm&&Xg()&&(is=Sm=window,Yg=is.document||{},yr.gsap=tr,(is.gsapVersions||(is.gsapVersions=[])).push(tr.version),Jy(Uf||is.GreenSockGlobals||!is.gsap&&is||{}),mb.forEach(gb)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},oh=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),oh=0,c=sh},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,g,y){var x=g?function(v,b,w,A){m(v,b,w,A),u.remove(x)}:m;return u.remove(m),o[y?"unshift":"push"](x),Ol(),x},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},u})(),Ol=function(){return!oh&&fr.wake()},Bt={},SD=/^[\d.\-M][\d.\-,\s]/,wD=/["']/g,TD=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(wD,"").trim():+c,i=l.substr(o+1).trim();return t},ED=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},AD=function(e){var t=(e+"").split("("),n=Bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[TD(t[1])]:ED(e).split(",").map(nb)):Bt._CE&&SD.test(e)?Bt._CE("",e):n},yb=function(e){return function(t){return 1-e(1-t)}},bb=function s(e,t){for(var n=e._first,i;n;)n instanceof Ui?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Mo=function(e,t){return e&&(bn(e)?e:Bt[e]||AD(e))||t},No=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return ji(e,function(o){Bt[o]=yr[o]=r,Bt[a=o.toLowerCase()]=n;for(var l in r)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=r[l]}),r},Mb=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xp=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Mm*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*jI((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Mb(o);return r=Mm/r,l.config=function(c,h){return s(e,c,h)},l},Yp=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Mb(n);return i.config=function(r){return s(e,r)},i};ji("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;No(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;No("Elastic",Xp("in"),Xp("out"),Xp());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};No("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);No("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});No("Circ",function(s){return-(Yy(1-s*s)-1)});No("Sine",function(s){return s===1?1:-JI(s*$I)+1});No("Back",Yp("in"),Yp("out"),Yp());Bt.SteppedEase=Bt.steps=yr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-xi;return function(o){return((i*Th(0,a,o)|0)+r)*n}}};Dl.ease=Bt["quad.out"];ji("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return $g+=s+","+s+"Params,"});var Sb=function(e,t){this.id=KI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eb,this.set=t?t.getSetter:t_},lh=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ul(this,+t.duration,1,1),this.data=t.data,ln&&(this._ctx=ln,ln.data.push(this)),oh||fr.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ul(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ol(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ud(this,n),!r._dp||r.parent||sb(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&as(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xi||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tb(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_x(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_x(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Nl(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Th(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Nd(this),lD(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ol(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xi&&(this._tTime-=xi)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=fn(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&as(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ji(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=rD);var i=ai;return ai=n,Jg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ai=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xx(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ar(this,n),Ji(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ji(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-xi)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=bn(n)?n:ib,l=function(){var h=i.then;i.then=null,r&&r(),bn(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){vc(this)},s})();br(lh.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Ui=(function(s){Xy(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ji(n.sortChildren),dn&&as(n.parent||dn,Us(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ab(Us(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Nc(0,arguments,this),this},t.from=function(i,r,a){return Nc(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Nc(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Lc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Un(i,r,Ar(this,a),1),this},t.call=function(i,r,a){return as(this,Un.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Un(i,a,Ar(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Lc(a).immediateRender=Ji(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Lc(o).immediateRender=Ji(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:fn(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,m,g,y,x,v,b,w,A;if(this!==dn&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,x=this._ts,g=!x,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=fn(h%m),h===l?(_=this._repeat,f=c):(b=fn(h/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Nl(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,A=1),_!==b&&!this._lock){var R=w&&b&1,M=R===(w&&_&1);if(_<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:fn(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&pr(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;bb(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=fD(this,fn(o),fn(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!b&&(pr(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=-1e-8);break}}d=p}else{d=this._last;for(var T=i<0?i:f;d;){if(p=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,r,a||ai&&Jg(d)),f!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=T?-1e-8:xi);break}}d=p}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=v,Nd(this),this.render(i,r,a);this._onUpdate&&!r&&pr(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&wa(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(pr(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Hs(r)||(r=Ar(this,r,i)),!(i instanceof lh)){if(yi(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ei(i))return this.addLabel(i,r);if(bn(i))i=Un.delayedCall(0,i);else return this}return this!==i?as(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Un?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ei(i)?this.removeLabel(i):bn(i)?this.killTweensOf(i):(i.parent===this&&Ld(this,i),i===this._recent&&(this._recent=this._last),bo(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(fr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Ar(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Un.delayedCall(0,r||sh,a);return o.data="isPause",this._hasPause=1,as(this,o,Ar(this,i))},t.removePause=function(i){var r=this._first;for(i=Ar(this,i);r;)r._start===i&&r.data==="isPause"&&wa(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ga!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Pr(i),l=this._first,c=Hs(r),h;l;)l instanceof Un?sD(l._targets,o)&&(c?(!ga||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Ar(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,p=Un.to(a,br({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xi,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&Ul(p,m,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},r));return f?p.render(0):p},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,br({startAt:{time:Ar(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),vx(this,Ar(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),vx(this,Ar(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xi)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=fn(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return bo(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bo(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=us,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,as(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=fn(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ul(a,a===dn&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(dn._ts&&(tb(dn,Bf(i,dn)),Qy=fr.frame),fr.frame>=mx){mx+=xr.autoSleep||120;var r=dn._first;if((!r||!r._ts)&&xr.autoSleep&&fr._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||fr.sleep()}}},e})(lh);br(Ui.prototype,{_lock:0,_hasPause:0,_forcing:0});var CD=function(e,t,n,i,r,a,o){var l=new Qi(this._pt,e,t,0,1,Rb,null,r),c=0,h=0,u,f,d,p,_,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=ah(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(Gp)||[];u=Gp.exec(i);)p=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?xl(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Gp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,($y.test(i)||g)&&(l.e=0),this._pt=l,l},jg=function(e,t,n,i,r,a,o,l,c,h){bn(i)&&(i=i(r||0,e,a));var u=e[t],f=n!=="get"?n:bn(u)?c?e[t.indexOf("set")||!bn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=bn(u)?c?LD:Ab:e_,p;if(ei(i)&&(~i.indexOf("random(")&&(i=ah(i)),i.charAt(1)==="="&&(p=xl(f,i)+(_i(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Pm)return!isNaN(f*i)&&i!==""?(p=new Qi(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?UD:Cb,0,d),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&qg(t,i),CD.call(this,e,t,f,i,d,l||xr.stringFilter,c))},RD=function(e,t,n,i,r){if(bn(e)&&(e=Uc(e,r,t,n,i)),!ms(e)||e.style&&e.nodeType||yi(e)||qy(e))return ei(e)?Uc(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Uc(e[o],r,t,n,i);return a},wb=function(e,t,n,i,r,a){var o,l,c,h;if(ur[e]&&(o=new ur[e]).init(r,o.rawVars?t[e]:RD(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Qi(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==gl))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ga,Pm,Qg=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:m,x=e._overwrite==="auto"&&!Hg,v=e.timeline,b,w,A,R,M,T,U,F,B,q,$,W,Y;if(v&&(!f||!r)&&(r="none"),e._ease=Mo(r,Dl.ease),e._yEase=u?yb(Mo(u===!0?r:u,Dl.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(F=m[0]?yo(m[0]).harness:0,W=F&&i[F.prop],b=Ff(i,Zg),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&p?Fu:iD),_._lazy=0),a){if(wa(e._startAt=Un.set(m,br({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Ji(l),startAt:null,delay:0,onUpdate:c&&function(){return pr(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ai||!o&&!d)&&e._startAt.revert(Fu),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(o=!1),A=br({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ji(l),immediateRender:o,stagger:0,parent:g},b),W&&(A[F.prop]=W),wa(e._startAt=Un.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ai?e._startAt.revert(Fu):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,xi,xi);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ji(l)||l&&!p,w=0;w<m.length;w++){if(M=m[w],U=M._gsap||Kg(m)[w]._gsap,e._ptLookup[w]=q={},wm[U.id]&&va.length&&Of(),$=y===m?w:y.indexOf(M),F&&(B=new F).init(M,W||b,e,$,y)!==!1&&(e._pt=R=new Qi(e._pt,M,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(te){q[te]=R}),B.priority&&(T=1)),!F||W)for(A in b)ur[A]&&(B=wb(A,b,e,$,M,y))?B.priority&&(T=1):q[A]=R=jg.call(e,M,A,"get",b[A],$,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(ga=e,dn.killTweensOf(M,q,e.globalTime(t)),Y=!e.parent,ga=0),e._pt&&l&&(wm[U.id]=1)}T&&Pb(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(us,!0,!0)},PD=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Pm=1,e.vars[t]="+=0",Qg(e,o),Pm=0,l?rh(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=An(n)+_i(u.e)),u.b&&(u.b=h.s+_i(u.b))},ID=function(e,t){var n=e[0]?yo(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Ll({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},DD=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(yi(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Uc=function(e,t,n,i,r){return bn(e)?e.call(t,n,i,r):ei(e)&&~e.indexOf("random(")?ah(e):e},Tb=$g+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Eb={};ji(Tb+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Eb[s]=1});var Un=(function(s){Xy(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Lc(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,y=i.parent||dn,x=(yi(n)||qy(n)?Hs(n[0]):"length"in i)?[n]:Pr(n),v,b,w,A,R,M,T,U;if(o._targets=x.length?Kg(x):rh("GSAP target "+n+" not found. https://gsap.com",!xr.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||f||Lu(c)||Lu(h)){if(i=o.vars,v=o.timeline=new Ui({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Us(o),v._start=0,f||Lu(c)||Lu(h)){if(A=x.length,T=f&&hb(f),ms(f))for(R in f)~Tb.indexOf(R)&&(U||(U={}),U[R]=f[R]);for(b=0;b<A;b++)w=Ff(i,Eb),w.stagger=0,g&&(w.yoyoEase=g),U&&Ll(w,U),M=x[b],w.duration=+Uc(c,Us(o),b,M,x),w.delay=(+Uc(h,Us(o),b,M,x)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),v.to(M,w,T?T(b,M,x):0),v._ease=Bt.none;v.duration()?c=h=0:o.timeline=0}else if(p){Lc(br(v.vars.defaults,{ease:"none"})),v._ease=Mo(p.ease||i.ease||"none");var F=0,B,q,$;if(yi(p))p.forEach(function(W){return v.to(x,W,">")}),v.duration();else{w={};for(R in p)R==="ease"||R==="easeEach"||DD(R,p[R],w,p.easeEach);for(R in w)for(B=w[R].sort(function(W,Y){return W.t-Y.t}),F=0,b=0;b<B.length;b++)q=B[b],$={ease:q.e,duration:(q.t-(b?B[b-1].t:0))/100*c},$[R]=q.v,v.to(x,$,F),F+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Hg&&(ga=Us(o),dn.killTweensOf(x),ga=0),as(y,Us(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!p&&o._start===fn(y._time)&&Ji(u)&&cD(Us(o))&&y.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-h)||0)),m&&ab(Us(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-xi&&!h?l:i<xi?0:i,f,d,p,_,m,g,y,x,v;if(!c)uD(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(f=fn(u%_),u===l?(p=this._repeat,f=c):(m=fn(u/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(v=this._yEase,f=c-f),m=Nl(this._tTime,_),f===o&&!a&&this._initted&&p===m)return this._tTime=u,this;p!==m&&(x&&this._yEase&&bb(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(fn(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(ob(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!o&&u&&!r&&!m&&(pr(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Tm(this,i,r,a),pr(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&pr(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Tm(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&wa(this,1),!r&&!(h&&!o)&&(u||o||g)&&(pr(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){oh||fr.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Qg(this,c),h=this._ease(c/this._dur),PD(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Ud(this,0),this.parent||rb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?vc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ai),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ga&&ga.vars.overwrite!==!0)._first||vc(this),this.parent&&a!==this.timeline.totalDuration()&&Ul(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Pr(i):o,c=this._ptLookup,h=this._pt,u,f,d,p,_,m,g;if((!r||r==="all")&&oD(o,l))return r==="all"&&(this._pt=0),vc(this);for(u=this._op=this._op||[],r!=="all"&&(ei(r)&&(_={},ji(r,function(y){return _[y]=1}),r=_),r=ID(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],r==="all"?(u[g]=r,p=f,d={}):(d=u[g]=u[g]||{},p=r);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ld(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&vc(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Nc(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Nc(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return dn.killTweensOf(i,r,a)},e})(lh);br(Un.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ji("staggerTo,staggerFrom,staggerFromTo",function(s){Un[s]=function(){var e=new Ui,t=Am.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var e_=function(e,t,n){return e[t]=n},Ab=function(e,t,n){return e[t](n)},LD=function(e,t,n,i){return e[t](i.fp,n)},ND=function(e,t,n){return e.setAttribute(t,n)},t_=function(e,t){return bn(e[t])?Ab:Wg(e[t])&&e.setAttribute?ND:e_},Cb=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rb=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},n_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},OD=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},FD=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ld(this,t,"_pt"):t.dep||(n=1),t=i;return!n},BD=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pb=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Qi=(function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Cb,this.d=l||this,this.set=c||e_,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=BD,this.m=n,this.mt=r,this.tween=i},s})();ji($g+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Zg[s]=1});yr.TweenMax=yr.TweenLite=Un;yr.TimelineLite=yr.TimelineMax=Ui;dn=new Ui({sortChildren:!1,defaults:Dl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xr.stringFilter=vb;var So=[],zu={},zD=[],bx=0,kD=0,qp=function(e){return(zu[e]||zD).map(function(t){return t()})},Im=function(){var e=Date.now(),t=[];e-bx>2&&(qp("matchMediaInit"),So.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=is.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),qp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bx=e,qp("matchMedia"))},Ib=(function(){function s(t,n){this.selector=n&&Cm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kD++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){bn(n)&&(r=i,i=n,n=bn);var a=this,o=function(){var c=ln,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Cm(r)),ln=a,u=i.apply(a,arguments),bn(u)&&a._r.push(u),ln=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===bn?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ln;ln=null,n(this),ln=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Un&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ui?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Un)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=So.length;a--;)So[a].id===this.id&&So.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),VD=(function(){function s(t){this.contexts=[],this.scope=t,ln&&ln.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ms(n)||(n={matches:n});var a=new Ib(0,r||this.scope),o=a.conditions={},l,c,h;ln&&!a.selector&&(a.selector=ln.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=is.matchMedia(n[c]),l&&(So.indexOf(a)<0&&So.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Im):l.addEventListener("change",Im)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return gb(i)})},timeline:function(e){return new Ui(e)},getTweensOf:function(e,t){return dn.getTweensOf(e,t)},getProperty:function(e,t,n,i){ei(e)&&(e=Pr(e)[0]);var r=yo(e||{}).get,a=n?ib:nb;return n==="native"&&(n=""),e&&(t?a((ur[t]&&ur[t].get||r)(e,t,n,i)):function(o,l,c){return a((ur[o]&&ur[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Pr(e),e.length>1){var i=e.map(function(h){return tr.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=ur[t],o=yo(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;gl._pt=0,u.init(e,n?h+n:h,gl,0,[e]),u.render(1,u),gl._pt&&n_(1,gl)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=tr.to(e,br((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return dn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mo(e.ease,Dl.ease)),gx(Dl,e||{})},config:function(e){return gx(xr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ur[o]&&!yr[o]&&rh(t+" effect requires "+o+" plugin.")}),Hp[t]=function(o,l,c){return n(Pr(o),br(l||{},r),c)},a&&(Ui.prototype[t]=function(o,l,c){return this.add(Hp[t](o,ms(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Bt[e]=Mo(t)},parseEase:function(e,t){return arguments.length?Mo(e,t):Bt},getById:function(e){return dn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ui(e),i,r;for(n.smoothChildTiming=Ji(e.smoothChildTiming),dn.remove(n),n._dp=0,n._time=n._tTime=dn._time,i=dn._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Un&&i.vars.onComplete===i._targets[0]))&&as(n,i,i._start-i._delay),i=r;return as(dn,n,0),n},context:function(e,t){return e?new Ib(e,t):ln},matchMedia:function(e){return new VD(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Im()},addEventListener:function(e,t){var n=zu[e]||(zu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=zu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:vD,wrapYoyo:yD,distribute:hb,random:fb,snap:ub,normalize:xD,getUnit:_i,clamp:pD,splitColor:_b,toArray:Pr,selector:Cm,mapRange:pb,pipe:gD,unitize:_D,interpolate:bD,shuffle:cb},install:Jy,effects:Hp,ticker:fr,updateRoot:Ui.updateRoot,plugins:ur,globalTimeline:dn,core:{PropTween:Qi,globals:jy,Tween:Un,Timeline:Ui,Animation:lh,getCache:yo,_removeLinkedListItem:Ld,reverting:function(){return ai},context:function(e){return e&&ln&&(ln.data.push(e),e._ctx=ln),ln},suppressOverwrites:function(e){return Hg=e}}};ji("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return zf[s]=Un[s]});fr.add(Ui.updateRoot);gl=zf.to({},{duration:0});var GD=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},HD=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=GD(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Zp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ei(r)&&(l={},ji(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}HD(o,r)}}}},tr=zf.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ai?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zp("roundProps",Rm),Zp("modifiers"),Zp("snap",ub))||zf;Un.version=Ui.version=tr.version="3.14.2";Ky=1;Xg()&&Ol();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mx,_a,vl,i_,mo,Sx,r_,WD=function(){return typeof window<"u"},Ws={},lo=180/Math.PI,yl=Math.PI/180,cl=Math.atan2,wx=1e8,s_=/([A-Z])/g,XD=/(left|right|width|margin|padding|x)/i,YD=/[\s,\(]\S/,cs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$D=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KD=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Db=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lb=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JD=function(e,t,n){return e.style[t]=n},jD=function(e,t,n){return e.style.setProperty(t,n)},QD=function(e,t,n){return e._gsap[t]=n},e3=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},t3=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},n3=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gn="transform",er=gn+"Origin",i3=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ws&&r){if(this.tfm=this.tfm||{},e!=="transform")e=cs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Fs(i,o)}):this.tfm[e]=a.x?a[e]:Fs(i,e),e===er&&(this.tfm.zOrigin=a.zOrigin);else return cs.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(gn)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(er,t,"")),e=gn}(r||t)&&this.props.push(e,t,r[e])},Nb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},r3=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(s_,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=r_(),(!r||!r.isStart)&&!n[gn]&&(Nb(n),i.zOrigin&&n[er]&&(n[er]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ub=function(e,t){var n={target:e,props:[],revert:r3,save:i3};return e._gsap||tr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ob,Lm=function(e,t){var n=_a.createElementNS?_a.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_a.createElement(e);return n&&n.style?n:_a.createElement(e)},mr=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(s_,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Fl(t)||t,1)||""},Tx="O,Moz,ms,Ms,Webkit".split(","),Fl=function(e,t,n){var i=t||mo,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Tx[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Tx[a]:"")+e},Nm=function(){WD()&&window.document&&(Mx=window,_a=Mx.document,vl=_a.documentElement,mo=Lm("div")||{style:{}},Lm("div"),gn=Fl(gn),er=gn+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ob=!!Fl("perspective"),r_=tr.core.reverting,i_=1)},Ex=function(e){var t=e.ownerSVGElement,n=Lm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),vl.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),vl.removeChild(n),r},Ax=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Fb=function(e){var t,n;try{t=e.getBBox()}catch{t=Ex(e),n=1}return t&&(t.width||t.height)||n||(t=Ex(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ax(e,["x","cx","x1"])||0,y:+Ax(e,["y","cy","y1"])||0,width:0,height:0}:t},Bb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fb(e))},Ta=function(e,t){if(t){var n=e.style,i;t in Ws&&t!==er&&(t=gn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(s_,"-$1").toLowerCase())):n.removeAttribute(t)}},xa=function(e,t,n,i,r,a){var o=new Qi(e._pt,t,n,0,1,a?Lb:Db);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Cx={deg:1,rad:1,turn:1},s3={grid:1,flex:1},Ea=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=mo.style,l=XD.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,_,m,g;if(i===a||!r||Cx[i]||Cx[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),g=e.getCTM&&Bb(e),(d||a==="%")&&(Ws[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],An(d?r/p*u:r/100*p);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_a||!_.appendChild)&&(_=_a.body),m=_._gsap,m&&d&&m.width&&l&&m.time===fr.time&&!m.uncache)return An(r/m.width*u);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,p=e[h],y?e.style[t]=y:Ta(e,t)}else(d||a==="%")&&!s3[mr(_,"display")]&&(o.position=mr(e,"position")),_===e&&(o.position="static"),_.appendChild(mo),p=mo[h],_.removeChild(mo),o.position="absolute";return l&&d&&(m=yo(_),m.time=fr.time,m.width=_[h]),An(f?p*r/u:p&&r?u/p*r:0)},Fs=function(e,t,n,i){var r;return i_||Nm(),t in cs&&t!=="transform"&&(t=cs[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ws[t]&&t!=="transform"?(r=hh(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Vf(mr(e,er))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=kf[t]&&kf[t](e,t,n)||mr(e,t)||eb(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ea(e,t,r,n)+n:r},a3=function(e,t,n,i){if(!n||n==="none"){var r=Fl(t,e,1),a=r&&mr(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=mr(e,"borderTopColor"))}var o=new Qi(this._pt,e.style,t,0,1,Rb),l=0,c=0,h,u,f,d,p,_,m,g,y,x,v,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=mr(e,t)||i,_?e.style[t]=_:Ta(e,t)),h=[n,i],vb(h),n=h[0],i=h[1],f=n.match(ml)||[],b=i.match(ml)||[],b.length){for(;u=ml.exec(i);)m=u[0],y=i.substring(l,u.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=xl(d,m)+v),g=parseFloat(m),x=m.substr((g+"").length),l=ml.lastIndex-x.length,x||(x=x||xr.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(d=Ea(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Lb:Db;return $y.test(i)&&(o.e=0),this._pt=o,o},Rx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},o3=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rx[n]||n,t[1]=Rx[i]||i,t.join(" ")},l3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ws[o]&&(l=1,o=o==="transformOrigin"?er:gn),Ta(n,o);l&&(Ta(n,gn),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",hh(n,1),a.uncache=1,Nb(i)))}},kf={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Qi(e._pt,t,n,0,0,l3);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ch=[1,0,0,1,0,0],zb={},kb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Px=function(e){var t=mr(e,gn);return kb(t)?ch:t.substr(7).match(Zy).map(An)},a_=function(e,t){var n=e._gsap||yo(e),i=e.style,r=Px(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ch:r):(r===ch&&!e.offsetParent&&e!==vl&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,vl.appendChild(e)),r=Px(e),l?i.display=l:Ta(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):vl.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Um=function(e,t,n,i,r,a){var o=e._gsap,l=r||a_(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,w,A,R,M;n?l!==ch&&(A=d*m-p*_)&&(R=v*(m/A)+b*(-_/A)+(_*y-m*g)/A,M=v*(-p/A)+b*(d/A)-(d*y-p*g)/A,v=R,b=M):(w=Fb(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(x[1]||x[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(g=v-c,y=b-h,o.xOffset=u+(g*d+y*_)-g,o.yOffset=f+(g*p+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[er]="0px 0px",a&&(xa(a,o,"xOrigin",c,v),xa(a,o,"yOrigin",h,b),xa(a,o,"xOffset",u,o.xOffset),xa(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},hh=function(e,t){var n=e._gsap||new Sb(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mr(e,er)||"0",h,u,f,d,p,_,m,g,y,x,v,b,w,A,R,M,T,U,F,B,q,$,W,Y,te,de,pe,be,Je,rt,bt,Rt;return h=u=f=_=m=g=y=x=v=0,d=p=1,n.svg=!!(e.getCTM&&Bb(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gn]!=="none"?l[gn]:"")),i.scale=i.rotate=i.translate="none"),A=a_(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Um(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==ch&&(U=A[0],F=A[1],B=A[2],q=A[3],h=$=A[4],u=W=A[5],A.length===6?(d=Math.sqrt(U*U+F*F),p=Math.sqrt(q*q+B*B),_=U||F?cl(F,U)*lo:0,y=B||q?cl(B,q)*lo+_:0,y&&(p*=Math.abs(Math.cos(y*yl))),n.svg&&(h-=b-(b*U+w*B),u-=w-(b*F+w*q))):(Rt=A[6],rt=A[7],pe=A[8],be=A[9],Je=A[10],bt=A[11],h=A[12],u=A[13],f=A[14],R=cl(Rt,Je),m=R*lo,R&&(M=Math.cos(-R),T=Math.sin(-R),Y=$*M+pe*T,te=W*M+be*T,de=Rt*M+Je*T,pe=$*-T+pe*M,be=W*-T+be*M,Je=Rt*-T+Je*M,bt=rt*-T+bt*M,$=Y,W=te,Rt=de),R=cl(-B,Je),g=R*lo,R&&(M=Math.cos(-R),T=Math.sin(-R),Y=U*M-pe*T,te=F*M-be*T,de=B*M-Je*T,bt=q*T+bt*M,U=Y,F=te,B=de),R=cl(F,U),_=R*lo,R&&(M=Math.cos(R),T=Math.sin(R),Y=U*M+F*T,te=$*M+W*T,F=F*M-U*T,W=W*M-$*T,U=Y,$=te),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=An(Math.sqrt(U*U+F*F+B*B)),p=An(Math.sqrt(W*W+Rt*Rt)),R=cl($,W),y=Math.abs(R)>2e-4?R*lo:0,v=bt?1/(bt<0?-bt:bt):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kb(mr(e,gn)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=An(d),n.scaleY=An(p),n.rotation=An(_)+o,n.rotationX=An(m)+o,n.rotationY=An(g)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[er]=Vf(c)),n.xOffset=n.yOffset=0,n.force3D=xr.force3D,n.renderTransform=n.svg?h3:Ob?Vb:c3,n.uncache=0,n},Vf=function(e){return(e=e.split(" "))[0]+" "+e[1]},$p=function(e,t,n){var i=_i(t);return An(parseFloat(t)+parseFloat(Ea(e,"x",n+"px",i)))+i},c3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vb(e,t)},so="0deg",mc="0px",ao=") ",Vb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,x=n.zOrigin,v="",b=g==="auto"&&e&&e!==1||g===!0;if(x&&(u!==so||h!==so)){var w=parseFloat(h)*yl,A=Math.sin(w),R=Math.cos(w),M;w=parseFloat(u)*yl,M=Math.cos(w),a=$p(y,a,A*M*-x),o=$p(y,o,-Math.sin(w)*-x),l=$p(y,l,R*M*-x+x)}m!==mc&&(v+="perspective("+m+ao),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||a!==mc||o!==mc||l!==mc)&&(v+=l!==mc||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ao),c!==so&&(v+="rotate("+c+ao),h!==so&&(v+="rotateY("+h+ao),u!==so&&(v+="rotateX("+u+ao),(f!==so||d!==so)&&(v+="skew("+f+", "+d+ao),(p!==1||_!==1)&&(v+="scale("+p+", "+_+ao),y.style[gn]=v||"translate(0, 0)"},h3=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),b,w,A,R,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=yl,c*=yl,b=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=yl,M=Math.tan(c-h),M=Math.sqrt(1+M*M),A*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=An(b),w=An(w),A=An(A),R=An(R)):(b=u,R=f,w=A=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Ea(d,"x",a,"px"),v=Ea(d,"y",o,"px")),(p||_||m||g)&&(x=An(x+p-(p*b+_*A)+m),v=An(v+_-(p*w+_*R)+g)),(i||r)&&(M=d.getBBox(),x=An(x+i/100*M.width),v=An(v+r/100*M.height)),M="matrix("+b+","+w+","+A+","+R+","+x+","+v+")",d.setAttribute("transform",M),y&&(d.style[gn]=M)},u3=function(e,t,n,i,r){var a=360,o=ei(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?lo:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),u==="cw"&&c<0?c=(c+a*wx)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*wx)%a-~~(c/a)*a)),e._pt=f=new Qi(e._pt,t,n,i,c,qD),f.e=h,f.u="deg",e._props.push(n),f},Ix=function(e,t){for(var n in t)e[n]=t[n];return e},f3=function(e,t,n){var i=Ix({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gn]=t,o=hh(n,1),Ta(n,gn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gn],a[gn]=t,o=hh(n,1),a[gn]=c);for(l in Ws)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=_i(c),p=_i(h),u=d!==p?Ea(n,l,c,p):parseFloat(c),f=parseFloat(h),e._pt=new Qi(e._pt,o,l,u,f-u,Dm),e._pt.u=p||0,e._props.push(l));Ix(o,i)};ji("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});kf[e>1?"border"+s:s]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(p){return Fs(o,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var Gb={name:"css",register:Nm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,p,_,m,g,y,x,v,b,w,A,R,M;i_||Nm(),this.styles=this.styles||Ub(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ur[_]&&wb(_,t,n,i,e,r)))){if(d=typeof h,p=kf[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ah(h)),p)p(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ya.lastIndex=0,ya.test(c)||(m=_i(c),g=_i(h),g?m!==g&&(c=Ea(e,_,c,g)+g):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),R.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],ei(c)&&~c.indexOf("random(")&&(c=ah(c)),_i(c+"")||c==="auto"||(c+=xr.units[_]||_i(Fs(e,_))||""),(c+"").charAt(1)==="="&&(c=Fs(e,_))):c=Fs(e,_),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in cs&&(_==="autoAlpha"&&(f===1&&Fs(e,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,o.visibility),xa(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=cs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ws,x){if(this.styles.save(_),M=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=mr(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=h,h=mr(e,"perspective"),T?e.style.perspective=T:Ta(e,"perspective")}u=parseFloat(h)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||hh(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new Qi(this._pt,o,gn,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new Qi(this._pt,b,"scaleY",b.scaleY,(y?xl(b.scaleY,y+u):u)-b.scaleY||0,Dm),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(er,0,o[er]),h=o3(h),b.svg?Um(e,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&xa(this,b,"zOrigin",b.zOrigin,g),xa(this,o,_,Vf(c),Vf(h)));continue}else if(_==="svgOrigin"){Um(e,h,1,w,0,this);continue}else if(_ in zb){u3(this,b,_,f,y?xl(f,y+h):h);continue}else if(_==="smoothOrigin"){xa(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){f3(this,h,e);continue}}else _ in o||(_=Fl(_)||_);if(x||(u||u===0)&&(f||f===0)&&!YD.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),g=_i(h)||(_ in xr.units?xr.units[_]:m),m!==g&&(f=Ea(e,_,c,g)),this._pt=new Qi(this._pt,x?b:o,_,f,(y?xl(f,y+u):u)-f,!x&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?KD:Dm),this._pt.u=g||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=$D):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=ZD);else if(_ in o)a3.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,r);else if(_!=="parseTransform"){qg(_,h);continue}x||(_ in o?R.push(_,0,o[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),a.push(_)}}A&&Pb(this)},render:function(e,t){if(t.tween._time||!r_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fs,aliases:cs,getSetter:function(e,t,n){var i=cs[t];return i&&i.indexOf(",")<0&&(t=i),t in Ws&&t!==er&&(e._gsap.x||Fs(e,"x"))?n&&Sx===n?t==="scale"?e3:QD:(Sx=n||{})&&(t==="scale"?t3:n3):e.style&&!Wg(e.style[t])?JD:~t.indexOf("-")?jD:t_(e,t)},core:{_removeProperty:Ta,_getMatrix:a_}};tr.utils.checkPrefix=Fl;tr.core.getStyleSaver=Ub;(function(s,e,t,n){var i=ji(s+","+e+","+t,function(r){Ws[r]=1});ji(e,function(r){xr.units[r]="deg",zb[r]=1}),cs[i[13]]=s+","+e,ji(n,function(r){var a=r.split(":");cs[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ji("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){xr.units[s]="px"});tr.registerPlugin(Gb);var d3=tr.registerPlugin(Gb)||tr;d3.core.Tween;var bc={exports:{}},p3=bc.exports,Dx;function m3(){return Dx||(Dx=1,(function(s,e){(function(t,n){n(e)})(p3,(function(t){function n(H,E){for(var O=0;O<E.length;O++){var P=E[O];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(H,P.key,P)}}function i(H,E,O){return E&&n(H.prototype,E),H}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var r,a,o,l,c,h,u,f,d,p,_,m,g,y=function(){return r||typeof window<"u"&&(r=window.gsap)&&r.registerPlugin&&r},x=1,v=[],b=[],w=[],A=Date.now,R=function(E,O){return O},M=function(){var E=d.core,O=E.bridge||{},P=E._scrollers,I=E._proxies;P.push.apply(P,b),I.push.apply(I,w),b=P,w=I,R=function(re,J){return O[re](J)}},T=function(E,O){return~w.indexOf(E)&&w[w.indexOf(E)+1][O]},U=function(E){return!!~p.indexOf(E)},F=function(E,O,P,I,G){return E.addEventListener(O,P,{passive:I!==!1,capture:!!G})},B=function(E,O,P,I){return E.removeEventListener(O,P,!!I)},q="scrollLeft",$="scrollTop",W=function(){return _&&_.isPressed||b.cache++},Y=function(E,O){var P=function I(G){if(G||G===0){x&&(o.history.scrollRestoration="manual");var re=_&&_.isPressed;G=I.v=Math.round(G)||(_&&_.iOS?1:0),E(G),I.cacheID=b.cache,re&&R("ss",G)}else(O||b.cache!==I.cacheID||R("ref"))&&(I.cacheID=b.cache,I.v=E());return I.v+I.offset};return P.offset=0,E&&P},te={s:q,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Y(function(H){return arguments.length?o.scrollTo(H,de.sc()):o.pageXOffset||l[q]||c[q]||h[q]||0})},de={s:$,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:te,sc:Y(function(H){return arguments.length?o.scrollTo(te.sc(),H):o.pageYOffset||l[$]||c[$]||h[$]||0})},pe=function(E,O){return(O&&O._ctx&&O._ctx.selector||r.utils.toArray)(E)[0]||(typeof E=="string"&&r.config().nullTargetWarn!==!1?console.warn("Element not found:",E):null)},be=function(E,O){for(var P=O.length;P--;)if(O[P]===E||O[P].contains(E))return!0;return!1},Je=function(E,O){var P=O.s,I=O.sc;U(E)&&(E=l.scrollingElement||c);var G=b.indexOf(E),re=I===de.sc?1:2;!~G&&(G=b.push(E)-1),b[G+re]||F(E,"scroll",W);var J=b[G+re],Ge=J||(b[G+re]=Y(T(E,P),!0)||(U(E)?I:Y(function(mt){return arguments.length?E[P]=mt:E[P]})));return Ge.target=E,J||(Ge.smooth=r.getProperty(E,"scrollBehavior")==="smooth"),Ge},rt=function(E,O,P){var I=E,G=E,re=A(),J=re,Ge=O||50,mt=Math.max(500,Ge*3),qt=function(ht,_n){var nn=A();_n||nn-re>Ge?(G=I,I=ht,J=re,re=nn):P?I+=ht:I=G+(ht-G)/(nn-J)*(re-J)},Dt=function(){G=I=P?0:I,J=re=0},lt=function(ht){var _n=J,nn=G,kn=A();return(ht||ht===0)&&ht!==I&&qt(ht),re===J||kn-J>mt?0:(I+(P?nn:-nn))/((P?kn:re)-_n)*1e3};return{update:qt,reset:Dt,getVelocity:lt}},bt=function(E,O){return O&&!E._gsapAllow&&E.preventDefault(),E.changedTouches?E.changedTouches[0]:E},Rt=function(E){var O=Math.max.apply(Math,E),P=Math.min.apply(Math,E);return Math.abs(O)>=Math.abs(P)?O:P},oe=function(){d=r.core.globals().ScrollTrigger,d&&d.core&&M()},ue=function(E){return r=E||y(),!a&&r&&typeof document<"u"&&document.body&&(o=window,l=document,c=l.documentElement,h=l.body,p=[o,l,c,h],r.utils.clamp,g=r.core.context||function(){},f="onpointerenter"in h?"pointer":"mouse",u=ve.isTouch=o.matchMedia&&o.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in o||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,m=ve.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return x=0},500),oe(),a=1),a};te.op=de,b.cache=0;var ve=(function(){function H(O){this.init(O)}var E=H.prototype;return E.init=function(P){a||ue(r)||console.warn("Please gsap.registerPlugin(Observer)"),d||oe();var I=P.tolerance,G=P.dragMinimum,re=P.type,J=P.target,Ge=P.lineHeight,mt=P.debounce,qt=P.preventDefault,Dt=P.onStop,lt=P.onStopDelay,fe=P.ignore,ht=P.wheelSpeed,_n=P.event,nn=P.onDragStart,kn=P.onDragEnd,cn=P.onDrag,ni=P.onPress,Ct=P.onRelease,Sr=P.onRight,an=P.onLeft,vt=P.onUp,Ei=P.onDown,Gi=P.onChangeX,at=P.onChangeY,Zn=P.onChange,_t=P.onToggleX,bs=P.onToggleY,Vn=P.onHover,Ai=P.onHoverEnd,Ci=P.onMove,Qt=P.ignoreCheck,Pn=P.isNormalizer,In=P.onGestureStart,Z=P.onGestureEnd,Gn=P.onWheel,Ba=P.onEnable,$s=P.onDisable,wr=P.onClick,Ms=P.scrollSpeed,li=P.capture,Dn=P.allowClicks,Ri=P.lockAxis,ci=P.onLockAxis;this.target=J=pe(J)||c,this.vars=P,fe&&(fe=r.utils.toArray(fe)),I=I||1e-9,G=G||0,ht=ht||1,Ms=Ms||1,re=re||"wheel,touch,pointer",mt=mt!==!1,Ge||(Ge=parseFloat(o.getComputedStyle(h).lineHeight)||22);var Ks,Pi,Ii,Gt,Sn,Hi,ar,ie=this,or=0,Ss=0,Js=P.passive||!qt&&P.passive!==!1,xn=Je(J,te),ws=Je(J,de),js=xn(),za=ws(),$n=~re.indexOf("touch")&&!~re.indexOf("pointer")&&m[0]==="pointerdown",Qs=U(J),wn=J.ownerDocument||l,Or=[0,0,0],Tr=[0,0,0],Ts=0,jl=function(){return Ts=A()},Ln=function(ft,Zt){return(ie.event=ft)&&fe&&be(ft.target,fe)||Zt&&$n&&ft.pointerType!=="touch"||Qt&&Qt(ft,Zt)},Fh=function(){ie._vx.reset(),ie._vy.reset(),Pi.pause(),Dt&&Dt(ie)},Es=function(){var ft=ie.deltaX=Rt(Or),Zt=ie.deltaY=Rt(Tr),Fe=Math.abs(ft)>=I,Mt=Math.abs(Zt)>=I;Zn&&(Fe||Mt)&&Zn(ie,ft,Zt,Or,Tr),Fe&&(Sr&&ie.deltaX>0&&Sr(ie),an&&ie.deltaX<0&&an(ie),Gi&&Gi(ie),_t&&ie.deltaX<0!=or<0&&_t(ie),or=ie.deltaX,Or[0]=Or[1]=Or[2]=0),Mt&&(Ei&&ie.deltaY>0&&Ei(ie),vt&&ie.deltaY<0&&vt(ie),at&&at(ie),bs&&ie.deltaY<0!=Ss<0&&bs(ie),Ss=ie.deltaY,Tr[0]=Tr[1]=Tr[2]=0),(Gt||Ii)&&(Ci&&Ci(ie),Ii&&(nn&&Ii===1&&nn(ie),cn&&cn(ie),Ii=0),Gt=!1),Hi&&!(Hi=!1)&&ci&&ci(ie),Sn&&(Gn(ie),Sn=!1),Ks=0},zo=function(ft,Zt,Fe){Or[Fe]+=ft,Tr[Fe]+=Zt,ie._vx.update(ft),ie._vy.update(Zt),mt?Ks||(Ks=requestAnimationFrame(Es)):Es()},ko=function(ft,Zt){Ri&&!ar&&(ie.axis=ar=Math.abs(ft)>Math.abs(Zt)?"x":"y",Hi=!0),ar!=="y"&&(Or[2]+=ft,ie._vx.update(ft,!0)),ar!=="x"&&(Tr[2]+=Zt,ie._vy.update(Zt,!0)),mt?Ks||(Ks=requestAnimationFrame(Es)):Es()},ea=function(ft){if(!Ln(ft,1)){ft=bt(ft,qt);var Zt=ft.clientX,Fe=ft.clientY,Mt=Zt-ie.x,ct=Fe-ie.y,St=ie.isDragging;ie.x=Zt,ie.y=Fe,(St||(Mt||ct)&&(Math.abs(ie.startX-Zt)>=G||Math.abs(ie.startY-Fe)>=G))&&(Ii||(Ii=St?2:1),St||(ie.isDragging=!0),ko(Mt,ct))}},ka=ie.onPress=function(Et){Ln(Et,1)||Et&&Et.button||(ie.axis=ar=null,Pi.pause(),ie.isPressed=!0,Et=bt(Et),or=Ss=0,ie.startX=ie.x=Et.clientX,ie.startY=ie.y=Et.clientY,ie._vx.reset(),ie._vy.reset(),F(Pn?J:wn,m[1],ea,Js,!0),ie.deltaX=ie.deltaY=0,ni&&ni(ie))},Lt=ie.onRelease=function(Et){if(!Ln(Et,1)){B(Pn?J:wn,m[1],ea,!0);var ft=!isNaN(ie.y-ie.startY),Zt=ie.isDragging,Fe=Zt&&(Math.abs(ie.x-ie.startX)>3||Math.abs(ie.y-ie.startY)>3),Mt=bt(Et);!Fe&&ft&&(ie._vx.reset(),ie._vy.reset(),qt&&Dn&&r.delayedCall(.08,function(){if(A()-Ts>300&&!Et.defaultPrevented){if(Et.target.click)Et.target.click();else if(wn.createEvent){var ct=wn.createEvent("MouseEvents");ct.initMouseEvent("click",!0,!0,o,1,Mt.screenX,Mt.screenY,Mt.clientX,Mt.clientY,!1,!1,!1,!1,0,null),Et.target.dispatchEvent(ct)}}})),ie.isDragging=ie.isGesturing=ie.isPressed=!1,Dt&&Zt&&!Pn&&Pi.restart(!0),Ii&&Es(),kn&&Zt&&kn(ie),Ct&&Ct(ie,Fe)}},Va=function(ft){return ft.touches&&ft.touches.length>1&&(ie.isGesturing=!0)&&In(ft,ie.isDragging)},Fr=function(){return(ie.isGesturing=!1)||Z(ie)},Br=function(ft){if(!Ln(ft)){var Zt=xn(),Fe=ws();zo((Zt-js)*Ms,(Fe-za)*Ms,1),js=Zt,za=Fe,Dt&&Pi.restart(!0)}},zr=function(ft){if(!Ln(ft)){ft=bt(ft,qt),Gn&&(Sn=!0);var Zt=(ft.deltaMode===1?Ge:ft.deltaMode===2?o.innerHeight:1)*ht;zo(ft.deltaX*Zt,ft.deltaY*Zt,0),Dt&&!Pn&&Pi.restart(!0)}},Ga=function(ft){if(!Ln(ft)){var Zt=ft.clientX,Fe=ft.clientY,Mt=Zt-ie.x,ct=Fe-ie.y;ie.x=Zt,ie.y=Fe,Gt=!0,Dt&&Pi.restart(!0),(Mt||ct)&&ko(Mt,ct)}},Vo=function(ft){ie.event=ft,Vn(ie)},As=function(ft){ie.event=ft,Ai(ie)},Ql=function(ft){return Ln(ft)||bt(ft,qt)&&wr(ie)};Pi=ie._dc=r.delayedCall(lt||.25,Fh).pause(),ie.deltaX=ie.deltaY=0,ie._vx=rt(0,50,!0),ie._vy=rt(0,50,!0),ie.scrollX=xn,ie.scrollY=ws,ie.isDragging=ie.isGesturing=ie.isPressed=!1,g(this),ie.enable=function(Et){return ie.isEnabled||(F(Qs?wn:J,"scroll",W),re.indexOf("scroll")>=0&&F(Qs?wn:J,"scroll",Br,Js,li),re.indexOf("wheel")>=0&&F(J,"wheel",zr,Js,li),(re.indexOf("touch")>=0&&u||re.indexOf("pointer")>=0)&&(F(J,m[0],ka,Js,li),F(wn,m[2],Lt),F(wn,m[3],Lt),Dn&&F(J,"click",jl,!0,!0),wr&&F(J,"click",Ql),In&&F(wn,"gesturestart",Va),Z&&F(wn,"gestureend",Fr),Vn&&F(J,f+"enter",Vo),Ai&&F(J,f+"leave",As),Ci&&F(J,f+"move",Ga)),ie.isEnabled=!0,ie.isDragging=ie.isGesturing=ie.isPressed=Gt=Ii=!1,ie._vx.reset(),ie._vy.reset(),js=xn(),za=ws(),Et&&Et.type&&ka(Et),Ba&&Ba(ie)),ie},ie.disable=function(){ie.isEnabled&&(v.filter(function(Et){return Et!==ie&&U(Et.target)}).length||B(Qs?wn:J,"scroll",W),ie.isPressed&&(ie._vx.reset(),ie._vy.reset(),B(Pn?J:wn,m[1],ea,!0)),B(Qs?wn:J,"scroll",Br,li),B(J,"wheel",zr,li),B(J,m[0],ka,li),B(wn,m[2],Lt),B(wn,m[3],Lt),B(J,"click",jl,!0),B(J,"click",Ql),B(wn,"gesturestart",Va),B(wn,"gestureend",Fr),B(J,f+"enter",Vo),B(J,f+"leave",As),B(J,f+"move",Ga),ie.isEnabled=ie.isPressed=ie.isDragging=!1,$s&&$s(ie))},ie.kill=ie.revert=function(){ie.disable();var Et=v.indexOf(ie);Et>=0&&v.splice(Et,1),_===ie&&(_=0)},v.push(ie),Pn&&U(J)&&(_=ie),ie.enable(_n)},i(H,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),H})();ve.version="3.14.2",ve.create=function(H){return new ve(H)},ve.register=ue,ve.getAll=function(){return v.slice()},ve.getById=function(H){return v.filter(function(E){return E.vars.id===H})[0]},y()&&r.registerPlugin(ve);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var le,Be,Oe,it,tt,Q,_e,he,Ee,N,je,Ue,Xe,ye,L,S,k,ee,ce,ne,qe,Me,Pe,st,me,Ae,Ve,Ze,we,gt,z,Ie,xe,ze,ge=1,se=Date.now,Se=se(),nt=0,Wt=0,Xt=function(E,O,P){var I=oi(E)&&(E.substr(0,6)==="clamp("||E.indexOf("max")>-1);return P["_"+O+"Clamp"]=I,I?E.substr(6,E.length-7):E},ir=function(E,O){return O&&(!oi(E)||E.substr(0,6)!=="clamp(")?"clamp("+E+")":E},Ur=function H(){return Wt&&requestAnimationFrame(H)},Eh=function(){return ye=1},Wl=function(){return ye=0},Vi=function(E){return E},Ia=function(E){return Math.round(E*1e5)/1e5||0},Xl=function(){return typeof window<"u"},Yl=function(){return le||Xl()&&(le=window.gsap)&&le.registerPlugin&&le},Mi=function(E){return!!~_e.indexOf(E)},Uo=function(E){return(E==="Height"?z:Oe["inner"+E])||tt["client"+E]||Q["client"+E]},ql=function(E){return T(E,"getBoundingClientRect")||(Mi(E)?function(){return Nh.width=Oe.innerWidth,Nh.height=z,Nh}:function(){return $e(E)})},Ah=function(E,O,P){var I=P.d,G=P.d2,re=P.a;return(re=T(E,"getBoundingClientRect"))?function(){return re()[I]}:function(){return(O?Uo(G):E["client"+G])||0}},Oo=function(E,O){return!O||~w.indexOf(E)?ql(E):function(){return Nh}},rr=function(E,O){var P=O.s,I=O.d2,G=O.d,re=O.a;return Math.max(0,(P="scroll"+I)&&(re=T(E,P))?re()-ql(E)()[G]:Mi(E)?(tt[P]||Q[P])-Uo(I):E[P]-E["offset"+I])},xs=function(E,O){for(var P=0;P<ce.length;P+=3)(!O||~O.indexOf(ce[P+1]))&&E(ce[P],ce[P+1],ce[P+2])},oi=function(E){return typeof E=="string"},Bn=function(E){return typeof E=="function"},Da=function(E){return typeof E=="number"},vs=function(E){return typeof E=="object"},La=function(E,O,P){return E&&E.progress(O?0:1)&&P&&E.pause()},Zl=function(E,O){if(E.enabled){var P=E._ctx?E._ctx.add(function(){return O(E)}):O(E);P&&P.totalTime&&(E.callbackAnimation=P)}},qs=Math.abs,Ch="left",C="top",V="right",j="bottom",K="width",X="height",Te="Right",ke="Left",Re="Top",He="Bottom",De="padding",Ke="margin",Qe="Width",Tt="Height",pt="px",Ut=function(E){return Oe.getComputedStyle(E)},sn=function(E){var O=Ut(E).position;E.style.position=O==="absolute"||O==="fixed"?O:"relative"},$t=function(E,O){for(var P in O)P in E||(E[P]=O[P]);return E},$e=function(E,O){var P=O&&Ut(E)[L]!=="matrix(1, 0, 0, 1, 0, 0)"&&le.to(E,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),I=E.getBoundingClientRect();return P&&P.progress(0).kill(),I},zt=function(E,O){var P=O.d2;return E["offset"+P]||E["client"+P]||0},Ot=function(E){var O=[],P=E.labels,I=E.duration(),G;for(G in P)O.push(P[G]/I);return O},Si=function(E){return function(O){return le.utils.snap(Ot(E),O)}},$r=function(E){var O=le.utils.snap(E),P=Array.isArray(E)&&E.slice(0).sort(function(I,G){return I-G});return P?function(I,G,re){re===void 0&&(re=.001);var J;if(!G)return O(I);if(G>0){for(I-=re,J=0;J<P.length;J++)if(P[J]>=I)return P[J];return P[J-1]}else for(J=P.length,I+=re;J--;)if(P[J]<=I)return P[J];return P[0]}:function(I,G,re){re===void 0&&(re=.001);var J=O(I);return!G||Math.abs(J-I)<re||J-I<0==G<0?J:O(G<0?I-E:I+E)}},wi=function(E){return function(O,P){return $r(Ot(E))(O,P.direction)}},Kr=function(E,O,P,I){return P.split(",").forEach(function(G){return E(O,G,I)})},xt=function(E,O,P,I,G){return E.addEventListener(O,P,{passive:!I,capture:!!G})},Vt=function(E,O,P,I){return E.removeEventListener(O,P,!!I)},ti=function(E,O,P){P=P&&P.wheelHandler,P&&(E(O,"wheel",P),E(O,"touchmove",P))},qn={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zn={toggleActions:"play",anticipatePin:0},Zs={top:0,left:0,center:.5,bottom:1,right:1},Mr=function(E,O){if(oi(E)){var P=E.indexOf("="),I=~P?+(E.charAt(P-1)+1)*parseFloat(E.substr(P+1)):0;~P&&(E.indexOf("%")>P&&(I*=O/100),E=E.substr(0,P-1)),E=I+(E in Zs?Zs[E]*O:~E.indexOf("%")?parseFloat(E)*O/100:parseFloat(E)||0)}return E},Rh=function(E,O,P,I,G,re,J,Ge){var mt=G.startColor,qt=G.endColor,Dt=G.fontSize,lt=G.indent,fe=G.fontWeight,ht=it.createElement("div"),_n=Mi(P)||T(P,"pinType")==="fixed",nn=E.indexOf("scroller")!==-1,kn=_n?Q:P,cn=E.indexOf("start")!==-1,ni=cn?mt:qt,Ct="border-color:"+ni+";font-size:"+Dt+";color:"+ni+";font-weight:"+fe+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return Ct+="position:"+((nn||Ge)&&_n?"fixed;":"absolute;"),(nn||Ge||!_n)&&(Ct+=(I===de?V:j)+":"+(re+parseFloat(lt))+"px;"),J&&(Ct+="box-sizing:border-box;text-align:left;width:"+J.offsetWidth+"px;"),ht._isStart=cn,ht.setAttribute("class","gsap-marker-"+E+(O?" marker-"+O:"")),ht.style.cssText=Ct,ht.innerText=O||O===0?E+"-"+O:E,kn.children[0]?kn.insertBefore(ht,kn.children[0]):kn.appendChild(ht),ht._offset=ht["offset"+I.op.d2],Ph(ht,0,I,cn),ht},Ph=function(E,O,P,I){var G={display:"block"},re=P[I?"os2":"p2"],J=P[I?"p2":"os2"];E._isFlipped=I,G[P.a+"Percent"]=I?-100:0,G[P.a]=I?"1px":0,G["border"+re+Qe]=1,G["border"+J+Qe]=0,G[P.p]=O+"px",le.set(E,G)},Pt=[],Od={},$l,o_=function(){return se()-nt>34&&($l||($l=requestAnimationFrame(ys)))},Fo=function(){(!Pe||!Pe.isPressed||Pe.startX>Q.clientWidth)&&(b.cache++,Pe?$l||($l=requestAnimationFrame(ys)):ys(),nt||Ua("scrollStart"),nt=se())},Fd=function(){Ae=Oe.innerWidth,me=Oe.innerHeight},Kl=function(E){b.cache++,(E===!0||!Xe&&!Me&&!it.fullscreenElement&&!it.webkitFullscreenElement&&(!st||Ae!==Oe.innerWidth||Math.abs(Oe.innerHeight-me)>Oe.innerHeight*.25))&&he.restart(!0)},Na={},Hb=[],l_=function H(){return Vt(It,"scrollEnd",H)||Fa(!0)},Ua=function(E){return Na[E]&&Na[E].map(function(O){return O()})||Hb},sr=[],c_=function(E){for(var O=0;O<sr.length;O+=5)(!E||sr[O+4]&&sr[O+4].query===E)&&(sr[O].style.cssText=sr[O+1],sr[O].getBBox&&sr[O].setAttribute("transform",sr[O+2]||""),sr[O+3].uncache=1)},h_=function(){return b.forEach(function(E){return Bn(E)&&++E.cacheID&&(E.rec=E())})},Bd=function(E,O){var P;for(S=0;S<Pt.length;S++)P=Pt[S],P&&(!O||P._ctx===O)&&(E?P.kill(1):P.revert(!0,!0));Ie=!0,O&&c_(O),O||Ua("revert")},u_=function(E,O){b.cache++,(O||!Ti)&&b.forEach(function(P){return Bn(P)&&P.cacheID++&&(P.rec=0)}),oi(E)&&(Oe.history.scrollRestoration=we=E)},Ti,Oa=0,f_,Wb=function(){if(f_!==Oa){var E=f_=Oa;requestAnimationFrame(function(){return E===Oa&&Fa(!0)})}},d_=function(){Q.appendChild(gt),z=!Pe&&gt.offsetHeight||Oe.innerHeight,Q.removeChild(gt)},p_=function(E){return Ee(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(O){return O.style.display=E?"none":"block"})},Fa=function(E,O){if(tt=it.documentElement,Q=it.body,_e=[Oe,it,tt,Q],nt&&!E&&!Ie){xt(It,"scrollEnd",l_);return}d_(),Ti=It.isRefreshing=!0,Ie||h_();var P=Ua("refreshInit");ne&&It.sort(),O||Bd(),b.forEach(function(I){Bn(I)&&(I.smooth&&(I.target.style.scrollBehavior="auto"),I(0))}),Pt.slice(0).forEach(function(I){return I.refresh()}),Ie=!1,Pt.forEach(function(I){if(I._subPinOffset&&I.pin){var G=I.vars.horizontal?"offsetWidth":"offsetHeight",re=I.pin[G];I.revert(!0,1),I.adjustPinSpacing(I.pin[G]-re),I.refresh()}}),xe=1,p_(!0),Pt.forEach(function(I){var G=rr(I.scroller,I._dir),re=I.vars.end==="max"||I._endClamp&&I.end>G,J=I._startClamp&&I.start>=G;(re||J)&&I.setPositions(J?G-1:I.start,re?Math.max(J?G:I.start+1,G):I.end,!0)}),p_(!1),xe=0,P.forEach(function(I){return I&&I.render&&I.render(-1)}),b.forEach(function(I){Bn(I)&&(I.smooth&&requestAnimationFrame(function(){return I.target.style.scrollBehavior="smooth"}),I.rec&&I(I.rec))}),u_(we,1),he.pause(),Oa++,Ti=2,ys(2),Pt.forEach(function(I){return Bn(I.vars.onRefresh)&&I.vars.onRefresh(I)}),Ti=It.isRefreshing=!1,Ua("refresh")},zd=0,Ih=1,Jl,ys=function(E){if(E===2||!Ti&&!Ie){It.isUpdating=!0,Jl&&Jl.update(0);var O=Pt.length,P=se(),I=P-Se>=50,G=O&&Pt[0].scroll();if(Ih=zd>G?-1:1,Ti||(zd=G),I&&(nt&&!ye&&P-nt>200&&(nt=0,Ua("scrollEnd")),je=Se,Se=P),Ih<0){for(S=O;S-- >0;)Pt[S]&&Pt[S].update(0,I);Ih=1}else for(S=0;S<O;S++)Pt[S]&&Pt[S].update(0,I);It.isUpdating=!1}$l=0},kd=[Ch,C,j,V,Ke+He,Ke+Te,Ke+Re,Ke+ke,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Dh=kd.concat([K,X,"boxSizing","max"+Qe,"max"+Tt,"position",Ke,De,De+Re,De+Te,De+He,De+ke]),Xb=function(E,O,P){Bo(P);var I=E._gsap;if(I.spacerIsNative)Bo(I.spacerState);else if(E._gsap.swappedIn){var G=O.parentNode;G&&(G.insertBefore(E,O),G.removeChild(O))}E._gsap.swappedIn=!1},Vd=function(E,O,P,I){if(!E._gsap.swappedIn){for(var G=kd.length,re=O.style,J=E.style,Ge;G--;)Ge=kd[G],re[Ge]=P[Ge];re.position=P.position==="absolute"?"absolute":"relative",P.display==="inline"&&(re.display="inline-block"),J[j]=J[V]="auto",re.flexBasis=P.flexBasis||"auto",re.overflow="visible",re.boxSizing="border-box",re[K]=zt(E,te)+pt,re[X]=zt(E,de)+pt,re[De]=J[Ke]=J[C]=J[Ch]="0",Bo(I),J[K]=J["max"+Qe]=P[K],J[X]=J["max"+Tt]=P[X],J[De]=P[De],E.parentNode!==O&&(E.parentNode.insertBefore(O,E),O.appendChild(E)),E._gsap.swappedIn=!0}},Yb=/([A-Z])/g,Bo=function(E){if(E){var O=E.t.style,P=E.length,I=0,G,re;for((E.t._gsap||le.core.getCache(E.t)).uncache=1;I<P;I+=2)re=E[I+1],G=E[I],re?O[G]=re:O[G]&&O.removeProperty(G.replace(Yb,"-$1").toLowerCase())}},Lh=function(E){for(var O=Dh.length,P=E.style,I=[],G=0;G<O;G++)I.push(Dh[G],P[Dh[G]]);return I.t=E,I},qb=function(E,O,P){for(var I=[],G=E.length,re=P?8:0,J;re<G;re+=2)J=E[re],I.push(J,J in O?O[J]:E[re+1]);return I.t=E.t,I},Nh={left:0,top:0},m_=function(E,O,P,I,G,re,J,Ge,mt,qt,Dt,lt,fe,ht){Bn(E)&&(E=E(Ge)),oi(E)&&E.substr(0,3)==="max"&&(E=lt+(E.charAt(4)==="="?Mr("0"+E.substr(3),P):0));var _n=fe?fe.time():0,nn,kn,cn;if(fe&&fe.seek(0),isNaN(E)||(E=+E),Da(E))fe&&(E=le.utils.mapRange(fe.scrollTrigger.start,fe.scrollTrigger.end,0,lt,E)),J&&Ph(J,P,I,!0);else{Bn(O)&&(O=O(Ge));var ni=(E||"0").split(" "),Ct,Sr,an,vt;cn=pe(O,Ge)||Q,Ct=$e(cn)||{},(!Ct||!Ct.left&&!Ct.top)&&Ut(cn).display==="none"&&(vt=cn.style.display,cn.style.display="block",Ct=$e(cn),vt?cn.style.display=vt:cn.style.removeProperty("display")),Sr=Mr(ni[0],Ct[I.d]),an=Mr(ni[1]||"0",P),E=Ct[I.p]-mt[I.p]-qt+Sr+G-an,J&&Ph(J,an,I,P-an<20||J._isStart&&an>20),P-=P-an}if(ht&&(Ge[ht]=E||-.001,E<0&&(E=0)),re){var Ei=E+P,Gi=re._isStart;nn="scroll"+I.d2,Ph(re,Ei,I,Gi&&Ei>20||!Gi&&(Dt?Math.max(Q[nn],tt[nn]):re.parentNode[nn])<=Ei+1),Dt&&(mt=$e(J),Dt&&(re.style[I.op.p]=mt[I.op.p]-I.op.m-re._offset+pt))}return fe&&cn&&(nn=$e(cn),fe.seek(lt),kn=$e(cn),fe._caScrollDist=nn[I.p]-kn[I.p],E=E/fe._caScrollDist*lt),fe&&fe.seek(_n),fe?E:Math.round(E)},Zb=/(webkit|moz|length|cssText|inset)/i,g_=function(E,O,P,I){if(E.parentNode!==O){var G=E.style,re,J;if(O===Q){E._stOrig=G.cssText,J=Ut(E);for(re in J)!+re&&!Zb.test(re)&&J[re]&&typeof G[re]=="string"&&re!=="0"&&(G[re]=J[re]);G.top=P,G.left=I}else G.cssText=E._stOrig;le.core.getCache(E).uncache=1,O.appendChild(E)}},__=function(E,O,P){var I=O,G=I;return function(re){var J=Math.round(E());return J!==I&&J!==G&&Math.abs(J-I)>3&&Math.abs(J-G)>3&&(re=J,P&&P()),G=I,I=Math.round(re),I}},Uh=function(E,O,P){var I={};I[O.p]="+="+P,le.set(E,I)},x_=function(E,O){var P=Je(E,O),I="_scroll"+O.p2,G=function re(J,Ge,mt,qt,Dt){var lt=re.tween,fe=Ge.onComplete,ht={};mt=mt||P();var _n=__(P,mt,function(){lt.kill(),re.tween=0});return Dt=qt&&Dt||0,qt=qt||J-mt,lt&&lt.kill(),Ge[I]=J,Ge.inherit=!1,Ge.modifiers=ht,ht[I]=function(){return _n(mt+qt*lt.ratio+Dt*lt.ratio*lt.ratio)},Ge.onUpdate=function(){b.cache++,re.tween&&ys()},Ge.onComplete=function(){re.tween=0,fe&&fe.call(lt)},lt=re.tween=le.to(E,Ge),lt};return E[I]=P,P.wheelHandler=function(){return G.tween&&G.tween.kill()&&(G.tween=0)},xt(E,"wheel",P.wheelHandler),It.isTouch&&xt(E,"touchmove",P.wheelHandler),G},It=(function(){function H(O,P){Be||H.register(le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ze(this),this.init(O,P)}var E=H.prototype;return E.init=function(P,I){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wt){this.update=this.refresh=this.kill=Vi;return}P=$t(oi(P)||Da(P)||P.nodeType?{trigger:P}:P,zn);var G=P,re=G.onUpdate,J=G.toggleClass,Ge=G.id,mt=G.onToggle,qt=G.onRefresh,Dt=G.scrub,lt=G.trigger,fe=G.pin,ht=G.pinSpacing,_n=G.invalidateOnRefresh,nn=G.anticipatePin,kn=G.onScrubComplete,cn=G.onSnapComplete,ni=G.once,Ct=G.snap,Sr=G.pinReparent,an=G.pinSpacer,vt=G.containerAnimation,Ei=G.fastScrollEnd,Gi=G.preventOverlaps,at=P.horizontal||P.containerAnimation&&P.horizontal!==!1?te:de,Zn=!Dt&&Dt!==0,_t=pe(P.scroller||Oe),bs=le.core.getCache(_t),Vn=Mi(_t),Ai=("pinType"in P?P.pinType:T(_t,"pinType")||Vn&&"fixed")==="fixed",Ci=[P.onEnter,P.onLeave,P.onEnterBack,P.onLeaveBack],Qt=Zn&&P.toggleActions.split(" "),Pn="markers"in P?P.markers:zn.markers,In=Vn?0:parseFloat(Ut(_t)["border"+at.p2+Qe])||0,Z=this,Gn=P.onRefreshInit&&function(){return P.onRefreshInit(Z)},Ba=Ah(_t,Vn,at),$s=Oo(_t,Vn),wr=0,Ms=0,li=0,Dn=Je(_t,at),Ri,ci,Ks,Pi,Ii,Gt,Sn,Hi,ar,ie,or,Ss,Js,xn,ws,js,za,$n,Qs,wn,Or,Tr,Ts,jl,Ln,Fh,Es,zo,ko,ea,ka,Lt,Va,Fr,Br,zr,Ga,Vo,As;if(Z._startClamp=Z._endClamp=!1,Z._dir=at,nn*=45,Z.scroller=_t,Z.scroll=vt?vt.time.bind(vt):Dn,Pi=Dn(),Z.vars=P,I=I||P.animation,"refreshPriority"in P&&(ne=1,P.refreshPriority===-9999&&(Jl=Z)),bs.tweenScroll=bs.tweenScroll||{top:x_(_t,de),left:x_(_t,te)},Z.tweenTo=Ri=bs.tweenScroll[at.p],Z.scrubDuration=function(Fe){Va=Da(Fe)&&Fe,Va?Lt?Lt.duration(Fe):Lt=le.to(I,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Va,paused:!0,onComplete:function(){return kn&&kn(Z)}}):(Lt&&Lt.progress(1).kill(),Lt=0)},I&&(I.vars.lazy=!1,I._initted&&!Z.isReverted||I.vars.immediateRender!==!1&&P.immediateRender!==!1&&I.duration()&&I.render(0,!0,!0),Z.animation=I.pause(),I.scrollTrigger=Z,Z.scrubDuration(Dt),ea=0,Ge||(Ge=I.vars.id)),Ct&&((!vs(Ct)||Ct.push)&&(Ct={snapTo:Ct}),"scrollBehavior"in Q.style&&le.set(Vn?[Q,tt]:_t,{scrollBehavior:"auto"}),b.forEach(function(Fe){return Bn(Fe)&&Fe.target===(Vn?it.scrollingElement||tt:_t)&&(Fe.smooth=!1)}),Ks=Bn(Ct.snapTo)?Ct.snapTo:Ct.snapTo==="labels"?Si(I):Ct.snapTo==="labelsDirectional"?wi(I):Ct.directional!==!1?function(Fe,Mt){return $r(Ct.snapTo)(Fe,se()-Ms<500?0:Mt.direction)}:le.utils.snap(Ct.snapTo),Fr=Ct.duration||{min:.1,max:2},Fr=vs(Fr)?N(Fr.min,Fr.max):N(Fr,Fr),Br=le.delayedCall(Ct.delay||Va/2||.1,function(){var Fe=Dn(),Mt=se()-Ms<500,ct=Ri.tween;if((Mt||Math.abs(Z.getVelocity())<10)&&!ct&&!ye&&wr!==Fe){var St=(Fe-Gt)/xn,Kn=I&&!Zn?I.totalProgress():St,Ft=Mt?0:(Kn-ka)/(se()-je)*1e3||0,Tn=le.utils.clamp(-St,1-St,qs(Ft/2)*Ft/.185),hi=St+(Ct.inertia===!1?0:Tn),vn,on,en=Ct,kr=en.onStart,hn=en.onInterrupt,lr=en.onComplete;if(vn=Ks(hi,Z),Da(vn)||(vn=hi),on=Math.max(0,Math.round(Gt+vn*xn)),Fe<=Sn&&Fe>=Gt&&on!==Fe){if(ct&&!ct._initted&&ct.data<=qs(on-Fe))return;Ct.inertia===!1&&(Tn=vn-St),Ri(on,{duration:Fr(qs(Math.max(qs(hi-Kn),qs(vn-Kn))*.185/Ft/.05||0)),ease:Ct.ease||"power3",data:qs(on-Fe),onInterrupt:function(){return Br.restart(!0)&&hn&&hn(Z)},onComplete:function(){Z.update(),wr=Dn(),I&&!Zn&&(Lt?Lt.resetTo("totalProgress",vn,I._tTime/I._tDur):I.progress(vn)),ea=ka=I&&!Zn?I.totalProgress():Z.progress,cn&&cn(Z),lr&&lr(Z)}},Fe,Tn*xn,on-Fe-Tn*xn),kr&&kr(Z,Ri.tween)}}else Z.isActive&&wr!==Fe&&Br.restart(!0)}).pause()),Ge&&(Od[Ge]=Z),lt=Z.trigger=pe(lt||fe!==!0&&fe),As=lt&&lt._gsap&&lt._gsap.stRevert,As&&(As=As(Z)),fe=fe===!0?lt:pe(fe),oi(J)&&(J={targets:lt,className:J}),fe&&(ht===!1||ht===Ke||(ht=!ht&&fe.parentNode&&fe.parentNode.style&&Ut(fe.parentNode).display==="flex"?!1:De),Z.pin=fe,ci=le.core.getCache(fe),ci.spacer?ws=ci.pinState:(an&&(an=pe(an),an&&!an.nodeType&&(an=an.current||an.nativeElement),ci.spacerIsNative=!!an,an&&(ci.spacerState=Lh(an))),ci.spacer=$n=an||it.createElement("div"),$n.classList.add("pin-spacer"),Ge&&$n.classList.add("pin-spacer-"+Ge),ci.pinState=ws=Lh(fe)),P.force3D!==!1&&le.set(fe,{force3D:!0}),Z.spacer=$n=ci.spacer,ko=Ut(fe),jl=ko[ht+at.os2],wn=le.getProperty(fe),Or=le.quickSetter(fe,at.a,pt),Vd(fe,$n,ko),za=Lh(fe)),Pn){Ss=vs(Pn)?$t(Pn,qn):qn,ie=Rh("scroller-start",Ge,_t,at,Ss,0),or=Rh("scroller-end",Ge,_t,at,Ss,0,ie),Qs=ie["offset"+at.op.d2];var Ql=pe(T(_t,"content")||_t);Hi=this.markerStart=Rh("start",Ge,Ql,at,Ss,Qs,0,vt),ar=this.markerEnd=Rh("end",Ge,Ql,at,Ss,Qs,0,vt),vt&&(Vo=le.quickSetter([Hi,ar],at.a,pt)),!Ai&&!(w.length&&T(_t,"fixedMarkers")===!0)&&(sn(Vn?Q:_t),le.set([ie,or],{force3D:!0}),Fh=le.quickSetter(ie,at.a,pt),zo=le.quickSetter(or,at.a,pt))}if(vt){var Et=vt.vars.onUpdate,ft=vt.vars.onUpdateParams;vt.eventCallback("onUpdate",function(){Z.update(0,0,1),Et&&Et.apply(vt,ft||[])})}if(Z.previous=function(){return Pt[Pt.indexOf(Z)-1]},Z.next=function(){return Pt[Pt.indexOf(Z)+1]},Z.revert=function(Fe,Mt){if(!Mt)return Z.kill(!0);var ct=Fe!==!1||!Z.enabled,St=Xe;ct!==Z.isReverted&&(ct&&(zr=Math.max(Dn(),Z.scroll.rec||0),li=Z.progress,Ga=I&&I.progress()),Hi&&[Hi,ar,ie,or].forEach(function(Kn){return Kn.style.display=ct?"none":"block"}),ct&&(Xe=Z,Z.update(ct)),fe&&(!Sr||!Z.isActive)&&(ct?Xb(fe,$n,ws):Vd(fe,$n,Ut(fe),Ln)),ct||Z.update(ct),Xe=St,Z.isReverted=ct)},Z.refresh=function(Fe,Mt,ct,St){if(!((Xe||!Z.enabled)&&!Mt)){if(fe&&Fe&&nt){xt(H,"scrollEnd",l_);return}!Ti&&Gn&&Gn(Z),Xe=Z,Ri.tween&&!ct&&(Ri.tween.kill(),Ri.tween=0),Lt&&Lt.pause(),_n&&I&&(I.revert({kill:!1}).invalidate(),I.getChildren?I.getChildren(!0,!0,!1).forEach(function(ta){return ta.vars.immediateRender&&ta.render(0,!0,!0)}):I.vars.immediateRender&&I.render(0,!0,!0)),Z.isReverted||Z.revert(!0,!0),Z._subPinOffset=!1;var Kn=Ba(),Ft=$s(),Tn=vt?vt.duration():rr(_t,at),hi=xn<=.01||!xn,vn=0,on=St||0,en=vs(ct)?ct.end:P.end,kr=P.endTrigger||lt,hn=vs(ct)?ct.start:P.start||(P.start===0||!lt?0:fe?"0 0":"0 100%"),lr=Z.pinnedContainer=P.pinnedContainer&&pe(P.pinnedContainer,Z),Jr=lt&&Math.max(0,Pt.indexOf(Z))||0,ii=Jr,ri,ui,Ha,Bh,fi,Hn,jr,Hd,S_,ec,Qr,tc,zh;for(Pn&&vs(ct)&&(tc=le.getProperty(ie,at.p),zh=le.getProperty(or,at.p));ii-- >0;)Hn=Pt[ii],Hn.end||Hn.refresh(0,1)||(Xe=Z),jr=Hn.pin,jr&&(jr===lt||jr===fe||jr===lr)&&!Hn.isReverted&&(ec||(ec=[]),ec.unshift(Hn),Hn.revert(!0,!0)),Hn!==Pt[ii]&&(Jr--,ii--);for(Bn(hn)&&(hn=hn(Z)),hn=Xt(hn,"start",Z),Gt=m_(hn,lt,Kn,at,Dn(),Hi,ie,Z,Ft,In,Ai,Tn,vt,Z._startClamp&&"_startClamp")||(fe?-.001:0),Bn(en)&&(en=en(Z)),oi(en)&&!en.indexOf("+=")&&(~en.indexOf(" ")?en=(oi(hn)?hn.split(" ")[0]:"")+en:(vn=Mr(en.substr(2),Kn),en=oi(hn)?hn:(vt?le.utils.mapRange(0,vt.duration(),vt.scrollTrigger.start,vt.scrollTrigger.end,Gt):Gt)+vn,kr=lt)),en=Xt(en,"end",Z),Sn=Math.max(Gt,m_(en||(kr?"100% 0":Tn),kr,Kn,at,Dn()+vn,ar,or,Z,Ft,In,Ai,Tn,vt,Z._endClamp&&"_endClamp"))||-.001,vn=0,ii=Jr;ii--;)Hn=Pt[ii]||{},jr=Hn.pin,jr&&Hn.start-Hn._pinPush<=Gt&&!vt&&Hn.end>0&&(ri=Hn.end-(Z._startClamp?Math.max(0,Hn.start):Hn.start),(jr===lt&&Hn.start-Hn._pinPush<Gt||jr===lr)&&isNaN(hn)&&(vn+=ri*(1-Hn.progress)),jr===fe&&(on+=ri));if(Gt+=vn,Sn+=vn,Z._startClamp&&(Z._startClamp+=vn),Z._endClamp&&!Ti&&(Z._endClamp=Sn||-.001,Sn=Math.min(Sn,rr(_t,at))),xn=Sn-Gt||(Gt-=.01)&&.001,hi&&(li=le.utils.clamp(0,1,le.utils.normalize(Gt,Sn,zr))),Z._pinPush=on,Hi&&vn&&(ri={},ri[at.a]="+="+vn,lr&&(ri[at.p]="-="+Dn()),le.set([Hi,ar],ri)),fe&&!(xe&&Z.end>=rr(_t,at)))ri=Ut(fe),Bh=at===de,Ha=Dn(),Tr=parseFloat(wn(at.a))+on,!Tn&&Sn>1&&(Qr=(Vn?it.scrollingElement||tt:_t).style,Qr={style:Qr,value:Qr["overflow"+at.a.toUpperCase()]},Vn&&Ut(Q)["overflow"+at.a.toUpperCase()]!=="scroll"&&(Qr.style["overflow"+at.a.toUpperCase()]="scroll")),Vd(fe,$n,ri),za=Lh(fe),ui=$e(fe,!0),Hd=Ai&&Je(_t,Bh?te:de)(),ht?(Ln=[ht+at.os2,xn+on+pt],Ln.t=$n,ii=ht===De?zt(fe,at)+xn+on:0,ii&&(Ln.push(at.d,ii+pt),$n.style.flexBasis!=="auto"&&($n.style.flexBasis=ii+pt)),Bo(Ln),lr&&Pt.forEach(function(ta){ta.pin===lr&&ta.vars.pinSpacing!==!1&&(ta._subPinOffset=!0)}),Ai&&Dn(zr)):(ii=zt(fe,at),ii&&$n.style.flexBasis!=="auto"&&($n.style.flexBasis=ii+pt)),Ai&&(fi={top:ui.top+(Bh?Ha-Gt:Hd)+pt,left:ui.left+(Bh?Hd:Ha-Gt)+pt,boxSizing:"border-box",position:"fixed"},fi[K]=fi["max"+Qe]=Math.ceil(ui.width)+pt,fi[X]=fi["max"+Tt]=Math.ceil(ui.height)+pt,fi[Ke]=fi[Ke+Re]=fi[Ke+Te]=fi[Ke+He]=fi[Ke+ke]="0",fi[De]=ri[De],fi[De+Re]=ri[De+Re],fi[De+Te]=ri[De+Te],fi[De+He]=ri[De+He],fi[De+ke]=ri[De+ke],js=qb(ws,fi,Sr),Ti&&Dn(0)),I?(S_=I._initted,qe(1),I.render(I.duration(),!0,!0),Ts=wn(at.a)-Tr+xn+on,Es=Math.abs(xn-Ts)>1,Ai&&Es&&js.splice(js.length-2,2),I.render(0,!0,!0),S_||I.invalidate(!0),I.parent||I.totalTime(I.totalTime()),qe(0)):Ts=xn,Qr&&(Qr.value?Qr.style["overflow"+at.a.toUpperCase()]=Qr.value:Qr.style.removeProperty("overflow-"+at.a));else if(lt&&Dn()&&!vt)for(ui=lt.parentNode;ui&&ui!==Q;)ui._pinOffset&&(Gt-=ui._pinOffset,Sn-=ui._pinOffset),ui=ui.parentNode;ec&&ec.forEach(function(ta){return ta.revert(!1,!0)}),Z.start=Gt,Z.end=Sn,Pi=Ii=Ti?zr:Dn(),!vt&&!Ti&&(Pi<zr&&Dn(zr),Z.scroll.rec=0),Z.revert(!1,!0),Ms=se(),Br&&(wr=-1,Br.restart(!0)),Xe=0,I&&Zn&&(I._initted||Ga)&&I.progress()!==Ga&&I.progress(Ga||0,!0).render(I.time(),!0,!0),(hi||li!==Z.progress||vt||_n||I&&!I._initted)&&(I&&!Zn&&(I._initted||li||I.vars.immediateRender!==!1)&&I.totalProgress(vt&&Gt<-.001&&!li?le.utils.normalize(Gt,Sn,0):li,!0),Z.progress=hi||(Pi-Gt)/xn===li?0:li),fe&&ht&&($n._pinOffset=Math.round(Z.progress*Ts)),Lt&&Lt.invalidate(),isNaN(tc)||(tc-=le.getProperty(ie,at.p),zh-=le.getProperty(or,at.p),Uh(ie,at,tc),Uh(Hi,at,tc-(St||0)),Uh(or,at,zh),Uh(ar,at,zh-(St||0))),hi&&!Ti&&Z.update(),qt&&!Ti&&!Js&&(Js=!0,qt(Z),Js=!1)}},Z.getVelocity=function(){return(Dn()-Ii)/(se()-je)*1e3||0},Z.endAnimation=function(){La(Z.callbackAnimation),I&&(Lt?Lt.progress(1):I.paused()?Zn||La(I,Z.direction<0,1):La(I,I.reversed()))},Z.labelToScroll=function(Fe){return I&&I.labels&&(Gt||Z.refresh()||Gt)+I.labels[Fe]/I.duration()*xn||0},Z.getTrailing=function(Fe){var Mt=Pt.indexOf(Z),ct=Z.direction>0?Pt.slice(0,Mt).reverse():Pt.slice(Mt+1);return(oi(Fe)?ct.filter(function(St){return St.vars.preventOverlaps===Fe}):ct).filter(function(St){return Z.direction>0?St.end<=Gt:St.start>=Sn})},Z.update=function(Fe,Mt,ct){if(!(vt&&!ct&&!Fe)){var St=Ti===!0?zr:Z.scroll(),Kn=Fe?0:(St-Gt)/xn,Ft=Kn<0?0:Kn>1?1:Kn||0,Tn=Z.progress,hi,vn,on,en,kr,hn,lr,Jr;if(Mt&&(Ii=Pi,Pi=vt?Dn():St,Ct&&(ka=ea,ea=I&&!Zn?I.totalProgress():Ft)),nn&&fe&&!Xe&&!ge&&nt&&(!Ft&&Gt<St+(St-Ii)/(se()-je)*nn?Ft=1e-4:Ft===1&&Sn>St+(St-Ii)/(se()-je)*nn&&(Ft=.9999)),Ft!==Tn&&Z.enabled){if(hi=Z.isActive=!!Ft&&Ft<1,vn=!!Tn&&Tn<1,hn=hi!==vn,kr=hn||!!Ft!=!!Tn,Z.direction=Ft>Tn?1:-1,Z.progress=Ft,kr&&!Xe&&(on=Ft&&!Tn?0:Ft===1?1:Tn===1?2:3,Zn&&(en=!hn&&Qt[on+1]!=="none"&&Qt[on+1]||Qt[on],Jr=I&&(en==="complete"||en==="reset"||en in I))),Gi&&(hn||Jr)&&(Jr||Dt||!I)&&(Bn(Gi)?Gi(Z):Z.getTrailing(Gi).forEach(function(Ha){return Ha.endAnimation()})),Zn||(Lt&&!Xe&&!ge?(Lt._dp._time-Lt._start!==Lt._time&&Lt.render(Lt._dp._time-Lt._start),Lt.resetTo?Lt.resetTo("totalProgress",Ft,I._tTime/I._tDur):(Lt.vars.totalProgress=Ft,Lt.invalidate().restart())):I&&I.totalProgress(Ft,!!(Xe&&(Ms||Fe)))),fe){if(Fe&&ht&&($n.style[ht+at.os2]=jl),!Ai)Or(Ia(Tr+Ts*Ft));else if(kr){if(lr=!Fe&&Ft>Tn&&Sn+1>St&&St+1>=rr(_t,at),Sr)if(!Fe&&(hi||lr)){var ii=$e(fe,!0),ri=St-Gt;g_(fe,Q,ii.top+(at===de?ri:0)+pt,ii.left+(at===de?0:ri)+pt)}else g_(fe,$n);Bo(hi||lr?js:za),Es&&Ft<1&&hi||Or(Tr+(Ft===1&&!lr?Ts:0))}}Ct&&!Ri.tween&&!Xe&&!ge&&Br.restart(!0),J&&(hn||ni&&Ft&&(Ft<1||!ze))&&Ee(J.targets).forEach(function(Ha){return Ha.classList[hi||ni?"add":"remove"](J.className)}),re&&!Zn&&!Fe&&re(Z),kr&&!Xe?(Zn&&(Jr&&(en==="complete"?I.pause().totalProgress(1):en==="reset"?I.restart(!0).pause():en==="restart"?I.restart(!0):I[en]()),re&&re(Z)),(hn||!ze)&&(mt&&hn&&Zl(Z,mt),Ci[on]&&Zl(Z,Ci[on]),ni&&(Ft===1?Z.kill(!1,1):Ci[on]=0),hn||(on=Ft===1?1:3,Ci[on]&&Zl(Z,Ci[on]))),Ei&&!hi&&Math.abs(Z.getVelocity())>(Da(Ei)?Ei:2500)&&(La(Z.callbackAnimation),Lt?Lt.progress(1):La(I,en==="reverse"?1:!Ft,1))):Zn&&re&&!Xe&&re(Z)}if(zo){var ui=vt?St/vt.duration()*(vt._caScrollDist||0):St;Fh(ui+(ie._isFlipped?1:0)),zo(ui)}Vo&&Vo(-St/vt.duration()*(vt._caScrollDist||0))}},Z.enable=function(Fe,Mt){Z.enabled||(Z.enabled=!0,xt(_t,"resize",Kl),Vn||xt(_t,"scroll",Fo),Gn&&xt(H,"refreshInit",Gn),Fe!==!1&&(Z.progress=li=0,Pi=Ii=wr=Dn()),Mt!==!1&&Z.refresh())},Z.getTween=function(Fe){return Fe&&Ri?Ri.tween:Lt},Z.setPositions=function(Fe,Mt,ct,St){if(vt){var Kn=vt.scrollTrigger,Ft=vt.duration(),Tn=Kn.end-Kn.start;Fe=Kn.start+Tn*Fe/Ft,Mt=Kn.start+Tn*Mt/Ft}Z.refresh(!1,!1,{start:ir(Fe,ct&&!!Z._startClamp),end:ir(Mt,ct&&!!Z._endClamp)},St),Z.update()},Z.adjustPinSpacing=function(Fe){if(Ln&&Fe){var Mt=Ln.indexOf(at.d)+1;Ln[Mt]=parseFloat(Ln[Mt])+Fe+pt,Ln[1]=parseFloat(Ln[1])+Fe+pt,Bo(Ln)}},Z.disable=function(Fe,Mt){if(Fe!==!1&&Z.revert(!0,!0),Z.enabled&&(Z.enabled=Z.isActive=!1,Mt||Lt&&Lt.pause(),zr=0,ci&&(ci.uncache=1),Gn&&Vt(H,"refreshInit",Gn),Br&&(Br.pause(),Ri.tween&&Ri.tween.kill()&&(Ri.tween=0)),!Vn)){for(var ct=Pt.length;ct--;)if(Pt[ct].scroller===_t&&Pt[ct]!==Z)return;Vt(_t,"resize",Kl),Vn||Vt(_t,"scroll",Fo)}},Z.kill=function(Fe,Mt){Z.disable(Fe,Mt),Lt&&!Mt&&Lt.kill(),Ge&&delete Od[Ge];var ct=Pt.indexOf(Z);ct>=0&&Pt.splice(ct,1),ct===S&&Ih>0&&S--,ct=0,Pt.forEach(function(St){return St.scroller===Z.scroller&&(ct=1)}),ct||Ti||(Z.scroll.rec=0),I&&(I.scrollTrigger=null,Fe&&I.revert({kill:!1}),Mt||I.kill()),Hi&&[Hi,ar,ie,or].forEach(function(St){return St.parentNode&&St.parentNode.removeChild(St)}),Jl===Z&&(Jl=0),fe&&(ci&&(ci.uncache=1),ct=0,Pt.forEach(function(St){return St.pin===fe&&ct++}),ct||(ci.spacer=0)),P.onKill&&P.onKill(Z)},Pt.push(Z),Z.enable(!1,!1),As&&As(Z),I&&I.add&&!xn){var Zt=Z.update;Z.update=function(){Z.update=Zt,b.cache++,Gt||Sn||Z.refresh()},le.delayedCall(.01,Z.update),xn=.01,Gt=Sn=0}else Z.refresh();fe&&Wb()},H.register=function(P){return Be||(le=P||Yl(),Xl()&&window.document&&H.enable(),Be=Wt),Be},H.defaults=function(P){if(P)for(var I in P)zn[I]=P[I];return zn},H.disable=function(P,I){Wt=0,Pt.forEach(function(re){return re[I?"kill":"disable"](P)}),Vt(Oe,"wheel",Fo),Vt(it,"scroll",Fo),clearInterval(Ue),Vt(it,"touchcancel",Vi),Vt(Q,"touchstart",Vi),Kr(Vt,it,"pointerdown,touchstart,mousedown",Eh),Kr(Vt,it,"pointerup,touchend,mouseup",Wl),he.kill(),xs(Vt);for(var G=0;G<b.length;G+=3)ti(Vt,b[G],b[G+1]),ti(Vt,b[G],b[G+2])},H.enable=function(){if(Oe=window,it=document,tt=it.documentElement,Q=it.body,le&&(Ee=le.utils.toArray,N=le.utils.clamp,Ze=le.core.context||Vi,qe=le.core.suppressOverwrites||Vi,we=Oe.history.scrollRestoration||"auto",zd=Oe.pageYOffset||0,le.core.globals("ScrollTrigger",H),Q)){Wt=1,gt=document.createElement("div"),gt.style.height="100vh",gt.style.position="absolute",d_(),Ur(),ve.register(le),H.isTouch=ve.isTouch,Ve=ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),st=ve.isTouch===1,xt(Oe,"wheel",Fo),_e=[Oe,it,tt,Q],le.matchMedia?(H.matchMedia=function(mt){var qt=le.matchMedia(),Dt;for(Dt in mt)qt.add(Dt,mt[Dt]);return qt},le.addEventListener("matchMediaInit",function(){h_(),Bd()}),le.addEventListener("matchMediaRevert",function(){return c_()}),le.addEventListener("matchMedia",function(){Fa(0,1),Ua("matchMedia")}),le.matchMedia().add("(orientation: portrait)",function(){return Fd(),Fd})):console.warn("Requires GSAP 3.11.0 or later"),Fd(),xt(it,"scroll",Fo);var P=Q.hasAttribute("style"),I=Q.style,G=I.borderTopStyle,re=le.core.Animation.prototype,J,Ge;for(re.revert||Object.defineProperty(re,"revert",{value:function(){return this.time(-.01,!0)}}),I.borderTopStyle="solid",J=$e(Q),de.m=Math.round(J.top+de.sc())||0,te.m=Math.round(J.left+te.sc())||0,G?I.borderTopStyle=G:I.removeProperty("border-top-style"),P||(Q.setAttribute("style",""),Q.removeAttribute("style")),Ue=setInterval(o_,250),le.delayedCall(.5,function(){return ge=0}),xt(it,"touchcancel",Vi),xt(Q,"touchstart",Vi),Kr(xt,it,"pointerdown,touchstart,mousedown",Eh),Kr(xt,it,"pointerup,touchend,mouseup",Wl),L=le.utils.checkPrefix("transform"),Dh.push(L),Be=se(),he=le.delayedCall(.2,Fa).pause(),ce=[it,"visibilitychange",function(){var mt=Oe.innerWidth,qt=Oe.innerHeight;it.hidden?(k=mt,ee=qt):(k!==mt||ee!==qt)&&Kl()},it,"DOMContentLoaded",Fa,Oe,"load",Fa,Oe,"resize",Kl],xs(xt),Pt.forEach(function(mt){return mt.enable(0,1)}),Ge=0;Ge<b.length;Ge+=3)ti(Vt,b[Ge],b[Ge+1]),ti(Vt,b[Ge],b[Ge+2])}},H.config=function(P){"limitCallbacks"in P&&(ze=!!P.limitCallbacks);var I=P.syncInterval;I&&clearInterval(Ue)||(Ue=I)&&setInterval(o_,I),"ignoreMobileResize"in P&&(st=H.isTouch===1&&P.ignoreMobileResize),"autoRefreshEvents"in P&&(xs(Vt)||xs(xt,P.autoRefreshEvents||"none"),Me=(P.autoRefreshEvents+"").indexOf("resize")===-1)},H.scrollerProxy=function(P,I){var G=pe(P),re=b.indexOf(G),J=Mi(G);~re&&b.splice(re,J?6:2),I&&(J?w.unshift(Oe,I,Q,I,tt,I):w.unshift(G,I))},H.clearMatchMedia=function(P){Pt.forEach(function(I){return I._ctx&&I._ctx.query===P&&I._ctx.kill(!0,!0)})},H.isInViewport=function(P,I,G){var re=(oi(P)?pe(P):P).getBoundingClientRect(),J=re[G?K:X]*I||0;return G?re.right-J>0&&re.left+J<Oe.innerWidth:re.bottom-J>0&&re.top+J<Oe.innerHeight},H.positionInViewport=function(P,I,G){oi(P)&&(P=pe(P));var re=P.getBoundingClientRect(),J=re[G?K:X],Ge=I==null?J/2:I in Zs?Zs[I]*J:~I.indexOf("%")?parseFloat(I)*J/100:parseFloat(I)||0;return G?(re.left+Ge)/Oe.innerWidth:(re.top+Ge)/Oe.innerHeight},H.killAll=function(P){if(Pt.slice(0).forEach(function(G){return G.vars.id!=="ScrollSmoother"&&G.kill()}),P!==!0){var I=Na.killAll||[];Na={},I.forEach(function(G){return G()})}},H})();It.version="3.14.2",It.saveStyles=function(H){return H?Ee(H).forEach(function(E){if(E&&E.style){var O=sr.indexOf(E);O>=0&&sr.splice(O,5),sr.push(E,E.style.cssText,E.getBBox&&E.getAttribute("transform"),le.core.getCache(E),Ze())}}):sr},It.revert=function(H,E){return Bd(!H,E)},It.create=function(H,E){return new It(H,E)},It.refresh=function(H){return H?Kl(!0):(Be||It.register())&&Fa(!0)},It.update=function(H){return++b.cache&&ys(H===!0?2:0)},It.clearScrollMemory=u_,It.maxScroll=function(H,E){return rr(H,E?te:de)},It.getScrollFunc=function(H,E){return Je(pe(H),E?te:de)},It.getById=function(H){return Od[H]},It.getAll=function(){return Pt.filter(function(H){return H.vars.id!=="ScrollSmoother"})},It.isScrolling=function(){return!!nt},It.snapDirectional=$r,It.addEventListener=function(H,E){var O=Na[H]||(Na[H]=[]);~O.indexOf(E)||O.push(E)},It.removeEventListener=function(H,E){var O=Na[H],P=O&&O.indexOf(E);P>=0&&O.splice(P,1)},It.batch=function(H,E){var O=[],P={},I=E.interval||.016,G=E.batchMax||1e9,re=function(mt,qt){var Dt=[],lt=[],fe=le.delayedCall(I,function(){qt(Dt,lt),Dt=[],lt=[]}).pause();return function(ht){Dt.length||fe.restart(!0),Dt.push(ht.trigger),lt.push(ht),G<=Dt.length&&fe.progress(1)}},J;for(J in E)P[J]=J.substr(0,2)==="on"&&Bn(E[J])&&J!=="onRefreshInit"?re(J,E[J]):E[J];return Bn(G)&&(G=G(),xt(It,"refresh",function(){return G=E.batchMax()})),Ee(H).forEach(function(Ge){var mt={};for(J in P)mt[J]=P[J];mt.trigger=Ge,O.push(It.create(mt))}),O};var v_=function(E,O,P,I){return O>I?E(I):O<0&&E(0),P>I?(I-O)/(P-O):P<0?O/(O-P):1},Gd=function H(E,O){O===!0?E.style.removeProperty("touch-action"):E.style.touchAction=O===!0?"auto":O?"pan-"+O+(ve.isTouch?" pinch-zoom":""):"none",E===tt&&H(Q,O)},Oh={auto:1,scroll:1},$b=function(E){var O=E.event,P=E.target,I=E.axis,G=(O.changedTouches?O.changedTouches[0]:O).target,re=G._gsap||le.core.getCache(G),J=se(),Ge;if(!re._isScrollT||J-re._isScrollT>2e3){for(;G&&G!==Q&&(G.scrollHeight<=G.clientHeight&&G.scrollWidth<=G.clientWidth||!(Oh[(Ge=Ut(G)).overflowY]||Oh[Ge.overflowX]));)G=G.parentNode;re._isScroll=G&&G!==P&&!Mi(G)&&(Oh[(Ge=Ut(G)).overflowY]||Oh[Ge.overflowX]),re._isScrollT=J}(re._isScroll||I==="x")&&(O.stopPropagation(),O._gsapAllow=!0)},y_=function(E,O,P,I){return ve.create({target:E,capture:!0,debounce:!1,lockAxis:!0,type:O,onWheel:I=I&&$b,onPress:I,onDrag:I,onScroll:I,onEnable:function(){return P&&xt(it,ve.eventTypes[0],M_,!1,!0)},onDisable:function(){return Vt(it,ve.eventTypes[0],M_,!0)}})},Kb=/(input|label|select|textarea)/i,b_,M_=function(E){var O=Kb.test(E.target.tagName);(O||b_)&&(E._gsapAllow=!0,b_=O)},Jb=function(E){vs(E)||(E={}),E.preventDefault=E.isNormalizer=E.allowClicks=!0,E.type||(E.type="wheel,touch"),E.debounce=!!E.debounce,E.id=E.id||"normalizer";var O=E,P=O.normalizeScrollX,I=O.momentum,G=O.allowNestedScroll,re=O.onRelease,J,Ge,mt=pe(E.target)||tt,qt=le.core.globals().ScrollSmoother,Dt=qt&&qt.get(),lt=Ve&&(E.content&&pe(E.content)||Dt&&E.content!==!1&&!Dt.smooth()&&Dt.content()),fe=Je(mt,de),ht=Je(mt,te),_n=1,nn=(ve.isTouch&&Oe.visualViewport?Oe.visualViewport.scale*Oe.visualViewport.width:Oe.outerWidth)/Oe.innerWidth,kn=0,cn=Bn(I)?function(){return I(J)}:function(){return I||2.8},ni,Ct,Sr=y_(mt,E.type,!0,G),an=function(){return Ct=!1},vt=Vi,Ei=Vi,Gi=function(){Ge=rr(mt,de),Ei=N(Ve?1:0,Ge),P&&(vt=N(0,rr(mt,te))),ni=Oa},at=function(){lt._gsap.y=Ia(parseFloat(lt._gsap.y)+fe.offset)+"px",lt.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(lt._gsap.y)+", 0, 1)",fe.offset=fe.cacheID=0},Zn=function(){if(Ct){requestAnimationFrame(an);var Pn=Ia(J.deltaY/2),In=Ei(fe.v-Pn);if(lt&&In!==fe.v+fe.offset){fe.offset=In-fe.v;var Z=Ia((parseFloat(lt&&lt._gsap.y)||0)-fe.offset);lt.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Z+", 0, 1)",lt._gsap.y=Z+"px",fe.cacheID=b.cache,ys()}return!0}fe.offset&&at(),Ct=!0},_t,bs,Vn,Ai,Ci=function(){Gi(),_t.isActive()&&_t.vars.scrollY>Ge&&(fe()>Ge?_t.progress(1)&&fe(Ge):_t.resetTo("scrollY",Ge))};return lt&&le.set(lt,{y:"+=0"}),E.ignoreCheck=function(Qt){return Ve&&Qt.type==="touchmove"&&Zn()||_n>1.05&&Qt.type!=="touchstart"||J.isGesturing||Qt.touches&&Qt.touches.length>1},E.onPress=function(){Ct=!1;var Qt=_n;_n=Ia((Oe.visualViewport&&Oe.visualViewport.scale||1)/nn),_t.pause(),Qt!==_n&&Gd(mt,_n>1.01?!0:P?!1:"x"),bs=ht(),Vn=fe(),Gi(),ni=Oa},E.onRelease=E.onGestureStart=function(Qt,Pn){if(fe.offset&&at(),!Pn)Ai.restart(!0);else{b.cache++;var In=cn(),Z,Gn;P&&(Z=ht(),Gn=Z+In*.05*-Qt.velocityX/.227,In*=v_(ht,Z,Gn,rr(mt,te)),_t.vars.scrollX=vt(Gn)),Z=fe(),Gn=Z+In*.05*-Qt.velocityY/.227,In*=v_(fe,Z,Gn,rr(mt,de)),_t.vars.scrollY=Ei(Gn),_t.invalidate().duration(In).play(.01),(Ve&&_t.vars.scrollY>=Ge||Z>=Ge-1)&&le.to({},{onUpdate:Ci,duration:In})}re&&re(Qt)},E.onWheel=function(){_t._ts&&_t.pause(),se()-kn>1e3&&(ni=0,kn=se())},E.onChange=function(Qt,Pn,In,Z,Gn){if(Oa!==ni&&Gi(),Pn&&P&&ht(vt(Z[2]===Pn?bs+(Qt.startX-Qt.x):ht()+Pn-Z[1])),In){fe.offset&&at();var Ba=Gn[2]===In,$s=Ba?Vn+Qt.startY-Qt.y:fe()+In-Gn[1],wr=Ei($s);Ba&&$s!==wr&&(Vn+=wr-$s),fe(wr)}(In||Pn)&&ys()},E.onEnable=function(){Gd(mt,P?!1:"x"),It.addEventListener("refresh",Ci),xt(Oe,"resize",Ci),fe.smooth&&(fe.target.style.scrollBehavior="auto",fe.smooth=ht.smooth=!1),Sr.enable()},E.onDisable=function(){Gd(mt,!0),Vt(Oe,"resize",Ci),It.removeEventListener("refresh",Ci),Sr.kill()},E.lockAxis=E.lockAxis!==!1,J=new ve(E),J.iOS=Ve,Ve&&!fe()&&fe(1),Ve&&le.ticker.add(Vi),Ai=J._dc,_t=le.to(J,{ease:"power4",paused:!0,inherit:!1,scrollX:P?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:__(fe,fe(),function(){return _t.pause()})},onUpdate:ys,onComplete:Ai.vars.onComplete}),J};It.sort=function(H){if(Bn(H))return Pt.sort(H);var E=Oe.pageYOffset||0;return It.getAll().forEach(function(O){return O._sortY=O.trigger?E+O.trigger.getBoundingClientRect().top:O.start+Oe.innerHeight}),Pt.sort(H||function(O,P){return(O.vars.refreshPriority||0)*-1e6+(O.vars.containerAnimation?1e6:O._sortY)-((P.vars.containerAnimation?1e6:P._sortY)+(P.vars.refreshPriority||0)*-1e6)})},It.observe=function(H){return new ve(H)},It.normalizeScroll=function(H){if(typeof H>"u")return Pe;if(H===!0&&Pe)return Pe.enable();if(H===!1){Pe&&Pe.kill(),Pe=H;return}var E=H instanceof ve?H:Jb(H);return Pe&&Pe.target===E.target&&Pe.kill(),Mi(E.target)&&(Pe=E),E},It.core={_getVelocityProp:rt,_inputObserver:y_,_scrollers:b,_proxies:w,bridge:{ss:function(){nt||Ua("scrollStart"),nt=se()},ref:function(){return Xe}}},Yl()&&le.registerPlugin(It),t.ScrollTrigger=It,t.default=It,typeof window>"u"||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete window.default}))})(bc,bc.exports)),bc.exports}var N3=m3();export{Os as $,Oi as A,On as B,We as C,ss as D,QS as E,I3 as F,pa as G,ds as H,py as I,Eo as J,Fi as K,rn as L,Sg as M,To as N,L3 as O,Vl as P,Kf as Q,VM as R,ut as S,Mn as T,og as U,D as V,_r as W,Mh as X,E3 as Y,Bc as Z,mw as _,Mg as a,vr as a0,vi as a1,Yr as a2,Rn as b,Ys as c,ot as d,ae as e,Fn as f,Rl as g,wt as h,Yt as i,P3 as j,xm as k,d3 as l,N3 as m,Og as n,C3 as o,S3 as p,M3 as q,ZI as r,mh as s,w3 as t,Rd as u,R3 as v,T3 as w,Dr as x,Gl as y,pw as z};
