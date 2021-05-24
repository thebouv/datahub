(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6695],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2735:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,{b:function(){return r},Z:function(){return n}})},9524:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return o}});var r=a(9962),n=a(2735);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(l)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+p:p}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5406:function(e,t,a){"use strict";var r=a(7294).createContext(void 0);t.Z=r},4087:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(2122),n=a(9756),i=a(7294),o=a(6010),l=a(9962),s=a(8002),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},p=function(e){var t=(0,l.default)().isClient,a=(0,s.Z)().isDarkTheme,p=e.sources,c=e.className,m=e.alt,h=void 0===m?"":m,d=(0,n.Z)(e,["sources","className","alt"]),k=t?a?["dark"]:["light"]:["light","dark"];return i.createElement(i.Fragment,null,k.map((function(e){return i.createElement("img",(0,r.Z)({key:e,src:p[e],alt:h,className:(0,o.Z)(u.themedImage,u["themedImage--"+e],c)},d))})))}},8002:function(e,t,a){"use strict";var r=a(7294),n=a(5406);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1674:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},Logo:function(){return m},default:function(){return d}});var r=a(9756),n=a(2122),i=(a(7294),a(3905)),o=a(4087),l=a(9524),s=a(9962),u={description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems.",title:"Introduction",sidebar_label:"Introduction",slug:"/",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/README.md"},p={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Introduction",description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems.",source:"@site/genDocs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/linkedin/datahub/blob/master/README.md",version:"current",sidebar_label:"Introduction",frontMatter:{description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems.",title:"Introduction",sidebar_label:"Introduction",slug:"/",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/README.md"},sidebar:"overviewSidebar",next:{title:"DataHub FAQs",permalink:"/docs/faq"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Demo and Screenshots",id:"demo-and-screenshots",children:[]},{value:"Source Code and Repositories",id:"source-code-and-repositories",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Releases",id:"releases",children:[]},{value:"FAQs",id:"faqs",children:[]},{value:"Features &amp; Roadmap",id:"features--roadmap",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"Community",id:"community",children:[]},{value:"Adoption",id:"adoption",children:[]},{value:"Select Articles &amp; Talks",id:"select-articles--talks",children:[]},{value:"License",id:"license",children:[]}],m=function(e){var t=(0,s.default)().siteConfig;return(0,i.kt)(o.Z,(0,n.Z)({alt:"DataHub Logo",sources:{light:(0,l.Z)(t.themeConfig.navbar.logo.src),dark:(0,l.Z)(t.themeConfig.navbar.logo.srcDark)}},e,{mdxType:"ThemedImage"}))},h={toc:c,Logo:m};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{style:{maxWidth:"16em",margin:"0 auto"},mdxType:"Logo"}),(0,i.kt)("h1",{id:"datahub-a-generalized-metadata-search--discovery-tool"},"DataHub: A Generalized Metadata Search & Discovery Tool"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/releases/latest"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/linkedin/datahub?include_prereleases",alt:"Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions?query=workflow%3A%22build+%26+test%22+branch%3Amaster+event%3Apush"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/workflows/build%20&%20test/badge.svg?branch=master&event=push",alt:"build & test"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linkedin/datahub-gms"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/linkedin/datahub-gms.svg",alt:"Docker Pulls"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social",alt:"Slack"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docs/CONTRIBUTING.md"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg",alt:"PRs Welcome"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/pulls?q=is%3Apr"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/commit-activity/m/linkedin/datahub",alt:"GitHub commit activity"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/linkedin/datahub",alt:"License"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UC3qFQC5IiwR5fvWEqi_tJ5w"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/youtube/channel/subscribers/UC3qFQC5IiwR5fvWEqi_tJ5w?style=social",alt:"YouTube"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/datahub-project"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white",alt:"Medium"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/datahubproject"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/datahubproject?label=Follow&style=social",alt:"Follow"}))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Quickstart")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"Documentation")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/features"},"Features")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/roadmap"},"Roadmap")," |\n",(0,i.kt)("a",{parentName:"p",href:"#adoption"},"Adoption")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/faq"},"FAQ")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/demo"},"Demo")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/townhalls"},"Town Hall")),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udce3\u2002Next DataHub town hall meeting on May 27th, 9am-10am PDT (",(0,i.kt)("a",{parentName:"p",href:"https://greenwichmeantime.com/time/to/pacific-local/"},"convert to your local time"),")"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Topic Proposals: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1v2ynbAXjJlqY97xE_X1DAntNrXDznOFiNfryUkMPtkI/"},"submit here")),(0,i.kt)("li",{parentName:"ul"},"Signup to get a calendar invite: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1r9bObXKS3tgKpISqqO3rw4yQog5zwuaFxg8IrJGUbvQ/"},"here")),(0,i.kt)("li",{parentName:"ul"},"Town-hall Zoom link: ",(0,i.kt)("a",{parentName:"li",href:"https://zoom.datahubproject.io"},"zoom.datahubproject.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/townhalls"},"Meeting details")," & ",(0,i.kt)("a",{parentName:"li",href:"/docs/townhall-history"},"past recordings")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2728\u2002Latest Update:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Monthly project update: ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/datahub-project/linkedin-datahub-project-updates-2b0d26066b8f?source=friends_link&sk=686c47219ed294e0838ae3e2fe29084d"},"Apr 2021 Edition"),"."),(0,i.kt)("li",{parentName:"ul"},"Unleashing Excellent DataOps with LinkedIn DataHub: ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ccsIKK9nVxk"},"DataOps Unleashed Talk"),"."),(0,i.kt)("li",{parentName:"ul"},"Latest blog post ",(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"DataHub: Popular Metadata Architectures Explained")," @ LinkedIn Engineering Blog."),(0,i.kt)("li",{parentName:"ul"},"We've released v0.7.1. You can find release notes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/releases/tag/v0.7.1"},"here")),(0,i.kt)("li",{parentName:"ul"},"We're on ",(0,i.kt)("a",{parentName:"li",href:"/docs/slack"},"Slack")," now! Ask questions and keep up with the latest announcements."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"DataHub is LinkedIn's generalized metadata search & discovery tool. Read about the architectures of different metadata systems and why DataHub excels ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"here"),". Also read our\n",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2019/data-hub"},"LinkedIn Engineering blog post"),", check out our ",(0,i.kt)("a",{parentName:"p",href:"https://speakerdeck.com/shirshanka/the-evolution-of-metadata-linkedins-journey-strata-nyc-2019"},"Strata presentation")," and watch our ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OB-O0Y6OYDE"},"Crunch Conference Talk"),". You should also visit ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/architecture"},"DataHub Architecture")," to get a better understanding of how DataHub is implemented and ",(0,i.kt)("a",{parentName:"p",href:"/docs/how/entity-onboarding"},"DataHub Onboarding Guide")," to understand how to extend DataHub for your own use cases."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Please follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"DataHub Quickstart Guide")," to get a copy of DataHub up & running locally using ",(0,i.kt)("a",{parentName:"p",href:"https://docker.com"},"Docker"),'. As the guide assumes some basic knowledge of Docker, we\'d recommend you to go through the "Hello World" example of ',(0,i.kt)("a",{parentName:"p",href:"https://docker-curriculum.com"},"A Docker Tutorial for Beginners")," if Docker is completely foreign to you."),(0,i.kt)("h2",{id:"demo-and-screenshots"},"Demo and Screenshots"),(0,i.kt)("p",null,"There's a ",(0,i.kt)("a",{parentName:"p",href:"/docs/demo"},"hosted demo environment")," where you can play around with DataHub before installing."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/demo"},(0,i.kt)("img",{alt:"DataHub Demo GIF",src:a(2306).Z}))),(0,i.kt)("h2",{id:"source-code-and-repositories"},"Source Code and Repositories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub"},"linkedin/datahub"),": This repository contains the complete source code for both DataHub's frontend & backend services. We currently follow a hybrid open source model for development in this repository. See ",(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/open-sourcing-datahub--linkedins-metadata-search-and-discovery-p"},"this blog post")," for details on how we do it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub-gma"},"linkedin/datahub-gma"),": This repository contains the source code for DataHub's metadata infrastructure libraries (Generalized Metadata Architecture, or GMA). We follow an open-source-first model for development in this repository.")),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"We have documentation available at ",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"https://datahubproject.io/docs/"),"."),(0,i.kt)("h2",{id:"releases"},"Releases"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/releases"},"Releases")," page for more details. We follow the ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org"},"SemVer Specification")," when versioning the releases and adopt the ",(0,i.kt)("a",{parentName:"p",href:"https://keepachangelog.com/"},"Keep a Changelog convention")," for the changelog format."),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,"Frequently Asked Questions about DataHub can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/faq"},"here"),"."),(0,i.kt)("h2",{id:"features--roadmap"},"Features & Roadmap"),(0,i.kt)("p",null,"Check out DataHub's ",(0,i.kt)("a",{parentName:"p",href:"/docs/features"},"Features")," & ",(0,i.kt)("a",{parentName:"p",href:"/docs/roadmap"},"Roadmap"),"."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"We welcome contributions from the community. Please refer to our ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"Contributing Guidelines")," for more details. We also have a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/contrib"},"contrib")," directory for incubating experimental features."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Join our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"slack workspace")," for discussions and important announcements. You can also find out more about our upcoming ",(0,i.kt)("a",{parentName:"p",href:"/docs/townhalls"},"town hall meetings")," and view past recordings."),(0,i.kt)("h2",{id:"adoption"},"Adoption"),(0,i.kt)("p",null,"Here are the companies that have officially adopted DataHub. Please feel free to add yours to the list if we missed it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://expedia.com"},"Expedia Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.experius.nl"},"Experius")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.geotab.com"},"Geotab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grofers.com"},"Grofers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.klarna.com"},"Klarna")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://linkedin.com"},"LinkedIn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.home.saxo"},"Saxo Bank")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.shrbank.com"},"Shanghai HuaRui Bank")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.thoughtworks.com"},"ThoughtWorks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://typeform.com"},"TypeForm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://viasat.com"},"Viasat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wolt.com"},"Wolt"))),(0,i.kt)("p",null,"Here is a list of companies that are currently building POC or seriously evaluating DataHub."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.amadeus.com"},"Amadeus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bizzy.co.id"},"Bizzy Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.booking.com"},"Booking.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www1.nyc.gov/site/doitt/index.page"},"City of New York, DoITT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.experian.com"},"Experian")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.flixbus.com"},"FlixBus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kindredgroup.com"},"Kindred Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.instructure.com"},"Instructure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.inventec.com"},"Inventec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://microsoft.com"},"Microsoft")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.morganstanley.com"},"Morgan Stanley")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.orange.com"},"Orange Telecom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plumresearch.com"},"Plum Research")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reeftechnology.com"},"REEF Technology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spothero.com"},"SpotHero")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sysco.no"},"Sysco AS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phoenix.edu"},"University of Phoenix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.vectice.com"},"Vectice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sayweee.com"},"Weee!"))),(0,i.kt)("h2",{id:"select-articles--talks"},"Select Articles & Talks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2019/data-hub"},"DataHub: A Generalized Metadata Search & Discovery Tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"DataHub: Popular Metadata Architectures Explained")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/open-sourcing-datahub--linkedins-metadata-search-and-discovery-p"},"Open sourcing DataHub: LinkedIn\u2019s metadata search and discovery platform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ccsIKK9nVxk"},"Driving DataOps Culture with LinkedIn DataHub")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://dataopsunleashed.com/#shirshanka-session"},"DataOps Unleashed 2021")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:a(5510).Z},"DataHub: Powering LinkedIn's Metadata")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://budapestdata.hu/2020/en/"},"Budapest Data Forum 2020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bo4OhiPro7Y"},"Taming the Data Beast Using DataHub")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/Data-Engineering-Melbourne/events/kgnvlrybcpbjc/"},"Data Engineering Melbourne Meetup November 2020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dataengineeringpodcast.com/datahub-metadata-management-episode-147/"},"Metadata Management And Integration At LinkedIn With DataHub")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://www.dataengineeringpodcast.com"},"Data Engineering Podcast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://speakerdeck.com/shirshanka/the-evolution-of-metadata-linkedins-journey-strata-nyc-2019"},"The evolution of metadata: LinkedIn\u2019s story")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://conferences.oreilly.com/strata/strata-ny-2019.html"},"Strata Data Conference 2019")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OB-O0Y6OYDE"},"Journey of metadata at LinkedIn")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://crunchconf.com/2019"},"Crunch Data Conference 2019")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ajcRdB22s5o"},"DataHub Journey with Expedia Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.slideshare.net/SheetalPratik/linkedinsaxobankdataworkbench"},"Saxo Bank's Data Workbench")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.slideshare.net/MaggieHays/data-discoverability-at-spothero"},"Data Discoverability at SpotHero")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/albert-franzi/data-catalogue-knowing-your-data-15f7d0724900"},"Data Catalogue \u2014 Knowing your data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@liangjunjiang/linkedin-datahub-application-architecture-quick-understanding-a5b7868ee205"},"LinkedIn DataHub Application Architecture Quick Understanding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.holistics.io/blog/a-dive-into-metadata-hubs/"},"A Dive Into Metadata Hubs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.amplifypartners.com/25-hot-new-data-tools-and-what-they-dont-do/"},"25 Hot New Data Tools and What They DON\u2019T Do")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://a16z.com/2020/10/15/the-emerging-architectures-for-modern-data-infrastructure/"},"Emerging Architectures for Modern Data Infrastructure"))),(0,i.kt)("p",null,"See the full list ",(0,i.kt)("a",{parentName:"p",href:"/docs/links"},"here"),"."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/LICENSE"},"Apache License 2.0"),"."))}d.isMDXComponent=!0},6010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})},5510:function(e,t,a){"use strict";t.Z=a.p+"assets/files/DataHub_-_Powering_LinkedIn_Metadata-40ed71316364cd28772b41bdf9f71d94.pdf"},2306:function(e,t,a){"use strict";t.Z=a.p+"assets/images/demo_large-ba28dc4bf2442da72d863c90c94709f4.gif"}}]);