(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8883],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2813:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i={title:"DataHub Generalized Metadata Store (GMS)",sidebar_label:"Generalized Metadata Store (GMS)",slug:"/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/gms/README.md"},s={unversionedId:"gms/README",id:"gms/README",isDocsHomePage:!1,title:"DataHub Generalized Metadata Store (GMS)",description:"DataHub GMS is a Rest.li service written in Java. It is following common",source:"@site/genDocs/gms/README.md",sourceDirName:"gms",slug:"/gms",permalink:"/docs/gms",editUrl:"https://github.com/linkedin/datahub/blob/master/gms/README.md",version:"current",sidebar_label:"Generalized Metadata Store (GMS)",frontMatter:{title:"DataHub Generalized Metadata Store (GMS)",sidebar_label:"Generalized Metadata Store (GMS)",slug:"/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/gms/README.md"},sidebar:"overviewSidebar",previous:{title:"DataHub GraphQL Core",permalink:"/docs/datahub-graphql-core"},next:{title:"DataHub GMS GraphQL Service",permalink:"/docs/datahub-gms-graphql-service"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Start via Docker image",id:"start-via-docker-image",children:[]},{value:"Start via command line",id:"start-via-command-line",children:[]},{value:"API Documentation",id:"api-documentation",children:[]},{value:"Sample API Calls",id:"sample-api-calls",children:[{value:"Create user",id:"create-user",children:[]},{value:"Create group",id:"create-group",children:[]},{value:"Create dataset",id:"create-dataset",children:[]},{value:"Create chart",id:"create-chart",children:[]},{value:"Create dashboards",id:"create-dashboards",children:[]},{value:"Get all dataplatforms",id:"get-all-dataplatforms",children:[]},{value:"Get dataplatform",id:"get-dataplatform",children:[]},{value:"Get user",id:"get-user",children:[]},{value:"Get group",id:"get-group",children:[]},{value:"Get dataset",id:"get-dataset",children:[]},{value:"Get chart",id:"get-chart",children:[]},{value:"Get dashboard",id:"get-dashboard",children:[]},{value:"Get business-term",id:"get-business-term",children:[]},{value:"Get all users",id:"get-all-users",children:[]},{value:"Get all business terms",id:"get-all-business-terms",children:[]},{value:"Browse datasets",id:"browse-datasets",children:[]},{value:"Search users",id:"search-users",children:[]},{value:"Search datasets",id:"search-datasets",children:[]},{value:"Search dashboards",id:"search-dashboards",children:[]},{value:"Search business term",id:"search-business-term",children:[]},{value:"Search business terms owned by a user",id:"search-business-terms-owned-by-a-user",children:[]},{value:"Typeahead for datasets",id:"typeahead-for-datasets",children:[]},{value:"Typeahead for business term",id:"typeahead-for-business-term",children:[]},{value:"Get dataset ownership",id:"get-dataset-ownership",children:[]},{value:"Get dataset schema",id:"get-dataset-schema",children:[]},{value:"Get upstream datasets",id:"get-upstream-datasets",children:[]},{value:"Get downstream datasets",id:"get-downstream-datasets",children:[]}]}],d={toc:l};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DataHub GMS is a ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/"},"Rest.li")," service written in Java. It is following common\nRest.li server development practices and all data models are Pegasus(.pdl) models."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8"),"\ninstalled on your machine to be able to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub GMS"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DataHub GMS")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub GMS")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :gms:war:build\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub GMS"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),",",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/elasticsearch"},"Elasticsearch")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/mysql"},"MySQL")," Docker containers are up and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"Quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub GMS")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :gms:war:run\n")),(0,o.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,o.kt)("p",null,"You can access basic documentation on the API endpoints by opening the ",(0,o.kt)("inlineCode",{parentName:"p"},"/restli/docs")," endpoint in the browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -c \"import webbrowser; webbrowser.open('http://localhost:8080/restli/docs', new=2)\"\n")),(0,o.kt)("h2",{id:"sample-api-calls"},"Sample API Calls"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As GMS uses ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/spec/protocol"},"Rest.li 2.0 protocol"),", please make sure to add ",(0,o.kt)("inlineCode",{parentName:"p"},"-H 'X-RestLi-Protocol-Version:2.0.0'")," to all curl calls")),(0,o.kt)("h3",{id:"create-user"},"Create user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/corpUsers?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{"snapshot": {"aspects": [{"com.linkedin.identity.CorpUserInfo":{"active": true, "displayName": "Foo Bar", "fullName": "Foo Bar", "email": "fbar@linkedin.com"}}, {"com.linkedin.identity.CorpUserEditableInfo":{}}], "urn": "urn:li:corpuser:fbar"}}\'\n')),(0,o.kt)("h3",{id:"create-group"},"Create group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/corpGroups?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{"snapshot": {"aspects": [{"com.linkedin.identity.CorpGroupInfo":{"email": "dev@linkedin.com", "admins": ["urn:li:corpUser:jdoe"], "members": ["urn:li:corpUser:datahub", "urn:li:corpUser:jdoe"], "groups": []}}], "urn": "urn:li:corpGroup:dev"}}\'\n')),(0,o.kt)("h3",{id:"create-dataset"},"Create dataset"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/datasets?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{"snapshot": {"aspects":[{"com.linkedin.common.Ownership":{"owners":[{"owner":"urn:li:corpuser:fbar","type":"DATAOWNER"}],"lastModified":{"time":0,"actor":"urn:li:corpuser:fbar"}}},{"com.linkedin.dataset.UpstreamLineage":{"upstreams":[{"auditStamp":{"time":0,"actor":"urn:li:corpuser:fbar"},"dataset":"urn:li:dataset:(urn:li:dataPlatform:foo,barUp,PROD)","type":"TRANSFORMED"}]}},{"com.linkedin.common.InstitutionalMemory":{"elements":[{"url":"https://www.linkedin.com","description":"Sample doc","createStamp":{"time":0,"actor":"urn:li:corpuser:fbar"}}]}},{"com.linkedin.schema.SchemaMetadata":{"schemaName":"FooEvent","platform":"urn:li:dataPlatform:foo","version":0,"created":{"time":0,"actor":"urn:li:corpuser:fbar"},"lastModified":{"time":0,"actor":"urn:li:corpuser:fbar"},"hash":"","platformSchema":{"com.linkedin.schema.KafkaSchema":{"documentSchema":"{\\"type\\":\\"record\\",\\"name\\":\\"MetadataChangeEvent\\",\\"namespace\\":\\"com.linkedin.mxe\\",\\"doc\\":\\"Kafka event for proposing a metadata change for an entity.\\",\\"fields\\":[{\\"name\\":\\"auditHeader\\",\\"type\\":{\\"type\\":\\"record\\",\\"name\\":\\"KafkaAuditHeader\\",\\"namespace\\":\\"com.linkedin.avro2pegasus.events\\",\\"doc\\":\\"Header\\"}}]}"}},"fields":[{"fieldPath":"foo","description":"Bar","nativeDataType":"string","type":{"type":{"com.linkedin.schema.StringType":{}}}}]}}],"urn":"urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)"}}\'\n')),(0,o.kt)("h3",{id:"create-chart"},"Create chart"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/charts?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{"snapshot":{"aspects":[{"com.linkedin.chart.ChartInfo":{"title":"Baz Chart 1","description":"Baz Chart 1","inputs":[{"string":"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"}],"lastModified":{"created":{"time":0,"actor":"urn:li:corpuser:jdoe"},"lastModified":{"time":0,"actor":"urn:li:corpuser:datahub"}}}}],"urn":"urn:li:chart:(looker,baz1)"}}\'\n')),(0,o.kt)("h3",{id:"create-dashboards"},"Create dashboards"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/dashboards?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{"snapshot":{"aspects":[{"com.linkedin.dashboard.DashboardInfo":{"title":"Baz Dashboard","description":"Baz Dashboard","charts":["urn:li:chart:(looker,baz1)","urn:li:chart:(looker,baz2)"],"lastModified":{"created":{"time":0,"actor":"urn:li:corpuser:jdoe"},"lastModified":{"time":0,"actor":"urn:li:corpuser:datahub"}}}}],"urn":"urn:li:dashboard:(looker,baz)"}}\'\n')),(0,o.kt)("h3",{id:"get-all-dataplatforms"},"Get all dataplatforms"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -H 'X-RestLi-Protocol-Version:2.0.0' -H 'X-RestLi-Method: get_all' 'http://localhost:8080/dataPlatforms' | jq\n")),(0,o.kt)("h3",{id:"get-dataplatform"},"Get dataplatform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/dataPlatforms/hdfs?aspects=List(com.linkedin.dataplatform.DataPlatformInfo)\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n{\n  "name": "hdfs",\n  "dataPlatformInfo": {\n    "name": "hdfs",\n    "type": "FILE_SYSTEM",\n    "datasetNameDelimiter": "/"\n  }\n}\n')),(0,o.kt)("h3",{id:"get-user"},"Get user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/corpUsers/($params:(),name:fbar)\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n\n{\n  "editableInfo": {},\n  "username": "fbar",\n  "info": {\n    "displayName": "Foo Bar",\n    "active": true,\n    "fullName": "Foo Bar",\n    "email": "fbar@linkedin.com"\n  }\n}\n')),(0,o.kt)("h3",{id:"get-group"},"Get group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/corpGroups/($params:(),name:dev)\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n\n{\n  "name": "dev",\n  "info": {\n    "groups": [],\n    "email": "dev@linkedin.com",\n    "admins": [\n      "urn:li:corpuser:jdoe"\n    ],\n    "members": [\n      "urn:li:corpuser:datahub",\n      "urn:li:corpuser:jdoe"\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"get-dataset"},"Get dataset"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H \'X-RestLi-Protocol-Version:2.0.0\' -H \'X-RestLi-Method: get\' \'http://localhost:8080/datasets/($params:(),name:bar,origin:PROD,platform:urn%3Ali%3AdataPlatform%3Afoo)\' | jq\n\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)",\n  "ownership": {\n    "owners": [\n      {\n        "owner": "urn:li:corpuser:fbar",\n        "type": "DATAOWNER"\n      }\n    ],\n    "lastModified": {\n      "actor": "urn:li:corpuser:fbar",\n      "time": 0\n    }\n  },\n  "origin": "PROD",\n  "name": "bar",\n  "institutionalMemory": {\n    "elements": [\n      {\n        "createStamp": {\n          "actor": "urn:li:corpuser:fbar",\n          "time": 0\n        },\n        "description": "Sample doc",\n        "url": "https://www.linkedin.com"\n      }\n    ]\n  },\n  "schemaMetadata": {\n    "created": {\n      "actor": "urn:li:corpuser:fbar",\n      "time": 0\n    },\n    "platformSchema": {\n      "com.linkedin.schema.KafkaSchema": {\n        "documentSchema": "{\\"type\\":\\"record\\",\\"name\\":\\"MetadataChangeEvent\\",\\"namespace\\":\\"com.linkedin.mxe\\",\\"doc\\":\\"Kafka event for proposing a metadata change for an entity.\\",\\"fields\\":[{\\"name\\":\\"auditHeader\\",\\"type\\":{\\"type\\":\\"record\\",\\"name\\":\\"KafkaAuditHeader\\",\\"namespace\\":\\"com.linkedin.avro2pegasus.events\\",\\"doc\\":\\"Header\\"}}]}"\n      }\n    },\n    "lastModified": {\n      "actor": "urn:li:corpuser:fbar",\n      "time": 0\n    },\n    "schemaName": "FooEvent",\n    "fields": [\n      {\n        "fieldPath": "foo",\n        "description": "Bar",\n        "type": {\n          "type": {\n            "com.linkedin.schema.StringType": {}\n          }\n        },\n        "nativeDataType": "string"\n      }\n    ],\n    "version": 0,\n    "hash": "",\n    "platform": "urn:li:dataPlatform:foo"\n  },\n  "upstreamLineage": {\n    "upstreams": [\n      {\n        "auditStamp": {\n          "actor": "urn:li:corpuser:fbar",\n          "time": 0\n        },\n        "type": "TRANSFORMED",\n        "dataset": "urn:li:dataset:(urn:li:dataPlatform:foo,barUp,PROD)"\n      }\n    ]\n  },\n  "platform": "urn:li:dataPlatform:foo"\n}\n')),(0,o.kt)("h3",{id:"get-chart"},"Get chart"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/charts/($params:(),tool:looker,chartId:baz1)\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n\n{\n  "chartId": "baz1",\n  "tool": "looker",\n  "info": {\n    "description": "Baz Chart 1",\n    "lastModified": {\n      "created": {\n        "actor": "urn:li:corpuser:jdoe",\n        "time": 0\n      },\n      "lastModified": {\n        "actor": "urn:li:corpuser:datahub",\n        "time": 0\n      }\n    },\n    "title": "Baz Chart 1",\n    "inputs": [\n      {\n        "string": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"get-dashboard"},"Get dashboard"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/dashboards/($params:(),tool:looker,dashboardId:foo)\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n\n{\n  "dashboardId": "foo",\n  "tool": "looker",\n  "info": {\n    "description": "Foo Dashboard",\n    "charts": [],\n    "lastModified": {\n      "created": {\n        "actor": "urn:li:corpuser:jdoe",\n        "time": 0\n      },\n      "lastModified": {\n        "actor": "urn:li:corpuser:jdoe",\n        "time": 0\n      }\n    },\n    "title": "Foo Dashboard"\n  }\n}\n')),(0,o.kt)("h3",{id:"get-business-term"},"Get business-term"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/glossaryTerms/($params:(),name:instruments.FinancialInstrument_v1)\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n\n{\n  "urn": "urn:li:glossaryTerm:instruments.FinancialInstrument_v1",\n  "ownership": {\n    "owners": [\n      {\n        "owner": "urn:li:corpuser:jdoe",\n        "type": "DATAOWNER"\n      }\n    ],\n    "lastModified": {\n      "actor": "urn:li:corpuser:jdoe",\n      "time": 1581407189000\n    }\n  },\n  "glossaryTermInfo": {\n    "definition": "written contract that gives rise to both a financial asset of one entity and a financial liability of another entity",\n    "customProperties": {\n      "FQDN": "full"\n    },\n    "sourceRef": "FIBO",\n    "sourceUrl": "https://spec.edmcouncil.org/fibo/ontology/FBC/FinancialInstruments/FinancialInstruments/FinancialInstrument",\n    "termSource": "EXTERNAL"\n  }\n}\n')),(0,o.kt)("h3",{id:"get-all-users"},"Get all users"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H \'X-RestLi-Protocol-Version:2.0.0\' -H \'X-RestLi-Method: get_all\' \'http://localhost:8080/corpUsers\' | jq\n\n{\n  "elements": [\n    {\n      "editableInfo": {},\n      "username": "fbar",\n      "info": {\n        "displayName": "Foo Bar",\n        "active": true,\n        "fullName": "Foo Bar",\n        "email": "fbar@linkedin.com"\n      }\n    },\n    {\n      "editableInfo": {\n        "skills": [],\n        "teams": [],\n        "pictureLink": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"\n      },\n      "username": "ksahin",\n      "info": {\n        "displayName": "Kerem Sahin",\n        "active": true,\n        "fullName": "Kerem Sahin",\n        "email": "ksahin@linkedin.com"\n      }\n    },\n    {\n      "editableInfo": {\n        "skills": [],\n        "teams": [],\n        "pictureLink": "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"\n      },\n      "username": "datahub",\n      "info": {\n        "displayName": "Data Hub",\n        "active": true,\n        "fullName": "Data Hub",\n        "email": "datahub@linkedin.com"\n      }\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"get-all-business-terms"},"Get all business terms"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/glossaryTerms/\' -H \'X-RestLi-Protocol-Version:2.0.0\' -s | jq\n\n{\n  "elements": [\n    {\n      "urn": "urn:li:glossaryTerm:instruments.FinancialInstrument_v1",\n      "ownership": {\n        "owners": [\n          {\n            "owner": "urn:li:corpuser:jdoe",\n            "type": "DATAOWNER"\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:jdoe",\n          "time": 1581407189000\n        }\n      },\n      "glossaryTermInfo": {\n        "definition": "written contract that gives rise to both a financial asset of one entity and a financial liability of another entity",\n        "customProperties": {\n          "FQDN": "full"\n        },\n        "sourceRef": "FIBO",\n        "sourceUrl": "https://spec.edmcouncil.org/fibo/ontology/FBC/FinancialInstruments/FinancialInstruments/FinancialInstrument",\n        "termSource": "EXTERNAL"\n      }\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"browse-datasets"},"Browse datasets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?action=browse" -d \'{"path": "", "start": 0, "limit": 10}\' -X POST -H \'X-RestLi-Protocol-Version: 2.0.0\' | jq\n\n{\n  "value": {\n    "numEntities": 0,\n    "metadata": {\n      "totalNumEntities": 2,\n      "path": "",\n      "groups": [\n        {\n          "name": "prod",\n          "count": 2\n        }\n      ]\n    },\n    "entities": [],\n    "pageSize": 10,\n    "from": 0\n  }\n}\n')),(0,o.kt)("h3",{id:"search-users"},"Search users"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/corpUsers?q=search&input=foo&" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "metadata": {\n    "searchResultMetadatas": [\n      {\n        "name": "title",\n        "aggregations": {}\n      }\n    ]\n  },\n  "elements": [\n    {\n      "editableInfo": {},\n      "username": "fbar",\n      "info": {\n        "displayName": "Foo Bar",\n        "active": true,\n        "fullName": "Foo Bar",\n        "email": "fbar@linkedin.com"\n      }\n    }\n  ],\n  "paging": {\n    "total": 1,\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"search-datasets"},"Search datasets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?q=search&input=bar" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "metadata": {\n    "searchResultMetadatas": [\n      {\n        "name": "platform",\n        "aggregations": {\n          "foo": 1\n        }\n      },\n      {\n        "name": "origin",\n        "aggregations": {\n          "prod": 1\n        }\n      }\n    ]\n  },\n  "elements": [\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)",\n      "origin": "PROD",\n      "name": "bar",\n      "platform": "urn:li:dataPlatform:foo"\n    }\n  ],\n  "paging": {\n    "total": 1,\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"search-dashboards"},"Search dashboards"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/dashboards?q=search&input=looker" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "metadata": {\n    "urns": [\n      "urn:li:dashboard:(looker,baz)"\n    ],\n    "searchResultMetadatas": [\n      {\n        "name": "tool",\n        "aggregations": {\n          "looker": 1\n        }\n      },\n      {\n        "name": "access",\n        "aggregations": {}\n      }\n    ]\n  },\n  "elements": [\n    {\n      "dashboardId": "baz",\n      "tool": "looker",\n      "info": {\n        "description": "Baz Dashboard",\n        "charts": [\n          "urn:li:chart:(looker,baz1)",\n          "urn:li:chart:(looker,baz2)"\n        ],\n        "lastModified": {\n          "created": {\n            "actor": "urn:li:corpuser:jdoe",\n            "time": 0\n          },\n          "lastModified": {\n            "actor": "urn:li:corpuser:datahub",\n            "time": 0\n          }\n        },\n        "title": "Baz Dashboard"\n      }\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "total": 1,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"search-business-term"},"Search business term"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/glossaryTerms?q=search&input=FinancialInstrument_v1&start=0&count=10" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "metadata": {\n    "urns": [\n      "urn:li:glossaryTerm:instruments.InstrumentIdentifier"\n    ],\n    "searchResultMetadatas": []\n  },\n  "elements": [\n    {\n      "name": "bidTime",\n      "ownership": {\n        "owners": [\n          {\n            "owner": "urn:li:corpuser:jdoe",\n            "type": "DATAOWNER"\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:jdoe",\n          "time": 1581407189000\n        }\n      },\n      "glossaryTermInfo": {\n          "definition": "business term definition",\n          "sourceRef": "FIBO",\n          "sourceUrl": "https://spec.edmcouncil.org/fibo/ontology/FND/DatesAndTimes/FinancialDates/DateTime",\n          "termSource": "EXTERNAL"\n       }\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "total": 1,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"search-business-terms-owned-by-a-user"},"Search business terms owned by a user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/glossaryTerms?q=search&input=owners%3Adatahub&start=0&count=10" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "metadata": {\n    "urns": [\n      "urn:li:glossaryTerm:instruments.InstrumentIdentifier"\n    ],\n    "searchResultMetadatas": []\n  },\n  "elements": [\n    {\n      "name": "bidTime",\n      "ownership": {\n        "owners": [\n          {\n            "owner": "urn:li:corpuser:jdoe",\n            "type": "DATAOWNER"\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:jdoe",\n          "time": 1581407189000\n        }\n      },\n      "glossaryTermInfo": {\n          "definition": "business term definition",\n          "sourceRef": "FIBO",\n          "sourceUrl": "https://spec.edmcouncil.org/fibo/ontology/FND/DatesAndTimes/FinancialDates/DateTime",\n          "termSource": "EXTERNAL"\n        }\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "total": 1,\n    "links": []\n  }\n}\n')),(0,o.kt)("h3",{id:"typeahead-for-datasets"},"Typeahead for datasets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?action=autocomplete" -d \'{"query": "bar", "field": "name", "limit": 10, "filter": {"criteria": []}}\' -X POST -H \'X-RestLi-Protocol-Version: 2.0.0\' | jq\n\n{\n  "value": {\n    "query": "bar",\n    "suggestions": [\n      "bar"\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"typeahead-for-business-term"},"Typeahead for business term"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "http://localhost:8080/glossaryTerms?action=autocomplete" -d \'{"query": "defin", "field": "definition", "limit": 10, "filter": {"criteria": []}}\' -X POST -H \'X-RestLi-Protocol-Version: 2.0.0\' | jq\n\n{\n  "value": {\n    "suggestions": [\n      "business term definition"\n    ],\n    "query": "defin"\n  }\n}\n')),(0,o.kt)("h3",{id:"get-dataset-ownership"},"Get dataset ownership"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H \'X-RestLi-Protocol-Version:2.0.0\' -H \'X-RestLi-Method: get\' \'http://localhost:8080/datasets/($params:(),name:bar,origin:PROD,platform:urn%3Ali%3AdataPlatform%3Afoo)/rawOwnership/0\' | jq\n\n{\n  "owners": [\n    {\n      "owner": "urn:li:corpuser:fbar",\n      "type": "DATAOWNER"\n    },\n    {\n      "owner": "urn:li:corpuser:ksahin",\n      "type": "DATAOWNER"\n    }\n  ],\n  "lastModified": {\n    "actor": "urn:li:corpuser:ksahin",\n    "time": 1568015476480\n  }\n}\n')),(0,o.kt)("h3",{id:"get-dataset-schema"},"Get dataset schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H \'X-RestLi-Protocol-Version:2.0.0\' -H \'X-RestLi-Method: get\' \'http://localhost:8080/datasets/($params:(),name:bar,origin:PROD,platform:urn%3Ali%3AdataPlatform%3Afoo)/schema/0\' | jq\n\n{\n  "created": {\n    "actor": "urn:li:corpuser:fbar",\n    "time": 0\n  },\n  "platformSchema": {\n    "com.linkedin.schema.KafkaSchema": {\n      "documentSchema": "{\\"type\\":\\"record\\",\\"name\\":\\"MetadataChangeEvent\\",\\"namespace\\":\\"com.linkedin.mxe\\",\\"doc\\":\\"Kafka event for proposing a metadata change for an entity.\\",\\"fields\\":[{\\"name\\":\\"auditHeader\\",\\"type\\":{\\"type\\":\\"record\\",\\"name\\":\\"KafkaAuditHeader\\",\\"namespace\\":\\"com.linkedin.avro2pegasus.events\\",\\"doc\\":\\"Header\\"}}]}"\n    }\n  },\n  "lastModified": {\n    "actor": "urn:li:corpuser:fbar",\n    "time": 0\n  },\n  "schemaName": "FooEvent",\n  "fields": [\n    {\n      "fieldPath": "foo",\n      "description": "Bar",\n      "type": {\n        "type": {\n          "com.linkedin.schema.StringType": {}\n        }\n      },\n      "nativeDataType": "string"\n    }\n  ],\n  "version": 0,\n  "platform": "urn:li:dataPlatform:foo",\n  "hash": ""\n}\n')),(0,o.kt)("h3",{id:"get-upstream-datasets"},"Get upstream datasets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H \'X-RestLi-Protocol-Version:2.0.0\' -H \'X-RestLi-Method: get\' \'http://localhost:8080/datasets/($params:(),name:bar,origin:PROD,platform:urn%3Ali%3AdataPlatform%3Afoo)/upstreamLineage/0\' | jq\n\n{\n  "upstreams": [\n    {\n      "auditStamp": {\n        "actor": "urn:li:corpuser:fbar",\n        "time": 0\n      },\n      "type": "TRANSFORMED",\n      "dataset": "urn:li:dataset:(urn:li:dataPlatform:foo,barUp,PROD)"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"get-downstream-datasets"},"Get downstream datasets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H \'X-RestLi-Protocol-Version:2.0.0\' -H \'X-RestLi-Method: get\' \'http://localhost:8080/datasets/($params:(),name:barUp,origin:PROD,platform:urn%3Ali%3AdataPlatform%3Afoo)/downstreamLineage\' | jq\n\n{\n  "downstreams": [\n    {\n      "type": "TRANSFORMED",\n      "auditStamp": {\n        "actor": "urn:li:corpuser:fbar",\n        "time": 0\n      },\n      "dataset": "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)"\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);