var e=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;import{i as l,g as n,C as o,a as i,r as c,o as u,u as p,b as d,c as m,d as g,p as b,e as x,f as v,h,j as f,T as w,k as y,t as E,l as A,F as k,w as N,E as I,m as S,n as C,v as _,q as j,s as q,x as R,y as T,z as O,A as M,B as L,D,G as U,H as G,I as P,J as V,K as z,L as F,M as H,N as B,O as J}from"./vendor.9e3110ac.js";const $=l({apiKey:"AIzaSyAk9nBuffr2FCAxaCWI-hR2UbZBr-q3pLo",authDomain:"oliprint.firebaseapp.com",projectId:"oliprint",storageBucket:"oliprint.appspot.com",messagingSenderId:"363023813979",appId:"1:363023813979:web:3a6f596c6f08337e405e7e"}),X=n($),Y=o($),K=i($),Z=c(X.currentUser);u(X,(e=>{console.log("User state change. current user is:",e),Z.value=e}));const W=()=>({user:Z});const Q={class:"grid grid-cols-3 lg:grid-cols-8 gap-2 lg:gap-3 headercolor"},ee=g("img",{alt:"login",src:"/assets/account_circle.1ffb0b96.svg",class:"lg:w-14 lg:h-14 mx-auto lg:mx-0 cursor-pointer logincolor"},null,-1),ae=g("span",{class:"text-white lg:hidden"},"CUENTA",-1),se={setup(e){const a=p(),{user:s}=W(),t=async()=>{s?a.push("Favorites"):a.push("Login")};return(e,a)=>(d(),m("div",Q,[g("img",{alt:"oliprint logo",src:"/assets/oliprint.3433cbd3.svg",class:"\r\n        lg:row-span-1\r\n        lg:col-span-5\r\n        row-span-1\r\n        col-span-3\r\n        lg:w-80\r\n        lg:h-16\r\n        w-4/5\r\n        mx-auto\r\n        lg:mx-0\r\n        cursor-pointer\r\n      ",onClick:a[1]||(a[1]=a=>e.$router.push("/"))}),g("button",{onClick:a[2]||(a[2]=a=>e.$router.push("Galeria")),class:"botonHeader"}," GALERIA "),g("button",{onClick:a[3]||(a[3]=a=>e.$router.push("Cotizar")),class:"botonHeader"}," COTIZAR "),g("div",{class:"lg:border-0 border rounded-full my-auto",onClick:t},[ee,ae])]))}};var te="/assets/iconmonstr-facebook-4.121851f1.svg",re="/assets/iconmonstr-instagram-11.3b3dbebd.svg",le="/assets/iconmonstr-whatsapp-1.1a47a52f.svg";b("data-v-389bf7f9");const ne={class:"lg:w-3/5 lg:mx-auto lg:my-8"},oe=g("div",{class:"tarjetas"},[g("span",{class:"titulos-Nosotros"},"Impresion 3D"),g("div",{class:"flex-grow lg:grid lg:grid-cols-6 justify-items-center"},[g("div",{class:"lg:col-span-4"},[g("p",{class:"text-Nosotros"}," Con la capacidad te traer a la realidad virtualmente cualquier objeto que podamos imaginar, esta tecnica mediante el derretimiento de plastico bio-degradable lo coloca de manera sincronizada el cual puede imprimir objetos de hasta 40cm de altura. Entre las ideas para su utlizacion son las macetas, figuras, stands, letreros y un largo etc. ")]),g("div",{class:"contenedor-imagen-servicios"},[g("img",{src:"/assets/groot3d.a3f2b4f9.webp",alt:"",class:"imagen-servicios"})])])],-1),ie=g("div",{class:"tarjetas"},[g("span",{class:"titulos-Nosotros"},"Sublimación"),g("div",{class:"flex-grow lg:grid lg:grid-cols-6 justify-items-center"},[g("div",{class:"lg:col-span-4"},[g("p",{class:"text-Nosotros"},[v(" La Sublimación es una tecnica que permite la insercion de imagenes, fotografias y logotipos en vestimentas, este incluye desde gorras, tazas y pines hasta playeras, sudaderas y blusas. Estas pueden ser de algodon y poliester. "),g("br"),v(" Tambien colocamos vinil textil para una mayor definicion. ")])]),g("div",{class:"contenedor-imagen-servicios"},[g("img",{src:"/assets/sublimacion.9c942312.webp",alt:"",class:"imagen-servicios"})])])],-1),ce=g("div",{class:"tarjetas"},[g("span",{class:"titulos-Nosotros"},"Grabado Laser"),g("div",{class:"flex-grow lg:grid lg:grid-cols-6 justify-items-center"},[g("div",{class:"lg:col-span-4"},[g("p",{class:"text-Nosotros"}," Mediante un laser de gran potencia y altisima precision podemos generar imagenes sobre caucho, madera, papel, aceto. Esta tecnica permite incluso grabar fotografias dando un toque unico a nuestros productos. ")]),g("div",{class:"contenedor-imagen-servicios"},[g("img",{src:"/assets/gaudyLaser.ecb6609c.webp",alt:"",class:"imagen-servicios"})])])],-1),ue=g("div",{class:"redes grid grid-cols-3 gap-2 justify-items-center tarjetas"},[g("span",{class:"\r\n          col-span-3\r\n          font-bold\r\n          bg-clip-text\r\n          text-transparent\r\n          bg-gradient-to-r\r\n          from-green-400\r\n          to-blue-500\r\n          text-2xl\r\n        "},"SIGUENOS EN NUESTRAS REDES SOCIALES"),g("a",{href:"https://www.facebook.com/oliprintgt",target:"_blank"},[g("img",{alt:"facebook oliprint",src:te,class:"col-span-1 h-10"})]),g("a",{href:"https://instagram.com/oliprintgt",target:"_blank"},[g("img",{alt:"instagram oliprint",src:re,class:"col-span-1 h-10"})]),g("a",{href:"https://api.whatsapp.com/send?phone=50242112585&text=Hola",target:"_blank"},[g("img",{alt:"whatsapp oliprint",src:le,class:"col-span-1 h-10"})])],-1);x();const pe={setup:e=>(e,a)=>(d(),m("div",ne,[oe,ie,ce,ue])),__scopeId:"data-v-389bf7f9"};const de=N();b("data-v-226938d6");const me={class:"flex-grow lg:grid lg:grid-cols-6 lg:mx-16"},ge={class:"lg:col-span-3"},be=g("div",{class:"text-5xl lg:text-7xl font-extrabold text-left mx-6 mb-2"},[g("span",{class:"\r\n            bg-clip-text\r\n            text-transparent\r\n            bg-gradient-to-r\r\n            from-green-400\r\n            to-blue-500\r\n          "}," Somos Expertos en")],-1),xe={class:"h-16"},ve={key:0,class:"\r\n              text-5xl\r\n              lg:text-7xl\r\n              font-extrabold\r\n              bg-clip-text\r\n              text-transparent\r\n              bg-gradient-to-r\r\n              from-green-400\r\n              to-blue-500\r\n              text-left\r\n              mx-6\r\n              lg:my-4\r\n            "},he=g("div",{class:"lg:col-span-3"},[g("p",{class:"text-white text-2xl text-left lg:text-4xl lg:font-bold mx-6 my-8"}," Desde 2020 estamos renovando los servicios de personalizacion en Guatemala. Trayendo innovacion y creatividad. 🙌 ")],-1);x();const fe={setup(e){h((()=>{setInterval((()=>{a.show=!a.show,a.count++,a.text=a.textPool[(a.count-1)%a.textPool.length]}),1200)}));const a=f({count:0,show:!0,text:"Grabado Laser",textPool:["Sublimación","Impresión 3D","Grabado Laser"],imagePool:["../assets/groot3d.webp","../assets/gaudylaser.webp","../assets/sublimacion.webp"]});return(e,s)=>(d(),m(k,null,[g("div",me,[g("div",ge,[be,g("div",xe,[g(w,{name:"fade"},{default:de((()=>[y(a).show?(d(),m("div",ve,E(y(a).text),1)):A("",!0)])),_:1})])]),he]),g(pe)],64))},__scopeId:"data-v-226938d6"};const we={},ye={class:"lg:w-1/2 lg:mx-auto"},Ee=g("div",{class:"redes grid grid-cols-3 gap-2 justify-items-center tarjetas"},[g("span",{class:"\r\n          col-span-3\r\n          font-bold\r\n          bg-clip-text\r\n          text-transparent\r\n          bg-gradient-to-r\r\n          from-green-400\r\n          to-blue-500\r\n          text-2xl\r\n        "},"SIGUENOS EN NUESTRAS REDES SOCIALES"),g("a",{href:"https://www.facebook.com/oliprintgt",target:"_blank"},[g("img",{alt:"facebook oliprint",src:te,class:"col-span-1 h-10"})]),g("a",{href:"https://instagram.com/oliprintgt",target:"_blank"},[g("img",{alt:"instagram oliprint",src:re,class:"col-span-1 h-10"})]),g("a",{href:"https://api.whatsapp.com/send?phone=50242112585&text=Hola",target:"_blank"},[g("img",{alt:"whatsapp oliprint",src:le,class:"col-span-1 h-10"})])],-1),Ae=g("div",{class:"tarjetas"},[g("span",{class:"titulos-Nosotros"},"✔ Nuestra Mision"),g("p",{class:"text-Nosotros"}," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo. ")],-1),ke=g("div",{class:"tarjetas"},[g("span",{class:"titulos-Nosotros"},"✔ Nuestra Vision"),g("p",{class:"text-Nosotros"},[v(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies. "),g("br"),v(" nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo. ")])],-1),Ne=g("div",{class:"tarjetas"},[g("span",{class:"titulos-Nosotros"},"✔ Objetivo"),g("p",{class:"text-Nosotros"}," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes pede justo. ")],-1);we.render=function(e,a,s,t,r,l){return d(),m("div",ye,[Ee,Ae,ke,Ne])};const Ie=e=>{const a=c(!1),s=c(!1);return{error:s,addDocu:async t=>{s.value=null,a.value=!0;try{const r=await I(Y,e),l=await S(r,t);return a.value=!1,s.value=null,l}catch(r){console.log(r.message),s.value="could not send the message",a.value=!1}}}};const Se={class:"leading-loose px-6 lg:mx-auto lg:px-10 lg:w-1/3"},Ce=g("p",{class:"\r\n          text-4xl\r\n          font-bold\r\n          bg-clip-text\r\n          text-transparent\r\n          bg-gradient-to-r\r\n          from-green-400\r\n          to-blue-500\r\n          -mt-2\r\n          mb-4\r\n        "}," ¿Algún proyecto en mente? ",-1),_e={class:""},je=g("label",{class:"block text-xl text-purple-800",for:"cus_name"},"Nombre",-1),qe={class:"mt-2"},Re=g("label",{class:"block text-xl text-purple-800",for:"cus_email"},"Email",-1),Te={class:"mt-2"},Oe=g("label",{class:"block text-xl text-purple-800",for:"cus_email"},"Mensaje",-1),Me={class:"mt-4"},Le=g("button",{class:"\r\n            px-4\r\n            py-1\r\n            text-purple-800\r\n            font-light\r\n            tracking-wider\r\n            rounded-full\r\n            border border-purple-800\r\n            hover:text-white\r\n            hover:bg-purple-800\r\n          ",type:"submit"}," ENVIAR ",-1),De={key:0,class:"mt-2 p-0 rounded-2xl text-purple-900 bg-purple-100"},Ue={setup(e){const a=f({name:"",email:"",message:"",status:!1}),{error:s,addDocu:t}=Ie("Cotizaciones"),r=async()=>{await t({name:a.name,email:a.email,message:a.message,createdAt:q()}),a.name="",a.email="",a.message="",console.log(s.value),s.value||(a.status=!0,setTimeout((()=>{a.status=!1}),3e3))};return(e,s)=>(d(),m("div",Se,[g("form",{class:"max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl",onSubmit:j(r,["prevent"])},[Ce,g("div",_e,[je,C(g("input",{class:"inputs",id:"cus_name",name:"cus_name",type:"text",required:"",placeholder:"Escribe tu nombre","aria-label":"Name","onUpdate:modelValue":s[1]||(s[1]=e=>y(a).name=e)},null,512),[[_,y(a).name]])]),g("div",qe,[Re,C(g("input",{class:"inputs",id:"cus_email",name:"cus_email",type:"email",required:"",placeholder:"Escribe tu correo","aria-label":"Email","onUpdate:modelValue":s[2]||(s[2]=e=>y(a).email=e)},null,512),[[_,y(a).email]])]),g("div",Te,[Oe,C(g("textarea",{class:"inputs",id:"cus_email",name:"cus_email",type:"text",required:"",placeholder:"Escribe tu mensaje aqui.","aria-label":"Email",rows:"3","onUpdate:modelValue":s[3]||(s[3]=e=>y(a).message=e)},null,512),[[_,y(a).message]])]),g("div",Me,[Le,y(a).status?(d(),m("h1",De," MENSAJE ENVIADO EXITOSAMENTE ")):A("",!0)])],40,["onSubmit"])]))}},Ge=c(null),Pe=c(!1),Ve=async(e,a)=>{Ge.value=null;try{const s=await R(X,e,a);if(!s)throw new Error("Could not complete the signup");return Ge.value=null,Pe.value=!1,s}catch(s){console.log(s.message),Ge.value=s,Pe.value=!1}},ze=c(null),Fe=c(!1),He=async(e,a)=>{ze.value=null,Fe.value=!0;try{const s=await T(X,e,a);return ze.value=null,Fe.value=!1,s}catch(s){console.log(s),ze.value="Correo o Contraseña incorrecta",Fe.value=!1}};const Be={class:"leading-loose px-6 lg:mx-auto lg:px-10 lg:w-1/3"},Je={class:"\r\n          text-4xl\r\n          font-bold\r\n          bg-clip-text\r\n          text-transparent\r\n          bg-gradient-to-r\r\n          from-green-400\r\n          to-blue-500\r\n          -mt-2\r\n          mb-4\r\n        "},$e={key:0},Xe={key:1},Ye={class:"mt-2"},Ke=g("label",{class:"block text-xl text-purple-800",for:"cus_email"},"Email",-1),Ze={class:""},We=g("label",{class:"block text-xl text-purple-800",for:"cus_name"},"Contraseña",-1),Qe={key:0},ea=g("label",{class:"block text-xl text-purple-800",for:"cus_name"}," Confirma tu Contraseña",-1),aa={class:"mt-4"},sa={class:"\r\n            px-4\r\n            py-1\r\n            text-purple-800\r\n            font-light\r\n            tracking-wider\r\n            rounded-full\r\n            border border-purple-800\r\n            hover:text-white\r\n            hover:bg-purple-800\r\n          ",type:"submit"},ta={key:0},ra={key:1},la={key:0,class:"rounded bg-red-200 my-3 mx-4 text-xl"},na={key:1,class:"rounded bg-red-200 my-3 mx-4 text-xl"},oa={key:0},ia=v(" ¿aun no tienes cuenta? "),ca=g("span",{class:"underline"}," REGISTRATE ",-1),ua={key:1},pa=v(" ¿Ya tienes una cuenta? "),da=g("span",{class:"underline"}," INICIA SESION ",-1),ma={setup(e){const a=f({email:"",password:"",passwordConfirm:"",status:!1,loginMode:!0,passwordMatch:!0}),{error:s,login:t}={error:ze,login:He,isPending:Fe},{signup:r}={error:Ge,signup:Ve,isPending:Pe},l=p(),n=()=>{a.loginMode=!a.loginMode},o=()=>{a.loginMode?i():a.password===a.passwordConfirm?c():(a.passwordMatch=!1,a.password="",a.passwordConfirm="",setTimeout((()=>{a.passwordMatch=!0}),3e3))},i=async()=>{await t(a.email,a.password),s.value||l.push({name:"Favorites"})},c=async()=>{r(a.email,a.password),l.push({name:"Favorites"})};return(e,t)=>(d(),m("div",Be,[g("form",{class:"max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl",onSubmit:j(o,["prevent"])},[g("p",Je,[y(a).loginMode?(d(),m("span",$e,"Inicia Sesion")):(d(),m("span",Xe," Registrate "))]),g("div",Ye,[Ke,C(g("input",{class:"inputs",id:"email",name:"email",type:"email",required:"",placeholder:"Escribe tu correo","aria-label":"Email","onUpdate:modelValue":t[1]||(t[1]=e=>y(a).email=e)},null,512),[[_,y(a).email]])]),g("div",Ze,[We,C(g("input",{class:"inputs",id:"password",name:"password",type:"password",required:"",placeholder:"Escribe tu contraseña","aria-label":"Name","onUpdate:modelValue":t[2]||(t[2]=e=>y(a).password=e)},null,512),[[_,y(a).password]])]),y(a).loginMode?A("",!0):(d(),m("div",Qe,[ea,C(g("input",{class:"inputs",id:"password_confirmation",name:"password_confirmation",type:"password",required:"",placeholder:"Escribe la contraseña de nuevo","aria-label":"Name","onUpdate:modelValue":t[3]||(t[3]=e=>y(a).passwordConfirm=e)},null,512),[[_,y(a).passwordConfirm]])])),g("div",aa,[g("button",sa,[y(a).loginMode?(d(),m("span",ta,"INGRESAR")):(d(),m("span",ra,"REGISTRARME"))]),y(a).passwordMatch?A("",!0):(d(),m("h1",la," Contraseñas no coinciden. ")),y(s)?(d(),m("h1",na,E(y(s)),1)):A("",!0),g("h1",{class:"mt-4 text-lg text-purple-600 cursor-pointer font-bold",onClick:n},[y(a).loginMode?(d(),m("span",oa,[ia,ca])):(d(),m("span",ua,[pa,da]))])])],40,["onSubmit"])]))}};const ga=c(null),ba=c(!1),xa=async()=>{ga.value=null,ba.value=!0;try{await O(X),ba.value=!1,console.log("logged out")}catch(e){console.log(e.message),ga.value=e.message,ba.value=!1}};const va={class:"text-white font-bold text-4xl"},ha=g("span",{class:"col-span-3 text-xl mt-1 mx-1"}," CERRAR SESION ",-1),fa=g("img",{alt:"login",src:"/assets/logout.b46a78c1.svg",class:"w-8 h-8 mx-auto lg:mx-0 cursor-pointer col-span-1"},null,-1),wa=g("br",null,null,-1),ya={class:"text-white font-bold text-xl"},Ea=v(" 😥 parece que aun no tienes productos favoritos... "),Aa=v(" VISITAR GALERIA "),ka={setup(e){const a=p(),{user:s}=W(),{logout:t,error:r,isPending:l}={logout:xa,error:ga,isPending:ba},n=async()=>{await t(),a.push("/")};return(e,a)=>{const t=L("router-link");return d(),m(k,null,[g("h1",va,"Bienvenido "+E(y(s).email),1),g("div",{class:"bg-white mx-auto px-4 my-2  rounded-tl-3xl rounded-br-3xl grid grid-cols-4",onClick:n},[ha,fa]),wa,g("h2",ya,[Ea,g(t,{to:{name:"Galeria"},class:"underline hover:text-purple-300"},{default:M((()=>[Aa])),_:1})])],64)}}};const Na={class:"leading-loose px-6 lg:mx-12 lg:px-0"},Ia=g("p",{class:"\r\n          text-xl\r\n          font-bold\r\n          bg-clip-text\r\n          text-transparent\r\n          bg-gradient-to-r\r\n          from-green-400\r\n          to-blue-500\r\n          -mt-2\r\n          mb-4\r\n        "}," Agregar contenido a la galeria ",-1),Sa={class:""},Ca=g("label",{class:"block text-sm text-purple-800",for:"cus_name"},"Nombre Del Producto",-1),_a={class:"mt-2"},ja=g("label",{class:"block text-sm text-purple-800",for:"cus_email"},"Etiquetas",-1),qa={class:"mt-2"},Ra=g("label",{class:"block text-sm text-purple-800",for:"cus_email"},"Foto",-1),Ta={class:"mt-2"},Oa=g("label",{class:"block text-sm text-purple-800",for:"cus_email"},"Descripcion",-1),Ma={class:"mt-1"},La=g("button",{class:"\r\n            px-4\r\n            py-1\r\n            text-purple-800\r\n            font-light\r\n            tracking-wider\r\n            rounded-full\r\n            border border-purple-800\r\n            hover:text-white\r\n            hover:bg-purple-800\r\n          ",type:"submit"}," AGREGAR ",-1),Da={key:0,class:"bg-green-300 rounded mt-4"},Ua={setup(e){const{filePath:a,url:s,uploadImage:t}=(()=>{const e=c(null),a=c(null),s=c(null);return{url:a,filePath:s,error:e,uploadImage:async t=>{s.value=`productos/${t.name}`;const r=await D(K,s.value);try{await U(r,t),a.value=await G(r),console.log(a.value)}catch(l){console.log(l.message),e.value=l.message}},deleteImage:async a=>{const s=await D(K,a);try{await P(s)}catch(t){console.log(t.message),e.value=t.message}}}})(),{error:r,addDocu:l}=Ie("Producto"),n=["image/png","image/jpeg"],o=c(""),i=c([]),u=c(""),p=c(null),b=c(null),x=c(!1),v=c(!1),h=e=>{const a=e.target.files[0];a&&n.includes(a.type)?(p.value=a,b.value=null):(p.value=null,b.value="Please select an image file (png or jpg)")},f=async()=>{p.value&&(x.value=!0,await t(p.value),await l({Name:o.value,Description:u.value,Tags:i.value,Foto:s.value,filePath:a.value,createdAt:q()}),x.value=!1,v.value=!0,o.value="",u.value="",i.value="",s.value="",setTimeout((()=>{v.value=!1}),3e3))};return(e,a)=>(d(),m("div",Na,[g("form",{class:"max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl",onSubmit:j(f,["prevent"])},[Ia,g("div",Sa,[Ca,C(g("input",{class:"w-full px-2 py-2 text-gray-600 bg-gray-200 inputs",type:"text",required:"",placeholder:"Escribe tu nombre","onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e)},null,512),[[_,o.value]])]),g("div",_a,[ja,C(g("input",{class:"w-full px-2 py-2 text-gray-600 bg-gray-200 inputs",type:"text",required:"",placeholder:"Separa cada etiqueta con una coma","onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e)},null,512),[[_,i.value]])]),g("div",qa,[Ra,g("input",{type:"file",onChange:h},null,32)]),g("div",Ta,[Oa,C(g("textarea",{class:"inputs",required:"",placeholder:"Descripcion del producto","onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e)},null,512),[[_,u.value]])]),g("div",Ma,[La,v.value?(d(),m("h2",Da,"AGREGADO EXITOSAMENTE A LA GALERIA")):A("",!0)])],40,["onSubmit"])]))}},Ga=e=>{const a=c([]),s=c(null);return{docs:a,error:s,load:async e=>{try{const s=I(Y,e),t=await V(s);a.value=t.docs.map((e=>e.data()))}catch(t){s.value=t.message,console.log("error en composable getCollection",s.value)}}}};const Pa={class:"px-6 leading-loose lg:mx-4 bg-white rounded shadow-xl"},Va=g("h1",{class:"\r\n        text-xl\r\n        font-bold\r\n        bg-clip-text\r\n        text-transparent\r\n        bg-gradient-to-r\r\n        from-green-400\r\n        to-blue-500\r\n        mt-4\r\n        mb-4\r\n      "},' Ultimos mensajes recibidos en la pestaña "cotizar" ',-1),za={key:0,class:"bg-red-600"},Fa={key:1},Ha=g("span",{class:"text-purple-900 font-bold"},"Nombre: ",-1),Ba=g("br",null,null,-1),Ja=g("span",{class:"text-purple-900 font-bold"}," Correo: ",-1),$a=g("br",null,null,-1),Xa=g("span",{class:"text-purple-900 font-bold"}," Mensaje: ",-1),Ya=g("br",null,null,-1),Ka={setup(e){const{docs:a,error:s,load:t}=Ga();return h((()=>{t("Cotizaciones")})),(e,t)=>(d(),m("div",Pa,[Va,y(s)?(d(),m("div",za," HABO UN ERROR AL INTENTAR OBTENER LOS ULTIMOS MENSAJES ")):(d(),m("div",Fa,[(d(!0),m(k,null,z(y(a),(e=>(d(),m("div",{key:e,class:"\r\n          my-2\r\n          py-0\r\n          px-4\r\n          bg-gray-200\r\n          shadow-inner\r\n          rounded-tl-3xl rounded-br-3xl\r\n        "},[Ha,v(" "+E(e.name)+" ",1),Ba,Ja,v(" "+E(e.email)+" ",1),$a,Xa,v(" "+E(e.message)+" ",1),Ya])))),128))]))]))}};const Za=g("h2",{class:"text-white text-2xl font-bold"},"TABLERO ADMINISTRATIVO",-1),Wa={class:"lg:grid lg:grid-cols-2"},Qa={setup:e=>(e,a)=>(d(),m(k,null,[Za,g("div",Wa,[g(Ua),g(Ka)])],64))};b("data-v-acba4e34");const es={class:"grid grid-cols-2 lg:grid-cols-4"},as={class:"producto"},ss={class:"thumbnail"},ts={class:"info"},rs={class:"text-purple-900 font-bold uppercase"},ls={class:"text-left"},ns={class:"tags mt-3 grid grid-cols-5 "},os={class:"text-blue-400 underline italic col-span-4"},is=g("span",{class:"col-span-1 cursor-pointer text-2xl"},"❤",-1);x();const cs={setup(e){const{docs:a,error:s,load:t}=Ga();return h((()=>{t("Producto")})),(e,s)=>(d(),m("div",es,[(d(!0),m(k,null,z(y(a),(e=>(d(),m("div",{key:e.id},[g("div",as,[g("div",ss,[g("img",{src:e.Foto},null,8,["src"])]),g("div",ts,[g("h3",rs,E(e.Name),1),g("p",ls,E(e.Description),1)]),g("div",ns,[g("p",os,E(e.Tags),1),is])])])))),128))]))},__scopeId:"data-v-acba4e34"},us=[{path:"/",name:"Home",component:fe},{path:"/About",name:"About",component:we},{path:"/Cotizar",name:"Cotizar",component:Ue},{path:"/Login",name:"Login",component:ma},{path:"/Galeria",name:"Galeria",component:cs},{path:"/Favorites",name:"Favorites",component:ka,beforeEnter:(e,a,s)=>{let t=X.currentUser;t?"pxHuY07zYPUYxyXIJau64jlCDVc2"==t.uid?s({name:"Admin"}):s():s({name:"Login"})}},{path:"/Admin",name:"Admin",component:Qa}],ps=F({history:H(),routes:us});const ds={setup(){h((()=>{setTimeout((()=>{e.show=!0}),2500)}));const e=f({show:!1});return((e,l)=>{for(var n in l||(l={}))s.call(l,n)&&r(e,n,l[n]);if(a)for(var n of a(l))t.call(l,n)&&r(e,n,l[n]);return e})({},B(e))},watch:{$route(e,a){"Home"==e.name?this.show=!0:"Cotizar"==e.name&&(this.show=!1)}}},ms=N();b("data-v-35ab12ed");const gs={key:0,class:"\r\n        px-2\r\n        mx-3\r\n        py-3\r\n        lg:py-1\r\n        mb-6\r\n        bottom-0\r\n        right-0\r\n        bg-white\r\n        lg:w-96\r\n        rounded-xl\r\n        shadow-lg\r\n        items-center\r\n        flex\r\n        lg:fixed\r\n        space-x-2\r\n      "},bs=g("div",{class:"flex-shrink-0 bg-color-white"},[g("img",{class:"h-16 w-16",src:"/assets/oliprint2.5ac44273.svg"})],-1),xs=g("div",null,[g("span",{class:"text-xl font-bold text-black"},"Contáctanos"),g("p",{class:"text-gray-600 text-lg"},"Sera un gusto atenderte 😊")],-1),vs=g("button",{class:"\r\n          px-2\r\n          text-purple-800\r\n          font-medium\r\n          rounded-full\r\n          border border-purple-800\r\n          hover:text-white\r\n          hover:bg-purple-800\r\n          hover:border-transparent\r\n        ",h:""},[g("a",{href:"https://api.whatsapp.com/send?phone=50242112585&text=Hola"},"ENVIAR MENSAJE")],-1);x();const hs=ms(((e,a,s,t,r,l)=>(d(),m(w,{name:"entradaContactanos"},{default:ms((()=>[e.show?(d(),m("div",gs,[g("button",{class:"\r\n          font-extrabold\r\n          rounded-full\r\n          bg-white\r\n          text-purple-800\r\n          border border-purple-800\r\n          hover:text-white\r\n          hover:bg-purple-800\r\n          px-2\r\n          mr-2\r\n          -mt-2\r\n          absolute\r\n          lg:relative\r\n          top-0\r\n          right-0\r\n          equis\r\n        ",onClick:a[1]||(a[1]=a=>e.show=!1)}," X "),bs,xs,vs])):A("",!0)])),_:1}))));ds.render=hs,ds.__scopeId="data-v-35ab12ed";const fs={class:"flex flex-col h-screen"},ws={class:"fixed inset-x-0 bottom-0"};J({setup:e=>(e,a)=>{const s=L("router-view");return d(),m("div",fs,[g(se,{class:"shadow-2xl p-2 mb-6 "}),g(s),g("div",ws,[g(ds)])])}}).use(ps).mount("#app");