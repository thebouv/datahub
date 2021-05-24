(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[293],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return h},kt:function(){return p}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),l=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},h=function(e){var a=l(e.components);return r.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=n,m=u["".concat(d,".").concat(p)]||u[p]||c[p]||i;return t?r.createElement(m,o(o({ref:a},h),{},{components:t})):r.createElement(m,o({ref:a},h))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3610:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var r=t(2122),n=t(9756),i=(t(7294),t(3905)),o={title:"Dashboards",sidebar_label:"Dashboards",slug:"/rfc/active/1778-dashboards",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/1778-dashboards/README.md"},s={unversionedId:"docs/rfc/active/dashboards/README",id:"docs/rfc/active/dashboards/README",isDocsHomePage:!1,title:"Dashboards",description:"- Start Date: 2020-08-03",source:"@site/genDocs/docs/rfc/active/1778-dashboards/README.md",sourceDirName:"docs/rfc/active/1778-dashboards",slug:"/rfc/active/1778-dashboards",permalink:"/docs/rfc/active/1778-dashboards",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/1778-dashboards/README.md",version:"current",sidebar_label:"Dashboards",frontMatter:{title:"Dashboards",sidebar_label:"Dashboards",slug:"/rfc/active/1778-dashboards",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/1778-dashboards/README.md"},sidebar:"overviewSidebar",previous:{title:"DataHub RFC Process",permalink:"/docs/rfc"},next:{title:"Machine Learning Models",permalink:"/docs/rfc/active/1812-ml_models"}},d=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Non-goals",id:"non-goals",children:[]},{value:"Detailed design",id:"detailed-design",children:[{value:"Entities",id:"entities",children:[]},{value:"URN Representation",id:"urn-representation",children:[]},{value:"Chart metadata",id:"chart-metadata",children:[]},{value:"Dashboard metadata",id:"dashboard-metadata",children:[]},{value:"Metadata graph",id:"metadata-graph",children:[]}]},{value:"How we teach this",id:"how-we-teach-this",children:[]},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[]},{value:"Unresolved questions (To-do)",id:"unresolved-questions-to-do",children:[]}],l={toc:d};function h(e){var a=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start Date: 2020-08-03"),(0,i.kt)("li",{parentName:"ul"},"RFC PR: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/pull/1778"},"https://github.com/linkedin/datahub/pull/1778")),(0,i.kt)("li",{parentName:"ul"},"Implementation PR(s): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/pull/1775"},"https://github.com/linkedin/datahub/pull/1775"))),(0,i.kt)("h1",{id:"dashboards"},"Dashboards"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Adding support for dashboards (and charts) metadata cataloging and enabling search & discovery for them.\nThe design should accommodate for different dashboarding (",(0,i.kt)("a",{parentName:"p",href:"https://looker.com"},"Looker"),", ",(0,i.kt)("a",{parentName:"p",href:"https://redash.io/"},"Redash"),") tools used within a company."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Dashboards are a key piece within a data ecosystem of a company. They are used by different groups of employees across different organizations.\nThey provide a way to visualize some data assets (tracking datasets or metrics) by allowing slice and dicing of the input data source.\nWhen a company scales, data assets including dashboards gets richer and bigger. Therefore, it's important to find and access to the right dashboard."),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"By having dashboards as a top-level entity in DataHub, we achieve below goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enabling Search & Discovery for dashboard assets by using dashboard metadata"),(0,i.kt)("li",{parentName:"ul"},"Link dashboards to underlying data sources and have a more complete picture of data lineage")),(0,i.kt)("h2",{id:"non-goals"},"Non-goals"),(0,i.kt)("p",null,"DataHub will only serve as a catalog for dashboards where users search dashboards by using keywords.\nEntity page for a dashboard might contain links to the dashboard to direct users to view the dashboard after finding it.\nHowever, DataHub will not try to show the actual dashboard or any charts within that. This is not desired and shouldn't be allowed because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dashboards or charts within a dashboard might have different ACLs that prevent users without the necessary permission to display the dashboard.\nGenerally, the source of truth for these ACLs are dashboarding tools."),(0,i.kt)("li",{parentName:"ul"},"Underlying data sources might have some ACLs too. Again, the source of truth for these ACLs are specific data platforms.")),(0,i.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"high level design",src:t(6119).Z})),(0,i.kt)("p",null,"As shown in the above diagram, dashboards are composed of a collection of charts at a very high level. These charts\ncould be shared by different dashboards. In the example sketched above, ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart_1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart_2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart_3")," are part of\n",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard_A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart_3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chart_4")," are part of ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard_B"),"."),(0,i.kt)("h3",{id:"entities"},"Entities"),(0,i.kt)("p",null,"There will be 2 top level GMA ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," in the design: dashboards and charts.\nIt's important to make charts as a top level entity because charts could be shared between different dashboards.\nWe'll need to build ",(0,i.kt)("inlineCode",{parentName:"p"},"Contains")," relationships between Dashboard and Chart entities."),(0,i.kt)("h3",{id:"urn-representation"},"URN Representation"),(0,i.kt)("p",null,"We'll define two ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/urn"},"URNs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DashboardUrn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChartUrn"),".\nThese URNs should allow for unique identification for dashboards and charts even there are multiple dashboarding tools\nare used within a company. Most of the time, dashboards & charts are given unique ids by the used dashboarding tool.\nAn example Dashboard URN for Looker will look like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:dashboard:(Looker,<<dashboard_id>>)\n")),(0,i.kt)("p",null,"An example Chart URN for Redash will look like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:chart:(Redash,<<chart_id>>)\n")),(0,i.kt)("h3",{id:"chart-metadata"},"Chart metadata"),(0,i.kt)("p",null,"Dashboarding tools generally have different jargon to denote a chart.\nThey are called as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.looker.com/exploring-data/saving-and-editing-looks"},"Look")," in Looker\nand ",(0,i.kt)("a",{parentName:"p",href:"https://redash.io/help/user-guide/visualizations/visualization-types"},"Visualization")," in Redash.\nBut, irrespective of the name, charts are the different tiles which exists in a dashboard.\nCharts are mainly used for delivering some information visually to make it easily understandable.\nThey might be using single or multiple data sources and generally have an associated query running against\nthe underlying data source to generate the data that it will present."),(0,i.kt)("p",null,"Below is a list of metadata which can be associated with a chart:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Title"),(0,i.kt)("li",{parentName:"ul"},"Description"),(0,i.kt)("li",{parentName:"ul"},"Type (Bar chart, Pie chart, Scatter plot etc.)"),(0,i.kt)("li",{parentName:"ul"},"Input sources"),(0,i.kt)("li",{parentName:"ul"},"Query (and its type)"),(0,i.kt)("li",{parentName:"ul"},"Access level (public, private etc.)"),(0,i.kt)("li",{parentName:"ul"},"Ownership"),(0,i.kt)("li",{parentName:"ul"},"Status (removed or not)"),(0,i.kt)("li",{parentName:"ul"},"Audit info (last modified, last refreshed)")),(0,i.kt)("h3",{id:"dashboard-metadata"},"Dashboard metadata"),(0,i.kt)("p",null,"Aside from containing a set of charts, dashboards carry metadata attached to them.\nBelow is a list of metadata which can be associated with a dashboard:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Title"),(0,i.kt)("li",{parentName:"ul"},"Description"),(0,i.kt)("li",{parentName:"ul"},"List of charts"),(0,i.kt)("li",{parentName:"ul"},"Access level (public, private etc.)"),(0,i.kt)("li",{parentName:"ul"},"Ownership"),(0,i.kt)("li",{parentName:"ul"},"Status (removed or not)"),(0,i.kt)("li",{parentName:"ul"},"Audit info (last modified, last refreshed)")),(0,i.kt)("h3",{id:"metadata-graph"},"Metadata graph"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboards_graph",src:t(3997).Z})),(0,i.kt)("p",null,"An example metadata graph showing complete data lineage picture is shown above.\nIn this picture, ",(0,i.kt)("inlineCode",{parentName:"p"},"Dash_A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dash_B")," are dashboards, and they are connected to charts through ",(0,i.kt)("inlineCode",{parentName:"p"},"Contains")," edges.\n",(0,i.kt)("inlineCode",{parentName:"p"},"C1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C4")," are charts, and they are connected to underlying datasets through ",(0,i.kt)("inlineCode",{parentName:"p"},"DownstreamOf")," edges.\n",(0,i.kt)("inlineCode",{parentName:"p"},"D1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"D2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"D3")," are datasets."),(0,i.kt)("h2",{id:"how-we-teach-this"},"How we teach this"),(0,i.kt)("p",null,"We should create/update user guides to educate users for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Search & discovery experience (how to find a dashboard in DataHub)"),(0,i.kt)("li",{parentName:"ul"},"Lineage experience (how to find upstream datasets of a dashboard and how to find dashboards generated from a dataset)")),(0,i.kt)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),(0,i.kt)("p",null,"The design is supposed to be generic enough that any user of the DataHub should easily be able\nto onboard their dashboard metadata to DataHub irrespective of their dashboarding platform."),(0,i.kt)("p",null,"Only thing users will need to do is to write an ETL script customized for their\ndashboarding platform (if it's not already provided in DataHub repo). This ETL script will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extract the metadata for all available dashboards and charts using the APIs of the dashboarding platform"),(0,i.kt)("li",{parentName:"ul"},"Construct and emit this metadata in the form of ",(0,i.kt)("a",{parentName:"li",href:"/docs/what/mxe"},"MCEs"))),(0,i.kt)("h2",{id:"unresolved-questions-to-do"},"Unresolved questions (To-do)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We'll be adding social features like subscribe and follow later on. However, it's out of scope for this RFC.")))}h.isMDXComponent=!0},3997:function(e,a,t){"use strict";a.Z=t.p+"assets/images/dashboards_graph-0f3a35ce859304b6f840c42e52e9a465.png"},6119:function(e,a,t){"use strict";a.Z=t.p+"assets/images/high_level_design-b44382375910009ee76398685e8137aa.png"}}]);