(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5117:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],d={},o={unversionedId:"api_reference/available_purchase",id:"api_reference/available_purchase",isDocsHomePage:!1,title:"AvailablePurchase",description:"Property                           | Type      | iOS | And | Comment",source:"@site/docs/api_reference/available_purchase.md",sourceDirName:"api_reference",slug:"/api_reference/available_purchase",permalink:"/docs/api_reference/available_purchase",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api_reference/available_purchase.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using hooks",permalink:"/docs/usage_instructions/using_hooks"},next:{title:"Available Methods",permalink:"/docs/api_reference/methods"}},p=[],c={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"And"),(0,i.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"productId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"The product ID for the product.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"transactionReceipt")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS"),": The ",(0,i.kt)("inlineCode",{parentName:"td"},"receipt"),". ",(0,i.kt)("strong",{parentName:"td"},"Android"),": Stringified JSON of the original purchase object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"transactionId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique order identifier for the transaction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"transactionDate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"originalTransactionDateIOS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"For a transaction that restores a previous transaction, the date of the original transaction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"originalTransactionIdentifierIOS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"For a transaction that restores a previous transaction, the transaction identifier of the original transaction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"purchaseToken")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"A token that uniquely identifies a purchase for a given item and user pair.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"autoRenewingAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the subscription renews automatically. If true, the subscription is active, and will automatically renew on the next billing date. Otherwise, indicates that the user has canceled the subscription.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dataAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"Original json for purchase data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"signatureAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"The signature of the purchase data that was signed with the private key of the developer. The data signature uses the ",(0,i.kt)("inlineCode",{parentName:"td"},"RSASSA-PKCS1-v1_5")," scheme.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isAcknowledgedAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"Checking if purchase has been acknowledged.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"purchaseStateAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicating purchase state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"packageNameAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"Get package name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"developerPayloadAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/google/play/billing/developer-payload"},"https://developer.android.com/google/play/billing/developer-payload"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"obfuscatedAccountIdAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountidBuilder#setobfuscatedaccountId"},"https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountidBuilder#setobfuscatedaccountId"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"obfuscatedProfileIdAndroid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid"},"https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid"))))),(0,i.kt)("p",null,"You need to test with one sandbox account, because the account holds previous purchase history."))}m.isMDXComponent=!0}}]);