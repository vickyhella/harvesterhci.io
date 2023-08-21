"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[7368],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return v}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),v=a,h=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return t?n.createElement(h,i(i({ref:r},d),{},{components:t})):n.createElement(h,i({ref:r},d))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2761:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:2,keywords:["Harvester","harvester","Rancher","rancher","Provisioning VMs in the Harvester cluster","Harvester Node Driver"]},s="Harvester Node Driver",c={unversionedId:"rancher-intergration/node-driver",id:"rancher-intergration/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/docs/rancher-intergration/node-driver.md",sourceDirName:"rancher-intergration",slug:"/rancher-intergration/node-driver",permalink:"/rancher-intergration/node-driver",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/static/docs/rancher-intergration/node-driver.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["Harvester","harvester","Rancher","rancher","Provisioning VMs in the Harvester cluster","Harvester Node Driver"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Integration",permalink:"/rancher-intergration/rancher-integration"},next:{title:"Developer Mode Installation",permalink:"/development/dev-mode"}},d={},u=[{value:"Add Harvester Node Driver",id:"add-harvester-node-driver",level:2},{value:"ISO Mode",id:"iso-mode",level:3},{value:"App Mode",id:"app-mode",level:3},{value:"Create Cluster",id:"create-cluster",level:2},{value:"Create Node Template",id:"create-node-template",level:2}],p={toc:u};function v(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"harvester-node-driver"},"Harvester Node Driver"),(0,o.kt)("p",null,"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,o.kt)("p",null,"A node driver is the same as a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/drivers/"},"Docker Machine driver"),", and the project repo is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"harvester/docker-machine-driver-harvester"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Available as of v0.2.0")),(0,o.kt)("h2",{id:"add-harvester-node-driver"},"Add Harvester Node Driver"),(0,o.kt)("h3",{id:"iso-mode"},"ISO Mode"),(0,o.kt)("p",null,"In the ISO mode, the Harvester driver has been installed by default, and the user does not need to add it manually."),(0,o.kt)("h3",{id:"app-mode"},"App Mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Rancher")," UI."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, choose ",(0,o.kt)("strong",{parentName:"li"},"Tools > Drivers")," in the navigation bar. From the ",(0,o.kt)("strong",{parentName:"li"},"Drivers")," page, select the ",(0,o.kt)("strong",{parentName:"li"},"Node Drivers")," tab. In versions before v2.2.0, you can select ",(0,o.kt)("strong",{parentName:"li"},"Node Drivers")," directly in the navigation bar."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Node Driver"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Download URL"),"(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/harvester/docker-machine-driver-harvester/releases"},"docker-machine-driver-harvester"),") and ",(0,o.kt)("strong",{parentName:"li"},"Custom UI URL"),"(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/harvester/ui-driver-harvester/releases"},"ui-driver-harvester"),")."),(0,o.kt)("li",{parentName:"ol"},"Add domains to the ",(0,o.kt)("strong",{parentName:"li"},"Whitelist Domains"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h2",{id:"create-cluster"},"Create Cluster"),(0,o.kt)("p",null,"Now users can access the Rancher UI from Harvester, spin up Kubernetes clusters on top of the Harvester cluster, and manage them there."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Prerequisite: VLAN network is required for Harvester node driver")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, click ",(0,o.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,o.kt)("li",{parentName:"ol"},"Select a ",(0,o.kt)("a",{parentName:"li",href:"#create-node-template"},"Template"),"."),(0,o.kt)("li",{parentName:"ol"},"Fill out the rest of the form for creating a cluster."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/cluster-provisioning/#launching-kubernetes-and-provisioning-nodes-in-an-infrastructure-provider"},"launching kubernetes and provisioning nodes in an infrastructure provider")," for more info."),(0,o.kt)("h2",{id:"create-node-template"},"Create Node Template"),(0,o.kt)("p",null,"You can use the Harvester node driver to create node templates and eventually node pools for your Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("strong",{parentName:"li"},"Account Access"),". For Harvester embedding Rancher, you can choose ",(0,o.kt)("strong",{parentName:"li"},"Internal Harvester"),", which will use the ",(0,o.kt)("inlineCode",{parentName:"li"},"harvester.harvester-system")," as the default ",(0,o.kt)("inlineCode",{parentName:"li"},"Host"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"8443")," as the default ",(0,o.kt)("inlineCode",{parentName:"li"},"Port"),"."),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("strong",{parentName:"li"},"Instance Options"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configure the CPU, memory, disk, and disk bus."),(0,o.kt)("li",{parentName:"ul"},"Select an OS image that is compatible with the ",(0,o.kt)("inlineCode",{parentName:"li"},"cloud-init")," config."),(0,o.kt)("li",{parentName:"ul"},"Select a network that the node driver is able to connect to, currently only ",(0,o.kt)("inlineCode",{parentName:"li"},"VLAN")," is supported."),(0,o.kt)("li",{parentName:"ul"},"Enter the SSH User, the username will be used to ssh to nodes. For example, a default user of the Ubuntu cloud image will be ",(0,o.kt)("inlineCode",{parentName:"li"},"ubuntu"),"."))),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"RANCHER TEMPLATE")," name.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/cluster-provisioning/rke-clusters/node-pools/"},"nodes hosted by an infrastructure provider")," for more info."))}v.isMDXComponent=!0}}]);