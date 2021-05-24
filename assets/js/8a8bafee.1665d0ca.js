(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4764],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1958:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={title:"What is URN?",sidebar_label:"What is URN?",slug:"/what/urn",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/urn.md"},s={unversionedId:"docs/what/urn",id:"docs/what/urn",isDocsHomePage:!1,title:"What is URN?",description:"URN (Uniform Resource Name) is the chosen scheme of URI to uniquely define any resource in DataHub. It has the following form",source:"@site/genDocs/docs/what/urn.md",sourceDirName:"docs/what",slug:"/what/urn",permalink:"/docs/what/urn",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/urn.md",version:"current",sidebar_label:"What is URN?",frontMatter:{title:"What is URN?",sidebar_label:"What is URN?",slug:"/what/urn",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/urn.md"},sidebar:"overviewSidebar",previous:{title:"What is a metadata aspect?",permalink:"/docs/what/aspect"},next:{title:"What is a relationship?",permalink:"/docs/what/relationship"}},l=[{value:"Namespace",id:"namespace",children:[]},{value:"Entity Type",id:"entity-type",children:[]},{value:"ID",id:"id",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"URN (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Name"},"Uniform Resource Name"),") is the chosen scheme of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"URI")," to uniquely define any resource in DataHub. It has the following form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:<Namespace>:<Entity Type>:<ID>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/how/entity-onboarding"},"Onboarding a new entity")," to ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," starts with modelling an URN specific to that entity.\nYou can use the existing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/li-utils/src/main/javaPegasus/com/linkedin/common/urn"},"URN models")," for built-in entities as a reference."),(0,i.kt)("h2",{id:"namespace"},"Namespace"),(0,i.kt)("p",null,"All URNs available in DataHub are using ",(0,i.kt)("inlineCode",{parentName:"p"},"li")," as their namespace.\nThis can be easily changed to a different namespace for your organization if you fork DataHub."),(0,i.kt)("h2",{id:"entity-type"},"Entity Type"),(0,i.kt)("p",null,"Entity type for URN is different than ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," in GMA context. This can be thought of as the object type of\nany resource for which you need unique identifier for its each instance. While you can create URNs for GMA entities such as\n","[DatasetUrn]"," with entity type ",(0,i.kt)("inlineCode",{parentName:"p"},"dataset"),", you can also define URN for data platforms, ","[DataPlatformUrn]","."),(0,i.kt)("h2",{id:"id"},"ID"),(0,i.kt)("p",null,"ID is the unique identifier part of a URN. It's unique for a specific entity type within a specific namespace.\nID could contain a single field, or multi fields in the case of complex URNs. A complex URN can even contain other URNs as ID fields. This type of URN is also referred to as nested URN. For non-URN ID fields, the value can be either a string, number, or ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema#enum-type"},"Pegasus Enum"),"."),(0,i.kt)("p",null,"Here are some example URNs with a single ID field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:dataPlatform:kafka\nurn:li:corpuser:jdoe\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/li-utils/src/main/javaPegasus/com/linkedin/common/urn/DatasetUrn.java"},"DatasetUrn")," is an example of a complex nested URN. It contains 3 ID fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fabric"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," is another ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/li-utils/src/main/javaPegasus/com/linkedin/common/urn/DataPlatformUrn.java"},"URN"),". Here are some examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:dataset:(urn:li:dataPlatform:kafka,PageViewEvent,PROD)\nurn:li:dataset:(urn:li:dataPlatform:hdfs,PageViewEvent,EI)\n")))}u.isMDXComponent=!0}}]);