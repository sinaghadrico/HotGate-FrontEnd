(this.webpackJsonphotgate=this.webpackJsonphotgate||[]).push([[13],{1147:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n(90),l=n(295),a=new RegExp("^[0-9]+$"),c=function(e){return(null===e||void 0===e?void 0:e.indexOf(","))>=0?null===e||void 0===e?void 0:e.replaceAll(",",""):e},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=null===e||void 0===e?void 0:e.toString();if([null,void 0].includes(t))return"";if(null===t||void 0===t?void 0:t.startsWith("."))return"0.";var n=t.toString().split("."),a=Object(l.a)(n),c=a[0],r=void 0===c?"":c,o=a.slice(1),s=r.replace(/\B(?=(\d{3})+(?!\d))/g,",");return[s].concat(Object(i.a)(o||[])).join(".")},o=function(e){var t,n,i,l,c,r,o=e.toString();if("00"===(o=(null===(t=o)||void 0===t?void 0:t.indexOf(","))>=0?null===(n=o)||void 0===n?void 0:n.replaceAll(",",""):o))return!1;o=(null===(i=o)||void 0===i?void 0:i.indexOf("."))>=0?null===(l=o)||void 0===l?void 0:l.replace(".",""):o;var s=null===e||void 0===e||null===(c=e.toString())||void 0===c?void 0:c.indexOf("."),d=s>0?null===e||void 0===e||null===(r=e.toString())||void 0===r?void 0:r.substring(s+1).length:0;return""===o||!(d>2)&&a.test(o)}},1150:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i,l=n(1),a=["title","titleId"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function o(e,t){var n=e.title,o=e.titleId,s=r(e,a);return l.createElement("svg",c({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?l.createElement("title",{id:o},n):null,i||(i=l.createElement("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"white",fillOpacity:.8})))}var s=l.forwardRef(o);n.p},1154:function(e,t,n){"use strict";var i,l=n(40),a=n(5),c=n(22),r=n(165),o=n(1),s=["title","titleId"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function v(e,t){var n=e.title,l=e.titleId,a=u(e,s);return o.createElement("svg",d({width:"25px",height:"25px",viewBox:"0 0 35 35",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":l},a),void 0===n?o.createElement("title",{id:l},"Btn_Expand"):n?o.createElement("title",{id:l},n):null,i||(i=o.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("g",{id:"Btn_Expand",stroke:"#979797",strokeWidth:2},o.createElement("polyline",{id:"Path-2",points:"12 15 18 21 24 15"})))))}var j=o.forwardRef(v),b=(n.p,n(1150)),f=(n(1155),n(0));t.a=function(e){var t=e.onChangeValue,n=e.title,i=void 0===n?"Input Token":n,s=e.token,d=Object(o.useState)(!1),u=Object(c.a)(d,2),v=u[0],h=u[1],m=Object(o.useState)({search:null,contractAddress:""}),O=Object(c.a)(m,2),p=O[0],x=O[1],C=Object(o.useState)(0),g=Object(c.a)(C,2),y=g[0],k=g[1],L=function(e){var t=e.target,n=t.name,i=t.value;x(Object(a.a)(Object(a.a)({},p),{},Object(l.a)({},n,i)))},w=[{key:"bsc",value:"BSC",balance:0},{key:"bnb",value:"BNB",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0},{key:"bsc",value:"BSC",balance:0}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"token-selector",children:[Object(f.jsx)("div",{className:"token-selector-title",children:i}),Object(f.jsxs)("div",{className:"token-selector-value mt-5",onClick:function(){t&&h(!0)},children:[Object(f.jsx)("span",{children:null===s||void 0===s?void 0:s.value}),Object(f.jsx)("span",{className:"token-selector-expand",children:t&&Object(f.jsx)(j,{width:40,height:40})})]})]}),v&&Object(f.jsxs)(r.f,{width:"100",style:{maxWidth:"400px"},title:i,open:v,onClose:function(){h(!1)},children:[Object(f.jsxs)(r.p,{hasBorder:!0,value:y,onChange:function(e){k(e)},children:[Object(f.jsx)(r.i,{children:"ERC-20"}),Object(f.jsx)(r.i,{children:"Add Token"})]}),Object(f.jsxs)(r.j,{value:y,index:0,children:[Object(f.jsx)(r.e,{className:"my-10",placeHolder:"Search",suffix:Object(f.jsx)(b.a,{width:17,height:17}),value:null===p||void 0===p?void 0:p.search,name:"search",onChange:L,autoComplete:"off",style:{padding:"5px 10px"}}),Object(f.jsxs)("div",{className:"token-selector-list",children:[Object(f.jsxs)("div",{className:"token-selector-list-title",children:[Object(f.jsx)("span",{children:i}),Object(f.jsx)("span",{children:"Balance"})]}),Object(f.jsx)("div",{className:"token-selector-list-items",children:null===w||void 0===w?void 0:w.map((function(e){return Object(f.jsxs)("div",{className:"token-selector-list-item",onClick:function(){t&&t(e),h(!1)},children:[Object(f.jsx)("div",{className:"oken-selector-list-item-title",children:e.value}),Object(f.jsx)("div",{className:"oken-selector-list-item-value",children:e.balance})]},e.key)}))})]})]}),Object(f.jsxs)(r.j,{value:y,index:1,children:[Object(f.jsx)(r.e,{className:"my-10",label:"Contract Address",value:null===p||void 0===p?void 0:p.contractAddress,name:"contractAddress",onChange:L,autoComplete:"off"}),Object(f.jsx)("div",{className:"token-add-placholder"}),Object(f.jsx)("div",{className:"token-add-fotter",children:Object(f.jsx)(r.a,{onClick:function(){},width:r.c.FIT_PARENT,children:"Add Token"})})]})]})]})}},1155:function(e,t,n){},1174:function(e,t,n){},1175:function(e,t,n){},1176:function(e,t,n){},1193:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i,l=n(22),a=n(165),c=n(1),r=["title","titleId"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function d(e,t){var n=e.title,l=e.titleId,a=s(e,r);return c.createElement("svg",o({width:20,height:20,viewBox:"0 0 20 20",fill:"#FFFFFFCC",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},a),n?c.createElement("title",{id:l},n):null,i||(i=c.createElement("path",{d:"M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66 17.4698 9.34 17.4298 9.02L19.5398 7.37C19.7298 7.22 19.7798 6.95 19.6598 6.73L17.6598 3.27C17.5698 3.11 17.3998 3.02 17.2198 3.02C17.1598 3.02 17.0998 3.03 17.0498 3.05L14.5598 4.05C14.0398 3.65 13.4798 3.32 12.8698 3.07L12.4898 0.42C12.4598 0.18 12.2498 0 11.9998 0H7.99984C7.74984 0 7.53984 0.18 7.50984 0.42L7.12984 3.07C6.51984 3.32 5.95984 3.66 5.43984 4.05L2.94984 3.05C2.88984 3.03 2.82984 3.02 2.76984 3.02C2.59984 3.02 2.42984 3.11 2.33984 3.27L0.339839 6.73C0.209839 6.95 0.26984 7.22 0.45984 7.37L2.56984 9.02C2.52984 9.34 2.49984 9.67 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.42984 16.89 2.59984 16.98 2.77984 16.98C2.83984 16.98 2.89984 16.97 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.1098 16.97 17.1698 16.98 17.2298 16.98C17.3998 16.98 17.5698 16.89 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM15.4498 9.27C15.4898 9.58 15.4998 9.79 15.4998 10C15.4998 10.21 15.4798 10.43 15.4498 10.73L15.3098 11.86L16.1998 12.56L17.2798 13.4L16.5798 14.61L15.3098 14.1L14.2698 13.68L13.3698 14.36C12.9398 14.68 12.5298 14.92 12.1198 15.09L11.0598 15.52L10.8998 16.65L10.6998 18H9.29984L9.10984 16.65L8.94984 15.52L7.88984 15.09C7.45984 14.91 7.05984 14.68 6.65984 14.38L5.74984 13.68L4.68984 14.11L3.41984 14.62L2.71984 13.41L3.79984 12.57L4.68984 11.87L4.54984 10.74C4.51984 10.43 4.49984 10.2 4.49984 10C4.49984 9.8 4.51984 9.57 4.54984 9.27L4.68984 8.14L3.79984 7.44L2.71984 6.6L3.41984 5.39L4.68984 5.9L5.72984 6.32L6.62984 5.64C7.05984 5.32 7.46984 5.08 7.87984 4.91L8.93984 4.48L9.09984 3.35L9.29984 2H10.6898L10.8798 3.35L11.0398 4.48L12.0998 4.91C12.5298 5.09 12.9298 5.32 13.3298 5.62L14.2398 6.32L15.2998 5.89L16.5698 5.38L17.2698 6.59L16.1998 7.44L15.3098 8.14L15.4498 9.27ZM9.99984 6C7.78984 6 5.99984 7.79 5.99984 10C5.99984 12.21 7.78984 14 9.99984 14C12.2098 14 13.9998 12.21 13.9998 10C13.9998 7.79 12.2098 6 9.99984 6ZM9.99984 12C8.89984 12 7.99984 11.1 7.99984 10C7.99984 8.9 8.89984 8 9.99984 8C11.0998 8 11.9998 8.9 11.9998 10C11.9998 11.1 11.0998 12 9.99984 12Z",fill:"#FFFFFFCC",fillOpacity:.8})))}var u=c.forwardRef(d),v=(n.p,n(1174),n(40)),j=n(5),b=(n(1175),n(1147)),f=n(0),h=function(e){var t=e.open,n=e.onClose,i=e.onConfirm,r=e.type,o=void 0===r?"normal":r,s=Object(c.useState)({deadline:0,slippage:0,confirmations:20}),d=Object(l.a)(s,2),u=d[0],h=d[1],m=function(e){var t=e.target,n=t.name,i=t.value,l=Object(b.c)(""+i);Object(b.b)(""+i)&&h(Object(j.a)(Object(j.a)({},u),{},Object(v.a)({},n,l)))};return Object(f.jsxs)(a.d,{width:"100",style:{maxWidth:"348px"},title:"Advanced Settings",open:t,onClose:n,onCancel:n,onConfirm:function(){return i(u)},confirmTitle:"Save",cancelTitle:"Cancel",children:[Object(f.jsx)(a.e,{className:"my-10",label:"Exchange Deadline (Mins)",value:Object(b.a)(null===u||void 0===u?void 0:u.deadline),name:"deadline",onChange:m,autoComplete:"off"}),Object(f.jsx)(a.e,{className:"my-10",value:Object(b.a)(null===u||void 0===u?void 0:u.slippage),name:"slippage",label:"Tolerated Slippage (%)",onChange:m,autoComplete:"off"}),"fast"===o&&Object(f.jsx)(a.e,{className:"my-10",value:Object(b.a)(null===u||void 0===u?void 0:u.confirmations),name:"confirmations",label:"Confirmations Required",onChange:m,autoComplete:"off"})]})},m=function(e){var t=e.children,n=e.title,i=e.description,r=e.submitTitle,o=e.onSubmit,s=e.haveSetting,d=e.isLoading,v=Object(c.useState)(!1),j=Object(l.a)(v,2),b=j[0],m=j[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"ui-box",children:[Object(f.jsxs)("div",{className:"ui-box-header",children:[Object(f.jsx)("div",{className:"ui-box-header-title",children:n}),Object(f.jsx)("div",{className:"ui-box-header-setting",title:"Advanced Settings",children:s&&Object(f.jsx)(u,{onClick:function(){return m(!0)}})})]}),Object(f.jsxs)("div",{className:"ui-box-body",children:[Object(f.jsx)("div",{className:"ui-box-body-description",children:i}),t]}),Object(f.jsx)("div",{className:"ui-box-footer",children:Object(f.jsx)(a.a,{onClick:o,width:a.c.FIT_PARENT,children:d?"please wait ...":r})})]}),b&&Object(f.jsx)(h,{open:b,onClose:function(){return m(!1)},onConfirm:function(){return m(!1)},type:"fast"})]})}},1194:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(1176);var i=n(0),l=function(e){var t=e.list;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"details-list",children:Object(i.jsx)("div",{className:"details-list-items",children:null===t||void 0===t?void 0:t.map((function(e){return Object(i.jsxs)("div",{className:"details-list-item",children:[Object(i.jsx)("div",{className:"details-list-item-title",children:e.title}),Object(i.jsx)("div",{className:"details-list-item-value",children:e.value})]},e.value)}))})})})}},1342:function(e,t,n){},1615:function(e,t,n){"use strict";n.r(t);var i=n(40),l=n(5),a=n(22),c=n(1),r=n(1193),o=n(165),s=n(1147),d=n(1154),u=n(1194),v=n(293),j=(n(1342),n(0));t.default=function(){var e=Object(c.useState)({amount:0,inputToken:{key:"bsc",value:"BSC"},receivedAmount:0,outputToken:{key:"bsc",value:"BSC"},receiverAddress:"",transferType:0}),t=Object(a.a)(e,2),n=t[0],b=t[1],f=function(e){var t=e.target,a=t.name,c=t.value,r=Object(s.c)(""+c),o=Object(s.b)(""+c);"receiverAddress"!==a&&"inputToken"!==a&&"outputToken"!==a||b(Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},a,c))),o&&b(Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},a,r)))};return Object(j.jsxs)("div",{className:"cross-chain-exchange",children:[Object(j.jsxs)(v.a,{children:[Object(j.jsx)("title",{children:" Cross-Chain Exchange "}),Object(j.jsx)("meta",{name:"description",content:"Cross-Chain Exchange"})]}),Object(j.jsxs)(r.a,{title:"Cross-Chain Exchange",description:"Exchange tokens from [[Chain A]] to tokens in [[Chain B]]",submitTitle:"Cross-Chain Exchange",haveSetting:!0,children:[Object(j.jsxs)("div",{className:"transfer-type",children:[Object(j.jsx)("div",{className:"transfer-type-title",children:"Transfer Type"}),Object(j.jsx)(o.h,{value:n.transferType,onChange:function(e){return e},className:"row",children:[{value:"Normal",key:0},{value:"Fast",key:1},{value:"Instant",key:2}].map((function(e){return Object(j.jsx)(o.g,{value:e.key,onClick:f,className:"col-md-2",style:{width:"fit-content"},name:"transferType",children:e.value},e.value)}))})]}),Object(j.jsx)(o.e,{prefix:Object(j.jsx)(d.a,{title:"Input Token",onChangeValue:function(e){f({target:{name:"inputToken",value:e}})},token:null===n||void 0===n?void 0:n.inputToken}),className:"my-10",label:"Amount",value:Object(s.a)(null===n||void 0===n?void 0:n.amount),name:"amount",onChange:f,autoComplete:"off"}),Object(j.jsx)(o.e,{prefix:Object(j.jsx)(d.a,{title:"Output Token",onChangeValue:function(e){f({target:{name:"outputToken",value:e}})},token:null===n||void 0===n?void 0:n.outputToken}),className:"my-10",label:"Expected Received Amount",value:Object(s.a)(null===n||void 0===n?void 0:n.receivedAmount),name:"receivedAmount",onChange:f,autoComplete:"off"}),Object(j.jsx)(o.e,{className:"my-10",label:"Receiver Address",value:null===n||void 0===n?void 0:n.receiverAddress,name:"receiverAddress",onChange:f,autoComplete:"off"}),Object(j.jsx)(u.a,{list:[{title:"Swap Rate",value:"1.2038475"},{title:"Minimum Received Amount",value:"1.234556"},{title:"Price Impact",value:"1.234556"},{title:"Fees",value:"1.234556"}]})]})]})}}}]);