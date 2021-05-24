(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1415],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7546:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o={title:"What is GMA graph?",sidebar_label:"What is GMA graph?",slug:"/what/graph",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/graph.md"},s={unversionedId:"docs/what/graph",id:"docs/what/graph",isDocsHomePage:!1,title:"What is GMA graph?",description:"All the entities and relationships are stored in a graph database, Neo4j.",source:"@site/genDocs/docs/what/graph.md",sourceDirName:"docs/what",slug:"/what/graph",permalink:"/docs/what/graph",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/graph.md",version:"current",sidebar_label:"What is GMA graph?",frontMatter:{title:"What is GMA graph?",sidebar_label:"What is GMA graph?",slug:"/what/graph",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/graph.md"},sidebar:"overviewSidebar",previous:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/metadata-ingestion/adding-source"},next:{title:"What is GMA search index?",permalink:"/docs/what/search-index"}},p=[],c={toc:p};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All the ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/relationship"},"relationships")," are stored in a graph database, Neo4j.\nThe graph always represents the current state of the world and has no direct support for versioning or history.\nHowever, as stated in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/how/metadata-modelling"},"Metadata Modeling")," section,\nthe graph is merely a derived view of all metadata ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"aspects")," thus can always be rebuilt directly from historic ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-audit-event-mae"},"MAEs"),".\nConsequently, it is possible to build a specific snapshot of the graph in time by replaying MAEs up to that point."),(0,i.kt)("p",null,"In theory, the system can work with any generic ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_transaction_processing"},"OLTP")," graph DB that supports the following operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamical creation, modification, and removal of nodes and edges"),(0,i.kt)("li",{parentName:"ul"},"Dynamical attachment of key-value properties to each node and edge"),(0,i.kt)("li",{parentName:"ul"},"Transactional partial updates of properties of a specific node or edge"),(0,i.kt)("li",{parentName:"ul"},"Fast ID-based retrieval of nodes & edges"),(0,i.kt)("li",{parentName:"ul"},"Efficient queries involving both graph traversal and properties value filtering"),(0,i.kt)("li",{parentName:"ul"},"Support efficient bidirectional graph traversal")))}l.isMDXComponent=!0}}]);