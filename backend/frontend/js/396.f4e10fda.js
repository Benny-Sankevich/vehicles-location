"use strict";(self["webpackChunkmap"]=self["webpackChunkmap"]||[]).push([[396],{3396:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var o=n(3673);const a={class:"q-pa-md q-gutter-sm"},i={key:3};function l(e,t,n,l,r,s){const c=(0,o.up)("DrawerData"),u=(0,o.up)("q-drawer"),p=(0,o.up)("q-btn"),g=(0,o.up)("Marker"),d=(0,o.up)("Polygon"),w=(0,o.up)("Circle"),v=(0,o.up)("GoogleMap"),h=(0,o.up)("q-page-container"),m=(0,o.up)("q-layout"),f=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(f,{class:"bg-grey-4 row justify-center items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{view:"hHh lpR fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),side:"left",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{vehiclesData:e.vehiclesData,onOnCloseDrawer:e.closeDrawerLedtSide},null,8,["vehiclesData","onOnCloseDrawer"])])),_:1},8,["modelValue"]),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o._)("div",a,[e.isPolygonDrawingOngoing||e.leftDrawerOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:0,color:"primary",icon:"play_arrow",onClick:e.enableDrawing,label:"Start Drawing"},null,8,["onClick"])),e.isPolygonDrawingOngoing&&!e.leftDrawerOpen?((0,o.wg)(),(0,o.j4)(p,{key:1,color:"deep-orange",icon:"clear",onClick:e.clearDrawing,label:"Cancal Drawing"},null,8,["onClick"])):(0,o.kq)("",!0),e.isPolygonDrawingOngoing&&e.triangleCoords.length>2&&!e.leftDrawerOpen?((0,o.wg)(),(0,o.j4)(p,{key:2,color:"secondary",icon:"done",onClick:e.showVehiclesData,label:"Show Cars"},null,8,["onClick"])):(0,o.kq)("",!0),e.isPolygonDrawingOngoing&&e.triangleCoords.length<3?((0,o.wg)(),(0,o.iD)("span",i,"You must select at least 3 points on the map")):(0,o.kq)("",!0)]),(0,o.Wm)(v,{"api-key":e.apiKey,style:{width:"100%",height:"500px"},center:e.center,zoom:15,onClick:e.onMapClick},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.vehiclesLocationData,(e=>((0,o.wg)(),(0,o.j4)(g,{options:e,key:e.title},null,8,["options"])))),128)),e.triangleCoords.length>2&&e.renderPolygon?((0,o.wg)(),(0,o.j4)(d,{key:0,options:e.polygonOptions},null,8,["options"])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.circlesOptions,((e,t)=>((0,o.wg)(),(0,o.j4)(w,{options:e,key:t},null,8,["options"])))),128))])),_:1},8,["api-key","center","onClick"])])),_:1})])),_:1})])),_:1})}var r=n(1959),s=n(2946),c=n(2323);const u=(0,o._)("div",{class:"text-weight-medium drawer_title"},"Locations",-1),p={key:0},g={key:1},d=(0,o.Uk)("No cars found.");function w(e,t,n,a,i,l){var r,s;const w=(0,o.up)("q-toolbar-title"),v=(0,o.up)("q-btn"),h=(0,o.up)("q-toolbar"),m=(0,o.up)("q-icon"),f=(0,o.up)("q-item-section"),y=(0,o.up)("q-item"),k=(0,o.up)("q-list"),D=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(h,{class:"bg-secondary q-mb-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"text-white q-pt-xs"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(v,{onClick:e.closeDrawer,flat:"",round:"",dense:"",color:"white",icon:"close"},null,8,["onClick"])])),_:1}),(null===(r=e.vehiclesData)||void 0===r?void 0:r.length)>0?((0,o.wg)(),(0,o.iD)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.vehiclesData,((t,n)=>((0,o.wg)(),(0,o.j4)(k,{bordered:"",separator:"",key:n},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(y,{clickable:"",active:e.active},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"airport_shuttle"})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(t.title),1)])),_:2},1024),(0,o.Wm)(f,{side:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(n+1),1)])),_:2},1024)])),_:2},1032,["active"]),[[D]])])),_:2},1024)))),128))])):(0,o.kq)("",!0),0==(null===(s=e.vehiclesData)||void 0===s?void 0:s.length)?((0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(k,{bordered:"",separator:"",key:e.vehiclesData.length},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(y,{clickable:"",active:e.active},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"airport_shuttle"})])),_:1}),(0,o.Wm)(f,{side:""},{default:(0,o.w5)((()=>[d])),_:1})])),_:1},8,["active"]),[[D]])])),_:1})])):(0,o.kq)("",!0)])}const v=(0,o.aZ)({props:{vehiclesData:{type:Object,required:!0}},emits:["onCloseDrawer"],setup(e,{emit:t}){const n=()=>{t("onCloseDrawer",!1)};return{closeDrawer:n}}});var h=n(4260),m=n(9570),f=n(3747),y=n(4607),k=n(7011),D=n(3414),C=n(2035),b=n(4554),q=n(6489),O=n(7518),Z=n.n(O);const _=(0,h.Z)(v,[["render",w]]),P=_;Z()(v,"components",{QToolbar:m.Z,QToolbarTitle:f.Z,QBtn:y.Z,QList:k.Z,QItem:D.Z,QItemSection:C.Z,QIcon:b.Z}),Z()(v,"directives",{Ripple:q.Z});var U=n(52),$=n.n(U),W=n(4434);const L=e=>{W.Z.create({message:e,color:"red",position:"top-right",icon:"error",timeout:5e3})};var S=n(9066),M=n(6249),R=n(8430),Q=n(1484),j=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{s(o.next(e))}catch(t){i(t)}}function r(e){try{s(o["throw"](e))}catch(t){i(t)}}function s(e){e.done?n(e.value):a(e.value).then(l,r)}s((o=o.apply(e,t||[])).next())}))};const F=$().create({baseURL:"https://vehicle-location.herokuapp.com/api/"});F.interceptors.request.use((e=>(e.baseURL&&e.url&&S.appStore.commit(`${Q.$.UiModule}/${Q.$.Ui.MutationAddPendingRequest}`,e.baseURL+e.url),M.Z.show({spinner:R.Z,spinnerColor:"amber",spinnerSize:40}),e))),F.interceptors.response.use((e=>{S.appStore.commit(`${Q.$.UiModule}/${Q.$.Ui.MutationRemovePendingRequest}`,`${e.config.baseURL}${e.config.url}`);const t=S.appStore.getters[`${Q.$.UiModule}/${Q.$.Ui.GetPendingRequestsCount}`];return 0===t&&M.Z.hide(),e}),(e=>j(void 0,void 0,void 0,(function*(){var t;S.appStore.commit(`${Q.$.UiModule}/${Q.$.Ui.MutationRemovePendingRequest}`,e.config.baseURL+e.config.url);const n=yield S.appStore.getters[`${Q.$.UiModule}/${Q.$.Ui.GetPendingRequestsCount}`];return 0===n&&M.Z.hide(),L(e.config.url+": "+(null===e||void 0===e?void 0:e.message)||(null===(t=e.response)||void 0===t?void 0:t.data)||"General error! Please contact support!"),Promise.reject(e)}))));class H{getAllVehiclesLocation(){return F.post("vehicles-location/get-vehicles-location").then((e=>{if("200"===e.status.toString())return e.data}))}getVehiclesLocationByUserDrawingAsync(e){return F.post("vehicles-location/get-vehicles-data-by-user-drawing",e).then((e=>{if("200"===e.status.toString())return e.data}))}}const V=new H;var x=function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{s(o.next(e))}catch(t){i(t)}}function r(e){try{s(o["throw"](e))}catch(t){i(t)}}function s(e){e.done?n(e.value):a(e.value).then(l,r)}s((o=o.apply(e,t||[])).next())}))};const A=(0,o.aZ)({components:{GoogleMap:s.b6,Marker:s.Jx,Polygon:s.mg,DrawerData:P,Circle:s.Cd},setup(){const e="AIzaSyAyTkHhVfvSvqEKkUg9OYP_t7owAbZPuYg";let t=(0,r.iH)(!1),n=(0,r.iH)([]),o=(0,r.iH)(!1),a=(0,r.iH)(!1),i=(0,r.iH)(null),l=(0,r.iH)([]),s=(0,r.Fl)((()=>l.value.map((e=>({center:e,radius:25,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35})))));V.getAllVehiclesLocation().then((e=>n.value=e));let c=n.value.length?n.value[0].position:{lat:51.4694976807,lng:-.0493916683},u=(0,r.Fl)((()=>({paths:l.value,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35})));const p=e=>{a.value=e},g=e=>{a.value&&(o.value=!1,l.value.push({lat:e.latLng.lat(),lng:e.latLng.lng()}),setTimeout((()=>o.value=!0),10))},d=()=>{p(!1),l.value=[],o.value=!1},w=()=>{p(!0)},v=()=>x(this,void 0,void 0,(function*(){i.value=yield V.getVehiclesLocationByUserDrawingAsync(l.value),p(!1),t.value=!0})),h=()=>{t.value=!1,d()};return{apiKey:e,circlesOptions:s,vehiclesData:i,onMapClick:g,clearDrawing:d,enableDrawing:w,showVehiclesData:v,closeDrawerLedtSide:h,triangleCoords:l,polygonOptions:u,renderPolygon:o,center:c,vehiclesLocationData:n,leftDrawerOpen:t,isPolygonDrawingOngoing:a}}});var K=n(4379),Y=n(3066),z=n(5188),G=n(2652);const T=(0,h.Z)(A,[["render",l]]),B=T;Z()(A,"components",{QPage:K.Z,QLayout:Y.Z,QDrawer:z.Z,QPageContainer:G.Z,QBtn:y.Z})}}]);