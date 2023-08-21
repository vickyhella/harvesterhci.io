"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[2501],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2856:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:40,keywords:["Harvester","harvester","Rancher","rancher","network","Harvester Network"]},l="Harvester Network",p={unversionedId:"harvester-network",id:"harvester-network",title:"Harvester Network",description:"Summary",source:"@site/docs/harvester-network.md",sourceDirName:".",slug:"/harvester-network",permalink:"/harvester-network",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/static/docs/harvester-network.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,keywords:["Harvester","harvester","Rancher","rancher","network","Harvester Network"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading Harvester",permalink:"/upgrade"},next:{title:"Import Images",permalink:"/import-image"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Management Network",id:"management-network",level:3},{value:"VLAN",id:"vlan",level:3},{value:"Enabling VLAN in the Harvester UI",id:"enabling-vlan-in-the-harvester-ui",level:2}],h={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"harvester-network"},"Harvester Network"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester"},"Harvester")," is built on Kubernetes, which uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"CNI")," as an interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-ui"},"Harvester UI")," integrates the Harvester network to provide a user-friendly way to configure networks for VMs."),(0,i.kt)("p",null,"By version 0.2, Harvester supports two kinds of networks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"management network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Virtual_LAN"},"VLAN"))),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("h3",{id:"management-network"},"Management Network"),(0,i.kt)("p",null,"Harvester adopts ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel"},"flannel")," as the default CNI to implement the management network. It's an internal network, which means the user can only access the VM's management network within its cluster nodes or pods."),(0,i.kt)("h3",{id:"vlan"},"VLAN"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," leverages the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI plugins to implement the VLAN."),(0,i.kt)("p",null,"Below is a use case of the VLAN in Harvester."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(4630).Z,width:"1578",height:"1214"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Harvester network-controller uses a bridge for a node and a pair of veth for a VM to implement the VLAN. The bridge acts as a switch to forward the network traffic from or to VMs and the veth pair is like the connected ports between vms and switch."),(0,i.kt)("li",{parentName:"ul"},"VMs within the same VLAN is able to communicate with each other, while the VMs within different VLANs can't."),(0,i.kt)("li",{parentName:"ul"},"The external switch ports connected with the hosts or other devices(such as DHCP server) should be set as trunk or hybrid type and permit the specified VLANs."),(0,i.kt)("li",{parentName:"ul"},"Users can use VLAN with ",(0,i.kt)("inlineCode",{parentName:"li"},"PVID")," (default 1) to communicate with any normal untagged traffic.")),(0,i.kt)("h2",{id:"enabling-vlan-in-the-harvester-ui"},"Enabling VLAN in the Harvester UI"),(0,i.kt)("p",null,"Enable VLAN via going to ",(0,i.kt)("strong",{parentName:"p"},"Setting > vlan")," to enable VLAN and input a valid default physical NIC name for the VLAN."),(0,i.kt)("p",null,"The first physical NIC name of each Harvester node always defaults to eth0. It is recommended to choose a separate NIC for the VLAN other than the one used for the management network (the one selected during the Harvester installation) for better network performance and isolation."),(0,i.kt)("p",null,"Note: Modifying the default VLAN network setting will not change the existing configured host networks."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(1027).Z,width:"3484",height:"1040"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"(optional) Users can always customize each node's VLAN network configuration via going to the ",(0,i.kt)("strong",{parentName:"p"},"HOST > Network")," tab."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",src:n(1924).Z,width:"3494",height:"1202"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A new VLAN network is created by going to the ",(0,i.kt)("strong",{parentName:"p"},"Advanced > Networks")," page and clicking the ",(0,i.kt)("strong",{parentName:"p"},"Create")," button."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",src:n(1255).Z,width:"3484",height:"1164"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The network is configured when the VM is created."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only the first network interface card will be enabled by default. Users can either choose to use a management network or VLAN network. Note: You will need to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Install guest agent")," option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Options")," tab to get the VLAN network IP address from the Harvester UI."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",src:n(726).Z,width:"3828",height:"1678"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Users can choose to add one or multiple network interface cards. Additional network interface card configurations can be set via cloud-init network data, e.g.:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"version: 1\nconfig:\n  - type: physical\n    name: enp1s0 # name is varies upon OS image\n    subnets:\n      - type: dhcp\n  - type: physical\n    name: enp2s0\n    subnets:\n      - type: DHCP\n")))))))}m.isMDXComponent=!0},1255:function(e,t,n){t.Z=n.p+"assets/images/create-network-12118df6ce8f12bce58b3fb920269726.png"},1027:function(e,t,n){t.Z=n.p+"assets/images/enable-vlan-b9e8d94ec9e94fa77925f202295474ad.png"},1924:function(e,t,n){t.Z=n.p+"assets/images/node-network-configuration-a5e1dcf603159d868b0a0fc9d8a4aa97.png"},4630:function(e,t,n){t.Z=n.p+"assets/images/vlan-case-696fde4079834afd0a18b00e0c8e164c.png"},726:function(e,t,n){t.Z=n.p+"assets/images/vm-network-configuration-c5d72fce4f6df7cbc4ba2c00d76854d5.png"}}]);